import { NextRequest, NextResponse } from 'next/server';

const FORMSUBMIT_URL = 'https://formsubmit.co/ajax/nimblesoftwarelab@gmail.com';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, phone, projectSummary, costRange, timeline } = body;

    if (!name || !email) {
      return NextResponse.json({ error: 'Name and email are required' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
    }

    // Fire-and-forget — never block user on FormSubmit status
    fetch(FORMSUBMIT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Referer': 'https://nimblesl.com',
        'Origin': 'https://nimblesl.com',
      },
      body: JSON.stringify({
        _subject: `New Estimate Lead: ${name}`,
        name,
        email,
        company: company || 'Not provided',
        phone: phone || 'Not provided',
        project_summary: projectSummary || 'See estimator session',
        estimated_cost: costRange || 'See estimator session',
        estimated_timeline: timeline || 'See estimator session',
      }),
    }).catch((err) => console.error('FormSubmit error (non-blocking):', err));

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Estimate lead API error:', error);
    return NextResponse.json({ error: 'Failed to send lead data' }, { status: 500 });
  }
}
