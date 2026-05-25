'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Sparkles } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

const FEATURE_STEPS = [
  { label: 'Authentication', checked: true },
  { label: 'Payments', checked: true },
  { label: 'Admin dashboard', checked: true },
  { label: 'Real-time chat', checked: false },
  { label: 'AI/ML features', checked: true },
  { label: 'Offline support', checked: false },
];

export function EstimatorBanner() {
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section ref={ref} style={{ padding: '0 0 96px' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          <div className="card" style={{
            padding: 0, overflow: 'hidden',
            background: 'linear-gradient(135deg, rgba(59,130,246,0.12) 0%, rgba(6,182,212,0.08) 50%, rgba(16,185,129,0.08) 100%)',
            border: '1px solid rgba(59,130,246,0.25)',
          }}>
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left: Copy */}
              <div style={{ padding: 48 }}>
                <div className="eyebrow" style={{ marginBottom: 16, borderColor: 'rgba(168,85,247,0.3)', background: 'rgba(168,85,247,0.08)', color: '#C084FC', display: 'inline-flex' }}>
                  <Sparkles size={11} /> Powered by Nimble AI
                </div>
                <h2 style={{ fontSize: 'clamp(24px, 3vw, 38px)', fontWeight: 800, color: 'var(--text)', lineHeight: 1.2, marginBottom: 16 }}>
                  Get your project estimated in 3 minutes.
                </h2>
                <p style={{ fontSize: 15, color: 'var(--text-2)', lineHeight: 1.7, marginBottom: 24 }}>
                  Skip the &ldquo;fill a form and wait&rdquo; routine. Answer 7 quick questions — get scope, timeline, tech stack, team mix, and cost range backed by our 50-project history.
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
                  <Link href="/tools/project-estimator" className="btn btn-emerald" style={{ padding: '12px 20px' }}>
                    Start Free Estimate <ArrowRight size={14} />
                  </Link>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                    {['No email gate to start', 'Instant PDF export'].map((item) => (
                      <span key={item} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: 'var(--text-3)' }}>
                        <Check size={12} style={{ color: 'var(--emerald)' }} /> {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: Wizard preview */}
              <div style={{ padding: 24, display: 'flex', alignItems: 'center' }}>
                <div style={{ background: 'var(--surface)', borderRadius: 12, padding: 20, border: '1px solid var(--border-2)', width: '100%' }}>
                  {/* Progress bar */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginBottom: 14 }}>
                    {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                      <div key={i} style={{ flex: 1, height: 3, borderRadius: 999, background: i <= 3 ? 'var(--blue)' : 'var(--border)' }} />
                    ))}
                  </div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-3)', marginBottom: 4 }}>Step 3 of 7 · Key features</div>
                  <h4 style={{ fontSize: 17, fontWeight: 700, color: 'var(--text)', marginBottom: 14 }}>What features do you need?</h4>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6 }}>
                    {FEATURE_STEPS.map((f) => (
                      <div key={f.label} style={{
                        padding: '8px 10px', borderRadius: 6,
                        background: f.checked ? 'rgba(59,130,246,0.12)' : 'var(--surface-2)',
                        border: `1px solid ${f.checked ? 'rgba(59,130,246,0.4)' : 'var(--border)'}`,
                        fontSize: 12, color: f.checked ? 'var(--blue-2)' : 'var(--text-2)',
                        display: 'flex', alignItems: 'center', gap: 6,
                      }}>
                        <div style={{
                          width: 12, height: 12, borderRadius: 3,
                          background: f.checked ? 'var(--blue)' : 'transparent',
                          border: `1.5px solid ${f.checked ? 'var(--blue)' : 'var(--border-2)'}`,
                          display: 'grid', placeItems: 'center', flexShrink: 0,
                        }}>
                          {f.checked && <Check size={8} strokeWidth={3} style={{ color: 'white' }} />}
                        </div>
                        {f.label}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
