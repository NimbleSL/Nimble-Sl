import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Download,
  ArrowRight,
  Sparkles,
  Clock,
  Mic,
  Zap,
  ExternalLink,
  Check,
} from 'lucide-react';
import FeaturesGrid from './FeaturesGrid';

export const metadata: Metadata = {
  title: 'Products — NimbleSL',
  description:
    'NimbleScribe is a free, private voice transcription app for macOS and Windows. No cloud, no account, no data leaving your device. Runs entirely on-device.',
  openGraph: {
    title: 'NimbleScribe — Private Voice Transcription for Mac & Windows',
    description: 'Dictate anywhere on your device. Private, instant, and completely free.',
    url: 'https://nimblesl.com/products',
  },
};

const DOWNLOAD_URL =
  'https://github.com/anikherenow/Nimblescribe-Releases/releases/latest/download/NimbleScribe.dmg';
const DOWNLOAD_URL_WINDOWS =
  'https://github.com/anikherenow/Nimblescribe-Releases/releases/latest/download/NimbleScribe.msix';

const STEPS = [
  { n: '01', label: 'Press your shortcut', desc: 'Hold the hotkey you set — recording starts instantly from your microphone.' },
  { n: '02', label: 'Speak naturally', desc: 'Talk at your normal pace. NimbleScribe handles the rest on-device.' },
  { n: '03', label: 'Text appears at cursor', desc: 'Release the key. Your transcription is pasted wherever you\'re typing.' },
];

export default function ProductsPage() {
  return (
    <main style={{ background: 'var(--bg)' }}>

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section style={{ paddingTop: 140, paddingBottom: 72, position: 'relative', overflow: 'hidden' }}>
        {/* Background glow */}
        <div style={{
          position: 'absolute', top: -80, left: '50%', transform: 'translateX(-50%)',
          width: 800, height: 500,
          background: 'radial-gradient(ellipse at center, rgba(168,85,247,0.1) 0%, rgba(96,165,250,0.05) 40%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div className="container" style={{ textAlign: 'center', position: 'relative', maxWidth: 760 }}>

          {/* App icon */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}>
            <div style={{ position: 'relative' }}>
              <div style={{
                position: 'absolute', inset: -12,
                background: 'radial-gradient(circle, rgba(168,85,247,0.25) 0%, transparent 70%)',
                borderRadius: '50%',
              }} />
              <Image
                src="/nimblescribe-icon.png"
                alt="NimbleScribe"
                width={80}
                height={80}
                style={{ borderRadius: 20, position: 'relative', zIndex: 1, boxShadow: '0 8px 32px rgba(168,85,247,0.3)' }}
              />
            </div>
          </div>

          {/* Eyebrow */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 18 }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, padding: '4px 10px', borderRadius: 20, background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.25)', fontSize: 11, fontWeight: 700, color: '#10B981', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#10B981', display: 'inline-block', animation: 'pulse 2s infinite' }} />
              Available Now
            </span>
          </div>

          {/* Headline */}
          <h1 style={{ fontSize: 'clamp(40px, 6vw, 68px)', fontWeight: 800, lineHeight: 1.05, letterSpacing: '-1.5px', marginBottom: 20, color: 'var(--text)' }}>
            Your voice,{' '}
            <span style={{ background: 'linear-gradient(135deg, #A855F7, #7C3AED, #06B6D4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              typed instantly.
            </span>
          </h1>

          {/* Subheading */}
          <p style={{ fontSize: 18, color: 'var(--text-2)', lineHeight: 1.7, maxWidth: 560, margin: '0 auto 36px', fontWeight: 400 }}>
            NimbleScribe lives in your menu bar. Press a shortcut, speak, and your words appear
            at your cursor — in any app, with full privacy, entirely on your device.
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 32 }}>
            <a
              href={DOWNLOAD_URL}
              className="btn btn-primary"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '12px 24px', fontSize: 15, fontWeight: 700,
                background: 'linear-gradient(135deg, #A855F7, #7C3AED)',
                boxShadow: '0 4px 24px rgba(168,85,247,0.4)',
                borderRadius: 12,
              }}
            >
              <Download size={16} />
              Download for Mac
            </a>
            <a
              href={DOWNLOAD_URL_WINDOWS}
              className="btn btn-primary"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '12px 24px', fontSize: 15, fontWeight: 700,
                background: 'linear-gradient(135deg, #0078D4, #005a9e)',
                boxShadow: '0 4px 24px rgba(0,120,212,0.35)',
                borderRadius: 12,
              }}
            >
              <Download size={16} />
              Download for Windows
            </a>
            <a
              href="https://github.com/anikherenow/Nimblescribe-Releases"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 20px', fontSize: 15, borderRadius: 12 }}
            >
              <ExternalLink size={15} />
              View on GitHub
            </a>
          </div>

          {/* System req badges */}
          <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap' }}>
            {['macOS 13 Ventura+  ·  Windows 10/11', 'Apple Silicon (M1–M4)  ·  Any x64 CPU', 'Free — no subscription'].map((req) => (
              <span key={req} style={{ display: 'inline-flex', alignItems: 'center', gap: 5, padding: '5px 12px', borderRadius: 20, background: 'var(--overlay-xs)', border: '1px solid var(--border)', fontSize: 12, color: 'var(--text-3)', fontWeight: 500 }}>
                <Check size={11} style={{ color: '#10B981' }} />
                {req}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── App Screenshot ───────────────────────────────────────────────── */}
      <section style={{ paddingBottom: 100, position: 'relative' }}>
        {/* Bottom fade */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 100, background: 'linear-gradient(to bottom, transparent, var(--bg))', zIndex: 1, pointerEvents: 'none' }} />

        <div className="container" style={{ maxWidth: 1100, position: 'relative' }}>
          {/* Glow behind screenshot */}
          <div style={{
            position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)',
            width: '70%', height: '60%',
            background: 'radial-gradient(ellipse, rgba(168,85,247,0.12) 0%, rgba(96,165,250,0.06) 50%, transparent 75%)',
            filter: 'blur(40px)',
            pointerEvents: 'none',
          }} />

          {/* Mac window frame */}
          <div style={{
            borderRadius: 16,
            overflow: 'hidden',
            border: '1px solid rgba(255,255,255,0.1)',
            boxShadow: '0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.05)',
            position: 'relative',
            zIndex: 2,
          }}>
            {/* Title bar */}
            <div style={{
              height: 36,
              background: 'rgba(20,25,40,0.98)',
              borderBottom: '1px solid rgba(255,255,255,0.06)',
              display: 'flex',
              alignItems: 'center',
              padding: '0 16px',
              gap: 8,
              flexShrink: 0,
            }}>
              {/* Traffic lights */}
              {['#FF5F57', '#FEBC2E', '#28C840'].map((c) => (
                <div key={c} style={{ width: 12, height: 12, borderRadius: '50%', background: c }} />
              ))}
              <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
                <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', fontFamily: 'var(--font-mono)', letterSpacing: '0.02em' }}>
                  NimbleScribe
                </span>
              </div>
            </div>

            {/* Screenshot */}
            <Image
              src="/products/nimblescribe-dark.png"
              alt="NimbleScribe app — Settings screen"
              width={1100}
              height={688}
              style={{ display: 'block', width: '100%', height: 'auto' }}
              priority
            />
          </div>
        </div>
      </section>

      {/* ── Features Grid ────────────────────────────────────────────────── */}
      <section style={{ paddingBottom: 100 }}>
        <div className="container" style={{ maxWidth: 1000 }}>

          {/* Section label */}
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <div className="eyebrow" style={{ justifyContent: 'center', marginBottom: 14 }}>
              <Mic size={13} style={{ color: 'var(--purple)' }} />
              Everything you need
            </div>
            <h2 style={{ fontSize: 'clamp(26px, 4vw, 40px)', fontWeight: 800, letterSpacing: '-0.8px', color: 'var(--text)', marginBottom: 12 }}>
              Built for people who type{' '}
              <span style={{ color: 'var(--purple-2)' }}>a lot</span>.
            </h2>
            <p style={{ fontSize: 16, color: 'var(--text-2)', maxWidth: 480, margin: '0 auto' }}>
              Every feature is designed for speed, privacy, and staying in flow.
            </p>
          </div>

          {/* 3-col bento grid */}
          <FeaturesGrid />
        </div>
      </section>

      {/* ── Themes showcase ──────────────────────────────────────────────── */}
      <section style={{ paddingBottom: 100 }}>
        <div className="container" style={{ maxWidth: 1100 }}>

          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <div className="eyebrow" style={{ justifyContent: 'center', marginBottom: 14 }}>
              <Sparkles size={13} style={{ color: 'var(--purple)' }} />
              Four themes
            </div>
            <h2 style={{ fontSize: 'clamp(26px, 4vw, 40px)', fontWeight: 800, letterSpacing: '-0.8px', color: 'var(--text)', marginBottom: 12 }}>
              Adapts to your{' '}
              <span style={{ color: 'var(--purple-2)' }}>workspace.</span>
            </h2>
            <p style={{ fontSize: 16, color: 'var(--text-2)', maxWidth: 420, margin: '0 auto' }}>
              Dark, Light, System, and Glass — switch anytime from Settings.
            </p>
          </div>

          {/* Two screenshots side by side */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, alignItems: 'start' }}>

            {/* Dark */}
            <div>
              <div style={{
                borderRadius: 14,
                overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.1)',
                boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
              }}>
                {/* Title bar */}
                <div style={{ height: 32, background: 'rgba(15,20,35,0.98)', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', padding: '0 14px', gap: 7 }}>
                  {['#FF5F57', '#FEBC2E', '#28C840'].map((c) => (
                    <div key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c }} />
                  ))}
                  <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
                    <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.25)', fontFamily: 'var(--font-mono)' }}>NimbleScribe</span>
                  </div>
                </div>
                <Image
                  src="/products/nimblescribe-dark.png"
                  alt="NimbleScribe dark theme"
                  width={756}
                  height={473}
                  style={{ display: 'block', width: '100%', height: 'auto' }}
                />
              </div>
              <div style={{ marginTop: 14, display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'rgba(168,85,247,0.6)', display: 'inline-block', flexShrink: 0 }} />
                <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-2)' }}>Dark</span>
                <span style={{ fontSize: 12, color: 'var(--text-3)' }}>— deep, focused, easy on the eyes</span>
              </div>
            </div>

            {/* Glass */}
            <div style={{ marginTop: 32 }}>
              <div style={{
                borderRadius: 14,
                overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.15)',
                boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
              }}>
                {/* Title bar */}
                <div style={{ height: 32, background: 'rgba(220,225,235,0.95)', borderBottom: '1px solid rgba(0,0,0,0.08)', display: 'flex', alignItems: 'center', padding: '0 14px', gap: 7 }}>
                  {['#FF5F57', '#FEBC2E', '#28C840'].map((c) => (
                    <div key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c }} />
                  ))}
                  <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
                    <span style={{ fontSize: 11, color: 'rgba(0,0,0,0.3)', fontFamily: 'var(--font-mono)' }}>NimbleScribe</span>
                  </div>
                </div>
                <Image
                  src="/products/nimblescribe-glass.png"
                  alt="NimbleScribe glass theme"
                  width={756}
                  height={473}
                  style={{ display: 'block', width: '100%', height: 'auto' }}
                />
              </div>
              <div style={{ marginTop: 14, display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'rgba(96,165,250,0.7)', display: 'inline-block', flexShrink: 0 }} />
                <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-2)' }}>Glass</span>
                <span style={{ fontSize: 12, color: 'var(--text-3)' }}>— translucent, native macOS feel</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── How it works ─────────────────────────────────────────────────── */}
      <section style={{ paddingBottom: 100 }}>
        <div className="container" style={{ maxWidth: 900 }}>
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <div className="eyebrow" style={{ justifyContent: 'center', marginBottom: 14 }}>
              <Zap size={13} style={{ color: 'var(--cyan)' }} />
              Three steps
            </div>
            <h2 style={{ fontSize: 'clamp(26px, 4vw, 38px)', fontWeight: 800, letterSpacing: '-0.8px', color: 'var(--text)' }}>
              Simpler than you think.
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 2, position: 'relative' }}>
            {STEPS.map(({ n, label, desc }, i) => (
              <div
                key={n}
                style={{
                  padding: '32px 28px',
                  background: i === 1 ? 'var(--surface)' : 'var(--overlay-xs)',
                  border: `1px solid ${i === 1 ? 'rgba(168,85,247,0.2)' : 'var(--border)'}`,
                  borderRadius: i === 0 ? '16px 0 0 16px' : i === 2 ? '0 16px 16px 0' : 0,
                  position: 'relative',
                }}
              >
                <div style={{
                  fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 700,
                  color: i === 1 ? 'var(--purple-2)' : 'var(--text-3)',
                  letterSpacing: '0.1em', marginBottom: 16,
                }}>
                  {n}
                </div>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: 'var(--text)', marginBottom: 10, letterSpacing: '-0.2px' }}>
                  {label}
                </h3>
                <p style={{ fontSize: 14, color: 'var(--text-2)', lineHeight: 1.65, margin: 0 }}>
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Download CTA ─────────────────────────────────────────────────── */}
      <section style={{ paddingBottom: 100 }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <div style={{
            borderRadius: 20,
            padding: '52px 40px',
            textAlign: 'center',
            background: 'linear-gradient(135deg, rgba(168,85,247,0.08) 0%, rgba(96,165,250,0.05) 100%)',
            border: '1px solid rgba(168,85,247,0.15)',
            position: 'relative',
            overflow: 'hidden',
          }}>
            {/* Glow */}
            <div style={{ position: 'absolute', top: -60, left: '50%', transform: 'translateX(-50%)', width: 300, height: 200, background: 'radial-gradient(ellipse, rgba(168,85,247,0.15), transparent 70%)', pointerEvents: 'none' }} />

            <Image
              src="/nimblescribe-icon.png"
              alt="NimbleScribe"
              width={60}
              height={60}
              style={{ borderRadius: 16, marginBottom: 20, boxShadow: '0 6px 24px rgba(168,85,247,0.3)', position: 'relative' }}
            />

            <h2 style={{ fontSize: 28, fontWeight: 800, letterSpacing: '-0.6px', color: 'var(--text)', marginBottom: 12 }}>
              Ready to ditch the keyboard?
            </h2>
            <p style={{ fontSize: 16, color: 'var(--text-2)', lineHeight: 1.65, maxWidth: 440, margin: '0 auto 32px' }}>
              Download NimbleScribe free. No email required, no trial, no subscription —
              just the app.
            </p>

            <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a
                href={DOWNLOAD_URL}
                className="btn btn-primary"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  padding: '13px 28px', fontSize: 15, fontWeight: 700,
                  background: 'linear-gradient(135deg, #A855F7, #7C3AED)',
                  boxShadow: '0 6px 28px rgba(168,85,247,0.45)',
                  borderRadius: 12,
                }}
              >
                <svg width="15" height="15" viewBox="0 0 814 1000" fill="currentColor" style={{ flexShrink: 0 }}>
                  <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-42.8-154.8-104.1C33 376.8 33 340.7 33 319.2 33 191.6 123.5 99 267.5 99c73.8 0 133.6 49.4 178.7 49.4 43.2 0 111.9-52.5 194.5-52.5 31.6 0 133.5 5.2 200.7 96zM469.5 90.7c-16.3-19.9-27.8-47.4-27.8-74.9 0-3.8.3-7.7 1-11.5 26.5 1 57.2 17.6 77.1 41.2 14.4 16.9 28.4 44.4 28.4 72.2 0 4.2-.6 8.4-1 9.7-1.6.3-4.2.6-6.8.6-23.8 0-51.5-15.9-70.9-37.3z" />
                </svg>
                Download for Mac
              </a>
              <a
                href={DOWNLOAD_URL_WINDOWS}
                className="btn btn-ghost"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  padding: '13px 28px', fontSize: 15, fontWeight: 700,
                  borderRadius: 12,
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
                  <path d="M3 3h8v8H3zm10 0h8v8h-8zM3 13h8v8H3zm10 0h8v8h-8z" />
                </svg>
                Download for Windows
              </a>
              <a
                href="https://github.com/anikherenow/Nimblescribe-Releases"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 7, padding: '13px 20px', fontSize: 15, borderRadius: 12 }}
              >
                <ExternalLink size={15} />
                Release Notes
              </a>
            </div>

            <p style={{ marginTop: 18, fontSize: 12, color: 'var(--text-3)' }}>
              macOS 13 Ventura+ · Apple Silicon (M1–M4) &nbsp;·&nbsp; Windows 10/11 · x64
            </p>
          </div>
        </div>
      </section>

      {/* ── Coming soon ──────────────────────────────────────────────────── */}
      <section style={{ paddingBottom: 120 }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <div style={{
            borderRadius: 16,
            border: '1px solid var(--border)',
            padding: '36px 40px',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            gap: 24, flexWrap: 'wrap',
            background: 'var(--overlay-xs)',
          }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                <Clock size={15} style={{ color: 'var(--text-3)' }} />
                <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '0.08em', fontFamily: 'var(--font-mono)' }}>More coming</span>
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: 'var(--text)', marginBottom: 6 }}>
                More tools on the way
              </h3>
              <p style={{ fontSize: 14, color: 'var(--text-3)', lineHeight: 1.6, margin: 0, maxWidth: 400 }}>
                We keep running into problems existing software doesn&apos;t solve.
                When that happens, we build the fix — and release it free.
              </p>
            </div>
            <Link
              href="/contact"
              className="btn btn-ghost"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: 14, whiteSpace: 'nowrap', flexShrink: 0 }}
            >
              Stay in the loop
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
