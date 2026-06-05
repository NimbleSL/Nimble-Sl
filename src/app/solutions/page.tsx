'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, ArrowRight, Gauge, Sparkles } from 'lucide-react';
import { solutions } from '@/lib/data/solutions';

const FILTERS = ['All', 'FinTech', 'InsurTech', 'HealthTech', 'PropTech', 'E-Commerce', 'Retail', 'Logistics', 'Enterprise', 'F&B', 'AI/ML'];

export default function SolutionsPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = solutions.filter((s) => activeFilter === 'All' || s.industry === activeFilter || s.extraCategories?.includes(activeFilter));

  return (
    <>
      <main>
        {/* Hero */}
        <section className="inner-hero-pt" style={{ padding: '0 0 56px', position: 'relative', overflow: 'hidden' }}>
          <div className="mesh-bg" />
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <span className="eyebrow" style={{ marginBottom: 20, display: 'inline-flex' }}>
              <span className="ev-dot" />Product Showroom
            </span>
            <h1 className="font-display" style={{ fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 800, lineHeight: 1.1, color: 'var(--text)', maxWidth: 700 }}>
              Pre-built solutions.<br /><span className="grad-blue">Customize for your business.</span>
            </h1>
            <p style={{ marginTop: 20, fontSize: 18, color: 'var(--text-2)', maxWidth: 600, lineHeight: 1.65 }}>
              Explore our production-grade platforms. Try them live on real infrastructure. Then make them yours — at a fraction of the cost to build from scratch.
            </p>
          </div>
        </section>

        {/* Filter tabs */}
        <div className="container" style={{ marginBottom: 40 }}>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                aria-pressed={activeFilter === f}
                style={{
                  padding: '7px 14px',
                  borderRadius: 999,
                  fontSize: 13,
                  fontWeight: 600,
                  border: '1px solid',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                  background: activeFilter === f ? 'var(--blue)' : 'transparent',
                  color: activeFilter === f ? 'white' : 'var(--text-2)',
                  borderColor: activeFilter === f ? 'var(--blue)' : 'var(--border-2)',
                }}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Products grid */}
        <section style={{ padding: '0 0 96px' }}>
          <div className="container">
            <AnimatePresence mode="popLayout">
              <motion.div
                layout
                className="rg-3"
                style={{ gap: 24 }}
              >
                {filtered.map((sol) => (
                  <motion.div
                    key={sol.slug}
                    layout
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="card card-hover" style={{ padding: 0, overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column' }}>
                      {/* Preview — product screenshot */}
                      <div style={{ height: 196, position: 'relative', overflow: 'hidden', borderBottom: '1px solid var(--border)', background: `linear-gradient(135deg, ${sol.accent}20, ${sol.accent}08)` }}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={`/solutions/${sol.slug}.png`}
                          alt={`${sol.name} preview`}
                          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', display: 'block', transform: 'scale(1.02)', transformOrigin: 'top center' }}
                          onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
                        />
                        {/* Top fade — blends into card bg */}
                        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 40, background: 'linear-gradient(to bottom, var(--surface) 0%, transparent 100%)', pointerEvents: 'none' }} />
                        {/* Bottom fade */}
                        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 64, background: 'linear-gradient(to bottom, transparent 0%, var(--surface) 100%)', pointerEvents: 'none' }} />
                        {/* Industry badge */}
                        <span className={`tag tag-${sol.tagVariant}`} style={{ position: 'absolute', top: 10, right: 10, fontSize: 10 }}>
                          {sol.industry}
                        </span>
                      </div>

                      <div style={{ padding: 24, display: 'flex', flexDirection: 'column', flex: 1 }}>
                        <h3 style={{ fontSize: 19, fontWeight: 700, color: 'var(--text)', marginBottom: 6 }}>{sol.name}</h3>
                        <p style={{ fontSize: 13, color: sol.accent, fontWeight: 600, marginBottom: 8 }}>{sol.tagline}</p>
                        <p style={{ fontSize: 13, color: 'var(--text-2)', lineHeight: 1.6, marginBottom: 12 }}>{sol.description.slice(0, 120)}...</p>

                        <div style={{ display: 'flex', alignItems: 'center', gap: 5, fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-3)', marginBottom: 16 }}>
                          <Gauge size={11} /> {sol.keyMetric}
                        </div>

                        {/* Tech */}
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginBottom: 16 }}>
                          {sol.techStack.slice(0, 3).map((t) => (
                            <span key={t} className="tag" style={{ fontSize: 10 }}>{t}</span>
                          ))}
                          {sol.techStack.length > 3 && <span className="tag" style={{ fontSize: 10 }}>+{sol.techStack.length - 3}</span>}
                        </div>

                        <div style={{ display: 'flex', gap: 8, paddingTop: 16, borderTop: '1px solid var(--border)', marginTop: 'auto' }}>
                          <a href={sol.demoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ flex: 1, justifyContent: 'center', padding: '9px 14px', fontSize: 13 }}>
                            <Play size={12} /> Live Demo
                          </a>
                          <a href={sol.demoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost" style={{ padding: '9px 14px', fontSize: 13 }}>
                            Details <ArrowRight size={12} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>
      </main>
    </>
  );
}
