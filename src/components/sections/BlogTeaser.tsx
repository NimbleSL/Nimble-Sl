'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Clock, ArrowRight } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

import { blogPosts, BlogPost } from '@/lib/data/blog';

const TEASER_SLUGS = [
  'fintech-app-development-cost',
  'healthcare-app-development-cost',
  'how-to-build-a-saas-product',
];

export function BlogTeaser() {
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.1 });

  // Map the slugs to actual post objects, fallback to first 3 posts if not found
  const teaserPosts = TEASER_SLUGS.map(slug => blogPosts.find(p => p.slug === slug))
    .filter((p): p is BlogPost => !!p);

  const postsToDisplay = [...teaserPosts];
  if (postsToDisplay.length < 3) {
    for (const post of blogPosts) {
      if (postsToDisplay.length >= 3) break;
      if (!postsToDisplay.some(p => p.slug === post.slug)) {
        postsToDisplay.push(post);
      }
    }
  }

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {postsToDisplay.map((post, i) => {
            const imageUrl = post.coverImage || `/images/blog/categories/${post.category.toLowerCase().replace('/', '-')}.png`;
            return (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
              >
                <Link href={`/blog/${post.slug}`} className="card card-hover group" style={{ padding: 0, overflow: 'hidden', display: 'block', height: '100%' }}>
                  <div style={{ height: 160, position: 'relative', overflow: 'hidden', borderBottom: '1px solid var(--border)' }}>
                    <img
                      src={imageUrl}
                      alt={post.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      className="transition-transform duration-500 group-hover:scale-105"
                    />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,14,26,0.3), transparent)' }} />
                  </div>
                  <div style={{ padding: 20 }}>
                    <div style={{ display: 'flex', gap: 6, marginBottom: 10 }}>
                      <span className={`tag ${post.tagClass}`} style={{ fontSize: 10 }}>{post.category}</span>
                      <span className="tag" style={{ fontSize: 10 }}>Deep-Dive</span>
                    </div>
                    <h3 style={{ fontSize: 16, lineHeight: 1.4, color: 'var(--text)', marginBottom: 12, fontWeight: 600, minHeight: 44 }} className="line-clamp-2">{post.title}</h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 11, color: 'var(--text-3)', fontFamily: 'var(--font-mono)' }}>
                      <Clock size={11} /> {post.readTime}
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
