import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    
    // Fallback values
    const title = searchParams.has('title') 
      ? searchParams.get('title')?.slice(0, 100) 
      : 'NimbleSL Engineering';
      
    const category = searchParams.has('category')
      ? searchParams.get('category')
      : 'Software Development';

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            padding: '80px',
            backgroundColor: '#0a0e1a', // NimbleSL dark bg
            backgroundImage: 'radial-gradient(circle at top left, #3B82F620 0%, transparent 60%)',
          }}
        >
          {/* Top section: Category Tag */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: '#3B82F61A',
              border: '1px solid #3B82F644',
              borderRadius: '8px',
              padding: '12px 24px',
            }}
          >
            <span
              style={{
                fontSize: '24px',
                color: '#60A5FA', // Blue 400
                fontFamily: 'monospace',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
              }}
            >
              {category}
            </span>
          </div>

          {/* Middle section: Title */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: '20px',
              marginTop: '40px',
              marginBottom: '40px',
            }}
          >
            <h1
              style={{
                fontSize: '72px',
                fontWeight: 800,
                color: '#ffffff',
                lineHeight: 1.1,
                margin: 0,
                letterSpacing: '-0.02em',
              }}
            >
              {title}
            </h1>
          </div>

          {/* Bottom section: Branding */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              borderTop: '2px solid #1E293B',
              paddingTop: '40px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  backgroundColor: '#3B82F6',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '32px',
                  fontWeight: 800,
                }}
              >
                N
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '28px', fontWeight: 700, color: '#f8fafc' }}>
                  NimbleSL
                </span>
                <span style={{ fontSize: '20px', color: '#94a3b8' }}>
                  nimblesl.com
                </span>
              </div>
            </div>
            
            <div style={{ fontSize: '24px', color: '#10B981', fontWeight: 600 }}>
              Silicon Valley Engineering. Bangladesh Pricing.
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
