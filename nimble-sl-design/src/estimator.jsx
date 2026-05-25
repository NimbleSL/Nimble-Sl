// AI Project Estimator — fully interactive 7-step wizard + results

const Estimator = ({ onNav }) => {
  const [step, setStep] = React.useState(1);
  const [data, setData] = React.useState({
    type: 'SaaS Platform',
    industry: 'FinTech',
    features: ['User Authentication & Roles', 'Payment Integration', 'Admin Dashboard', 'AI/ML Features'],
    design: 'No design yet (need UI/UX from scratch)',
    timeline: 'Standard (3–6 months)',
    budget: '$50K – $100K',
    description: 'A digital banking platform for SMBs in Southeast Asia. Multi-currency wallets, real-time cross-border payments via Wise/Stripe, KYC + sanctions screening, virtual cards for employees, expense automation with AI categorization. Need both web admin and mobile (iOS + Android).'
  });

  const totalSteps = 7;

  const next = () => setStep(s => Math.min(s + 1, totalSteps + 1));
  const prev = () => setStep(s => Math.max(s - 1, 1));
  const set = (k, v) => setData(d => ({ ...d, [k]: v }));
  const toggleFeature = (f) => setData(d => ({
    ...d, features: d.features.includes(f) ? d.features.filter(x => x !== f) : [...d.features, f]
  }));

  const StepCard = ({ children }) => (
    <div className="card" style={{ padding: 48, maxWidth: 820, margin: '0 auto' }}>{children}</div>
  );

  const OptionGrid = ({ options, value, onChange, columns = 2 }) => (
    <div style={{ display: 'grid', gridTemplateColumns: `repeat(${columns}, 1fr)`, gap: 12 }}>
      {options.map(o => {
        const v = typeof o === 'string' ? o : o.v;
        const label = typeof o === 'string' ? o : o.l;
        const I = typeof o === 'object' ? o.i : null;
        const sub = typeof o === 'object' ? o.s : null;
        const selected = value === v;
        return (
          <button key={v} onClick={() => onChange(v)} style={{
            padding: 18,
            borderRadius: 12,
            background: selected ? 'rgba(59,130,246,0.12)' : 'var(--surface)',
            border: `1px solid ${selected ? 'rgba(59,130,246,0.5)' : 'var(--border)'}`,
            cursor: 'pointer',
            textAlign: 'left',
            fontFamily: 'inherit',
            color: 'var(--text)',
            display: 'flex', alignItems: 'center', gap: 14,
            transition: 'all .15s'
          }}>
            {I && (
              <div style={{
                width: 40, height: 40, borderRadius: 9,
                background: selected ? 'rgba(59,130,246,0.18)' : 'var(--surface-2)',
                border: `1px solid ${selected ? 'rgba(59,130,246,0.4)' : 'var(--border)'}`,
                display: 'grid', placeItems: 'center',
                color: selected ? 'var(--blue-2)' : 'var(--text-2)',
                flexShrink: 0
              }}><I size={18} /></div>
            )}
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 600, fontSize: 14 }}>{label}</div>
              {sub && <div className="text-xs text-3 mt-2">{sub}</div>}
            </div>
            <div style={{
              width: 18, height: 18, borderRadius: '50%',
              border: `1.5px solid ${selected ? 'var(--blue)' : 'var(--border-2)'}`,
              background: selected ? 'var(--blue)' : 'transparent',
              display: 'grid', placeItems: 'center',
              flexShrink: 0
            }}>{selected && <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'white' }} />}</div>
          </button>
        );
      })}
    </div>
  );

  const stepContent = () => {
    if (step === 1) return (
      <StepCard>
        <div className="mono text-xs text-3">STEP 1 OF 7 · 30 SEC</div>
        <h2 className="mt-3" style={{ fontSize: 36 }}>What are you building?</h2>
        <p className="mt-2">Pick the closest match. You can refine later.</p>
        <div className="mt-8">
          <OptionGrid value={data.type} onChange={v => set('type', v)} options={[
            { v: 'Web Application', l: 'Web Application', s: 'Dashboard, admin tool, internal app', i: Icons.globe },
            { v: 'Mobile App', l: 'Mobile App', s: 'iOS, Android, or cross-platform', i: Icons.mobile },
            { v: 'SaaS Platform', l: 'SaaS Platform', s: 'Multi-tenant product with subscriptions', i: Icons.layers },
            { v: 'E-commerce', l: 'E-commerce', s: 'Storefront, payments, fulfillment', i: Icons.shop },
            { v: 'AI/ML Solution', l: 'AI/ML Solution', s: 'RAG, custom models, automation', i: Icons.brain },
            { v: 'Enterprise Software', l: 'Custom Enterprise', s: 'Internal systems, ERPs, automation', i: Icons.briefcase }
          ]} />
        </div>
      </StepCard>
    );

    if (step === 2) return (
      <StepCard>
        <div className="mono text-xs text-3">STEP 2 OF 7</div>
        <h2 className="mt-3" style={{ fontSize: 36 }}>Which industry?</h2>
        <p className="mt-2">We've shipped in all of these — we'll match you to engineers who know the domain.</p>
        <div className="mt-8">
          <OptionGrid columns={3} value={data.industry} onChange={v => set('industry', v)} options={[
            { v: 'FinTech', l: 'FinTech', i: Icons.bank }, { v: 'HealthCare', l: 'HealthCare', i: Icons.heart },
            { v: 'Insurance', l: 'Insurance', i: Icons.shield }, { v: 'Real Estate', l: 'Real Estate', i: Icons.home },
            { v: 'E-commerce', l: 'E-commerce', i: Icons.shop }, { v: 'Education', l: 'Education', i: Icons.book },
            { v: 'Logistics', l: 'Logistics', i: Icons.truck }, { v: 'Enterprise SaaS', l: 'Enterprise SaaS', i: Icons.briefcase },
            { v: 'Other', l: 'Other', i: Icons.plus }
          ]} />
        </div>
      </StepCard>
    );

    if (step === 3) return (
      <StepCard>
        <div className="mono text-xs text-3">STEP 3 OF 7</div>
        <h2 className="mt-3" style={{ fontSize: 36 }}>What features do you need?</h2>
        <p className="mt-2">Multi-select. Don't worry — you can add custom requirements in the description step.</p>
        <div className="mt-8" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 10 }}>
          {[
            'User Authentication & Roles', 'Payment Integration', 'Admin Dashboard',
            'Real-time Notifications', 'Chat / Messaging', 'Search & Filters',
            'Analytics & Reporting', 'API Integrations', 'AI/ML Features',
            'Offline Support', 'Multi-language', 'File Upload / Storage'
          ].map(f => {
            const checked = data.features.includes(f);
            return (
              <button key={f} onClick={() => toggleFeature(f)} style={{
                padding: '14px 16px',
                borderRadius: 10,
                background: checked ? 'rgba(59,130,246,0.12)' : 'var(--surface)',
                border: `1px solid ${checked ? 'rgba(59,130,246,0.5)' : 'var(--border)'}`,
                color: 'var(--text)', fontFamily: 'inherit', fontSize: 14, fontWeight: 500,
                cursor: 'pointer', textAlign: 'left',
                display: 'flex', alignItems: 'center', gap: 12
              }}>
                <div style={{
                  width: 18, height: 18, borderRadius: 5,
                  background: checked ? 'var(--blue)' : 'transparent',
                  border: `1.5px solid ${checked ? 'var(--blue)' : 'var(--border-2)'}`,
                  display: 'grid', placeItems: 'center',
                  flexShrink: 0
                }}>{checked && <Icons.check size={11} stroke={3} style={{ color: 'white' }} />}</div>
                {f}
              </button>
            );
          })}
        </div>
        <div className="mt-6 text-xs text-3 mono">{data.features.length} feature{data.features.length !== 1 && 's'} selected</div>
      </StepCard>
    );

    if (step === 4) return (
      <StepCard>
        <div className="mono text-xs text-3">STEP 4 OF 7</div>
        <h2 className="mt-3" style={{ fontSize: 36 }}>What's your design status?</h2>
        <p className="mt-2">This affects timeline, not quality. We can lead the design — or work from your existing files.</p>
        <div className="mt-8">
          <OptionGrid value={data.design} onChange={v => set('design', v)} options={[
            { v: 'No design yet (need UI/UX from scratch)', l: 'No design yet', s: 'We lead discovery, wireframes, and visual design', i: Icons.palette },
            { v: 'Have wireframes/mockups', l: 'Have wireframes', s: 'We do high-fidelity design + dev', i: Icons.doc },
            { v: 'Have complete design files', l: 'Have full Figma', s: 'Build-only — fastest path to launch', i: Icons.check },
            { v: 'Redesigning existing app', l: 'Redesigning existing', s: 'Audit + redesign + rebuild', i: Icons.layers }
          ]} />
        </div>
      </StepCard>
    );

    if (step === 5) return (
      <StepCard>
        <div className="mono text-xs text-3">STEP 5 OF 7</div>
        <h2 className="mt-3" style={{ fontSize: 36 }}>Timeline preference?</h2>
        <p className="mt-2">We'll be honest if your scope doesn't fit your timeline. No padding bids.</p>
        <div className="mt-8">
          <OptionGrid value={data.timeline} onChange={v => set('timeline', v)} options={[
            { v: 'MVP (4–8 weeks)', l: 'MVP — 4 to 8 weeks', s: 'Tight scope, core features, single platform', i: Icons.zap },
            { v: 'Standard (3–6 months)', l: 'Standard — 3 to 6 months', s: 'Full feature set, web + mobile', i: Icons.clock },
            { v: 'Enterprise (6–12 months)', l: 'Enterprise — 6 to 12 months', s: 'Multi-platform, compliance, scale', i: Icons.briefcase },
            { v: 'Not sure yet', l: 'Not sure yet', s: 'We can recommend based on scope', i: Icons.sparkle }
          ]} />
        </div>
      </StepCard>
    );

    if (step === 6) return (
      <StepCard>
        <div className="mono text-xs text-3">STEP 6 OF 7</div>
        <h2 className="mt-3" style={{ fontSize: 36 }}>Budget range?</h2>
        <p className="mt-2">We'll work backward from your budget — and tell you what's realistic for it.</p>
        <div className="mt-8">
          <OptionGrid value={data.budget} onChange={v => set('budget', v)} options={[
            { v: 'Under $10K', l: 'Under $10K', s: 'Pilot sprint or tightly-scoped MVP', i: Icons.zap },
            { v: '$10K – $25K', l: '$10K – $25K', s: 'Small MVP, simple integrations', i: Icons.rocket },
            { v: '$25K – $50K', l: '$25K – $50K', s: 'Full MVP with 2–3 platforms', i: Icons.bolt },
            { v: '$50K – $100K', l: '$50K – $100K', s: 'Production-grade platform', i: Icons.trophy },
            { v: '$100K+', l: '$100K+', s: 'Enterprise-scale build', i: Icons.gauge },
            { v: 'Help me figure it out', l: 'Help me figure it out', s: 'Our AI will recommend', i: Icons.sparkle }
          ]} />
        </div>
      </StepCard>
    );

    if (step === 7) return (
      <StepCard>
        <div className="mono text-xs text-3">STEP 7 OF 7 · ALMOST DONE</div>
        <h2 className="mt-3" style={{ fontSize: 36 }}>Tell us about your project.</h2>
        <p className="mt-2">Free text — pasted PRDs, half-baked ideas, sketches, all welcome. Claude reads everything.</p>
        <div className="mt-8">
          <textarea
            value={data.description}
            onChange={e => set('description', e.target.value)}
            placeholder="A digital banking app for SMBs in Southeast Asia, supporting multi-currency wallets, real-time payments, KYC, and virtual cards…"
            style={{
              width: '100%',
              minHeight: 200,
              padding: 18,
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: 12,
              color: 'var(--text)',
              fontFamily: 'inherit',
              fontSize: 15,
              lineHeight: 1.6,
              outline: 'none',
              resize: 'vertical'
            }}
          />
          <div className="mt-3 text-xs text-3 mono">{data.description.length} chars · Be specific — every detail improves accuracy.</div>
        </div>
      </StepCard>
    );

    // step 8: Results
    return <EstimatorResults data={data} onNav={onNav} onRestart={() => { setStep(1); }} />;
  };

  return (
    <div className="page">
      <NavBar onNav={onNav} />

      <section style={{ padding: '48px 0 24px', position: 'relative', overflow: 'hidden' }}>
        <div className="mesh-bg" />
        <div className="container" style={{ position: 'relative', textAlign: 'center' }}>
          <div className="eyebrow" style={{ marginBottom: 16 }}>
            <Icons.sparkle size={11} /> Powered by Claude · 50-project knowledge base
          </div>
          <h1 style={{ fontSize: 48 }}>AI Project Estimator</h1>
          <p className="mt-4" style={{ maxWidth: 520, margin: '12px auto 0' }}>
            Scope, timeline, tech stack, team composition, and cost — generated in 3 minutes.
          </p>
        </div>
      </section>

      {/* Progress */}
      {step <= totalSteps && (
        <section style={{ padding: '24px 0' }}>
          <div className="container">
            <div style={{ maxWidth: 820, margin: '0 auto' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 12 }}>
                {[1,2,3,4,5,6,7].map(i => (
                  <div key={i} style={{
                    flex: 1, height: 4, borderRadius: 999,
                    background: i <= step ? 'linear-gradient(90deg, var(--blue), var(--cyan))' : 'var(--border)',
                    transition: 'all .3s'
                  }} />
                ))}
              </div>
              <div className="mono text-xs text-3" style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>{Math.round((step / totalSteps) * 100)}% complete</span>
                <span>{totalSteps - step + 1} step{totalSteps - step + 1 !== 1 && 's'} left · ~{(8 - step) * 30}s</span>
              </div>
            </div>
          </div>
        </section>
      )}

      <section style={{ padding: '24px 0 96px' }}>
        <div className="container">
          {stepContent()}

          {step <= totalSteps && (
            <div style={{ maxWidth: 820, margin: '24px auto 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <button onClick={prev} disabled={step === 1} className="btn btn-ghost" style={{ opacity: step === 1 ? 0.4 : 1, cursor: step === 1 ? 'not-allowed' : 'pointer' }}>
                ← Back
              </button>
              <div className="text-xs text-3 mono">Press <kbd style={{ background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: 4, padding: '1px 6px' }}>Enter</kbd> to continue</div>
              <button onClick={next} className="btn btn-primary" style={{ padding: '12px 22px' }}>
                {step === totalSteps ? <>Generate estimate <Icons.sparkle size={14} /></> : <>Continue <Icons.arrow size={14} /></>}
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

const EstimatorResults = ({ data, onNav, onRestart }) => {
  return (
    <div style={{ maxWidth: 1100, margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: 32 }}>
        <div className="eyebrow" style={{ background: 'rgba(16,185,129,0.1)', color: 'var(--emerald-2)', borderColor: 'rgba(16,185,129,0.3)', marginBottom: 16 }}>
          <Icons.check size={11} stroke={3} /> Report generated in 2.4 seconds
        </div>
        <h2 style={{ fontSize: 44 }}>Your estimate is ready.</h2>
        <p className="mt-3">Based on 7 historical projects we've shipped for {data.industry} clients with similar scope.</p>
      </div>

      {/* Top summary */}
      <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
        <div style={{ padding: 32, background: 'linear-gradient(135deg, rgba(16,185,129,0.10), rgba(59,130,246,0.06))', borderBottom: '1px solid var(--border)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32 }}>
            <div>
              <div className="mono text-xs text-3">ESTIMATED COST</div>
              <div className="mt-2" style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 38, color: 'var(--emerald-2)', letterSpacing: '-0.02em' }}>$56K–$84K</div>
              <div className="text-xs text-3 mt-2">vs $180K avg US/UK quote</div>
            </div>
            <div>
              <div className="mono text-xs text-3">TIMELINE</div>
              <div className="mt-2" style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 38, color: 'var(--text)', letterSpacing: '-0.02em' }}>16–20w</div>
              <div className="text-xs text-3 mt-2">Two-week sprints · weekly demos</div>
            </div>
            <div>
              <div className="mono text-xs text-3">TEAM COMPOSITION</div>
              <div className="mt-2" style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 38, color: 'var(--text)', letterSpacing: '-0.02em' }}>5.5</div>
              <div className="text-xs text-3 mt-2">1 PM · 1 Lead · 3 Eng · 1 QA · 0.5 Design</div>
            </div>
            <div>
              <div className="mono text-xs text-3">CONFIDENCE</div>
              <div className="mt-2" style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 38, color: 'var(--blue-2)', letterSpacing: '-0.02em' }}>87%</div>
              <div className="text-xs text-3 mt-2">High · 7 reference projects matched</div>
            </div>
          </div>
        </div>

        {/* Body */}
        <div style={{ padding: 32, display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 32 }}>
          <div>
            <h3 style={{ fontSize: 20, marginBottom: 12 }}>Scope summary</h3>
            <p className="text-sm">
              A multi-currency digital banking platform with KYC, real-time cross-border payments, virtual card issuance, expense automation with AI categorization, and dual deployment (Angular web admin + Flutter mobile). Includes Plaid/Stripe Connect integration, sanctions screening, and a fraud rules engine.
            </p>

            <h3 className="mt-8" style={{ fontSize: 20, marginBottom: 16 }}>Feature breakdown</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { name: 'KYC + onboarding flow', effort: 'M', weeks: 3, cost: '$9K–$13K' },
                { name: 'Multi-currency wallet engine', effort: 'L', weeks: 4, cost: '$13K–$18K' },
                { name: 'Stripe/Wise integration', effort: 'M', weeks: 2, cost: '$6K–$9K' },
                { name: 'Virtual card issuance (Marqeta)', effort: 'M', weeks: 3, cost: '$8K–$12K' },
                { name: 'AI expense categorization', effort: 'M', weeks: 2, cost: '$7K–$10K' },
                { name: 'Admin dashboard (web)', effort: 'M', weeks: 3, cost: '$8K–$11K' },
                { name: 'iOS + Android (Flutter)', effort: 'L', weeks: 4, cost: '$12K–$16K' },
                { name: 'QA, security, deployment', effort: 'M', weeks: 2, cost: '$5K–$7K' }
              ].map(f => (
                <div key={f.name} style={{
                  display: 'grid', gridTemplateColumns: '2fr 60px 60px 1fr',
                  gap: 12, alignItems: 'center',
                  padding: '12px 16px',
                  background: 'var(--surface-2)',
                  border: '1px solid var(--border)',
                  borderRadius: 8
                }}>
                  <div className="text-sm" style={{ fontWeight: 500 }}>{f.name}</div>
                  <span className="tag" style={{ fontSize: 10, justifyContent: 'center' }}>{f.effort}</span>
                  <div className="mono text-xs text-3" style={{ textAlign: 'right' }}>{f.weeks}w</div>
                  <div className="mono text-xs" style={{ color: 'var(--emerald-2)', fontWeight: 600, textAlign: 'right' }}>{f.cost}</div>
                </div>
              ))}
            </div>

            <h3 className="mt-8" style={{ fontSize: 20, marginBottom: 12 }}>Recommended phases</h3>
            <div style={{ display: 'flex', gap: 8 }}>
              {[
                { p: 'Discovery', d: '2w', c: '#60A5FA' },
                { p: 'Design', d: '3w', c: '#67E8F9' },
                { p: 'MVP Build', d: '8w', c: '#34D399' },
                { p: 'Beta + QA', d: '3w', c: '#FCD34D' },
                { p: 'Launch + Stab.', d: '2w', c: '#C084FC' }
              ].map((p, i, arr) => (
                <div key={p.p} style={{
                  flex: parseInt(p.d) / 18,
                  padding: '12px 14px',
                  background: `${p.c}1A`,
                  border: `1px solid ${p.c}55`,
                  borderRadius: i === 0 ? '8px 4px 4px 8px' : i === arr.length - 1 ? '4px 8px 8px 4px' : 4
                }}>
                  <div className="mono text-xs" style={{ color: p.c, fontWeight: 600 }}>{p.p}</div>
                  <div className="text-xs text-3 mt-2">{p.d}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column */}
          <div>
            <h3 style={{ fontSize: 18, marginBottom: 12 }}>Recommended tech stack</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 24 }}>
              {[
                { n: 'Angular 21', a: 'rose' }, { n: 'Flutter', a: 'blue' }, { n: 'NestJS', a: 'rose' },
                { n: 'PostgreSQL', a: 'blue' }, { n: 'Redis', a: 'rose' }, { n: 'Stripe Connect', a: 'purple' },
                { n: 'Plaid', a: 'gray' }, { n: 'Marqeta', a: 'purple' }, { n: 'AWS', a: 'amber' },
                { n: 'Claude API', a: 'amber' }
              ].map(t => <TechBadge key={t.n} name={t.n} accent={t.a} />)}
            </div>

            <h3 style={{ fontSize: 18, marginBottom: 12 }}>Risks identified</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 24 }}>
              {[
                { sev: 'high', msg: 'KYC + sanctions screening requires regional compliance — extend discovery for SEA jurisdictions.' },
                { sev: 'med', msg: 'Marqeta requires US entity for card issuance; alternate: Lithic, Stripe Issuing.' },
                { sev: 'low', msg: 'AI expense categorization works best with 90+ days of historical transactions.' }
              ].map((r, i) => (
                <div key={i} style={{
                  padding: 12,
                  background: 'var(--surface-2)',
                  border: '1px solid var(--border)',
                  borderRadius: 8,
                  display: 'flex', gap: 10
                }}>
                  <span className="tag" style={{
                    fontSize: 9, textTransform: 'uppercase',
                    background: r.sev === 'high' ? 'rgba(244,63,94,0.15)' : r.sev === 'med' ? 'rgba(245,158,11,0.15)' : 'rgba(16,185,129,0.15)',
                    color: r.sev === 'high' ? '#FDA4AF' : r.sev === 'med' ? '#FCD34D' : 'var(--emerald-2)',
                    borderColor: r.sev === 'high' ? 'rgba(244,63,94,0.4)' : r.sev === 'med' ? 'rgba(245,158,11,0.4)' : 'rgba(16,185,129,0.4)',
                    height: 'fit-content', flexShrink: 0
                  }}>{r.sev}</span>
                  <span className="text-xs text-2" style={{ lineHeight: 1.5 }}>{r.msg}</span>
                </div>
              ))}
            </div>

            {/* Match callout */}
            <div className="card" style={{ padding: 20, background: 'linear-gradient(135deg, rgba(59,130,246,0.14), rgba(6,182,212,0.06))', borderColor: 'rgba(59,130,246,0.3)' }}>
              <div className="mono text-xs" style={{ color: 'var(--blue-2)', marginBottom: 6 }}>MATCH FOUND</div>
              <h4 style={{ fontSize: 17 }}>We've already built this. Try PayFlow.</h4>
              <p className="text-xs mt-3">
                Our PayFlow platform covers ~80% of this scope. Customizing PayFlow could cut your timeline to <b style={{ color: 'var(--emerald-2)' }}>8–10 weeks</b> and cost to <b style={{ color: 'var(--emerald-2)' }}>$30K–$45K</b>.
              </p>
              <button className="btn btn-primary" style={{ width: '100%', marginTop: 14, padding: '8px 12px', fontSize: 12, justifyContent: 'center' }} onClick={() => onNav('solution-detail')}>
                Explore PayFlow customization <Icons.arrow size={12} />
              </button>
            </div>
          </div>
        </div>

        {/* Email capture */}
        <div style={{ padding: 32, borderTop: '1px solid var(--border)', background: 'rgba(11,15,27,0.5)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 32, alignItems: 'center' }}>
            <div>
              <h3 style={{ fontSize: 22 }}>Send the full PDF report</h3>
              <p className="text-sm mt-2">12-page detailed breakdown with phase-by-phase Gantt, role allocation, and case-study references.</p>
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              <input placeholder="Full name" style={{ flex: 1, padding: '12px 14px', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 8, color: 'var(--text)', fontFamily: 'inherit', fontSize: 14, outline: 'none' }} />
              <input placeholder="you@company.com" style={{ flex: 1.4, padding: '12px 14px', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 8, color: 'var(--text)', fontFamily: 'inherit', fontSize: 14, outline: 'none' }} />
              <button className="btn btn-emerald" style={{ padding: '12px 20px' }}><Icons.send size={14} /> Send report</button>
            </div>
          </div>
          <div className="text-xs text-3 mono mt-3" style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <Icons.lock size={11} /> A NimbleSL consultant will reach out within 24 hours to discuss.
          </div>
        </div>
      </div>

      <div className="mt-8" style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
        <button className="btn btn-soft" onClick={onRestart}>← Start over</button>
        <button className="btn btn-ghost"><Icons.download size={14} /> Download as PDF</button>
        <button className="btn btn-ghost"><Icons.copy size={14} /> Copy share link</button>
      </div>
    </div>
  );
};

window.Estimator = Estimator;
