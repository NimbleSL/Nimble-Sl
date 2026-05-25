'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, Sparkles, MessageCircle, Shield, ArrowRight, Clock, Zap, Bot } from 'lucide-react';
import { useInView } from '@/hooks/useInView';
import { MagneticWrapper } from '@/components/ui/MagneticWrapper';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const TRACKS = [
  {
    icon: Calendar,
    iconBg: 'rgba(59,130,246,0.12)',
    iconColor: '#60A5FA',
    border: 'rgba(59,130,246,0.2)',
    tag: 'Most popular',
    tagColor: '#60A5FA',
    tagBg: 'rgba(59,130,246,0.1)',
    title: 'Book a Free Call',
    desc: 'Talk to our team. 30 minutes, no sales pitch — just honest answers about your project.',
    meta: '30 min · Free · No commitment',
    cta: 'Schedule now',
    href: '/contact',
    btnClass: 'btn btn-primary',
    isLink: true,
  },
  {
    icon: Sparkles,
    iconBg: 'rgba(16,185,129,0.12)',
    iconColor: '#34D399',
    border: 'rgba(16,185,129,0.2)',
    tag: 'Instant',
    tagColor: '#34D399',
    tagBg: 'rgba(16,185,129,0.1)',
    title: 'AI Project Estimator',
    desc: 'Get a detailed scope, team breakdown, timeline and cost estimate — powered by AI in under 3 minutes.',
    meta: '~3 min · Free · AI-powered',
    cta: 'Try it free',
    href: '/tools/project-estimator',
    btnClass: 'btn btn-emerald',
    isLink: true,
  },
  {
    icon: Bot,
    iconBg: 'rgba(168,85,247,0.12)',
    iconColor: '#C084FC',
    border: 'rgba(168,85,247,0.2)',
    tag: 'Online now',
    tagColor: '#C084FC',
    tagBg: 'rgba(168,85,247,0.1)',
    title: 'Chat with NimbleBot',
    desc: 'Ask about services, pricing, timelines or tech stack. NimbleBot answers instantly, 24/7.',
    meta: 'Instant · No signup · AI chat',
    cta: 'Start chatting',
    href: null,
    btnClass: 'btn btn-ghost',
    isLink: false,
  },
];

export function FinalCTA() {
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.15 });

  const openNimbleBot = () => {
    window.dispatchEvent(new CustomEvent('open-nimblebot'));
  };

  return (
    <section
      ref={ref}
      style={{ padding: '80px 0 96px', position: 'relative', overflow: 'hidden' }}
    >
      {/* Background glow */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 1000px 500px at 50% 100%, rgba(59,130,246,0.1), transparent 65%)',
        pointerEvents: 'none',
      }} />
      <div className="grid-bg absolute inset-0" style={{ opacity: 0.3 }} />

      <div className="container" style={{ position: 'relative' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          style={{ textAlign: 'center', marginBottom: 56 }}
        >
          <span className="eyebrow" style={{ display: 'inline-flex', marginBottom: 16 }}>
            <span className="ev-dot" /> 3 ways to get started
          </span>
          <ScrollReveal
            as="h2"
            className="font-display"
            style={{ fontSize: 'clamp(30px, 4vw, 52px)', fontWeight: 800, color: 'var(--text)', lineHeight: 1.1, display: 'block' }}
          >
            Ready to build something great?
          </ScrollReveal>
          <p style={{ marginTop: 14, fontSize: 17, color: 'var(--text-2)', maxWidth: 460, margin: '14px auto 0' }}>
            Pick the path that works for you. All three are free.
          </p>
        </motion.div>

        {/* Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
          {TRACKS.map((track, i) => {
            const Icon = track.icon;
            const content = (
              <motion.div
                key={track.title}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1, ease: 'easeOut' }}
                className="card card-hover card-border-trace"
                style={{
                  padding: '28px 28px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 0,
                  border: `1px solid ${track.border}`,
                  cursor: track.isLink ? 'default' : 'default',
                  height: '100%',
                }}
              >
                {/* Icon + tag row */}
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 20 }}>
                  <div
                    style={{
                      width: 48, height: 48, borderRadius: 14,
                      background: track.iconBg,
                      border: `1px solid ${track.border}`,
                      display: 'grid', placeItems: 'center', flexShrink: 0,
                    }}
                  >
                    <Icon size={22} style={{ color: track.iconColor }} />
                  </div>
                  <span
                    style={{
                      fontSize: 11, fontWeight: 700, textTransform: 'uppercase',
                      letterSpacing: '0.08em', padding: '4px 10px', borderRadius: 999,
                      background: track.tagBg, color: track.tagColor,
                      border: `1px solid ${track.border}`,
                      fontFamily: 'var(--font-mono)',
                    }}
                  >
                    {track.tag}
                  </span>
                </div>

                {/* Text */}
                <h3
                  className="font-display"
                  style={{ fontSize: 20, fontWeight: 700, color: 'var(--text)', marginBottom: 10, lineHeight: 1.25 }}
                >
                  {track.title}
                </h3>
                <p style={{ fontSize: 14, color: 'var(--text-2)', lineHeight: 1.6, flex: 1, marginBottom: 20 }}>
                  {track.desc}
                </p>

                {/* Meta */}
                <div
                  style={{
                    fontSize: 11, color: 'var(--text-3)', fontFamily: 'var(--font-mono)',
                    marginBottom: 20, padding: '8px 12px', borderRadius: 8,
                    background: 'var(--surface-2)',
                  }}
                >
                  {track.meta}
                </div>

                {/* CTA */}
                <MagneticWrapper style={{ width: '100%' }}>
                  {track.isLink ? (
                    <Link
                      href={track.href!}
                      className={`${track.btnClass} w-full justify-center`}
                      style={{ padding: '12px 20px', fontSize: 14, width: '100%' }}
                    >
                      {track.cta}
                      <ArrowRight size={14} />
                    </Link>
                  ) : (
                    <button
                      onClick={openNimbleBot}
                      className={`${track.btnClass} w-full justify-center`}
                      style={{ padding: '12px 20px', fontSize: 14, width: '100%' }}
                    >
                      {track.cta}
                      <ArrowRight size={14} />
                    </button>
                  )}
                </MagneticWrapper>
              </motion.div>
            );

            return content;
          })}
        </div>

        {/* Guarantee strip */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          style={{ marginTop: 40, display: 'flex', justifyContent: 'center' }}
        >
          <div
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              padding: '12px 24px', borderRadius: 999,
              background: 'rgba(16,185,129,0.07)',
              border: '1px solid rgba(16,185,129,0.2)',
              flexWrap: 'wrap', justifyContent: 'center',
            }}
          >
            <Shield size={15} style={{ color: 'var(--emerald)', flexShrink: 0 }} />
            <span style={{ fontSize: 13, color: 'var(--text-2)', textAlign: 'center' }}>
              <span style={{ color: 'var(--text)', fontWeight: 600 }}>1-Week Risk-Free Pilot</span>
              {' '}— not satisfied after week one? You don&apos;t pay. Zero questions asked.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
