'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { blogPosts, CATEGORIES, type BlogPost } from '@/lib/data/blog';

const POSTS_PER_PAGE = 9;

function PostCard({ post }: { post: BlogPost }) {
  return (
    <article
      className="card card-hover group relative overflow-hidden flex flex-col"
      style={{ borderTop: `2px solid ${post.accent}` }}
    >
      <div className="p-6 flex flex-col flex-1">
        {/* Category + read time */}
        <div className="mb-4 flex items-center justify-between">
          <span className={`tag ${post.tagClass}`}>{post.category}</span>
          <span className="text-xs" style={{ color: 'var(--text-3)' }}>{post.readTime}</span>
        </div>

        {/* Title */}
        <h3 className="mb-3 text-base font-semibold leading-snug flex-1" style={{ color: 'var(--text)' }}>
          <Link
            href={`/blog/${post.slug}`}
            className="hover:opacity-75 transition-opacity line-clamp-2"
          >
            {post.title}
          </Link>
        </h3>

        {/* Excerpt */}
        <p
          className="mb-5 text-sm leading-relaxed line-clamp-3"
          style={{ color: 'var(--text-2)' }}
        >
          {post.excerpt}
        </p>

        {/* Footer */}
        <div className="mt-auto flex items-center justify-between">
          <span className="text-xs" style={{ color: 'var(--text-3)' }}>{post.date}</span>
          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center gap-1 text-xs font-medium transition-colors hover:opacity-80"
            style={{ color: 'var(--blue-2)' }}
          >
            Read →
          </Link>
        </div>
      </div>
    </article>
  );
}

export function BlogGrid() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    if (activeCategory === 'All') return blogPosts;
    return blogPosts.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const totalPages = Math.ceil(filtered.length / POSTS_PER_PAGE);
  const paginated = filtered.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE);

  function handleCategory(cat: string) {
    setActiveCategory(cat);
    setPage(1);
  }

  return (
    <>
      {/* Category Filter */}
      <div
        className="sticky top-16 z-10 py-3"
        style={{ background: 'var(--bg)', borderBottom: '1px solid var(--border)' }}
      >
        <div className="container">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategory(cat)}
                className={`whitespace-nowrap rounded-full px-4 py-1.5 text-xs font-medium transition-all ${
                  activeCategory === cat ? 'btn btn-primary' : 'btn btn-ghost'
                }`}
              >
                {cat}
                {cat !== 'All' && (
                  <span
                    className="ml-1.5 tabular-nums opacity-60"
                  >
                    {blogPosts.filter((p) => p.category === cat).length}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <section className="py-12">
        <div className="container">
          {/* Results count */}
          <p className="mb-6 text-sm" style={{ color: 'var(--text-3)' }}>
            {filtered.length} article{filtered.length !== 1 ? 's' : ''}
            {activeCategory !== 'All' ? ` in ${activeCategory}` : ''}
          </p>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {paginated.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-12 flex items-center justify-center gap-2">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className="btn btn-ghost disabled:opacity-30"
                style={{ padding: '6px 14px', fontSize: 13 }}
              >
                ← Prev
              </button>

              <div className="flex gap-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                  <button
                    key={n}
                    onClick={() => setPage(n)}
                    className={`h-8 w-8 rounded-lg text-xs font-medium transition-all ${
                      page === n ? 'btn btn-primary' : 'btn btn-ghost'
                    }`}
                  >
                    {n}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className="btn btn-ghost disabled:opacity-30"
                style={{ padding: '6px 14px', fontSize: 13 }}
              >
                Next →
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
