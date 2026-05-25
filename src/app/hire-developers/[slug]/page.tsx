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

  return {
    title: `Hire ${skill.name} Developers | $${skill.rateRange.low}–$${skill.rateRange.high}/hr — NimbleSL`,
    description: `${skill.description} Expert ${skill.name} developers from Bangladesh. ${skill.projectCount}+ projects delivered.`,
  };
}

export default function SkillPage({ params }: { params: { slug: string } }) {
  const skill = skills.find((s) => s.slug === params.slug);

  if (!skill) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#0A0E1A]">
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
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
              Hire Dedicated {skill.name} Developers
            </h1>

            {/* Rate Range */}
            <div className="mb-6">
              <div className="inline-flex items-baseline gap-2">
                <span className="text-4xl font-bold text-white">
                  ${skill.rateRange.low}–${skill.rateRange.high}
                </span>
                <span className="text-xl text-gray-400">/hr</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
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
      <section className="py-16 border-y border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="card text-center">
              <div className="text-4xl font-bold mb-2" style={{ color: skill.accent }}>
                {skill.projectCount}+
              </div>
              <div className="text-sm text-gray-400">Projects Delivered</div>
            </div>

            <div className="card text-center">
              <div className="text-4xl font-bold text-white mb-2">{skill.experience}</div>
              <div className="text-sm text-gray-400">Level</div>
            </div>

            <div className="card text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">48hrs</div>
              <div className="text-sm text-gray-400">Onboarding Time</div>
            </div>

            <div className="card text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-2">Monthly</div>
              <div className="text-sm text-gray-400">Flexible Contracts</div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <span className="eyebrow mb-4 inline-block">What You Get</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white">Enterprise-Grade Development</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Code Review & QA */}
            <div className="card">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Code Review & QA</h3>
              <p className="text-gray-400 text-sm">Every PR reviewed by senior engineers before merge.</p>
            </div>

            {/* Daily Standup */}
            <div className="card">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Daily Standup</h3>
              <p className="text-gray-400 text-sm">Scheduled in your timezone, async updates available.</p>
            </div>

            {/* Git Workflow */}
            <div className="card">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-4">
                <GitBranch className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Git Workflow</h3>
              <p className="text-gray-400 text-sm">GitHub/GitLab integration with branch protection.</p>
            </div>

            {/* IP Assignment */}
            <div className="card">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">IP Assignment</h3>
              <p className="text-gray-400 text-sm">Full code ownership transferred to you, legally binding.</p>
            </div>

            {/* NDA Signed */}
            <div className="card">
              <div className="w-12 h-12 rounded-xl bg-rose-500/10 flex items-center justify-center mb-4">
                <Lock className="w-6 h-6 text-rose-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">NDA Signed</h3>
              <p className="text-gray-400 text-sm">Confidentiality agreement executed before day 1.</p>
            </div>

            {/* Direct Slack Access */}
            <div className="card">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center mb-4">
                <MessageCircle className="w-6 h-6 text-amber-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Direct Slack Access</h3>
              <p className="text-gray-400 text-sm">No middleman, communicate directly with your dev.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects Section */}
      {skill.relatedProjects.length > 0 && (
        <section className="py-24 border-t border-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <span className="eyebrow mb-4 inline-block">Portfolio</span>
              <h2 className="text-4xl sm:text-5xl font-bold text-white">
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
                    <h3 className="text-lg font-semibold text-white capitalize">
                      {project.replace('-', ' ')}
                    </h3>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
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
        <section className="py-24 border-t border-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                See Our Work
              </h2>
              <p className="text-gray-400 mb-6">
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
      <section className="py-24 border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <span className="eyebrow mb-4 inline-block">Process</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white">How Hiring Works</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div className="card">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-4 text-xl font-bold text-white">
                1
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Send Requirements</h3>
              <p className="text-gray-400 text-sm">
                Tell us your tech stack, timeline, and team needs via our contact form.
              </p>
            </div>

            {/* Step 2 */}
            <div className="card">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center mb-4 text-xl font-bold text-white">
                2
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Meet Candidates</h3>
              <p className="text-gray-400 text-sm">
                We send 2-3 vetted developer profiles within 24 hours for your review.
              </p>
            </div>

            {/* Step 3 */}
            <div className="card">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-purple-500 flex items-center justify-center mb-4 text-xl font-bold text-white">
                3
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Trial Week</h3>
              <p className="text-gray-400 text-sm">
                Start with a paid 1-week trial to validate fit and quality.
              </p>
            </div>

            {/* Step 4 */}
            <div className="card">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-rose-500 flex items-center justify-center mb-4 text-xl font-bold text-white">
                4
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Full Engagement</h3>
              <p className="text-gray-400 text-sm">
                Scale to full-time or part-time with flexible monthly contracts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-24 border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <span className="eyebrow mb-4 inline-block">Pricing</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white">
              Transparent {skill.name} Developer Rates
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Junior */}
            <div className="card hover:scale-[1.02] transition-transform duration-300">
              <div className="mb-6">
                <div className="text-sm text-gray-400 mb-2">Junior</div>
                <div className="text-4xl font-bold text-white mb-1">
                  $12–$18
                  <span className="text-base font-normal text-gray-400">/hr</span>
                </div>
                <div className="text-sm text-gray-400">1-2 years experience</div>
              </div>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                Good for straightforward tasks, bug fixes, and feature implementation under supervision.
              </p>
              <div className="pt-6 border-t border-gray-700">
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                    <span>Code reviews included</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                    <span>Git workflow setup</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
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
                <div className="text-sm text-gray-400 mb-2">Mid-Level</div>
                <div className="text-4xl font-bold text-white mb-1">
                  $18–$30
                  <span className="text-base font-normal text-gray-400">/hr</span>
                </div>
                <div className="text-sm text-gray-400">3-5 years experience</div>
              </div>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                Ideal for most projects. Independent execution, good architecture decisions, minimal supervision.
              </p>
              <div className="pt-6 border-t border-gray-700">
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: skill.accent }} />
                    <span>All Junior features</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: skill.accent }} />
                    <span>Architecture decisions</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: skill.accent }} />
                    <span>Independent execution</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: skill.accent }} />
                    <span>Mentor junior devs</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Senior */}
            <div className="card hover:scale-[1.02] transition-transform duration-300">
              <div className="mb-6">
                <div className="text-sm text-gray-400 mb-2">Senior</div>
                <div className="text-4xl font-bold text-white mb-1">
                  $30–$45
                  <span className="text-base font-normal text-gray-400">/hr</span>
                </div>
                <div className="text-sm text-gray-400">5+ years experience</div>
              </div>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                Tech lead level. System architecture, performance optimization, team leadership, complex problem solving.
              </p>
              <div className="pt-6 border-t border-gray-700">
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>All Mid-Level features</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>System architecture</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Tech lead capabilities</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Performance optimization</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Ready to hire a {skill.name} developer?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
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
