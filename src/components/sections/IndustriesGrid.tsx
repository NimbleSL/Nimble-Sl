'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Building2, Heart, Shield, Home, ShoppingCart, BookOpen, Truck, Briefcase, ArrowRight } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

const INDUSTRIES = [
  { name: 'FinTech', icon: Building2, count: '14 projects', href: '/industries/fintech-banking' },
  { name: 'HealthTech', icon: Heart, count: '7 projects', href: '/industries/healthcare-medtech' },
  { name: 'InsurTech', icon: Shield, count: '6 projects', href: '/industries/insurance' },
  { name: 'PropTech', icon: Home, count: '5 projects', href: '/industries/real-estate' },
  { name: 'E-commerce', icon: ShoppingCart, count: '8 projects', href: '/industries/ecommerce-retail' },
  { name: 'EdTech', icon: BookOpen, count: '4 projects', href: '/industries/edtech' },
  { name: 'Logistics', icon: Truck, count: '6 projects', href: '/industries/logistics-supply-chain' },
  { name: 'Enterprise SaaS', icon: Briefcase, count: '12 projects', href: '/industries/enterprise-saas' },
];

export function IndustriesGrid() {
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section ref={ref} style={{ padding: '0 0 96px' }}>
      <div className="container">
        <div style={{ marginBottom: 48 }}>
          <span className="eyebrow" style={{ marginBottom: 20, display: 'inline-flex' }}>
            <span className="ev-dot" />Industries
          </span>
          <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 800, color: 'var(--text)', lineHeight: 1.15 }}>
            Domain knowledge, not just code.
          </h2>
          <p style={{ marginTop: 14, fontSize: 16, color: 'var(--text-2)', maxWidth: 580, lineHeight: 1.65 }}>
            Eight verticals where we&apos;ve shipped enough to know the regulations, edge cases, and how to actually talk to your customers.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14 }}>
          {INDUSTRIES.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.06, ease: 'easeOut' }}
            >
              <Link href={ind.href} className="card card-hover" style={{ padding: 18, display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer' }}>
                <div style={{ width: 42, height: 42, borderRadius: 10, background: 'var(--surface-2)', border: '1px solid var(--border)', display: 'grid', placeItems: 'center', color: 'var(--blue-2)', flexShrink: 0 }}>
                  <ind.icon size={18} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--text)' }}>{ind.name}</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-3)' }}>{ind.count}</div>
                </div>
                <ArrowRight size={13} style={{ color: 'var(--text-3)', flexShrink: 0 }} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
