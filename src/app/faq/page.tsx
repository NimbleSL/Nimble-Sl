import type { Metadata } from 'next';
import Link from 'next/link';
import { Search } from 'lucide-react';
import { faqItems } from '@/lib/data/faq';

export const metadata: Metadata = {
  title: 'FAQ | Common Questions About NimbleSL — Software Development',
  description:
    'Answers to common questions about working with NimbleSL: pricing, process, IP ownership, timezones, and more.',
};

// Group FAQs by category
function groupFAQsByCategory() {
  const grouped: Record<string, typeof faqItems> = {};
  faqItems.forEach((item) => {
    if (!grouped[item.category]) {
      grouped[item.category] = [];
    }
    grouped[item.category].push(item);
  });
  return grouped;
}

export default function FAQPage() {
  const groupedFAQs = groupFAQsByCategory();
  const categories = Object.keys(groupedFAQs);

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <main className="min-h-screen" style={{ background: 'var(--bg)' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Hero Section */}
      <section className="relative overflow-hidden" style={{ borderBottom: '1px solid var(--border)' }}>
        <div className="mesh-bg opacity-30" />
        <div className="relative mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 lg:px-8">
          <h1 className="mb-6 text-5xl font-bold tracking-tight sm:text-6xl" style={{ color: 'var(--text)' }}>
            Frequently Asked Questions
          </h1>
          <p className="mx-auto max-w-2xl text-lg" style={{ color: 'var(--text-2)' }}>
            Everything you need to know about working with NimbleSL. Can&apos;t
            find what you&apos;re looking for? Contact us directly.
          </p>

          {/* Search Input (UI only) */}
          <div className="mx-auto mt-12 max-w-2xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2" style={{ color: 'var(--text-3)' }} />
              <input
                type="text"
                placeholder="Search questions..."
                className="w-full rounded-xl py-4 pl-12 pr-4 outline-none transition-colors focus:ring-2 focus:ring-blue-500/20"
                style={{
                  border: '1px solid var(--border-2)',
                  background: 'var(--surface-2)',
                  color: 'var(--text)',
                  borderColor: 'var(--border-2)'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="relative py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {categories.map((category, categoryIndex) => (
            <div key={category} className="mb-12">
              {/* Category Header */}
              <h2 className="mb-6 text-2xl font-bold" style={{ color: 'var(--text)' }}>{category}</h2>

              {/* FAQ Items */}
              <div className="space-y-4">
                {groupedFAQs[category].map((item, itemIndex) => (
                  <details
                    key={itemIndex}
                    className="group card overflow-hidden transition-all"
                  >
                    <summary className="flex cursor-pointer items-center justify-between p-6 text-lg font-semibold transition-colors hover:text-blue-400" style={{ color: 'var(--text)' }}>
                      <span>{item.question}</span>
                      <svg
                        className="h-5 w-5 shrink-0 transition-transform group-open:rotate-180"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        style={{ color: 'var(--text-3)' }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </summary>
                    <div className="px-6 pb-6 pt-4" style={{ borderTop: '1px solid var(--border)' }}>
                      <p className="leading-relaxed" style={{ color: 'var(--text-2)' }}>
                        {item.answer}
                      </p>
                    </div>
                  </details>
                ))}
              </div>

              {/* Divider between categories (except last) */}
              {categoryIndex < categories.length - 1 && (
                <div className="mt-12" style={{ borderTop: '1px solid var(--border)' }} />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="relative py-24" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="grid-bg opacity-20" />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <div className="glass rounded-2xl p-8 sm:p-12">
            <h2 className="mb-4 text-3xl font-bold" style={{ color: 'var(--text)' }}>
              Still have questions?
            </h2>
            <p className="mb-8 text-lg" style={{ color: 'var(--text-2)' }}>
              Can&apos;t find the answer you&apos;re looking for? Our team is
              here to help. Get in touch and we&apos;ll get back to you within 24
              hours.
            </p>
            <Link href="/contact" className="btn btn-primary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
