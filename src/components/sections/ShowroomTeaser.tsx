'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Gauge, Play } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

const PRODUCTS = [
  { slug: 'payflow', name: 'PayFlow', tag: 'FinTech', tagClass: 'tag-blue', tagline: 'Complete Digital Banking, Built to Launch', metric: 'Real-time cross-border payments', accent: '#3B82F6', demoHref: 'https://payflow.nimblesl.com' },
  { slug: 'insureflow', name: 'InsureFlow', tag: 'InsurTech', tagClass: 'tag-emerald', tagline: 'Insurance Operations, End-to-End Digital', metric: '70% faster claim processing', accent: '#10B981', demoHref: 'https://insureflow.nimblesl.com' },
  { slug: 'mediflow', name: 'MediFlow', tag: 'HealthTech', tagClass: 'tag-rose', tagline: 'Modern Healthcare, Paperless & Connected', metric: 'Paperless EHR management', accent: '#F43F5E', demoHref: 'https://mediflow.nimblesl.com' },
  { slug: 'shopnest', name: 'ShopNest', tag: 'E-Commerce', tagClass: 'tag-amber', tagline: 'Multi-Vendor Marketplace, Ready to Scale', metric: 'Multi-vendor GMV tracking', accent: '#F59E0B', demoHref: 'https://shopnest.nimblesl.com' },
  { slug: 'realtydesk', name: 'RealtyDesk', tag: 'PropTech', tagClass: 'tag-cyan', tagline: '360° Property Management, Simplified', metric: '360° property lifecycle management', accent: '#06B6D4', demoHref: 'https://realtydesk.nimblesl.com' },
  { slug: 'fieldtrack', name: 'FieldTrack', tag: 'Logistics', tagClass: 'tag-orange', tagline: 'Field Service Automation That Works Anywhere', metric: '40% operational cost reduction', accent: '#F97316', demoHref: 'https://fieldtrack.nimblesl.com' },
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
            View all 12 products <ArrowRight size={14} />
          </Link>
        </div>

        {/* Product grid */}
        <div className="rg-3" style={{ gap: 20 }}>
          {PRODUCTS.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08, ease: 'easeOut' }}
            >
              <div className="card card-hover" style={{ padding: 0, overflow: 'hidden', height: '100%' }}>
                {/* Preview thumbnail */}
                <div style={{ height: 156, background: `linear-gradient(135deg, ${p.accent}20, ${p.accent}08)`, borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`/solutions/${p.slug}.png`}
                    alt={`${p.name} preview`}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', display: 'block', transform: 'scale(1.02)', transformOrigin: 'top center' }}
                    onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
                  />
                  {/* Top fade */}
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 32, background: 'linear-gradient(to bottom, var(--surface) 0%, transparent 100%)', pointerEvents: 'none' }} />
                  {/* Bottom fade */}
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 48, background: 'linear-gradient(to bottom, transparent 0%, var(--surface) 100%)', pointerEvents: 'none' }} />
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
                    <a href={p.demoHref} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ flex: 1, justifyContent: 'center', padding: '8px 12px', fontSize: 12 }}>
                      <Play size={11} /> Live Demo
                    </a>
                    <a href={p.demoHref} target="_blank" rel="noopener noreferrer" className="btn btn-ghost" style={{ padding: '8px 12px', fontSize: 12 }}>
                      <ArrowRight size={12} />
                    </a>
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
