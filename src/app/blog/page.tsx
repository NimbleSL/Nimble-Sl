import type { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts } from '@/lib/data/blog';
import { BlogGrid } from './BlogGrid';

export const metadata: Metadata = {
  title: 'Blog | Engineering Insights & Tech Deep-Dives — NimbleSL',
  description:
    'Engineering articles, AI/ML deep-dives, product case studies, and business insights from the NimbleSL team building enterprise software in Bangladesh.',
  keywords: [
    'software engineering blog',
    'bangladesh software development',
    'fintech engineering',
    'machine learning tutorials',
    'next.js best practices',
    'offshore development insights',
  ],
  openGraph: {
    title: 'NimbleSL Engineering Blog — Real-World Software Insights',
    description:
      'Deep technical articles from engineers who have shipped 50+ enterprise products. No fluff.',
    images: [{ url: '/og/blog.png', width: 1200, height: 630 }],
  },
};

// Featured post is the first post marked as featured
const featuredPost = blogPosts.find((p) => p.featured) ?? blogPosts[0];

export default function BlogPage() {
  return (
    <main className="min-h-screen" style={{ background: 'var(--bg)' }}>
      {/* ── Hero ───────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden pt-36 pb-16"
        style={{ borderBottom: '1px solid var(--border)' }}
      >
        <div className="mesh-bg" style={{ opacity: 0.25 }} />
        <div className="container relative">
          <div className="max-w-2xl">
            <span className="eyebrow mb-5 inline-flex">
              <span className="ev-dot" /> Engineering Insights
            </span>
            <h1
              className="mb-4 text-4xl font-bold tracking-tight font-display sm:text-5xl lg:text-6xl"
              style={{ color: 'var(--text)' }}
            >
              The{' '}
              <span className="grad-blue">NimbleSL</span>{' '}
              Blog
            </h1>
            <p className="text-lg leading-relaxed" style={{ color: 'var(--text-2)' }}>
              Real-world engineering articles, product case studies, and business insights from
              the team that has shipped 50+ enterprise products across 12 countries.
            </p>
          </div>
        </div>
      </section>

      {/* ── Featured Post ───────────────────────────────────────────── */}
      <section className="py-12" style={{ borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <p className="mb-6 text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--text-3)' }}>
            Featured Article
          </p>
          <Link href={`/blog/${featuredPost.slug}`} className="group block">
            <div
              className="card card-hover relative overflow-hidden"
              style={{ borderTop: `3px solid ${featuredPost.accent}` }}
            >
              <div className="p-8 sm:p-10 lg:p-12">
                <div className="mb-5 flex flex-wrap items-center gap-3">
                  <span className={`tag ${featuredPost.tagClass}`}>{featuredPost.category}</span>
                  <span className="text-sm" style={{ color: 'var(--text-3)' }}>
                    {featuredPost.readTime}
                  </span>
                  <span className="text-sm" style={{ color: 'var(--text-3)' }}>
                    · {featuredPost.date}
                  </span>
                </div>

                <h2
                  className="mb-4 text-2xl font-bold leading-snug font-display sm:text-3xl lg:text-4xl transition-opacity group-hover:opacity-80"
                  style={{ color: 'var(--text)' }}
                >
                  {featuredPost.title}
                </h2>

                <p
                  className="mb-6 max-w-3xl text-base leading-relaxed sm:text-lg"
                  style={{ color: 'var(--text-2)' }}
                >
                  {featuredPost.excerpt}
                </p>

                <span
                  className="inline-flex items-center gap-2 text-sm font-semibold transition-colors"
                  style={{ color: 'var(--blue-2)' }}
                >
                  Read Full Article
                  <svg
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* ── Blog Grid (client — has category filter + pagination) ───── */}
      <BlogGrid />

      {/* ── Newsletter CTA ──────────────────────────────────────────── */}
      <section
        className="relative py-24"
        style={{ borderTop: '1px solid var(--border)' }}
      >
        <div className="grid-bg" style={{ opacity: 0.12 }} />
        <div className="container relative">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow mb-5 inline-flex">
              <span className="ev-dot" /> Stay in the loop
            </span>
            <h2
              className="mb-4 text-3xl font-bold font-display"
              style={{ color: 'var(--text)' }}
            >
              Get engineering insights in your inbox
            </h2>
            <p className="mb-8 text-base" style={{ color: 'var(--text-2)' }}>
              Deep-dives, case studies, and product updates — one email per week. No spam, unsubscribe anytime.
            </p>

            <form
              action="/api/newsletter"
              method="POST"
              className="flex flex-col gap-3 sm:flex-row sm:justify-center"
            >
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                required
                className="flex-1 max-w-sm rounded-lg px-4 py-3 text-sm outline-none transition-colors"
                style={{
                  background: 'var(--surface-2)',
                  border: '1px solid var(--border)',
                  color: 'var(--text)',
                }}
              />
              <button type="submit" className="btn btn-primary whitespace-nowrap">
                Subscribe Free
              </button>
            </form>

            <p className="mt-4 text-xs" style={{ color: 'var(--text-3)' }}>
              Join 2,000+ engineers and founders. Unsubscribe any time.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
