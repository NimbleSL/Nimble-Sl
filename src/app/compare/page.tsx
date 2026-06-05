import type { Metadata } from 'next';
import Link from 'next/link';
import { Check, X, Shield, ArrowRight, Zap, Target, HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Compare Us | NimbleSL vs Agencies vs Freelancers',
  description: 'See how NimbleSL stacks up against freelancers, local onshore agencies, and off-the-shelf templates on cost, code standards, and overlaps.',
};

interface ComparisonRow {
  dimension: string;
  nimblesl: string;
  nimbleslChecked: boolean;
  freelancer: string;
  freelancerChecked: boolean;
  agency: string;
  agencyChecked: boolean;
  templates: string;
  templatesChecked: boolean;
}

const COMPARISON_ROWS: ComparisonRow[] = [
  {
    dimension: 'Average Hourly Rate',
    nimblesl: '$12 – $45 / hr. 100% of budget goes to engineering talent. Zero sales commission overheads.',
    nimbleslChecked: true,
    freelancer: '$15 – $40 / hr. Low upfront, but high hidden costs from code rewrites and QA delays.',
    freelancerChecked: false,
    agency: '$150 – $250 / hr. High agency overhead including sales commissions, managers, and real estate.',
    agencyChecked: false,
    templates: '$0 (initial). Re-writing styles, schema migrations, and custom logic raises final cost to $5K+.',
    templatesChecked: false,
  },
  {
    dimension: 'Engineering Pipeline',
    nimblesl: 'Next.js monorepos, Go/FastAPI. Trunk-based development, CI/CD automated gates, Playwright tests.',
    nimbleslChecked: true,
    freelancer: 'Untracked Git branches, direct production pushes, lack of lint rules or test code coverage.',
    freelancerChecked: false,
    agency: 'Standardized pipelines, but slow release velocity due to bureaucratic review layers.',
    agencyChecked: true,
    templates: 'Outdated libraries, legacy configurations, inline script injections, and dependency conflicts.',
    templatesChecked: false,
  },
  {
    dimension: 'Communications & Visibility',
    nimblesl: 'Shared Slack workspace, daily async updates (GMT+6), direct dev channels, weekly demo deployments.',
    nimbleslChecked: true,
    freelancer: 'Intermittent chat replies via WhatsApp/Upwork. Frequent timeline blocks and vanishing acts.',
    freelancerChecked: false,
    agency: 'Communication gated by account managers. Direct developer contact is restricted.',
    agencyChecked: false,
    templates: 'No collaboration channels or bug tracking support available.',
    templatesChecked: false,
  },
  {
    dimension: 'Security & Compliance',
    nimblesl: 'Sandbox staging environments, AES-256 database column encryption, JWT session keys, DPA & HIPAA BAA contracts.',
    nimbleslChecked: true,
    freelancer: 'Shared host nodes, plain-text credentials, clear-text API keys, and zero database encryption.',
    freelancerChecked: false,
    agency: 'Enterprise compliance setups, but subject to high specialized compliance integration surcharges ($10K+).',
    agencyChecked: true,
    templates: 'No database compliance setups. Vulnerable to SQL injection and XSS exposures.',
    templatesChecked: false,
  },
  {
    dimension: 'IP Rights & Code Assignment',
    nimblesl: '100% legal assignment of code, database schemas, and assets upon milestone settlement (governed in MSA).',
    nimbleslChecked: true,
    freelancer: 'No formal IP assignment frameworks. Logic is frequently duplicated across contracts.',
    freelancerChecked: false,
    agency: 'Professional IP transfers, but may require licensing fees on pre-existing agency assets.',
    agencyChecked: true,
    templates: 'Shared licensing constraints (MIT/GPL). Core framework assets cannot be patented or trademarked.',
    templatesChecked: false,
  },
  {
    dimension: 'Onboarding & Velocity',
    nimblesl: 'Paid 1-week pilot sprint. Cancel anytime, keep compiled work. Sprints initiate within 48 hours.',
    nimbleslChecked: true,
    freelancer: 'Scoping done on speculative timelines. Significant delay in setup cycles.',
    freelancerChecked: false,
    agency: '4–6 weeks of paid scoping workshops ($5K–$10K discovery) before writing production code.',
    agencyChecked: false,
    templates: 'Instant download but requires manual environment configurations, build tuning, and server mapping.',
    templatesChecked: false,
  },
  {
    dimension: 'SLA Maintenance & Warranty',
    nimblesl: 'SLA-backed retainers ($2,000/mo) with 4hr critical response. Includes 30-day post-launch warranty.',
    nimbleslChecked: true,
    freelancer: 'Ad-hoc bug fixing based on freelancer availability. No post-launch warranty.',
    freelancerChecked: false,
    agency: 'SLA support packages are comprehensive but start at $8,000/mo minimum retainer.',
    agencyChecked: true,
    templates: 'None. Maintenance and dependency security upgrades must be managed internally.',
    templatesChecked: false,
  },
];

export default function CompareUsPage() {
  return (
    <main className="min-h-screen" style={{ background: 'var(--bg)' }}>
      {/* ── Hero ───────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-36 pb-16" style={{ borderBottom: '1px solid var(--border)' }}>
        <div className="mesh-bg" style={{ opacity: 0.25 }} />
        <div className="container relative text-center">
          <span className="eyebrow mb-5 inline-flex">
            <span className="ev-dot" /> Objective Scopes
          </span>
          <h1
            className="mb-6 text-4xl font-bold tracking-tight font-display sm:text-5xl lg:text-6xl"
            style={{ color: 'var(--text)' }}
          >
            How We <span className="grad-blue">Stack Up</span>
          </h1>
          <p className="mx-auto max-w-3xl text-base sm:text-lg leading-relaxed" style={{ color: 'var(--text-2)' }}>
            Startups and enterprises need velocity, code reliability, and intellectual property safety.
            Compare NimbleSL with offshore contractors, onshore agencies, and off-the-shelf templates.
          </p>
        </div>
      </section>

      {/* ── Grid Cards Comparison (Mobile & Desktop friendly) ───────── */}
      <section className="py-20">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-3 mb-16">
            
            {/* Freelancer Card */}
            <div className="card p-6 flex flex-col justify-between">
              <div>
                <span className="tag mb-3">Option A</span>
                <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--text)' }}>Freelancers & Contractors</h3>
                <p className="text-xs sm:text-sm mb-4 leading-relaxed" style={{ color: 'var(--text-2)' }}>
                  Best for throwaway prototypes or basic styling tests. However, they carry substantial management overhead, unmonitored code hygiene, irregular timezone check-ins, and high risk of project abandonment.
                </p>
              </div>
              <div style={{ height: 1, background: 'var(--border)', margin: '12px 0' }} />
              <div className="text-xs font-mono" style={{ color: 'var(--rose-2)' }}>
                RISKS: Plagiarized libraries, fragile commits, zero compliance.
              </div>
            </div>

            {/* NimbleSL Card */}
            <div
              className="card p-6 flex flex-col justify-between"
              style={{
                borderColor: 'rgba(59, 130, 246, 0.35)',
                background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.05), transparent)',
              }}
            >
              <div>
                <span className="tag tag-blue mb-3">Managed Team (Recommended)</span>
                <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--text)' }}>NimbleSL</h3>
                <p className="text-xs sm:text-sm mb-4 leading-relaxed" style={{ color: 'var(--text-2)' }}>
                  Best for production-grade SaaS platforms, databases, and AI features. You get full-time engineering teams, certified PMs, trunk-based releases, and complete IP transfers, operating directly from our Gulshan-2, Dhaka workspace.
                </p>
              </div>
              <div style={{ height: 1, background: 'var(--border)', margin: '12px 0' }} />
              <div className="text-xs font-mono text-emerald-400" style={{ fontWeight: 600 }}>
                BENEFITS: Paid 1-week pilot, SLA coverage, direct Slack overlap.
              </div>
            </div>

            {/* US/UK Agency Card */}
            <div className="card p-6 flex flex-col justify-between">
              <div>
                <span className="tag mb-3">Option B</span>
                <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--text)' }}>Traditional Onshore Agencies</h3>
                <p className="text-xs sm:text-sm mb-4 leading-relaxed" style={{ color: 'var(--text-2)' }}>
                  Best for legacy conglomerates with large capital reserves. They offer solid structural standards, but charge extreme markups to support expensive physical offices, local account managers, and commission structures.
                </p>
              </div>
              <div style={{ height: 1, background: 'var(--border)', margin: '12px 0' }} />
              <div className="text-xs font-mono" style={{ color: 'var(--text-3)' }}>
                RISKS: Gated developers, slow onboarding, billing rates ($150-$250/hr).
              </div>
            </div>

          </div>

          {/* ── Visual Matrix Table (Mobile Collapsed, Desktop Row) ────── */}
          <div className="blog-table-wrapper">
            <div className="blog-table-swipe-hint" style={{ padding: '12px 16px', borderBottom: '1px solid var(--border)', background: 'var(--overlay-xs)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span className="font-mono text-xs" style={{ color: 'var(--text-3)', fontWeight: 600 }}>COMPARATIVE SCORECARD</span>
              <span className="font-mono text-xs text-blue-400" style={{ display: 'flex', alignItems: 'center', gap: 4 }}>Swipe horizontally to explore <span className="blink">→</span></span>
            </div>

            <div className="blog-table-container scrollbar-hide">
              <table className="blog-table">
                <thead>
                  <tr style={{ background: 'var(--surface-2)' }}>
                    <th>Comparison Factor</th>
                    <th>NimbleSL</th>
                    <th>Freelancers</th>
                    <th>Onshore Agencies</th>
                    <th>Templates</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON_ROWS.map((row, index) => (
                    <tr key={index}>
                      <td data-label="Comparison Factor" style={{ fontWeight: 600, color: 'var(--text)' }}>{row.dimension}</td>
                      
                      <td data-label="NimbleSL">
                        <div className="flex flex-col gap-1 items-start md:items-start">
                          <span className="flex items-center gap-1.5 text-emerald-400 font-semibold" style={{ fontSize: 13 }}>
                            <Check size={14} /> Yes
                          </span>
                          <span style={{ fontSize: 12 }}>{row.nimblesl}</span>
                        </div>
                      </td>

                      <td data-label="Freelancers">
                        <div className="flex flex-col gap-1 items-start md:items-start">
                          <span className={`flex items-center gap-1.5 font-semibold ${row.freelancerChecked ? 'text-emerald-400' : 'text-rose-400'}`} style={{ fontSize: 13 }}>
                            {row.freelancerChecked ? <Check size={14} /> : <X size={14} />}
                            {row.freelancerChecked ? 'Yes' : 'No'}
                          </span>
                          <span style={{ fontSize: 12 }}>{row.freelancer}</span>
                        </div>
                      </td>

                      <td data-label="Onshore Agencies">
                        <div className="flex flex-col gap-1 items-start md:items-start">
                          <span className={`flex items-center gap-1.5 font-semibold ${row.agencyChecked ? 'text-emerald-400' : 'text-rose-400'}`} style={{ fontSize: 13 }}>
                            {row.agencyChecked ? <Check size={14} /> : <X size={14} />}
                            {row.agencyChecked ? 'Yes' : 'No'}
                          </span>
                          <span style={{ fontSize: 12 }}>{row.agency}</span>
                        </div>
                      </td>

                      <td data-label="Templates">
                        <div className="flex flex-col gap-1 items-start md:items-start">
                          <span className={`flex items-center gap-1.5 font-semibold ${row.templatesChecked ? 'text-emerald-400' : 'text-rose-400'}`} style={{ fontSize: 13 }}>
                            {row.templatesChecked ? <Check size={14} /> : <X size={14} />}
                            {row.templatesChecked ? 'Yes' : 'No'}
                          </span>
                          <span style={{ fontSize: 12 }}>{row.templates}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ── Call to Action ───────────────────────────────────────────── */}
      <section className="relative py-24" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="grid-bg" style={{ opacity: 0.15 }} />
        <div className="container relative text-center">
          <div className="glass rounded-2xl mx-auto max-w-2xl p-8 sm:p-12" style={{ border: '1px solid var(--border-2)' }}>
            <h2 className="mb-4 text-2xl sm:text-3xl font-bold font-display" style={{ color: 'var(--text)' }}>
              Ready to verify our code quality?
            </h2>
            <p className="mb-8 text-sm sm:text-base leading-relaxed" style={{ color: 'var(--text-2)' }}>
              Start with a paid 1-week pilot sprint. Get full transparency, actual git commits,
              and daily slack progress reports. Cancel anytime if we don&apos;t meet expectations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn btn-primary">
                Book a Free Call <ArrowRight size={14} />
              </Link>
              <Link href="/tools/project-estimator" className="btn btn-ghost">
                Try Project Estimator
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
