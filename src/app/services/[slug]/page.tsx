import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight, Sparkles, Shield, CheckCircle2, Code2, Globe, Smartphone, Cloud, Brain, Palette } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { services } from '@/lib/data/services';
import { solutions } from '@/lib/data/solutions';
import { caseStudies } from '@/lib/data/caseStudies';

const ICON_MAP: Record<string, React.ComponentType<{ size: number }>> = {
  code: Code2, globe: Globe, mobile: Smartphone,
  cloud: Cloud, brain: Brain, palette: Palette,
};

const ACCENT_MAP: Record<string, string> = {
  blue: '#3B82F6', cyan: '#06B6D4', purple: '#A855F7',
  emerald: '#10B981', amber: '#F59E0B', rose: '#F43F5E',
};

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.title} — NimbleSL`,
    description: service.shortDescription,
    openGraph: { title: service.title, description: service.shortDescription },
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const Icon = ICON_MAP[service.icon] ?? Code2;
  const accent = ACCENT_MAP[service.tagVariant] ?? '#3B82F6';

  const relatedSols = solutions.filter((s) => service.relatedSolutions.includes(s.slug));
  const relatedCases = caseStudies.filter((c) => service.relatedCaseStudies.includes(c.slug));

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 80 }}>
        {/* Hero */}
        <section style={{ padding: '80px 0 64px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(800px 400px at 30% 0%, ${accent}15, transparent 60%)`, pointerEvents: 'none' }} />
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            {/* Breadcrumb */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 28, fontSize: 13, color: 'var(--text-3)', fontFamily: 'var(--font-mono)' }}>
              <Link href="/services" style={{ color: 'var(--text-3)', textDecoration: 'none' }}>Services</Link>
              <span>/</span>
              <span style={{ color: 'var(--text-2)' }}>{service.title}</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20, marginBottom: 24 }}>
              <div style={{ width: 56, height: 56, borderRadius: 14, background: `${accent}18`, border: `1px solid ${accent}30`, display: 'grid', placeItems: 'center', color: accent, flexShrink: 0 }}>
                <Icon size={26} />
              </div>
              <div>
                <h1 className="font-display" style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 800, lineHeight: 1.1, color: 'var(--text)' }}>
                  {service.title}
                </h1>
              </div>
            </div>

            <p style={{ fontSize: 18, color: 'var(--text-2)', maxWidth: 640, lineHeight: 1.65, marginBottom: 32 }}>
              {service.fullDescription}
            </p>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Link href="/tools/project-estimator" className="btn btn-emerald" style={{ padding: '12px 20px' }}>
                <Sparkles size={14} /> Get a Free Estimate
              </Link>
              <Link href="/contact" className="btn btn-ghost" style={{ padding: '12px 20px' }}>
                Talk to an engineer <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>

        {/* Content grid */}
        <section style={{ padding: '0 0 80px' }}>
          <div className="container">
            <div className="rg-content-cta" style={{ gap: 32, alignItems: 'start' }}>
              {/* Left */}
              <div>
                {/* Deliverables */}
                <div className="card" style={{ padding: 32, marginBottom: 24 }}>
                  <h2 style={{ fontSize: 22, fontWeight: 700, color: 'var(--text)', marginBottom: 20 }}>What we deliver</h2>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                    {service.deliverables.map((d) => (
                      <div key={d} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                        <CheckCircle2 size={16} style={{ color: accent, flexShrink: 0, marginTop: 2 }} />
                        <span style={{ fontSize: 15, color: 'var(--text-2)', lineHeight: 1.5 }}>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech stack */}
                <div className="card" style={{ padding: 32, marginBottom: 24 }}>
                  <h2 style={{ fontSize: 22, fontWeight: 700, color: 'var(--text)', marginBottom: 20 }}>Tech stack</h2>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {service.technologies.map((tech) => (
                      <span key={tech} className="tag" style={{ fontSize: 12, padding: '5px 10px' }}>{tech}</span>
                    ))}
                  </div>
                </div>

                {/* Related case studies */}
                {relatedCases.length > 0 && (
                  <div>
                    <h2 style={{ fontSize: 22, fontWeight: 700, color: 'var(--text)', marginBottom: 20 }}>Related case studies</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                      {relatedCases.map((cs) => (
                        <Link key={cs.slug} href={`/case-studies/${cs.slug}`} className="card card-hover" style={{ padding: 24 }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16 }}>
                            <div>
                              <span className={`tag tag-${cs.tagVariant}`} style={{ fontSize: 10, marginBottom: 8 }}>{cs.industryTag}</span>
                              <h3 style={{ fontSize: 17, fontWeight: 700, color: 'var(--text)', marginTop: 8 }}>{cs.title}</h3>
                              <p style={{ fontSize: 13, color: 'var(--text-2)', marginTop: 6, lineHeight: 1.5 }}>{cs.subtitle}</p>
                            </div>
                            <div style={{ display: 'flex', gap: 10, flexShrink: 0, flexWrap: 'wrap' }}>
                              {cs.metrics.slice(0, 2).map((m) => (
                                <div key={m.label} style={{ textAlign: 'center' }}>
                                  <div style={{ fontSize: 20, fontWeight: 800, color: 'var(--text)' }}>{m.value}</div>
                                  <div style={{ fontSize: 10, color: 'var(--text-3)', fontFamily: 'var(--font-mono)' }}>{m.label}</div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Right sidebar */}
              <div style={{ position: 'sticky', top: 96 }}>
                {/* Pricing hint */}
                <div className="card" style={{ padding: 24, marginBottom: 20, border: `1px solid ${accent}25` }}>
                  <div style={{ fontSize: 12, color: 'var(--text-3)', fontFamily: 'var(--font-mono)', marginBottom: 8 }}>TYPICAL RANGE</div>
                  <div style={{ fontSize: 28, fontWeight: 800, color: accent }}>
                    ${(service.typicalRange.low / 1000).toFixed(0)}K – ${(service.typicalRange.high / 1000).toFixed(0)}K+
                  </div>
                  <p style={{ fontSize: 13, color: 'var(--text-3)', marginTop: 8, lineHeight: 1.5 }}>
                    Based on 50+ completed projects. Use the AI Estimator for a project-specific quote.
                  </p>
                </div>

                {/* CTA card */}
                <div className="card" style={{ padding: 24 }}>
                  <h3 style={{ fontSize: 17, fontWeight: 700, color: 'var(--text)', marginBottom: 12 }}>Ready to build?</h3>
                  <p style={{ fontSize: 13, color: 'var(--text-2)', marginBottom: 20, lineHeight: 1.6 }}>
                    Get a detailed estimate in 3 minutes with our AI-powered tool.
                  </p>
                  <Link href="/tools/project-estimator" className="btn btn-emerald" style={{ width: '100%', justifyContent: 'center', padding: '11px 20px', fontSize: 13 }}>
                    <Sparkles size={13} /> Free AI Estimate
                  </Link>
                  <Link href="/contact" className="btn btn-ghost" style={{ width: '100%', justifyContent: 'center', padding: '11px 20px', fontSize: 13, marginTop: 10 }}>
                    Talk to us first
                  </Link>
                  <div style={{ marginTop: 20, padding: '12px 14px', background: 'rgba(16,185,129,0.06)', borderRadius: 8, border: '1px solid rgba(16,185,129,0.2)', display: 'flex', alignItems: 'center', gap: 8 }}>
                    <Shield size={13} style={{ color: 'var(--emerald)' }} />
                    <span style={{ fontSize: 12, color: 'var(--text-2)', lineHeight: 1.4 }}>1-week risk-free pilot. Don&apos;t pay if not satisfied.</span>
                  </div>
                </div>

                {/* Related products */}
                {relatedSols.length > 0 && (
                  <div style={{ marginTop: 20 }}>
                    <div style={{ fontSize: 12, fontFamily: 'var(--font-mono)', color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>Related products</div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                      {relatedSols.map((sol) => (
                        <Link key={sol.slug} href={`/solutions/${sol.slug}`} className="card card-hover" style={{ padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 10 }}>
                          <div style={{ width: 8, height: 8, borderRadius: '50%', background: sol.accent, flexShrink: 0 }} />
                          <div>
                            <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--text)' }}>{sol.name}</div>
                            <div style={{ fontSize: 11, color: 'var(--text-3)' }}>{sol.industry}</div>
                          </div>
                          <ArrowRight size={12} style={{ color: 'var(--text-3)', marginLeft: 'auto' }} />
                        </Link>
                      ))}
                    </div>
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
