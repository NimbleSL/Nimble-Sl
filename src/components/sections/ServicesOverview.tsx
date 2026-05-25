'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, Globe, Smartphone, Cloud, Brain, Palette } from 'lucide-react';
import { useInView } from '@/hooks/useInView';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const SERVICES = [
  {
    icon: Code2, accent: 'blue', title: 'Custom Software',
    desc: 'Greenfield platforms, internal tools, and bespoke systems engineered for your exact workflow.',
    href: '/services/custom-software-development',
  },
  {
    icon: Globe, accent: 'cyan', title: 'Web Applications',
    desc: 'Angular, Next.js, React — SSR-first builds that ship Core Web Vitals 90+ out of the box.',
    href: '/services/web-application-development',
  },
  {
    icon: Smartphone, accent: 'purple', title: 'Mobile Apps',
    desc: 'Flutter & React Native. Offline-first architecture proven across 8 production apps.',
    href: '/services/mobile-app-development',
  },
  {
    icon: Cloud, accent: 'emerald', title: 'Cloud & DevOps',
    desc: 'AWS, GCP, Cloudflare. Terraform, GitOps, observability — infra you can hand off cleanly.',
    href: '/services/cloud-solutions-devops',
  },
  {
    icon: Brain, accent: 'amber', title: 'AI & Machine Learning',
    desc: 'RAG systems, LLM apps, GNN fraud detection. We shipped a 96%-accurate model in 2024.',
    href: '/services/ai-machine-learning',
  },
  {
    icon: Palette, accent: 'rose', title: 'UI/UX Design',
    desc: 'Design systems, prototypes, and validated flows. We can lead or hand off to your team.',
    href: '/services/ui-ux-design',
  },
];

const ACCENT_COLORS: Record<string, string> = {
  blue: '#3B82F6', cyan: '#06B6D4', purple: '#A855F7',
  emerald: '#10B981', amber: '#F59E0B', rose: '#F43F5E',
};

interface ServiceCardProps {
  icon: React.ComponentType<{ size: number }>;
  accent: string;
  title: string;
  desc: string;
  href: string;
  index: number;
}

function ServiceCard({ icon: Icon, accent, title, desc, href, index }: ServiceCardProps) {
  const color = ACCENT_COLORS[accent];
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
    >
      <Link
        href={href}
        className="card card-hover card-border-trace group block"
        style={{ padding: 24, height: '100%' }}
      >
        <div
          style={{
            width: 44, height: 44, borderRadius: 12,
            background: `${color}18`,
            border: `1px solid ${color}30`,
            display: 'grid', placeItems: 'center',
            color: color,
            marginBottom: 16,
            transition: 'all 0.2s ease',
          }}
        >
          <Icon size={20} />
        </div>
        <h3 style={{ fontSize: 17, fontWeight: 700, color: 'var(--text)', marginBottom: 8 }}>{title}</h3>
        <p style={{ fontSize: 14, color: 'var(--text-2)', lineHeight: 1.6, marginBottom: 16 }}>{desc}</p>
        <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 12, color: color, fontWeight: 600 }}>
          Learn more <ArrowRight size={12} />
        </div>
      </Link>
    </motion.div>
  );
}

export function ServicesOverview() {
  return (
    <section style={{ padding: '96px 0' }}>
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: 56 }}>
          <span className="eyebrow" style={{ marginBottom: 20, display: 'inline-flex' }}>
            <span className="ev-dot" />What we do
          </span>
          <ScrollReveal
            as="h2"
            style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 800, color: 'var(--text)', lineHeight: 1.15, maxWidth: 560, display: 'block' }}
          >
            Six disciplines. One delivery team.
          </ScrollReveal>
          <p style={{ marginTop: 16, fontSize: 17, color: 'var(--text-2)', maxWidth: 580, lineHeight: 1.65 }}>
            No subcontractors, no token-counting agencies. Everything below is built by engineers we hired, trained, and retained.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.href} {...s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
