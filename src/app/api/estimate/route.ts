import { NextRequest, NextResponse } from 'next/server';
import { getGroqClient } from '@/lib/groq/client';
import { ESTIMATOR_SYSTEM_PROMPT } from '@/lib/groq/estimatorPrompt';
import type {
  IEstimatorInput,
  IAIEffortResponse,
  IEstimatorResult,
  IModule,
  IPhase,
  IRegion,
} from '@/lib/types/estimator';
import { randomUUID } from 'crypto';

// ─── Rate cards (USD / hour per role) ─────────────────────────────────────────

const RATE_CARDS: Record<IRegion, Record<string, number>> = {
  local: {
    frontend: 12, backend: 14, mobile: 14,
    designer: 12, qa: 10, pm: 14, devops: 14, lead: 18,
  },
  midtier: {
    frontend: 18, backend: 20, mobile: 20,
    designer: 18, qa: 15, pm: 20, devops: 20, lead: 25,
  },
  international: {
    frontend: 22, backend: 25, mobile: 25,
    designer: 22, qa: 18, pm: 25, devops: 25, lead: 30,
  },
};

// Default blended hourly rate if teamComposition is empty / missing
const BLENDED_DEFAULTS: Record<IRegion, number> = {
  local: 13,
  midtier: 19,
  international: 24,
};

// Minimum total project floors
const FLOORS: Record<IRegion, { default: number; saas: number }> = {
  local:         { default: 3_000,  saas: 8_000 },
  midtier:       { default: 8_000,  saas: 18_000 },
  international: { default: 15_000, saas: 30_000 },
};

// ─── Pricing helpers ───────────────────────────────────────────────────────────

function round500(n: number): number {
  return Math.round(n / 500) * 500;
}

function blendedHourly(composition: Record<string, number>, region: IRegion): number {
  const rates = RATE_CARDS[region];
  let totalCost = 0;
  let totalCount = 0;
  for (const [role, count] of Object.entries(composition)) {
    const rate = rates[role] ?? rates['backend']; // fallback to backend rate
    totalCost += rate * count;
    totalCount += count;
  }
  if (totalCount === 0) return BLENDED_DEFAULTS[region];
  return totalCost / totalCount;
}

function calculateModuleCost(
  mandays: { low: number; high: number },
  composition: Record<string, number>,
  region: IRegion
): { low: number; high: number } {
  const hourly = blendedHourly(composition, region);
  const hoursPerManday = 8;
  return {
    low: round500(mandays.low * hoursPerManday * hourly),
    high: round500(mandays.high * hoursPerManday * hourly),
  };
}

function applyPricing(
  aiResponse: IAIEffortResponse,
  region: IRegion,
  hasSaaS: boolean
): IEstimatorResult {
  // Compute cost for each module
  const modules: IModule[] = aiResponse.modules.map((m) => ({
    ...m,
    costRange: calculateModuleCost(m.mandays, m.teamComposition, region),
  }));

  // Total cost is sum of all module costs
  const rawLow = modules.reduce((s, m) => s + m.costRange.low, 0);
  const rawHigh = modules.reduce((s, m) => s + m.costRange.high, 0);

  // Apply floor minimum
  const floor = hasSaaS ? FLOORS[region].saas : FLOORS[region].default;
  const totalLow = Math.max(round500(rawLow), floor);
  const totalHigh = Math.max(round500(rawHigh), Math.round(floor * 1.3 / 500) * 500);

  // Distribute phase costs proportionally from total
  const phases: IPhase[] = aiResponse.phases.map((p) => ({
    ...p,
    costRange: {
      low: round500(totalLow * (p.mandaysPercent / 100)),
      high: round500(totalHigh * (p.mandaysPercent / 100)),
    },
  }));

  return {
    projectSummary: aiResponse.projectSummary,
    scope: aiResponse.scope,
    modules,
    totalMandays: aiResponse.totalMandays,
    totalCost: { low: totalLow, high: totalHigh, currency: 'USD' },
    suggestedTimeline: aiResponse.suggestedTimeline,
    teamSize: aiResponse.teamSize,
    phases,
    riskFactors: aiResponse.riskFactors ?? [],
    recommendations: aiResponse.recommendations ?? [],
    tech_stack: aiResponse.tech_stack,
    similar_project: aiResponse.similar_project ?? null,
    similar_project_demo: aiResponse.similar_project_demo ?? null,
    region,
    fallback: false,
  };
}

// ─── Fallback rule-based estimate ─────────────────────────────────────────────

// Base mandays per deliverable type
const BASE_MANDAYS: Record<string, [number, number]> = {
  'Customer-facing Web App':          [30, 50],
  'Mobile App (iOS & Android)':       [40, 65],
  'Admin / Back-office Portal':       [20, 35],
  'SaaS Platform':                    [70, 120],
  'API / Backend / Microservices':    [25, 45],
  'AI / ML Product or Feature':       [50, 90],
  'Desktop App':                      [40, 70],
  'Cross-platform App':               [50, 80],
  'Browser Extension / Plugin':       [15, 28],
  'UI/UX Design & Prototyping Only':  [18, 30],
};

function buildFallbackResult(input: IEstimatorInput, region: IRegion): IEstimatorResult {
  const hasSaaS = input.projectTypes.includes('SaaS Platform');
  const hourly = BLENDED_DEFAULTS[region];

  // Sum mandays, apply shared-infra discount for multi-deliverable
  let totalLowMd = 0;
  let totalHighMd = 0;
  for (const t of input.projectTypes) {
    const [lo, hi] = BASE_MANDAYS[t] ?? [25, 45];
    totalLowMd += lo;
    totalHighMd += hi;
  }
  if (input.projectTypes.length >= 2) {
    totalLowMd = Math.round(totalLowMd * 0.82);
    totalHighMd = Math.round(totalHighMd * 0.82);
  }

  const rawLow = round500(totalLowMd * 8 * hourly);
  const rawHigh = round500(totalHighMd * 8 * hourly);
  const floor = hasSaaS ? FLOORS[region].saas : FLOORS[region].default;

  const totalLow = Math.max(rawLow, floor);
  const totalHigh = Math.max(rawHigh, Math.round(floor * 1.3 / 500) * 500);

  const phasePercents = [8, 12, 55, 18, 7];
  const phaseNames = ['Discovery & Architecture', 'UI/UX Design', 'Core Development', 'QA & Testing', 'Deployment & Launch'];
  const phaseTimelines = ['1–2 weeks', '2–3 weeks', `${Math.round(totalLowMd / 20)}–${Math.round(totalHighMd / 20)} weeks`, '2–3 weeks', '1 week'];

  const phases: IPhase[] = phaseNames.map((name, i) => ({
    name,
    modules: [],
    timeline: phaseTimelines[i],
    mandaysPercent: phasePercents[i],
    costRange: {
      low: round500(totalLow * phasePercents[i] / 100),
      high: round500(totalHigh * phasePercents[i] / 100),
    },
  }));

  return {
    projectSummary: `Estimate for ${input.projectTypes.join(' + ')} in ${input.industry}.`,
    scope: `This is a rule-based fallback estimate. A more detailed AI analysis was not available. Scope covers: ${input.features.join(', ')}.`,
    modules: [],
    totalMandays: { low: totalLowMd, high: totalHighMd },
    totalCost: { low: totalLow, high: totalHigh, currency: 'USD' },
    suggestedTimeline: `${Math.round(totalLowMd / 20)}–${Math.round(totalHighMd / 20)} weeks`,
    teamSize: '3–5 people',
    phases,
    riskFactors: ['This is a fallback estimate — please book a discovery call for a detailed breakdown.'],
    recommendations: ['Schedule a 30-minute discovery call with our team for a precise estimate.'],
    tech_stack: { frontend: [], backend: [], database: [], cloud: [], other: [] },
    similar_project: null,
    similar_project_demo: null,
    region,
    fallback: true,
  };
}

// ─── Route handler ─────────────────────────────────────────────────────────────

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const input: IEstimatorInput = body;
    const region: IRegion = (['local', 'midtier', 'international'].includes(body.region))
      ? body.region
      : 'midtier';

    if (!input.projectTypes || input.projectTypes.length === 0 || !input.industry || !input.features || input.features.length === 0) {
      return NextResponse.json({ error: 'Missing required fields: projectTypes, industry, features' }, { status: 400 });
    }

    const hasSaaS = input.projectTypes.includes('SaaS Platform');
    const hasAI = input.projectTypes.includes('AI / ML Product or Feature');
    const hasMobile = input.projectTypes.includes('Mobile App (iOS & Android)') || input.projectTypes.includes('Cross-platform App');
    const deliverableCount = input.projectTypes.length;

    const userPrompt = `DELIVERABLES (${deliverableCount} selected): ${input.projectTypes.join(', ')}
Industry: ${input.industry}
Features Requested: ${input.features.join(', ')}
Design Level: ${input.designStatus || 'Not specified'}
Expected Users at Launch: ${input.scale || 'Not specified'}
Existing System Integrations: ${input.integration || 'Not specified'}
Timeline Preference: ${input.timeline || 'Not specified'}
${input.description ? `Project Description: ${input.description}` : ''}
${input.referenceUrl ? `Reference URL: ${input.referenceUrl}` : ''}

Context flags: ${[
  hasSaaS ? 'SAAS_PLATFORM' : '',
  hasAI ? 'AI_ML_COMPONENT' : '',
  hasMobile ? 'MOBILE_DELIVERY' : '',
  deliverableCount > 1 ? `MULTI_DELIVERABLE_${deliverableCount}` : '',
].filter(Boolean).join(', ') || 'NONE'}

Generate a detailed module-level effort estimate. Return ONLY the JSON object — no dollar amounts.`;

    const groq = getGroqClient();

    let aiResponse: IAIEffortResponse;

    try {
      const completion = await groq.chat.completions.create({
        model: 'llama-3.3-70b-versatile',
        messages: [
          { role: 'system', content: ESTIMATOR_SYSTEM_PROMPT },
          { role: 'user', content: userPrompt },
        ],
        temperature: 0.4,
        max_tokens: 3000,
        response_format: { type: 'json_object' },
      });

      const raw = completion.choices[0]?.message?.content;
      if (!raw) throw new Error('Empty response from Groq');
      aiResponse = JSON.parse(raw) as IAIEffortResponse;

      // Validate essential structure
      if (!aiResponse.modules || !Array.isArray(aiResponse.modules) || aiResponse.modules.length === 0) {
        throw new Error('AI returned no modules');
      }
      if (!aiResponse.totalMandays) throw new Error('AI returned no totalMandays');

    } catch (aiError) {
      console.error('Groq AI error — using fallback:', aiError);
      const fallbackResult = buildFallbackResult(input, region);
      return NextResponse.json({
        success: true,
        estimation_id: randomUUID(),
        result: fallbackResult,
      });
    }

    const result = applyPricing(aiResponse, region, hasSaaS);

    return NextResponse.json({
      success: true,
      estimation_id: randomUUID(),
      result,
    });

  } catch (error) {
    console.error('Estimation API error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to generate estimation' },
      { status: 500 }
    );
  }
}
