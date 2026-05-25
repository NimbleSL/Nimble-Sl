'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSocialProof } from '@/hooks/useSocialProof';
import { Eye } from 'lucide-react';

export function SocialProof() {
  const viewers = useSocialProof({ min: 2, max: 8 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show after 15 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 15000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-24 left-6 z-30 hidden md:block"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={viewers}
          initial={{ opacity: 0.7 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0.7 }}
          transition={{ duration: 0.5 }}
          className="glass-light px-3 py-2 rounded-full flex items-center gap-2 shadow-lg"
        >
          {/* Pulsing Green Dot */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [1, 0.7, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="w-2 h-2 rounded-full bg-emerald-500"
            style={{ boxShadow: '0 0 8px rgba(16, 185, 129, 0.6)' }}
          />

          {/* Text */}
          <div className="flex items-center gap-1.5">
            <Eye className="w-3.5 h-3.5 text-text-2" />
            <span className="text-xs font-medium text-text-2">
              {viewers} {viewers === 1 ? 'person' : 'people'} viewing now
            </span>
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}
