import { NextRequest, NextResponse } from 'next/server';

const FORMSUBMIT_URL = 'https://formsubmit.co/ajax/nimblesoftwarelab@gmail.com';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, projectType, budget, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Name, email, and message are required' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
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
        _subject: `New Contact: ${name}`,
        name,
        email,
        company: company || 'Not provided',
        project_type: projectType || 'Not specified',
        budget: budget || 'Not specified',
        message,
      }),
    }).catch((err) => console.error('FormSubmit error (non-blocking):', err));

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}
