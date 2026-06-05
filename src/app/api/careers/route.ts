import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';

const FORMSUBMIT_URL = 'https://formsubmit.co/ajax/info@nimblesl.com';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const portfolio = formData.get('portfolio') as string;
    const role = formData.get('role') as string;
    const coverLetter = formData.get('coverLetter') as string;
    const resume = formData.get('resume') as File | null;

    if (!name || !email || !coverLetter || !resume) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
    }

    // Format role nicely
    const roleMap: Record<string, string> = {
      sse: 'Senior Software Engineer (Full-Stack)',
      aiml: 'AI / Machine Learning Engineer',
      smdev: 'Senior Mobile Application Developer',
      qae: 'QA / Test Automation Engineer',
      'speculative-engineering': 'General Application (Engineering Track)',
      'speculative-design': 'General Application (Design Track)',
      'speculative-product': 'General Application (Product Track)',
      'speculative-qa': 'General Application (QA Automation Track)',
    };
    const roleName = roleMap[role] || role;

    // Prepare FormData to send to FormSubmit
    const formSubmitData = new FormData();
    formSubmitData.append('_subject', `[Careers Application] ${roleName} - ${name}`);
    formSubmitData.append('Name', name);
    formSubmitData.append('Email', email);
    formSubmitData.append('Phone', phone || 'Not provided');
    formSubmitData.append('Portfolio / LinkedIn / Github', portfolio || 'Not provided');
    formSubmitData.append('Position Applied', roleName);
    formSubmitData.append('Cover Letter / Details', coverLetter);
    
    // FormSubmit expects 'attachment' for file attachments
    formSubmitData.append('attachment', resume);

    // Non-blocking forward to FormSubmit
    fetch(FORMSUBMIT_URL, {
      method: 'POST',
      body: formSubmitData,
      headers: {
        'Referer': 'https://nimblesl.com',
        'Origin': 'https://nimblesl.com',
      },
    })
      .then(async (res) => {
        const textResponse = await res.text();
        console.log('FormSubmit Careers response:', textResponse);
      })
      .catch((err) => console.error('FormSubmit Careers error (non-blocking):', err));

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Careers API error:', error);
    return NextResponse.json({ error: 'Failed to process application' }, { status: 500 });
  }
}
