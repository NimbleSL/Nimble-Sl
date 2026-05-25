'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useExitIntent } from '@/hooks/useExitIntent';
import { X, Sparkles, Phone, ArrowRight } from 'lucide-react';

export function ExitPopup() {
  const triggered = useExitIntent();
  const [isOpen, setIsOpen] = useState(true);
  const router = useRouter();

  const handleNavigate = (path: string) => {
    setIsOpen(false);
    router.push(path);
  };

  if (!triggered || !isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 flex items-center justify-center"
        style={{ zIndex: 60, background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)', WebkitBackdropFilter: 'blur(4px)' }}
        onClick={() => setIsOpen(false)}
      >
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          onClick={(e) => e.stopPropagation()}
          className="glass rounded-2xl p-8 max-w-md w-full mx-4 relative"
        >
          {/* Close */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center transition-colors hover:bg-white/5"
            aria-label="Close"
          >
            <X size={16} style={{ color: 'var(--text-3)' }} />
          </button>

          {/* Icon */}
          <div className="flex justify-center mb-5">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #3B82F6, #06B6D4)' }}>
              <Sparkles size={24} color="white" />
            </div>
          </div>

          {/* Copy */}
          <h2 className="font-display text-center font-bold mb-3"
            style={{ fontSize: 24, color: 'var(--text)', lineHeight: 1.2 }}>
            Before you go —
          </h2>
          <p className="text-center mb-6" style={{ fontSize: 15, color: 'var(--text-2)', lineHeight: 1.6 }}>
            Get a free AI-powered project estimate in 2 minutes, or book a call with our team.
            No commitment required.
          </p>

          {/* CTAs */}
          <div className="flex flex-col gap-3">
            <button
              onClick={() => handleNavigate('/tools/project-estimator')}
              className="btn btn-primary w-full justify-center"
              style={{ padding: '13px 20px', fontSize: 15 }}
            >
              <Sparkles size={16} />
              Get a Free Estimate
              <ArrowRight size={16} />
            </button>
            <button
              onClick={() => handleNavigate('/contact')}
              className="btn btn-ghost w-full justify-center"
              style={{ padding: '13px 20px', fontSize: 15 }}
            >
              <Phone size={16} />
              Book a Free Call
            </button>
          </div>

          {/* Dismiss */}
          <p className="text-center mt-4" style={{ fontSize: 12, color: 'var(--text-3)' }}>
            <button onClick={() => setIsOpen(false)} className="underline underline-offset-2 hover:opacity-80 transition-opacity">
              No thanks, I&apos;ll figure it out myself
            </button>
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
