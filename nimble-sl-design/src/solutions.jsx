// Solutions list + PayFlow detail

const SolutionsList = ({ onNav }) => {
  const [filter, setFilter] = React.useState('All');
  const products = [
    { name: 'PayFlow', tag: 'FinTech', tagline: 'Smart Digital Banking, Simplified', metric: 'Real-time cross-border payments', domain: 'payflow.nimblesl.com', accent: '#3B82F6', stack: ['Angular', 'Node.js', 'PostgreSQL'] },
    { name: 'ClaimWise', tag: 'InsurTech', tagline: 'Insurance, Digitized End-to-End', metric: '70% faster claim processing', domain: 'claimwise.nimblesl.com', accent: '#06B6D4', stack: ['React', 'Python', 'Redis'] },
    { name: 'PropNest', tag: 'PropTech', tagline: 'Your 360° Property Ecosystem', metric: '12k+ listings managed', domain: 'propnest.nimblesl.com', accent: '#F43F5E', stack: ['Next.js', 'PostGIS', 'Mapbox'] },
    { name: 'FraudShield AI', tag: 'AI/ML', tagline: '96% Accurate AI Fraud Detection', metric: '30–60s classification', domain: 'fraudshield.nimblesl.com', accent: '#A855F7', stack: ['PyTorch', 'GNN', 'FastAPI'] },
    { name: 'FieldOps', tag: 'Logistics', tagline: 'Field Force Automation That Works Offline', metric: '8 hr offline sync', domain: 'fieldops.nimblesl.com', accent: '#10B981', stack: ['Flutter', 'CouchDB', 'gRPC'] },
    { name: 'AuthGate', tag: 'Security', tagline: 'Enterprise Identity, Unified', metric: 'OAuth2 · OIDC · SAML', domain: 'authgate.nimblesl.com', accent: '#F59E0B', stack: ['Go', 'Keycloak', 'Redis'] },
    { name: 'HireSync', tag: 'HR Tech', tagline: 'Recruitment at Scale, Zero Errors', metric: 'Handles 50k applicants', domain: 'hiresync.nimblesl.com', accent: '#3B82F6', stack: ['React', '.NET', 'Elastic'] },
    { name: 'CaseFlow', tag: 'Enterprise', tagline: 'AI-Assisted Case Management', metric: 'GPT-4 case summarization', domain: 'caseflow.nimblesl.com', accent: '#06B6D4', stack: ['Angular', 'Python', 'Claude'] },
    { name: 'FieldLaw', tag: 'Legal Tech', tagline: 'Field Legal Operations, Digitized', metric: 'GPS-verified service of process', domain: 'fieldlaw.nimblesl.com', accent: '#F43F5E', stack: ['Flutter', 'Node.js', 'PostGIS'] },
    { name: 'SafeGuard', tag: 'Enterprise', tagline: 'Real-Time Case Protection', metric: 'Sub-second alerts', domain: 'safeguard.nimblesl.com', accent: '#A855F7', stack: ['Vue', 'Go', 'WebSocket'] },
    { name: 'TailorHub', tag: 'Retail', tagline: 'Modern Tailor Management', metric: 'Multi-shop inventory', domain: 'tailor.nimblesl.com', accent: '#10B981', stack: ['React', 'Node.js', 'MongoDB'] }
  ];
  const tags = ['All', 'FinTech', 'InsurTech', 'PropTech', 'AI/ML', 'Logistics', 'Security', 'HR Tech', 'Enterprise', 'Legal Tech', 'Retail'];
  const filtered = filter === 'All' ? products : products.filter(p => p.tag === filter);

  return (
    <div className="page">
      <NavBar active="solutions" onNav={onNav} />

      <section style={{ padding: '72px 0 48px', position: 'relative', overflow: 'hidden' }}>
        <div className="mesh-bg" />
        <div className="container" style={{ position: 'relative', textAlign: 'center' }}>
          <div className="eyebrow" style={{ marginBottom: 20 }}>
            <span className="ev-dot" /> The Product Showroom
          </div>
          <h1 style={{ fontSize: 56 }}>Pre-built solutions.<br/><span className="grad-blue">Customized for your business.</span></h1>
          <p className="mt-6" style={{ fontSize: 18, maxWidth: 640, margin: '24px auto 0' }}>
            Eleven production-grade platforms running on real infrastructure. Try them live. Then make them yours — for 40–60% less than building from scratch.
          </p>
        </div>
      </section>

      {/* Filter tabs */}
      <section style={{ padding: '16px 0 48px', position: 'sticky', top: 68, zIndex: 50, background: 'rgba(10,14,26,0.7)', backdropFilter: 'blur(14px)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: 6, justifyContent: 'center', flexWrap: 'wrap' }}>
            {tags.map(t => (
              <button key={t} onClick={() => setFilter(t)} style={{
                padding: '8px 16px', borderRadius: 999,
                background: filter === t ? 'var(--blue)' : 'var(--surface)',
                border: `1px solid ${filter === t ? 'var(--blue)' : 'var(--border)'}`,
                color: filter === t ? 'white' : 'var(--text-2)',
                fontSize: 13, fontWeight: 500, cursor: 'pointer',
                fontFamily: 'inherit'
              }}>{t}</button>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '0 0 96px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {filtered.map((p, i) => (
              <div key={p.name} className="card card-hover" style={{ padding: 0, overflow: 'hidden', cursor: 'pointer' }} onClick={() => p.name === 'PayFlow' && onNav('solution-detail')}>
                <div style={{
                  height: 200,
                  background: `linear-gradient(135deg, ${p.accent}33, ${p.accent}08)`,
                  borderBottom: '1px solid var(--border)',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  <div className="dot-bg" style={{ position: 'absolute', inset: 0, opacity: 0.5 }} />
                  {/* fake UI */}
                  <div style={{ position: 'absolute', inset: 20, display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                        <div style={{ width: 18, height: 18, borderRadius: 4, background: p.accent }} />
                        <div style={{ width: 50, height: 6, background: 'rgba(255,255,255,0.25)', borderRadius: 2 }} />
                      </div>
                      <div style={{ width: 36, height: 14, background: `${p.accent}66`, borderRadius: 999 }} />
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6, marginTop: 6 }}>
                      <div style={{ height: 44, background: `${p.accent}22`, borderRadius: 4, border: `1px solid ${p.accent}44`, padding: 6 }}>
                        <div style={{ width: 24, height: 4, background: 'rgba(255,255,255,0.3)', borderRadius: 2, marginBottom: 4 }} />
                        <div style={{ width: 18, height: 8, background: `${p.accent}aa`, borderRadius: 2 }} />
                      </div>
                      <div style={{ height: 44, background: `${p.accent}22`, borderRadius: 4, border: `1px solid ${p.accent}44`, padding: 6 }}>
                        <div style={{ width: 24, height: 4, background: 'rgba(255,255,255,0.3)', borderRadius: 2, marginBottom: 4 }} />
                        <div style={{ width: 22, height: 8, background: `${p.accent}aa`, borderRadius: 2 }} />
                      </div>
                    </div>
                    <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 4 }}>
                      <div style={{ width: '90%', height: 5, background: 'rgba(255,255,255,0.08)', borderRadius: 2 }} />
                      <div style={{ width: '70%', height: 5, background: 'rgba(255,255,255,0.08)', borderRadius: 2 }} />
                      <div style={{ width: '85%', height: 5, background: 'rgba(255,255,255,0.08)', borderRadius: 2 }} />
                    </div>
                  </div>
                </div>
                <div style={{ padding: 22 }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
                    <h3 style={{ fontSize: 20 }}>{p.name}</h3>
                    <span className="tag" style={{ fontSize: 10, background: `${p.accent}1A`, color: p.accent, borderColor: `${p.accent}44` }}>{p.tag}</span>
                  </div>
                  <p className="text-sm" style={{ marginBottom: 14 }}>{p.tagline}</p>
                  <div className="mono text-xs text-3" style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 14 }}>
                    <Icons.gauge size={12} /> {p.metric}
                  </div>
                  <div className="mono text-xs text-3" style={{ marginBottom: 14, display: 'flex', alignItems: 'center', gap: 4 }}>
                    <Icons.globe size={11} /> {p.domain}
                  </div>
                  <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 16 }}>
                    {p.stack.map(s => <span key={s} className="tag" style={{ fontSize: 10 }}>{s}</span>)}
                  </div>
                  <div style={{ display: 'flex', gap: 8 }}>
                    <button className="btn btn-primary" style={{ flex: 1, padding: '8px 12px', fontSize: 12, justifyContent: 'center' }}>
                      <Icons.play size={12} /> Try Live Demo
                    </button>
                    <button className="btn btn-soft" style={{ padding: '8px 12px', fontSize: 12 }}>
                      Get Quote
                    </button>
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

const SolutionDetail = ({ onNav }) => {
  return (
    <div className="page">
      <NavBar active="solutions" onNav={onNav} />

      {/* Header */}
      <section style={{ padding: '48px 0 64px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(900px 500px at 80% 0%, rgba(59,130,246,0.18), transparent 60%)' }} />
        <div className="container" style={{ position: 'relative' }}>
          <div className="mono text-xs" style={{ color: 'var(--text-3)', marginBottom: 28, display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ cursor: 'pointer' }} onClick={() => onNav('homepage')}>Home</span>
            <Icons.arrow size={10} />
            <span style={{ cursor: 'pointer' }} onClick={() => onNav('solutions')}>Solutions</span>
            <Icons.arrow size={10} />
            <span style={{ color: 'var(--text)' }}>PayFlow</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 64, alignItems: 'center' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
                <div style={{
                  width: 64, height: 64, borderRadius: 14,
                  background: 'linear-gradient(135deg, #3B82F6, #06B6D4)',
                  display: 'grid', placeItems: 'center',
                  color: 'white', boxShadow: '0 12px 32px -8px rgba(59,130,246,0.5)'
                }}>
                  <Icons.bank size={28} />
                </div>
                <div>
                  <h1 style={{ fontSize: 48, lineHeight: 1 }}>PayFlow</h1>
                  <div className="mono text-sm text-3 mt-2">payflow.nimblesl.com</div>
                </div>
                <span className="tag tag-blue" style={{ marginLeft: 'auto', fontSize: 11 }}>FinTech</span>
              </div>
              <h2 className="grad-blue" style={{ fontSize: 32, fontWeight: 700, lineHeight: 1.2 }}>Smart Digital Banking, Simplified.</h2>
              <p className="mt-4" style={{ fontSize: 17 }}>
                A production-grade digital wallet platform supporting multi-currency accounts, real-time cross-border payments, KYC, virtual cards, and full admin tooling. Battle-tested on 4 client deployments since 2024.
              </p>
              <div className="mt-8" style={{ display: 'flex', gap: 12 }}>
                <button className="btn btn-primary" style={{ padding: '14px 22px' }}>
                  <Icons.external size={14} /> Launch PayFlow Demo
                </button>
                <button className="btn btn-ghost" style={{ padding: '14px 22px' }}>
                  <Icons.clock size={14} /> Book demo walkthrough
                </button>
              </div>
              <div className="mt-8" style={{ display: 'flex', gap: 24 }}>
                <div>
                  <div className="mono text-xs text-3">DEMO STATUS</div>
                  <div className="mt-2" style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, fontWeight: 600, color: 'var(--emerald-2)' }}>
                    <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--emerald)', boxShadow: '0 0 8px var(--emerald)' }} />
                    Live & ready
                  </div>
                </div>
                <div>
                  <div className="mono text-xs text-3">DEPLOYED</div>
                  <div className="mt-2 text-sm" style={{ fontWeight: 600 }}>4 client builds</div>
                </div>
                <div>
                  <div className="mono text-xs text-3">CUSTOMIZE FROM</div>
                  <div className="mt-2 text-sm" style={{ fontWeight: 600, color: 'var(--emerald-2)' }}>$5K</div>
                </div>
              </div>
            </div>

            {/* Product preview */}
            <div>
              <BrowserMock url="payflow.nimblesl.com/dashboard" height={420}>
                <div style={{ display: 'flex', height: '100%', background: '#0B0F1B' }}>
                  {/* sidebar */}
                  <div style={{ width: 56, background: '#08090F', borderRight: '1px solid var(--border)', padding: '14px 0', display: 'flex', flexDirection: 'column', gap: 14, alignItems: 'center' }}>
                    <div style={{ width: 26, height: 26, borderRadius: 7, background: 'linear-gradient(135deg, #3B82F6, #06B6D4)' }} />
                    {[Icons.home, Icons.dollar, Icons.users, Icons.chart, Icons.cog || Icons.briefcase].map((I, i) => (
                      <div key={i} style={{
                        width: 32, height: 32, borderRadius: 7,
                        background: i === 1 ? 'rgba(59,130,246,0.18)' : 'transparent',
                        color: i === 1 ? '#60A5FA' : 'var(--text-3)',
                        display: 'grid', placeItems: 'center'
                      }}><I size={15} /></div>
                    ))}
                  </div>
                  {/* main */}
                  <div style={{ flex: 1, padding: 18, overflow: 'hidden' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
                      <div>
                        <div style={{ fontSize: 14, fontWeight: 700 }}>Wallet overview</div>
                        <div className="mono text-xs text-3 mt-2">Last 30 days</div>
                      </div>
                      <div style={{ display: 'flex', gap: 6 }}>
                        <div style={{ padding: '3px 8px', borderRadius: 4, background: 'rgba(16,185,129,0.15)', color: 'var(--emerald-2)', fontSize: 10, fontWeight: 600 }}>+ 12.4%</div>
                      </div>
                    </div>
                    {/* Balance cards */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr 1fr', gap: 10, marginBottom: 14 }}>
                      <div style={{ padding: 12, background: 'linear-gradient(135deg, #3B82F6, #1e40af)', borderRadius: 8 }}>
                        <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.7)' }}>USD WALLET</div>
                        <div style={{ fontSize: 18, fontWeight: 700, marginTop: 4 }}>$48,392.10</div>
                        <div style={{ display: 'flex', gap: 4, marginTop: 6 }}>
                          <div style={{ width: 22, height: 14, borderRadius: 2, background: 'rgba(255,255,255,0.25)' }} />
                          <div style={{ width: 22, height: 14, borderRadius: 2, background: 'rgba(255,255,255,0.15)' }} />
                        </div>
                      </div>
                      <div style={{ padding: 12, background: 'var(--surface-2)', borderRadius: 8, border: '1px solid var(--border)' }}>
                        <div className="mono text-xs text-3">EUR</div>
                        <div style={{ fontSize: 14, fontWeight: 700, marginTop: 4 }}>€12,089</div>
                      </div>
                      <div style={{ padding: 12, background: 'var(--surface-2)', borderRadius: 8, border: '1px solid var(--border)' }}>
                        <div className="mono text-xs text-3">GBP</div>
                        <div style={{ fontSize: 14, fontWeight: 700, marginTop: 4 }}>£8,427</div>
                      </div>
                    </div>
                    {/* Chart */}
                    <div style={{ background: 'var(--surface-2)', borderRadius: 8, border: '1px solid var(--border)', padding: 12 }}>
                      <div style={{ fontSize: 11, color: 'var(--text-2)', marginBottom: 8 }}>Transactions</div>
                      <svg width="100%" height="80" viewBox="0 0 400 80" preserveAspectRatio="none">
                        <defs>
                          <linearGradient id="pfg" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.4"/>
                            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0"/>
                          </linearGradient>
                        </defs>
                        <path d="M0,60 L40,55 L80,40 L120,45 L160,30 L200,35 L240,20 L280,25 L320,15 L360,20 L400,10 L400,80 L0,80 Z" fill="url(#pfg)" />
                        <path d="M0,60 L40,55 L80,40 L120,45 L160,30 L200,35 L240,20 L280,25 L320,15 L360,20 L400,10" fill="none" stroke="#60A5FA" strokeWidth="2" />
                      </svg>
                    </div>
                    {/* Recent txns */}
                    <div style={{ marginTop: 10, display: 'flex', flexDirection: 'column', gap: 6 }}>
                      {[
                        { n: 'Stripe payout', a: '+$2,400.00', c: 'var(--emerald-2)' },
                        { n: 'Vendor: AWS', a: '-$148.20', c: 'var(--text-2)' },
                        { n: 'Wise transfer · GBP', a: '+£820.00', c: 'var(--emerald-2)' }
                      ].map(t => (
                        <div key={t.n} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '6px 10px', background: 'var(--surface-2)', borderRadius: 6, border: '1px solid var(--border)' }}>
                          <div style={{ fontSize: 11 }}>{t.n}</div>
                          <div className="mono" style={{ fontSize: 11, color: t.c, fontWeight: 600 }}>{t.a}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </BrowserMock>
            </div>
          </div>
        </div>
      </section>

      {/* Features grid */}
      <section className="section" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <SectionHeader eyebrow="Key features" title="Everything a digital bank needs. Already built." />
          <div className="mt-12" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
            {[
              { i: Icons.users, t: 'KYC & onboarding', d: 'Selfie + ID match, doc OCR, sanctions screening.' },
              { i: Icons.dollar, t: 'Multi-currency wallets', d: 'USD, EUR, GBP, BDT — extensible to any currency.' },
              { i: Icons.send, t: 'Cross-border transfers', d: 'SWIFT, SEPA, Wise & Stripe Connect integrations.' },
              { i: Icons.lock, t: 'Virtual & physical cards', d: 'Issue, freeze, set limits — via Marqeta or Lithic.' },
              { i: Icons.shield, t: 'Fraud rules engine', d: 'Velocity checks, blocklists, ML scoring hooks.' },
              { i: Icons.chart, t: 'Admin dashboard', d: 'Full Ops view: users, transactions, KYC queue.' },
              { i: Icons.bolt, t: 'Webhooks & API', d: 'REST + Webhooks. SDKs for Node, Python, Go.' },
              { i: Icons.brain, t: 'AI insights', d: 'Spend categorization & anomaly detection.' }
            ].map(f => (
              <div key={f.t} className="card" style={{ padding: 20 }}>
                <f.i size={20} style={{ color: 'var(--blue-2)' }} />
                <div className="mt-3" style={{ fontWeight: 700, fontSize: 14 }}>{f.t}</div>
                <p className="text-xs mt-3">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots gallery */}
      <section style={{ padding: '0 0 96px' }}>
        <div className="container">
          <SectionHeader eyebrow="Screens" title="Eight production screens. Zero placeholder content." />
          <div className="mt-12" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
            {['Onboarding KYC', 'Wallet dashboard', 'Send money', 'Card management', 'Transaction history', 'Admin · Users', 'Admin · Compliance', 'Settings & limits'].map(s => (
              <div key={s} className="placeholder" style={{ height: 160 }}>
                {s}<br/>
                <span style={{opacity:0.5}}>1280 × 800</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customize tiers */}
      <section style={{ padding: '0 0 96px' }}>
        <div className="container">
          <SectionHeader eyebrow="Customization tiers" title="Three ways to make it yours." sub="Pricing ranges are based on actual PayFlow deployments since 2024." />
          <div className="mt-12" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {[
              { tier: 'Quick Start', range: '$5K–$15K', dur: '2–4 weeks', desc: 'Brand it, deploy it, ship it.', features: ['White-labeling & brand', 'Custom domain + SSL', 'Cloudflare deployment', 'Admin training', 'Sandbox payment integration'] },
              { tier: 'Custom Fit', range: '$15K–$40K', dur: '6–10 weeks', desc: 'Mix in your features and integrations.', featured: true, features: ['Everything in Quick Start', '2–3 new feature modules', 'Live payment gateway integration', 'Custom currencies & locales', 'Custom user roles & permissions', 'Webhook & API hand-off'] },
              { tier: 'Enterprise Build', range: '$40K–$120K+', dur: '14–24 weeks', desc: 'Customized ground-up from this foundation.', features: ['Everything in Custom Fit', 'Ground-up customization', 'Multi-tenant architecture', 'SOC 2 / ISO 27001 prep', '12-month support retainer', 'Dedicated success engineer'] }
            ].map(t => (
              <div key={t.tier} className="card" style={{
                padding: 32,
                background: t.featured ? 'linear-gradient(180deg, rgba(59,130,246,0.12), rgba(59,130,246,0.02))' : undefined,
                borderColor: t.featured ? 'rgba(59,130,246,0.4)' : 'var(--border)'
              }}>
                {t.featured && <span className="tag tag-blue" style={{ fontSize: 10, marginBottom: 14 }}>Most chosen</span>}
                <h4 style={{ fontSize: 22, fontWeight: 700 }}>{t.tier}</h4>
                <p className="text-sm mt-2">{t.desc}</p>
                <div className="mt-4" style={{ fontSize: 32, fontFamily: 'var(--font-display)', fontWeight: 800, color: t.featured ? 'var(--blue-2)' : 'var(--text)' }}>{t.range}</div>
                <div className="mono text-xs text-3 mt-2">{t.dur} · fixed bid available</div>
                <div style={{ height: 1, background: 'var(--border)', margin: '24px 0' }} />
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {t.features.map(f => (
                    <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <Icons.check size={13} stroke={2.5} style={{ color: 'var(--emerald-2)', flexShrink: 0 }} />
                      <span className="text-sm">{f}</span>
                    </div>
                  ))}
                </div>
                <button className={`btn ${t.featured ? 'btn-primary' : 'btn-soft'}`} style={{ width: '100%', marginTop: 24, justifyContent: 'center' }}>
                  Get a custom quote <Icons.arrow size={13} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section style={{ padding: '0 0 96px' }}>
        <div className="container">
          <SectionHeader eyebrow="Built with" title="The stack that ships in production." />
          <div className="mt-8" style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {[
              { n: 'Angular 21', a: 'rose' }, { n: 'TypeScript', a: 'blue' }, { n: 'Node.js', a: 'emerald' },
              { n: 'NestJS', a: 'rose' }, { n: 'PostgreSQL', a: 'blue' }, { n: 'Redis', a: 'rose' },
              { n: 'AWS', a: 'amber' }, { n: 'Cloudflare', a: 'amber' }, { n: 'Stripe Connect', a: 'purple' },
              { n: 'Plaid', a: 'gray' }, { n: 'Marqeta', a: 'purple' }, { n: 'Twilio', a: 'rose' },
              { n: 'Tailwind', a: 'cyan' }, { n: 'Recharts', a: 'cyan' }
            ].map(t => <TechBadge key={t.n} name={t.n} accent={t.a} />)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '0 0 96px' }}>
        <div className="container">
          <div className="card" style={{
            padding: 56,
            background: 'linear-gradient(135deg, rgba(59,130,246,0.15), rgba(6,182,212,0.08))',
            borderColor: 'rgba(59,130,246,0.3)',
            textAlign: 'center'
          }}>
            <h2 style={{ fontSize: 40 }}>Ready to make PayFlow yours?</h2>
            <p className="mt-3" style={{ fontSize: 17, maxWidth: 520, margin: '12px auto 0' }}>Get a customized quote in 24 hours, or walk through the demo with our team live.</p>
            <div className="mt-8" style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
              <button className="btn btn-emerald"><Icons.sparkle size={14} /> Get a custom quote</button>
              <button className="btn btn-primary"><Icons.clock size={14} /> Book a demo walkthrough</button>
              <button className="btn btn-ghost"><Icons.external size={14} /> Try live demo</button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

Object.assign(window, { SolutionsList, SolutionDetail });
