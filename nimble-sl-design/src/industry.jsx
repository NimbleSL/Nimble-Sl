// Industry detail — FinTech

const IndustryDetail = ({ onNav }) => {
  return (
    <div className="page">
      <NavBar onNav={onNav} />

      {/* Hero */}
      <section style={{ padding: '48px 0 64px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(900px 500px at 70% 0%, rgba(59,130,246,0.14), transparent 60%)' }} />
        <div className="container" style={{ position: 'relative' }}>
          <div className="mono text-xs" style={{ color: 'var(--text-3)', marginBottom: 28, display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ cursor: 'pointer' }} onClick={() => onNav('homepage')}>Home</span>
            <Icons.arrow size={10} />
            <span>Industries</span>
            <Icons.arrow size={10} />
            <span style={{ color: 'var(--text)' }}>FinTech & Banking</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 64, alignItems: 'center' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 20 }}>
                <div style={{ width: 56, height: 56, borderRadius: 12, background: 'rgba(59,130,246,0.18)', border: '1px solid rgba(59,130,246,0.5)', display: 'grid', placeItems: 'center', color: '#60A5FA' }}>
                  <Icons.bank size={26} />
                </div>
                <span className="tag tag-blue">14 projects shipped</span>
              </div>
              <h1 style={{ fontSize: 60 }}>FinTech software<br/><span className="grad-blue">that ships compliant.</span></h1>
              <p className="mt-6" style={{ fontSize: 18, maxWidth: 540 }}>
                Digital wallets, lending platforms, KYC pipelines, payment orchestration. We've shipped 14 fintech projects across 7 countries — and we know which regulators move slowly.
              </p>
              <div className="mt-8" style={{ display: 'flex', gap: 12 }}>
                <button className="btn btn-primary" onClick={() => onNav('estimator')}>Get a FinTech estimate</button>
                <button className="btn btn-ghost" onClick={() => onNav('solution-detail')}>Try PayFlow demo <Icons.external size={14}/></button>
              </div>
            </div>

            <div className="card" style={{ padding: 24, background: 'linear-gradient(180deg, rgba(28,35,51,0.7), rgba(20,25,37,0.5))' }}>
              <div className="mono text-xs text-3" style={{ marginBottom: 16 }}>FINTECH AT A GLANCE</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                {[
                  ['14', 'Projects shipped', 'var(--blue-2)'],
                  ['7', 'Countries', '#67E8F9'],
                  ['4', 'Showroom products', 'var(--emerald-2)'],
                  ['$1.2B', 'Annualized volume', '#FCD34D']
                ].map(([v, l, c]) => (
                  <div key={l} style={{ padding: 16, background: 'rgba(11,15,27,0.5)', border: '1px solid var(--border)', borderRadius: 8 }}>
                    <div style={{ fontSize: 26, fontWeight: 800, fontFamily: 'var(--font-display)', color: c }}>{v}</div>
                    <div className="text-xs text-3 mt-2">{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="section" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <SectionHeader eyebrow="Challenges we solve" title="FinTech is hard. We've already shipped through these." />
          <div className="mt-12" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20 }}>
            {[
              { i: Icons.shield, t: 'Compliance complexity', d: 'PCI-DSS, KYC, AML, OFAC sanctions screening. We architect for audit from day one, not after the regulator calls.' },
              { i: Icons.zap, t: 'Real-time payment rails', d: 'Stripe, Wise, Plaid, Mastercard Send, SWIFT, SEPA. We have shipped on all of them — we know each one\'s edge cases.' },
              { i: Icons.lock, t: 'Fraud at scale', d: 'Rules engines miss network fraud. We have built GNN-based fraud detection running at 96% accuracy in production.' },
              { i: Icons.gauge, t: 'Reconciliation hell', d: 'Multi-currency ledgers, multi-provider transactions, weekend settlements. We build the boring ledger code that audit teams love.' }
            ].map(c => (
              <div key={c.t} className="card" style={{ padding: 28 }}>
                <div style={{ display: 'flex', gap: 16, alignItems: 'start' }}>
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: 'rgba(59,130,246,0.15)', border: '1px solid rgba(59,130,246,0.4)', display: 'grid', placeItems: 'center', color: 'var(--blue-2)', flexShrink: 0 }}>
                    <c.i size={18} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: 17, fontWeight: 700 }}>{c.t}</h4>
                    <p className="text-sm mt-3">{c.d}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related solutions */}
      <section style={{ padding: '0 0 96px' }}>
        <div className="container">
          <SectionHeader eyebrow="Try the demos" title="FinTech products in the showroom." />
          <div className="mt-12" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
            {[
              { name: 'PayFlow', tag: 'Digital banking', metric: 'Multi-currency wallets, real-time transfers', accent: '#3B82F6' },
              { name: 'FraudShield AI', tag: 'Fraud detection', metric: '96% accuracy via GNN', accent: '#A855F7' },
              { name: 'AuthGate', tag: 'Identity & KYC', metric: 'OAuth2, OIDC, SAML, KYC pipeline', accent: '#F59E0B' }
            ].map(p => (
              <div key={p.name} className="card card-hover" style={{ padding: 24, cursor: 'pointer' }} onClick={() => p.name === 'PayFlow' && onNav('solution-detail')}>
                <div style={{ width: 44, height: 44, borderRadius: 10, background: `${p.accent}22`, border: `1px solid ${p.accent}55` }} />
                <h4 style={{ fontSize: 18, fontWeight: 700, marginTop: 16 }}>{p.name}</h4>
                <p className="text-sm mt-2">{p.tag}</p>
                <div className="mono text-xs text-3 mt-4" style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <Icons.gauge size={11} /> {p.metric}
                </div>
                <button className="btn btn-soft" style={{ width: '100%', marginTop: 16, justifyContent: 'center' }}>Try demo <Icons.external size={12}/></button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section style={{ padding: '0 0 96px' }}>
        <div className="container">
          <SectionHeader eyebrow="Case studies" title="FinTech projects, with numbers." />
          <div className="mt-12" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
            {[
              { client: 'Rosachy', metric: '5 currencies · 0 downtime', sub: 'Cross-border digital wallet shipped in 14 weeks for $62K.', accent: '#3B82F6' },
              { client: 'Blackstone Vale (FraudShield AI)', metric: '96% accuracy · 0 false negatives', sub: 'GNN-based fraud detection live in 6 weeks for $48K.', accent: '#A855F7' }
            ].map(c => (
              <div key={c.client} className="card card-hover" style={{ padding: 28, cursor: 'pointer' }} onClick={() => onNav('case-study')}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 32, color: c.accent, letterSpacing: '-0.02em', lineHeight: 1 }}>{c.metric}</div>
                <div className="text-sm mt-4" style={{ color: 'var(--text)', fontWeight: 600 }}>{c.client}</div>
                <p className="text-sm mt-2">{c.sub}</p>
                <div className="mt-4" style={{ display: 'flex', alignItems: 'center', gap: 4, color: 'var(--blue-2)', fontSize: 13, fontWeight: 600 }}>
                  Read case study <Icons.arrow size={13} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section style={{ padding: '0 0 96px' }}>
        <div className="container">
          <SectionHeader eyebrow="Compliance & standards" title="The regulations we build to, by default." />
          <div className="mt-8" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
            {[
              { c: 'PCI-DSS', d: 'Card data tokenization, scope minimization, quarterly ASV scans.' },
              { c: 'PSD2 / SCA', d: 'Strong customer authentication, open banking via Tink/Plaid.' },
              { c: 'KYC / AML', d: 'ID verification, biometric checks, ongoing sanctions screening.' },
              { c: 'GDPR / DPA', d: 'Data minimization, right-to-erase, DPO-ready audit logs.' },
              { c: 'SOC 2', d: 'In-progress — Type 1 attestation Q4 2026, Type 2 Q2 2027.' },
              { c: 'ISO 27001', d: 'Risk-based ISMS, asset register, annual penetration tests.' }
            ].map(c => (
              <div key={c.c} className="card" style={{ padding: 24 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                  <Icons.shield size={18} style={{ color: 'var(--emerald-2)' }} />
                  <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 13, color: 'var(--text)' }}>{c.c}</div>
                </div>
                <p className="text-xs">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section style={{ padding: '0 0 96px' }}>
        <div className="container">
          <SectionHeader eyebrow="FinTech stack" title="What we ship with." />
          <div className="mt-8" style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {[
              { n: 'Stripe Connect', a: 'purple' }, { n: 'Plaid', a: 'gray' }, { n: 'Wise API', a: 'emerald' },
              { n: 'Marqeta', a: 'purple' }, { n: 'Lithic', a: 'rose' }, { n: 'Persona (KYC)', a: 'cyan' },
              { n: 'Sumsub', a: 'amber' }, { n: 'Onfido', a: 'rose' }, { n: 'PostgreSQL', a: 'blue' },
              { n: 'Redis', a: 'rose' }, { n: 'Angular 21', a: 'rose' }, { n: 'Next.js', a: 'gray' },
              { n: 'NestJS', a: 'rose' }, { n: 'AWS KMS', a: 'amber' }, { n: 'Cloudflare', a: 'amber' }
            ].map(t => <TechBadge key={t.n} name={t.n} accent={t.a} />)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '0 0 96px' }}>
        <div className="container">
          <div className="card" style={{ padding: 48, background: 'linear-gradient(135deg, rgba(59,130,246,0.14), rgba(6,182,212,0.08))', borderColor: 'rgba(59,130,246,0.3)', textAlign: 'center' }}>
            <h2 style={{ fontSize: 38 }}>Building a FinTech product?</h2>
            <p className="mt-3" style={{ maxWidth: 520, margin: '12px auto 0' }}>Tell us about it — get a tailored scope, stack, compliance plan, and budget in 3 minutes.</p>
            <div className="mt-8" style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
              <button className="btn btn-emerald" onClick={() => onNav('estimator')}><Icons.sparkle size={14}/> FinTech estimate</button>
              <button className="btn btn-ghost">Book a call with our FinTech lead</button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

window.IndustryDetail = IndustryDetail;
