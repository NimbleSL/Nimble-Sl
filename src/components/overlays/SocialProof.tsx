'use client';
import React, { useState, useEffect } from 'react';

const TOASTS = [
  { company: 'FinTech startup in Berlin', action: 'Project kicked off', time: '2 days ago', color: '#10B981' },
  { company: 'InsurTech team in London', action: 'Discovery call booked', time: '5 hours ago', color: '#3B82F6' },
  { company: 'E-commerce platform in NYC', action: 'Estimate requested', time: 'Just now', color: '#A855F7' },
  { company: 'HealthTech build in Singapore', action: 'Phase 2 kicked off', time: '1 day ago', color: '#06B6D4' },
];

export function ActivityToast() {
  const [current, setCurrent] = useState<number | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // First toast after 8s
    const first = setTimeout(() => {
      setCurrent(0);
      setVisible(true);
    }, 8000);

    return () => clearTimeout(first);
  }, []);

  useEffect(() => {
    if (current === null) return;
    // Auto-dismiss after 6s, then show next after 20s
    const dismiss = setTimeout(() => setVisible(false), 6000);
    const next = setTimeout(() => {
      setCurrent(i => {
        const nextIdx = ((i ?? 0) + 1) % TOASTS.length;
        return nextIdx;
      });
      setVisible(true);
    }, 28000);
    return () => { clearTimeout(dismiss); clearTimeout(next); };
  }, [current]);

  if (current === null || !visible) return null;

  const t = TOASTS[current];

  return (
    <div style={{
      position: 'fixed', bottom: 88, left: 24, zIndex: 75,
      width: 300,
      background: 'var(--surface)',
      backdropFilter: 'blur(14px)',
      border: `1px solid ${t.color}44`,
      borderRadius: 12,
      padding: '14px 16px',
      display: 'flex', gap: 12,
      boxShadow: '0 20px 40px -10px rgba(0,0,0,0.45)',
      animation: 'fade-up 0.3s ease forwards',
    }}>
      <div style={{
        width: 36, height: 36, borderRadius: 9,
        background: `${t.color}20`,
        border: `1px solid ${t.color}44`,
        display: 'grid', placeItems: 'center',
        color: t.color, flexShrink: 0, fontSize: 16,
      }}>🚀</div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--text)' }}>{t.action}</div>
        <div style={{ fontSize: 11, color: 'var(--text-2)', marginTop: 2 }}>{t.company} · {t.time}</div>
      </div>
      <button
        onClick={() => setVisible(false)}
        style={{ background: 'transparent', border: 0, color: 'var(--text-3)', cursor: 'pointer', padding: 2, alignSelf: 'flex-start' }}
      >✕</button>
    </div>
  );
}
