import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Code2, Globe, Smartphone, Cloud, Brain, Palette, Sparkles, Shield, Search, PenTool, Layers, FlaskConical, Rocket, HeartHandshake } from 'lucide-react';
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
      <main>
        {/* Hero */}
        <section className="inner-hero-pt" style={{ padding: '0 0 64px', position: 'relative', overflow: 'hidden' }}>
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

        {/* How We Work */}
        <section style={{ padding: '0 0 88px' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: 52 }}>
              <span className="eyebrow" style={{ display: 'inline-flex', marginBottom: 14 }}>
                <span className="ev-dot" />Our delivery process
              </span>
              <h2 className="font-display" style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: 'var(--text)', lineHeight: 1.15, marginBottom: 16 }}>
                From first call to <span className="grad-blue">production launch</span>
              </h2>
              <p style={{ fontSize: 16, color: 'var(--text-2)', maxWidth: 560, margin: '0 auto', lineHeight: 1.7 }}>
                We don&apos;t start coding on week one. Every project begins with a structured discovery phase that prevents the rework, scope creep, and deadline misses that plague most software engagements.
              </p>
            </div>

            {/* Steps */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0, maxWidth: 860, margin: '0 auto' }}>
              {[
                {
                  step: '01',
                  icon: Search,
                  title: 'Discovery & Scoping',
                  duration: 'Week 1',
                  color: '#3B82F6',
                  description: 'We start with a 90-minute discovery call — not a sales call. Our tech lead and a business analyst ask the questions most agencies skip: what are the exact pain points, what does success look like in 6 months, what integrations exist, and what are the non-negotiables? We then produce a 2–4 page scope document that defines deliverables, exclusions, and acceptance criteria before a single contract is signed. This document is the source of truth for the entire project — it prevents the "I thought that was included" conversations that derail engagements.',
                },
                {
                  step: '02',
                  icon: PenTool,
                  title: 'Architecture & Design',
                  duration: 'Weeks 2–3',
                  color: '#8B5CF6',
                  description: 'Our architect proposes the technical stack, data model, and integration approach, with explicit reasoning for each choice — not "we always use X." UI/UX wireframes and design system are produced in Figma before development begins. You review and approve before we write a line of code. For projects using our pre-built platforms (PayFlow, NimbleERP, etc.), this phase maps your specific requirements to the platform configuration, identifies the custom extension points, and eliminates surprises about what requires custom work vs what comes standard.',
                },
                {
                  step: '03',
                  icon: Layers,
                  title: 'Sprint Development',
                  duration: '2-week sprints',
                  color: '#10B981',
                  description: 'Development runs in 2-week sprints with a working demo at the end of every sprint — not a status update, an actual working feature you can click through. You get access to a staging environment from week 2. Every sprint starts with a backlog review where you can reprioritise upcoming work based on what you\'ve seen. Our teams are small (4–7 people) and structured to work without hand-off delays: frontend, backend, mobile, and QA engineers in the same daily standup. We don\'t use offshore-to-offshore subcontracting — everyone on your project is in our Gulshan-2 office.',
                },
                {
                  step: '04',
                  icon: FlaskConical,
                  title: 'QA & Performance Testing',
                  duration: 'Parallel + final sprint',
                  color: '#F59E0B',
                  description: 'QA runs in parallel with development, not after it. Every feature has a test case written before implementation begins. Automated test suites cover regression, API contracts, and critical user paths. Load testing runs against the production infrastructure at a simulated 5x expected peak load before any go-live sign-off. Security testing covers OWASP Top 10 and, for FinTech or healthcare clients, the specific compliance requirements of their jurisdiction (PCI DSS, HIPAA, FCA, ADGM). Nothing is marked "done" until it passes QA.',
                },
                {
                  step: '05',
                  icon: Rocket,
                  title: 'Launch & Handover',
                  duration: 'Final week',
                  color: '#EF4444',
                  description: 'Go-live is planned, not rushed. We produce a deployment checklist, run a go/no-go review, and deploy during a low-traffic window with a rollback procedure prepared and tested. Every project includes a technical handover package: architecture documentation, environment setup guide, API documentation (Swagger/Postman), database schema, and a runbook for common operational tasks. If you\'re hiring an in-house engineer to take over, we schedule a 3-hour technical handover session at no additional cost. The goal is that you are never dependent on us for day-to-day operation.',
                },
                {
                  step: '06',
                  icon: HeartHandshake,
                  title: 'Support & Growth',
                  duration: 'Ongoing',
                  color: '#06B6D4',
                  description: 'Post-launch support is a structured retainer, not an ad-hoc email relationship. Monthly retainer clients get a dedicated Slack channel, a committed response SLA (4 hours for critical issues, 24 hours for non-critical), and a monthly product review session where we review analytics, flag performance regressions, and plan the next feature sprint. Roughly 60% of our clients engage us on their next project within 6 months — not because of a contract obligation, but because the working relationship is already established and the team already knows the codebase.',
                },
              ].map((s, i) => {
                const Icon = s.icon;
                const isLast = i === 5;
                return (
                  <div key={s.step} style={{ display: 'flex', gap: 0, position: 'relative' }}>
                    {/* Left — step number + connector */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 64, flexShrink: 0 }}>
                      <div style={{ width: 44, height: 44, borderRadius: '50%', background: `${s.color}18`, border: `2px solid ${s.color}40`, display: 'grid', placeItems: 'center', color: s.color, flexShrink: 0, zIndex: 1 }}>
                        <Icon size={18} />
                      </div>
                      {!isLast && (
                        <div style={{ width: 1, flex: 1, background: 'var(--border)', minHeight: 32, margin: '4px 0' }} />
                      )}
                    </div>

                    {/* Right — content */}
                    <div style={{ paddingLeft: 20, paddingBottom: isLast ? 0 : 40, flex: 1, paddingTop: 8 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10, flexWrap: 'wrap' }}>
                        <span style={{ fontSize: 11, fontFamily: 'var(--font-mono)', color: s.color, fontWeight: 700 }}>STEP {s.step}</span>
                        <span style={{ fontSize: 17, fontWeight: 700, color: 'var(--text)' }}>{s.title}</span>
                        <span className="tag" style={{ fontSize: 10, marginLeft: 'auto' }}>{s.duration}</span>
                      </div>
                      <p style={{ fontSize: 14, color: 'var(--text-2)', lineHeight: 1.75, margin: 0 }}>{s.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Services grid */}
        <section style={{ padding: '0 0 80px' }}>
          <div className="container">
            <div className="rg-3" style={{ gap: 24 }}>
              {services.map((service) => {
                const Icon = ICON_MAP[service.icon] ?? Code2;
                const accent = ACCENT_MAP[service.tagVariant] ?? '#3B82F6';

                return (
                  <Link key={service.slug} href={`/services/${service.slug}`} className="card card-hover" style={{ padding: 28, display: 'flex', flexDirection: 'column' }}>
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

                    {/* CTA row */}
                    <div style={{ marginTop: 'auto', paddingTop: 16, borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 13, color: accent, fontWeight: 600 }}>
                        Explore service <ArrowRight size={13} />
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
    </>
  );
}
