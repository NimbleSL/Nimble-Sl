import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight, Play, Sparkles, Star } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { caseStudies } from '@/lib/data/caseStudies';

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) return {};
  return {
    title: `${cs.title}: ${cs.subtitle}`,
    description: cs.challenge.slice(0, 160),
    openGraph: { title: `${cs.title} — NimbleSL Case Study`, description: cs.subtitle },
  };
}

export default async function CaseStudyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) notFound();

  const related = caseStudies.filter((c) => c.slug !== cs.slug && c.industry === cs.industry).slice(0, 2);

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 80 }}>
        {/* Hero */}
        <section style={{ padding: '80px 0 64px', position: 'relative', overflow: 'hidden' }}>
          <div className="mesh-bg" />
          <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: 900 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 24, fontSize: 13, color: 'var(--text-3)', fontFamily: 'var(--font-mono)' }}>
              <Link href="/case-studies" style={{ color: 'var(--text-3)' }}>Case Studies</Link>
              <span>/</span>
              <span style={{ color: 'var(--text-2)' }}>{cs.title}</span>
            </div>

            <span className={`tag tag-${cs.tagVariant}`} style={{ marginBottom: 16, display: 'inline-flex' }}>{cs.industryTag}</span>

            <h1 className="font-display" style={{ fontSize: 'clamp(32px, 4.5vw, 56px)', fontWeight: 800, lineHeight: 1.1, color: 'var(--text)', marginTop: 12, marginBottom: 16 }}>
              {cs.title}: {cs.subtitle}
            </h1>

            <p style={{ fontSize: 16, color: 'var(--text-2)', lineHeight: 1.7 }}>
              <strong style={{ color: 'var(--text-3)', fontFamily: 'var(--font-mono)', fontSize: 12 }}>CLIENT</strong>{' '}
              {cs.client} · <strong style={{ color: 'var(--text-3)', fontFamily: 'var(--font-mono)', fontSize: 12 }}>INDUSTRY</strong>{' '}
              {cs.industry}
            </p>
          </div>
        </section>

        {/* Metrics bar */}
        <section style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', background: 'rgba(15,22,41,0.5)' }}>
          <div className="container" style={{ padding: '40px 32px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: `repeat(${cs.metrics.length}, 1fr)`, gap: 24 }}>
              {cs.metrics.map((m) => (
                <div key={m.label} style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 32, fontWeight: 800, color: 'var(--text)', fontFamily: 'var(--font-plus-jakarta)', lineHeight: 1 }}>{m.value}</div>
                  <div style={{ fontSize: 13, color: 'var(--text-2)', marginTop: 6 }}>{m.label}</div>
                  {m.sub && <div style={{ fontSize: 11, color: 'var(--text-3)', marginTop: 4, fontFamily: 'var(--font-mono)' }}>{m.sub}</div>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Content */}
        <section style={{ padding: '64px 0 80px' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 48, alignItems: 'start' }}>
              {/* Main content */}
              <div>
                <div style={{ marginBottom: 48 }}>
                  <h2 style={{ fontSize: 24, fontWeight: 700, color: 'var(--text)', marginBottom: 16 }}>The Challenge</h2>
                  <p style={{ fontSize: 16, color: 'var(--text-2)', lineHeight: 1.75 }}>{cs.challenge}</p>
                </div>

                <div style={{ marginBottom: 48 }}>
                  <h2 style={{ fontSize: 24, fontWeight: 700, color: 'var(--text)', marginBottom: 16 }}>Our Approach</h2>
                  <p style={{ fontSize: 16, color: 'var(--text-2)', lineHeight: 1.75 }}>{cs.approach}</p>
                </div>

                <div style={{ marginBottom: 48 }}>
                  <h2 style={{ fontSize: 24, fontWeight: 700, color: 'var(--text)', marginBottom: 16 }}>The Solution</h2>
                  <p style={{ fontSize: 16, color: 'var(--text-2)', lineHeight: 1.75, marginBottom: 20 }}>{cs.solution}</p>
                  {/* Tech stack */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {cs.techStack.map((t) => (
                      <span key={t} className="tag" style={{ fontSize: 12, padding: '5px 10px' }}>{t}</span>
                    ))}
                  </div>
                </div>

                {/* Results */}
                <div style={{ marginBottom: 48 }}>
                  <h2 style={{ fontSize: 24, fontWeight: 700, color: 'var(--text)', marginBottom: 16 }}>Results & Impact</h2>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {cs.results.map((r) => (
                      <div key={r} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, padding: '12px 16px', background: 'rgba(16,185,129,0.05)', borderRadius: 8, border: '1px solid rgba(16,185,129,0.12)' }}>
                        <span style={{ color: 'var(--emerald)', flexShrink: 0 }}>✓</span>
                        <span style={{ fontSize: 14, color: 'var(--text-2)', lineHeight: 1.5 }}>{r}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Testimonial */}
                {cs.testimonial && (
                  <div className="card" style={{ padding: 32, background: 'linear-gradient(135deg, rgba(20,25,37,0.8), rgba(15,22,41,0.6))' }}>
                    <div style={{ color: 'var(--blue-2)', fontSize: 40, fontFamily: 'Georgia, serif', lineHeight: 0.5, marginBottom: 14 }}>&ldquo;</div>
                    <p style={{ fontSize: 17, color: 'var(--text)', lineHeight: 1.65, fontWeight: 500, marginBottom: 20 }}>
                      {cs.testimonial.quote}
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'linear-gradient(135deg, #3B82F6, #A855F7)', display: 'grid', placeItems: 'center', fontSize: 12, fontWeight: 700, color: 'white', flexShrink: 0 }}>
                        {cs.testimonial.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <div style={{ fontWeight: 700, color: 'var(--text)', fontSize: 14 }}>{cs.testimonial.name}</div>
                        <div style={{ fontSize: 12, color: 'var(--text-3)' }}>{cs.testimonial.title} · {cs.testimonial.company}</div>
                      </div>
                      <div style={{ marginLeft: 'auto', display: 'flex', gap: 2, color: '#FCD34D' }}>
                        {[1,2,3,4,5].map(s => <Star key={s} size={12} fill="#FCD34D" />)}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div style={{ position: 'sticky', top: 96 }}>
                {cs.demoUrl && (
                  <div className="card" style={{ padding: 24, marginBottom: 20 }}>
                    <h3 style={{ fontSize: 16, fontWeight: 700, color: 'var(--text)', marginBottom: 12 }}>Try the live demo</h3>
                    <a href={cs.demoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '11px', fontSize: 13 }}>
                      <Play size={13} /> Launch Demo
                    </a>
                  </div>
                )}

                <div className="card" style={{ padding: 24 }}>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: 'var(--text)', marginBottom: 12 }}>Want something similar?</h3>
                  <p style={{ fontSize: 13, color: 'var(--text-2)', lineHeight: 1.6, marginBottom: 16 }}>
                    Get an estimate for a project like this in 3 minutes.
                  </p>
                  <Link href="/tools/project-estimator" className="btn btn-emerald" style={{ width: '100%', justifyContent: 'center', padding: '11px', fontSize: 13 }}>
                    <Sparkles size={13} /> Free AI Estimate
                  </Link>
                  <Link href="/contact" className="btn btn-ghost" style={{ width: '100%', justifyContent: 'center', padding: '11px', fontSize: 13, marginTop: 10 }}>
                    Talk to us
                  </Link>
                </div>

                {related.length > 0 && (
                  <div style={{ marginTop: 20 }}>
                    <div style={{ fontSize: 12, fontFamily: 'var(--font-mono)', color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>Related case studies</div>
                    {related.map((r) => (
                      <Link key={r.slug} href={`/case-studies/${r.slug}`} className="card card-hover" style={{ padding: 16, display: 'block', marginBottom: 10 }}>
                        <span className={`tag tag-${r.tagVariant}`} style={{ fontSize: 10 }}>{r.industryTag}</span>
                        <h4 style={{ fontSize: 14, fontWeight: 600, color: 'var(--text)', marginTop: 8 }}>{r.title}</h4>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 12, color: 'var(--blue-2)', marginTop: 6, fontWeight: 600 }}>
                          Read <ArrowRight size={11} />
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
