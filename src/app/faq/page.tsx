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

  return (
    <main className="min-h-screen bg-[#0A0E1A]">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-white/5">
        <div className="mesh-bg opacity-30" />
        <div className="relative mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 lg:px-8">
          <h1 className="mb-6 text-5xl font-bold tracking-tight text-white sm:text-6xl">
            Frequently Asked Questions
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-300">
            Everything you need to know about working with NimbleSL. Can&apos;t
            find what you&apos;re looking for? Contact us directly.
          </p>

          {/* Search Input (UI only) */}
          <div className="mx-auto mt-12 max-w-2xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                placeholder="Search questions..."
                className="w-full rounded-xl border border-white/10 bg-white/5 py-4 pl-12 pr-4 text-white placeholder-gray-500 outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
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
              <h2 className="mb-6 text-2xl font-bold text-white">{category}</h2>

              {/* FAQ Items */}
              <div className="space-y-4">
                {groupedFAQs[category].map((item, itemIndex) => (
                  <details
                    key={itemIndex}
                    className="group card overflow-hidden transition-all"
                  >
                    <summary className="flex cursor-pointer items-center justify-between p-6 text-lg font-semibold text-white transition-colors hover:text-blue-400">
                      <span>{item.question}</span>
                      <svg
                        className="h-5 w-5 shrink-0 text-gray-400 transition-transform group-open:rotate-180"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </summary>
                    <div className="border-t border-white/5 px-6 pb-6 pt-4">
                      <p className="leading-relaxed text-gray-300">
                        {item.answer}
                      </p>
                    </div>
                  </details>
                ))}
              </div>

              {/* Divider between categories (except last) */}
              {categoryIndex < categories.length - 1 && (
                <div className="mt-12 border-t border-white/5" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="relative border-t border-white/5 py-24">
        <div className="grid-bg opacity-20" />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <div className="glass rounded-2xl p-8 sm:p-12">
            <h2 className="mb-4 text-3xl font-bold text-white">
              Still have questions?
            </h2>
            <p className="mb-8 text-lg text-gray-300">
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
