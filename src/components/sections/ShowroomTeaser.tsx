'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Gauge, Mail } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

const PRODUCTS = [
  { name: 'PayFlow', tag: 'FinTech', tagClass: 'tag-blue', tagline: 'Smart Digital Banking, Simplified', metric: 'Real-time cross-border payments', accent: '#3B82F6', href: '/solutions/payflow', demoHref: 'https://payflow.nimblesl.com' },
  { name: 'FraudShield AI', tag: 'AI/ML', tagClass: 'tag-purple', tagline: '96% Accurate AI Fraud Detection', metric: '30–60 sec processing', accent: '#A855F7', href: '/solutions/fraudshield', demoHref: 'https://fraudshield.nimblesl.com' },
  { name: 'FieldOps', tag: 'Logistics', tagClass: 'tag-emerald', tagline: 'Field Force Automation That Works Offline', metric: '8 hr offline sync', accent: '#10B981', href: '/solutions/fieldops', demoHref: 'https://fieldops.nimblesl.com' },
  { name: 'ClaimWise', tag: 'InsurTech', tagClass: 'tag-cyan', tagline: 'Insurance, Digitized End-to-End', metric: '70% faster claims', accent: '#06B6D4', href: '/solutions/claimwise', demoHref: 'https://claimwise.nimblesl.com' },
  { name: 'AuthGate', tag: 'Security', tagClass: 'tag-amber', tagline: 'Enterprise Identity, Unified', metric: 'OAuth2 / OIDC / SAML', accent: '#F59E0B', href: '/solutions/authgate', demoHref: 'https://authgate.nimblesl.com' },
  { name: 'PropNest', tag: 'PropTech', tagClass: 'tag-rose', tagline: 'Your 360° Property Ecosystem', metric: '12k+ listings managed', accent: '#F43F5E', href: '/solutions/propnest', demoHref: 'https://propnest.nimblesl.com' },
];

export function ShowroomTeaser() {
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.05 });

  return (
    <section ref={ref} style={{ padding: '96px 0', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(800px 400px at 50% 0%, rgba(6,182,212,0.08), transparent 70%)', pointerEvents: 'none' }} />
      <div className="container" style={{ position: 'relative' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 32, flexWrap: 'wrap', marginBottom: 56 }}>
          <div>
            <span className="eyebrow" style={{ marginBottom: 20, display: 'inline-flex' }}>
              <span className="ev-dot" />The Product Showroom
            </span>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 800, color: 'var(--text)', lineHeight: 1.15, maxWidth: 540 }}>
              Don&apos;t just read about our work. Try it.
            </h2>
            <p style={{ marginTop: 14, fontSize: 16, color: 'var(--text-2)', maxWidth: 560, lineHeight: 1.65 }}>
              Six production-grade platforms running on real infrastructure. Click any demo — log in, click around, break things. Then customize from there.
            </p>
          </div>
          <Link href="/solutions" className="btn btn-ghost" style={{ flexShrink: 0 }}>
            View all 11 products <ArrowRight size={14} />
          </Link>
        </div>

        {/* Product grid */}
        <div className="rg-3" style={{ gap: 20 }}>
          {PRODUCTS.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08, ease: 'easeOut' }}
            >
              <div className="card card-hover" style={{ padding: 0, overflow: 'hidden', height: '100%' }}>
                {/* Preview thumbnail */}
                <div style={{ height: 156, background: `linear-gradient(135deg, ${p.accent}22, ${p.accent}08)`, borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
                  <div className="dot-bg" style={{ position: 'absolute', inset: 0, opacity: 0.6 }} />
                  {/* Mini UI skeleton */}
                  <div style={{ position: 'absolute', inset: 16, display: 'flex', flexDirection: 'column', gap: 6 }}>
                    <div style={{ display: 'flex', gap: 6 }}>
                      <div style={{ width: 60, height: 8, background: 'rgba(255,255,255,0.18)', borderRadius: 2 }} />
                      <div style={{ width: 30, height: 8, background: 'rgba(255,255,255,0.10)', borderRadius: 2 }} />
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 6, marginTop: 10 }}>
                      {[1, 2, 3].map((n) => (
                        <div key={n} style={{ height: 36, background: `${p.accent}22`, borderRadius: 4, border: `1px solid ${p.accent}44` }} />
                      ))}
                    </div>
                    <div style={{ marginTop: 'auto', display: 'flex', gap: 6 }}>
                      {[1, 2, 1].map((w, idx) => (
                        <div key={idx} style={{ flex: w, height: 6, background: idx === 1 ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.06)', borderRadius: 2 }} />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card body */}
                <div style={{ padding: 20 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                    <h3 style={{ fontSize: 17, fontWeight: 700, color: 'var(--text)' }}>{p.name}</h3>
                    <span className={`tag ${p.tagClass}`} style={{ fontSize: 10 }}>{p.tag}</span>
                  </div>
                  <p style={{ fontSize: 13, color: 'var(--text-2)', marginBottom: 10, lineHeight: 1.5 }}>{p.tagline}</p>
                  <div style={{ marginBottom: 14, display: 'flex', alignItems: 'center', gap: 5, fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-3)' }}>
                    <Gauge size={11} /> {p.metric}
                  </div>
                  <div style={{ display: 'flex', gap: 8 }}>
                    <Link href="/contact" className="btn btn-primary" style={{ flex: 1, justifyContent: 'center', padding: '8px 12px', fontSize: 12 }}>
                      <Mail size={11} /> Request Demo
                    </Link>
                    <Link href={p.href} className="btn btn-ghost" style={{ padding: '8px 12px', fontSize: 12 }}>
                      <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
