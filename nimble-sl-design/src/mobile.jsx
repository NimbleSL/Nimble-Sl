// Mobile homepage + mobile nav

const MobileHomepage = ({ menuOpen, setMenuOpen }) => {
  return (
    <div style={{ paddingBottom: 80, position: 'relative' }}>
      {/* Status bar */}
      <div style={{ height: 44, padding: '12px 24px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', zIndex: 2 }}>
        <div className="mono" style={{ fontSize: 14, fontWeight: 600 }}>9:41</div>
        <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
          <div style={{ width: 18, height: 10, border: '1px solid var(--text)', borderRadius: 2, position: 'relative' }}>
            <div style={{ position: 'absolute', inset: 1, background: 'var(--text)', borderRadius: 1, width: '70%' }} />
          </div>
        </div>
      </div>

      {/* Header */}
      <div style={{ padding: '12px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, background: 'rgba(10,14,26,0.85)', backdropFilter: 'blur(14px)', zIndex: 10, borderBottom: '1px solid var(--border)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ width: 26, height: 26, borderRadius: 7, background: 'linear-gradient(135deg, #3B82F6, #06B6D4)', display: 'grid', placeItems: 'center', color: 'white', fontWeight: 800, fontSize: 13, fontFamily: 'var(--font-display)' }}>N</div>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 15 }}>NimbleSL</div>
        </div>
        <button onClick={() => setMenuOpen(true)} style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 8, color: 'var(--text)', padding: 8, cursor: 'pointer' }}>
          <Icons.menu size={16} />
        </button>
      </div>

      {/* Hero */}
      <section style={{ padding: '32px 20px 24px', position: 'relative' }}>
        <div style={{
          position: 'absolute', top: 0, right: -50, width: 280, height: 280,
          background: 'radial-gradient(circle, rgba(59,130,246,0.25), transparent 70%)',
          filter: 'blur(60px)', pointerEvents: 'none'
        }} />
        <div style={{ position: 'relative' }}>
          <div className="eyebrow" style={{ marginBottom: 16, fontSize: 10 }}>
            <span className="ev-dot" /> Booking Q3 2026
          </div>
          <h1 style={{ fontSize: 36, lineHeight: 1.05 }}>
            Silicon Valley engineering.<br/>
            <span className="grad-blue">Bangladesh pricing.</span>
          </h1>
          <p className="mt-4" style={{ fontSize: 14 }}>
            50+ enterprise platforms shipped across 12 countries. From $5K MVPs to $120K+ production systems.
          </p>
          <div className="mt-6" style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <button className="btn btn-emerald" style={{ width: '100%', justifyContent: 'center', padding: '12px' }}>
              <Icons.sparkle size={14} /> Get a free estimate
            </button>
            <button className="btn btn-ghost" style={{ width: '100%', justifyContent: 'center', padding: '12px' }}>
              Explore our products <Icons.arrow size={14} />
            </button>
          </div>
          {/* avatars + rating */}
          <div className="mt-6" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ display: 'flex' }}>
              {['AR','MK','SH'].map((i, idx) => (
                <div key={i} style={{ marginLeft: idx ? -8 : 0 }}><Avatar initials={i} size={26} /></div>
              ))}
            </div>
            <div className="text-xs text-2">
              <div style={{ display: 'flex', gap: 1, color: '#FCD34D' }}>{[1,2,3,4,5].map(s => <Icons.star key={s} size={9} />)}</div>
              <div style={{ marginTop: 1 }}><b style={{color:'var(--text)'}}>4.9/5</b> · 50+ reviews</div>
            </div>
          </div>
        </div>
      </section>

      {/* Terminal preview */}
      <section style={{ padding: '8px 20px 24px' }}>
        <div className="card" style={{ padding: 0, overflow: 'hidden', borderColor: 'rgba(59,130,246,0.3)' }}>
          <div style={{ padding: '8px 12px', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ display: 'flex', gap: 4 }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#F43F5E' }} />
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#F59E0B' }} />
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#10B981' }} />
            </div>
            <div className="mono text-xs text-3">~/estimator</div>
          </div>
          <div className="mono" style={{ padding: 14, fontSize: 11, lineHeight: 1.7 }}>
            <div><span style={{ color: 'var(--text-3)' }}>$</span> <span style={{color:'var(--text)'}}>nimblesl estimate</span></div>
            <div style={{ color: 'var(--emerald-2)' }}>✓ matched 7 similar projects</div>
            <div style={{ marginTop: 8, padding: 10, background: 'rgba(16,185,129,0.06)', border: '1px solid rgba(16,185,129,0.25)', borderRadius: 6 }}>
              <div style={{ display:'flex', justifyContent:'space-between', fontSize: 10 }}><span className="text-2">Scope</span><span style={{color:'var(--text)'}}>Digital wallet + KYC</span></div>
              <div style={{ display:'flex', justifyContent:'space-between', fontSize: 10 }}><span className="text-2">Timeline</span><span style={{color:'var(--text)'}}>14–18 wk</span></div>
              <div style={{ display:'flex', justifyContent:'space-between', fontSize: 10 }}><span className="text-2">Cost</span><span style={{color:'var(--emerald-2)', fontWeight:700}}>$42K–$68K</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: '20px', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          {[
            ['50+', 'Projects', 'var(--blue-2)'],
            ['12', 'Countries', '#67E8F9'],
            ['98%', 'Retention', 'var(--emerald-2)'],
            ['40–60%', 'Cost savings', '#FCD34D']
          ].map(([v, l, c]) => (
            <div key={l}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 26, color: c }}>{v}</div>
              <div className="text-xs text-3 mt-2">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section style={{ padding: '32px 20px 16px' }}>
        <div className="eyebrow" style={{ fontSize: 10, marginBottom: 8 }}><span className="ev-dot" />What we do</div>
        <h2 style={{ fontSize: 28 }}>Six disciplines.<br/>One delivery team.</h2>
        <div className="mt-6" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          {[
            { i: Icons.code, t: 'Custom Software', c: '#60A5FA' },
            { i: Icons.globe, t: 'Web Apps', c: '#67E8F9' },
            { i: Icons.mobile, t: 'Mobile Apps', c: '#C084FC' },
            { i: Icons.cloud, t: 'Cloud & DevOps', c: '#34D399' },
            { i: Icons.brain, t: 'AI & ML', c: '#FCD34D' },
            { i: Icons.palette, t: 'UI/UX Design', c: '#FDA4AF' }
          ].map(s => (
            <div key={s.t} className="card" style={{ padding: 14 }}>
              <div style={{ width: 32, height: 32, borderRadius: 8, background: `${s.c}22`, color: s.c, display: 'grid', placeItems: 'center' }}>
                <s.i size={16} />
              </div>
              <div style={{ fontSize: 13, fontWeight: 600, marginTop: 8 }}>{s.t}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Products */}
      <section style={{ padding: '24px 20px' }}>
        <div className="eyebrow" style={{ fontSize: 10, marginBottom: 8 }}>The Showroom</div>
        <h2 style={{ fontSize: 26 }}>Try our products live.</h2>
        <div className="mt-6" style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {[
            { name: 'PayFlow', tag: 'FinTech', c: '#3B82F6', metric: 'Cross-border payments' },
            { name: 'FraudShield AI', tag: 'AI/ML', c: '#A855F7', metric: '96% accuracy' },
            { name: 'FieldOps', tag: 'Logistics', c: '#10B981', metric: 'Offline-first' }
          ].map(p => (
            <div key={p.name} className="card" style={{ padding: 0, overflow: 'hidden' }}>
              <div style={{ height: 80, background: `linear-gradient(135deg, ${p.c}44, ${p.c}10)`, position: 'relative' }}>
                <div className="dot-bg" style={{ position: 'absolute', inset: 0, opacity: 0.5 }} />
              </div>
              <div style={{ padding: 14 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
                  <div style={{ fontWeight: 700, fontSize: 15 }}>{p.name}</div>
                  <span className="tag" style={{ background: `${p.c}1A`, color: p.c, borderColor: `${p.c}44`, fontSize: 9 }}>{p.tag}</span>
                </div>
                <div className="mono text-xs text-3" style={{ display: 'flex', alignItems: 'center', gap: 4, marginBottom: 10 }}>
                  <Icons.gauge size={10} /> {p.metric}
                </div>
                <button className="btn btn-primary" style={{ width: '100%', padding: '8px', fontSize: 12, justifyContent: 'center' }}>
                  <Icons.play size={11} /> Try live demo
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Estimator banner */}
      <section style={{ padding: '24px 20px' }}>
        <div className="card" style={{ padding: 20, background: 'linear-gradient(135deg, rgba(59,130,246,0.18), rgba(6,182,212,0.10))', borderColor: 'rgba(59,130,246,0.3)' }}>
          <div className="eyebrow" style={{ fontSize: 10, marginBottom: 8 }}>
            <Icons.sparkle size={10} /> Powered by Claude
          </div>
          <h3 style={{ fontSize: 22 }}>Get estimated in 3 min.</h3>
          <p className="text-xs mt-3">Scope, timeline, stack, team and cost — based on our 50-project history.</p>
          <button className="btn btn-emerald" style={{ width: '100%', marginTop: 14, justifyContent: 'center' }}>
            Start estimate <Icons.arrow size={14} />
          </button>
        </div>
      </section>

      {/* Testimonial */}
      <section style={{ padding: '24px 20px' }}>
        <div className="card" style={{ padding: 24 }}>
          <div style={{ color: 'var(--blue-2)', fontSize: 36, fontFamily: 'serif', lineHeight: 0.5, marginBottom: 8 }}>"</div>
          <p style={{ fontSize: 15, lineHeight: 1.5 }}>
            They shipped a GNN-based fraud model at <span style={{color:'var(--emerald-2)'}}>96% accuracy</span> in 6 weeks. No US shop quoted under $250K — Anik's team built it for a fifth of that.
          </p>
          <div className="mt-4" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <Avatar initials="SP" size={36} />
            <div>
              <div style={{ fontWeight: 700, fontSize: 13 }}>Sarah Patel</div>
              <div className="mono text-xs text-3">VP Eng · Blackstone Vale</div>
            </div>
            <div style={{ marginLeft: 'auto', display: 'flex', gap: 1, color: '#FCD34D' }}>{[1,2,3,4,5].map(s => <Icons.star key={s} size={10} />)}</div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ padding: '32px 20px 24px', textAlign: 'center' }}>
        <h2 style={{ fontSize: 26 }}>Ready to build?</h2>
        <p className="text-xs mt-3" style={{ maxWidth: 280, margin: '12px auto 0' }}>Three ways in. Pick what fits.</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 20 }}>
          <button className="btn btn-emerald" style={{ width: '100%', justifyContent: 'center' }}><Icons.clock size={14}/> Book a free call</button>
          <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}><Icons.sparkle size={14}/> Try AI Estimator</button>
          <button className="btn btn-ghost" style={{ width: '100%', justifyContent: 'center' }}><Icons.message size={14}/> Chat with NimbleBot</button>
        </div>
      </section>

      {/* Mobile footer mini */}
      <section style={{ padding: '24px 20px 20px', borderTop: '1px solid var(--border)', background: '#06090F' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
          <div style={{ width: 26, height: 26, borderRadius: 7, background: 'linear-gradient(135deg, #3B82F6, #06B6D4)', display: 'grid', placeItems: 'center', color: 'white', fontWeight: 800, fontSize: 12 }}>N</div>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 14 }}>NimbleSL</div>
        </div>
        <p className="text-xs mt-3">Silicon Valley engineering. Bangladesh pricing. Building enterprise software in 12 countries since 2024.</p>
        <div className="mt-6" style={{ display: 'flex', gap: 8 }}>
          {[Icons.linkedin, Icons.github, Icons.twitter].map((I, i) => (
            <div key={i} style={{ width: 30, height: 30, borderRadius: 7, background: 'var(--surface)', border: '1px solid var(--border)', display: 'grid', placeItems: 'center', color: 'var(--text-2)' }}><I size={13}/></div>
          ))}
        </div>
        <div className="text-xs text-3 mono mt-6">© 2026 Nimble Software Lab Ltd.</div>
      </section>

      {/* Floating chat button */}
      <div style={{ position: 'fixed', bottom: 80, right: 16, zIndex: 5 }}>
        <button style={{
          width: 48, height: 48, borderRadius: '50%',
          background: 'linear-gradient(135deg, #3B82F6, #06B6D4)',
          border: 0, display: 'grid', placeItems: 'center',
          color: 'white', boxShadow: '0 10px 24px rgba(59,130,246,0.5)'
        }}>
          <Icons.message size={20} />
        </button>
      </div>

      {/* Sticky bottom bar */}
      <div style={{
        position: 'fixed', bottom: 12, left: 12, right: 12,
        background: 'rgba(20,25,37,0.96)',
        border: '1px solid var(--border-2)',
        borderRadius: 999, padding: '6px 6px 6px 14px',
        display: 'flex', alignItems: 'center', gap: 8,
        backdropFilter: 'blur(14px)',
        zIndex: 4
      }}>
        <Icons.star size={12} style={{ color: '#FCD34D' }} />
        <div className="text-xs" style={{ fontWeight: 600, flex: 1 }}>4.9/5 on Clutch</div>
        <button className="btn btn-emerald" style={{ padding: '6px 12px', fontSize: 11, borderRadius: 999 }}>Book call <Icons.arrow size={11}/></button>
      </div>

      {/* Slide-in menu */}
      {menuOpen && (
        <div style={{
          position: 'absolute', inset: 0,
          background: 'rgba(6,9,15,0.95)',
          backdropFilter: 'blur(12px)',
          zIndex: 20, padding: '0 20px',
          display: 'flex', flexDirection: 'column'
        }}>
          <div style={{ padding: '56px 0 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 26, height: 26, borderRadius: 7, background: 'linear-gradient(135deg, #3B82F6, #06B6D4)', display: 'grid', placeItems: 'center', color: 'white', fontWeight: 800, fontSize: 13 }}>N</div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 15 }}>NimbleSL</div>
            </div>
            <button onClick={() => setMenuOpen(false)} style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 8, color: 'var(--text)', padding: 8, cursor: 'pointer' }}>
              <Icons.x size={16} />
            </button>
          </div>

          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 4 }}>
            {[
              ['Services', Icons.code],
              ['Solutions', Icons.layers],
              ['Case Studies', Icons.trophy],
              ['Hire Developers', Icons.users],
              ['Industries', Icons.briefcase],
              ['Blog', Icons.book],
              ['About', Icons.smile],
              ['Contact', Icons.mail]
            ].map(([l, I]) => (
              <div key={l} style={{ padding: '16px 12px', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <I size={18} style={{ color: 'var(--text-2)' }} />
                  <span style={{ fontWeight: 600, fontSize: 16 }}>{l}</span>
                </div>
                <Icons.arrow size={14} style={{ color: 'var(--text-3)' }} />
              </div>
            ))}
          </div>

          <div style={{ padding: '0 0 32px', display: 'flex', flexDirection: 'column', gap: 8 }}>
            <button className="btn btn-emerald" style={{ width: '100%', justifyContent: 'center' }}><Icons.sparkle size={14}/> Try AI Estimator</button>
            <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Book a consultation</button>
            <div className="mono text-xs text-3 mt-3" style={{ textAlign: 'center' }}>hello@nimblesl.com</div>
          </div>
        </div>
      )}
    </div>
  );
};

window.MobileHomepage = MobileHomepage;
