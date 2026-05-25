'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';

type AllowedTag = 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div';

interface ScrollRevealProps {
  children: string;
  as?: AllowedTag;
  style?: React.CSSProperties;
  className?: string;
  /** Stagger delay between words in seconds. Default 0.05 */
  stagger?: number;
  /** Base delay before first word. Default 0 */
  delay?: number;
  /** IntersectionObserver threshold. Default 0.2 */
  threshold?: number;
}

/**
 * Splits text into words. Each word reveals with:
 *  - opacity  0 → 1
 *  - blur     4px → 0px
 *  - translateY  10px → 0
 *
 * Stagger: 0.05 s per word by default.
 * Respects prefers-reduced-motion.
 */
export function ScrollReveal({
  children,
  as: Tag = 'span',
  style,
  className,
  stagger = 0.05,
  delay = 0,
  threshold = 0.2,
}: ScrollRevealProps) {
  const [ref, inView] = useInView<HTMLElement>({ threshold });
  const prefersReducedMotion = useReducedMotion();
  const words = children.split(' ');

  const hidden = prefersReducedMotion
    ? { opacity: 1, filter: 'blur(0px)', y: 0 }
    : { opacity: 0, filter: 'blur(4px)', y: 10 };

  const visible = { opacity: 1, filter: 'blur(0px)', y: 0 };

  return (
    // @ts-expect-error – dynamic tag is valid
    <Tag ref={ref} style={style} className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={hidden}
          animate={inView ? visible : hidden}
          transition={{
            duration: 0.4,
            delay: delay + i * stagger,
            ease: 'easeOut',
          }}
          style={{ display: 'inline-block', marginRight: '0.28em' }}
        >
          {word}
        </motion.span>
      ))}
    </Tag>
  );
}
