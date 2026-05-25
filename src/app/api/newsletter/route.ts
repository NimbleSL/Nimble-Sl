import { NextRequest, NextResponse } from 'next/server';

const FORMSUBMIT_URL = 'https://formsubmit.co/ajax/nimblesoftwarelab@gmail.com';

export async function POST(request: NextRequest) {
  try {
    const { email, source } = await request.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
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
        _subject: `New Newsletter Signup: ${email}`,
        email,
        source: source || 'website',
      }),
    }).catch((err) => console.error('FormSubmit error (non-blocking):', err));

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Newsletter API error:', error);
    return NextResponse.json({ error: 'Failed to subscribe' }, { status: 500 });
  }
}
