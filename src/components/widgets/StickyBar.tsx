'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { X, Star, Phone, Sparkles, ArrowRight } from 'lucide-react';
import { useTheme } from '@/components/providers/ThemeProvider';
import { BookCallModal } from '@/components/overlays/BookCallModal';

export function StickyBar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const dismissed = sessionStorage.getItem('nimblesl-sticky-bar-dismissed');
      if (dismissed) {
        setIsDismissed(true);
        return;
      }
    }

    const handleScroll = () => {
      const visible = window.scrollY > 400;
      setIsVisible(visible);
      if (visible) document.body.classList.add('sticky-bar-visible');
      else document.body.classList.remove('sticky-bar-visible');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.classList.remove('sticky-bar-visible');
    };
  }, []);

  const handleDismiss = () => {
    setIsDismissed(true);
    document.body.classList.remove('sticky-bar-visible');
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('nimblesl-sticky-bar-dismissed', 'true');
    }
  };

  if (isDismissed) return null;

  const isDark = theme === 'dark';

  return (
    <>
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 340, damping: 32 }}
          className="fixed bottom-0 left-0 right-0 z-40"
        >
          {/* ─── DESKTOP (md+) ─── full-width bg wrapper, content max-w inside ─── */}
          <div
            className="hidden md:block"
            style={{
              background: isDark ? 'rgba(10,14,26,0.97)' : 'rgba(255,255,255,0.97)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              borderTop: isDark ? '1px solid rgba(255,255,255,0.07)' : '1px solid rgba(0,0,0,0.08)',
            }}
          >
            <div className="flex items-center justify-between px-4 lg:px-6 h-14 lg:h-16 max-w-screen-xl mx-auto">
              {/* Left: Social proof */}
              <div className="flex items-center gap-2 lg:gap-4 flex-shrink-0">
                {/* Stars */}
                <div className="flex items-center gap-1.5">
                  <div className="flex gap-0.5">
                    {[1,2,3,4,5].map(s => (
                      <Star key={s} size={12} style={{ fill: '#FBBF24', color: '#FBBF24' }} />
                    ))}
                  </div>
                  <span className="text-sm font-bold" style={{ color: isDark ? '#F1F5F9' : '#0F172A' }}>Client</span>
                  <span className="hidden lg:inline text-xs" style={{ color: isDark ? '#64748B' : '#94A3B8' }}>reviews</span>
                </div>
                {/* Rate badge — hidden on md-lg to save space */}
                <div
                  className="hidden lg:flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold"
                  style={{
                    background: isDark ? 'rgba(16,185,129,0.1)' : 'rgba(16,185,129,0.08)',
                    color: '#10B981',
                    border: '1px solid rgba(16,185,129,0.25)',
                  }}
                >
                  <motion.div
                    animate={{ opacity: [1, 0.4, 1] }}
                    transition={{ duration: 1.6, repeat: Infinity }}
                    style={{ width: 5, height: 5, borderRadius: '50%', background: '#10B981', flexShrink: 0 }}
                  />
                  Top Rated Agency
                </div>
              </div>

              {/* Center: Copy */}
              <div className="flex flex-col items-center px-3 min-w-0">
                <p className="text-xs lg:text-sm font-semibold truncate" style={{ color: isDark ? '#F1F5F9' : '#0F172A' }}>
                  Ready to build your next project?
                </p>
                {/* Subtext hidden on tablet to prevent overflow */}
                <p className="hidden lg:block text-xs" style={{ color: isDark ? '#64748B' : '#94A3B8' }}>
                  50+ enterprise platforms shipped · avg delivery 14 weeks
                </p>
              </div>

              {/* Right: CTAs */}
              <div className="flex items-center gap-1.5 lg:gap-2 flex-shrink-0">
                <Link
                  href="/tools/project-estimator"
                  className="flex items-center gap-1.5 px-3 lg:px-4 py-2 rounded-lg text-xs lg:text-sm font-semibold transition-all hover:opacity-90"
                  style={{
                    background: isDark ? 'rgba(59,130,246,0.12)' : 'rgba(59,130,246,0.08)',
                    color: '#60A5FA',
                    border: '1px solid rgba(59,130,246,0.25)',
                    whiteSpace: 'nowrap',
                  }}
                >
                  <Sparkles size={12} />
                  AI Estimate
                </Link>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="flex items-center gap-1.5 px-3 lg:px-4 py-2 rounded-lg text-xs lg:text-sm font-semibold text-white transition-all hover:opacity-90"
                  style={{ background: 'linear-gradient(135deg, #3B82F6, #2563EB)', boxShadow: '0 4px 14px rgba(59,130,246,0.35)', border: 'none', cursor: 'pointer', whiteSpace: 'nowrap' }}
                >
                  <Phone size={12} />
                  <span className="hidden lg:inline">Book a Free Call</span>
                  <span className="lg:hidden">Book Call</span>
                  <ArrowRight size={11} className="hidden lg:inline" />
                </button>
                <button
                  onClick={handleDismiss}
                  className="w-7 h-7 lg:w-8 lg:h-8 rounded-full flex items-center justify-center transition-colors ml-0.5"
                  style={{ color: isDark ? '#475569' : '#94A3B8' }}
                  onMouseEnter={e => (e.currentTarget.style.background = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.05)')}
                  onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                  aria-label="Dismiss"
                >
                  <X size={14} />
                </button>
              </div>
            </div>
          </div>

          {/* ─── MOBILE (<md) ─── */}
          <div
            className="md:hidden"
            style={{
              background: isDark ? 'rgba(10,14,26,0.97)' : 'rgba(255,255,255,0.97)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              borderTop: isDark ? '1px solid rgba(255,255,255,0.07)' : '1px solid rgba(0,0,0,0.08)',
              padding: '10px 16px 12px',
            }}
          >
            {/* Top row: social proof + dismiss */}
            <div className="flex items-center justify-between mb-2.5">
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  {[1,2,3,4,5].map(s => (
                    <Star key={s} size={11} style={{ fill: '#FBBF24', color: '#FBBF24' }} />
                  ))}
                </div>
                <span className="text-xs font-semibold" style={{ color: isDark ? '#F1F5F9' : '#0F172A' }}>Client</span>
                <span className="text-xs" style={{ color: isDark ? '#475569' : '#94A3B8' }}>reviews</span>
              </div>
              <div className="flex items-center gap-2">
                <div
                  className="flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold"
                  style={{ background: 'rgba(16,185,129,0.1)', color: '#10B981', border: '1px solid rgba(16,185,129,0.25)' }}
                >
                  <motion.div
                    animate={{ opacity: [1, 0.4, 1] }}
                    transition={{ duration: 1.6, repeat: Infinity }}
                    style={{ width: 4, height: 4, borderRadius: '50%', background: '#10B981' }}
                  />
                  Top Rated
                </div>
                <button
                  onClick={handleDismiss}
                  className="w-6 h-6 flex items-center justify-center rounded-full"
                  style={{ color: isDark ? '#475569' : '#94A3B8' }}
                  aria-label="Dismiss"
                >
                  <X size={13} />
                </button>
              </div>
            </div>

            {/* Headline */}
            <p className="text-sm font-semibold mb-3" style={{ color: isDark ? '#F1F5F9' : '#0F172A' }}>
              Ready to build your next product?
            </p>

            {/* Two CTA buttons */}
            <div className="flex gap-2">
              <Link
                href="/tools/project-estimator"
                className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-sm font-semibold transition-all"
                style={{
                  background: isDark ? 'rgba(59,130,246,0.1)' : 'rgba(59,130,246,0.08)',
                  color: '#60A5FA',
                  border: '1px solid rgba(59,130,246,0.25)',
                }}
              >
                <Sparkles size={13} />
                AI Estimate
              </Link>
              <button
                onClick={() => setIsModalOpen(true)}
                className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all"
                style={{ background: 'linear-gradient(135deg, #3B82F6, #2563EB)', boxShadow: '0 4px 12px rgba(59,130,246,0.3)', border: 'none', cursor: 'pointer' }}
              >
                <Phone size={13} />
                Book Free Call
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
    <BookCallModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
