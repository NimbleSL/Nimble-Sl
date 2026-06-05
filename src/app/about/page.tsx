import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  CheckCircle2, Shield, Users, DollarSign, BookOpen,
  Target, Zap, Handshake, Eye, Award, ArrowRight,
  MapPin, Globe, Clock, Sparkles,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About NimbleSL — Silicon Valley Engineering, Bangladesh Pricing',
  description:
    'Founded in 2026 in Dhaka. Built by engineers who spent years in the industry, then decided to do it right. Delivering enterprise-grade software at 40–60% less than US/UK agencies.',
  openGraph: {
    title: 'About NimbleSL',
    description: 'We started in Dhaka in 2026 because offshore deserved better than offshore.',
    url: 'https://nimblesl.com/about',
  },
};

/* ─── DATA ────────────────────────────────────────────────────────────── */

const STATS = [
  { value: '2026', label: 'Founded', accent: 'var(--text)' },
  { value: '20+',  label: 'Team & growing', accent: 'var(--blue-2)' },
  { value: '12',   label: 'Countries served', accent: '#67E8F9' },
  { value: '98%',  label: 'Client retention', accent: 'var(--emerald-2)' },
];

const TIMELINE: { y: string; t: string; d: string; upcoming?: boolean }[] = [
  { y: 'Jan 2026',    t: 'NimbleSL founded',          d: 'Two founders leave their jobs and start NimbleSL with a small team of 4 exceptional developers. One office in Gulshan-2, Dhaka. Zero outside investment.' },
  { y: 'Feb 2026',    t: 'First client onboarded',     d: 'First discovery call, first project scoped and kicked off. Early proof that the model works.' },
  { y: 'Mar 2026',    t: 'First delivery',              d: 'First project shipped on time and within budget. Client refers us to two more within the month.' },
  { y: 'Q2 2026',     t: 'Team hits 20+ and growing',  d: 'Grew from 12+ to 20+ team members. First international clients from UK and EU in the pipeline.' },
  { y: 'Q2 2026',     t: 'AI Estimator goes live',     d: 'Claude-powered scoping tool launches. 3-minute project estimates, directly on the website.' },
  { y: 'Q3 2026',     t: 'Product Showroom',           d: 'PayFlow, FraudShield AI, and ClaimWise launch as live working demos for prospective clients.', upcoming: true },
  { y: '2027',        t: 'Scale & expand',             d: 'Target: 50+ completed projects, 15+ active engagements, first proprietary SaaS product in market.', upcoming: true },
];

const VALUES = [
  {
    icon: BookOpen,
    title: 'Receipts every Friday',
    description: 'Demo video, sprint report, Slack channel access — every week, without asking. You always know exactly where your money went.',
    accent: '#3B82F6',
  },
  {
    icon: Shield,
    title: 'Your IP, always',
    description: 'No platform fees, no code royalties, no usage licenses. Every line we write transfers to you at project completion. Full stop.',
    accent: '#10B981',
  },
  {
    icon: Users,
    title: 'No subcontracting',
    description: "Every engineer on your project is on our payroll, trained by us, reviewed by us. We don\u2019t forward your work to agencies.",
    accent: '#06B6D4',
  },
  {
    icon: DollarSign,
    title: 'Transparent pricing',
    description: "Fixed-bid where scope is clear. Hourly with weekly caps where it isn\u2019t. No surprise invoices. Budget overruns require your written approval.",
    accent: '#F59E0B',
  },
  {
    icon: CheckCircle2,
    title: 'Clean handoffs',
    description: 'Runbooks, training videos, architecture docs, and code walkthroughs — so you can operate without us, or switch vendors if you choose.',
    accent: '#A855F7',
  },
];

const GOALS = [
  {
    num: '01',
    title: 'Technical Leadership',
    description:
      'Become Bangladesh\'s most-cited engineering team — recognized for architectural innovation, open-source contributions, and engineering best practices that other teams learn from.',
    accent: '#3B82F6',
  },
  {
    num: '02',
    title: 'Product Evolution',
    description:
      'Transition from pure services to a hybrid model. Our proprietary SaaS products — PayFlow, FraudShield AI, ClaimWise — already run in production for paying clients. We\'re expanding the portfolio.',
    accent: '#10B981',
  },
  {
    num: '03',
    title: 'Strategic Partnerships',
    description:
      'Become the go-to technical partner for US, UK, and EU businesses entering or scaling in South Asia — not just for execution, but as the team they call first when a strategic technology decision needs to be made.',
    accent: '#A855F7',
  },
];

const WHY = [
  {
    icon: Award,
    title: 'Engineering excellence meets business impact',
    description: 'We write code that\'s meant to last. Architectural integrity, comprehensive test coverage, and documentation that your next team can actually use.',
    accent: '#3B82F6',
  },
  {
    icon: Handshake,
    title: 'True partnership, shared success',
    description: 'We invest in understanding your business context, not just your ticket backlog. Your constraints become ours. Your KPIs become our success criteria.',
    accent: '#10B981',
  },
  {
    icon: Eye,
    title: 'Transparency in every interaction',
    description: 'Clear roadmaps, honest communication, active staging access from day one. No hidden complexity. No surprises two weeks before launch.',
    accent: '#06B6D4',
  },
  {
    icon: Zap,
    title: 'Innovation meets reliability',
    description: 'Cutting-edge technology — Next.js 15, Flutter, graph neural networks, edge deployments — delivered with enterprise-grade discipline and proven delivery track record.',
    accent: '#F59E0B',
  },
  {
    icon: Target,
    title: 'Ownership that drives results',
    description: 'We take accountability for outcomes, not just outputs. Every decision, every milestone, every go-live. If something breaks at 2am, we already know about it.',
    accent: '#A855F7',
  },
];

const CERTIFICATIONS = [
  { icon: CheckCircle2, label: 'Architected for GDPR' },
  { icon: Shield,      label: 'Architected for ISO 27001' },
  { icon: CheckCircle2, label: 'Architected for HIPAA' },
  { icon: Shield,      label: 'Architected for OWASP' },
  { icon: Award,       label: 'Client-First Delivery' },
];

/* ─── PAGE ────────────────────────────────────────────────────────────── */

export default function AboutPage() {
  return (
    <main className="min-h-screen" style={{ background: 'var(--bg)' }}>

      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="inner-hero-pt" style={{ padding: '0 0 64px', position: 'relative', overflow: 'hidden' }}>
        <div className="mesh-bg" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="eyebrow" style={{ marginBottom: 20, display: 'inline-flex' }}>
            <span className="ev-dot" />About NimbleSL
          </span>
          <h1
            className="font-display"
            style={{ fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 800, lineHeight: 1.08, letterSpacing: '-0.02em', maxWidth: 900, color: 'var(--text)' }}
          >
            We started in Dhaka in 2026 because<br />
            <span className="grad-blue">offshore deserved better than offshore.</span>
          </h1>
          <p style={{ marginTop: 28, fontSize: 19, maxWidth: 760, color: 'var(--text-2)', lineHeight: 1.65 }}>
            NimbleSL was founded on a frustration: most Western companies still associate &ldquo;offshore engineering&rdquo;
            with cheap, slow, and unreliable. We left our jobs to prove the opposite — that a
            Dhaka-based team can ship at Silicon Valley quality, with Silicon Valley discipline, at 40&ndash;60% the cost.
          </p>
        </div>
      </section>

      {/* ── Stats ─────────────────────────────────────────────────────── */}
      <section style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', background: 'var(--surface)' }}>
        <div className="container" style={{ padding: '48px 32px' }}>
          <div className="rg-4" style={{ gap: 32 }}>
            {STATS.map((s) => (
              <div key={s.label} style={{ textAlign: 'center' }}>
                <div className="font-display" style={{ fontSize: 42, fontWeight: 800, color: s.accent, lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontSize: 13, color: 'var(--text-3)', marginTop: 8, fontFamily: 'var(--font-mono)' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Story ─────────────────────────────────────────────────── */}
      <section style={{ padding: '96px 0' }}>
        <div className="container">
          <div className="rg-hero" style={{ gap: 64, alignItems: 'start' }}>

            {/* Left: copy */}
            <div>
              <span className="eyebrow" style={{ marginBottom: 16, display: 'inline-flex' }}>
                <span className="ev-dot" />Our Story
              </span>
              <h2 className="font-display" style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 800, lineHeight: 1.15, color: 'var(--text)' }}>
                Two founders.<br />One thesis.
              </h2>
              <p style={{ marginTop: 24, fontSize: 16, color: 'var(--text-2)', lineHeight: 1.75 }}>
                In January 2026, Main Uddin Chisty and Habibur Rahman left their jobs and started NimbleSL
                with a small crew of 4 exceptional developers. Not another outsourcing body shop — a proper
                engineering company with real processes and real accountability.
              </p>
              <p style={{ marginTop: 16, fontSize: 16, color: 'var(--text-2)', lineHeight: 1.75 }}>
                The thesis was simple: <strong style={{ color: 'var(--text)' }}>build a Western-discipline engineering team in Dhaka.</strong> Tight
                code reviews. Demo every Friday. Written design docs before any code is written.
                Zero subcontracting. Charge Western clients directly — pass most of the savings on.
              </p>
              <p style={{ marginTop: 16, fontSize: 16, color: 'var(--text-2)', lineHeight: 1.75 }}>
                The team grew quickly — first 12+, now 20+ and still growing. We&apos;re building this the right way: no shortcuts,
                no VC pressure, no false promises. Every client gets the same engineering discipline
                we set out to prove is possible from Dhaka.
              </p>

              {/* Address */}
              <div style={{ marginTop: 32, display: 'flex', alignItems: 'center', gap: 10, color: 'var(--text-2)', fontSize: 13 }}>
                <MapPin size={14} style={{ color: 'var(--blue-2)', flexShrink: 0 }} />
                <span>House-1, Road-34, Gulshan-2, Dhaka-1212, Bangladesh</span>
                <span style={{ color: 'var(--border-2)' }}>·</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12 }}>GMT +6</span>
              </div>
            </div>

            {/* Right: timeline card */}
            <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
              <div style={{ padding: '16px 24px', borderBottom: '1px solid var(--border)', background: 'var(--surface-2)' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
                  Company Timeline
                </span>
              </div>
              {TIMELINE.map((item, i) => (
                <div
                  key={`${item.y}-${i}`}
                  style={{
                    display: 'flex', gap: 16, padding: '16px 24px',
                    borderBottom: i < TIMELINE.length - 1 ? '1px solid var(--border)' : 'none',
                    opacity: item.upcoming ? 0.5 : 1,
                  }}
                >
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: item.upcoming ? 'var(--text-3)' : 'var(--blue-2)', width: 76, flexShrink: 0, fontWeight: 700, paddingTop: 3 }}>{item.y}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--text)' }}>{item.t}</div>
                      {item.upcoming && (
                        <span style={{ fontSize: 9, fontFamily: 'var(--font-mono)', color: 'var(--text-3)', border: '1px solid var(--border-2)', borderRadius: 4, padding: '1px 5px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>planned</span>
                      )}
                    </div>
                    <div style={{ fontSize: 12, color: 'var(--text-2)', marginTop: 4, lineHeight: 1.6 }}>{item.d}</div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── Mission & Vision ──────────────────────────────────────────── */}
      <section style={{ padding: '0 0 96px', borderTop: '1px solid var(--border)', paddingTop: 96 }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <span className="eyebrow" style={{ marginBottom: 16, display: 'inline-flex' }}>
              <span className="ev-dot" />What we stand for
            </span>
            <h2 className="font-display" style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 800, color: 'var(--text)' }}>
              Mission & Vision
            </h2>
          </div>

          <div className="rg-2" style={{ gap: 24 }}>
            {/* Mission */}
            <div className="card" style={{ padding: 40, background: 'linear-gradient(135deg, rgba(59,130,246,0.08), transparent)', borderColor: 'rgba(59,130,246,0.2)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: 'rgba(59,130,246,0.15)', border: '1px solid rgba(59,130,246,0.4)', display: 'grid', placeItems: 'center', color: 'var(--blue-2)' }}>
                  <Target size={18} />
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Our Mission</div>
                  <div style={{ fontSize: 11, color: 'var(--blue-2)', fontWeight: 600, marginTop: 2 }}>Transforming Vision into Reality Through Technology</div>
                </div>
              </div>
              <p style={{ fontSize: 15, color: 'var(--text-2)', lineHeight: 1.75 }}>
                To bridge the gap between business ambition and technical execution. We exist to transform
                complex challenges into elegant, scalable solutions that drive measurable impact. Not just
                building applications — building trust-based partnerships where your success becomes our success.
                Through disciplined engineering, transparent communication, and unwavering focus on quality,
                we deliver software that doesn't just meet requirements but exceeds expectations and creates
                lasting competitive advantage.
              </p>
            </div>

            {/* Vision */}
            <div className="card" style={{ padding: 40, background: 'linear-gradient(135deg, rgba(16,185,129,0.08), transparent)', borderColor: 'rgba(16,185,129,0.2)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: 'rgba(16,185,129,0.15)', border: '1px solid rgba(16,185,129,0.4)', display: 'grid', placeItems: 'center', color: 'var(--emerald-2)' }}>
                  <Globe size={18} />
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Our Vision</div>
                  <div style={{ fontSize: 11, color: 'var(--emerald-2)', fontWeight: 600, marginTop: 2 }}>Engineering the Future of Digital Innovation</div>
                </div>
              </div>
              <p style={{ fontSize: 15, color: 'var(--text-2)', lineHeight: 1.75 }}>
                To evolve from a trusted service partner into a pioneering product company — one that builds
                scalable, enterprise-grade solutions recognized globally for technical excellence and business
                impact. We're committed to pushing the boundaries of what's possible: leveraging cutting-edge
                technologies to solve complex challenges while maintaining the agility and client-centric
                approach that defines us. Software that's not just functional, but exceptional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values (OWN IT) ───────────────────────────────────────────── */}
      <section style={{ padding: '96px 0', borderTop: '1px solid var(--border)', background: 'var(--surface)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 16 }}>
            <span className="eyebrow" style={{ marginBottom: 16, display: 'inline-flex' }}>
              <span className="ev-dot" />What we believe
            </span>
            <h2 className="font-display" style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 800, color: 'var(--text)' }}>
              Five values.<br />We refuse to compromise on these.
            </h2>
            <p style={{ marginTop: 16, fontSize: 13, fontFamily: 'var(--font-mono)', color: 'var(--blue-2)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              OWN IT — Next-Gen Solutions, Timeless Values
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {VALUES.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="card" style={{ padding: 24 }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: 10,
                    background: `${v.accent}18`, border: `1px solid ${v.accent}44`,
                    display: 'grid', placeItems: 'center', color: v.accent, marginBottom: 16,
                  }}>
                    <Icon size={18} />
                  </div>
                  <h3 style={{ fontSize: 14, fontWeight: 700, color: 'var(--text)', marginBottom: 10 }}>{v.title}</h3>
                  <p style={{ fontSize: 12, color: 'var(--text-2)', lineHeight: 1.7 }}>{v.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Goals ─────────────────────────────────────────────────────── */}
      <section style={{ padding: '96px 0', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ marginBottom: 56 }}>
            <span className="eyebrow" style={{ marginBottom: 16, display: 'inline-flex' }}>
              <span className="ev-dot" />Where we're headed
            </span>
            <h2 className="font-display" style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 800, color: 'var(--text)', maxWidth: 640 }}>
              Three goals driving every decision we make.
            </h2>
          </div>

          <div className="rg-3" style={{ gap: 24 }}>
            {GOALS.map((g) => (
              <div key={g.num} className="card" style={{ padding: 36 }}>
                <div style={{
                  fontSize: 56, fontWeight: 900, fontFamily: 'var(--font-display)',
                  color: `${g.accent}30`, lineHeight: 1, marginBottom: 20, userSelect: 'none',
                }}>
                  {g.num}
                </div>
                <h3 style={{ fontSize: 20, fontWeight: 800, color: g.accent, marginBottom: 12, fontFamily: 'var(--font-display)' }}>{g.title}</h3>
                <p style={{ fontSize: 14, color: 'var(--text-2)', lineHeight: 1.75 }}>{g.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Founders ──────────────────────────────────────────────────── */}
      <section style={{ padding: '96px 0', borderTop: '1px solid var(--border)', background: 'var(--surface)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <span className="eyebrow" style={{ marginBottom: 16, display: 'inline-flex' }}>
              <span className="ev-dot" />The Founders
            </span>
            <h2 className="font-display" style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 800, color: 'var(--text)' }}>
              Who you'll actually work with.
            </h2>
            <p style={{ marginTop: 14, fontSize: 16, color: 'var(--text-2)', maxWidth: 560, margin: '14px auto 0' }}>
              No account managers in the middle. You get direct access to the people who built this company.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 max-w-[900px] mx-auto">

            {/* CEO */}
            <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
              <div style={{ position: 'relative', background: 'linear-gradient(135deg, rgba(59,130,246,0.08), rgba(6,182,212,0.05))' }}>
                <Image
                  src="/images/md-main-uddin-chisty-ceo.png"
                  alt="Main Uddin Chisty — CEO & Co-founder, NimbleSL"
                  width={600}
                  height={600}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                  priority
                />
              </div>
              <div style={{ padding: 28 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
                  <div>
                    <h3 style={{ fontSize: 22, fontWeight: 800, color: 'var(--text)', fontFamily: 'var(--font-display)' }}>
                      Main Uddin Chisty
                    </h3>
                    <div style={{ fontSize: 13, color: 'var(--blue-2)', fontWeight: 600, marginTop: 4 }}>CEO & Co-founder</div>
                  </div>
                  <span className="tag tag-blue" style={{ fontSize: 10, marginTop: 4 }}>CEO</span>
                </div>
                <p style={{ fontSize: 14, color: 'var(--text-2)', lineHeight: 1.75, marginTop: 14 }}>
                  Main leads NimbleSL's strategic direction and client relationships. With a deep background
                  in enterprise software architecture and business development, he built the operational
                  blueprint that allows Nimble to deliver Silicon Valley-caliber engineering from Dhaka —
                  on budget, on time, and without the agency markup.
                </p>
                <div style={{ marginTop: 20, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                  {['Enterprise Strategy', 'Fintech', 'Client Partnerships'].map((tag) => (
                    <span key={tag} className="tag" style={{ fontSize: 10 }}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* COO */}
            <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
              <div style={{ position: 'relative', background: 'linear-gradient(135deg, rgba(16,185,129,0.08), rgba(6,182,212,0.05))' }}>
                <Image
                  src="/images/md-habibur-rahman-coo.jpeg"
                  alt="Habibur Rahman — COO & Co-founder, NimbleSL"
                  width={600}
                  height={600}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                  priority
                />
              </div>
              <div style={{ padding: 28 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
                  <div>
                    <h3 style={{ fontSize: 22, fontWeight: 800, color: 'var(--text)', fontFamily: 'var(--font-display)' }}>
                      Habibur Rahman
                    </h3>
                    <div style={{ fontSize: 13, color: 'var(--emerald-2)', fontWeight: 600, marginTop: 4 }}>COO & Co-founder</div>
                  </div>
                  <span className="tag tag-emerald" style={{ fontSize: 10, marginTop: 4 }}>COO</span>
                </div>
                <p style={{ fontSize: 14, color: 'var(--text-2)', lineHeight: 1.75, marginTop: 14 }}>
                  Known to clients and teammates as Anik, Habibur Rahman runs the engineering and delivery
                  side of NimbleSL. He built the internal processes — code review culture, sprint cadence,
                  Friday demo discipline — that make Nimble's delivery unusually reliable. If your project
                  ships on time, it's largely because of the systems Anik designed.
                </p>
                <div style={{ marginTop: 20, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                  {['Engineering Ops', 'Delivery', 'Full-Stack'].map((tag) => (
                    <span key={tag} className="tag" style={{ fontSize: 10 }}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Why Choose Nimble ─────────────────────────────────────────── */}
      <section style={{ padding: '96px 0', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <span className="eyebrow" style={{ marginBottom: 16, display: 'inline-flex' }}>
              <span className="ev-dot" />Why Nimble
            </span>
            <h2 className="font-display" style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 800, color: 'var(--text)' }}>
              Uncompromising commitment.<br />Exceptional delivery.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {WHY.map((w) => {
              const Icon = w.icon;
              return (
                <div key={w.title} className="card" style={{ padding: 24 }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: 10,
                    background: `${w.accent}18`, border: `1px solid ${w.accent}44`,
                    display: 'grid', placeItems: 'center', color: w.accent, marginBottom: 16,
                  }}>
                    <Icon size={18} />
                  </div>
                  <h3 style={{ fontSize: 13, fontWeight: 700, color: 'var(--text)', marginBottom: 10, lineHeight: 1.4 }}>{w.title}</h3>
                  <p style={{ fontSize: 12, color: 'var(--text-2)', lineHeight: 1.7 }}>{w.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Certifications ────────────────────────────────────────────── */}
      <section style={{ padding: '28px 0', background: 'var(--surface-2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: 24 }}>
            {CERTIFICATIONS.map((c) => {
              const Icon = c.icon;
              return (
                <div key={c.label} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'var(--text-2)' }}>
                  <Icon size={14} style={{ color: 'var(--emerald)', flexShrink: 0 }} />
                  {c.label}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <section style={{ padding: '96px 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(800px 400px at 50% 50%, rgba(59,130,246,0.08), transparent 70%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', textAlign: 'center' }}>
          <span className="eyebrow" style={{ marginBottom: 20, display: 'inline-flex' }}>
            <span className="ev-dot" />Ready to build?
          </span>
          <h2 className="font-display" style={{ fontSize: 'clamp(28px, 4vw, 52px)', fontWeight: 800, color: 'var(--text)', lineHeight: 1.1 }}>
            Let's prove it works for you.
          </h2>
          <p style={{ marginTop: 20, fontSize: 17, color: 'var(--text-2)', maxWidth: 560, margin: '20px auto 0', lineHeight: 1.65 }}>
            Three ways in. Pick what fits your stage.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 12, marginTop: 32, flexWrap: 'wrap' }}>
            <Link href="/tools/project-estimator" className="btn btn-emerald" style={{ padding: '14px 24px', fontSize: 15 }}>
              <Sparkles size={16} /> Get a Free Estimate
            </Link>
            <Link href="/contact" className="btn btn-primary" style={{ padding: '14px 24px', fontSize: 15 }}>
              <Clock size={16} /> Book a 30-min Call
            </Link>
            <Link href="/case-studies" className="btn btn-ghost" style={{ padding: '14px 24px', fontSize: 15 }}>
              View Our Work <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
