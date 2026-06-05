'use client';
import React, { useState, useEffect, useRef } from 'react';

interface Toast {
  company: string;
  location: string;
  action: string;
  icon: string;
  color: string;
  minutesAgo: number;
}

const TOASTS: Toast[] = [
  { company: 'FinTech startup',      location: 'Berlin',        action: 'Project kicked off',     icon: '🚀', color: '#10B981', minutesAgo: 2 * 24 * 60 },
  { company: 'InsurTech team',       location: 'London',        action: 'Discovery call booked',  icon: '📅', color: '#3B82F6', minutesAgo: 5 * 60 },
  { company: 'E-commerce platform',  location: 'New York',      action: 'Estimate requested',     icon: '✨', color: '#A855F7', minutesAgo: 3 },
  { company: 'HealthTech build',     location: 'Singapore',     action: 'Phase 2 kicked off',     icon: '⚡', color: '#06B6D4', minutesAgo: 27 * 60 },
  { company: 'PropTech firm',        location: 'Dubai',         action: 'Contract signed',        icon: '✅', color: '#10B981', minutesAgo: 3 * 24 * 60 },
  { company: 'SaaS startup',         location: 'Toronto',       action: 'MVP delivered on time',  icon: '🎯', color: '#F59E0B', minutesAgo: 4 * 24 * 60 },
  { company: 'Logistics platform',   location: 'Sydney',        action: 'Dev team onboarded',     icon: '👥', color: '#3B82F6', minutesAgo: 7 * 60 },
  { company: 'AI/ML startup',        location: 'San Francisco', action: 'Estimate requested',     icon: '🤖', color: '#A855F7', minutesAgo: 18 },
  { company: 'Banking platform',     location: 'Frankfurt',     action: 'Contract signed',        icon: '✅', color: '#10B981', minutesAgo: 51 * 60 },
  { company: 'HR Tech company',      location: 'Amsterdam',     action: 'Discovery call booked',  icon: '📅', color: '#3B82F6', minutesAgo: 14 * 60 },
  { company: 'Cybersecurity firm',   location: 'Tel Aviv',      action: 'Project kicked off',     icon: '🚀', color: '#10B981', minutesAgo: 1 * 24 * 60 + 4 * 60 },
  { company: 'MedTech startup',      location: 'Zürich',        action: 'Scope doc approved',     icon: '📄', color: '#06B6D4', minutesAgo: 2 * 60 + 40 },
];

function formatTime(minutesAgo: number): string {
  if (minutesAgo < 2)  return 'Just now';
  if (minutesAgo < 60) return `${minutesAgo}m ago`;
  const hours = Math.floor(minutesAgo / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  return `${days}d ago`;
}

// Fisher-Yates shuffle
function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function ActivityToast() {
  const [current, setCurrent] = useState<Toast | null>(null);
  const [visible, setVisible]   = useState(false);
  const queueRef = useRef<Toast[]>([]);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  function showNext() {
    // Refill & reshuffle when queue runs out
    if (queueRef.current.length === 0) {
      queueRef.current = shuffle(TOASTS);
    }
    const next = queueRef.current.shift()!;
    setCurrent(next);
    setVisible(true);
  }

  useEffect(() => {
    // Pre-shuffle on mount
    queueRef.current = shuffle(TOASTS);

    // First toast after 8s
    timerRef.current = setTimeout(showNext, 8000);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!visible) return;
    // Auto-dismiss after 5s, next toast after 22s
    const dismiss = setTimeout(() => setVisible(false), 5000);
    const next    = setTimeout(showNext, 22000);
    return () => { clearTimeout(dismiss); clearTimeout(next); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible, current]);

  if (!current || !visible) return null;

  return (
    <div style={{
      position: 'fixed', bottom: 88, left: 24, zIndex: 75,
      width: 300,
      background: 'var(--surface)',
      backdropFilter: 'blur(14px)',
      border: `1px solid ${current.color}44`,
      borderRadius: 12,
      padding: '14px 16px',
      display: 'flex', gap: 12,
      boxShadow: '0 20px 40px -10px rgba(0,0,0,0.45)',
      animation: 'fade-up 0.3s ease forwards',
    }}>
      <div style={{
        width: 36, height: 36, borderRadius: 9,
        background: `${current.color}20`,
        border: `1px solid ${current.color}44`,
        display: 'grid', placeItems: 'center',
        flexShrink: 0, fontSize: 16,
      }}>{current.icon}</div>

      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--text)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {current.action}
        </div>
        <div style={{ fontSize: 11, color: 'var(--text-2)', marginTop: 2 }}>
          {current.company} · {current.location}
        </div>
        <div style={{ fontSize: 10, color: 'var(--text-3)', marginTop: 3, fontFamily: 'var(--font-mono)' }}>
          {formatTime(current.minutesAgo)}
        </div>
      </div>

      <button
        onClick={() => setVisible(false)}
        style={{ background: 'transparent', border: 0, color: 'var(--text-3)', cursor: 'pointer', padding: 2, alignSelf: 'flex-start', fontSize: 14, lineHeight: 1 }}
        aria-label="Dismiss notification"
      >✕</button>
    </div>
  );
}
