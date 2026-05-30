'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const COOKIE_KEY = 'nimblesl-cookie-consent';

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(COOKIE_KEY)) {
      // Delay 1.5s so page renders first
      const t = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(t);
    }
  }, []);

  function accept() {
    localStorage.setItem(COOKIE_KEY, 'accepted');
    setVisible(false);
  }

  function decline() {
    localStorage.setItem(COOKIE_KEY, 'declined');
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div style={{
      position: 'fixed', bottom: 24, left: '50%', transform: 'translateX(-50%)',
      zIndex: 80, width: 'min(920px, calc(100vw - 32px))',
      background: 'var(--surface)',
      backdropFilter: 'blur(14px)',
      border: '1px solid var(--border-2)',
      borderRadius: 14,
      padding: '16px 20px',
      display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap',
      boxShadow: '0 20px 60px -10px rgba(0,0,0,0.5)',
      animation: 'fade-up 0.35s ease forwards',
    }}>
      {/* Icon */}
      <div style={{
        width: 36, height: 36, borderRadius: 9,
        background: 'rgba(59,130,246,0.15)',
        border: '1px solid rgba(59,130,246,0.4)',
        display: 'grid', placeItems: 'center',
        color: 'var(--blue-2)', flexShrink: 0, fontSize: 18,
      }}>🍪</div>

      {/* Text */}
      <div style={{ flex: 1, minWidth: 220 }}>
        <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--text)' }}>
          We use cookies to improve your experience.
        </div>
        <div style={{ fontSize: 12, color: 'var(--text-2)', marginTop: 3 }}>
          Analytics + product use only — never sold, never used for ads.{' '}
          <Link href="/privacy" style={{ color: 'var(--blue-2)' }}>Read our cookie policy</Link>
        </div>
      </div>

      {/* Actions */}
      <div style={{ display: 'flex', gap: 8, flexShrink: 0, flexWrap: 'wrap' }}>
        <button
          onClick={decline}
          className="btn btn-ghost"
          style={{ padding: '8px 16px', fontSize: 13 }}
        >
          Decline
        </button>
        <button
          onClick={accept}
          className="btn btn-primary"
          style={{ padding: '8px 16px', fontSize: 13 }}
        >
          Accept all
        </button>
      </div>
    </div>
  );
}
