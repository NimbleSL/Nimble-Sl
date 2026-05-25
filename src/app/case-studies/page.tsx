import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { caseStudies } from '@/lib/data/caseStudies';

export const metadata: Metadata = {
  title: 'Case Studies — Real Projects, Real Results',
  description: 'Explore 10+ detailed case studies from NimbleSL. FinTech, InsurTech, PropTech, Logistics, Enterprise — real metrics from real projects.',
};

export default function CaseStudiesPage() {
  const featured = caseStudies.filter((c) => c.featured);
  const rest = caseStudies.filter((c) => !c.featured);

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 80 }}>
        {/* Hero */}
        <section style={{ padding: '80px 0 64px', position: 'relative', overflow: 'hidden' }}>
          <div className="mesh-bg" />
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <span className="eyebrow" style={{ marginBottom: 20, display: 'inline-flex' }}>
              <span className="ev-dot" />Proof, not promises
            </span>
            <h1 className="font-display" style={{ fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 800, lineHeight: 1.1, color: 'var(--text)', maxWidth: 700 }}>
              Real projects.<br /><span className="grad-blue">Real results.</span>
            </h1>
            <p style={{ marginTop: 20, fontSize: 18, color: 'var(--text-2)', maxWidth: 600, lineHeight: 1.65 }}>
              10+ detailed case studies with metrics, architecture decisions, and lessons learned. No vague success stories — just the numbers.
            </p>
          </div>
        </section>

        {/* Featured */}
        <section style={{ padding: '0 0 64px' }}>
          <div className="container">
            <div style={{ fontSize: 12, fontFamily: 'var(--font-mono)', color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 24 }}>Featured case studies</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginBottom: 48 }}>
              {featured.map((cs) => (
                <Link key={cs.slug} href={`/case-studies/${cs.slug}`} className="card card-hover" style={{ padding: 0, overflow: 'hidden', display: 'block' }}>
                  {/* Color header */}
                  <div style={{ height: 8, background: `var(--${cs.tagVariant === 'blue' ? 'blue' : cs.tagVariant === 'emerald' ? 'emerald' : cs.tagVariant === 'rose' ? 'rose' : cs.tagVariant === 'purple' ? 'purple' : 'blue'})` }} />
                  <div style={{ padding: 28 }}>
                    <span className={`tag tag-${cs.tagVariant}`} style={{ fontSize: 10, marginBottom: 14 }}>{cs.industryTag}</span>
                    <h2 style={{ fontSize: 19, fontWeight: 700, color: 'var(--text)', marginTop: 10, marginBottom: 8, lineHeight: 1.3 }}>{cs.title}</h2>
                    <p style={{ fontSize: 13, color: 'var(--text-2)', marginBottom: 20, lineHeight: 1.6 }}>{cs.subtitle}</p>

                    {/* Key metrics */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 20, paddingTop: 16, borderTop: '1px solid var(--border)' }}>
                      {cs.metrics.slice(0, 2).map((m) => (
                        <div key={m.label}>
                          <div style={{ fontSize: 22, fontWeight: 800, color: 'var(--text)' }}>{m.value}</div>
                          <div style={{ fontSize: 11, color: 'var(--text-3)', fontFamily: 'var(--font-mono)', marginTop: 2 }}>{m.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Tech stack */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
                      {cs.techStack.slice(0, 3).map((t) => (
                        <span key={t} className="tag" style={{ fontSize: 10 }}>{t}</span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Rest */}
            {rest.length > 0 && (
              <>
                <div style={{ fontSize: 12, fontFamily: 'var(--font-mono)', color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 24 }}>More case studies</div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
                  {rest.map((cs) => (
                    <Link key={cs.slug} href={`/case-studies/${cs.slug}`} className="card card-hover" style={{ padding: 24 }}>
                      <span className={`tag tag-${cs.tagVariant}`} style={{ fontSize: 10 }}>{cs.industryTag}</span>
                      <h3 style={{ fontSize: 16, fontWeight: 700, color: 'var(--text)', marginTop: 12, marginBottom: 8 }}>{cs.title}</h3>
                      <p style={{ fontSize: 13, color: 'var(--text-2)', lineHeight: 1.5 }}>{cs.subtitle}</p>
                      <div style={{ marginTop: 14, display: 'flex', alignItems: 'center', gap: 4, fontSize: 12, color: 'var(--blue-2)', fontWeight: 600 }}>
                        Read case study <ArrowRight size={11} />
                      </div>
                    </Link>
                  ))}
                </div>
              </>
            )}
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: '0 0 96px' }}>
          <div className="container">
            <div className="card" style={{ padding: '48px', textAlign: 'center', background: 'linear-gradient(135deg, rgba(59,130,246,0.10), rgba(16,185,129,0.06))', border: '1px solid rgba(59,130,246,0.2)' }}>
              <h2 style={{ fontSize: 32, fontWeight: 800, color: 'var(--text)', marginBottom: 12 }}>Want results like these?</h2>
              <p style={{ fontSize: 16, color: 'var(--text-2)', maxWidth: 480, margin: '0 auto 28px', lineHeight: 1.65 }}>
                Get an AI-powered estimate for your project in 3 minutes — no commitment required.
              </p>
              <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href="/tools/project-estimator" className="btn btn-emerald" style={{ padding: '13px 24px' }}>
                  <Sparkles size={14} /> Free AI Estimate
                </Link>
                <Link href="/contact" className="btn btn-ghost" style={{ padding: '13px 24px' }}>
                  Talk to us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
