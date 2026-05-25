// Mega menus (Services + Solutions) + Light mode hero + Enhanced testimonials carousel

const MegaMenuShowcase = ({ onNav }) => {
  return (
    <div className="page">
      <NavBar onNav={onNav} />
      <section style={{ padding: '48px 0 24px' }}>
        <div className="container">
          <div className="eyebrow" style={{ marginBottom: 16 }}><span className="ev-dot" />Navigation · mega menus</div>
          <h1 style={{ fontSize: 48 }}>Mega menus,<br/><span className="grad-blue">live preview.</span></h1>
          <p className="mt-6" style={{ fontSize: 17, maxWidth: 560 }}>
            Two full-width dropdowns triggered from the nav. Both glassmorphism + 1px gradient border, with a featured CTA panel on the right.
          </p>
        </div>
      </section>

      {/* Services Mega Menu */}
      <section style={{ padding: '32px 0' }}>
        <div className="container">
          <div className="mono text-xs text-3" style={{ marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.1em' }}>1 · Services dropdown</div>
          <div style={{ position: 'relative', background: 'var(--bg-2)', border: '1px solid var(--border)', borderRadius: 12, overflow: 'hidden', height: 540 }}>
            {/* Fake nav bar */}
            <div style={{ height: 64, borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', padding: '0 32px', gap: 32 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 26, height: 26, borderRadius: 7, background: 'linear-gradient(135deg, #3B82F6, #06B6D4)' }} />
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 15 }}>NimbleSL</div>
              </div>
              {['Services', 'Solutions', 'Case Studies', 'Hire Developers', 'About'].map((l, i) => (
                <div key={l} style={{
                  fontSize: 14, fontWeight: 500,
                  color: i === 0 ? 'var(--text)' : 'var(--text-2)',
                  display: 'flex', alignItems: 'center', gap: 4,
                  position: 'relative'
                }}>
                  {l}
                  <Icons.arrowDown size={12} />
                  {i === 0 && <div style={{ position: 'absolute', bottom: -18, left: 0, right: 0, height: 2, background: 'var(--blue)' }} />}
                </div>
              ))}
            </div>

            {/* Mega menu pane */}
            <div style={{
              position: 'absolute', top: 64, left: 0, right: 0,
              background: 'rgba(15, 22, 41, 0.96)',
              backdropFilter: 'blur(20px)',
              border: '1px solid var(--border-2)',
              borderTop: 'none',
              padding: 32,
              boxShadow: '0 30px 60px -10px rgba(0,0,0,0.6)'
            }}>
              <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 32 }}>
                <div>
                  <div className="mono text-xs text-3" style={{ marginBottom: 16, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Engineering disciplines</div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 4 }}>
                    {[
                      { i: Icons.code, t: 'Custom Software', d: 'Bespoke platforms', c: '#60A5FA' },
                      { i: Icons.globe, t: 'Web Applications', d: 'Angular, Next.js, React', c: '#67E8F9' },
                      { i: Icons.mobile, t: 'Mobile Apps', d: 'Flutter & React Native', c: '#C084FC' },
                      { i: Icons.cloud, t: 'Cloud & DevOps', d: 'AWS, GCP, Cloudflare', c: '#34D399' },
                      { i: Icons.brain, t: 'AI & Machine Learning', d: 'LLM apps & custom ML', c: '#FCD34D' },
                      { i: Icons.palette, t: 'UI / UX Design', d: 'Design systems & flows', c: '#FDA4AF' }
                    ].map(s => (
                      <div key={s.t} style={{
                        padding: 14, borderRadius: 10, cursor: 'pointer',
                        display: 'flex', gap: 12, alignItems: 'start',
                        transition: 'all .15s'
                      }}
                      onMouseEnter={e => { e.currentTarget.style.background = 'var(--surface-2)'; }}
                      onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}>
                        <div style={{ width: 36, height: 36, borderRadius: 8, background: `${s.c}22`, border: `1px solid ${s.c}44`, color: s.c, display: 'grid', placeItems: 'center', flexShrink: 0 }}>
                          <s.i size={16} />
                        </div>
                        <div>
                          <div style={{ fontSize: 13, fontWeight: 600 }}>{s.t}</div>
                          <div className="text-xs text-3 mt-2">{s.d}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Featured CTA */}
                <div className="card" style={{ padding: 22, background: 'linear-gradient(135deg, rgba(245,158,11,0.12), rgba(168,85,247,0.06))', borderColor: 'rgba(245,158,11,0.3)' }}>
                  <div className="eyebrow" style={{ marginBottom: 12, fontSize: 10, background: 'rgba(245,158,11,0.1)', color: '#FCD34D', borderColor: 'rgba(245,158,11,0.3)' }}>
                    <Icons.sparkle size={10} /> Featured
                  </div>
                  <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 6 }}>Not sure which service you need?</div>
                  <p className="text-xs" style={{ marginBottom: 12 }}>Describe your project — our AI Estimator suggests the right service mix and budget in 3 minutes.</p>
                  <button className="btn btn-emerald" style={{ width: '100%', padding: '8px 12px', fontSize: 12, justifyContent: 'center' }}>
                    Try AI Estimator <Icons.arrow size={12} />
                  </button>
                  <div style={{ height: 1, background: 'var(--border)', margin: '16px 0' }} />
                  <div className="mono text-xs text-3 mb-2" style={{ marginBottom: 8 }}>POPULAR CASE STUDY</div>
                  <div className="text-xs" style={{ fontWeight: 600, color: 'var(--text)' }}>FraudShield AI</div>
                  <div className="text-xs text-2 mt-2">96% accuracy · 6 weeks · $48K</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Mega Menu */}
      <section style={{ padding: '32px 0 96px' }}>
        <div className="container">
          <div className="mono text-xs text-3" style={{ marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.1em' }}>2 · Solutions dropdown</div>
          <div style={{ position: 'relative', background: 'var(--bg-2)', border: '1px solid var(--border)', borderRadius: 12, overflow: 'hidden', height: 600 }}>
            <div style={{ height: 64, borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', padding: '0 32px', gap: 32 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 26, height: 26, borderRadius: 7, background: 'linear-gradient(135deg, #3B82F6, #06B6D4)' }} />
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 15 }}>NimbleSL</div>
              </div>
              {['Services', 'Solutions', 'Case Studies', 'Hire Developers', 'About'].map((l, i) => (
                <div key={l} style={{ fontSize: 14, fontWeight: 500, color: i === 1 ? 'var(--text)' : 'var(--text-2)', display: 'flex', alignItems: 'center', gap: 4, position: 'relative' }}>
                  {l}<Icons.arrowDown size={12} />
                  {i === 1 && <div style={{ position: 'absolute', bottom: -18, left: 0, right: 0, height: 2, background: 'var(--blue)' }} />}
                </div>
              ))}
            </div>

            <div style={{
              position: 'absolute', top: 64, left: 0, right: 0,
              background: 'rgba(15, 22, 41, 0.96)', backdropFilter: 'blur(20px)',
              border: '1px solid var(--border-2)', borderTop: 'none',
              padding: 32, boxShadow: '0 30px 60px -10px rgba(0,0,0,0.6)'
            }}>
              <div style={{ display: 'grid', gridTemplateColumns: '2.4fr 1fr', gap: 32 }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                    <div className="mono text-xs text-3" style={{ textTransform: 'uppercase', letterSpacing: '0.1em' }}>By industry · 11 products live</div>
                    <a style={{ fontSize: 12, color: 'var(--blue-2)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 4, cursor: 'pointer' }}>
                      View all solutions <Icons.arrow size={11} />
                    </a>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: 16 }}>
                    {[
                      { ind: 'FinTech', c: '#60A5FA', products: [
                        { n: 'PayFlow', t: 'Digital banking' },
                        { n: 'FraudShield AI', t: 'Fraud detection' }
                      ]},
                      { ind: 'InsurTech', c: '#67E8F9', products: [
                        { n: 'ClaimWise', t: 'End-to-end claims' }
                      ]},
                      { ind: 'PropTech', c: '#FDA4AF', products: [
                        { n: 'PropNest', t: '360° ecosystem' }
                      ]},
                      { ind: 'Enterprise', c: '#C084FC', products: [
                        { n: 'AuthGate', t: 'Identity & access' },
                        { n: 'CaseFlow', t: 'Case management' },
                        { n: 'SafeGuard', t: 'Real-time protection' }
                      ]},
                      { ind: 'Logistics', c: '#34D399', products: [
                        { n: 'FieldOps', t: 'Offline field force' }
                      ]},
                      { ind: 'HR Tech', c: '#FCD34D', products: [
                        { n: 'HireSync', t: 'Recruitment at scale' }
                      ]},
                      { ind: 'Legal Tech', c: '#F43F5E', products: [
                        { n: 'FieldLaw', t: 'Field legal ops' }
                      ]},
                      { ind: 'Retail', c: '#FB923C', products: [
                        { n: 'TailorHub', t: 'Modern tailor mgmt' }
                      ]}
                    ].map(col => (
                      <div key={col.ind}>
                        <div className="mono text-xs" style={{ color: col.c, fontWeight: 600, marginBottom: 10, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{col.ind}</div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                          {col.products.map(p => (
                            <div key={p.n} style={{
                              padding: '8px 10px', borderRadius: 7, cursor: 'pointer',
                              display: 'flex', flexDirection: 'column', gap: 2
                            }}
                            onMouseEnter={e => e.currentTarget.style.background = 'var(--surface-2)'}
                            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
                              <div style={{ fontSize: 13, fontWeight: 600 }}>{p.n}</div>
                              <div className="text-xs text-3">{p.t}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="card" style={{ padding: 22, background: 'linear-gradient(135deg, rgba(59,130,246,0.14), rgba(6,182,212,0.06))', borderColor: 'rgba(59,130,246,0.3)' }}>
                  <div className="eyebrow" style={{ marginBottom: 12, fontSize: 10 }}>
                    <span className="ev-dot" /> Featured
                  </div>
                  <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 6 }}>The Product Showroom</div>
                  <p className="text-xs" style={{ marginBottom: 14 }}>Try our 11 live demos. Log in, click around, break things. Then customize from there.</p>
                  {/* mini grid */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6, marginBottom: 14 }}>
                    {[
                      { n: 'PayFlow', c: '#3B82F6' },
                      { n: 'FraudShield', c: '#A855F7' },
                      { n: 'FieldOps', c: '#10B981' },
                      { n: 'AuthGate', c: '#F59E0B' }
                    ].map(p => (
                      <div key={p.n} style={{
                        padding: 8, background: `${p.c}1A`, border: `1px solid ${p.c}44`,
                        borderRadius: 6, fontSize: 11, fontWeight: 600, color: p.c, textAlign: 'center'
                      }}>{p.n}</div>
                    ))}
                  </div>
                  <button className="btn btn-primary" style={{ width: '100%', padding: '8px', fontSize: 12, justifyContent: 'center' }}>
                    Explore showroom <Icons.arrow size={12} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

// ===== Light mode hero =====
const LightModeHero = ({ onNav }) => {
  return (
    <div className="page" style={{ background: '#F8FAFC', color: '#0F172A' }}>
      {/* Light nav — subtle bottom shadow + hairline border */}
      <header style={{
        position: 'sticky', top: 0, zIndex: 50,
        background: 'rgba(248,250,252,0.85)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid #E2E8F0',
        boxShadow: '0 1px 0 rgba(15,23,42,0.04), 0 4px 12px -8px rgba(15,23,42,0.10)'
      }}>
        <div className="container" style={{ height: 68, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 40 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 30, height: 30, borderRadius: 8, background: 'linear-gradient(135deg, #2563EB, #0891B2)', display: 'grid', placeItems: 'center', color: 'white', fontWeight: 800, fontSize: 14, fontFamily: 'var(--font-display)', boxShadow: '0 4px 16px rgba(37,99,235,0.4)' }}>N</div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 16, color: '#0F172A' }}>NimbleSL</div>
            </div>
            <nav style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
              {['Services', 'Solutions', 'Case Studies', 'Hire Developers', 'Resources', 'About'].map(l => (
                <div key={l} style={{ color: '#475569', fontSize: 14, fontWeight: 500 }}>{l}</div>
              ))}
            </nav>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <ThemeToggle isLight={true} />
            <button style={{
              padding: '8px 14px', fontSize: 13, fontFamily: 'inherit',
              background: 'white', border: '1px solid #CBD5E1', borderRadius: 8,
              color: '#0F172A', fontWeight: 600,
              display: 'inline-flex', alignItems: 'center', gap: 6, cursor: 'pointer',
              boxShadow: '0 1px 2px rgba(15,23,42,0.05)'
            }}>
              <Icons.sparkle size={14} /> Try AI Estimator
            </button>
            <button style={{
              padding: '8px 16px', fontSize: 13, fontFamily: 'inherit',
              background: '#2563EB', border: 0, borderRadius: 8, color: 'white', fontWeight: 600,
              display: 'inline-flex', alignItems: 'center', gap: 6,
              boxShadow: '0 1px 2px rgba(37,99,235,0.2), 0 8px 24px -8px rgba(37,99,235,0.5)',
              cursor: 'pointer'
            }}>
              Book Consultation <Icons.arrow size={14} />
            </button>
          </div>
        </div>
      </header>

      {/* Light hero — dialed-down soft mesh */}
      <section style={{ position: 'relative', overflow: 'hidden', padding: '80px 0 80px' }}>
        {/* Soft gradient glows — 5-8% opacity */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: `
            radial-gradient(900px 500px at 85% -10%, rgba(59,130,246,0.07), transparent 60%),
            radial-gradient(700px 500px at 0% 30%, rgba(6,182,212,0.06), transparent 60%),
            radial-gradient(500px 300px at 50% 100%, rgba(37,99,235,0.04), transparent 60%)
          `
        }} />
        {/* Very subtle dot pattern */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(circle, rgba(15,23,42,0.05) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          maskImage: 'radial-gradient(ellipse at top, black 20%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse at top, black 20%, transparent 70%)',
          pointerEvents: 'none',
          opacity: 0.7
        }} />

        <div className="container" style={{ position: 'relative' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 64, alignItems: 'center' }}>
            <div>
              {/* Eyebrow */}
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 600,
                letterSpacing: '0.08em', textTransform: 'uppercase',
                color: '#1D4ED8',
                padding: '7px 14px', borderRadius: 999,
                background: 'white',
                border: '1px solid #DBEAFE',
                marginBottom: 28,
                boxShadow: '0 1px 2px rgba(15,23,42,0.04), 0 4px 12px -6px rgba(37,99,235,0.18)'
              }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#2563EB', boxShadow: '0 0 8px rgba(37,99,235,0.7)' }} />
                Now booking Q3 2026 engagements
              </div>

              <h1 style={{
                fontFamily: 'var(--font-display)', fontWeight: 800, letterSpacing: '-0.035em',
                fontSize: 64, lineHeight: 1.04, color: '#0F172A'
              }}>
                Silicon Valley<br/>
                engineering.<br/>
                <span style={{
                  background: 'linear-gradient(135deg, #2563EB 0%, #0891B2 60%, #0EA5E9 100%)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>Bangladesh pricing.</span><br/>
                Your IP.
              </h1>

              <p style={{ marginTop: 28, fontSize: 18, maxWidth: 520, color: '#334155', lineHeight: 1.6 }}>
                50+ enterprise platforms shipped across 12 countries. From $5K MVPs to $120K+ production systems — without the agency markup or the offshore quality lottery.
              </p>

              <div style={{ marginTop: 32, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <button style={{
                  padding: '14px 22px', fontSize: 15, background: '#10B981', border: 0, borderRadius: 8,
                  color: 'white', fontWeight: 600, fontFamily: 'inherit',
                  display: 'inline-flex', alignItems: 'center', gap: 8, cursor: 'pointer',
                  boxShadow: '0 1px 2px rgba(16,185,129,0.2), 0 10px 28px -8px rgba(16,185,129,0.55)'
                }}>
                  <Icons.sparkle size={16} /> Get a Free Estimate
                </button>
                <button style={{
                  padding: '14px 22px', fontSize: 15, background: 'white',
                  border: '1px solid #CBD5E1', borderRadius: 8, color: '#0F172A', fontWeight: 600,
                  fontFamily: 'inherit',
                  display: 'inline-flex', alignItems: 'center', gap: 8, cursor: 'pointer',
                  boxShadow: '0 1px 2px rgba(15,23,42,0.04), 0 4px 12px -6px rgba(15,23,42,0.1)'
                }}>
                  Explore Our Products <Icons.arrow size={16} />
                </button>
              </div>

              <div style={{ marginTop: 36, display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ display: 'flex' }}>
                    {['AR','MK','SH','PL'].map((i, idx) => (
                      <div key={i} style={{ marginLeft: idx ? -10 : 0 }}>
                        <div style={{
                          width: 32, height: 32, borderRadius: '50%',
                          background: `linear-gradient(135deg, ${['#2563EB','#0891B2','#10B981','#A855F7'][idx]}, ${['#60A5FA','#67E8F9','#34D399','#C084FC'][idx]})`,
                          display: 'grid', placeItems: 'center', color: 'white',
                          fontWeight: 700, fontSize: 12, fontFamily: 'var(--font-display)',
                          border: '2px solid white',
                          boxShadow: '0 2px 6px rgba(15,23,42,0.12)'
                        }}>{i}</div>
                      </div>
                    ))}
                  </div>
                  <div style={{ fontSize: 12, color: '#475569' }}>
                    <div style={{ display: 'flex', gap: 2, color: '#F59E0B' }}>{[1,2,3,4,5].map(s => <Icons.star key={s} size={11} />)}</div>
                    <div style={{ marginTop: 2 }}><b style={{color:'#0F172A'}}>4.9/5</b> · 50+ verified reviews</div>
                  </div>
                </div>
                <div style={{ width: 1, height: 32, background: '#E2E8F0' }} />
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: '#475569' }}>
                  <span style={{color:'#059669', fontWeight: 600}}>$25–49/hr</span> · Clutch verified
                </div>
              </div>
            </div>

            {/* Terminal — STAYS DARK */}
            <div style={{ position: 'relative' }}>
              {/* Soft blue glow behind terminal */}
              <div style={{
                position: 'absolute', inset: -32,
                background: 'radial-gradient(circle at 50% 50%, rgba(37,99,235,0.18), transparent 70%)',
                filter: 'blur(40px)', zIndex: 0
              }} />
              <div style={{
                position: 'relative', zIndex: 1,
                background: '#0F1629',
                border: '1px solid #1F2A44',
                borderRadius: 14,
                boxShadow: '0 1px 2px rgba(15,23,42,0.08), 0 24px 48px -16px rgba(15,23,42,0.30), 0 40px 80px -24px rgba(37,99,235,0.25)',
                overflow: 'hidden'
              }}>
                <div style={{
                  padding: '10px 14px',
                  borderBottom: '1px solid #1F2A44',
                  display: 'flex', alignItems: 'center', gap: 10,
                  background: 'rgba(10,14,26,0.6)'
                }}>
                  <div style={{ display: 'flex', gap: 6 }}>
                    <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#F43F5E' }} />
                    <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#F59E0B' }} />
                    <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#10B981' }} />
                  </div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: '#64748B' }}>~/nimblesl/estimator</div>
                </div>
                <div style={{ padding: 20, fontFamily: 'var(--font-mono)', fontSize: 12.5, lineHeight: 1.9, color: '#CBD5E1' }}>
                  <div>
                    <span style={{ color: '#64748B' }}>$ </span>
                    <span style={{ color: '#F1F5F9' }}>nimblesl estimate</span>{' '}
                    <span style={{color:'#67E8F9'}}>--type=fintech</span>
                  </div>
                  <div style={{ color: '#64748B' }}>→ analyzing 50 reference projects…</div>
                  <div style={{ color: '#34D399' }}>✓ matched 7 similar engagements</div>
                  <div style={{ color: '#64748B' }}>→ generating scope, timeline, stack…</div>
                  <div style={{ color: '#34D399' }}>✓ report ready in 2.4s</div>
                  <div style={{
                    marginTop: 12, padding: 12,
                    background: 'rgba(16,185,129,0.06)',
                    border: '1px solid rgba(16,185,129,0.3)',
                    borderRadius: 8
                  }}>
                    <div style={{ color: '#94A3B8', fontSize: 11, marginBottom: 6 }}>┌─ ESTIMATE ────────────────────────┐</div>
                    {[
                      ['Scope', 'Digital wallet + KYC'],
                      ['Timeline', '14–18 weeks'],
                      ['Team', '1 PM · 4 Eng · 1 QA'],
                      ['Estimate', '$42K–$68K']
                    ].map(([k,v], i) => (
                      <div key={k} style={{ display:'flex', justifyContent:'space-between' }}>
                        <span style={{ color: '#94A3B8' }}>{k}</span>
                        <span style={{color: i === 3 ? '#34D399' : '#F1F5F9', fontWeight: i === 3 ? 700 : 400}}>{v}</span>
                      </div>
                    ))}
                  </div>
                  <div style={{ marginTop: 10 }}>
                    <span style={{ color: '#64748B' }}>$ </span>
                    <span className="blink" style={{ color: '#F1F5F9' }}>▊</span>
                  </div>
                </div>
              </div>

              {/* Floating status chip */}
              <div style={{
                position: 'absolute', top: -14, right: -14,
                background: 'white',
                border: '1px solid #A7F3D0',
                borderRadius: 999,
                padding: '6px 12px',
                fontSize: 11,
                fontFamily: 'var(--font-mono)',
                color: '#059669',
                display: 'flex', alignItems: 'center', gap: 6,
                boxShadow: '0 8px 24px -6px rgba(15,23,42,0.15), 0 2px 4px rgba(15,23,42,0.05)',
                zIndex: 2,
                fontWeight: 600
              }}>
                <span style={{
                  width: 6, height: 6, borderRadius: '50%', background: '#10B981',
                  boxShadow: '0 0 8px #10B981'
                }} />
                AI-powered · 2.4s avg
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social proof strip — proper contrast */}
      <section style={{
        borderTop: '1px solid #E2E8F0',
        borderBottom: '1px solid #E2E8F0',
        padding: '32px 0',
        background: 'rgba(255,255,255,0.6)',
        position: 'relative'
      }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 32, flexWrap: 'wrap' }}>
            <div style={{
              fontFamily: 'var(--font-mono)', fontSize: 11,
              color: '#475569', textTransform: 'uppercase', letterSpacing: '0.15em',
              fontWeight: 600
            }}>
              Trusted by teams at
            </div>
            <div style={{ display: 'flex', gap: 40, alignItems: 'center', flexWrap: 'wrap' }}>
              {['Rosachy', 'North Avenue', 'HayaaCola', 'CH15', 'WPEDO', 'Blackstone Vale'].map(c => (
                <div key={c} style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: 18,
                  color: '#1E293B',
                  letterSpacing: '-0.02em',
                  opacity: 0.75
                }}>{c}</div>
              ))}
            </div>
          </div>
          <div style={{
            marginTop: 32, paddingTop: 32,
            borderTop: '1px solid #E2E8F0',
            display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24
          }}>
            {[
              { v: '50+', l: 'Projects shipped', c: '#2563EB' },
              { v: '12', l: 'Countries served', c: '#0891B2' },
              { v: '98%', l: 'Client retention', c: '#059669' },
              { v: '40–60%', l: 'Cost savings vs US/UK', c: '#D97706' }
            ].map(s => (
              <div key={s.l}>
                <div style={{
                  fontFamily: 'var(--font-display)', fontWeight: 800,
                  fontSize: 40, letterSpacing: '-0.02em',
                  color: s.c, lineHeight: 1
                }}>{s.v}</div>
                <div style={{ marginTop: 8, fontSize: 13, color: '#1E293B', fontWeight: 500 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Annotation */}
      <section style={{ padding: '64px 0' }}>
        <div className="container">
          <div style={{
            padding: 24,
            background: 'white',
            border: '1px solid #E2E8F0',
            borderRadius: 12,
            boxShadow: '0 1px 2px rgba(15,23,42,0.04), 0 8px 24px -12px rgba(15,23,42,0.10)',
            display: 'flex', gap: 16, alignItems: 'start'
          }}>
            <div style={{
              width: 36, height: 36, borderRadius: 9,
              background: 'rgba(37,99,235,0.08)',
              border: '1px solid rgba(37,99,235,0.25)',
              display: 'grid', placeItems: 'center',
              color: '#2563EB', flexShrink: 0
            }}>
              <Icons.sun size={18} />
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: 15, color: '#0F172A', marginBottom: 6 }}>Light-mode design notes</div>
              <p style={{ fontSize: 13, color: '#475569', lineHeight: 1.6, margin: 0 }}>
                Background <code style={{ background: '#F1F5F9', padding: '1px 6px', borderRadius: 4, fontFamily: 'var(--font-mono)', fontSize: 11 }}>#F8FAFC</code> + 5–8% blue/cyan mesh glows. Cards use <strong style={{color:'#0F172A'}}>soft shadows + hairline #E2E8F0 borders</strong>, not glassmorphism. The terminal <strong style={{color:'#0F172A'}}>stays dark</strong> — it's a focal contrast point. Accent text uses the richer <code style={{ background: '#F1F5F9', padding: '1px 6px', borderRadius: 4, fontFamily: 'var(--font-mono)', fontSize: 11 }}>#2563EB → #0891B2</code> gradient. Ghost button: white bg + <code style={{ background: '#F1F5F9', padding: '1px 6px', borderRadius: 4, fontFamily: 'var(--font-mono)', fontSize: 11 }}>#CBD5E1</code> border + 1px shadow.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const ThemeToggle = ({ isLight = false }) => (
  <div style={{
    display: 'flex', alignItems: 'center',
    background: isLight ? '#F1F5F9' : 'var(--surface)',
    border: `1px solid ${isLight ? '#E2E8F0' : 'var(--border)'}`,
    borderRadius: 999, padding: 3,
    gap: 0
  }}>
    {[
      { i: Icons.sun, on: isLight },
      { i: Icons.moon, on: !isLight }
    ].map((s, idx) => (
      <button key={idx} style={{
        width: 28, height: 28, borderRadius: 999,
        background: s.on ? (isLight ? 'white' : 'var(--surface-3)') : 'transparent',
        border: 0, cursor: 'pointer',
        display: 'grid', placeItems: 'center',
        color: s.on ? (isLight ? '#F59E0B' : 'var(--blue-2)') : (isLight ? '#94A3B8' : 'var(--text-3)'),
        boxShadow: s.on ? '0 1px 3px rgba(0,0,0,0.15)' : 'none'
      }}>
        <s.i size={13} />
      </button>
    ))}
  </div>
);

// ===== Enhanced testimonials carousel =====
const EnhancedTestimonials = ({ onNav }) => {
  const [active, setActive] = React.useState(0);

  const testimonials = [
    {
      quote: "Anik's team understood our domain in week one. By week three they were teaching my data scientists how the R-GCN was learning fraud patterns we'd never spotted manually. Best $48K we've ever spent.",
      name: 'Sarah Patel',
      role: 'VP Engineering',
      company: 'Blackstone Vale Insurance',
      initials: 'SP',
      metric: '96% accuracy',
      sub: 'FraudShield AI',
      accent: '#A855F7'
    },
    {
      quote: "We came to NimbleSL with a half-broken wallet platform and a 12-week deadline. They shipped PayFlow with 5 currencies, zero downtime, and full Stripe Connect integration in 14 weeks for $62K. Three US shops had quoted $180K+.",
      name: 'Maya Rodríguez',
      role: 'CTO',
      company: 'Rosachy',
      initials: 'MR',
      metric: '$62K · 14 wk',
      sub: 'PayFlow build',
      accent: '#3B82F6'
    },
    {
      quote: "I've worked with three offshore agencies before NimbleSL. None of them held weekly demos. None of them sent Friday sprint reports. None of them shipped code I didn't have to rewrite. Anik's team did all three from week one.",
      name: 'James O\'Connor',
      role: 'Head of Product',
      company: 'North Avenue Logistics',
      initials: 'JO',
      metric: '8 hr offline sync',
      sub: 'FieldOps mobile app',
      accent: '#10B981'
    },
    {
      quote: "Their AI estimator gave us a $42K range with 87% confidence on a Sunday night. The final invoice came in at $41,800. That kind of estimation accuracy is unheard of in offshore.",
      name: 'Lukas Bauer',
      role: 'Founder',
      company: 'HayaaCola Insurance',
      initials: 'LB',
      metric: '$41.8K actual',
      sub: 'ClaimWise customization',
      accent: '#06B6D4'
    },
    {
      quote: "Hand-off was a real handoff. Runbooks, recorded walkthroughs of every service, Slack channel access for 90 days. My team owns the code now. That's how this should work.",
      name: 'Priya Anand',
      role: 'Engineering Lead',
      company: 'WPEDO',
      initials: 'PA',
      metric: '< 50ms auth',
      sub: 'AuthGate enterprise',
      accent: '#F59E0B'
    }
  ];

  return (
    <div className="page">
      <NavBar onNav={onNav} />

      <section style={{ padding: '64px 0 32px' }}>
        <div className="container">
          <div className="eyebrow" style={{ marginBottom: 16 }}><span className="ev-dot" />Testimonials · enhanced layout</div>
          <h1 style={{ fontSize: 48 }}>What clients ship<br/><span className="grad-blue">after working with us.</span></h1>
          <p className="mt-6" style={{ fontSize: 17, maxWidth: 560 }}>
            All quotes verified on Clutch. Star ratings and metrics from real engagements — not staged.
          </p>
        </div>
      </section>

      {/* Featured quote */}
      <section style={{ padding: '24px 0 32px' }}>
        <div className="container">
          <div className="card" style={{ padding: 48, background: `linear-gradient(135deg, ${testimonials[active].accent}1A, ${testimonials[active].accent}06)`, borderColor: `${testimonials[active].accent}40` }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 48, alignItems: 'center' }}>
              <div>
                <div style={{ display: 'flex', gap: 2, marginBottom: 16, color: '#FCD34D' }}>
                  {[1,2,3,4,5].map(s => <Icons.star key={s} size={16} />)}
                </div>
                <div style={{ fontSize: 56, color: testimonials[active].accent, lineHeight: 0.5, marginBottom: 12, fontFamily: 'serif' }}>"</div>
                <p style={{ fontSize: 22, lineHeight: 1.5, color: 'var(--text)', fontWeight: 500 }}>
                  {testimonials[active].quote}
                </p>
                <div className="mt-8" style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <Avatar initials={testimonials[active].initials} size={56} />
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 15 }}>{testimonials[active].name}</div>
                    <div className="text-sm text-2 mt-2">{testimonials[active].role} · {testimonials[active].company}</div>
                  </div>
                  <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 8, padding: '8px 14px', background: 'rgba(16,185,129,0.10)', border: '1px solid rgba(16,185,129,0.35)', borderRadius: 999 }}>
                    <Icons.check size={12} stroke={3} style={{ color: 'var(--emerald-2)' }} />
                    <span className="mono text-xs" style={{ color: 'var(--emerald-2)', fontWeight: 600 }}>Verified on Clutch</span>
                  </div>
                </div>
              </div>

              <div className="card" style={{ padding: 28, background: 'var(--surface-2)' }}>
                <div className="mono text-xs text-3" style={{ marginBottom: 8 }}>PROJECT IMPACT</div>
                <div style={{ fontSize: 44, fontFamily: 'var(--font-display)', fontWeight: 800, color: testimonials[active].accent, letterSpacing: '-0.02em', lineHeight: 1 }}>
                  {testimonials[active].metric}
                </div>
                <div className="mt-4 text-sm" style={{ color: 'var(--text)', fontWeight: 600 }}>{testimonials[active].sub}</div>
                <button className="btn btn-soft" style={{ width: '100%', marginTop: 20, justifyContent: 'center' }} onClick={() => onNav('case-study')}>
                  Read case study <Icons.arrow size={13} />
                </button>
              </div>
            </div>
          </div>

          {/* Dots + arrows */}
          <div className="mt-8" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
            <button onClick={() => setActive(a => Math.max(0, a - 1))} disabled={active === 0} style={{
              width: 40, height: 40, borderRadius: '50%',
              background: 'var(--surface)', border: '1px solid var(--border)',
              color: 'var(--text)', cursor: active === 0 ? 'not-allowed' : 'pointer',
              opacity: active === 0 ? 0.4 : 1, display: 'grid', placeItems: 'center'
            }}><Icons.arrow size={14} style={{ transform: 'rotate(180deg)' }} /></button>
            <div style={{ display: 'flex', gap: 6 }}>
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setActive(i)} style={{
                  width: i === active ? 24 : 8, height: 8, borderRadius: 999,
                  background: i === active ? testimonials[i].accent : 'var(--border-2)',
                  border: 0, cursor: 'pointer', transition: 'all .2s'
                }} />
              ))}
            </div>
            <button onClick={() => setActive(a => Math.min(testimonials.length - 1, a + 1))} disabled={active === testimonials.length - 1} style={{
              width: 40, height: 40, borderRadius: '50%',
              background: 'var(--surface)', border: '1px solid var(--border)',
              color: 'var(--text)', cursor: active === testimonials.length - 1 ? 'not-allowed' : 'pointer',
              opacity: active === testimonials.length - 1 ? 0.4 : 1, display: 'grid', placeItems: 'center'
            }}><Icons.arrow size={14} /></button>
          </div>
        </div>
      </section>

      {/* 3-up grid */}
      <section style={{ padding: '64px 0 96px' }}>
        <div className="container">
          <div className="mono text-xs text-3" style={{ marginBottom: 16, textTransform: 'uppercase', letterSpacing: '0.1em' }}>3-up carousel · desktop default</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {testimonials.slice(0, 3).map((t, i) => (
              <div key={i} className="card card-hover" style={{ padding: 28 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                  <div style={{ display: 'flex', gap: 2, color: '#FCD34D' }}>{[1,2,3,4,5].map(s => <Icons.star key={s} size={13} />)}</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 4, padding: '3px 8px', background: 'rgba(16,185,129,0.10)', border: '1px solid rgba(16,185,129,0.3)', borderRadius: 999 }}>
                    <Icons.check size={10} stroke={3} style={{ color: 'var(--emerald-2)' }} />
                    <span className="mono" style={{ fontSize: 9, color: 'var(--emerald-2)', fontWeight: 600 }}>CLUTCH</span>
                  </div>
                </div>
                <p style={{ fontSize: 15, lineHeight: 1.5, color: 'var(--text)' }}>
                  "{t.quote.slice(0, 180)}…"
                </p>
                <div style={{ height: 1, background: 'var(--border)', margin: '20px 0' }} />
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <Avatar initials={t.initials} size={40} />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 600, fontSize: 13 }}>{t.name}</div>
                    <div className="mono text-xs text-3">{t.role} · {t.company}</div>
                  </div>
                </div>
                <div className="mt-6" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 14px', background: 'var(--surface-2)', borderRadius: 8 }}>
                  <div>
                    <div className="mono text-xs text-3">IMPACT</div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: t.accent, marginTop: 2 }}>{t.metric}</div>
                  </div>
                  <Icons.arrow size={14} style={{ color: 'var(--text-3)' }} />
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

Object.assign(window, { MegaMenuShowcase, LightModeHero, ThemeToggle, EnhancedTestimonials });
