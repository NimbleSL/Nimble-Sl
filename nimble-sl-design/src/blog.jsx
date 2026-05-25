// Blog listing + Single post

const BlogList = ({ onNav }) => {
  const [pillar, setPillar] = React.useState('All');
  const pillars = ['All', 'Cost & Decision', 'Engineering Deep-Dive', 'Industry Guide', 'Product-Led'];

  const featured = {
    cat: 'Engineering Deep-Dive', tag: 'AI / ML',
    title: 'Fraud Detection with Graph Neural Networks: A 96% Accuracy Case Study',
    sub: 'How we replaced a rules engine with an R-GCN, what we learned, and what we\'d do differently next time.',
    author: 'Sajid Parvez', role: 'Head of AI', read: '18 min', date: 'May 20, 2026', accent: '#A855F7'
  };

  const posts = [
    { cat: 'Cost & Decision', tag: 'FinTech', title: 'How Much Does It Cost to Build a FinTech App in 2026?', sub: 'Real numbers from 14 NimbleSL FinTech projects.', read: '12 min', date: 'May 18', accent: '#3B82F6' },
    { cat: 'Engineering', tag: 'Mobile', title: 'Offline-First Mobile Apps with Flutter: How We Built FieldOps', sub: 'CouchDB sync, conflict resolution, 8-hour offline windows.', read: '14 min', date: 'May 14', accent: '#10B981' },
    { cat: 'Cost & Decision', tag: 'Offshore', title: 'In-House vs Outsourcing: A CTO\'s Complete Cost Analysis', sub: 'Loaded cost models, ramp time, and the hidden bills.', read: '9 min', date: 'May 10', accent: '#3B82F6' },
    { cat: 'Industry Guide', tag: 'InsurTech', title: 'InsurTech Platform Development: Features, Costs & Timeline', sub: 'A 32-page guide. PDF gated. Worth the email.', read: '24 min', date: 'May 6', accent: '#06B6D4' },
    { cat: 'Engineering', tag: 'AI / ML', title: 'Building a RAG-Based Chatbot: Architecture & Lessons Learned', sub: 'Citations, eval suites, prompt versioning in prod.', read: '16 min', date: 'May 2', accent: '#A855F7' },
    { cat: 'Cost & Decision', tag: 'Staff Aug', title: 'Staff Augmentation vs Dedicated Team: Which Model Fits Your Project?', sub: 'A decision matrix from 6 client examples.', read: '8 min', date: 'Apr 28', accent: '#3B82F6' },
    { cat: 'Industry Guide', tag: 'FinTech', title: 'Complete Guide to Building a Digital Wallet in 2026', sub: 'Architecture, payment rails, regulations, costs.', read: '21 min', date: 'Apr 24', accent: '#3B82F6' },
    { cat: 'Engineering', tag: 'Architecture', title: 'Microservices vs Monolith: When to Make the Switch', sub: 'Five projects, five different answers.', read: '11 min', date: 'Apr 20', accent: '#FCD34D' },
    { cat: 'Product-Led', tag: 'Showroom', title: 'Meet PayFlow: Our Pre-Built FinTech Platform (Try the Demo)', sub: 'A walkthrough of every screen in our wallet platform.', read: '10 min', date: 'Apr 16', accent: '#3B82F6' }
  ];

  return (
    <div className="page">
      <NavBar active="blog" onNav={onNav} />

      {/* Hero */}
      <section style={{ padding: '64px 0 32px', position: 'relative', overflow: 'hidden' }}>
        <div className="mesh-bg" />
        <div className="container" style={{ position: 'relative' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', gap: 32, flexWrap: 'wrap' }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: 20 }}><span className="ev-dot" />Nimble Insights</div>
              <h1 style={{ fontSize: 56 }}>From the<br/><span className="grad-blue">engineering desk.</span></h1>
              <p className="mt-6" style={{ fontSize: 17, maxWidth: 560 }}>
                Cost analyses, deep-dives, industry guides, and product walkthroughs. No "5 tips for software development" filler — only things our team actually shipped.
              </p>
            </div>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              <div style={{ position: 'relative' }}>
                <Icons.search size={14} style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-3)' }} />
                <input placeholder="Search posts…" style={{
                  padding: '10px 14px 10px 38px',
                  background: 'var(--surface)', border: '1px solid var(--border)',
                  borderRadius: 8, color: 'var(--text)', fontFamily: 'inherit', fontSize: 13, width: 240, outline: 'none'
                }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section style={{ padding: '24px 0', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {pillars.map(p => (
              <button key={p} onClick={() => setPillar(p)} style={{
                padding: '8px 16px', borderRadius: 999,
                background: pillar === p ? 'var(--blue)' : 'var(--surface)',
                border: `1px solid ${pillar === p ? 'var(--blue)' : 'var(--border)'}`,
                color: pillar === p ? 'white' : 'var(--text-2)',
                fontSize: 13, fontWeight: 500, cursor: 'pointer', fontFamily: 'inherit'
              }}>{p}</button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured */}
      <section style={{ padding: '48px 0' }}>
        <div className="container">
          <div className="mono text-xs text-3" style={{ marginBottom: 16, textTransform: 'uppercase', letterSpacing: '0.1em' }}>★ Featured</div>
          <div className="card card-hover" style={{ padding: 0, overflow: 'hidden', cursor: 'pointer' }} onClick={() => onNav('blog-post')}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 0 }}>
              <div style={{
                background: `linear-gradient(135deg, ${featured.accent}44, ${featured.accent}08)`,
                minHeight: 320, position: 'relative', overflow: 'hidden'
              }}>
                <div className="dot-bg" style={{ position: 'absolute', inset: 0, opacity: 0.5 }} />
                <div style={{ position: 'absolute', bottom: 32, left: 32 }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 96, color: featured.accent, opacity: 0.85, letterSpacing: '-0.04em', lineHeight: 0.9 }}>96%</div>
                  <div className="mono text-xs text-2 mt-2" style={{ textTransform: 'uppercase', letterSpacing: '0.1em' }}>Detection accuracy in production</div>
                </div>
              </div>
              <div style={{ padding: 40 }}>
                <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
                  <span className="tag tag-purple" style={{ fontSize: 11 }}>{featured.tag}</span>
                  <span className="tag" style={{ fontSize: 11 }}>{featured.cat}</span>
                </div>
                <h2 style={{ fontSize: 32, lineHeight: 1.15 }}>{featured.title}</h2>
                <p className="mt-4" style={{ fontSize: 15 }}>{featured.sub}</p>
                <div className="mt-8" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <Avatar initials="SP" size={40} />
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 14 }}>{featured.author}</div>
                    <div className="mono text-xs text-3">{featured.role}</div>
                  </div>
                  <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 12, color: 'var(--text-3)', fontSize: 12 }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><Icons.clock size={11} />{featured.read}</span>
                    <span>·</span>
                    <span>{featured.date}</span>
                  </div>
                </div>
                <button className="btn btn-primary" style={{ marginTop: 24 }}>Read the case study <Icons.arrow size={14} /></button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Posts grid */}
      <section style={{ padding: '0 0 96px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {posts.map(p => (
              <div key={p.title} className="card card-hover" style={{ padding: 0, overflow: 'hidden', cursor: 'pointer' }} onClick={() => onNav('blog-post')}>
                <div style={{
                  height: 160, background: `linear-gradient(135deg, ${p.accent}33, ${p.accent}08)`,
                  borderBottom: '1px solid var(--border)', position: 'relative'
                }}>
                  <div className="dot-bg" style={{ position: 'absolute', inset: 0, opacity: 0.4 }} />
                  <div style={{ position: 'absolute', bottom: 16, left: 16, fontFamily: 'var(--font-mono)', fontWeight: 800, fontSize: 32, color: p.accent, opacity: 0.7 }}>{p.tag.replace(/\s/g,'').slice(0,3).toUpperCase()}</div>
                </div>
                <div style={{ padding: 20 }}>
                  <div style={{ display: 'flex', gap: 6, marginBottom: 10 }}>
                    <span className="tag" style={{ fontSize: 10, background: `${p.accent}1A`, color: p.accent, borderColor: `${p.accent}44` }}>{p.tag}</span>
                    <span className="tag" style={{ fontSize: 10 }}>{p.cat}</span>
                  </div>
                  <h3 style={{ fontSize: 17, lineHeight: 1.35 }}>{p.title}</h3>
                  <p className="text-xs mt-3">{p.sub}</p>
                  <div className="text-xs text-3 mt-4" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><Icons.clock size={11} />{p.read}</span>
                    <span>·</span>
                    <span>{p.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Newsletter cta */}
          <div className="card mt-12" style={{ padding: 32, background: 'linear-gradient(135deg, rgba(59,130,246,0.10), rgba(6,182,212,0.06))', borderColor: 'rgba(59,130,246,0.3)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, alignItems: 'center' }}>
              <div>
                <h3 style={{ fontSize: 22 }}>Get The Nimble Insider</h3>
                <p className="text-sm mt-3">Bi-weekly engineering deep-dives, cost playbooks, and case studies. 2,400+ subscribers.</p>
              </div>
              <div style={{ display: 'flex', gap: 8 }}>
                <input placeholder="you@company.com" style={{
                  flex: 1, padding: '12px 14px', background: 'var(--surface)', border: '1px solid var(--border)',
                  borderRadius: 8, color: 'var(--text)', fontFamily: 'inherit', fontSize: 14, outline: 'none'
                }} />
                <button className="btn btn-primary">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

const BlogPost = ({ onNav }) => {
  return (
    <div className="page">
      <NavBar active="blog" onNav={onNav} />

      {/* Header */}
      <section style={{ padding: '48px 0 32px', position: 'relative' }}>
        <div className="container" style={{ maxWidth: 880, margin: '0 auto' }}>
          <div className="mono text-xs" style={{ color: 'var(--text-3)', marginBottom: 28, display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ cursor: 'pointer' }} onClick={() => onNav('homepage')}>Home</span>
            <Icons.arrow size={10} />
            <span style={{ cursor: 'pointer' }} onClick={() => onNav('blog')}>Blog</span>
            <Icons.arrow size={10} />
            <span style={{ color: 'var(--text)' }}>Fraud Detection with GNNs</span>
          </div>

          <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
            <span className="tag tag-purple">AI / ML</span>
            <span className="tag">Engineering Deep-Dive</span>
            <span className="tag tag-emerald">Case Study</span>
          </div>

          <h1 style={{ fontSize: 52, lineHeight: 1.08 }}>
            Fraud Detection with Graph Neural Networks: <span className="grad-blue">A 96% Accuracy Case Study</span>
          </h1>
          <p className="mt-6" style={{ fontSize: 18 }}>
            How we replaced a SQL rules engine with a heterogeneous R-GCN in 6 weeks, hit 96% accuracy in production, and what we'd do differently next time.
          </p>

          <div className="mt-8" style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <Avatar initials="SP" size={48} />
            <div>
              <div style={{ fontWeight: 600 }}>Sajid Parvez</div>
              <div className="mono text-xs text-3">Head of AI · NimbleSL</div>
            </div>
            <div style={{ marginLeft: 'auto', display: 'flex', gap: 16, color: 'var(--text-3)', fontSize: 13 }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><Icons.clock size={13} /> 18 min read</span>
              <span>·</span>
              <span>May 20, 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* Hero image */}
      <section style={{ padding: '0 0 32px' }}>
        <div className="container">
          <div style={{
            maxWidth: 1120, margin: '0 auto',
            height: 420,
            background: 'linear-gradient(135deg, rgba(168,85,247,0.3), rgba(168,85,247,0.04))',
            border: '1px solid rgba(168,85,247,0.3)',
            borderRadius: 16, position: 'relative', overflow: 'hidden'
          }}>
            <div className="dot-bg" style={{ position: 'absolute', inset: 0, opacity: 0.4 }} />
            <div style={{ position: 'absolute', inset: 32, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div className="mono text-xs text-2" style={{ textTransform: 'uppercase', letterSpacing: '0.1em' }}>// Fraud detection · R-GCN architecture</div>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 120, color: '#A855F7', opacity: 0.9, letterSpacing: '-0.04em', lineHeight: 0.9 }}>96%</div>
                <div className="mono text-sm text-2 mt-3">Detection accuracy in production · 2.4M training claims</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Body + TOC */}
      <section style={{ padding: '32px 0 96px' }}>
        <div className="container">
          <div style={{ maxWidth: 1120, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 240px', gap: 56, alignItems: 'start' }}>
            <article style={{ fontSize: 17, lineHeight: 1.75, color: 'var(--text-2)' }}>
              {/* Intro */}
              <p>
                In August 2025, <strong style={{ color: 'var(--text)' }}>Blackstone Vale Insurance</strong> approached us with a familiar problem: their fraud detection system was technically working, but it was making everyone's lives worse.
              </p>
              <p className="mt-4">
                Their existing rules engine — a SQL-based ruleset written in 2019 — was flagging <strong style={{ color: 'var(--text)' }}>1 in 4 legitimate claims</strong> for manual review while missing entire fraud rings that worked as networks. Adjusters were drowning. Customer churn was spiking. The board gave their CTO 8 weeks and a $60K budget to fix it.
              </p>

              <h2 className="mt-12" style={{ fontSize: 32 }} id="why-gnn">Why a Graph Neural Network?</h2>
              <p className="mt-4">
                Classical fraud models — gradient-boosted trees, logistic regression, even most deep learning — treat each claim as an independent row. They work great when fraud signals are local: this transaction is too big, this user just changed their address.
              </p>
              <p className="mt-4">
                But real-world fraud rings work as <em style={{ color: 'var(--text)' }}>networks</em>. Five claims, five different claimants, five different addresses — all routing repairs through the same body shop. That signal is invisible to a row-by-row model. You need a model that can see the graph.
              </p>

              {/* Code block */}
              <div className="card mt-8" style={{ padding: 0, overflow: 'hidden' }}>
                <div style={{ padding: '8px 14px', background: 'rgba(11,15,27,0.6)', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div className="mono text-xs text-3">model.py · R-GCN definition</div>
                  <Icons.copy size={12} style={{ color: 'var(--text-3)', cursor: 'pointer' }} />
                </div>
                <pre style={{ margin: 0, padding: 20, fontFamily: 'var(--font-mono)', fontSize: 13, lineHeight: 1.7, color: 'var(--text-2)', overflow: 'auto' }}>
{`class FraudRGCN(nn.Module):
    def __init__(self, num_node_types=6, num_edge_types=14, hidden_dim=128):
        super().__init__()
        self.embeddings = nn.ModuleDict({
            nt: nn.Embedding(VOCABS[nt], hidden_dim) for nt in NODE_TYPES
        })
        self.conv1 = RGCNConv(hidden_dim, hidden_dim, num_edge_types)
        self.conv2 = RGCNConv(hidden_dim, hidden_dim, num_edge_types)
        self.classifier = nn.Linear(hidden_dim, 2)`}
                </pre>
              </div>

              <h2 className="mt-12" style={{ fontSize: 32 }} id="results">The results, 90 days in</h2>
              <p className="mt-4">
                We shipped to production on Sept 15, 2025. After 90 days the numbers were unambiguous:
              </p>

              <div className="mt-6" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
                {[
                  { v: '96%', l: 'Accuracy', c: 'var(--emerald-2)' },
                  { v: '11min', l: 'Avg review time', c: 'var(--blue-2)' },
                  { v: '14', l: 'Fraud rings caught', c: '#C084FC' },
                  { v: '0', l: 'False negatives', c: '#FCD34D' }
                ].map(s => (
                  <div key={s.l} className="card" style={{ padding: 16, textAlign: 'center' }}>
                    <div style={{ fontSize: 28, fontWeight: 800, fontFamily: 'var(--font-display)', color: s.c }}>{s.v}</div>
                    <div className="text-xs text-3 mt-2">{s.l}</div>
                  </div>
                ))}
              </div>

              {/* Inline CTA */}
              <div className="card mt-12" style={{ padding: 24, background: 'linear-gradient(135deg, rgba(168,85,247,0.10), rgba(168,85,247,0.02))', borderColor: 'rgba(168,85,247,0.3)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <Icons.sparkle size={28} style={{ color: '#C084FC' }} />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 700, fontSize: 16 }}>Building something similar?</div>
                    <div className="text-sm mt-2">Get a scoped AI/ML estimate in 3 minutes — based on this and 5 other projects.</div>
                  </div>
                  <button className="btn btn-primary" onClick={() => onNav('estimator')}>Try AI Estimator <Icons.arrow size={14}/></button>
                </div>
              </div>

              <h2 className="mt-12" style={{ fontSize: 32 }} id="lessons">What we'd do differently</h2>
              <p className="mt-4">
                Three things stand out, 90 days in. First, we'd start the shadow-mode rollout earlier — running the GNN alongside the rules engine for 6 weeks before cutover gave us labeled data and built adjuster trust faster than any docs ever could.
              </p>
              <p className="mt-4">
                Second, we underinvested in <strong style={{ color: 'var(--text)' }}>explainability</strong>. SHAP values were table-stakes; what adjusters really wanted was a "why-am-I-seeing-this-claim" view showing the graph path the model walked. We added it in week 8 — should have been week 2.
              </p>
              <p className="mt-4">
                Third, drift monitoring needs to be load-bearing from day one. Two weeks after launch the model started drifting because a new repair-shop chain hit the network and our entity resolution wasn't normalizing it. Without our nightly drift checks, we'd have shipped degraded accuracy for weeks.
              </p>

              {/* Author bio */}
              <div className="card mt-16" style={{ padding: 24 }}>
                <div style={{ display: 'flex', gap: 16 }}>
                  <Avatar initials="SP" size={56} />
                  <div>
                    <div style={{ fontWeight: 700 }}>Sajid Parvez</div>
                    <div className="text-sm text-2 mt-2">PhD ML (BUET), 9 years across recommender systems and risk modeling. Heads NimbleSL's AI practice. Writes mostly about graph ML and applied LLM systems.</div>
                    <div className="mt-4" style={{ display: 'flex', gap: 8 }}>
                      <Icons.linkedin size={14} style={{ color: 'var(--text-3)', cursor: 'pointer' }} />
                      <Icons.github size={14} style={{ color: 'var(--text-3)', cursor: 'pointer' }} />
                      <Icons.twitter size={14} style={{ color: 'var(--text-3)', cursor: 'pointer' }} />
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* Sticky sidebar */}
            <aside style={{ position: 'sticky', top: 92 }}>
              <div className="mono text-xs text-3" style={{ marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.1em' }}>On this page</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {[
                  { l: 'Why a GNN?', a: 'var(--blue-2)' },
                  { l: 'Building the graph' },
                  { l: 'The R-GCN model' },
                  { l: 'Eval suite design' },
                  { l: 'Shadow-mode rollout' },
                  { l: 'Results, 90 days in' },
                  { l: 'What we\'d do differently' }
                ].map((s, i) => (
                  <a key={i} style={{
                    fontSize: 13, color: s.a || 'var(--text-2)',
                    cursor: 'pointer', textDecoration: 'none',
                    padding: '4px 0 4px 12px',
                    borderLeft: `2px solid ${s.a ? 'var(--blue)' : 'transparent'}`
                  }}>{s.l}</a>
                ))}
              </div>

              <div style={{ height: 1, background: 'var(--border)', margin: '24px 0' }} />

              <div className="mono text-xs text-3" style={{ marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Share</div>
              <div style={{ display: 'flex', gap: 8 }}>
                {[Icons.twitter, Icons.linkedin, Icons.link, Icons.copy].map((I, i) => (
                  <button key={i} style={{ width: 32, height: 32, borderRadius: 7, background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--text-2)', display: 'grid', placeItems: 'center', cursor: 'pointer' }}>
                    <I size={13} />
                  </button>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related */}
      <section style={{ padding: '0 0 96px', borderTop: '1px solid var(--border)', paddingTop: 56 }}>
        <div className="container">
          <SectionHeader eyebrow="Read next" title="More from the engineering desk." />
          <div className="mt-8" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
            {[
              { tag: 'AI / ML', title: 'Building a RAG-Based Chatbot: Architecture & Lessons Learned', c: '#A855F7' },
              { tag: 'Mobile', title: 'Offline-First Mobile Apps with Flutter: How We Built FieldOps', c: '#10B981' },
              { tag: 'Architecture', title: 'Microservices vs Monolith: When to Make the Switch', c: '#FCD34D' }
            ].map(p => (
              <div key={p.title} className="card card-hover" style={{ padding: 20, cursor: 'pointer' }}>
                <span className="tag" style={{ background: `${p.c}1A`, color: p.c, borderColor: `${p.c}44`, fontSize: 10 }}>{p.tag}</span>
                <h4 style={{ fontSize: 16, marginTop: 12 }}>{p.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

Object.assign(window, { BlogList, BlogPost });
