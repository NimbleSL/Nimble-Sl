import { NextRequest, NextResponse } from 'next/server';
import { getGroqClient } from '@/lib/groq/client';
import { ESTIMATOR_SYSTEM_PROMPT } from '@/lib/groq/estimatorPrompt';
import type { IEstimatorInput, IEstimatorResult } from '@/lib/types/estimator';
import { randomUUID } from 'crypto';

export async function POST(request: NextRequest) {
  try {
    const input: IEstimatorInput = await request.json();

    if (!input.projectType || !input.industry || !input.features || input.features.length === 0) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    if (!input.description || input.description.length < 20) {
      return NextResponse.json(
        { error: 'Project description must be at least 20 characters' },
        { status: 400 }
      );
    }

    const userPrompt = `Project Type: ${input.projectType}
Industry: ${input.industry}
Features Requested: ${input.features.join(', ')}
Design Status: ${input.designStatus}
Timeline Preference: ${input.timeline}
Budget Range: ${input.budget}
Project Description: ${input.description}
${input.referenceUrl ? `Reference URL: ${input.referenceUrl}` : ''}

Generate a detailed project estimation following the JSON format exactly.`;

    const groq = getGroqClient();

    const completion = await groq.chat.completions.create({
      model: 'llama-3.1-8b-instant',
      messages: [
        { role: 'system', content: ESTIMATOR_SYSTEM_PROMPT },
        { role: 'user', content: userPrompt },
      ],
      temperature: 0.7,
      max_tokens: 2500,
      response_format: { type: 'json_object' },
    });

    const aiResponse = completion.choices[0]?.message?.content;
    if (!aiResponse) throw new Error('No response from Groq API');

    let aiResult: IEstimatorResult;
    try {
      aiResult = JSON.parse(aiResponse);
    } catch {
      throw new Error('Invalid JSON response from AI');
    }

    return NextResponse.json({
      success: true,
      estimation_id: randomUUID(),
      result: aiResult,
    });
  } catch (error) {
    console.error('Estimation API error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to generate estimation' },
      { status: 500 }
    );
  }
}
