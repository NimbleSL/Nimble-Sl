import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPostBySlug, getRelatedPosts, blogPosts } from '@/lib/data/blog';
import { ReadingProgress } from './ReadingProgress';
import { BlogTOC } from './BlogTOC';

// ─── Heading extraction ────────────────────────────────────────────────────
function extractHeadings(content: string) {
  return content
    .split('\n')
    .filter((l) => l.startsWith('## '))
    .map((l) => {
      const label = l.slice(3).trim();
      const id = label
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, '')
        .replace(/\s+/g, '-');
      return { id, label };
    });
}

function slugToId(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .replace(/\s+/g, '-');
}

// ─── Content renderer ─────────────────────────────────────────────────────
function renderContent(content: string) {
  const blocks = content.trim().split('\n\n');
  const result: React.ReactNode[] = [];
  let i = 0;

  while (i < blocks.length) {
    const block = blocks[i].trim();
    if (!block) { i++; continue; }

    // h2
    if (block.startsWith('## ')) {
      const text = block.slice(3).trim();
      const id = slugToId(text);
      result.push(
        <h2
          key={i}
          id={id}
          style={{ fontSize: 28, fontWeight: 700, color: 'var(--text)', marginTop: 48, marginBottom: 16, fontFamily: 'var(--font-sans)', scrollMarginTop: 100 }}
        >
          {text}
        </h2>
      );
      i++; continue;
    }

    // h3
    if (block.startsWith('### ')) {
      const text = block.slice(4).trim();
      result.push(
        <h3
          key={i}
          style={{ fontSize: 20, fontWeight: 600, color: 'var(--text)', marginTop: 28, marginBottom: 10, fontFamily: 'var(--font-sans)' }}
        >
          {text}
        </h3>
      );
      i++; continue;
    }

    // code block
    if (block.startsWith('```')) {
      const lines = block.split('\n');
      // first line may have lang: ```python or ```
      const lang = lines[0].slice(3).trim();
      const code = lines.slice(1, lines.length - 1).join('\n');
      result.push(
        <div
          key={i}
          className="card"
          style={{ padding: 0, overflow: 'hidden', marginTop: 24, marginBottom: 24 }}
        >
          <div
            style={{
              padding: '8px 14px',
              background: 'rgba(11,15,27,0.6)',
              borderBottom: '1px solid var(--border)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <span
              className="font-mono"
              style={{ fontSize: 11, color: 'var(--text-3)' }}
            >
              {lang || 'code'}
            </span>
            <span style={{ fontSize: 11, color: 'var(--text-3)', cursor: 'pointer', fontFamily: 'var(--font-mono)' }}>
              copy
            </span>
          </div>
          <pre
            style={{
              margin: 0,
              padding: 20,
              fontFamily: 'var(--font-mono)',
              fontSize: 13,
              lineHeight: 1.7,
              color: 'var(--text-2)',
              overflowX: 'auto',
            }}
          >
            <code>{code}</code>
          </pre>
        </div>
      );
      i++; continue;
    }

    // list
    if (block.startsWith('- ') || /^\d+\. /.test(block)) {
      const items = block.split('\n').filter(Boolean);
      const isOrdered = /^\d+\. /.test(items[0]);
      const Tag = isOrdered ? 'ol' : 'ul';
      result.push(
        <Tag
          key={i}
          style={{
            margin: '12px 0 16px 24px',
            color: 'var(--text-2)',
            listStyleType: isOrdered ? 'decimal' : 'disc',
          }}
        >
          {items.map((item, j) => (
            <li key={j} style={{ marginBottom: 6, lineHeight: 1.75, fontSize: 16 }}>
              <span
                dangerouslySetInnerHTML={{
                  __html: item
                    .replace(/^- /, '')
                    .replace(/^\d+\. /, '')
                    .replace(/\*\*(.*?)\*\*/g, `<strong style="color:var(--text);font-weight:600">$1</strong>`)
                    .replace(/`(.*?)`/g, `<code style="background:var(--surface-2);color:var(--cyan-2);padding:1px 6px;border-radius:4px;font-size:0.85em;font-family:var(--font-mono)">$1</code>`),
                }}
              />
            </li>
          ))}
        </Tag>
      );
      i++; continue;
    }

    // default paragraph
    result.push(
      <p
        key={i}
        style={{ color: 'var(--text-2)', fontSize: 17, lineHeight: 1.75, marginBottom: 20 }}
        dangerouslySetInnerHTML={{
          __html: block
            .replace(/\*\*(.*?)\*\*/g, `<strong style="color:var(--text);font-weight:600">$1</strong>`)
            .replace(/\*(.*?)\*/g, '<em>$1</em>')
            .replace(/`(.*?)`/g, `<code style="background:var(--surface-2);color:var(--cyan-2);padding:1px 6px;border-radius:4px;font-size:0.85em;font-family:var(--font-mono)">$1</code>`)
            .replace(/\[([^\]]+)\]\(([^)]+)\)/g, `<a href="$2" style="color:var(--blue-2);text-decoration:underline">$1</a>`),
        }}
      />
    );
    i++;
  }

  return result;
}

// ─── Static params & metadata ─────────────────────────────────────────────
export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: 'Post Not Found' };

  return {
    title: post.title,
    description: post.excerpt,
    keywords: [post.category, 'NimbleSL', 'software development', 'engineering'],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: ['NimbleSL Engineering'],
      tags: [post.category],
    },
  };
}

// ─── Page ──────────────────────────────────────────────────────────────────
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const relatedPosts = getRelatedPosts(slug, post.category, 3);
  const headings = extractHeadings(post.content);

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    author: { '@type': 'Organization', name: 'NimbleSL' },
    publisher: { '@type': 'Organization', name: 'NimbleSL', url: 'https://nimblesl.com' },
    datePublished: post.date,
    articleSection: post.category,
  };

  return (
    <>
      <ReadingProgress />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <main className="min-h-screen" style={{ background: 'var(--bg)' }}>

        {/* ── Post Header ─────────────────────────────────────────────── */}
        <section style={{ padding: '48px 0 32px', position: 'relative', paddingTop: 140 }}>
          <div className="container" style={{ maxWidth: 880, margin: '0 auto' }}>

            {/* Breadcrumb */}
            <nav
              className="font-mono"
              style={{ color: 'var(--text-3)', marginBottom: 28, display: 'flex', alignItems: 'center', gap: 8, fontSize: 12 }}
            >
              <Link href="/" style={{ color: 'var(--text-3)', textDecoration: 'none' }} className="hover:opacity-80">Home</Link>
              <span style={{ fontSize: 10 }}>›</span>
              <Link href="/blog" style={{ color: 'var(--text-3)', textDecoration: 'none' }} className="hover:opacity-80">Blog</Link>
              <span style={{ fontSize: 10 }}>›</span>
              <span style={{ color: 'var(--text-2)' }} className="line-clamp-1">{post.title}</span>
            </nav>

            {/* Tags */}
            <div style={{ display: 'flex', gap: 8, marginBottom: 16, flexWrap: 'wrap' }}>
              <span className={`tag ${post.tagClass}`}>{post.category}</span>
              <span className="tag">Engineering Deep-Dive</span>
              <span className="tag tag-emerald">Case Study</span>
            </div>

            {/* Title */}
            <h1 style={{ fontSize: 52, lineHeight: 1.08, fontFamily: 'var(--font-sans)', fontWeight: 800, color: 'var(--text)', letterSpacing: '-0.02em' }}>
              {post.title.includes(':') ? (
                <>
                  {post.title.split(':')[0]}:{' '}
                  <span className="grad-blue">{post.title.split(':').slice(1).join(':').trim()}</span>
                </>
              ) : (
                post.title
              )}
            </h1>

            <p style={{ marginTop: 20, fontSize: 18, color: 'var(--text-2)', lineHeight: 1.65, maxWidth: 720 }}>
              {post.excerpt}
            </p>

            {/* Author row */}
            <div style={{ marginTop: 28, display: 'flex', alignItems: 'center', gap: 14 }}>
              {/* Avatar */}
              <div style={{
                width: 48, height: 48, borderRadius: '50%', flexShrink: 0,
                background: `linear-gradient(135deg, ${post.accent}, ${post.accent}88)`,
                display: 'grid', placeItems: 'center',
                color: 'white', fontWeight: 700, fontSize: 18, fontFamily: 'var(--font-sans)',
                border: '2px solid var(--surface)',
              }}>N</div>
              <div>
                <div style={{ fontWeight: 600, fontSize: 14, color: 'var(--text)' }}>NimbleSL Engineering</div>
                <div className="font-mono" style={{ fontSize: 11, color: 'var(--text-3)', marginTop: 2 }}>nimblesl.com</div>
              </div>
              <div style={{ marginLeft: 'auto', display: 'flex', gap: 16, color: 'var(--text-3)', fontSize: 13 }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  {post.readTime}
                </span>
                <span>·</span>
                <span>{post.date}</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── Hero banner ──────────────────────────────────────────────── */}
        <section style={{ padding: '0 0 32px' }}>
          <div className="container">
            <div style={{
              maxWidth: 1120, margin: '0 auto',
              height: 380,
              background: `linear-gradient(135deg, ${post.accent}44, ${post.accent}06)`,
              border: `1px solid ${post.accent}44`,
              borderRadius: 16,
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div className="dot-bg" style={{ position: 'absolute', inset: 0, opacity: 0.45 }} />
              <div style={{ position: 'absolute', inset: 32, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div className="font-mono" style={{ fontSize: 11, color: 'var(--text-2)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
                  // {post.category} · NimbleSL Engineering
                </div>
                <div>
                  <div style={{
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 800,
                    fontSize: 'clamp(64px, 10vw, 120px)',
                    color: post.accent,
                    opacity: 0.88,
                    letterSpacing: '-0.04em',
                    lineHeight: 0.9,
                  }}>
                    {post.readTime.split(' ')[0]}
                    <span style={{ fontSize: '0.45em', opacity: 0.7 }}> min</span>
                  </div>
                  <div className="font-mono" style={{ fontSize: 12, color: 'var(--text-2)', marginTop: 10, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    Read · {post.category} deep-dive
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Body + TOC ────────────────────────────────────────────────── */}
        <section style={{ padding: '32px 0 96px' }}>
          <div className="container">
            <div style={{
              maxWidth: 1120, margin: '0 auto',
              display: 'grid',
              gridTemplateColumns: '1fr 240px',
              gap: 56,
              alignItems: 'start',
            }}>
              {/* Article */}
              <article>
                {renderContent(post.content)}

                {/* Inline CTA */}
                <div
                  className="card"
                  style={{
                    padding: 24, marginTop: 40,
                    background: `linear-gradient(135deg, ${post.accent}18, ${post.accent}04)`,
                    borderColor: `${post.accent}44`,
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
                    <div style={{ fontSize: 24 }}>⚡</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 700, fontSize: 16, color: 'var(--text)' }}>Building something similar?</div>
                      <div style={{ fontSize: 14, color: 'var(--text-2)', marginTop: 6 }}>
                        Get a scoped estimate in 3 minutes — based on this and 50+ similar projects.
                      </div>
                    </div>
                    <Link href="/tools/project-estimator" className="btn btn-primary">
                      Try AI Estimator →
                    </Link>
                  </div>
                </div>

                {/* Author bio */}
                <div className="card" style={{ padding: 24, marginTop: 40 }}>
                  <div style={{ display: 'flex', gap: 16 }}>
                    <div style={{
                      width: 56, height: 56, borderRadius: '50%', flexShrink: 0,
                      background: `linear-gradient(135deg, var(--blue), var(--cyan))`,
                      display: 'grid', placeItems: 'center',
                      color: 'white', fontWeight: 700, fontSize: 20, fontFamily: 'var(--font-sans)',
                    }}>N</div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: 15, color: 'var(--text)' }}>NimbleSL Engineering</div>
                      <div style={{ fontSize: 14, color: 'var(--text-2)', marginTop: 8, lineHeight: 1.65 }}>
                        The NimbleSL engineering team has shipped 50+ enterprise products across fintech, healthcare,
                        logistics, and SaaS. We write about what we actually built — no filler.
                      </div>
                      <div style={{ marginTop: 14, display: 'flex', gap: 8 }}>
                        <Link
                          href="/blog"
                          style={{ fontSize: 13, color: 'var(--blue-2)', textDecoration: 'none', fontWeight: 500 }}
                        >
                          ← More articles
                        </Link>
                        <span style={{ color: 'var(--border)' }}>·</span>
                        <Link
                          href="/contact"
                          style={{ fontSize: 13, color: 'var(--emerald-2)', textDecoration: 'none', fontWeight: 500 }}
                        >
                          Work with us →
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </article>

              {/* Sticky TOC sidebar */}
              <BlogTOC headings={headings} />
            </div>
          </div>
        </section>

        {/* ── Related posts ─────────────────────────────────────────────── */}
        {relatedPosts.length > 0 && (
          <section style={{ borderTop: '1px solid var(--border)', padding: '56px 0 96px' }}>
            <div className="container">
              <div style={{ marginBottom: 8 }} className="font-mono">
                <span style={{ fontSize: 11, color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
                  Read next
                </span>
              </div>
              <h2 style={{ fontSize: 28, fontWeight: 700, color: 'var(--text)', marginBottom: 28, fontFamily: 'var(--font-sans)' }}>
                More from the engineering desk.
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
                {relatedPosts.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/blog/${related.slug}`}
                    style={{ textDecoration: 'none' }}
                  >
                    <div className="card card-hover" style={{ padding: 20, height: '100%' }}>
                      <span
                        className="tag"
                        style={{
                          background: `${related.accent}1A`,
                          color: related.accent,
                          borderColor: `${related.accent}44`,
                          fontSize: 10,
                        }}
                      >
                        {related.category}
                      </span>
                      <h4 style={{ fontSize: 16, fontWeight: 600, marginTop: 12, lineHeight: 1.4, color: 'var(--text)' }}>
                        {related.title}
                      </h4>
                      <p style={{ fontSize: 13, color: 'var(--text-2)', marginTop: 8, lineHeight: 1.6 }} className="line-clamp-2">
                        {related.excerpt}
                      </p>
                      <div style={{ marginTop: 12, fontSize: 12, color: 'var(--text-3)' }}>
                        {related.readTime} · {related.date}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </>
  );
}
