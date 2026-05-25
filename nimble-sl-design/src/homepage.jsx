const Homepage = ({ onNav }) => {
  return (
    <div className="page">
      <NavBar active="homepage" onNav={onNav} />

      {/* HERO */}
      <section style={{ position: 'relative', overflow: 'hidden', padding: '88px 0 120px' }}>
        <div className="mesh-bg" />
        <div className="grid-bg" style={{ position: 'absolute', inset: 0, opacity: 0.5, maskImage: 'radial-gradient(ellipse at top, black 30%, transparent 80%)' }} />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 64, alignItems: 'center' }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: 28 }}>
                <span className="ev-dot" />
                <span>Now booking Q3 2026 engagements</span>
              </div>
              <h1>
                Silicon Valley<br />
                engineering.<br />
                <span className="grad-blue">Bangladesh pricing.</span><br />
                Your IP.
              </h1>
              <p style={{ marginTop: 28, fontSize: 18, maxWidth: 520 }}>
                50+ enterprise platforms shipped across 12 countries. From $5K MVPs to $120K+ production systems — without the agency markup or the offshore quality lottery.
              </p>
              <div className="mt-8" style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <button className="btn btn-emerald" style={{ padding: '14px 22px', fontSize: 15 }} onClick={() => onNav('estimator')}>
                  <Icons.sparkle size={16} /> Get a Free Estimate
                </button>
                <button className="btn btn-ghost" style={{ padding: '14px 22px', fontSize: 15 }} onClick={() => onNav('solutions')}>
                  Explore Our Products <Icons.arrow size={16} />
                </button>
              </div>
              <div className="mt-8" style={{ display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <div style={{ display: 'flex' }}>
                    {['AR','MK','SH','PL'].map((i, idx) => (
                      <div key={i} style={{ marginLeft: idx ? -10 : 0 }}><Avatar initials={i} size={32} /></div>
                    ))}
                  </div>
                  <div className="text-xs text-2">
                    <div style={{ display: 'flex', gap: 2, color: '#FCD34D' }}>{[1,2,3,4,5].map(s => <Icons.star key={s} size={11} />)}</div>
                    <div style={{ marginTop: 2 }}><b style={{color:'var(--text)'}}>4.9/5</b> · 50+ verified reviews</div>
                  </div>
                </div>
                <div style={{ width: 1, height: 32, background: 'var(--border)' }} />
                <div className="mono text-xs" style={{ color: 'var(--text-2)' }}>
                  <span style={{color:'var(--emerald)'}}>$25–49/hr</span> · Clutch verified
                </div>
              </div>
            </div>

            {/* Hero Visual: Animated terminal + product peek */}
            <div style={{ position: 'relative' }}>
              <div style={{
                position: 'absolute', inset: -20,
                background: 'radial-gradient(circle at 50% 50%, rgba(59,130,246,0.25), transparent 70%)',
                filter: 'blur(40px)', zIndex: 0
              }} />
              <div className="card glow-blue" style={{ position: 'relative', zIndex: 1, padding: 0, overflow: 'hidden' }}>
                {/* Terminal */}
                <div style={{ padding: '10px 14px', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: 10, background: 'rgba(11,15,27,0.6)' }}>
                  <div style={{ display: 'flex', gap: 6 }}>
                    <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#F43F5E' }} />
                    <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#F59E0B' }} />
                    <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#10B981' }} />
                  </div>
                  <div className="mono text-xs text-3">~/nimblesl/estimator</div>
                </div>
                <div className="mono" style={{ padding: 20, fontSize: 12.5, lineHeight: 1.9 }}>
                  <div><span style={{ color: 'var(--text-3)' }}>$ </span><span style={{color:'var(--text)'}}>nimblesl estimate</span> <span style={{color:'#67E8F9'}}>--type=fintech</span></div>
                  <div style={{ color: 'var(--text-3)' }}>→ analyzing 50 reference projects…</div>
                  <div style={{ color: 'var(--emerald-2)' }}>✓ matched 7 similar engagements</div>
                  <div style={{ color: 'var(--text-3)' }}>→ generating scope, timeline, stack…</div>
                  <div style={{ color: 'var(--emerald-2)' }}>✓ report ready in 2.4s</div>
                  <div style={{ marginTop: 12, padding: 12, background: 'rgba(16,185,129,0.06)', border: '1px solid rgba(16,185,129,0.25)', borderRadius: 8 }}>
                    <div style={{ color: 'var(--text-2)', fontSize: 11, marginBottom: 6 }}>┌─ ESTIMATE ────────────────────────┐</div>
                    <div style={{ display:'flex', justifyContent:'space-between' }}><span className="text-2">Scope</span><span style={{color:'var(--text)'}}>Digital wallet + KYC</span></div>
                    <div style={{ display:'flex', justifyContent:'space-between' }}><span className="text-2">Timeline</span><span style={{color:'var(--text)'}}>14–18 weeks</span></div>
                    <div style={{ display:'flex', justifyContent:'space-between' }}><span className="text-2">Team</span><span style={{color:'var(--text)'}}>1 PM · 4 Eng · 1 QA</span></div>
                    <div style={{ display:'flex', justifyContent:'space-between' }}><span className="text-2">Estimate</span><span style={{color:'var(--emerald-2)', fontWeight:700}}>$42K–$68K</span></div>
                  </div>
                  <div style={{ marginTop: 10 }}>
                    <span style={{ color: 'var(--text-3)' }}>$ </span>
                    <span className="blink">▊</span>
                  </div>
                </div>
              </div>

              {/* Floating chip */}
              <div style={{
                position: 'absolute', top: -16, right: -16,
                background: 'var(--surface-2)',
                border: '1px solid rgba(16,185,129,0.4)',
                borderRadius: 999,
                padding: '6px 12px',
                fontSize: 11,
                fontFamily: 'var(--font-mono)',
                color: 'var(--emerald-2)',
                display: 'flex', alignItems: 'center', gap: 6,
                boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
                zIndex: 2
              }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--emerald)', boxShadow: '0 0 8px var(--emerald)' }} />
                AI-powered · 2.4s avg
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', background: 'rgba(15,22,41,0.4)' }}>
        {/* Headline row + flags */}
        <div className="container" style={{ padding: '40px 32px 0', textAlign: 'center' }}>
          <div className="mono text-xs" style={{ color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '0.2em', fontWeight: 600, marginBottom: 18 }}>
            Trusted by teams across 12 countries
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
            {[
              { c: 'us', name: 'United States' },
              { c: 'uk', name: 'United Kingdom' },
              { c: 'de', name: 'Germany' },
              { c: 'au', name: 'Australia' },
              { c: 'ae', name: 'UAE' },
              { c: 'ca', name: 'Canada' }
            ].map(f => (
              <div key={f.c} title={f.name} style={{ cursor: 'pointer' }}>
                <Flag country={f.c} w={32} h={20} />
              </div>
            ))}
            <div style={{ width: 1, height: 18, background: 'var(--border)', margin: '0 4px' }} />
            <span className="mono text-xs text-3">+ 6 more</span>
          </div>
        </div>

        {/* Marquee logo strip */}
        <div style={{ position: 'relative', padding: '28px 0', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 160, background: 'linear-gradient(90deg, var(--bg) 0%, transparent 100%)', zIndex: 2, pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 160, background: 'linear-gradient(-90deg, var(--bg) 0%, transparent 100%)', zIndex: 2, pointerEvents: 'none' }} />

          <div className="marquee-track">
            {[0, 1].map(dup => (
              [
                { name: 'Rosachy', mark: 'R', color: 'linear-gradient(135deg, #F43F5E, #FB923C)' },
                { name: 'North Avenue', mark: 'NA', color: 'linear-gradient(135deg, #3B82F6, #06B6D4)' },
                { name: 'HayaaCola', mark: 'H', color: 'linear-gradient(135deg, #10B981, #34D399)' },
                { name: 'CH15', mark: '15', color: 'linear-gradient(135deg, #A855F7, #EC4899)' },
                { name: 'WPEDO', mark: 'W', color: 'linear-gradient(135deg, #F59E0B, #EAB308)' },
                { name: 'Blackstone Vale', mark: 'BV', color: 'linear-gradient(135deg, #0F172A, #475569)' }
              ].map(l => (
                <LogoChip key={`${dup}-${l.name}`} name={l.name} mark={l.mark} color={l.color} />
              ))
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="container" style={{ padding: '0 32px 40px' }}>
          <div style={{ paddingTop: 32, borderTop: '1px solid var(--border)', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
            <Stat value="50+" label="Projects shipped" accent="var(--blue-2)" />
            <Stat value="12" label="Countries served" accent="#67E8F9" />
            <Stat value="98%" label="Client retention" accent="var(--emerald-2)" />
            <Stat value="40–60%" label="Cost savings vs US/UK" accent="#FCD34D" />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="What we do"
            title="Six disciplines. One delivery team."
            sub="No subcontractors, no token-counting agencies. Everything below is built by engineers we hired, trained, and retained."
          />
          <div style={{ marginTop: 56, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            <FeatureCard icon={Icons.code} accent="blue" title="Custom Software" desc="Greenfield platforms, internal tools, and bespoke systems engineered for your exact workflow." />
            <FeatureCard icon={Icons.globe} accent="cyan" title="Web Applications" desc="Angular, Next.js, React — SSR-first builds that ship Core Web Vitals 90+ out of the box." />
            <FeatureCard icon={Icons.mobile} accent="purple" title="Mobile Apps" desc="Flutter & React Native. Offline-first architecture proven across 8 production apps in 2025." />
            <FeatureCard icon={Icons.cloud} accent="emerald" title="Cloud & DevOps" desc="AWS, GCP, Cloudflare. Terraform, GitOps, observability — infra you can hand off cleanly." />
            <FeatureCard icon={Icons.brain} accent="amber" title="AI & Machine Learning" desc="RAG systems, LLM apps, GNN fraud detection. We shipped a 96%-accurate model in 2025." />
            <FeatureCard icon={Icons.palette} accent="rose" title="UI/UX Design" desc="Design systems, prototypes, and validated flows. We can lead or hand off to your team." />
          </div>
        </div>
      </section>

      {/* PRODUCT SHOWROOM TEASER */}
      <section className="section" style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(800px 400px at 50% 0%, rgba(6,182,212,0.10), transparent 70%)',
          pointerEvents: 'none'
        }} />
        <div className="container" style={{ position: 'relative' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', gap: 32, flexWrap: 'wrap' }}>
            <SectionHeader
              eyebrow="The Product Showroom"
              title="Don't just read about our work. Try it."
              sub="Six production-grade platforms running on real infrastructure. Click any demo — log in, click around, break things. Then customize from there."
            />
            <button className="btn btn-ghost" onClick={() => onNav('solutions')}>
              View all 11 products <Icons.arrow size={14} />
            </button>
          </div>

          <div style={{ marginTop: 56, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {[
              { name: 'PayFlow', tag: 'FinTech', tagAccent: 'blue', tagline: 'Smart Digital Banking, Simplified', metric: 'Real-time cross-border payments', accent: '#3B82F6' },
              { name: 'FraudShield AI', tag: 'AI/ML', tagAccent: 'purple', tagline: '96% Accurate AI Fraud Detection', metric: '30–60 sec processing', accent: '#A855F7' },
              { name: 'FieldOps', tag: 'Logistics', tagAccent: 'emerald', tagline: 'Field Force Automation That Works Offline', metric: '8 hr offline sync', accent: '#10B981' },
              { name: 'ClaimWise', tag: 'InsurTech', tagAccent: 'cyan', tagline: 'Insurance, Digitized End-to-End', metric: '70% faster claims', accent: '#06B6D4' },
              { name: 'AuthGate', tag: 'Security', tagAccent: 'amber', tagline: 'Enterprise Identity, Unified', metric: 'OAuth2 / OIDC / SAML', accent: '#F59E0B' },
              { name: 'PropNest', tag: 'PropTech', tagAccent: 'rose', tagline: 'Your 360° Property Ecosystem', metric: '12k+ listings managed', accent: '#F43F5E' }
            ].map(p => (
              <div key={p.name} className="card card-hover" style={{ padding: 0, overflow: 'hidden' }}>
                {/* Preview */}
                <div style={{
                  height: 160,
                  background: `linear-gradient(135deg, ${p.accent}22, ${p.accent}08)`,
                  borderBottom: '1px solid var(--border)',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  <div className="dot-bg" style={{ position: 'absolute', inset: 0, opacity: 0.6 }} />
                  {/* Mini UI preview */}
                  <div style={{ position: 'absolute', inset: 16, display: 'flex', flexDirection: 'column', gap: 6 }}>
                    <div style={{ display: 'flex', gap: 6 }}>
                      <div style={{ width: 60, height: 8, background: 'rgba(255,255,255,0.18)', borderRadius: 2 }} />
                      <div style={{ width: 30, height: 8, background: 'rgba(255,255,255,0.1)', borderRadius: 2 }} />
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 6, marginTop: 10 }}>
                      {[1,2,3].map(i => (
                        <div key={i} style={{ height: 36, background: `${p.accent}22`, borderRadius: 4, border: `1px solid ${p.accent}44` }} />
                      ))}
                    </div>
                    <div style={{ marginTop: 'auto', display:'flex', gap:6 }}>
                      <div style={{ flex: 1, height: 6, background: 'rgba(255,255,255,0.06)', borderRadius: 2 }} />
                      <div style={{ flex: 2, height: 6, background: 'rgba(255,255,255,0.12)', borderRadius: 2 }} />
                      <div style={{ flex: 1, height: 6, background: 'rgba(255,255,255,0.06)', borderRadius: 2 }} />
                    </div>
                  </div>
                </div>
                <div style={{ padding: 20 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                    <h3 style={{ fontSize: 18 }}>{p.name}</h3>
                    <span className={`tag tag-${p.tagAccent}`} style={{ fontSize: 10 }}>{p.tag}</span>
                  </div>
                  <p className="text-sm" style={{ marginBottom: 12 }}>{p.tagline}</p>
                  <div className="mono text-xs text-3" style={{ marginBottom: 14, display: 'flex', alignItems: 'center', gap: 6 }}>
                    <Icons.gauge size={12} /> {p.metric}
                  </div>
                  <div style={{ display: 'flex', gap: 8 }}>
                    <button className="btn btn-primary" style={{ flex: 1, padding: '8px 12px', fontSize: 12, justifyContent: 'center' }}>
                      <Icons.play size={12} /> Try Live Demo
                    </button>
                    <button className="btn btn-ghost" style={{ padding: '8px 12px', fontSize: 12 }}>
                      <Icons.arrow size={12} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI ESTIMATOR BANNER */}
      <section style={{ padding: '64px 0' }}>
        <div className="container">
          <div className="card" style={{
            padding: 0, overflow: 'hidden',
            background: 'linear-gradient(135deg, rgba(59,130,246,0.18) 0%, rgba(6,182,212,0.10) 50%, rgba(16,185,129,0.10) 100%)',
            border: '1px solid rgba(59,130,246,0.3)'
          }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0 }}>
              <div style={{ padding: 48 }}>
                <div className="eyebrow" style={{ marginBottom: 16, borderColor: 'rgba(168,85,247,0.3)', background: 'rgba(168,85,247,0.08)', color: '#C084FC' }}>
                  <Icons.sparkle size={11} /> Powered by Claude
                </div>
                <h2 style={{ fontSize: 38 }}>Get your project estimated in 3 minutes.</h2>
                <p className="mt-4" style={{ fontSize: 16 }}>
                  Skip the "fill a form and wait" routine. Answer 7 quick questions — get scope, timeline, tech stack, team mix, and cost range backed by our 50-project history.
                </p>
                <div className="mt-6" style={{ display: 'flex', gap: 12 }}>
                  <button className="btn btn-emerald" style={{ padding: '12px 20px' }} onClick={() => onNav('estimator')}>
                    Start Free Estimate <Icons.arrow size={14} />
                  </button>
                  <div className="text-xs text-3" style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><Icons.check size={12} style={{color:'var(--emerald)'}}/> No email gate to start</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><Icons.check size={12} style={{color:'var(--emerald)'}}/> Instant PDF</span>
                  </div>
                </div>
              </div>
              <div style={{ padding: 24, position: 'relative' }}>
                {/* Mini wizard preview */}
                <div style={{ background: 'rgba(11,15,27,0.7)', borderRadius: 12, padding: 20, border: '1px solid var(--border)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 16 }}>
                    {[1,2,3,4,5,6,7].map(i => (
                      <div key={i} style={{
                        flex: 1, height: 3, borderRadius: 999,
                        background: i <= 3 ? 'var(--blue)' : 'var(--border)'
                      }} />
                    ))}
                  </div>
                  <div className="mono text-xs text-3" style={{ marginBottom: 4 }}>Step 3 of 7 · Key features</div>
                  <h4 style={{ fontSize: 18, marginBottom: 16 }}>What features do you need?</h4>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6 }}>
                    {[
                      { label: 'Authentication', checked: true },
                      { label: 'Payments', checked: true },
                      { label: 'Admin dashboard', checked: true },
                      { label: 'Real-time chat', checked: false },
                      { label: 'AI/ML features', checked: true },
                      { label: 'Offline support', checked: false },
                    ].map(f => (
                      <div key={f.label} style={{
                        padding: '8px 10px',
                        borderRadius: 6,
                        background: f.checked ? 'rgba(59,130,246,0.12)' : 'var(--surface-2)',
                        border: `1px solid ${f.checked ? 'rgba(59,130,246,0.4)' : 'var(--border)'}`,
                        fontSize: 12,
                        color: f.checked ? 'var(--blue-2)' : 'var(--text-2)',
                        display: 'flex', alignItems: 'center', gap: 6
                      }}>
                        <div style={{
                          width: 12, height: 12, borderRadius: 3,
                          background: f.checked ? 'var(--blue)' : 'transparent',
                          border: `1.5px solid ${f.checked ? 'var(--blue)' : 'var(--border-2)'}`,
                          display: 'grid', placeItems: 'center'
                        }}>{f.checked && <Icons.check size={8} stroke={3} style={{color:'white'}}/>}</div>
                        {f.label}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="How we ship"
            title="Six phases. Receipts every Friday."
            sub="No black-box agency timelines. You get demo videos, sprint reports, and direct Slack access to engineers — every week, without asking."
          />
          <div className="mt-12" style={{ position: 'relative' }}>
            <div style={{
              position: 'absolute',
              top: 32, left: '4%', right: '4%', height: 1,
              background: 'linear-gradient(90deg, transparent, var(--border-2) 10%, var(--border-2) 90%, transparent)',
              zIndex: 0
            }} />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 16, position: 'relative' }}>
              {[
                { n: '01', label: 'Discovery', dur: '1–2 wk', detail: 'Stakeholder interviews, scope lock, risk audit.', icon: Icons.search },
                { n: '02', label: 'Design', dur: '2–4 wk', detail: 'Wireframes, prototype, validated user flows.', icon: Icons.palette },
                { n: '03', label: 'Develop', dur: '6–16 wk', detail: 'Two-week sprints, demo every Friday.', icon: Icons.code },
                { n: '04', label: 'Test', dur: '2 wk', detail: 'QA, security audit, load test, accessibility.', icon: Icons.shield },
                { n: '05', label: 'Deploy', dur: '1 wk', detail: 'Infra hand-off, runbooks, monitoring live.', icon: Icons.rocket },
                { n: '06', label: 'Support', dur: 'ongoing', detail: 'SLA-backed retainer or full hand-off.', icon: Icons.heart }
              ].map(p => (
                <div key={p.n} style={{ textAlign: 'center' }}>
                  <div style={{
                    width: 64, height: 64,
                    margin: '0 auto 16px',
                    borderRadius: 16,
                    background: 'var(--surface)',
                    border: '1px solid var(--border-2)',
                    display: 'grid', placeItems: 'center',
                    color: 'var(--blue-2)',
                    position: 'relative',
                    zIndex: 1
                  }}>
                    <p.icon size={24} />
                  </div>
                  <div className="mono text-xs" style={{ color: 'var(--blue-2)' }}>{p.n}</div>
                  <div style={{ fontWeight: 700, marginTop: 4 }}>{p.label}</div>
                  <div className="mono text-xs text-3 mt-2">{p.dur}</div>
                  <p className="text-xs text-2 mt-3" style={{ padding: '0 8px' }}>{p.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <SectionHeader eyebrow="Industries" title="Domain knowledge, not just code." sub="Eight verticals where we've shipped enough to know the regulations, edge cases, and how to actually talk to your customers." />
          <div className="mt-12" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
            {[
              { name: 'FinTech', icon: Icons.bank, count: '14 projects' },
              { name: 'HealthTech', icon: Icons.heart, count: '7 projects' },
              { name: 'InsurTech', icon: Icons.shield, count: '6 projects' },
              { name: 'PropTech', icon: Icons.home, count: '5 projects' },
              { name: 'E-commerce', icon: Icons.shop, count: '8 projects' },
              { name: 'EdTech', icon: Icons.book, count: '4 projects' },
              { name: 'Logistics', icon: Icons.truck, count: '6 projects' },
              { name: 'Enterprise SaaS', icon: Icons.briefcase, count: '12 projects' }
            ].map(ind => (
              <div key={ind.name} className="card card-hover" style={{ padding: 20, display: 'flex', alignItems: 'center', gap: 14, cursor: 'pointer' }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 10,
                  background: 'var(--surface-2)',
                  border: '1px solid var(--border)',
                  display: 'grid', placeItems: 'center',
                  color: 'var(--blue-2)'
                }}><ind.icon size={20} /></div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 15 }}>{ind.name}</div>
                  <div className="mono text-xs text-3">{ind.count}</div>
                </div>
                <Icons.arrow size={14} style={{ marginLeft: 'auto', color: 'var(--text-3)' }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="card" style={{ padding: 56, background: 'linear-gradient(135deg, rgba(20,25,37,0.8), rgba(15,22,41,0.6))' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center' }}>
              <div>
                <div style={{ color: 'var(--blue-2)', fontSize: 56, fontFamily: 'serif', lineHeight: 0.5, marginBottom: 16 }}>"</div>
                <p style={{ fontSize: 22, lineHeight: 1.5, color: 'var(--text)', fontWeight: 500 }}>
                  We came to NimbleSL with a half-broken fraud system and a 6-week deadline. They shipped a GNN-based model that hit <span style={{color:'var(--emerald-2)'}}>96% accuracy</span> in production. No US shop quoted under $250K — Anik's team built it for a fifth of that.
                </p>
                <div className="mt-8" style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <Avatar initials="SP" size={52} />
                  <div>
                    <div style={{ fontWeight: 700 }}>Sarah Patel</div>
                    <div className="text-sm text-2">VP Engineering · Blackstone Vale Insurance</div>
                  </div>
                  <div style={{ marginLeft: 'auto', display: 'flex', gap: 2, color: '#FCD34D' }}>
                    {[1,2,3,4,5].map(s => <Icons.star key={s} size={14} />)}
                  </div>
                </div>
              </div>
              <div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <MetricCard value="96%" label="Fraud detection accuracy" accent="emerald" sub="vs 71% on legacy rules engine" />
                  <MetricCard value="6 wk" label="From kickoff to production" accent="blue" />
                  <MetricCard value="$48K" label="Total project cost" accent="cyan" sub="vs $260K avg US quote" />
                  <MetricCard value="0" label="False negatives in 90 days" accent="purple" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOG TEASER */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: 40 }}>
            <SectionHeader eyebrow="Insights" title="From the engineering desk." />
            <button className="btn btn-ghost" onClick={() => onNav('blog')}>All posts <Icons.arrow size={14} /></button>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {[
              { tag: 'FinTech', cat: 'Cost & Decision', title: 'How Much Does It Cost to Build a FinTech App in 2026?', read: '12 min', accent: '#3B82F6' },
              { tag: 'AI/ML', cat: 'Deep-Dive', title: 'Fraud Detection with Graph Neural Networks: A 96% Accuracy Case Study', read: '18 min', accent: '#A855F7' },
              { tag: 'Mobile', cat: 'Engineering', title: 'Offline-First Mobile Apps with Flutter: How We Built FieldOps', read: '14 min', accent: '#10B981' }
            ].map(post => (
              <div key={post.title} className="card card-hover" style={{ padding: 0, overflow: 'hidden', cursor: 'pointer' }}>
                <div style={{
                  height: 160,
                  background: `linear-gradient(135deg, ${post.accent}33, ${post.accent}10)`,
                  borderBottom: '1px solid var(--border)',
                  position: 'relative'
                }}>
                  <div className="dot-bg" style={{ position: 'absolute', inset: 0, opacity: 0.6 }} />
                  <div style={{
                    position: 'absolute', bottom: 16, left: 16,
                    fontFamily: 'var(--font-mono)', fontSize: 56, fontWeight: 800,
                    color: post.accent, opacity: 0.6, lineHeight: 1
                  }}>{post.tag.slice(0,2).toUpperCase()}</div>
                </div>
                <div style={{ padding: 20 }}>
                  <div style={{ display: 'flex', gap: 8, marginBottom: 10 }}>
                    <span className="tag tag-blue" style={{ fontSize: 10 }}>{post.tag}</span>
                    <span className="tag" style={{ fontSize: 10 }}>{post.cat}</span>
                  </div>
                  <h3 style={{ fontSize: 17, lineHeight: 1.35, marginBottom: 12 }}>{post.title}</h3>
                  <div className="text-xs text-3" style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <Icons.clock size={12} /> {post.read} read
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ padding: '96px 0 64px', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(900px 500px at 50% 100%, rgba(59,130,246,0.15), transparent 70%)',
          pointerEvents: 'none'
        }} />
        <div className="container" style={{ textAlign: 'center', position: 'relative' }}>
          <h2 style={{ fontSize: 56 }}>Ready to build something great?</h2>
          <p className="mt-4" style={{ fontSize: 18, maxWidth: 580, margin: '16px auto 0' }}>
            Three ways in. Pick the one that fits how you work.
          </p>
          <div className="mt-8" style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn btn-emerald" style={{ padding: '14px 24px', fontSize: 15 }}>
              <Icons.clock size={16} /> Book a free consultation
            </button>
            <button className="btn btn-primary" style={{ padding: '14px 24px', fontSize: 15 }} onClick={() => onNav('estimator')}>
              <Icons.sparkle size={16} /> Try AI Estimator
            </button>
            <button className="btn btn-ghost" style={{ padding: '14px 24px', fontSize: 15 }}>
              <Icons.message size={16} /> Chat with NimbleBot
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

window.Homepage = Homepage;
