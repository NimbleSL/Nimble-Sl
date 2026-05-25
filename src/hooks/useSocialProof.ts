'use client';

import { useEffect, useState } from 'react';

interface UseSocialProofOptions {
  min?: number;
  max?: number;
}

export function useSocialProof({ min = 2, max = 8 }: UseSocialProofOptions = {}): number {
  const [viewers, setViewers] = useState(() => Math.floor(Math.random() * (max - min + 1)) + min);

  useEffect(() => {
    const interval = setInterval(() => {
      setViewers((prev) => {
        const delta = Math.random() > 0.5 ? 1 : -1;
        return Math.max(1, Math.min(12, prev + delta));
      });
    }, 30000 + Math.random() * 30000);

    return () => clearInterval(interval);
  }, [min, max]);

  return viewers;
}
