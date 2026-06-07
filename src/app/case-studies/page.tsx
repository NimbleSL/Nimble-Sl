import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Sparkles, Phone } from 'lucide-react';
import { caseStudies } from '@/lib/data/caseStudies';

export const metadata: Metadata = {
  title: 'Case Studies — Real Projects, Real Results',
  description: 'Explore 8 detailed case studies from NimbleSL. FinTech, InsurTech, PropTech, Logistics, Enterprise, F&B — real client results, real metrics, no vague claims.',
};

const COLOR_MAP: Record<string, string> = {
  blue: 'var(--blue)',
  purple: 'var(--purple)',
  emerald: 'var(--emerald)',
  amber: 'var(--amber-2)',
  rose: 'var(--rose)',
  cyan: 'var(--cyan)',
};

export default function CaseStudiesPage() {
  const featured = caseStudies.filter((c) => c.featured);
  const rest = caseStudies.filter((c) => !c.featured);

  return (
    <>
      <main>
        {/* Hero */}
        <section className="inner-hero-pt" style={{ padding: '0 0 64px', position: 'relative', overflow: 'hidden' }}>
          <div className="mesh-bg" />
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <span className="eyebrow" style={{ marginBottom: 20, display: 'inline-flex' }}>
              <span className="ev-dot" />Proof, not promises
            </span>
            <h1 className="font-display" style={{ fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 800, lineHeight: 1.1, color: 'var(--text)', maxWidth: 700 }}>
              Real projects.<br /><span className="grad-blue">Real results.</span>
            </h1>
            <p style={{ marginTop: 20, fontSize: 18, color: 'var(--text-2)', maxWidth: 580, lineHeight: 1.65 }}>
              8 in-depth client stories with hard metrics, architecture decisions, and honest timelines.
              Every case study links to the live product it was built on — try it yourself.
            </p>
          </div>
        </section>

        {/* Featured */}
        <section style={{ padding: '0 0 64px' }}>
          <div className="container">
            <div style={{ fontSize: 12, fontFamily: 'var(--font-mono)', color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 24 }}>
              Featured case studies
            </div>
            <div className="rg-3" style={{ gap: 24, marginBottom: 56 }}>
              {featured.map((cs) => {
                const accentColor = COLOR_MAP[cs.tagVariant] ?? 'var(--blue)';
                return (
                  <Link
                    key={cs.slug}
                    href={`/case-studies/${cs.slug}`}
                    className="card card-hover"
                    style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
                  >
                    {/* Top accent bar */}
                    <div style={{ height: 4, background: accentColor, flexShrink: 0 }} />

                    <div style={{ padding: '24px 24px 20px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                      {/* Tag + title */}
                      <span className={`tag tag-${cs.tagVariant}`} style={{ fontSize: 10, alignSelf: 'flex-start' }}>{cs.industryTag}</span>
                      <h2 style={{ fontSize: 18, fontWeight: 700, color: 'var(--text)', margin: '12px 0 6px', lineHeight: 1.3 }}>
                        {cs.title}
                      </h2>
                      <p style={{ fontSize: 13, color: 'var(--text-2)', lineHeight: 1.6, marginBottom: 0 }}>
                        {cs.subtitle}
                      </p>

                      {/* Spacer pushes everything below to the bottom */}
                      <div style={{ flex: 1 }} />

                      {/* Key metrics */}
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginTop: 20, paddingTop: 16, borderTop: '1px solid var(--border)' }}>
                        {cs.metrics.slice(0, 2).map((m) => (
                          <div key={m.label}>
                            <div style={{ fontSize: 22, fontWeight: 800, color: accentColor, lineHeight: 1 }}>{m.value}</div>
                            <div style={{ fontSize: 11, color: 'var(--text-3)', fontFamily: 'var(--font-mono)', marginTop: 4, lineHeight: 1.3 }}>{m.label}</div>
                          </div>
                        ))}
                      </div>

                      {/* Tech tags + CTA */}
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 16 }}>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                          {cs.techStack.slice(0, 3).map((t) => (
                            <span key={t} className="tag" style={{ fontSize: 10 }}>{t}</span>
                          ))}
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 12, color: accentColor, fontWeight: 600, flexShrink: 0, marginLeft: 8 }}>
                          Read <ArrowRight size={11} />
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* More case studies */}
            {rest.length > 0 && (
              <>
                <div style={{ fontSize: 12, fontFamily: 'var(--font-mono)', color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 24 }}>
                  More case studies
                </div>
                <div className="rg-3" style={{ gap: 20 }}>
                  {rest.map((cs) => {
                    const accentColor = COLOR_MAP[cs.tagVariant] ?? 'var(--blue)';
                    return (
                      <Link
                        key={cs.slug}
                        href={`/case-studies/${cs.slug}`}
                        className="card card-hover"
                        style={{ padding: 22, display: 'flex', flexDirection: 'column' }}
                      >
                        <span className={`tag tag-${cs.tagVariant}`} style={{ fontSize: 10, alignSelf: 'flex-start' }}>{cs.industryTag}</span>
                        <h3 style={{ fontSize: 15, fontWeight: 700, color: 'var(--text)', margin: '12px 0 8px', lineHeight: 1.35 }}>{cs.title}</h3>
                        <p style={{ fontSize: 13, color: 'var(--text-2)', lineHeight: 1.55, marginBottom: 0 }}>{cs.subtitle}</p>

                        {/* Key stat */}
                        <div style={{ marginTop: 14, paddingTop: 14, borderTop: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                          <div>
                            <div style={{ fontSize: 18, fontWeight: 800, color: accentColor, lineHeight: 1 }}>{cs.metrics[0].value}</div>
                            <div style={{ fontSize: 10, color: 'var(--text-3)', fontFamily: 'var(--font-mono)', marginTop: 3 }}>{cs.metrics[0].label}</div>
                          </div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 12, color: accentColor, fontWeight: 600 }}>
                            Read <ArrowRight size={11} />
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </>
            )}
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: '0 0 96px' }}>
          <div className="container">
            <div
              className="card"
              style={{
                padding: '56px 48px',
                background: 'linear-gradient(135deg, rgba(15,23,42,0.97) 0%, rgba(30,58,138,0.95) 100%)',
                border: '1px solid rgba(59,130,246,0.25)',
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              {/* Background glow */}
              <div style={{ position: 'absolute', top: -60, right: -60, width: 280, height: 280, borderRadius: '50%', background: 'rgba(59,130,246,0.12)', filter: 'blur(60px)', pointerEvents: 'none' }} />

              <div className="rg-content-cta" style={{ gap: 48, alignItems: 'center', position: 'relative', zIndex: 1 }}>
                {/* Left */}
                <div>
                  <div style={{ fontSize: 12, fontFamily: 'var(--font-mono)', color: 'rgba(147,197,253,0.8)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 16 }}>
                    Your project, next
                  </div>
                  <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 800, color: 'white', lineHeight: 1.2, marginBottom: 16 }}>
                    Want results like these<br />for your business?
                  </h2>
                  <p style={{ fontSize: 15, color: 'rgba(203,213,225,0.85)', lineHeight: 1.7, maxWidth: 460, marginBottom: 0 }}>
                    Every case study above started with a 30-minute discovery call. We&apos;ll scope your project,
                    recommend the right platform, and give you an honest timeline and budget — before you commit to anything.
                  </p>

                  {/* Social proof strip */}
                  <div style={{ display: 'flex', gap: 24, marginTop: 28, flexWrap: 'wrap' }}>
                    {[
                      { value: '50+', label: 'projects shipped' },
                      { value: '8', label: 'countries served' },
                      { value: '14 wks', label: 'avg delivery' },
                    ].map((s) => (
                      <div key={s.label}>
                        <div style={{ fontSize: 20, fontWeight: 800, color: 'white' }}>{s.value}</div>
                        <div style={{ fontSize: 11, color: 'rgba(147,197,253,0.7)', fontFamily: 'var(--font-mono)', marginTop: 2 }}>{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12, minWidth: 220 }}>
                  <Link href="/tools/project-estimator" className="btn btn-emerald" style={{ padding: '14px 24px', fontSize: 14, justifyContent: 'center', whiteSpace: 'nowrap' }}>
                    <Sparkles size={15} /> Get a Free AI Estimate
                  </Link>
                  <Link href="/contact" className="btn" style={{ padding: '13px 24px', fontSize: 14, justifyContent: 'center', background: 'rgba(255,255,255,0.08)', color: 'white', border: '1px solid rgba(255,255,255,0.15)', whiteSpace: 'nowrap' }}>
                    <Phone size={14} /> Book a Discovery Call
                  </Link>
                  <p style={{ fontSize: 11, color: 'rgba(147,197,253,0.55)', textAlign: 'center', fontFamily: 'var(--font-mono)', marginTop: 4 }}>
                    No commitment · Response in &lt;24 hrs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
