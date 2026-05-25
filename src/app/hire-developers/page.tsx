import Link from 'next/link';
import { Calendar, Users, Shield, Zap, RefreshCw, MessageSquare, Plus, Target } from 'lucide-react';
import { skills } from '@/lib/data/skills';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hire Dedicated Developers | React, Angular, Flutter, .NET, Python — NimbleSL',
  description: 'Hire battle-tested developers from Bangladesh. $12–$45/hr, Silicon Valley quality. Angular, Flutter, .NET, React, Python, AI/ML specialists.',
};

export default function HireDevelopersPage() {
  return (
    <main className="min-h-screen bg-[#0A0E1A]">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="mesh-bg" />
        <div className="grid-bg" />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            {/* Eyebrow */}
            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="eyebrow">
                <Calendar className="w-4 h-4" />
                Hire Developers
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Silicon Valley Talent.
              <br />
              <span className="grad-blue">Bangladesh Pricing.</span>
            </h1>

            {/* Subtext */}
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Hire dedicated developers from our vetted team. Fully managed, IP-protected,
              timezone-flexible. Start in 48 hours.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap items-center justify-center gap-8 mb-10">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">48hr</div>
                <div className="text-sm text-gray-400">Start Time</div>
              </div>
              <div className="w-px h-12 bg-gray-700 hidden sm:block" />
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400">$12-$60/hr</div>
                <div className="text-sm text-gray-400">Rate Range</div>
              </div>
              <div className="w-px h-12 bg-gray-700 hidden sm:block" />
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">50+</div>
                <div className="text-sm text-gray-400">Delivered Projects</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a href="#skills" className="btn btn-primary">
                View All Skills
              </a>
              <Link href="/contact" className="btn btn-ghost">
                Book a Free Call
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="py-16 border-y border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* IP Protected */}
            <div className="card flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-blue-400" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">IP Protected</h3>
                <p className="text-sm text-gray-400">Your code, your IP, always.</p>
              </div>
            </div>

            {/* 48-Hour Start */}
            <div className="card flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-cyan-400" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">48-Hour Start</h3>
                <p className="text-sm text-gray-400">Developer ready in 2 days.</p>
              </div>
            </div>

            {/* Flexible Engagement */}
            <div className="card flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                  <RefreshCw className="w-6 h-6 text-emerald-400" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">Flexible Engagement</h3>
                <p className="text-sm text-gray-400">Scale up/down monthly.</p>
              </div>
            </div>

            {/* Direct Access */}
            <div className="card flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-purple-400" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">Direct Access</h3>
                <p className="text-sm text-gray-400">Work directly with devs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Grid Section */}
      <section id="skills" className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="eyebrow mb-4 inline-block">Our Expertise</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white">Pick Your Stack</h2>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill) => (
              <div
                key={skill.slug}
                className="card group hover:scale-[1.02] transition-transform duration-300"
                style={{ borderTop: `3px solid ${skill.accent}` }}
              >
                {/* Icon Area */}
                <div className="mb-4">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl font-bold"
                    style={{
                      backgroundColor: `${skill.accent}15`,
                      color: skill.accent
                    }}
                  >
                    {skill.name.charAt(0)}
                  </div>
                </div>

                {/* Category Tag */}
                <div className="mb-3">
                  <span className={`tag tag-${skill.tagVariant}`}>{skill.category}</span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-3">{skill.name}</h3>

                {/* Description */}
                <p className="text-gray-400 mb-4 leading-relaxed">{skill.description}</p>

                {/* Projects Badge */}
                <div className="flex items-center gap-2 mb-4 text-sm text-gray-400">
                  <div className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>{skill.projectCount} projects delivered</span>
                </div>

                {/* Rate Range */}
                <div className="mb-6">
                  <div className="text-2xl font-bold text-white">
                    ${skill.rateRange.low}–${skill.rateRange.high}
                    <span className="text-base font-normal text-gray-400">/hr</span>
                  </div>
                </div>

                {/* CTA */}
                <Link
                  href={`/hire-developers/${skill.slug}`}
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold group-hover:gap-3 transition-all"
                >
                  Hire {skill.name} Developers
                  <span className="text-xl">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models Section */}
      <section className="py-24 border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="eyebrow mb-4 inline-block">Engagement Models</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white">How We Work With You</h2>
          </div>

          {/* Models Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Dedicated Team */}
            <div className="card">
              <div className="mb-6">
                <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4">
                  <Users className="w-7 h-7 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Dedicated Team</h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Exclusive developers for your project, 40hrs/week, fully integrated into your workflow.
                </p>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-300">
                  <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-blue-400" />
                  </div>
                  <span>Full-time commitment to your project</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-blue-400" />
                  </div>
                  <span>Direct communication via Slack/Teams</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-blue-400" />
                  </div>
                  <span>Monthly billing, flexible scaling</span>
                </li>
              </ul>
            </div>

            {/* Staff Augmentation */}
            <div className="card">
              <div className="mb-6">
                <div className="w-14 h-14 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-4">
                  <Plus className="w-7 h-7 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Staff Augmentation</h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Add developers to your existing team, works within your processes and tools.
                </p>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-300">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-emerald-400" />
                  </div>
                  <span>Seamlessly integrate with your team</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-emerald-400" />
                  </div>
                  <span>Use your project management tools</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-emerald-400" />
                  </div>
                  <span>Scale capacity on demand</span>
                </li>
              </ul>
            </div>

            {/* Project-Based */}
            <div className="card">
              <div className="mb-6">
                <div className="w-14 h-14 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-4">
                  <Target className="w-7 h-7 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Project-Based</h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Fixed scope, fixed price. Full team assembled for the deliverable.
                </p>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-300">
                  <div className="w-5 h-5 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-cyan-400" />
                  </div>
                  <span>Clear scope and timeline upfront</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <div className="w-5 h-5 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-cyan-400" />
                  </div>
                  <span>Predictable budget and delivery</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <div className="w-5 h-5 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-cyan-400" />
                  </div>
                  <span>Full team with PM included</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Ready to Build?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get matched with the right developer in 24 hours.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="btn btn-primary">
                Start Hiring
              </Link>
              <Link href="/tools/project-estimator" className="btn btn-ghost">
                Estimate Your Project
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
