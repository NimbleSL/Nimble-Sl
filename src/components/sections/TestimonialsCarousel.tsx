'use client';

import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useInView } from '@/hooks/useInView';
import { useTheme } from '@/components/providers/ThemeProvider';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const TESTIMONIALS = [
  {
    quote: 'We came to NimbleSL with a half-broken fraud system and a 6-week deadline. They shipped a GNN-based model that hit 96% accuracy in production. No US shop quoted under $250K — Anik\'s team built it for a fifth of that.',
    author: 'Sarah Patel',
    role: 'VP Engineering · Blackstone Vale Insurance',
    initials: 'SP',
    gradient: 'linear-gradient(135deg, #3B82F6, #A855F7)',
    metrics: [
      { value: '96%', label: 'Fraud detection accuracy', sub: 'vs 71% legacy system', accent: 'emerald' },
      { value: '6 wk', label: 'From kickoff to production', accent: 'blue' },
      { value: '$48K', label: 'Total project cost', sub: 'vs $260K avg US quote', accent: 'cyan' },
      { value: '0', label: 'False negatives in 90 days', accent: 'purple' },
    ],
  },
  {
    quote: 'NimbleSL rebuilt our entire field operations platform from scratch in 14 weeks. The Flutter app now handles 200+ field agents with offline sync. Previous vendor took 8 months and delivered nothing usable.',
    author: 'James Okafor',
    role: 'CTO · Meridian Logistics Group',
    initials: 'JO',
    gradient: 'linear-gradient(135deg, #10B981, #06B6D4)',
    metrics: [
      { value: '200+', label: 'Field agents onboarded', sub: 'Week 1 post-launch', accent: 'emerald' },
      { value: '14 wk', label: 'Full platform delivery', accent: 'blue' },
      { value: '99.2%', label: 'Uptime in first 6 months', accent: 'cyan' },
      { value: '4.8★', label: 'App store rating', accent: 'purple' },
    ],
  },
  {
    quote: 'We needed a compliant KYC + digital wallet in 10 weeks for our Series A demo. NimbleSL delivered — on time, fully documented, SOC2-ready. Investors were impressed. We closed the round.',
    author: 'Priya Nair',
    role: 'CEO & Co-founder · FinBridge',
    initials: 'PN',
    gradient: 'linear-gradient(135deg, #F59E0B, #EF4444)',
    metrics: [
      { value: '10 wk', label: 'KYC + wallet delivered', sub: 'Series A deadline met', accent: 'emerald' },
      { value: '$2.4M', label: 'Round closed post-demo', accent: 'blue' },
      { value: 'SOC2', label: 'Compliance ready', sub: 'Full audit trail', accent: 'cyan' },
      { value: '100%', label: 'Milestones on schedule', accent: 'purple' },
    ],
  },
];

const DRAG_THRESHOLD = 50;

export function TestimonialsCarousel() {
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.1 });
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const prefersReducedMotion = useReducedMotion();
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const goTo = useCallback((next: number) => {
    setDirection(next > index ? 1 : -1);
    setIndex(next);
  }, [index]);

  const prev = () => goTo(index === 0 ? TESTIMONIALS.length - 1 : index - 1);
  const next = () => goTo(index === TESTIMONIALS.length - 1 ? 0 : index + 1);

  const handleDragEnd = (_: unknown, info: { offset: { x: number } }) => {
    if (info.offset.x < -DRAG_THRESHOLD) next();
    else if (info.offset.x > DRAG_THRESHOLD) prev();
  };

  const variants = {
    enter: (d: number) => ({
      x: prefersReducedMotion ? 0 : d > 0 ? 60 : -60,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({
      x: prefersReducedMotion ? 0 : d > 0 ? -60 : 60,
      opacity: 0,
    }),
  };

  const t = TESTIMONIALS[index];

  return (
    <section ref={ref} style={{ padding: '0 0 96px' }}>
      <div className="container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}
        >
          <div>
            <span className="eyebrow" style={{ display: 'inline-flex', marginBottom: 12 }}>
              <span className="ev-dot" /> Client results
            </span>
            <ScrollReveal
              as="h2"
              className="font-display"
              style={{ fontSize: 'clamp(26px, 3vw, 36px)', fontWeight: 800, color: 'var(--text)', display: 'block' }}
            >
              What clients say
            </ScrollReveal>
          </div>

          {/* Prev / Next */}
          <div style={{ display: 'flex', gap: 8 }}>
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="transition-all hover:scale-105"
              style={{
                width: 40, height: 40, borderRadius: 10, display: 'grid', placeItems: 'center',
                background: 'var(--surface-2)', border: '1px solid var(--border)',
                color: 'var(--text-2)', cursor: 'pointer',
              }}
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="transition-all hover:scale-105"
              style={{
                width: 40, height: 40, borderRadius: 10, display: 'grid', placeItems: 'center',
                background: 'var(--surface-2)', border: '1px solid var(--border)',
                color: 'var(--text-2)', cursor: 'pointer',
              }}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </motion.div>

        {/* Carousel */}
        <div style={{ position: 'relative', overflow: 'hidden' }}>
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={index}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              drag={prefersReducedMotion ? false : 'x'}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.15}
              onDragEnd={handleDragEnd}
              style={{ cursor: 'grab' }}
              whileDrag={{ cursor: 'grabbing' }}
            >
              <div
                className="card"
                style={{
                  padding: 'clamp(24px, 4vw, 56px)',
                  background: isDark
                    ? 'linear-gradient(135deg, rgba(20,25,37,0.8), rgba(15,22,41,0.6))'
                    : 'var(--surface)',
                  userSelect: 'none',
                }}
              >
                <div className="grid lg:grid-cols-2 gap-14 items-center">
                  <div>
                    <div style={{ color: 'var(--blue-2)', fontSize: 56, fontFamily: 'Georgia, serif', lineHeight: 0.5, marginBottom: 16 }}>&ldquo;</div>
                    <p style={{ fontSize: 'clamp(16px, 2vw, 20px)', lineHeight: 1.6, color: 'var(--text)', fontWeight: 500 }}>
                      {t.quote}
                    </p>
                    <div style={{ marginTop: 28, display: 'flex', alignItems: 'center', gap: 14 }}>
                      <div style={{
                        width: 48, height: 48, borderRadius: '50%',
                        background: t.gradient,
                        display: 'grid', placeItems: 'center',
                        fontSize: 14, fontWeight: 700, color: 'white', flexShrink: 0,
                      }}>
                        {t.initials}
                      </div>
                      <div>
                        <div style={{ fontWeight: 700, color: 'var(--text)' }}>{t.author}</div>
                        <div style={{ fontSize: 13, color: 'var(--text-2)' }}>{t.role}</div>
                      </div>
                      <div style={{ marginLeft: 'auto', display: 'flex', gap: 2, color: '#FCD34D' }}>
                        {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={14} fill="#FCD34D" />)}
                      </div>
                    </div>
                  </div>

                  {/* Metrics */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                    {t.metrics.map((m) => (
                      <div key={m.label} className="card" style={{ padding: 18 }}>
                        <div style={{ fontSize: 28, fontWeight: 800, lineHeight: 1, color: `var(--${m.accent}-2)`, fontFamily: 'var(--font-plus-jakarta)' }}>
                          {m.value}
                        </div>
                        <div style={{ fontSize: 12, color: 'var(--text-2)', marginTop: 6, lineHeight: 1.4 }}>{m.label}</div>
                        {m.sub && <div style={{ fontSize: 11, color: 'var(--text-3)', marginTop: 4, fontFamily: 'var(--font-mono)' }}>{m.sub}</div>}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dot indicators */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 24 }}>
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              style={{
                width: i === index ? 24 : 8,
                height: 8,
                borderRadius: 999,
                background: i === index ? 'var(--blue-2)' : 'var(--border-2)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                padding: 0,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
