import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Code2, Globe, Smartphone, Cloud, Brain, Palette, Sparkles, Shield } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { services } from '@/lib/data/services';

export const metadata: Metadata = {
  title: 'Services — Custom Software Development, Mobile, AI & Cloud',
  description: 'Six core engineering disciplines. Custom software, web apps, mobile, AI/ML, cloud & DevOps, and UI/UX design. All in-house, all in Dhaka.',
};

const ICON_MAP: Record<string, React.ComponentType<{ size: number }>> = {
  code: Code2, globe: Globe, mobile: Smartphone,
  cloud: Cloud, brain: Brain, palette: Palette,
};

const ACCENT_MAP: Record<string, string> = {
  blue: '#3B82F6', cyan: '#06B6D4', purple: '#A855F7',
  emerald: '#10B981', amber: '#F59E0B', rose: '#F43F5E',
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 80 }}>
        {/* Hero */}
        <section style={{ padding: '80px 0 64px', position: 'relative', overflow: 'hidden' }}>
          <div className="mesh-bg" />
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <span className="eyebrow" style={{ marginBottom: 20, display: 'inline-flex' }}>
              <span className="ev-dot" />What we build
            </span>
            <h1 className="font-display" style={{ fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 800, lineHeight: 1.1, color: 'var(--text)', maxWidth: 700 }}>
              Six disciplines.<br /><span className="grad-blue">One delivery team.</span>
            </h1>
            <p style={{ marginTop: 20, fontSize: 18, color: 'var(--text-2)', maxWidth: 600, lineHeight: 1.65 }}>
              No subcontractors, no token-counting agencies. Every service is delivered by engineers we hired, trained, and retained in our Gulshan-2 office.
            </p>
            <div style={{ marginTop: 32, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Link href="/tools/project-estimator" className="btn btn-emerald" style={{ padding: '12px 20px' }}>
                <Sparkles size={15} /> Get a Free Estimate
              </Link>
              <Link href="/contact" className="btn btn-ghost" style={{ padding: '12px 20px' }}>
                Talk to an engineer
              </Link>
            </div>
          </div>
        </section>

        {/* Services grid */}
        <section style={{ padding: '0 0 80px' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
              {services.map((service) => {
                const Icon = ICON_MAP[service.icon] ?? Code2;
                const accent = ACCENT_MAP[service.tagVariant] ?? '#3B82F6';

                return (
                  <Link key={service.slug} href={`/services/${service.slug}`} className="card card-hover" style={{ padding: 28 }}>
                    <div style={{ width: 48, height: 48, borderRadius: 12, background: `${accent}18`, border: `1px solid ${accent}30`, display: 'grid', placeItems: 'center', color: accent, marginBottom: 18 }}>
                      <Icon size={22} />
                    </div>
                    <h2 style={{ fontSize: 19, fontWeight: 700, color: 'var(--text)', marginBottom: 10 }}>{service.title}</h2>
                    <p style={{ fontSize: 14, color: 'var(--text-2)', lineHeight: 1.65, marginBottom: 16 }}>{service.shortDescription}</p>

                    {/* Tech tags */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 16 }}>
                      {service.technologies.slice(0, 4).map((tech) => (
                        <span key={tech} className="tag" style={{ fontSize: 10 }}>{tech}</span>
                      ))}
                    </div>

                    {/* Typical range */}
                    <div style={{ paddingTop: 16, borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div>
                        <div style={{ fontSize: 11, color: 'var(--text-3)', fontFamily: 'var(--font-mono)', marginBottom: 2 }}>Typical range</div>
                        <div style={{ fontSize: 14, fontWeight: 700, color: accent }}>
                          ${(service.typicalRange.low / 1000).toFixed(0)}K – ${(service.typicalRange.high / 1000).toFixed(0)}K+
                        </div>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 13, color: accent, fontWeight: 600 }}>
                        Learn more <ArrowRight size={13} />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section style={{ padding: '0 0 96px' }}>
          <div className="container">
            <div className="card" style={{ padding: '48px', textAlign: 'center', background: 'linear-gradient(135deg, rgba(59,130,246,0.10), rgba(16,185,129,0.06))', border: '1px solid rgba(59,130,246,0.2)' }}>
              <Shield size={32} style={{ color: 'var(--emerald)', marginBottom: 16 }} />
              <h2 style={{ fontSize: 32, fontWeight: 800, color: 'var(--text)', marginBottom: 12 }}>Not sure what you need?</h2>
              <p style={{ fontSize: 16, color: 'var(--text-2)', maxWidth: 480, margin: '0 auto 24px', lineHeight: 1.65 }}>
                Our AI estimator analyzes your requirements and recommends the right services, team, and timeline.
              </p>
              <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href="/tools/project-estimator" className="btn btn-emerald" style={{ padding: '12px 24px' }}>
                  <Sparkles size={15} /> Try AI Estimator — it&apos;s free
                </Link>
                <Link href="/contact" className="btn btn-ghost" style={{ padding: '12px 24px' }}>
                  Talk to us first
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
