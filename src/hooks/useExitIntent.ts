'use client';

import { useEffect, useState } from 'react';

export function useExitIntent(): boolean {
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    // Only on desktop, only once per session
    if (typeof window === 'undefined') return;
    if (window.innerWidth <= 768) return;
    if (sessionStorage.getItem('nimblesl-exit-intent-shown')) return;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 10 && !triggered) {
        setTriggered(true);
        sessionStorage.setItem('nimblesl-exit-intent-shown', 'true');
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [triggered]);

  return triggered;
}
