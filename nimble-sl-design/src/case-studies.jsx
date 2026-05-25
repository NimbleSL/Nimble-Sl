// Case studies list + FraudShield detail

const CaseStudiesList = ({ onNav }) => {
  const [industry, setIndustry] = React.useState('All');
  const cases = [
    { slug: 'fraudshield', product: 'FraudShield AI', client: 'Blackstone Vale Insurance', industry: 'InsurTech', metric: '96% detection accuracy', sub: 'GNN-based fraud system', accent: '#A855F7', tech: ['PyTorch','GNN','FastAPI'] },
    { slug: 'payflow', product: 'PayFlow', client: 'Rosachy', industry: 'FinTech', metric: '5 currencies, 0 downtime', sub: 'Cross-border digital wallet', accent: '#3B82F6', tech: ['Angular','Node.js','Stripe'] },
    { slug: 'fieldops', product: 'FieldOps', client: 'North Avenue Logistics', industry: 'Logistics', metric: '8 hr offline sync', sub: 'Mobile-first field automation', accent: '#10B981', tech: ['Flutter','CouchDB','gRPC'] },
    { slug: 'claimwise', product: 'ClaimWise', client: 'HayaaCola Insurance', industry: 'InsurTech', metric: '70% faster claims', sub: 'End-to-end digital insurance', accent: '#06B6D4', tech: ['React','Python','Redis'] },
    { slug: 'propnest', product: 'PropNest', client: 'CH15 Realty', industry: 'PropTech', metric: '12k+ listings', sub: '360° property ecosystem', accent: '#F43F5E', tech: ['Next.js','PostGIS','Mapbox'] },
    { slug: 'authgate', product: 'AuthGate', client: 'WPEDO', industry: 'Security', metric: '< 50ms auth', sub: 'Unified enterprise IAM', accent: '#F59E0B', tech: ['Go','Keycloak','Redis'] },
    { slug: 'hiresync', product: 'HireSync', client: 'Bangladesh Gov.', industry: 'HR Tech', metric: '50k applicants/year', sub: 'Civic-scale recruitment', accent: '#3B82F6', tech: ['React','.NET','Elastic'] },
    { slug: 'caseflow', product: 'CaseFlow', client: 'EU legal firm', industry: 'Enterprise', metric: '4.2x case throughput', sub: 'AI case management', accent: '#06B6D4', tech: ['Angular','Python','Claude'] }
  ];
  const tags = ['All','FinTech','InsurTech','PropTech','Logistics','AI/ML','Security','HR Tech','Enterprise'];
  const filtered = industry === 'All' ? cases : cases.filter(c => c.industry === industry);

  return (
    <div className="page">
      <NavBar active="case-studies" onNav={onNav} />

      <section style={{ padding: '72px 0 32px', position: 'relative', overflow: 'hidden' }}>
        <div className="mesh-bg" />
        <div className="container" style={{ position: 'relative', textAlign: 'center' }}>
          <div className="eyebrow" style={{ marginBottom: 20 }}><span className="ev-dot" />Case Studies</div>
          <h1 style={{ fontSize: 56 }}>50 projects shipped.<br/><span className="grad-blue">8 we can talk about publicly.</span></h1>
          <p className="mt-6" style={{ fontSize: 18, maxWidth: 600, margin: '24px auto 0' }}>
            Real metrics, real architecture diagrams, real client testimonials. The rest are under NDA — ask in your discovery call.
          </p>
        </div>
      </section>

      <section style={{ padding: '24px 0 32px', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap' }}>
            {tags.map(t => (
              <button key={t} onClick={() => setIndustry(t)} style={{
                padding: '8px 16px', borderRadius: 999,
                background: industry === t ? 'var(--blue)' : 'var(--surface)',
                border: `1px solid ${industry === t ? 'var(--blue)' : 'var(--border)'}`,
                color: industry === t ? 'white' : 'var(--text-2)',
                fontSize: 13, fontWeight: 500, cursor: 'pointer', fontFamily: 'inherit'
              }}>{t}</button>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '48px 0 96px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20 }}>
            {filtered.map(c => (
              <div key={c.slug} className="card card-hover" style={{ padding: 0, overflow: 'hidden', cursor: 'pointer' }} onClick={() => c.slug === 'fraudshield' && onNav('case-study')}>
                <div style={{
                  height: 220,
                  background: `linear-gradient(135deg, ${c.accent}33, ${c.accent}08)`,
                  borderBottom: '1px solid var(--border)',
                  position: 'relative',
                  overflow: 'hidden',
                  padding: 24,
                  display: 'flex', flexDirection: 'column', justifyContent: 'space-between'
                }}>
                  <div className="dot-bg" style={{ position: 'absolute', inset: 0, opacity: 0.4 }} />
                  <div style={{ position: 'relative', display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                    <span className="tag" style={{ background: `${c.accent}1A`, color: c.accent, borderColor: `${c.accent}44`, fontSize: 11 }}>{c.industry}</span>
                    <Icons.external size={16} style={{ color: 'var(--text-3)' }} />
                  </div>
                  <div style={{ position: 'relative' }}>
                    <div style={{
                      fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 56, letterSpacing: '-0.03em',
                      lineHeight: 1, color: c.accent, opacity: 0.9
                    }}>{c.metric.split(' ')[0]}</div>
                    <div className="mono text-xs text-2 mt-3" style={{ textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                      {c.metric.split(' ').slice(1).join(' ')}
                    </div>
                  </div>
                </div>
                <div style={{ padding: 24 }}>
                  <h3 style={{ fontSize: 22 }}>{c.product}</h3>
                  <p className="text-sm mt-2">{c.sub} · for {c.client}</p>
                  <div style={{ display: 'flex', gap: 6, marginTop: 16, justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', gap: 6 }}>
                      {c.tech.map(t => <span key={t} className="tag" style={{ fontSize: 10 }}>{t}</span>)}
                    </div>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 4, color: 'var(--blue-2)', fontSize: 12, fontWeight: 600 }}>
                      Read case <Icons.arrow size={12} />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

const CaseStudyDetail = ({ onNav }) => {
  return (
    <div className="page">
      <NavBar active="case-studies" onNav={onNav} />

      {/* Hero */}
      <section style={{ padding: '48px 0 64px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(900px 500px at 50% 0%, rgba(168,85,247,0.18), transparent 60%)' }} />
        <div className="container" style={{ position: 'relative' }}>
          <div className="mono text-xs" style={{ color: 'var(--text-3)', marginBottom: 28, display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ cursor: 'pointer' }} onClick={() => onNav('homepage')}>Home</span>
            <Icons.arrow size={10} />
            <span style={{ cursor: 'pointer' }} onClick={() => onNav('case-studies')}>Case Studies</span>
            <Icons.arrow size={10} />
            <span style={{ color: 'var(--text)' }}>FraudShield AI · Blackstone Vale</span>
          </div>

          <div style={{ display: 'flex', gap: 8, marginBottom: 24, flexWrap: 'wrap' }}>
            <span className="tag tag-purple">InsurTech</span>
            <span className="tag tag-amber">AI / ML</span>
            <span className="tag">PyTorch</span>
            <span className="tag">Graph Neural Network</span>
            <span className="tag">FastAPI</span>
            <span className="tag">AWS SageMaker</span>
          </div>

          <h1 style={{ fontSize: 64, maxWidth: 1000 }}>
            FraudShield AI: how we built a <span className="grad-blue">96% accurate</span> fraud detection system in 6 weeks.
          </h1>
          <p className="mt-6" style={{ fontSize: 19, maxWidth: 760 }}>
            Blackstone Vale Insurance had a 71%-accurate rules engine flagging legitimate claims and missing real fraud. They needed a production-grade ML system live before EOY — and three US shops had quoted $260K and 5 months. We shipped for $48K in 6 weeks.
          </p>

          {/* metric cards */}
          <div style={{ marginTop: 56, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
            <MetricCard value="96%" label="Detection accuracy" accent="emerald" sub="vs 71% on legacy rules engine" />
            <MetricCard value="30–60s" label="Per-claim classification" accent="blue" sub="streaming via FastAPI + Redis" />
            <MetricCard value="0" label="False negatives in 90 days" accent="purple" sub="recall = 1.0 on flagged set" />
            <MetricCard value="$210K" label="Saved vs US quote" accent="amber" sub="$48K total project cost" />
          </div>
        </div>
      </section>

      {/* Body */}
      <section style={{ padding: '32px 0 96px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 280px', gap: 56, alignItems: 'start' }}>
            <div>
              {/* The Challenge */}
              <div>
                <div className="eyebrow" style={{ background: 'rgba(244,63,94,0.08)', color: '#FDA4AF', borderColor: 'rgba(244,63,94,0.3)' }}>The challenge</div>
                <h2 className="mt-4">Three years of false positives.</h2>
                <p className="mt-4" style={{ fontSize: 16 }}>
                  Blackstone Vale processes 38,000 claims annually across motor, home, and commercial lines. Their legacy fraud engine — a SQL-based ruleset written in 2019 — was flagging <b style={{ color: 'var(--text)' }}>1 in 4 legitimate claims</b> for manual review, jamming up adjusters and pushing real fraud through during the backlog.
                </p>
                <p className="mt-4" style={{ fontSize: 16 }}>
                  When their CTO ran the numbers, the rules engine was netting them <i>negative</i> ROI: $1.4M in fraud caught against $3.2M in adjuster time, customer churn from delayed claims, and missed fraud rings working as networks. They needed a system that understood relationships — not just thresholds.
                </p>
                <p className="mt-4" style={{ fontSize: 16 }}>
                  Three US ML consultancies quoted between $240K and $290K with 4–6 month timelines. Their board gave them 8 weeks and a $60K budget.
                </p>
              </div>

              {/* Approach */}
              <div className="mt-16">
                <div className="eyebrow">Our approach</div>
                <h2 className="mt-4">Graph the network. Score the cluster.</h2>
                <p className="mt-4" style={{ fontSize: 16 }}>
                  Classical fraud models treat each claim as an independent row. But real fraud rings work as networks — shared addresses, repair shops, license plates, phone numbers. We built a heterogeneous graph neural network (R-GCN) that learns from <b style={{ color: 'var(--text)' }}>the relationships between entities</b>, not just the claim features.
                </p>

                {/* Architecture diagram */}
                <div className="card mt-8" style={{ padding: 24, background: 'rgba(11,15,27,0.6)' }}>
                  <div className="mono text-xs text-3" style={{ marginBottom: 16 }}>// FraudShield AI · architecture</div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
                    {[
                      { layer: 'INGEST', items: ['Claim webhook', 'KYC + OFAC', 'Repair shop DB', 'Police reports'], c: '#60A5FA' },
                      { layer: 'GRAPH', items: ['Neo4j', '6 node types', '14 edge types', 'Daily snapshot'], c: '#67E8F9' },
                      { layer: 'MODEL', items: ['R-GCN (PyTorch)', '4 GNN layers', 'XGBoost ensemble', 'Eval suite · 240 tests'], c: '#C084FC' },
                      { layer: 'SERVE', items: ['FastAPI', 'Redis cache', 'AWS SageMaker', 'Grafana dashboards'], c: '#34D399' }
                    ].map(col => (
                      <div key={col.layer}>
                        <div className="mono text-xs" style={{ color: col.c, marginBottom: 8, fontWeight: 600 }}>{col.layer}</div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                          {col.items.map(i => (
                            <div key={i} style={{
                              padding: '8px 10px',
                              background: 'var(--surface-2)',
                              border: `1px solid ${col.c}44`,
                              borderRadius: 6,
                              fontSize: 11,
                              fontFamily: 'var(--font-mono)',
                              color: 'var(--text)'
                            }}>{i}</div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 text-xs text-3 mono" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <Icons.zap size={11} /> 32ms p99 inference · 2.4M historical claims used for training
                  </div>
                </div>

                <p className="mt-6" style={{ fontSize: 16 }}>
                  Key decision: we ran the GNN <b style={{ color: 'var(--text)' }}>alongside</b> their existing rules engine for the first 6 weeks of production. Every claim got two scores — model + rules — and adjusters reviewed disagreements. That gave us labeled data fast, built trust with the claims team, and let us tune the model on real production drift before fully cutting over.
                </p>
              </div>

              {/* The Solution */}
              <div className="mt-16">
                <div className="eyebrow" style={{ background: 'rgba(16,185,129,0.08)', color: 'var(--emerald-2)', borderColor: 'rgba(16,185,129,0.3)' }}>The solution</div>
                <h2 className="mt-4">What's in production today.</h2>

                {/* screenshot row */}
                <div className="mt-6" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <div className="placeholder" style={{ height: 220 }}>Adjuster dashboard<br/><span style={{opacity:0.5}}>Real-time queue, risk scores, network view</span></div>
                  <div className="placeholder" style={{ height: 220 }}>Claim explainability<br/><span style={{opacity:0.5}}>SHAP values + graph path highlights</span></div>
                  <div className="placeholder" style={{ height: 220 }}>Network graph viz<br/><span style={{opacity:0.5}}>Sigma.js — repair-shop clusters</span></div>
                  <div className="placeholder" style={{ height: 220 }}>Drift monitoring<br/><span style={{opacity:0.5}}>Grafana — feature & label drift, alerts</span></div>
                </div>

                <div className="mt-6" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12 }}>
                  {[
                    { i: Icons.brain, t: 'R-GCN with 4 GNN layers' , d: 'Heterogeneous graph over claims, claimants, repair shops, addresses, and phone numbers.' },
                    { i: Icons.gauge, t: 'Real-time scoring API', d: '< 60s per claim, including graph traversal and SHAP explanation generation.' },
                    { i: Icons.users, t: 'Adjuster console', d: 'Risk score, network view, top contributing features, one-click escalation.' },
                    { i: Icons.shield, t: 'Drift + bias monitoring', d: 'Daily drift checks, fairness audit by claim type, automated rollback on anomaly.' }
                  ].map(f => (
                    <div key={f.t} className="card" style={{ padding: 18 }}>
                      <div style={{ display: 'flex', alignItems: 'start', gap: 12 }}>
                        <f.i size={18} style={{ color: 'var(--emerald-2)', marginTop: 2 }} />
                        <div>
                          <div style={{ fontWeight: 700 }}>{f.t}</div>
                          <p className="text-xs mt-2">{f.d}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <button className="btn btn-primary"><Icons.play size={14} /> Try the live demo</button>
                </div>
              </div>

              {/* Results */}
              <div className="mt-16">
                <div className="eyebrow" style={{ background: 'rgba(245,158,11,0.08)', color: '#FCD34D', borderColor: 'rgba(245,158,11,0.3)' }}>Results & impact</div>
                <h2 className="mt-4">Before vs After.</h2>
                <div className="mt-6" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <div className="card" style={{ padding: 24 }}>
                    <div className="mono text-xs text-3" style={{ marginBottom: 14 }}>BEFORE · Rules engine</div>
                    {[
                      ['Detection accuracy', '71%'],
                      ['Avg review time', '4.2 hrs'],
                      ['False positive rate', '24%'],
                      ['Fraud rings caught', '2 / yr']
                    ].map(([k,v]) => (
                      <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid var(--border)' }}>
                        <span className="text-sm text-2">{k}</span>
                        <span className="mono text-sm" style={{ color: '#FDA4AF', fontWeight: 600 }}>{v}</span>
                      </div>
                    ))}
                  </div>
                  <div className="card" style={{ padding: 24, background: 'linear-gradient(180deg, rgba(16,185,129,0.10), rgba(16,185,129,0.02))', borderColor: 'rgba(16,185,129,0.3)' }}>
                    <div className="mono text-xs" style={{ marginBottom: 14, color: 'var(--emerald-2)' }}>AFTER · FraudShield AI</div>
                    {[
                      ['Detection accuracy', '96%'],
                      ['Avg review time', '11 min'],
                      ['False positive rate', '3.8%'],
                      ['Fraud rings caught', '14 / 90 days']
                    ].map(([k,v]) => (
                      <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid var(--border)' }}>
                        <span className="text-sm text-2">{k}</span>
                        <span className="mono text-sm" style={{ color: 'var(--emerald-2)', fontWeight: 700 }}>{v}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Testimonial */}
              <div className="mt-16 card" style={{ padding: 40 }}>
                <div style={{ fontSize: 56, color: 'var(--blue-2)', lineHeight: 0.5, marginBottom: 12 }}>"</div>
                <p style={{ fontSize: 20, lineHeight: 1.5, color: 'var(--text)' }}>
                  Anik's team understood our domain in week one. By week three they were teaching <i>my</i> data scientists how the R-GCN was learning fraud patterns we'd never spotted manually. The model has been in production for 4 months and hasn't missed a fraud ring yet. Best $48K we've ever spent.
                </p>
                <div className="mt-6" style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <Avatar initials="SP" size={48} />
                  <div>
                    <div style={{ fontWeight: 700 }}>Sarah Patel</div>
                    <div className="text-sm text-2">VP Engineering · Blackstone Vale Insurance</div>
                  </div>
                  <div style={{ marginLeft: 'auto', display: 'flex', gap: 2, color: '#FCD34D' }}>
                    {[1,2,3,4,5].map(s => <Icons.star key={s} size={14} />)}
                  </div>
                </div>
              </div>
            </div>

            {/* Sticky sidebar */}
            <aside style={{ position: 'sticky', top: 92, alignSelf: 'start' }}>
              <div className="card" style={{ padding: 24 }}>
                <div className="mono text-xs text-3" style={{ marginBottom: 12 }}>PROJECT FACTS</div>
                {[
                  ['Client', 'Blackstone Vale Insurance'],
                  ['Industry', 'InsurTech'],
                  ['Engagement', 'Fixed-bid + retainer'],
                  ['Duration', '6 weeks build + 90d support'],
                  ['Cost', '$48,000'],
                  ['Team', '1 PM, 1 ML lead, 2 ML eng, 1 backend, 1 QA'],
                  ['Started', 'Aug 2025'],
                  ['Status', <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, color: 'var(--emerald-2)' }}><span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--emerald)' }} />Live in prod</span>]
                ].map(([k,v]) => (
                  <div key={k} style={{ padding: '8px 0', borderBottom: '1px solid var(--border)', fontSize: 12 }}>
                    <div className="text-3 mono" style={{ textTransform: 'uppercase', fontSize: 10, letterSpacing: '0.1em' }}>{k}</div>
                    <div className="mt-2" style={{ color: 'var(--text)', fontWeight: 500 }}>{v}</div>
                  </div>
                ))}
              </div>
              <div className="card mt-4" style={{ padding: 20, background: 'linear-gradient(135deg, rgba(168,85,247,0.12), rgba(168,85,247,0.02))', borderColor: 'rgba(168,85,247,0.3)' }}>
                <h4 style={{ fontSize: 15 }}>Want something similar?</h4>
                <p className="text-xs mt-3">FraudShield is built. Customize it for your data in 4–8 weeks.</p>
                <button className="btn btn-primary" style={{ width: '100%', marginTop: 12, padding: '8px 12px', fontSize: 12, justifyContent: 'center' }}>Get a custom quote</button>
                <button className="btn btn-soft" style={{ width: '100%', marginTop: 6, padding: '8px 12px', fontSize: 12, justifyContent: 'center' }}><Icons.external size={12}/> Try the demo</button>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related */}
      <section style={{ padding: '0 0 96px', borderTop: '1px solid var(--border)', paddingTop: 64 }}>
        <div className="container">
          <SectionHeader eyebrow="Related" title="More like this." />
          <div className="mt-8" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
            {[
              { name: 'PayFlow · Rosachy', metric: '5 currencies, 0 downtime', c: '#3B82F6' },
              { name: 'ClaimWise · HayaaCola', metric: '70% faster claims', c: '#06B6D4' },
              { name: 'CaseFlow · EU legal firm', metric: '4.2x throughput', c: '#A855F7' }
            ].map(r => (
              <div key={r.name} className="card card-hover" style={{ padding: 24, cursor: 'pointer' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: 12 }}>
                  <div style={{ width: 36, height: 36, borderRadius: 8, background: `${r.c}22`, border: `1px solid ${r.c}44` }} />
                  <Icons.arrow size={14} style={{ color: 'var(--text-3)' }} />
                </div>
                <div style={{ fontWeight: 700, marginTop: 8 }}>{r.name}</div>
                <div className="mono text-xs text-3 mt-2">{r.metric}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

Object.assign(window, { CaseStudiesList, CaseStudyDetail });
