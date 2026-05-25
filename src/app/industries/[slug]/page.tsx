import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  Building2,
  Landmark,
  HeartPulse,
  ShieldCheck,
  Home,
  Truck,
  CheckCircle2,
} from 'lucide-react';
import { industries } from '@/lib/data/industries';

const iconMap: Record<string, React.ElementType> = {
  bank: Landmark,
  heart: HeartPulse,
  shield: ShieldCheck,
  home: Home,
  truck: Truck,
  building: Building2,
};

export async function generateStaticParams() {
  return industries.map((industry) => ({
    slug: industry.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = industries.find((i) => i.slug === slug);

  if (!industry) {
    return {
      title: 'Industry Not Found',
    };
  }

  return {
    title: `${industry.name} Software Development | NimbleSL`,
    description: industry.description,
  };
}

// Map case study slugs to titles
const caseStudyTitles: Record<string, string> = {
  payflow: 'PayFlow — Digital Payment Platform',
  'fraudshield-ai': 'FraudShield AI — ML Fraud Detection',
  claimwise: 'ClaimWise — Insurance Claims Processing',
  propnest: 'PropNest — Real Estate Platform',
  fieldops: 'FieldOps — Field Force Management',
  authgate: 'AuthGate — Enterprise IAM Platform',
};

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = industries.find((i) => i.slug === slug);

  if (!industry) {
    notFound();
  }

  const Icon = iconMap[industry.icon] || Building2;

  return (
    <main className="min-h-screen bg-[#0A0E1A]">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-white/5">
        <div className="mesh-bg opacity-30" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Icon */}
            <div className="mb-6 flex justify-center">
              <div
                className="inline-flex rounded-2xl p-4"
                style={{ backgroundColor: `${industry.accent}20` }}
              >
                <Icon className="h-12 w-12" style={{ color: industry.accent }} />
              </div>
            </div>

            {/* Title */}
            <h1 className="mb-4 text-5xl font-bold tracking-tight text-white sm:text-6xl">
              Software Development for
              <br />
              <span style={{ color: industry.accent }}>{industry.name}</span>
            </h1>

            {/* Tagline */}
            <p className="mx-auto mb-6 max-w-2xl text-xl text-gray-300">
              {industry.tagline}
            </p>

            {/* Description */}
            <p className="mx-auto mb-12 max-w-3xl text-lg leading-relaxed text-gray-400">
              {industry.description}
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8">
              <div className="glass rounded-xl border border-white/10 px-6 py-4">
                <div className="text-3xl font-bold text-white">
                  {industry.projectCount}
                </div>
                <div className="mt-1 text-sm text-gray-400">Completed</div>
              </div>
              <div className="glass rounded-xl border border-white/10 px-6 py-4">
                <div className="text-3xl font-bold text-white">
                  {industry.solutions.length}
                </div>
                <div className="mt-1 text-sm text-gray-400">Solutions Built</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="relative border-b border-white/5 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-white">
              Industry Challenges
            </h2>
            <p className="text-lg text-gray-400">
              Common problems we solve for {industry.name.toLowerCase()} clients.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {industry.challenges.map((challenge, index) => (
              <div key={index} className="card flex gap-4 p-6">
                <div className="shrink-0">
                  <div
                    className="flex h-8 w-8 items-center justify-center rounded-lg text-sm font-bold"
                    style={{
                      backgroundColor: `${industry.accent}20`,
                      color: industry.accent,
                    }}
                  >
                    {index + 1}
                  </div>
                </div>
                <p className="text-gray-300">{challenge}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Build Section */}
      <section className="relative border-b border-white/5 py-24">
        <div className="grid-bg opacity-10" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-white">What We Build</h2>
            <p className="text-lg text-gray-400">
              Custom software solutions tailored for {industry.name.toLowerCase()}.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {industry.solutions.map((solution, index) => {
              // Convert solution slugs to readable titles
              const solutionTitles: Record<string, string> = {
                payflow: 'Digital Payment Processing',
                fraudshield: 'Real-time Fraud Detection',
                caseflow: 'Case Management Systems',
                claimwise: 'Claims Processing Automation',
                propnest: 'Property Discovery Platforms',
                fieldops: 'Field Force Automation',
                authgate: 'Identity & Access Management',
                hiresync: 'Applicant Tracking Systems',
              };

              const solutionDescriptions: Record<string, string> = {
                payflow:
                  'Accept payments, manage wallets, and process transactions with sub-second latency.',
                fraudshield:
                  'ML-powered fraud detection that processes 10,000+ transactions per second.',
                caseflow:
                  'End-to-end case management with workflow automation and document handling.',
                claimwise:
                  'OCR + ML for automated claim intake, validation, and fraud detection.',
                propnest:
                  'Property search, agent management, and AI-powered recommendations.',
                fieldops:
                  'Offline-first mobile apps for field teams with GPS tracking and sync.',
                authgate:
                  'Enterprise SSO, RBAC, and multi-factor authentication.',
                hiresync:
                  'End-to-end recruitment platform with AI-powered candidate matching.',
              };

              return (
                <div key={index} className="card p-6">
                  <div className="mb-4">
                    <CheckCircle2
                      className="h-6 w-6"
                      style={{ color: industry.accent }}
                    />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-white">
                    {solutionTitles[solution] || solution}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {solutionDescriptions[solution] ||
                      'Custom enterprise software tailored to your needs.'}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Compliance Section (if available) */}
      {industry.compliance && industry.compliance.length > 0 && (
        <section className="border-b border-white/5 bg-white/[0.02] py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
              <span className="text-white">Compliance Standards:</span>
              {industry.compliance.map((standard, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  <span>{standard}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Case Studies */}
      {industry.relatedCaseStudies.length > 0 && (
        <section className="relative border-b border-white/5 py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-4xl font-bold text-white">
                Featured Case Studies
              </h2>
              <p className="text-lg text-gray-400">
                Real projects we&apos;ve built for {industry.name.toLowerCase()}{' '}
                clients.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {industry.relatedCaseStudies.slice(0, 2).map((caseStudy, index) => (
                <Link
                  key={index}
                  href={`/case-studies/${caseStudy}`}
                  className="card group p-8 transition-all hover:border-white/20"
                >
                  <div
                    className="mb-4 inline-flex rounded-lg px-3 py-1 text-xs font-medium"
                    style={{
                      backgroundColor: `${industry.accent}20`,
                      color: industry.accent,
                    }}
                  >
                    Case Study
                  </div>
                  <h3 className="mb-3 text-2xl font-bold text-white transition-colors group-hover:text-blue-400">
                    {caseStudyTitles[caseStudy] || caseStudy}
                  </h3>
                  <p className="mb-4 text-gray-400">
                    {caseStudy === 'payflow' &&
                      'A multi-currency payment gateway processing $2M+ daily transactions with 99.99% uptime.'}
                    {caseStudy === 'fraudshield-ai' &&
                      'ML fraud detection system that reduced fraud losses by 82% and false positives by 65%.'}
                    {caseStudy === 'claimwise' &&
                      'AI-powered claim processing that cut processing time from 4.5 days to 1.7 days.'}
                    {caseStudy === 'propnest' &&
                      'Real estate platform with 50,000+ listings, sub-second search, and AI recommendations.'}
                    {caseStudy === 'fieldops' &&
                      'Offline-first field force app managing 400+ agents across Southeast Asia.'}
                    {caseStudy === 'authgate' &&
                      'Enterprise IAM platform serving 50,000+ employees across 12 business units.'}
                  </p>
                  <div className="flex items-center gap-2 text-sm font-medium text-blue-400">
                    View Case Study →
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="relative py-24">
        <div className="mesh-bg opacity-20" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-6 text-4xl font-bold text-white">
            Build Your {industry.name} Solution
          </h2>
          <p className="mb-8 text-lg text-gray-300">
            We&apos;ve built {industry.projectCount} for {industry.name.toLowerCase()}{' '}
            clients. Let&apos;s build yours next.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/contact" className="btn btn-primary">
              Start a Project
            </Link>
            <Link href="/case-studies" className="btn btn-ghost">
              View All Case Studies
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
