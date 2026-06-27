'use client';

import { Lock, Zap, Globe, Sparkles, History, KeyRound } from 'lucide-react';

const FEATURES = [
  {
    icon: Lock,
    color: '#10B981',
    bg: 'rgba(16,185,129,0.08)',
    label: 'Fully Private',
    desc: 'Everything runs on your Mac. No cloud, no account, no audio ever leaves your device.',
  },
  {
    icon: Zap,
    color: '#60A5FA',
    bg: 'rgba(96,165,250,0.08)',
    label: 'Instant Results',
    desc: 'Transcription finishes in under a second on Apple Silicon. No lag, no spinner.',
  },
  {
    icon: Globe,
    color: '#22D3EE',
    bg: 'rgba(34,211,238,0.08)',
    label: '100+ Languages',
    desc: 'Speak in any language — English, Bengali, Spanish, Arabic, and 100+ more.',
  },
  {
    icon: Sparkles,
    color: '#C084FC',
    bg: 'rgba(192,132,252,0.08)',
    label: 'AI Cleanup',
    desc: 'Automatically removes filler words, fixes formatting, and polishes your text.',
  },
  {
    icon: History,
    color: '#FCD34D',
    bg: 'rgba(252,211,77,0.08)',
    label: 'Full History',
    desc: 'Every transcription is saved locally. Search, copy, export, or delete anytime.',
  },
  {
    icon: KeyRound,
    color: '#FB7185',
    bg: 'rgba(251,113,133,0.08)',
    label: 'Global Hotkey',
    desc: 'One shortcut. Works in Slack, Mail, Notion, Chrome — any app on your Mac.',
  },
];

export default function FeaturesGrid() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
      {FEATURES.map(({ icon: Icon, color, bg, label, desc }) => (
        <div
          key={label}
          style={{
            padding: '28px 28px 24px',
            borderRadius: 16,
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            transition: 'border-color 0.2s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.borderColor = `${color}40`)}
          onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
        >
          <div style={{
            width: 44, height: 44, borderRadius: 12, background: bg,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            marginBottom: 18,
          }}>
            <Icon size={20} style={{ color }} />
          </div>
          <h3 style={{ fontSize: 16, fontWeight: 700, color: 'var(--text)', marginBottom: 8, letterSpacing: '-0.2px' }}>
            {label}
          </h3>
          <p style={{ fontSize: 14, color: 'var(--text-2)', lineHeight: 1.65, margin: 0 }}>
            {desc}
          </p>
        </div>
      ))}
    </div>
  );
}
