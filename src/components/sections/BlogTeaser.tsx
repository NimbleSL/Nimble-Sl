'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Clock, ArrowRight } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

const POSTS = [
  { tag: 'FinTech', cat: 'Cost & Decision', tagClass: 'tag-blue', title: 'How Much Does It Cost to Build a FinTech App in 2026?', read: '12 min', accent: '#3B82F6', href: '/blog/fintech-app-development-cost-2026' },
  { tag: 'AI/ML', cat: 'Deep-Dive', tagClass: 'tag-purple', title: 'Fraud Detection with Graph Neural Networks: A 96% Accuracy Case Study', read: '18 min', accent: '#A855F7', href: '/blog/fraud-detection-graph-neural-networks' },
  { tag: 'Mobile', cat: 'Engineering', tagClass: 'tag-emerald', title: 'Offline-First Mobile Apps with Flutter: How We Built FieldOps', read: '14 min', accent: '#10B981', href: '/blog/offline-first-flutter-fieldops' },
];

export function BlogTeaser() {
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section ref={ref} style={{ padding: '0 0 96px' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 40, flexWrap: 'wrap', gap: 16 }}>
          <div>
            <span className="eyebrow" style={{ marginBottom: 16, display: 'inline-flex' }}>
              <span className="ev-dot" />Insights
            </span>
            <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 800, color: 'var(--text)' }}>
              From the engineering desk.
            </h2>
          </div>
          <Link href="/blog" className="btn btn-ghost">
            All posts <ArrowRight size={14} />
          </Link>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {POSTS.map((post, i) => (
            <motion.div
              key={post.href}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
            >
              <Link href={post.href} className="card card-hover" style={{ padding: 0, overflow: 'hidden', display: 'block', height: '100%' }}>
                <div style={{ height: 156, background: `linear-gradient(135deg, ${post.accent}33, ${post.accent}10)`, borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
                  <div className="dot-bg" style={{ position: 'absolute', inset: 0, opacity: 0.6 }} />
                  <div style={{ position: 'absolute', bottom: 16, left: 16, fontFamily: 'var(--font-mono)', fontSize: 48, fontWeight: 800, color: post.accent, opacity: 0.5, lineHeight: 1 }}>
                    {post.tag.slice(0, 2).toUpperCase()}
                  </div>
                </div>
                <div style={{ padding: 20 }}>
                  <div style={{ display: 'flex', gap: 6, marginBottom: 10 }}>
                    <span className={`tag ${post.tagClass}`} style={{ fontSize: 10 }}>{post.tag}</span>
                    <span className="tag" style={{ fontSize: 10 }}>{post.cat}</span>
                  </div>
                  <h3 style={{ fontSize: 16, lineHeight: 1.4, color: 'var(--text)', marginBottom: 12, fontWeight: 600 }}>{post.title}</h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 11, color: 'var(--text-3)', fontFamily: 'var(--font-mono)' }}>
                    <Clock size={11} /> {post.read} read
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
