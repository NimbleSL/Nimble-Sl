'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const STORAGE_KEY = 'nimblesl-exit-intent-shown';

export function ExitIntent() {
  const [open, setOpen] = useState(false);
  const shown = useRef(false);

  useEffect(() => {
    // Only show once per session
    if (sessionStorage.getItem(STORAGE_KEY)) return;

    function handleMouseLeave(e: MouseEvent) {
      if (e.clientY <= 8 && !shown.current) {
        shown.current = true;
        sessionStorage.setItem(STORAGE_KEY, '1');
        // Small delay so it feels natural
        setTimeout(() => setOpen(true), 200);
      }
    }

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, []);

  function close() { setOpen(false); }

  if (!open) return null;

  return (
    <div
      onClick={(e) => { if (e.target === e.currentTarget) close(); }}
      style={{
        position: 'fixed', inset: 0, zIndex: 100,
        background: 'rgba(6,9,15,0.80)',
        backdropFilter: 'blur(8px)',
        display: 'grid', placeItems: 'center',
        animation: 'fade-in 0.25s ease forwards',
      }}
    >
      <div className="card" style={{
        width: 'min(520px, calc(100vw - 32px))',
        padding: 36, position: 'relative',
        background: 'linear-gradient(180deg, var(--surface-2), var(--surface))',
        border: '1px solid var(--border-2)',
        boxShadow: '0 30px 80px -10px rgba(0,0,0,0.6)',
      }}>
        {/* Close */}
        <button
          onClick={close}
          style={{
            position: 'absolute', top: 16, right: 16,
            background: 'transparent', border: 0,
            color: 'var(--text-2)', cursor: 'pointer', fontSize: 18, lineHeight: 1,
          }}
        >✕</button>

        {/* Eyebrow */}
        <div className="eyebrow" style={{ marginBottom: 16 }}>
          <span className="ev-dot" /> Before you go
        </div>

        <h3 style={{ fontSize: 26, fontWeight: 700, color: 'var(--text)', marginBottom: 12, fontFamily: 'var(--font-sans)' }}>
          Get your project estimated in 3 minutes — free.
        </h3>
        <p style={{ fontSize: 14, color: 'var(--text-2)', lineHeight: 1.65, marginBottom: 20 }}>
          Skip the "fill a form and wait 3 days" routine. Our AI Estimator gives you scope, timeline, and cost range backed by 50+ delivered projects.
        </p>

        <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
          <Link
            href="/tools/project-estimator"
            onClick={close}
            className="btn btn-emerald"
            style={{ flex: 1, justifyContent: 'center', padding: '12px' }}
          >
            Try AI Estimator →
          </Link>
          <button
            onClick={close}
            className="btn btn-ghost"
            style={{ padding: '12px 16px' }}
          >
            No thanks
          </button>
        </div>

        <div style={{ fontSize: 11, color: 'var(--text-3)', display: 'flex', alignItems: 'center', gap: 5 }}>
          🔒 No email required. PDF report delivered instantly.
        </div>
      </div>
    </div>
  );
}
