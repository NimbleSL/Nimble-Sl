'use client';

import { useEffect, useState } from 'react';

interface TOCItem {
  id: string;
  label: string;
}

export function BlogTOC({ headings }: { headings: TOCItem[] }) {
  const [active, setActive] = useState<string>(headings[0]?.id ?? '');

  useEffect(() => {
    if (!headings.length) return;

    const observers: IntersectionObserver[] = [];

    headings.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { rootMargin: '-20% 0px -70% 0px' }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [headings]);

  if (!headings.length) return null;

  return (
    <aside style={{ position: 'sticky', top: 92 }}>
      {/* TOC */}
      <p
        className="font-mono text-xs mb-3"
        style={{ color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '0.1em' }}
      >
        On this page
      </p>
      <nav className="flex flex-col gap-1.5">
        {headings.map((h) => (
          <a
            key={h.id}
            href={`#${h.id}`}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById(h.id)?.scrollIntoView({ behavior: 'smooth' });
              setActive(h.id);
            }}
            style={{
              fontSize: 13,
              color: active === h.id ? 'var(--blue-2)' : 'var(--text-2)',
              cursor: 'pointer',
              textDecoration: 'none',
              padding: '4px 0 4px 12px',
              borderLeft: `2px solid ${active === h.id ? 'var(--blue)' : 'transparent'}`,
              transition: 'all 0.15s ease',
              lineHeight: 1.4,
            }}
          >
            {h.label}
          </a>
        ))}
      </nav>

      {/* Divider */}
      <div style={{ height: 1, background: 'var(--border)', margin: '20px 0' }} />

      {/* Share */}
      <p
        className="font-mono text-xs mb-3"
        style={{ color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '0.1em' }}
      >
        Share
      </p>
      <div className="flex gap-2">
        {[
          {
            label: 'X',
            href: `https://twitter.com/intent/tweet?url=${typeof window !== 'undefined' ? encodeURIComponent(window.location.href) : ''}`,
          },
          {
            label: 'in',
            href: `https://www.linkedin.com/sharing/share-offsite/?url=${typeof window !== 'undefined' ? encodeURIComponent(window.location.href) : ''}`,
          },
          {
            label: '🔗',
            href: '#',
            onClick: () => {
              if (typeof window !== 'undefined') {
                navigator.clipboard.writeText(window.location.href);
              }
            },
          },
        ].map((s) => (
          <a
            key={s.label}
            href={s.href}
            target={s.href !== '#' ? '_blank' : undefined}
            rel="noopener noreferrer"
            onClick={s.onClick ? (e) => { e.preventDefault(); s.onClick?.(); } : undefined}
            style={{
              width: 32,
              height: 32,
              borderRadius: 7,
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              color: 'var(--text-2)',
              display: 'grid',
              placeItems: 'center',
              fontSize: 12,
              fontWeight: 700,
              textDecoration: 'none',
              cursor: 'pointer',
              fontFamily: 'var(--font-mono)',
              transition: 'border-color 0.15s',
            }}
          >
            {s.label}
          </a>
        ))}
      </div>
    </aside>
  );
}
