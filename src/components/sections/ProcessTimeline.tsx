'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Search, Palette, Code2, Shield, Rocket, Heart } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

const PHASES = [
  { n: '01', label: 'Discovery', dur: '1–2 wk', detail: 'Stakeholder interviews, scope lock, risk audit.', icon: Search },
  { n: '02', label: 'Design', dur: '2–4 wk', detail: 'Wireframes, prototype, validated user flows.', icon: Palette },
  { n: '03', label: 'Develop', dur: '6–16 wk', detail: 'Two-week sprints, demo every Friday.', icon: Code2 },
  { n: '04', label: 'Test', dur: '2 wk', detail: 'QA, security audit, load test, accessibility.', icon: Shield },
  { n: '05', label: 'Deploy', dur: '1 wk', detail: 'Infra hand-off, runbooks, monitoring live.', icon: Rocket },
  { n: '06', label: 'Support', dur: 'ongoing', detail: 'SLA-backed retainer or full hand-off.', icon: Heart },
];

export function ProcessTimeline() {
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section ref={ref} style={{ padding: '0 0 96px' }}>
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: 56 }}>
          <span className="eyebrow" style={{ marginBottom: 20, display: 'inline-flex' }}>
            <span className="ev-dot" />How we ship
          </span>
          <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 800, color: 'var(--text)', lineHeight: 1.15 }}>
            Six phases. Receipts every Friday.
          </h2>
          <p style={{ marginTop: 14, fontSize: 16, color: 'var(--text-2)', maxWidth: 580, lineHeight: 1.65 }}>
            No black-box agency timelines. You get demo videos, sprint reports, and direct Slack access to engineers — every week, without asking.
          </p>
        </div>

        <div style={{ position: 'relative' }}>
          {/* Connector line */}
          <div style={{ position: 'absolute', top: 32, left: '4%', right: '4%', height: 1, background: 'linear-gradient(90deg, transparent, var(--border-2) 10%, var(--border-2) 90%, transparent)', zIndex: 0 }} />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 16, position: 'relative' }}>
            {PHASES.map((phase, i) => (
              <motion.div
                key={phase.n}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
                style={{ textAlign: 'center' }}
              >
                <div style={{
                  width: 64, height: 64, margin: '0 auto 16px', borderRadius: 16,
                  background: 'var(--surface)', border: '1px solid var(--border-2)',
                  display: 'grid', placeItems: 'center', color: 'var(--blue-2)',
                  position: 'relative', zIndex: 1,
                }}>
                  <phase.icon size={24} />
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--blue-2)', fontWeight: 700 }}>{phase.n}</div>
                <div style={{ fontWeight: 700, marginTop: 4, color: 'var(--text)' }}>{phase.label}</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-3)', marginTop: 4 }}>{phase.dur}</div>
                <p style={{ fontSize: 12, color: 'var(--text-2)', marginTop: 8, padding: '0 4px', lineHeight: 1.5 }}>{phase.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
