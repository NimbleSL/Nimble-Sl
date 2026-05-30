import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CheckCircle, Clock, GitBranch, Lock, MessageCircle, Shield, ArrowRight, ChevronRight } from 'lucide-react';
import { skills, type ISkill } from '@/lib/data/skills';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  return skills.map((skill) => ({
    slug: skill.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const skill = skills.find((s) => s.slug === params.slug);

  if (!skill) {
    return {
      title: 'Skill Not Found — NimbleSL',
    };
  }

  const title = `Hire ${skill.name} Developers`;
  const description = `${skill.description} Expert ${skill.name} developers from Bangladesh. ${skill.projectCount}+ projects delivered.`;

  return {
    title: `${title} | $${skill.rateRange.low}–$${skill.rateRange.high}/hr — NimbleSL`,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: `/api/og?title=${encodeURIComponent(title)}&category=Hire%20Developers` }]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [{ url: `/api/og?title=${encodeURIComponent(title)}&category=Hire%20Developers` }]
    }
  };
}

export default function SkillPage({ params }: { params: { slug: string } }) {
  const skill = skills.find((s) => s.slug === params.slug);

  if (!skill) {
    notFound();
  }

  return (
    <main className="min-h-screen" style={{ background: 'var(--bg)' }}>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20">
        {/* Accent Gradient Background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(circle at top center, ${skill.accent}10 0%, transparent 70%)`,
          }}
        />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
              <Link href="/hire-developers" className="hover:text-cyan-400 transition-colors">
                Hire Developers
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white">{skill.name}</span>
            </div>

            {/* Category Tag */}
            <div className="mb-4">
              <span className={`tag tag-${skill.tagVariant}`}>{skill.category}</span>
            </div>

            {/* Title */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6" style={{ color: 'var(--text)' }}>
              Hire Dedicated {skill.name} Developers
            </h1>

            {/* Rate Range */}
            <div className="mb-6">
              <div className="inline-flex items-baseline gap-2">
                <span className="text-4xl font-bold" style={{ color: 'var(--text)' }}>
                  ${skill.rateRange.low}–${skill.rateRange.high}
                </span>
                <span className="text-xl" style={{ color: 'var(--text-3)' }}>/hr</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-xl mb-8 leading-relaxed" style={{ color: 'var(--text-2)' }}>
              {skill.description}
            </p>

            {/* Available Badge */}
            <div className="flex items-center gap-3 mb-8">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-sm font-medium text-emerald-400">Available for Engagement</span>
              </div>
            </div>

            {/* CTA */}
            <div>
              <Link href="/contact" className="btn btn-primary inline-flex items-center gap-2">
                Request {skill.name} Developers
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Row */}
      <section className="py-16" style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="card text-center">
              <div className="text-4xl font-bold mb-2" style={{ color: skill.accent }}>
                {skill.projectCount}+
              </div>
              <div className="text-sm" style={{ color: 'var(--text-3)' }}>Projects Delivered</div>
            </div>

            <div className="card text-center">
              <div className="text-4xl font-bold mb-2" style={{ color: 'var(--text)' }}>{skill.experience}</div>
              <div className="text-sm" style={{ color: 'var(--text-3)' }}>Level</div>
            </div>

            <div className="card text-center">
              <div className="text-4xl font-bold mb-2" style={{ color: 'var(--cyan-2)' }}>48hrs</div>
              <div className="text-sm" style={{ color: 'var(--text-3)' }}>Onboarding Time</div>
            </div>

            <div className="card text-center">
              <div className="text-4xl font-bold mb-2" style={{ color: 'var(--emerald-2)' }}>Monthly</div>
              <div className="text-sm" style={{ color: 'var(--text-3)' }}>Flexible Contracts</div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <span className="eyebrow mb-4 inline-block">What You Get</span>
            <h2 className="text-4xl sm:text-5xl font-bold" style={{ color: 'var(--text)' }}>Enterprise-Grade Development</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Code Review & QA */}
            <div className="card">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: 'rgba(59,130,246,0.1)' }}>
                <CheckCircle className="w-6 h-6" style={{ color: 'var(--blue-2)' }} />
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--text)' }}>Code Review & QA</h3>
              <p className="text-sm" style={{ color: 'var(--text-2)' }}>Every PR reviewed by senior engineers before merge.</p>
            </div>

            {/* Daily Standup */}
            <div className="card">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: 'rgba(6,182,212,0.1)' }}>
                <Clock className="w-6 h-6" style={{ color: 'var(--cyan-2)' }} />
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--text)' }}>Daily Standup</h3>
              <p className="text-sm" style={{ color: 'var(--text-2)' }}>Scheduled in your timezone, async updates available.</p>
            </div>

            {/* Git Workflow */}
            <div className="card">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: 'rgba(16,185,129,0.1)' }}>
                <GitBranch className="w-6 h-6" style={{ color: 'var(--emerald-2)' }} />
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--text)' }}>Git Workflow</h3>
              <p className="text-sm" style={{ color: 'var(--text-2)' }}>GitHub/GitLab integration with branch protection.</p>
            </div>

            {/* IP Assignment */}
            <div className="card">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: 'rgba(168,85,247,0.1)' }}>
                <Shield className="w-6 h-6" style={{ color: 'var(--purple-2)' }} />
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--text)' }}>IP Assignment</h3>
              <p className="text-sm" style={{ color: 'var(--text-2)' }}>Full code ownership transferred to you, legally binding.</p>
            </div>

            {/* NDA Signed */}
            <div className="card">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: 'rgba(244,63,94,0.1)' }}>
                <Lock className="w-6 h-6" style={{ color: 'var(--rose-2)' }} />
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--text)' }}>NDA Signed</h3>
              <p className="text-sm" style={{ color: 'var(--text-2)' }}>Confidentiality agreement executed before day 1.</p>
            </div>

            {/* Direct Slack Access */}
            <div className="card">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: 'rgba(245,158,11,0.1)' }}>
                <MessageCircle className="w-6 h-6" style={{ color: 'var(--amber-2)' }} />
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--text)' }}>Direct Slack Access</h3>
              <p className="text-sm" style={{ color: 'var(--text-2)' }}>No middleman, communicate directly with your dev.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects Section */}
      {skill.relatedProjects.length > 0 && (
        <section className="py-24" style={{ borderTop: '1px solid var(--border)' }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <span className="eyebrow mb-4 inline-block">Portfolio</span>
              <h2 className="text-4xl sm:text-5xl font-bold" style={{ color: 'var(--text)' }}>
                {skill.name} Projects We've Delivered
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {skill.relatedProjects.slice(0, 3).map((project) => (
                <Link
                  key={project}
                  href={`/work/${project}`}
                  className="card group hover:scale-[1.02] transition-transform duration-300"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold capitalize" style={{ color: 'var(--text)' }}>
                      {project.replace('-', ' ')}
                    </h3>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-all" style={{ color: 'var(--text-3)' }} />
                  </div>
                  <div className="mt-2">
                    <span className={`tag tag-${skill.tagVariant}`}>{skill.name}</span>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center">
              <Link href="/work" className="btn btn-ghost inline-flex items-center gap-2">
                View All Projects
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {skill.relatedProjects.length === 0 && (
        <section className="py-24" style={{ borderTop: '1px solid var(--border)' }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--text)' }}>
                See Our Work
              </h2>
              <p className="mb-6" style={{ color: 'var(--text-2)' }}>
                Check out our complete portfolio of delivered projects.
              </p>
              <Link href="/work" className="btn btn-primary inline-flex items-center gap-2">
                View Portfolio
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Hiring Process Section */}
      <section className="py-24" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <span className="eyebrow mb-4 inline-block">Process</span>
            <h2 className="text-4xl sm:text-5xl font-bold" style={{ color: 'var(--text)' }}>How Hiring Works</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div className="card">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-xl font-bold text-white" style={{ background: 'linear-gradient(135deg, var(--blue), var(--cyan))' }}>
                1
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--text)' }}>Send Requirements</h3>
              <p className="text-sm" style={{ color: 'var(--text-2)' }}>
                Tell us your tech stack, timeline, and team needs via our contact form.
              </p>
            </div>

            {/* Step 2 */}
            <div className="card">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-xl font-bold text-white" style={{ background: 'linear-gradient(135deg, var(--cyan), var(--emerald))' }}>
                2
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--text)' }}>Meet Candidates</h3>
              <p className="text-sm" style={{ color: 'var(--text-2)' }}>
                We send 2-3 vetted developer profiles within 24 hours for your review.
              </p>
            </div>

            {/* Step 3 */}
            <div className="card">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-xl font-bold text-white" style={{ background: 'linear-gradient(135deg, var(--emerald), var(--purple))' }}>
                3
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--text)' }}>Trial Week</h3>
              <p className="text-sm" style={{ color: 'var(--text-2)' }}>
                Start with a paid 1-week trial to validate fit and quality.
              </p>
            </div>

            {/* Step 4 */}
            <div className="card">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-xl font-bold text-white" style={{ background: 'linear-gradient(135deg, var(--purple), var(--rose))' }}>
                4
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--text)' }}>Full Engagement</h3>
              <p className="text-sm" style={{ color: 'var(--text-2)' }}>
                Scale to full-time or part-time with flexible monthly contracts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-24" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <span className="eyebrow mb-4 inline-block">Pricing</span>
            <h2 className="text-4xl sm:text-5xl font-bold" style={{ color: 'var(--text)' }}>
              Transparent {skill.name} Developer Rates
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Junior */}
            <div className="card hover:scale-[1.02] transition-transform duration-300">
              <div className="mb-6">
                <div className="text-sm mb-2" style={{ color: 'var(--text-3)' }}>Junior</div>
                <div className="text-4xl font-bold mb-1" style={{ color: 'var(--text)' }}>
                  $12–$18
                  <span className="text-base font-normal" style={{ color: 'var(--text-3)' }}>/hr</span>
                </div>
                <div className="text-sm" style={{ color: 'var(--text-3)' }}>1-2 years experience</div>
              </div>
              <p className="mb-6 text-sm leading-relaxed" style={{ color: 'var(--text-2)' }}>
                Good for straightforward tasks, bug fixes, and feature implementation under supervision.
              </p>
              <div className="pt-6" style={{ borderTop: '1px solid var(--border)' }}>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-2)' }}>
                    <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--blue-2)' }} />
                    <span>Code reviews included</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-2)' }}>
                    <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--blue-2)' }} />
                    <span>Git workflow setup</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-2)' }}>
                    <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--blue-2)' }} />
                    <span>Daily communication</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Mid-Level - Highlighted */}
            <div className="card relative border-2 hover:scale-[1.02] transition-transform duration-300" style={{ borderColor: skill.accent }}>
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <div className="px-4 py-1 rounded-full text-xs font-semibold text-white" style={{ backgroundColor: skill.accent }}>
                  Most Popular
                </div>
              </div>
              <div className="mb-6">
                <div className="text-sm mb-2" style={{ color: 'var(--text-3)' }}>Mid-Level</div>
                <div className="text-4xl font-bold mb-1" style={{ color: 'var(--text)' }}>
                  $18–$30
                  <span className="text-base font-normal" style={{ color: 'var(--text-3)' }}>/hr</span>
                </div>
                <div className="text-sm" style={{ color: 'var(--text-3)' }}>3-5 years experience</div>
              </div>
              <p className="mb-6 text-sm leading-relaxed" style={{ color: 'var(--text-2)' }}>
                Ideal for most projects. Independent execution, good architecture decisions, minimal supervision.
              </p>
              <div className="pt-6" style={{ borderTop: '1px solid var(--border)' }}>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-2)' }}>
                    <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: skill.accent }} />
                    <span>All Junior features</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-2)' }}>
                    <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: skill.accent }} />
                    <span>Architecture decisions</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-2)' }}>
                    <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: skill.accent }} />
                    <span>Independent execution</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-2)' }}>
                    <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: skill.accent }} />
                    <span>Mentor junior devs</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Senior */}
            <div className="card hover:scale-[1.02] transition-transform duration-300">
              <div className="mb-6">
                <div className="text-sm mb-2" style={{ color: 'var(--text-3)' }}>Senior</div>
                <div className="text-4xl font-bold mb-1" style={{ color: 'var(--text)' }}>
                  $30–$45
                  <span className="text-base font-normal" style={{ color: 'var(--text-3)' }}>/hr</span>
                </div>
                <div className="text-sm" style={{ color: 'var(--text-3)' }}>5+ years experience</div>
              </div>
              <p className="mb-6 text-sm leading-relaxed" style={{ color: 'var(--text-2)' }}>
                Tech lead level. System architecture, performance optimization, team leadership, complex problem solving.
              </p>
              <div className="pt-6" style={{ borderTop: '1px solid var(--border)' }}>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-2)' }}>
                    <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--emerald-2)' }} />
                    <span>All Mid-Level features</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-2)' }}>
                    <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--emerald-2)' }} />
                    <span>System architecture</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-2)' }}>
                    <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--emerald-2)' }} />
                    <span>Tech lead capabilities</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-2)' }}>
                    <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--emerald-2)' }} />
                    <span>Performance optimization</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4" style={{ color: 'var(--text)' }}>
              Ready to hire a {skill.name} developer?
            </h2>
            <p className="text-xl mb-8" style={{ color: 'var(--text-2)' }}>
              Get matched with the perfect {skill.name} specialist in 24 hours.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="btn btn-primary inline-flex items-center gap-2">
                Send Hiring Request
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/hire-developers" className="btn btn-ghost">
                See All Skills
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
