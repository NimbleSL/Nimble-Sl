'use client';

import React from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

interface MorphNumberProps {
  value: number | string;
  style?: React.CSSProperties;
  className?: string;
}

/**
 * Slot-machine digit morph.
 * Each character that changes exits upward and the new digit enters from below.
 */
export function MorphNumber({ value, style, className }: MorphNumberProps) {
  const prefersReducedMotion = useReducedMotion();
  const chars = String(value).split('');

  return (
    <span
      style={{ display: 'inline-flex', alignItems: 'flex-end', ...style }}
      className={className}
      aria-label={String(value)}
    >
      {chars.map((char, i) => (
        <span
          key={i}
          style={{
            display: 'inline-block',
            position: 'relative',
            overflow: 'hidden',
            // Non-digit chars (%, +, –) don't need the slot effect
            verticalAlign: 'bottom',
          }}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={char}
              initial={
                prefersReducedMotion
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 14 }
              }
              animate={{ opacity: 1, y: 0 }}
              exit={
                prefersReducedMotion
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: -14 }
              }
              transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
              style={{ display: 'inline-block' }}
            >
              {char}
            </motion.span>
          </AnimatePresence>
        </span>
      ))}
    </span>
  );
}
