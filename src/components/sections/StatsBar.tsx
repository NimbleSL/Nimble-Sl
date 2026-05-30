'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { useCountUp } from '@/hooks/useCountUp';
import { MorphNumber } from '@/components/ui/MorphNumber';

const CLIENTS = [
  { name: 'Rosachy', logo: '/assets/images/clients/rosachy.jpg' },
  { name: 'North Avenue', logo: '/assets/images/clients/north-avenue.jpg' },
  { name: 'HayaaCola', logo: '/assets/images/clients/hayaacola.jpg' },
  { name: 'CH15', logo: '/assets/images/clients/ch15.jpg' },
  { name: 'WPEDO', logo: '/assets/images/clients/wpedo.jpg' },
  { name: 'Blackstone Vale', logo: null, mark: 'BV', color: 'linear-gradient(135deg, #0F172A, #475569)' },
];

const FLAGS = [
  { c: 'us', name: 'United States', emoji: '🇺🇸' },
  { c: 'gb', name: 'United Kingdom', emoji: '🇬🇧' },
  { c: 'de', name: 'Germany', emoji: '🇩🇪' },
  { c: 'au', name: 'Australia', emoji: '🇦🇺' },
  { c: 'ae', name: 'UAE', emoji: '🇦🇪' },
  { c: 'ca', name: 'Canada', emoji: '🇨🇦' },
];

function StatCounter({ end, suffix, label, accent }: { end: number; suffix: string; label: string; accent: string }) {
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.3 });
  const count = useCountUp({ end, duration: 2000, enabled: inView });

  return (
    <div ref={ref} className="text-center">
      <div style={{ fontSize: 36, fontWeight: 800, color: accent, fontFamily: 'var(--font-plus-jakarta)', lineHeight: 1 }}>
        <MorphNumber value={count} />{suffix}
      </div>
      <div style={{ fontSize: 12, color: 'var(--text-3)', marginTop: 6, fontFamily: 'var(--font-mono)' }}>{label}</div>
    </div>
  );
}

export function StatsBar() {
  return (
    <section style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', background: 'var(--surface)' }}>
      {/* Flags + label */}
      <div className="container" style={{ padding: '40px 32px 0', textAlign: 'center' }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: 16 }}>
          Trusted by teams across 12 countries
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
          {FLAGS.map((f) => (
            <span key={f.c} title={f.name} style={{ fontSize: 22, cursor: 'default' }}>{f.emoji}</span>
          ))}
          <div style={{ width: 1, height: 16, background: 'var(--border)', margin: '0 4px' }} />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-3)' }}>+ 6 more</span>
        </div>
      </div>

      {/* Marquee logos */}
      <div style={{ position: 'relative', padding: '28px 0', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 140, background: 'linear-gradient(90deg, var(--bg) 0%, transparent 100%)', zIndex: 2, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 140, background: 'linear-gradient(-90deg, var(--bg) 0%, transparent 100%)', zIndex: 2, pointerEvents: 'none' }} />

        <div className="marquee-track">
          {[0, 1].map((dup) =>
            CLIENTS.map((c) => (
              <div
                key={`${dup}-${c.name}`}
                style={{
                  display: 'flex', alignItems: 'center', gap: 10,
                  padding: '8px 20px',
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: 999,
                  flexShrink: 0,
                  whiteSpace: 'nowrap',
                }}
              >
                {c.logo ? (
                  <div style={{ width: 26, height: 26, borderRadius: '50%', overflow: 'hidden', flexShrink: 0, background: 'var(--surface-2)' }}>
                    <Image
                      src={c.logo}
                      alt={c.name}
                      width={26}
                      height={26}
                      style={{ width: 26, height: 26, objectFit: 'cover' }}
                    />
                  </div>
                ) : (
                  <div style={{
                    width: 26, height: 26, borderRadius: '50%',
                    background: c.color,
                    display: 'grid', placeItems: 'center',
                    fontSize: 9, fontWeight: 700, color: 'white',
                    flexShrink: 0,
                  }}>
                    {c.mark}
                  </div>
                )}
                <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-2)' }}>{c.name}</span>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Stats */}
      <div className="container" style={{ padding: '0 32px 40px' }}>
        <div className="rg-4 stats-grid" style={{ paddingTop: 32, borderTop: '1px solid var(--border)', gap: 24 }}>
          <StatCounter end={50} suffix="+" label="Projects shipped" accent="var(--blue-2)" />
          <StatCounter end={12} suffix="" label="Countries served" accent="#67E8F9" />
          <StatCounter end={98} suffix="%" label="Client retention" accent="var(--emerald-2)" />
          <div className="text-center">
            <div style={{ fontSize: 36, fontWeight: 800, color: '#FCD34D', fontFamily: 'var(--font-plus-jakarta)', lineHeight: 1 }}>
              40–60%
            </div>
            <div style={{ fontSize: 12, color: 'var(--text-3)', marginTop: 6, fontFamily: 'var(--font-mono)' }}>Cost savings vs US/UK</div>
          </div>
        </div>
      </div>
    </section>
  );
}
