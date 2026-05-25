import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: 'linear-gradient(135deg, #0A0E1A 0%, #0F1629 50%, #0A0E1A 100%)',
          position: 'relative',
        }}
      >
        {/* Grid pattern overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />

        {/* Blue glow */}
        <div
          style={{
            position: 'absolute',
            top: -100,
            left: -100,
            width: 600,
            height: 600,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(59,130,246,0.2), transparent 70%)',
          }}
        />

        {/* Logo/Brand */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            marginBottom: 40,
          }}
        >
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 12,
              background: 'linear-gradient(135deg, #3B82F6, #06B6D4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 24,
              color: 'white',
              fontWeight: 700,
            }}
          >
            N
          </div>
          <span style={{ color: '#F1F5F9', fontSize: 28, fontWeight: 700 }}>NimbleSL</span>
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: 64,
            fontWeight: 800,
            color: '#F1F5F9',
            lineHeight: 1.1,
            marginBottom: 24,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <span>Silicon Valley Engineering.</span>
          <span style={{ color: '#3B82F6' }}>Bangladesh Pricing.</span>
        </div>

        {/* Subtext */}
        <div style={{ fontSize: 24, color: '#94A3B8', marginBottom: 48 }}>
          Custom Software · AI/ML · Mobile Apps · Enterprise SaaS
        </div>

        {/* Stats row */}
        <div style={{ display: 'flex', gap: 48 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <span style={{ fontSize: 36, fontWeight: 700, color: '#3B82F6' }}>50+</span>
            <span style={{ fontSize: 16, color: '#94A3B8' }}>Projects</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <span style={{ fontSize: 36, fontWeight: 700, color: '#3B82F6' }}>12</span>
            <span style={{ fontSize: 16, color: '#94A3B8' }}>Countries</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <span style={{ fontSize: 36, fontWeight: 700, color: '#3B82F6' }}>4.9/5</span>
            <span style={{ fontSize: 16, color: '#94A3B8' }}>Rating</span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
