'use client';
import { useState, useEffect } from 'react';
import { BrandMark } from '@/components/ui/BrandMark';
import { CodeSignature } from '@/components/ui/CodeSignature';

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fade-out after 700ms
    const fadeTimer = setTimeout(() => setFadeOut(true), 700);
    // Remove from DOM after fade completes
    const removeTimer = setTimeout(() => setVisible(false), 1000);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 200,
      background: 'var(--bg)',
      display: 'grid',
      placeItems: 'center',
      transition: 'opacity 0.35s ease',
      opacity: fadeOut ? 0 : 1,
      pointerEvents: fadeOut ? 'none' : 'auto',
    }}>
      {/* Grid bg overlay */}
      <div className="grid-bg" style={{ position: 'absolute', inset: 0, opacity: 0.35 }} />

      <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
        {/* N mark with status dot */}
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <BrandMark size={72} />
          <span style={{
            position: 'absolute',
            top: -4,
            right: -4,
            width: 16,
            height: 16,
            borderRadius: '50%',
            background: 'var(--emerald)',
            border: '3px solid var(--bg)',
            boxShadow: '0 0 12px var(--emerald)',
            animation: 'pulse-glow 1.4s infinite',
          }} />
        </div>

        {/* 3-dot spinner */}
        <div style={{ marginTop: 24, display: 'flex', justifyContent: 'center', gap: 6 }}>
          {[0, 1, 2].map(i => (
            <div key={i} style={{
              width: 6,
              height: 6,
              borderRadius: '50%',
              background: 'var(--blue)',
              animation: `pulse-glow 1.2s ${i * 0.2}s infinite ease-in-out`,
            }} />
          ))}
        </div>

        {/* Code signature */}
        <div style={{ marginTop: 20 }}>
          <CodeSignature size="lg" />
        </div>

        <div style={{
          marginTop: 10,
          fontFamily: 'var(--font-mono)',
          fontSize: 10,
          color: 'var(--text-3)',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
        }}>
          Loading…
        </div>
      </div>
    </div>
  );
}
