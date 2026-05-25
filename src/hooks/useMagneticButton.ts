'use client';

import { useRef, useState, useCallback, useEffect, MutableRefObject } from 'react';

export function useMagneticButton<T extends HTMLElement = HTMLElement>(
  strength = 0.35,
  radius = 60,
): { ref: MutableRefObject<T | null>; x: number; y: number } {
  const ref = useRef<T>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);
  const isPointerFine = useRef(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      isPointerFine.current = window.matchMedia('(pointer: fine)').matches;
    }
  }, []);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isPointerFine.current) return;
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = e.clientX - cx;
        const dy = e.clientY - cy;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < radius) {
          setPos({ x: dx * strength, y: dy * strength });
        } else {
          setPos({ x: 0, y: 0 });
        }
      });
    },
    [strength, radius],
  );

  const handleMouseLeave = useCallback(() => {
    setPos({ x: 0, y: 0 });
  }, []);

  useEffect(() => {
    if (!isPointerFine.current) return;
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    const el = ref.current;
    if (el) el.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (el) el.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(rafRef.current);
    };
  }, [handleMouseMove, handleMouseLeave]);

  return { ref, x: pos.x, y: pos.y };
}
