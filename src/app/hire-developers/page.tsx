import type { Metadata } from 'next';
import Link from 'next/link';
import { skills } from '@/lib/data/skills';

export const metadata: Metadata = {
  title: 'Hire Dedicated Developers | React, Angular, Flutter, Node, Python, AI/ML — NimbleSL',
  description:
    'Hire pre-vetted senior developers from Bangladesh. Start in 48 hours. From $22/hr. Dedicated, part-time, or project-based engagements.',
  keywords: [
    'hire developers bangladesh',
    'staff augmentation',
    'offshore developers',
    'react developers for hire',
    'flutter developers',
    'AI ML engineers',
  ],
};

const ENGAGEMENT_MODELS = [
  {
    title: 'Dedicated',
    desc: 'Full-time, 40hr/wk, your direct report. Min 3-month engagement.',
    price: 'from $3,500/mo',
  },
  {
    title: 'Part-time',
    desc: 'Half-time, 20hr/wk. Same engineer, flexible cadence.',
    price: 'from $1,800/mo',
  },
  {
    title: 'Project-based',
    desc: 'Fixed-scope sprint or team. Outcome-priced, not hourly.',
    price: 'from $5,000/sprint',
  },
];

const DEVELOPER_PROFILES = [
  {
    id: 'DEV-0142',
    role: 'Senior Full-Stack Engineer',
    stack: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
    yrs: 7,
    rate: '$32/hr',
    tz: 'GMT +6',
    avail: 'now',
    initials: 'AR',
    accent: '#3B82F6',
  },
  {
    id: 'DEV-0287',
    role: 'ML Engineer',
    stack: ['PyTorch', 'LangChain', 'Claude API', 'FastAPI'],
    yrs: 5,
    rate: '$42/hr',
    tz: 'GMT +6',
    avail: 'in 2 wk',
    initials: 'MK',
    accent: '#A855F7',
  },
  {
    id: 'DEV-0356',
    role: 'Mobile Engineer (Flutter)',
    stack: ['Flutter', 'Dart', 'Firebase', 'gRPC'],
    yrs: 6,
    rate: '$28/hr',
    tz: 'GMT +6',
    avail: 'now',
    initials: 'TH',
    accent: '#06B6D4',
  },
  {
    id: 'DEV-0411',
    role: 'DevOps & Infrastructure',
    stack: ['Terraform', 'AWS', 'Kubernetes', 'Cloudflare'],
    yrs: 8,
    rate: '$36/hr',
    tz: 'GMT +6',
    avail: 'now',
    initials: 'NS',
    accent: '#10B981',
  },
];

const TIMEZONES = [
  { label: 'Dhaka (NimbleSL)', work: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12], color: '#3B82F6' },
  { label: 'London (UK)', work: [9, 10, 11, 12, 13, 14, 15, 16, 17], color: '#10B981' },
  { label: 'New York (US-East)', work: [14, 15, 16, 17, 18, 19, 20, 21, 22], color: '#F59E0B' },
  { label: 'San Francisco', work: [17, 18, 19, 20, 21, 22, 23, 0, 1], color: '#A855F7' },
];

function Avatar({ initials, accent, size = 48 }: { initials: string; accent: string; size?: number }) {
  return (
    <div style={{
      width: size, height: size, borderRadius: '50%', flexShrink: 0,
      background: `linear-gradient(135deg, ${accent}, ${accent}88)`,
      display: 'grid', placeItems: 'center',
      color: 'white', fontWeight: 700,
      fontSize: size * 0.38,
      fontFamily: 'var(--font-sans)',
      border: '2px solid var(--surface)',
    }}>{initials}</div>
  );
}

export default function HireDevelopersPage() {
  return (
    <main className="min-h-screen" style={{ background: 'var(--bg)' }}>

      {/* ── Hero ───────────────────────────────────────────────────────── */}
      <section style={{ padding: '64px 0 48px', position: 'relative', overflow: 'hidden', paddingTop: 140 }}>
        <div className="mesh-bg" />
        <div className="container" style={{ position: 'relative' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 56, alignItems: 'center' }}>

            {/* Left */}
            <div>
              <div className="eyebrow" style={{ marginBottom: 20 }}>
                <span className="ev-dot" />
                Staff augmentation
              </div>
              <h1 style={{
                fontSize: 'clamp(40px, 5vw, 60px)',
                fontFamily: 'var(--font-sans)',
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                color: 'var(--text)',
              }}>
                Hire pre-vetted developers.<br />
                <span className="grad-blue">Start in 48 hours.</span>
              </h1>
              <p style={{ marginTop: 20, fontSize: 18, color: 'var(--text-2)', maxWidth: 520, lineHeight: 1.65 }}>
                Scale your engineering team with senior developers we've already trained and shipped with.
                Dedicated, part-time, or project-based. From $22/hr.
              </p>

              <div style={{ marginTop: 28, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <Link href="/contact" className="btn btn-emerald" style={{ padding: '14px 22px' }}>
                  Book a 15-min screening
                </Link>
                <Link href="/contact?subject=rate-card" className="btn btn-ghost" style={{ padding: '14px 22px' }}>
                  Download rate card
                </Link>
              </div>

              {/* Stats */}
              <div style={{ marginTop: 36, display: 'flex', gap: 36, flexWrap: 'wrap' }}>
                {[
                  { val: '48hr', label: 'Avg time-to-start', color: 'var(--blue-2)' },
                  { val: '4–8hr', label: 'Overlap with EU / US-East', color: 'var(--emerald-2)' },
                  { val: '5+yr', label: 'Avg seniority', color: '#FCD34D' },
                ].map((s) => (
                  <div key={s.label}>
                    <div style={{
                      fontSize: 28, fontWeight: 800,
                      fontFamily: 'var(--font-sans)',
                      color: s.color,
                      letterSpacing: '-0.02em',
                      lineHeight: 1,
                    }}>{s.val}</div>
                    <div style={{ fontSize: 12, color: 'var(--text-3)', marginTop: 6 }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Engagement models card */}
            <div className="card" style={{ padding: 28 }}>
              <div
                className="font-mono"
                style={{ fontSize: 10, color: 'var(--text-3)', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.1em' }}
              >
                Engagement Models
              </div>
              {ENGAGEMENT_MODELS.map((m, i) => (
                <div
                  key={m.title}
                  style={{
                    padding: '16px 0',
                    borderBottom: i < ENGAGEMENT_MODELS.length - 1 ? '1px solid var(--border)' : 'none',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <div style={{ fontWeight: 700, fontSize: 16, color: 'var(--text)' }}>{m.title}</div>
                    <div className="font-mono" style={{ color: 'var(--emerald-2)', fontWeight: 600, fontSize: 13 }}>{m.price}</div>
                  </div>
                  <div style={{ fontSize: 13, color: 'var(--text-2)', marginTop: 6, lineHeight: 1.5 }}>{m.desc}</div>
                </div>
              ))}
              <Link href="/contact" className="btn btn-primary" style={{ width: '100%', marginTop: 16, justifyContent: 'center' }}>
                Compare models →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Skills grid ────────────────────────────────────────────────── */}
      <section style={{ padding: '80px 0', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ marginBottom: 12 }}>
            <div className="eyebrow" style={{ display: 'inline-flex', marginBottom: 16 }}>
              <span className="ev-dot" /> Skills available
            </div>
            <h2 style={{ fontSize: 36, fontWeight: 700, color: 'var(--text)', fontFamily: 'var(--font-sans)' }}>
              Match by skill, seniority, or stack.
            </h2>
            <p style={{ marginTop: 10, fontSize: 16, color: 'var(--text-2)' }}>
              Browse our engineers by skill or technology stack. Contact us to match the right team for your project.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginTop: 40 }}>
            {skills.map((s) => (
              <div key={s.slug} className="card" style={{ padding: 24 }}>
                {/* Icon + name */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: 10,
                    background: `${s.accent}22`,
                    border: `1px solid ${s.accent}55`,
                    display: 'grid', placeItems: 'center',
                    color: s.accent,
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 700, fontSize: 14,
                  }}>
                    {s.name.slice(0, 2)}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 15, color: 'var(--text)' }}>{s.name}</div>
                    <div className="font-mono" style={{ fontSize: 11, color: 'var(--text-3)', marginTop: 3 }}>
                      {s.projectCount} engineers
                    </div>
                  </div>
                </div>

                {/* Category tag */}
                <div style={{
                  marginTop: 18, paddingTop: 14, borderTop: '1px solid var(--border)',
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                }}>
                  <span className="tag" style={{ background: `${s.accent}18`, color: s.accent, borderColor: `${s.accent}44`, fontSize: 10 }}>
                    {s.category}
                  </span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                    <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--emerald)', display: 'inline-block', boxShadow: '0 0 6px var(--emerald)' }} />
                    <span className="font-mono" style={{ fontSize: 10, color: 'var(--text-3)' }}>Available</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ───────────────────────────────────────────────── */}
      <section style={{ padding: '80px 0', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div className="eyebrow" style={{ display: 'inline-flex', marginBottom: 16 }}>
              <span className="ev-dot" /> How it works
            </div>
            <h2 style={{ fontSize: 36, fontWeight: 700, color: 'var(--text)', fontFamily: 'var(--font-sans)' }}>
              From first call to <span className="grad-blue">first commit</span> in days.
            </h2>
            <p style={{ marginTop: 10, fontSize: 16, color: 'var(--text-2)', maxWidth: 520, margin: '10px auto 0' }}>
              A simple, transparent process — no recruiters, no middlemen, no surprises.
            </p>
          </div>

          {/* Steps */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0, position: 'relative' }}>
            {/* Connector line */}
            <div style={{
              position: 'absolute', top: 28, left: '16.66%', right: '16.66%',
              height: 1, background: 'var(--border)', zIndex: 0,
            }} />

            {[
              {
                step: '01',
                title: 'First contact',
                color: '#3B82F6',
                badge: 'Day 1',
                desc: 'Book a free 15-min discovery call. Tell us your stack, timeline, and team gaps. No recruiters, no forms — just a straight conversation.',
                details: [
                  'Describe your project & requirements',
                  'We confirm candidate match criteria',
                  'NDA signed same day if needed',
                ],
              },
              {
                step: '02',
                title: 'Onboarding',
                color: '#A855F7',
                badge: 'Day 2–3',
                desc: 'Review anonymized profiles and run a 30-min technical screen. Choose your engineer. We handle contracts, tooling access, and a structured first-week handover.',
                details: [
                  'Review 2–3 matched profiles',
                  '30-min technical interview',
                  'Contracts & access ready in 48 hrs',
                ],
              },
              {
                step: '03',
                title: 'Ongoing support',
                color: '#10B981',
                badge: 'Ongoing',
                desc: 'A dedicated account manager keeps things running. Weekly async updates, open Slack channel, and monthly check-ins to make sure the engagement stays on track.',
                details: [
                  'Dedicated account manager',
                  'Weekly async progress updates',
                  'Swap or scale your team anytime',
                ],
              },
            ].map((s) => (
              <div key={s.step} style={{ padding: '0 28px', position: 'relative' }}>
                {/* Step number circle */}
                <div style={{
                  width: 56, height: 56, borderRadius: '50%',
                  background: `${s.color}18`,
                  border: `2px solid ${s.color}55`,
                  display: 'grid', placeItems: 'center',
                  marginBottom: 24, position: 'relative', zIndex: 1,
                }}>
                  <span className="font-mono" style={{ fontSize: 15, fontWeight: 800, color: s.color }}>
                    {s.step}
                  </span>
                </div>

                {/* Badge */}
                <div style={{ marginBottom: 10 }}>
                  <span className="tag" style={{ background: `${s.color}18`, color: s.color, borderColor: `${s.color}44`, fontSize: 10 }}>
                    {s.badge}
                  </span>
                </div>

                <h3 style={{ fontSize: 20, fontWeight: 700, color: 'var(--text)', fontFamily: 'var(--font-sans)', marginBottom: 10 }}>
                  {s.title}
                </h3>
                <p style={{ fontSize: 14, color: 'var(--text-2)', lineHeight: 1.65, marginBottom: 20 }}>
                  {s.desc}
                </p>

                {/* Checklist */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {s.details.map((d) => (
                    <div key={d} style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                      <span style={{ color: s.color, fontSize: 12, marginTop: 1, flexShrink: 0 }}>✓</span>
                      <span style={{ fontSize: 13, color: 'var(--text-2)', lineHeight: 1.5 }}>{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA under process */}
          <div style={{
            marginTop: 56, padding: '28px 32px',
            background: 'rgba(59,130,246,0.06)',
            border: '1px solid rgba(59,130,246,0.2)',
            borderRadius: 14,
            display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap',
          }}>
            <div>
              <div style={{ fontWeight: 700, fontSize: 18, color: 'var(--text)' }}>Ready to start?</div>
              <div style={{ fontSize: 14, color: 'var(--text-2)', marginTop: 4 }}>
                It takes less than 15 minutes to scope your requirement and get candidate names.
              </div>
            </div>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', flexShrink: 0 }}>
              <Link href="/contact?subject=screening" className="btn btn-emerald" style={{ padding: '12px 20px' }}>
                Book discovery call
              </Link>
              <Link href="/contact" className="btn btn-ghost" style={{ padding: '12px 20px' }}>
                Ask a question
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Developer profiles ─────────────────────────────────────────── */}
      <section style={{ padding: '0 0 80px' }}>
        <div className="container">
          <div style={{ marginBottom: 40 }}>
            <div className="eyebrow" style={{ display: 'inline-flex', marginBottom: 16 }}>
              <span className="ev-dot" /> Available now
            </div>
            <h2 style={{ fontSize: 36, fontWeight: 700, color: 'var(--text)', fontFamily: 'var(--font-sans)' }}>
              Anonymized profiles. Real engineers.
            </h2>
            <p style={{ marginTop: 10, fontSize: 16, color: 'var(--text-2)', maxWidth: 640 }}>
              Names redacted until contracts — everything else is real. Interview them on a 30-min screening call.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {DEVELOPER_PROFILES.map((d) => (
              <div key={d.id} className="card card-hover" style={{ padding: 28 }}>
                <div style={{ display: 'flex', alignItems: 'start', gap: 16 }}>
                  <Avatar initials={d.initials} accent={d.accent} size={56} />

                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', gap: 8 }}>
                      <div>
                        <div className="font-mono" style={{ fontSize: 11, color: 'var(--text-3)' }}>{d.id}</div>
                        <h4 style={{ fontSize: 18, fontWeight: 700, marginTop: 3, color: 'var(--text)', fontFamily: 'var(--font-sans)' }}>
                          {d.role}
                        </h4>
                      </div>
                      <span
                        className="tag tag-emerald"
                        style={{ fontSize: 10, flexShrink: 0 }}
                      >
                        {d.avail === 'now' ? '● Available now' : `Available ${d.avail}`}
                      </span>
                    </div>

                    {/* Stack tags */}
                    <div style={{ display: 'flex', gap: 6, marginTop: 12, flexWrap: 'wrap' }}>
                      {d.stack.map((tech) => (
                        <span key={tech} className="tag" style={{ fontSize: 10 }}>{tech}</span>
                      ))}
                    </div>

                    {/* Stats */}
                    <div style={{
                      display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12,
                      marginTop: 16, paddingTop: 16, borderTop: '1px solid var(--border)',
                    }}>
                      {[
                        { label: 'YRS EXP', val: `${d.yrs}+`, color: 'var(--text)' },
                        { label: 'TIMEZONE', val: d.tz, color: 'var(--text)' },
                      ].map((stat) => (
                        <div key={stat.label}>
                          <div className="font-mono" style={{ fontSize: 10, color: 'var(--text-3)', textTransform: 'uppercase' }}>
                            {stat.label}
                          </div>
                          <div className="font-mono" style={{ fontWeight: 700, marginTop: 3, fontSize: 13, color: stat.color }}>
                            {stat.val}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <Link
                  href="/contact?subject=screening"
                  className="btn btn-ghost"
                  style={{ width: '100%', marginTop: 16, justifyContent: 'center' }}
                >
                  Book a screening call →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timezone overlap ───────────────────────────────────────────── */}
      <section style={{ padding: '0 0 80px' }}>
        <div className="container">
          <div className="card" style={{ padding: 40 }}>
            <div style={{ marginBottom: 36 }}>
              <div className="eyebrow" style={{ display: 'inline-flex', marginBottom: 16 }}>
                <span className="ev-dot" /> Timezone overlap
              </div>
              <h2 style={{ fontSize: 28, fontWeight: 700, color: 'var(--text)', fontFamily: 'var(--font-sans)' }}>
                Your morning is our afternoon.
              </h2>
              <p style={{ marginTop: 8, fontSize: 15, color: 'var(--text-2)', maxWidth: 560 }}>
                GMT+6 (Dhaka) gives 4–6 hr overlap with EU and 2–4 hr with US-East.
                Most clients schedule daily standups 8–9 AM EST.
              </p>
            </div>

            {/* UTC header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 0, marginBottom: 10 }}>
              <div style={{ width: 168, fontSize: 12, color: 'var(--text-3)' }}>UTC hour →</div>
              <div style={{ flex: 1, display: 'grid', gridTemplateColumns: 'repeat(24, 1fr)', gap: 2 }}>
                {Array.from({ length: 24 }).map((_, h) => (
                  <div key={h} className="font-mono" style={{ fontSize: 9, textAlign: 'center', color: 'var(--text-3)' }}>{h}</div>
                ))}
              </div>
            </div>

            {/* Timezone rows */}
            {TIMEZONES.map((tz) => (
              <div key={tz.label} style={{ display: 'flex', alignItems: 'center', gap: 0, marginBottom: 6 }}>
                <div style={{ width: 168, fontSize: 13, color: 'var(--text)', fontWeight: 500, paddingRight: 8 }}>
                  {tz.label}
                </div>
                <div style={{ flex: 1, display: 'grid', gridTemplateColumns: 'repeat(24, 1fr)', gap: 2 }}>
                  {Array.from({ length: 24 }).map((_, h) => (
                    <div
                      key={h}
                      style={{
                        height: 22,
                        background: tz.work.includes(h) ? tz.color : 'var(--surface-2)',
                        borderRadius: 3,
                        opacity: tz.work.includes(h) ? 0.82 : 0.35,
                        transition: 'opacity 0.15s',
                      }}
                    />
                  ))}
                </div>
              </div>
            ))}

            {/* Sweet spot callout */}
            <div style={{
              marginTop: 20, padding: '12px 16px',
              background: 'rgba(16,185,129,0.08)',
              border: '1px solid rgba(16,185,129,0.3)',
              borderRadius: 10,
              display: 'flex', alignItems: 'center', gap: 10,
            }}>
              <span style={{ color: 'var(--emerald-2)', fontSize: 14 }}>✓</span>
              <div>
                <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--text)' }}>
                  Sweet spot for sync calls: 14:00–18:00 UTC
                </div>
                <div style={{ fontSize: 12, color: 'var(--text-2)', marginTop: 3 }}>
                  That's 8:00–12:00 PT · 11:00–15:00 ET · 14:00–18:00 GMT · 20:00–24:00 Dhaka.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────────────── */}
      <section style={{ padding: '0 0 96px' }}>
        <div className="container">
          <div
            className="card"
            style={{
              padding: 56, textAlign: 'center',
              background: 'linear-gradient(135deg, rgba(59,130,246,0.12), rgba(16,185,129,0.06))',
              borderColor: 'rgba(59,130,246,0.3)',
            }}
          >
            <h2 style={{ fontSize: 40, fontWeight: 800, color: 'var(--text)', fontFamily: 'var(--font-sans)', letterSpacing: '-0.02em' }}>
              Need a developer this week?
            </h2>
            <p style={{ marginTop: 12, fontSize: 17, color: 'var(--text-2)', maxWidth: 480, margin: '12px auto 0' }}>
              Book a 15-min screening — describe what you need, we&apos;ll line up two candidates within 24 hours.
            </p>
            <div style={{ marginTop: 28, display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact?subject=screening" className="btn btn-emerald" style={{ padding: '14px 24px' }}>
                Book screening
              </Link>
              <Link href="/contact" className="btn btn-primary" style={{ padding: '14px 24px' }}>
                Email the team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
