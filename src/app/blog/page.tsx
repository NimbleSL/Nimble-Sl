import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog | Engineering Insights & Tech Deep-Dives — NimbleSL',
  description: 'Engineering articles, product updates, and tech insights from the NimbleSL team.',
};

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  accent: string;
  tagClass: string;
}

const blogPosts: BlogPost[] = [
  {
    slug: 'how-we-built-fraudshield-real-time-ml-fraud-detection-at-scale',
    title: 'How We Built FraudShield: Real-time ML Fraud Detection at Scale',
    excerpt: 'Deep dive into the architecture behind our ML fraud detection system that processes 10,000+ transactions per second with 96% accuracy.',
    category: 'Engineering',
    readTime: '12 min read',
    date: 'March 15, 2025',
    accent: '#3B82F6',
    tagClass: 'tag-blue',
  },
  {
    slug: 'angular-vs-react-in-2025-which-should-you-choose-for-enterprise',
    title: 'Angular vs React in 2025: Which Should You Choose for Enterprise?',
    excerpt: 'A practical comparison based on 50+ enterprise projects. We break down the real costs, team dynamics, and long-term maintenance implications.',
    category: 'Engineering',
    readTime: '8 min read',
    date: 'March 8, 2025',
    accent: '#06B6D4',
    tagClass: 'tag-cyan',
  },
  {
    slug: 'the-true-cost-of-software-development-in-bangladesh',
    title: 'The True Cost of Software Development in Bangladesh',
    excerpt: 'Beyond the hourly rate: what it actually costs to build enterprise software in Dhaka, from talent acquisition to infrastructure.',
    category: 'Business',
    readTime: '6 min read',
    date: 'February 28, 2025',
    accent: '#10B981',
    tagClass: 'tag-emerald',
  },
  {
    slug: 'building-offline-first-mobile-apps-with-flutter',
    title: 'Building Offline-First Mobile Apps with Flutter',
    excerpt: 'How we built FieldOps to work seamlessly without internet using local-first architecture, conflict resolution, and background sync strategies.',
    category: 'Engineering',
    readTime: '10 min read',
    date: 'February 22, 2025',
    accent: '#3B82F6',
    tagClass: 'tag-blue',
  },
  {
    slug: 'from-idea-to-mvp-in-8-weeks-the-nimblesl-sprint-framework',
    title: 'From Idea to MVP in 8 Weeks: The NimbleSL Sprint Framework',
    excerpt: 'Our proven methodology for launching MVPs fast without accumulating technical debt. Includes Figma templates and sprint checklists.',
    category: 'Product',
    readTime: '7 min read',
    date: 'February 14, 2025',
    accent: '#A855F7',
    tagClass: 'tag-purple',
  },
  {
    slug: 'why-llm-powered-features-are-now-table-stakes-for-saas',
    title: 'Why LLM-Powered Features Are Now Table Stakes for SaaS',
    excerpt: 'The shift from "AI-powered" as a differentiator to a baseline expectation. How to integrate LLMs into SaaS products without breaking the bank.',
    category: 'AI/ML',
    readTime: '9 min read',
    date: 'January 30, 2025',
    accent: '#F59E0B',
    tagClass: 'tag-amber',
  },
  {
    slug: 'claimwise-how-ocr-ml-reduced-insurance-processing-time-by-60-percent',
    title: 'ClaimWise: How OCR + ML Reduced Insurance Processing Time by 60%',
    excerpt: 'A technical case study on building an AI-powered claim processing system that handles handwritten documents and fraud detection simultaneously.',
    category: 'Product',
    readTime: '11 min read',
    date: 'January 18, 2025',
    accent: '#06B6D4',
    tagClass: 'tag-cyan',
  },
  {
    slug: 'designing-for-enterprise-5-lessons-from-50-plus-projects',
    title: 'Designing for Enterprise: 5 Lessons from 50+ Projects',
    excerpt: 'Enterprise design is different. Stakeholder management, design systems, accessibility compliance, and why "pretty" is never enough.',
    category: 'Business',
    readTime: '5 min read',
    date: 'January 10, 2025',
    accent: '#10B981',
    tagClass: 'tag-emerald',
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#0A0E1A]">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-white/5">
        <div className="mesh-bg opacity-30" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
              The NimbleSL Blog
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
              Engineering insights from the team building tomorrow&apos;s software.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="border-b border-white/5 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto py-4">
            <button className="btn btn-primary whitespace-nowrap">All</button>
            <button className="btn btn-ghost whitespace-nowrap">Engineering</button>
            <button className="btn btn-ghost whitespace-nowrap">Product</button>
            <button className="btn btn-ghost whitespace-nowrap">Business</button>
            <button className="btn btn-ghost whitespace-nowrap">AI/ML</button>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="card group relative overflow-hidden"
              >
                {/* Accent bar */}
                <div
                  className="absolute left-0 right-0 top-0 h-1"
                  style={{ backgroundColor: post.accent }}
                />

                <div className="p-6">
                  {/* Category tag */}
                  <div className="mb-4">
                    <span className={`tag ${post.tagClass}`}>{post.category}</span>
                  </div>

                  {/* Title */}
                  <h3 className="mb-3 text-xl font-semibold text-white transition-colors group-hover:text-blue-400">
                    <Link href={`/blog/${post.slug}`} className="block">
                      {post.title}
                    </Link>
                  </h3>

                  {/* Excerpt */}
                  <p className="mb-4 text-sm text-gray-400">{post.excerpt}</p>

                  {/* Meta */}
                  <div className="mb-4 flex items-center gap-4 text-xs text-gray-500">
                    <span>{post.readTime}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>

                  {/* Author */}
                  <div className="mb-4 text-xs text-gray-500">
                    NimbleSL Engineering
                  </div>

                  {/* Read link */}
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-sm font-medium text-blue-400 transition-colors hover:text-blue-300"
                  >
                    Read Article →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="relative border-t border-white/5 py-24">
        <div className="grid-bg opacity-20" />
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="glass rounded-2xl p-8 text-center sm:p-12">
            <h2 className="mb-4 text-3xl font-bold text-white">Stay Updated</h2>
            <p className="mb-8 text-gray-300">
              Get engineering insights, product updates, and tech deep-dives
              delivered to your inbox. No spam, unsubscribe anytime.
            </p>
            <form
              action="/api/newsletter"
              method="POST"
              className="flex flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                required
                className="flex-1 rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
              />
              <button type="submit" className="btn btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
