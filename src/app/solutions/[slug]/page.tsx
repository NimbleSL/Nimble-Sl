import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Play, ArrowRight, Sparkles, Shield, CheckCircle2 } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { solutions } from '@/lib/data/solutions';

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const sol = solutions.find((s) => s.slug === slug);
  if (!sol) return {};
  return {
    title: `${sol.name} — ${sol.tagline}`,
    description: sol.description,
    keywords: sol.keywords,
    openGraph: { 
      title: `${sol.name} — ${sol.tagline}`, 
      description: sol.description,
      images: [{ url: `/api/og?title=${encodeURIComponent(sol.name)}&category=${encodeURIComponent(sol.industry)}` }]
    },
    twitter: {
      card: 'summary_large_image',
      title: `${sol.name} — ${sol.tagline}`,
      description: sol.description,
      images: [{ url: `/api/og?title=${encodeURIComponent(sol.name)}&category=${encodeURIComponent(sol.industry)}` }]
    }
  };
}

export default async function SolutionDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const sol = solutions.find((s) => s.slug === slug);
  if (!sol) notFound();

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 80 }}>
        {/* Hero */}
        <section style={{ padding: '80px 0 64px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(800px 500px at 30% 0%, ${sol.accent}15, transparent 60%)`, pointerEvents: 'none' }} />
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 24, fontSize: 13, color: 'var(--text-3)', fontFamily: 'var(--font-mono)' }}>
              <Link href="/solutions" style={{ color: 'var(--text-3)' }}>Solutions</Link>
              <span>/</span>
              <span style={{ color: 'var(--text-2)' }}>{sol.name}</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
              <span className={`tag tag-${sol.tagVariant}`}>{sol.industry}</span>
            </div>

            <h1 className="font-display" style={{ fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 800, lineHeight: 1.1, color: 'var(--text)', marginBottom: 12 }}>
              {sol.name}
            </h1>
            <p style={{ fontSize: 20, fontWeight: 600, color: sol.accent, marginBottom: 16 }}>{sol.tagline}</p>
            <p style={{ fontSize: 17, color: 'var(--text-2)', maxWidth: 640, lineHeight: 1.65, marginBottom: 32 }}>
              {sol.description}
            </p>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn btn-primary" style={{ padding: '13px 22px', fontSize: 15 }}>
                <Play size={15} /> Request Demo Access
              </Link>
              <Link href="/contact" className="btn btn-ghost" style={{ padding: '13px 22px', fontSize: 15 }}>
                Get Custom Quote <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>

        {/* Features */}
        <section style={{ padding: '0 0 64px' }}>
          <div className="container">
            <h2 style={{ fontSize: 28, fontWeight: 700, color: 'var(--text)', marginBottom: 32 }}>Key features</h2>
            <div className="rg-4" style={{ gap: 20 }}>
              {sol.features.map((f) => (
                <div key={f.title} className="card" style={{ padding: 20 }}>
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: `${sol.accent}18`, display: 'grid', placeItems: 'center', marginBottom: 14, fontSize: 18 }}>
                    ⚡
                  </div>
                  <h3 style={{ fontSize: 15, fontWeight: 700, color: 'var(--text)', marginBottom: 8 }}>{f.title}</h3>
                  <p style={{ fontSize: 13, color: 'var(--text-2)', lineHeight: 1.5 }}>{f.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Customization tiers */}
        <section style={{ padding: '0 0 64px' }}>
          <div className="container">
            <h2 style={{ fontSize: 28, fontWeight: 700, color: 'var(--text)', marginBottom: 8 }}>Customization tiers</h2>
            <p style={{ fontSize: 15, color: 'var(--text-2)', marginBottom: 32 }}>Start from our proven foundation. Customize to your exact needs.</p>
            <div className="rg-3" style={{ gap: 20 }}>
              {sol.customizationTiers.map((tier, i) => (
                <div key={tier.name} className="card" style={{ padding: 28, border: i === 1 ? `1px solid ${sol.accent}40` : '1px solid var(--border)' }}>
                  {i === 1 && <div className="tag" style={{ fontSize: 10, marginBottom: 12, background: `${sol.accent}18`, color: sol.accent, borderColor: `${sol.accent}30` }}>Most popular</div>}
                  <div style={{ fontSize: 24, fontWeight: 800, color: sol.accent, marginBottom: 4 }}>{tier.priceRange}</div>
                  <div style={{ fontSize: 17, fontWeight: 700, color: 'var(--text)', marginBottom: 10 }}>{tier.name}</div>
                  <p style={{ fontSize: 14, color: 'var(--text-2)', lineHeight: 1.6, marginBottom: 20 }}>{tier.description}</p>
                  <Link href="/contact" className="btn" style={{ width: '100%', justifyContent: 'center', fontSize: 13, padding: '10px', background: i === 1 ? sol.accent : 'transparent', color: i === 1 ? 'white' : 'var(--text-2)', border: i === 1 ? 'none' : '1px solid var(--border-2)' }}>
                    Get a quote <ArrowRight size={12} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech stack */}
        <section style={{ padding: '0 0 64px' }}>
          <div className="container">
            <div className="card" style={{ padding: 32 }}>
              <h2 style={{ fontSize: 22, fontWeight: 700, color: 'var(--text)', marginBottom: 20 }}>Tech stack</h2>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {sol.techStack.map((t) => (
                  <span key={t} className="tag" style={{ fontSize: 12, padding: '5px 10px' }}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section style={{ padding: '0 0 96px' }}>
          <div className="container">
            <div className="card" style={{ padding: 48, textAlign: 'center', background: `linear-gradient(135deg, ${sol.accent}12, transparent)`, border: `1px solid ${sol.accent}25` }}>
              <h2 style={{ fontSize: 32, fontWeight: 800, color: 'var(--text)', marginBottom: 12 }}>Want to customize {sol.name} for your business?</h2>
              <p style={{ fontSize: 16, color: 'var(--text-2)', maxWidth: 480, margin: '0 auto 28px', lineHeight: 1.65 }}>
                Book a demo walkthrough with one of our engineers. We&apos;ll show you how we can adapt this for your specific use case.
              </p>
              <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href="/contact" className="btn btn-emerald" style={{ padding: '13px 24px' }}>
                  <Sparkles size={14} /> Book a demo walkthrough
                </Link>
                <Link href="/contact" className="btn btn-ghost" style={{ padding: '13px 24px' }}>
                  <Play size={14} /> Request Demo Access
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
