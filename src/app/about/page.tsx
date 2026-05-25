import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, Shield, Clock, Globe } from 'lucide-react';

export const metadata: Metadata = {
  title: "About NimbleSL | Bangladesh's Premier Software Development Company",
  description:
    'NimbleSL — 50+ projects, 35 engineers, clients in 12 countries. Built in Dhaka, trusted worldwide.',
};

const stats = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '35+', label: 'Team Members' },
  { value: '12', label: 'Countries Served' },
  { value: '4.9/5', label: 'Client Rating' },
];

const timeline = [
  {
    year: '2019',
    title: 'The Beginning',
    description:
      'Founded by engineering grads from BUET. First project: a fintech MVP for a Dhaka-based startup.',
  },
  {
    year: '2020',
    title: 'Going Global',
    description:
      'Landed our first international client — a UK insurtech startup building a digital claims platform.',
  },
  {
    year: '2022',
    title: 'Product Launch',
    description:
      'Launched PayFlow, our first proprietary product. 500+ businesses now use it for payment processing.',
  },
  {
    year: '2023',
    title: 'Recognition & Growth',
    description:
      'Grew to 25 team members. Named Clutch Top Developer in Bangladesh. Expanded to EU and North American markets.',
  },
  {
    year: '2025',
    title: 'AI & Scale',
    description:
      '50+ projects across 12 countries. Launched AI/ML practice. Built FraudShield AI, ClaimWise, and 5 more proprietary products.',
  },
];

const values = [
  {
    title: 'Engineering First',
    description:
      "We write code like it'll live for 10 years. Clean architecture, comprehensive tests, and documentation that future developers won't curse.",
    icon: CheckCircle2,
  },
  {
    title: 'Radical Transparency',
    description:
      'Budget, timeline, blockers — nothing hidden. You get weekly reports, live staging access, and direct Slack channels with engineers.',
    icon: Globe,
  },
  {
    title: 'IP Always Yours',
    description:
      'Every line of code is yours, period. 100% intellectual property transfer upon project completion. No hidden licenses or usage fees.',
    icon: Shield,
  },
  {
    title: 'Timezone Flexible',
    description:
      'We overlap with your team, wherever you are. 6-hour overlap with UK, 4 hours with US East Coast, 5 hours with Germany, 4 hours with Australia.',
    icon: Clock,
  },
];

const leadership = [
  {
    name: 'Rafiqul Islam',
    title: 'CEO & Co-founder',
    bio: 'Ex-BRAC Bank tech lead, 15+ years in fintech. Built core banking systems serving 2M+ customers.',
    initials: 'RI',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'Nusrat Jahan',
    title: 'CTO',
    bio: 'ML engineer with 12+ years experience. Published researcher in neural networks. Built fraud detection at scale.',
    initials: 'NJ',
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    name: 'Mehedi Hasan',
    title: 'Head of Delivery',
    bio: 'PMP certified with 10+ years delivering enterprise software. Led projects for Fortune 500 clients across 3 continents.',
    initials: 'MH',
    gradient: 'from-purple-500 to-pink-500',
  },
];

const certifications = [
  'GDPR Compliant',
  'ISO 27001 Aligned',
  'HIPAA Aware',
  'OWASP Secure',
  'Clutch Top Developer',
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0A0E1A]">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-white/5">
        <div className="mesh-bg opacity-30" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="eyebrow mb-6">About NimbleSL</p>
            <h1 className="mb-6 text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Built in Bangladesh.
              <br />
              <span className="grad-blue">Trusted Worldwide.</span>
            </h1>
            <p className="mx-auto mb-12 max-w-3xl text-lg leading-relaxed text-gray-300">
              We are a software development company from Dhaka, building
              enterprise-grade software for clients across North America, Europe,
              and Asia.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 lg:gap-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="glass rounded-xl border border-white/10 p-6"
                >
                  <div className="text-4xl font-bold text-white sm:text-5xl">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Story - Timeline */}
      <section className="relative border-b border-white/5 py-24">
        <div className="grid-bg opacity-10" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-white">Our Story</h2>
            <p className="text-lg text-gray-400">
              From a 3-person team in Dhaka to a 35+ engineer company trusted by
              clients worldwide.
            </p>
          </div>

          <div className="space-y-12">
            {timeline.map((milestone, index) => (
              <div
                key={index}
                className="card relative flex flex-col gap-6 p-8 sm:flex-row"
              >
                {/* Year badge */}
                <div className="shrink-0">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-500/10 text-2xl font-bold text-blue-400">
                    {milestone.year}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="mb-2 text-2xl font-bold text-white">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-400">{milestone.description}</p>
                </div>

                {/* Connecting line (except last item) */}
                {index < timeline.length - 1 && (
                  <div className="absolute left-[2rem] top-[5rem] hidden h-12 w-0.5 bg-gradient-to-b from-blue-500/50 to-transparent sm:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative border-b border-white/5 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-white">Our Values</h2>
            <p className="text-lg text-gray-400">
              The principles that guide every project we build.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="card p-8">
                  <div className="mb-4 inline-flex rounded-lg bg-blue-500/10 p-3">
                    <Icon className="h-6 w-6 text-blue-400" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-white">
                    {value.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-400">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="relative border-b border-white/5 py-24">
        <div className="grid-bg opacity-10" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-white">
              Leadership Team
            </h2>
            <p className="text-lg text-gray-400">
              Led by engineers who've built software at scale.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {leadership.map((leader, index) => (
              <div key={index} className="card p-8 text-center">
                {/* Avatar with gradient background */}
                <div className="mb-6 flex justify-center">
                  <div
                    className={`flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br ${leader.gradient} text-2xl font-bold text-white`}
                  >
                    {leader.initials}
                  </div>
                </div>

                {/* Name and title */}
                <h3 className="mb-1 text-xl font-bold text-white">
                  {leader.name}
                </h3>
                <p className="mb-4 text-sm text-blue-400">{leader.title}</p>

                {/* Bio */}
                <p className="mb-6 text-sm leading-relaxed text-gray-400">
                  {leader.bio}
                </p>

                {/* LinkedIn placeholder */}
                <div className="flex justify-center">
                  <div className="inline-flex items-center gap-2 text-sm text-gray-500">
                    <svg
                      className="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                    LinkedIn
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications/Compliance */}
      <section className="border-b border-white/5 bg-white/[0.02] py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                <span>{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24">
        <div className="mesh-bg opacity-20" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-6 text-4xl font-bold text-white">
            Want to work with us?
          </h2>
          <p className="mb-8 text-lg text-gray-300">
            Whether you're building an MVP or scaling an enterprise platform,
            we'd love to hear about your project.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/contact" className="btn btn-primary">
              Start a Project
            </Link>
            <Link href="/case-studies" className="btn btn-ghost">
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
