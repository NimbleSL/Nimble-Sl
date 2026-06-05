'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Search, ChevronDown, HelpCircle, ArrowRight, Mail, Phone, Calendar } from 'lucide-react';
import { faqItems } from '@/lib/data/faq';

const CATEGORIES = [
  'All',
  'Process',
  'Working with us',
  'Legal & IP',
  'Pricing',
  'Team',
  'Compliance',
  'Post-Launch',
  'AI Estimator',
];

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Filter FAQ items based on active category and search query
  const filteredFAQItems = useMemo(() => {
    return faqItems.filter((item) => {
      const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
      const matchesSearch =
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  function handleCategoryClick(cat: string) {
    setActiveCategory(cat);
    setOpenIndex(null); // Reset open states on filter switch
  }

  function toggleAccordion(idx: number) {
    setOpenIndex(openIndex === idx ? null : idx);
  }

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

      {/* ── Hero & Search Section ───────────────────────────────────── */}
      <section className="relative overflow-hidden pt-36 pb-12" style={{ borderBottom: '1px solid var(--border)' }}>
        <div className="mesh-bg" style={{ opacity: 0.2 }} />
        <div className="container relative">
          <span className="eyebrow mb-4 inline-flex">
            <span className="ev-dot" /> Knowledge Base
          </span>
          <h1
            className="mb-4 text-3xl font-bold tracking-tight font-display sm:text-4xl lg:text-5xl"
            style={{ color: 'var(--text)' }}
          >
            Frequently Asked <span className="grad-blue">Questions</span>
          </h1>
          <p className="max-w-2xl text-sm sm:text-base leading-relaxed" style={{ color: 'var(--text-2)' }}>
            Review official documentation regarding our agile pilot sprints, B2B milestones,
            GDPR & HIPAA security, and post-launch SLA retainers.
          </p>
        </div>
      </section>

      {/* ── Main FAQ Dashboard Section ───────────────────────────────── */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* ── LEFT PANEL: Sticky Search & Category Sidebar (Desktop Only) ── */}
            <div className="lg:col-span-4 lg:sticky lg:top-24 flex flex-col gap-6">
              
              {/* Search Box */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--text-3)' }}>Search Queries</label>
                <div className="relative">
                  <Search
                    className="absolute left-4.5 top-1/2 h-4.5 w-4.5 -translate-y-1/2"
                    style={{ color: 'var(--text-3)' }}
                  />
                  <input
                    type="text"
                    placeholder="Search timezone, SLAs, pricing..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full rounded-xl py-3 pl-11 pr-4 outline-none transition-all border focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10 text-sm"
                    style={{
                      borderColor: 'var(--border-2)',
                      background: 'var(--surface-2)',
                      color: 'var(--text)',
                    }}
                  />
                </div>
              </div>

              {/* Desktop Category Navigation */}
              <div className="hidden lg:flex flex-col gap-2.5">
                <label className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: 'var(--text-3)' }}>Document Category</label>
                <div className="flex flex-col gap-1">
                  {CATEGORIES.map((cat) => {
                    const count = cat === 'All' ? faqItems.length : faqItems.filter((f) => f.category === cat).length;
                    const isActive = activeCategory === cat;
                    return (
                      <button
                        key={cat}
                        onClick={() => handleCategoryClick(cat)}
                        className="w-full text-left px-4 py-3 rounded-xl transition-all duration-150 flex items-center justify-between text-sm group"
                        style={{
                          background: isActive ? 'rgba(59, 130, 246, 0.08)' : 'transparent',
                          color: isActive ? 'var(--blue-2)' : 'var(--text-2)',
                          fontWeight: isActive ? 600 : 500,
                          borderLeft: isActive ? '3px solid var(--blue-2)' : '3px solid transparent',
                        }}
                      >
                        <span className="group-hover:translate-x-1 transition-transform">{cat}</span>
                        <span
                          className="text-[10px] font-mono px-2 py-0.5 rounded-md"
                          style={{
                            background: isActive ? 'rgba(59, 130, 246, 0.15)' : 'var(--surface-2)',
                            color: isActive ? 'var(--blue-2)' : 'var(--text-3)',
                          }}
                        >
                          {count}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Direct Escalation Card */}
              <div className="card p-6 flex flex-col gap-4">
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider mb-1" style={{ color: 'var(--text)' }}>Escalate Query</h3>
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--text-2)' }}>
                    Can&apos;t find specific terms? Speak directly with our operations team in Dhaka.
                  </p>
                </div>
                <div style={{ height: 1, background: 'var(--border)' }} />
                <div className="flex flex-col gap-3">
                  <a href="mailto:info@nimblesl.com" className="flex items-center gap-2.5 text-xs font-medium hover:underline" style={{ color: 'var(--blue-2)' }}>
                    <Mail size={14} /> info@nimblesl.com
                  </a>
                  <a href="tel:+8801796109979" className="flex items-center gap-2.5 text-xs font-medium hover:underline text-emerald-400">
                    <Phone size={14} /> +880-1796-109979
                  </a>
                  <Link href="/contact" className="btn btn-primary text-xs py-2 px-3 justify-center gap-1.5 mt-1">
                    Book Discovery Call <ArrowRight size={12} />
                  </Link>
                </div>
              </div>

            </div>

            {/* ── MOBILE ONLY: Horizontal Category Pill List ── */}
            <div className="lg:hidden flex flex-col gap-4 w-full">
              {/* Category pills */}
              <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                {CATEGORIES.map((cat) => {
                  const isActive = activeCategory === cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => handleCategoryClick(cat)}
                      className={`whitespace-nowrap rounded-full px-4 py-2 text-xs font-semibold transition-all ${
                        isActive ? 'btn btn-primary' : 'btn btn-ghost'
                      }`}
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* ── RIGHT PANEL: Accordions list (lg:col-span-8) ── */}
            <div className="lg:col-span-8 flex flex-col gap-4">
              
              {filteredFAQItems.length > 0 ? (
                <div className="flex flex-col gap-4.5">
                  {filteredFAQItems.map((item, index) => {
                    const isOpen = openIndex === index;
                    return (
                      <div
                        key={index}
                        className="card transition-all duration-200"
                        style={{
                          borderColor: isOpen ? 'rgba(59, 130, 246, 0.35)' : 'var(--border)',
                          background: isOpen ? 'var(--surface-2)' : 'var(--surface)',
                          borderLeft: isOpen ? '4px solid var(--blue-2)' : '1px solid var(--border)',
                          boxShadow: isOpen ? '0 10px 30px rgba(59, 130, 246, 0.03)' : 'none',
                        }}
                      >
                        {/* Accordion Summary Toggle */}
                        <button
                          onClick={() => toggleAccordion(index)}
                          className="w-full text-left p-5.5 flex items-start justify-between gap-4 cursor-pointer outline-none select-none bg-transparent border-none"
                        >
                          <div className="flex gap-3.5 items-start">
                            <HelpCircle
                              size={18}
                              style={{
                                color: isOpen ? 'var(--blue-2)' : 'var(--text-3)',
                                marginTop: 3,
                                flexShrink: 0,
                              }}
                            />
                            <span
                              className="font-display font-semibold text-sm sm:text-base leading-snug"
                              style={{ color: isOpen ? 'var(--text)' : 'var(--text-2)' }}
                            >
                              {item.question}
                            </span>
                          </div>
                          <ChevronDown
                            size={18}
                            style={{
                              color: 'var(--text-3)',
                              transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                              transition: 'transform 0.22s cubic-bezier(0.4, 0, 0.2, 1)',
                              flexShrink: 0,
                              marginTop: 3,
                            }}
                          />
                        </button>

                        {/* Collapsible Content wrapper */}
                        <div className="faq-item-content" data-open={isOpen}>
                          <div className="faq-item-inner">
                            <div
                              className="px-5.5 pb-5.5 pt-1 text-xs sm:text-sm leading-relaxed"
                              style={{
                                borderTop: '1px solid var(--border)',
                                color: 'var(--text-2)',
                              }}
                            >
                              {item.answer}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="text-center py-16 card flex flex-col items-center justify-center p-8">
                  <div style={{ fontSize: 32, marginBottom: 12 }}>🔍</div>
                  <h3 className="text-base font-bold mb-1" style={{ color: 'var(--text)' }}>
                    No results found
                  </h3>
                  <p className="text-xs max-w-sm mb-6" style={{ color: 'var(--text-2)' }}>
                    We couldn&apos;t find any documentation matching &quot;{searchQuery}&quot; under &quot;{activeCategory}&quot;.
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setActiveCategory('All');
                    }}
                    className="btn btn-ghost text-xs"
                  >
                    Reset Filters
                  </button>
                </div>
              )}

            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
