'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useMagneticButton } from '@/hooks/useMagneticButton';

interface MagneticWrapperProps {
  children: React.ReactNode;
  strength?: number;
  radius?: number;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Wraps any button/link with a subtle magnetic pull toward the cursor.
 * Desktop (pointer: fine) only — auto-disabled on touch devices.
 * Uses spring physics for natural snap-back.
 */
export function MagneticWrapper({
  children,
  strength = 0.35,
  radius = 60,
  className,
  style,
}: MagneticWrapperProps) {
  const { ref, x, y } = useMagneticButton<HTMLDivElement>(strength, radius);

  return (
    <motion.div
      ref={ref}
      animate={{ x, y }}
      transition={{ type: 'spring', stiffness: 220, damping: 18, mass: 0.4 }}
      style={{ display: 'inline-flex', ...style }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
