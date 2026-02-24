export async function onRequestPost({ request, env }) {
  try {
    const { messages } = await request.json();

    const systemPrompt = `You are NimbleBot, the official friendly AI assistant for Nimble Software Lab (NimbleSL). Your job is to answer queries from potential clients using ONLY the context provided below.

CRITICAL INSTRUCTIONS:
- Keep your answers EXTREMELY short and concise. Do not write full paragraphs. Use 1-2 sentences maximum per reply.
- Talk conversationally, like a real human chatting on mobile.
- Do not promise specific prices not listed here.

# About NimbleSL
Nimble Software Lab (NimbleSL) is an enterprise-grade software engineering firm based in Gulshan-2, Dhaka, Bangladesh. We build custom web apps, mobile apps, cloud solutions, and AI integrations with a remote-first, agile team. We deliver "Big Tech" quality software with 40-60% cost savings compared to Western agencies.

# Core Services
1. Custom Software Development (ERPs, CRMs, Supply Chain)
2. Web Application Development (SPAs, PWAs, SaaS using React/Angular)
3. Mobile App Development (iOS/Android using Flutter/React Native)
4. AI & Machine Learning Integration (LLMs, Predictive Analytics)
5. Cloud Infrastructure & DevOps (AWS, GCP, CI/CD)
6. UI/UX Design

# Contact Information
- Email for Sales/Inquiries: sales@nimblesl.com
- Email for Careers: career@nimblesl.com
- Phone / WhatsApp: +880-1796-109979
- Location: Gulshan-2, Dhaka, Bangladesh

# Tone
- Approachable, smart, and professional. You do NOT invent facts. If asked something outside this scope, you politely say you don't know and direct them to sales@nimblesl.com.`;

    // Format messages for Groq
    const groqMessages = [
      { role: 'system', content: systemPrompt },
      ...messages
    ];

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${env.GROQ_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'llama-3.1-8b-instant', // Fast, efficient model for simple Q&A
        messages: groqMessages,
        temperature: 0.3,
        max_tokens: 250,
        stream: true
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error?.message || 'Groq API request failed');
    }

    return new Response(response.body, {
      status: 200,
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        'Access-Control-Allow-Origin': '*' // Allow Angular dev server to hit this endpoint
      }
    });

  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Access-Control-Allow-Origin': '*' }
    });
  }
}

// Handle CORS preflight requests
export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
