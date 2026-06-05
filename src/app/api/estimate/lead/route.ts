import { NextRequest, NextResponse } from 'next/server';

const FORMSUBMIT_URL = 'https://formsubmit.co/ajax/info@nimblesl.com';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      name, email, phone, company,
      region, projectTypes, industry, features,
      scale, integration, timeline,
      projectSummary, totalCostLow, totalCostHigh,
      suggestedTimeline, teamSize,
    } = body;

    if (!name || !email) {
      return NextResponse.json({ error: 'Name and email are required' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
    }

    const regionLabel = region === 'local' ? 'Local (BD/IN/PK)' : region === 'midtier' ? 'Mid-tier (AE/MY/BR)' : 'International (US/UK/EU)';
    const costRange = (totalCostLow && totalCostHigh)
      ? `$${Number(totalCostLow).toLocaleString('en-US')} – $${Number(totalCostHigh).toLocaleString('en-US')} USD`
      : 'Not computed';

    // Fire-and-forget — never block the user on FormSubmit status
    fetch(FORMSUBMIT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Referer': 'https://nimblesl.com',
        'Origin': 'https://nimblesl.com',
      },
      body: JSON.stringify({
        _subject: `[Estimator Lead] ${name} — ${costRange} | NimbleSL`,
        _replyto: email,
        '--- CONTACT ---': '---',
        name,
        email,
        phone: phone || 'Not provided',
        company: company || 'Not provided',
        region: regionLabel,
        '--- PROJECT ---': '---',
        project_types: Array.isArray(projectTypes) ? projectTypes.join(', ') : (projectTypes || 'Not provided'),
        industry: industry || 'Not provided',
        features: Array.isArray(features) ? features.join(', ') : (features || 'Not provided'),
        scale: scale || 'Not provided',
        integration: integration || 'Not provided',
        timeline: timeline || 'Not provided',
        '--- ESTIMATE ---': '---',
        project_summary: projectSummary || 'Not provided',
        estimated_cost: costRange,
        estimated_timeline: suggestedTimeline || 'Not provided',
        team_size: teamSize || 'Not provided',
      }),
    }).catch((err) => console.error('FormSubmit error (non-blocking):', err));

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Estimate lead API error:', error);
    return NextResponse.json({ error: 'Failed to send lead data' }, { status: 500 });
  }
}
