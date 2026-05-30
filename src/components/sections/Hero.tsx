'use client';

import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import Link from 'next/link';
import { motion, useReducedMotion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Sparkles, ArrowRight, Star } from 'lucide-react';
import { useTheme } from '@/components/providers/ThemeProvider';
import { MagneticWrapper } from '@/components/ui/MagneticWrapper';

const TERMINAL_LINES = [
  { type: 'cmd',     text: 'nimblesl estimate --type=fintech' },
  { type: 'info',    text: '→ analyzing 50 reference projects…' },
  { type: 'success', text: '✓ matched 7 similar engagements' },
  { type: 'info',    text: '→ generating scope, timeline, stack…' },
  { type: 'success', text: '✓ report ready in 2.4s' },
];

const ESTIMATE_RESULT = [
  { label: 'Scope',    value: 'Digital wallet + KYC' },
  { label: 'Timeline', value: '14–18 weeks' },
  { label: 'Team',     value: '1 PM · 4 Eng · 1 QA' },
  { label: 'Estimate', value: '$42K–$68K', accent: true },
];

const CMD_TEXT = 'nimblesl estimate --type=fintech';
const AVATARS = ['AR', 'MK', 'SH', 'PL'];

// Headline lines — gradient flag drives color interpolation
const H_LINES = [
  { text: 'Silicon Valley', gradient: false },
  { text: 'engineering.',   gradient: false },
  { text: 'Bangladesh pricing.', gradient: true },
  { text: 'Your IP.',       gradient: false },
] as const;

// Interpolate between #3B82F6 (blue) and #06B6D4 (cyan)
function lerpColor(pct: number) {
  const r = Math.round(59  + (6   - 59)  * pct);
  const g = Math.round(130 + (182 - 130) * pct);
  const b = Math.round(246 + (212 - 246) * pct);
  return `rgb(${r},${g},${b})`;
}

export function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  // ── Parallax ──
  // heroRef is also used for useScroll — declared below with cursor trail ref
  // We use a separate ref here so we can share it
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  // Positive y = element drifts down relative to scroll = appears deeper (classic parallax lag)
  const meshY  = useTransform(scrollYProgress, [0, 1], [0,  70]);
  const gridY  = useTransform(scrollYProgress, [0, 1], [0,  45]);
  const orb1Y  = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const orb2Y  = useTransform(scrollYProgress, [0, 1], [0,  80]);
  const orb3Y  = useTransform(scrollYProgress, [0, 1], [0, 120]);

  // ── Cursor trail ──
  const [trail, setTrail] = useState<Array<{ id: number; x: number; y: number }>>([]);
  const trailIdRef = useRef(0);
  const lastTrailTime = useRef(0);
  const isPointerFine = useRef(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      isPointerFine.current = window.matchMedia('(pointer: fine)').matches;
    }
  }, []);

  const handleHeroMouseMove = useCallback((e: MouseEvent) => {
    if (!isPointerFine.current || prefersReducedMotion) return;
    const now = Date.now();
    if (now - lastTrailTime.current < 95) return; // ~10 fps
    lastTrailTime.current = now;
    const rect = heroRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = ++trailIdRef.current;
    setTrail((prev) => [...prev.slice(-3), { id, x, y }]);
    setTimeout(() => setTrail((prev) => prev.filter((d) => d.id !== id)), 500);
  }, [prefersReducedMotion]);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    el.addEventListener('mousemove', handleHeroMouseMove, { passive: true });
    return () => el.removeEventListener('mousemove', handleHeroMouseMove);
  }, [handleHeroMouseMove]);

  // Stable particle set
  const particles = useMemo(() =>
    Array.from({ length: 22 }, (_, i) => ({
      id: i,
      x: (i * 4.7 + 3) % 100,
      y: (i * 7.3 + 10) % 80 + 10,
      size: (i % 3) * 0.7 + 1,
      duration: (i % 8) + 16,
      delay: (i * 1.1) % 9,
      color: ['rgba(59,130,246,0.7)', 'rgba(6,182,212,0.7)', 'rgba(16,185,129,0.6)'][i % 3],
    })), []);

  // Terminal typing state
  const [typedChars, setTypedChars] = useState(0);
  const [visibleLines, setVisibleLines] = useState(0);   // how many non-cmd lines revealed
  const [showResult, setShowResult] = useState(false);
  const [cmdDone, setCmdDone] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion) {
      setTypedChars(CMD_TEXT.length);
      setCmdDone(true);
      setVisibleLines(TERMINAL_LINES.length - 1);
      setShowResult(true);
      return;
    }

    // Phase 1: type the command char by char
    let i = 0;
    const charInterval = setInterval(() => {
      i++;
      setTypedChars(i);
      if (i >= CMD_TEXT.length) {
        clearInterval(charInterval);
        setCmdDone(true);

        // Phase 2: reveal subsequent lines one by one
        let lineIdx = 0;
        const lineInterval = setInterval(() => {
          lineIdx++;
          setVisibleLines(lineIdx);
          if (lineIdx >= TERMINAL_LINES.length - 1) {
            clearInterval(lineInterval);
            // Phase 3: show result box
            setTimeout(() => setShowResult(true), 250);
          }
        }, 370);
      }
    }, 42);

    return () => clearInterval(charInterval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: prefersReducedMotion ? 0 : 0.12 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' as const } },
  };

  return (
    <section ref={heroRef} className="relative overflow-hidden hero-section">

      {/* ── Matrix Background (multi-layer parallax) ── */}

      {/* Base gradient mesh — deepest layer, most lag */}
      <motion.div
        className="mesh-bg"
        style={{ y: prefersReducedMotion ? 0 : meshY, willChange: 'transform' }}
      />

      {/* Grid overlay — mid layer */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          y: prefersReducedMotion ? 0 : gridY,
          willChange: 'transform',
          backgroundImage: isDark
            ? `linear-gradient(rgba(59,130,246,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.06) 1px, transparent 1px)`
            : `linear-gradient(rgba(59,130,246,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.07) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)',
        }}
      />

      {/* Animated drifting orbs — each at slightly different parallax depth */}
      {/* Orb 1: blue, top-left */}
      <motion.div
        className="absolute pointer-events-none"
        style={{ width: 700, height: 700, top: '-25%', left: '-15%', y: prefersReducedMotion ? 0 : orb1Y, willChange: 'transform' }}
      >
        <motion.div
          style={{ width: '100%', height: '100%', borderRadius: '50%', background: `radial-gradient(circle, rgba(59,130,246,${isDark ? '0.14' : '0.09'}) 0%, transparent 65%)`, filter: 'blur(72px)' }}
          animate={prefersReducedMotion ? {} : { x: [0, 50, 0], y: [0, 35, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>

      {/* Orb 2: cyan, top-right */}
      <motion.div
        className="absolute pointer-events-none"
        style={{ width: 550, height: 550, top: '5%', right: '-10%', y: prefersReducedMotion ? 0 : orb2Y, willChange: 'transform' }}
      >
        <motion.div
          style={{ width: '100%', height: '100%', borderRadius: '50%', background: `radial-gradient(circle, rgba(6,182,212,${isDark ? '0.11' : '0.07'}) 0%, transparent 65%)`, filter: 'blur(72px)' }}
          animate={prefersReducedMotion ? {} : { x: [0, -35, 0], y: [0, 45, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>

      {/* Orb 3: emerald, bottom-center — most parallax depth */}
      <motion.div
        className="absolute pointer-events-none"
        style={{ width: 450, height: 450, bottom: '-10%', left: '35%', y: prefersReducedMotion ? 0 : orb3Y, willChange: 'transform' }}
      >
        <motion.div
          style={{ width: '100%', height: '100%', borderRadius: '50%', background: `radial-gradient(circle, rgba(16,185,129,${isDark ? '0.09' : '0.06'}) 0%, transparent 65%)`, filter: 'blur(72px)' }}
          animate={prefersReducedMotion ? {} : { x: [0, 25, 0], y: [0, -30, 0] }}
          transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>

      {/* Floating particles */}
      {!prefersReducedMotion && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {particles.map((p) => (
            <motion.div
              key={p.id}
              className="absolute rounded-full"
              style={{
                left: `${p.x}%`, top: `${p.y}%`,
                width: p.size, height: p.size,
                background: p.color,
                boxShadow: `0 0 ${p.size * 4}px ${p.color}`,
                opacity: isDark ? 1 : 0.6,
              }}
              animate={{ y: [0, -55, 0], opacity: [0, isDark ? 0.55 : 0.35, 0] }}
              transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: 'easeInOut' }}
            />
          ))}
        </div>
      )}

      {/* Diagonal scan beam */}
      {!prefersReducedMotion && (
        <motion.div
          className="absolute pointer-events-none"
          style={{
            width: '60%', height: 1,
            background: `linear-gradient(90deg, transparent, rgba(59,130,246,${isDark ? '0.25' : '0.15'}), transparent)`,
            top: '35%', left: '-10%',
            transform: 'rotate(-12deg)',
            transformOrigin: 'left center',
            filter: 'blur(1px)',
          }}
          animate={{ left: ['-60%', '120%'] }}
          transition={{ duration: 5, repeat: Infinity, repeatDelay: 7, ease: 'easeInOut' }}
        />
      )}
      {/* ── End Matrix Background ── */}

      {/* Cursor trail dots — desktop + hero only */}
      <AnimatePresence>
        {trail.map((dot) => (
          <motion.div
            key={dot.id}
            initial={{ opacity: 0.65, scale: 1 }}
            animate={{ opacity: 0.4, scale: 0.85 }}
            exit={{ opacity: 0, scale: 0.3 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            style={{
              position: 'absolute',
              left: dot.x - 7,
              top: dot.y - 7,
              width: 14,
              height: 14,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(96,165,250,0.85), rgba(34,211,238,0.45))',
              filter: 'blur(2.5px)',
              pointerEvents: 'none',
              zIndex: 3,
            }}
          />
        ))}
      </AnimatePresence>

      <div className="container relative" style={{ zIndex: 2 }}>
        <div className="rg-hero" style={{ gap: 64, alignItems: 'center' }}>
          {/* Left: Copy */}
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            {/* Eyebrow */}
            <motion.div variants={itemVariants} className="mb-7">
              <span className="eyebrow hero-eyebrow">
                <span className="ev-dot" />
                Currently booking 2–3 new engagements per quarter
              </span>
            </motion.div>

            {/* Headline — letter-by-letter typewriter */}
            <h1
              className="font-display"
              style={{
                fontSize: 'clamp(40px, 5vw, 64px)',
                fontWeight: 800,
                lineHeight: 1.08,
                letterSpacing: '-0.02em',
                color: 'var(--text)',
                marginBottom: 0,
              }}
            >
              {H_LINES.map((line, li) => {
                // chars before this line (for global delay offset)
                const offset = H_LINES.slice(0, li).reduce((s, l) => s + l.text.length, 0);
                return (
                  <span key={li} style={{ display: 'block' }}>
                    {line.text.split('').map((char, ci) => {
                      const delay = prefersReducedMotion ? 0 : 0.2 + (offset + ci) * 0.038;
                      const color = line.gradient
                        ? lerpColor(line.text.length > 1 ? ci / (line.text.length - 1) : 0)
                        : undefined;
                      return (
                        <motion.span
                          key={ci}
                          style={{ display: 'inline', color }}
                          initial={{ opacity: prefersReducedMotion ? 1 : 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay, duration: 0.01, ease: 'linear' }}
                        >
                          {char === ' ' ? '\u00A0' : char}
                        </motion.span>
                      );
                    })}
                  </span>
                );
              })}
            </h1>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              style={{ marginTop: 28, fontSize: 18, maxWidth: 520, color: 'var(--text-2)', lineHeight: 1.65 }}
            >
              50+ enterprise platforms shipped across 12 countries. From $5K MVPs to $120K+ production
              systems — without the agency markup or the offshore quality lottery.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              variants={itemVariants}
              className="hero-ctas flex-col sm:flex-row"
              style={{ marginTop: 32, display: 'flex', gap: 12 }}
            >
              <MagneticWrapper>
                <Link href="/tools/project-estimator" className="btn btn-emerald w-full sm:w-auto justify-center" style={{ padding: '14px 22px', fontSize: 15 }}>
                  <Sparkles size={16} />
                  Get a Free Estimate
                </Link>
              </MagneticWrapper>
              <MagneticWrapper>
                <Link href="/solutions" className="btn btn-ghost w-full sm:w-auto justify-center" style={{ padding: '14px 22px', fontSize: 15 }}>
                  Explore Our Products
                  <ArrowRight size={16} />
                </Link>
              </MagneticWrapper>
            </motion.div>

            {/* Social proof row */}
            <motion.div
              variants={itemVariants}
              style={{ marginTop: 32, display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ display: 'flex' }}>
                  {AVATARS.map((initials, i) => (
                    <div
                      key={initials}
                      style={{
                        marginLeft: i ? -10 : 0,
                        width: 32, height: 32, borderRadius: '50%',
                        background: `linear-gradient(135deg, hsl(${i * 70}, 70%, 50%), hsl(${i * 70 + 40}, 70%, 40%))`,
                        border: '2px solid var(--bg)',
                        display: 'grid', placeItems: 'center',
                        fontSize: 10, fontWeight: 700, color: 'white',
                      }}
                    >
                      {initials}
                    </div>
                  ))}
                </div>
                <div style={{ fontSize: 12 }}>
                  <div style={{ display: 'flex', gap: 2, color: '#FCD34D' }}>
                    {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={11} fill="#FCD34D" />)}
                  </div>
                  <div style={{ marginTop: 2, color: 'var(--text-2)' }}>
                    <b style={{ color: 'var(--text)' }}>4.9/5</b> · 50+ verified reviews
                  </div>
                </div>
              </div>
              <div className="hidden sm:block hero-rate-divider" style={{ width: 1, height: 32, background: 'var(--border)' }} />
              <div className="hidden sm:block hero-rate-text" style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-2)' }}>
                <span style={{ color: 'var(--emerald-2)' }}>$25–49/hr</span> · Clutch verified
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Terminal visual */}
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
            style={{ position: 'relative' }}
          >
            {/* Glow */}
            <div style={{
              position: 'absolute', inset: -20,
              background: 'radial-gradient(circle at 50% 50%, rgba(59,130,246,0.25), transparent 70%)',
              filter: 'blur(40px)', zIndex: 0,
            }} />

            {/* Terminal card */}
            <div className="card glow-blue terminal-box" style={{ position: 'relative', zIndex: 1, padding: 0, overflow: 'hidden' }}>
              {/* Title bar */}
              <div style={{
                padding: '10px 14px',
                borderBottom: '1px solid rgba(255,255,255,0.07)',
                display: 'flex', alignItems: 'center', gap: 10,
                background: 'rgba(11,15,27,0.6)',
              }}>
                <div style={{ display: 'flex', gap: 6 }}>
                  {['#F43F5E', '#F59E0B', '#10B981'].map((c) => (
                    <div key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c }} />
                  ))}
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-3)' }}>
                  ~/nimblesl/estimator
                </div>
                <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--emerald)', boxShadow: '0 0 6px var(--emerald)', display: 'inline-block' }} />
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--emerald-2)' }}>AI-powered · 2.4s avg</span>
                </div>
              </div>

              {/* Terminal body */}
              <div style={{ padding: 20, fontFamily: 'var(--font-mono)', fontSize: 12.5, lineHeight: 1.9, minHeight: 200 }}>

                {/* CMD line — always first, shows typing */}
                <div style={{ color: 'var(--text)' }}>
                  <span style={{ color: 'var(--text-3)' }}>$ </span>
                  <span style={{ color: 'var(--text)' }}>
                    {CMD_TEXT.slice(0, typedChars).replace('nimblesl estimate', '').trim()
                      ? (
                        <>
                          <span>nimblesl estimate</span>
                          {' '}
                          <span style={{ color: '#67E8F9' }}>
                            {CMD_TEXT.slice('nimblesl estimate '.length, typedChars)}
                          </span>
                        </>
                      ) : (
                        <span>{CMD_TEXT.slice(0, typedChars)}</span>
                      )
                    }
                  </span>
                  {!cmdDone && <span className="blink">▊</span>}
                </div>

                {/* Subsequent lines — revealed one by one */}
                {TERMINAL_LINES.slice(1).map((line, i) => (
                  <AnimatePresence key={i}>
                    {visibleLines > i && (
                      <motion.div
                        initial={{ opacity: 0, x: -6 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.25 }}
                        style={{
                          color: line.type === 'success' ? 'var(--emerald-2)' : 'var(--text-3)',
                        }}
                      >
                        {line.text}
                      </motion.div>
                    )}
                  </AnimatePresence>
                ))}

                {/* Result box */}
                <AnimatePresence>
                  {showResult && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                      style={{
                        marginTop: 12, padding: 12,
                        background: 'rgba(16,185,129,0.06)',
                        border: '1px solid rgba(16,185,129,0.25)',
                        borderRadius: 8,
                      }}
                    >
                      <div style={{ color: 'var(--text-2)', fontSize: 11, marginBottom: 6 }}>
                        ┌─ ESTIMATE ────────────────────────┐
                      </div>
                      {ESTIMATE_RESULT.map((row, i) => (
                        <motion.div
                          key={row.label}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: i * 0.08, duration: 0.3 }}
                          style={{ display: 'flex', justifyContent: 'space-between' }}
                        >
                          <span style={{ color: 'var(--text-2)' }}>{row.label}</span>
                          <span style={{ color: row.accent ? 'var(--emerald-2)' : 'var(--text)', fontWeight: row.accent ? 700 : 400 }}>
                            {row.value}
                          </span>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Bottom cursor */}
                <AnimatePresence>
                  {showResult && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      style={{ marginTop: 10 }}
                    >
                      <span style={{ color: 'var(--text-3)' }}>$ </span>
                      <span className="blink">▊</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
