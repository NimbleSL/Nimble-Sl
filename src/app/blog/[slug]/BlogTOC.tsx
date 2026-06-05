'use client';

import { useEffect, useState } from 'react';
import { ChevronDown, Link2 } from 'lucide-react';

// Brand icon SVGs
const LinkedinIcon = ({ size = 12 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
  </svg>
);

const TwitterIcon = ({ size = 12 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

interface TOCItem {
  id: string;
  label: string;
}

export function BlogTOC({ headings, isMobile }: { headings: TOCItem[]; isMobile?: boolean }) {
  const [active, setActive] = useState<string>(headings[0]?.id ?? '');
  const [shareUrl, setShareUrl] = useState<string>('');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setShareUrl(window.location.href);
  }, []);

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

  if (isMobile) {
    return (
      <div 
        className="rounded-xl border overflow-hidden transition-all duration-300"
        style={{
          borderColor: 'var(--border)',
          background: 'var(--surface-2)',
        }}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between px-5 py-4 font-semibold text-sm transition-colors text-left"
          style={{ color: 'var(--text)' }}
        >
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            On this page
          </span>
          <ChevronDown
            size={16}
            className={`transition-transform duration-200 text-neutral-400 ${isOpen ? 'rotate-180 text-blue-400' : ''}`}
          />
        </button>

        {isOpen && (
          <div className="px-5 pb-5 pt-1 border-t" style={{ borderColor: 'var(--border)' }}>
            <nav className="flex flex-col gap-2 mt-2">
              {headings.map((h) => (
                <a
                  key={h.id}
                  href={`#${h.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(h.id)?.scrollIntoView({ behavior: 'smooth' });
                    setActive(h.id);
                    setIsOpen(false);
                  }}
                  className="text-xs transition-all duration-150 py-1.5 block hover:text-blue-400"
                  style={{
                    color: active === h.id ? 'var(--blue-2)' : 'var(--text-2)',
                    fontWeight: active === h.id ? 600 : 400,
                    textDecoration: 'none',
                    lineHeight: 1.4,
                  }}
                >
                  {h.label}
                </a>
              ))}
            </nav>

            <div style={{ height: 1, background: 'var(--border)', margin: '16px 0 12px' }} />

            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500">
                Share this article
              </span>
              <div className="flex gap-2">
                {[
                  {
                    icon: <TwitterIcon size={12} />,
                    href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}`,
                  },
                  {
                    icon: <LinkedinIcon size={12} />,
                    href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
                  },
                  {
                    icon: <Link2 size={12} />,
                    href: '#',
                    onClick: () => {
                      if (typeof window !== 'undefined') {
                        navigator.clipboard.writeText(window.location.href);
                        alert('Link copied to clipboard!');
                      }
                    },
                  },
                ].map((s, idx) => (
                  <a
                    key={idx}
                    href={s.href}
                    target={s.href !== '#' ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    onClick={s.onClick ? (e) => { e.preventDefault(); s.onClick?.(); } : undefined}
                    className="w-7 h-7 rounded-md border flex items-center justify-center text-neutral-400 hover:text-white hover:border-neutral-500 transition-colors"
                    style={{
                      background: 'var(--surface)',
                      borderColor: 'var(--border)',
                    }}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

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
            label: <TwitterIcon size={13} />,
            href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}`,
          },
          {
            label: <LinkedinIcon size={13} />,
            href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
          },
          {
            label: <Link2 size={13} />,
            href: '#',
            onClick: () => {
              if (typeof window !== 'undefined') {
                navigator.clipboard.writeText(window.location.href);
                alert('Link copied to clipboard!');
              }
            },
          },
        ].map((s, idx) => (
          <a
            key={idx}
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
              cursor: 'pointer',
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
