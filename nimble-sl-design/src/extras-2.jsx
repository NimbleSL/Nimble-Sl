// Component sheet: Cookie banner, Social proof micros, Brand signature, Compliance badges, Loading screen

const SectionLabel = ({ n, label }) => (
  <div className="mono text-xs text-3" style={{ marginBottom: 16, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
    {String(n).padStart(2, '0')} · {label}
  </div>
);

// === Cookie consent banner ===
const CookieBanner = () => (
  <div style={{
    background: 'rgba(20,25,37,0.92)',
    backdropFilter: 'blur(14px)',
    border: '1px solid var(--border-2)',
    borderRadius: 14,
    padding: 16,
    display: 'flex', alignItems: 'center', gap: 16,
    boxShadow: '0 20px 60px -10px rgba(0,0,0,0.5)',
    maxWidth: 920
  }}>
    <div style={{ width: 36, height: 36, borderRadius: 9, background: 'rgba(59,130,246,0.15)', border: '1px solid rgba(59,130,246,0.4)', display: 'grid', placeItems: 'center', color: 'var(--blue-2)', flexShrink: 0 }}>
      <span style={{ fontSize: 18 }}>🍪</span>
    </div>
    <div style={{ flex: 1 }}>
      <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--text)' }}>We use cookies to improve your experience.</div>
      <div className="text-xs text-2 mt-2">Analytics + product use only — never sold, never used for ads. <a style={{ color: 'var(--blue-2)' }}>Read our cookie policy</a></div>
    </div>
    <div style={{ display: 'flex', gap: 8, flexShrink: 0 }}>
      <button className="btn btn-ghost" style={{ padding: '8px 16px', fontSize: 13 }}>Preferences</button>
      <button className="btn btn-primary" style={{ padding: '8px 16px', fontSize: 13 }}>Accept all</button>
    </div>
  </div>
);

// === Social proof micros ===
const PageViewers = () => (
  <div style={{
    display: 'inline-flex', alignItems: 'center', gap: 8,
    padding: '6px 12px',
    background: 'rgba(20,25,37,0.92)',
    backdropFilter: 'blur(10px)',
    border: '1px solid var(--border-2)',
    borderRadius: 999,
    boxShadow: '0 8px 24px rgba(0,0,0,0.3)'
  }}>
    <div style={{ position: 'relative' }}>
      <Icons.user size={12} style={{ color: 'var(--text-2)' }} />
      <span style={{ position: 'absolute', top: -2, right: -3, width: 6, height: 6, borderRadius: '50%', background: 'var(--emerald)', border: '1px solid var(--bg)', animation: 'pulse-glow 2s infinite' }} />
    </div>
    <span className="text-xs" style={{ color: 'var(--text)', fontWeight: 500 }}><b>14 people</b> viewing this page</span>
  </div>
);

const RecentToast = () => (
  <div style={{
    width: 320,
    background: 'rgba(20,25,37,0.95)',
    backdropFilter: 'blur(14px)',
    border: '1px solid rgba(16,185,129,0.3)',
    borderRadius: 12,
    padding: '14px 16px',
    display: 'flex', gap: 12,
    boxShadow: '0 20px 40px -10px rgba(0,0,0,0.5)'
  }}>
    <div style={{ width: 36, height: 36, borderRadius: 9, background: 'rgba(16,185,129,0.15)', border: '1px solid rgba(16,185,129,0.4)', display: 'grid', placeItems: 'center', color: 'var(--emerald-2)', flexShrink: 0 }}>
      <Icons.rocket size={16} />
    </div>
    <div style={{ flex: 1 }}>
      <div className="text-sm" style={{ color: 'var(--text)', fontWeight: 600 }}>New project kicked off</div>
      <div className="text-xs text-2 mt-2">A HealthTech build in Berlin · 3 days ago</div>
    </div>
    <button style={{ background: 'transparent', border: 0, color: 'var(--text-3)', cursor: 'pointer', padding: 2 }}>
      <Icons.x size={14} />
    </button>
  </div>
);

const ResponseBadge = () => (
  <div style={{
    display: 'inline-flex', alignItems: 'center', gap: 10,
    padding: '10px 14px',
    background: 'rgba(16,185,129,0.08)',
    border: '1px solid rgba(16,185,129,0.3)',
    borderRadius: 10
  }}>
    <div style={{ width: 32, height: 32, borderRadius: 7, background: 'rgba(16,185,129,0.15)', display: 'grid', placeItems: 'center', color: 'var(--emerald-2)' }}>
      <Icons.zap size={15} />
    </div>
    <div>
      <div className="mono text-xs text-3" style={{ textTransform: 'uppercase', letterSpacing: '0.08em' }}>Response time</div>
      <div className="text-sm" style={{ color: 'var(--emerald-2)', fontWeight: 700, marginTop: 2 }}>Under 2 hours</div>
    </div>
  </div>
);

const OnlineDot = ({ label = 'Online now', size = 'sm' }) => (
  <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: size === 'sm' ? 12 : 13, color: 'var(--emerald-2)', fontWeight: 600 }}>
    <span style={{ position: 'relative', display: 'inline-block' }}>
      <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--emerald)', display: 'block' }} />
      <span style={{ position: 'absolute', inset: -2, borderRadius: '50%', border: '2px solid var(--emerald)', opacity: 0.4, animation: 'pulse-glow 2s infinite' }} />
    </span>
    {label}
  </div>
);

// === Brand signature ===
const BrandMark = ({ size = 48, glow = true }) => (
  <div style={{
    width: size, height: size,
    borderRadius: size * 0.27,
    background: 'linear-gradient(135deg, #3B82F6, #06B6D4)',
    display: 'grid', placeItems: 'center',
    color: 'white',
    fontWeight: 800,
    fontSize: size * 0.46,
    fontFamily: 'var(--font-display)',
    boxShadow: glow ? `0 ${size * 0.2}px ${size * 0.6}px -${size * 0.15}px rgba(59,130,246,0.55)` : 'none',
    position: 'relative'
  }}>
    N
  </div>
);

const CodeSignature = ({ size = 'md' }) => {
  const fs = size === 'lg' ? 18 : size === 'sm' ? 11 : 14;
  return (
    <span style={{
      fontFamily: 'var(--font-mono)',
      fontSize: fs,
      color: 'var(--text-2)',
      display: 'inline-flex', alignItems: 'center', gap: 2,
      letterSpacing: '-0.01em'
    }}>
      <span style={{ color: 'var(--blue-2)' }}>{'<'}</span>
      <span style={{ color: 'var(--text)', fontWeight: 600 }}>NimbleSL</span>
      <span style={{ color: 'var(--blue-2)' }}>{'/>'}</span>
    </span>
  );
};

// === Loading screen ===
const LoadingScreen = () => (
  <div style={{
    width: '100%', height: '100%',
    background: 'radial-gradient(600px 400px at 50% 50%, rgba(59,130,246,0.10), transparent 70%), var(--bg)',
    display: 'grid', placeItems: 'center',
    position: 'relative', overflow: 'hidden'
  }}>
    <div className="grid-bg" style={{ position: 'absolute', inset: 0, opacity: 0.35, maskImage: 'radial-gradient(ellipse at center, black, transparent 70%)' }} />
    <div style={{ textAlign: 'center', position: 'relative' }}>
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <BrandMark size={72} />
        <span style={{
          position: 'absolute', top: -4, right: -4,
          width: 16, height: 16, borderRadius: '50%',
          background: 'var(--emerald)',
          border: '3px solid var(--bg)',
          boxShadow: '0 0 12px var(--emerald)',
          animation: 'pulse-glow 1.4s infinite'
        }} />
      </div>
      <div className="mt-6" style={{ display: 'flex', justifyContent: 'center', gap: 6 }}>
        {[0, 1, 2].map(i => (
          <div key={i} style={{
            width: 6, height: 6, borderRadius: '50%',
            background: 'var(--blue)',
            animation: `pulse-glow 1.2s ${i * 0.2}s infinite ease-in-out`
          }} />
        ))}
      </div>
      <div className="mt-6">
        <CodeSignature size="lg" />
      </div>
      <div className="mono text-xs text-3 mt-4" style={{ letterSpacing: '0.15em', textTransform: 'uppercase' }}>
        Loading studio…
      </div>
    </div>
  </div>
);

// === Compliance badges ===
const ComplianceBadge = ({ name, full, color = '#34D399' }) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div style={{ position: 'relative' }}
         onMouseEnter={() => setHovered(true)}
         onMouseLeave={() => setHovered(false)}>
      <div style={{
        display: 'inline-flex', alignItems: 'center', gap: 8,
        padding: '8px 14px',
        background: hovered ? `${color}1A` : 'var(--surface)',
        border: `1px solid ${hovered ? `${color}66` : 'var(--border)'}`,
        borderRadius: 999,
        cursor: 'pointer',
        transition: 'all .2s',
        boxShadow: hovered ? `0 0 24px -4px ${color}55` : 'none'
      }}>
        <Icons.shield size={13} style={{ color }} />
        <span className="mono text-xs" style={{ fontWeight: 600, color: hovered ? color : 'var(--text)', letterSpacing: '0.02em' }}>
          {name}
        </span>
      </div>
      {hovered && (
        <div style={{
          position: 'absolute', bottom: 'calc(100% + 8px)', left: '50%',
          transform: 'translateX(-50%)',
          background: 'var(--surface-2)',
          border: '1px solid var(--border-2)',
          borderRadius: 8, padding: '8px 12px',
          width: 240, zIndex: 10,
          boxShadow: '0 12px 32px rgba(0,0,0,0.4)'
        }}>
          <div className="text-xs" style={{ color: 'var(--text)', lineHeight: 1.5 }}>{full}</div>
          <div style={{
            position: 'absolute', bottom: -6, left: '50%',
            transform: 'translateX(-50%) rotate(45deg)',
            width: 10, height: 10,
            background: 'var(--surface-2)',
            borderRight: '1px solid var(--border-2)',
            borderBottom: '1px solid var(--border-2)'
          }} />
        </div>
      )}
    </div>
  );
};

const ComponentSheet = ({ onNav }) => {
  return (
    <div className="page">
      <NavBar onNav={onNav} />

      <section style={{ padding: '64px 0 32px' }}>
        <div className="container">
          <div className="eyebrow" style={{ marginBottom: 16 }}><span className="ev-dot" />Component sheet</div>
          <h1 style={{ fontSize: 48 }}>The small parts.<br/><span className="grad-blue">Cookies, micros, marks, badges.</span></h1>
          <p className="mt-6" style={{ fontSize: 17, maxWidth: 600 }}>
            Every floating, persistent, and signature element that doesn't get its own page. Drop these into the build wherever they fit.
          </p>
        </div>
      </section>

      <section style={{ padding: '24px 0 64px' }}>
        <div className="container">
          {/* COOKIE BANNER */}
          <div style={{ marginBottom: 56 }}>
            <SectionLabel n={1} label="Cookie consent · GDPR" />
            <div style={{ position: 'relative', height: 220, background: 'var(--bg-2)', border: '1px solid var(--border)', borderRadius: 12, overflow: 'hidden', padding: 24 }}>
              <div className="grid-bg" style={{ position: 'absolute', inset: 0, opacity: 0.3 }} />
              <div style={{ position: 'absolute', bottom: 16, left: 16, right: 16, display: 'grid', placeItems: 'center' }}>
                <CookieBanner />
              </div>
            </div>
            <div className="text-xs text-3 mono mt-3">Slides up from bottom on first visit · stores consent in `nimblesl-cookie-consent` localStorage</div>
          </div>

          {/* SOCIAL PROOF MICROS */}
          <div style={{ marginBottom: 56 }}>
            <SectionLabel n={2} label="Social proof micros" />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <div className="card" style={{ padding: 24 }}>
                <div className="mono text-xs text-3" style={{ marginBottom: 12 }}>// page viewers — top of fold, dismissible</div>
                <div style={{ padding: 32, background: 'var(--bg-2)', borderRadius: 8, display: 'grid', placeItems: 'center', minHeight: 120 }}>
                  <PageViewers />
                </div>
              </div>
              <div className="card" style={{ padding: 24 }}>
                <div className="mono text-xs text-3" style={{ marginBottom: 12 }}>// recent activity toast — auto-dismisses after 6s</div>
                <div style={{ padding: 16, background: 'var(--bg-2)', borderRadius: 8, display: 'grid', placeItems: 'center', minHeight: 120 }}>
                  <RecentToast />
                </div>
              </div>
              <div className="card" style={{ padding: 24 }}>
                <div className="mono text-xs text-3" style={{ marginBottom: 12 }}>// response-time badge — for contact pages</div>
                <div style={{ padding: 32, background: 'var(--bg-2)', borderRadius: 8, display: 'grid', placeItems: 'center', minHeight: 120 }}>
                  <ResponseBadge />
                </div>
              </div>
              <div className="card" style={{ padding: 24 }}>
                <div className="mono text-xs text-3" style={{ marginBottom: 12 }}>// online-now dot — chat & team profiles</div>
                <div style={{ padding: 32, background: 'var(--bg-2)', borderRadius: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12, minHeight: 120, justifyContent: 'center' }}>
                  <OnlineDot label="Online now" />
                  <OnlineDot label="Sajid is online · usually responds in 5 min" />
                </div>
              </div>
            </div>
          </div>

          {/* BRAND SIGNATURES */}
          <div style={{ marginBottom: 56 }}>
            <SectionLabel n={3} label="Brand signature elements" />
            <div className="card" style={{ padding: 32 }}>
              {/* N mark sizes */}
              <div className="mono text-xs text-3" style={{ marginBottom: 16 }}>The N cube · sizes & contexts</div>
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: 32, padding: 32, background: 'var(--bg-2)', borderRadius: 12 }}>
                {[
                  { size: 16, label: 'Favicon · 16' },
                  { size: 24, label: 'Inline · 24' },
                  { size: 32, label: 'Nav · 32' },
                  { size: 48, label: 'Card · 48' },
                  { size: 72, label: 'Loader · 72' },
                  { size: 120, label: 'Hero · 120' }
                ].map(b => (
                  <div key={b.size} style={{ textAlign: 'center' }}>
                    <BrandMark size={b.size} />
                    <div className="mono text-xs text-3 mt-3">{b.label}</div>
                  </div>
                ))}
              </div>

              {/* Code signature */}
              <div className="mono text-xs text-3 mt-12" style={{ marginBottom: 16 }}>{'<NimbleSL />'} code signature · sizes</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 32, padding: 32, background: 'var(--bg-2)', borderRadius: 12 }}>
                <CodeSignature size="sm" />
                <CodeSignature size="md" />
                <CodeSignature size="lg" />
              </div>

              {/* Usage examples */}
              <div className="mono text-xs text-3 mt-12" style={{ marginBottom: 16 }}>In context</div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
                {/* Favicon */}
                <div style={{ padding: 20, background: 'var(--bg-2)', borderRadius: 12 }}>
                  <div className="mono text-xs text-3 mb-4" style={{ marginBottom: 12 }}>FAVICON / TAB</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 12px', background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: '8px 8px 0 0', maxWidth: 240 }}>
                    <BrandMark size={14} glow={false} />
                    <div className="text-xs" style={{ flex: 1 }}>NimbleSL · Software Lab</div>
                    <Icons.x size={11} style={{ color: 'var(--text-3)' }} />
                  </div>
                </div>

                {/* Email header */}
                <div style={{ padding: 20, background: 'var(--bg-2)', borderRadius: 12 }}>
                  <div className="mono text-xs text-3 mb-4" style={{ marginBottom: 12 }}>EMAIL HEADER</div>
                  <div style={{ padding: 16, background: 'white', borderRadius: 8 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <BrandMark size={28} glow={false} />
                      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 13, color: '#0F172A' }}>NimbleSL</div>
                    </div>
                    <div className="text-xs mt-3" style={{ color: '#64748B' }}>Your project estimate is ready →</div>
                  </div>
                </div>

                {/* Footer watermark */}
                <div style={{ padding: 20, background: 'var(--bg-2)', borderRadius: 12 }}>
                  <div className="mono text-xs text-3 mb-4" style={{ marginBottom: 12 }}>FOOTER WATERMARK</div>
                  <div style={{ padding: 20, background: '#06090F', borderRadius: 8, position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', bottom: -20, right: -10, opacity: 0.08 }}>
                      <BrandMark size={120} glow={false} />
                    </div>
                    <div className="mono text-xs text-3" style={{ position: 'relative' }}>Crafted with</div>
                    <div className="mt-3" style={{ position: 'relative' }}>
                      <CodeSignature size="md" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* LOADING SCREEN */}
          <div style={{ marginBottom: 56 }}>
            <SectionLabel n={4} label="Loading / page transition · ~700ms target" />
            <div style={{ height: 480, background: 'var(--bg-2)', border: '1px solid var(--border)', borderRadius: 14, overflow: 'hidden' }}>
              <LoadingScreen />
            </div>
            <div className="text-xs text-3 mono mt-3">Used between client-side route changes · respects prefers-reduced-motion</div>
          </div>

          {/* COMPLIANCE BADGES */}
          <div style={{ marginBottom: 56 }}>
            <SectionLabel n={5} label="Security & compliance badges · hover for tooltip" />
            <div className="card" style={{ padding: 32 }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center', padding: 32, background: 'var(--bg-2)', borderRadius: 12, minHeight: 200, alignItems: 'center' }}>
                <ComplianceBadge name="GDPR" full="European General Data Protection Regulation. Data minimization, right-to-erase, DPO-ready audit logs." color="#60A5FA" />
                <ComplianceBadge name="HIPAA" full="US Health Insurance Portability & Accountability Act. PHI handling, audit trails, BAAs for healthcare clients." color="#34D399" />
                <ComplianceBadge name="OWASP Top 10" full="Continuous testing against the OWASP Top 10 web application security risks. Automated CI scans + annual pentest." color="#FCD34D" />
                <ComplianceBadge name="SOC 2" full="SOC 2 Type 1 in progress (Q4 2026). Type 2 attestation expected Q2 2027. Trust services criteria audited." color="#C084FC" />
                <ComplianceBadge name="ISO 27001" full="Risk-based information security management system. Asset register, annual penetration tests, ISMS roadmap." color="#FDA4AF" />
                <ComplianceBadge name="PCI-DSS" full="Payment Card Industry Data Security Standard. Required for FinTech projects handling card data." color="#67E8F9" />
              </div>
              <div className="text-xs text-3 mono mt-4" style={{ textAlign: 'center' }}>// hover any badge to see the full description tooltip</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

// ===== Animation Annotations on Homepage =====
const AnnotationCallout = ({ n, label, hint, accent = '#60A5FA' }) => (
  <div style={{
    position: 'absolute',
    display: 'flex', alignItems: 'center', gap: 0,
    fontFamily: 'var(--font-mono)', fontSize: 11
  }}>
    <div style={{
      width: 28, height: 28, borderRadius: '50%',
      background: accent, color: '#0A0E1A',
      display: 'grid', placeItems: 'center',
      fontWeight: 700, fontSize: 12,
      boxShadow: `0 0 0 4px ${accent}33`,
      flexShrink: 0
    }}>{n}</div>
    <div style={{
      marginLeft: -1,
      padding: '8px 12px',
      background: `${accent}26`,
      border: `1px solid ${accent}66`,
      borderRadius: '0 8px 8px 0',
      borderLeft: 'none',
      whiteSpace: 'nowrap',
      backdropFilter: 'blur(8px)'
    }}>
      <div style={{ color: accent, fontWeight: 700 }}>{label}</div>
      <div style={{ color: 'var(--text-2)', marginTop: 2, fontSize: 10 }}>{hint}</div>
    </div>
  </div>
);

const AnimationAnnotations = ({ onNav }) => {
  return (
    <div className="page">
      <NavBar onNav={onNav} />

      <section style={{ padding: '48px 0 24px' }}>
        <div className="container">
          <div className="eyebrow" style={{ marginBottom: 16 }}><Icons.zap size={11} />Animation spec · homepage</div>
          <h1 style={{ fontSize: 48 }}>Where things move.<br/><span className="grad-blue">Annotated for the dev team.</span></h1>
          <p className="mt-6" style={{ fontSize: 17, maxWidth: 600 }}>
            Nine animation hotspots on the homepage. Each callout maps to a specific implementation note for the dev team.
          </p>
        </div>
      </section>

      {/* Annotated homepage frame */}
      <section style={{ padding: '32px 0' }}>
        <div className="container-wide">
          {/* Annotated mock */}
          <div style={{ position: 'relative', borderRadius: 16, border: '1px solid var(--border)', background: 'var(--bg)', overflow: 'visible' }}>
            {/* mock header */}
            <div style={{ position: 'relative', borderBottom: '1px solid var(--border)', padding: '16px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'rgba(15,22,41,0.4)', backdropFilter: 'blur(10px)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <BrandMark size={28} />
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 15 }}>NimbleSL</div>
                </div>
                <div style={{ display: 'flex', gap: 24, color: 'var(--text-2)', fontSize: 13 }}>
                  <span>Services</span><span>Solutions</span><span>Case Studies</span><span>About</span>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 8 }}>
                <button className="btn btn-soft" style={{ padding: '6px 12px', fontSize: 12 }}>Try AI Estimator</button>
                <button className="btn btn-primary" style={{ padding: '6px 12px', fontSize: 12 }}>Book Consultation</button>
              </div>

              {/* Annotation 6 — navbar */}
              <div style={{ position: 'absolute', top: -6, right: -20 }}>
                <AnnotationCallout n="6" label="Navbar blur + shrink on scroll" hint="60→52px height · 0→16px backdrop-blur" accent="#67E8F9" />
              </div>
            </div>

            {/* Hero */}
            <div style={{ padding: '64px 32px 80px', position: 'relative', overflow: 'hidden' }}>
              <div className="mesh-bg" style={{ opacity: 0.7 }} />

              <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 56, alignItems: 'center', position: 'relative' }}>
                <div>
                  <div className="eyebrow" style={{ marginBottom: 24 }}>
                    <span className="ev-dot" /> Now booking Q3 2026
                  </div>
                  <h1 style={{ fontSize: 56, lineHeight: 1.04 }}>
                    Silicon Valley<br/>
                    engineering.<br/>
                    <span className="grad-blue">Bangladesh pricing.</span><br/>
                    Your IP.
                  </h1>

                  {/* Annotation 1 */}
                  <div style={{ position: 'absolute', top: 70, left: -260, width: 240 }}>
                    <AnnotationCallout n="1" label="Typewriter reveal" hint="char-by-char · 18ms/char · cursor blinks 1s" accent="#60A5FA" />
                  </div>

                  <p className="mt-8" style={{ fontSize: 16, maxWidth: 440 }}>50+ enterprise platforms shipped across 12 countries.</p>
                  <div className="mt-8" style={{ display: 'flex', gap: 12, position: 'relative' }}>
                    <button className="btn btn-emerald">Get a Free Estimate</button>
                    <button className="btn btn-ghost">Explore Products</button>

                    {/* Annotation 7 */}
                    <div style={{ position: 'absolute', top: 56, left: 0 }}>
                      <AnnotationCallout n="7" label="Button: scale 1.02 + glow on hover" hint="200ms ease-out · box-shadow expansion" accent="#34D399" />
                    </div>
                  </div>
                </div>

                <div style={{ position: 'relative' }}>
                  <div className="card glow-blue" style={{ padding: 0, overflow: 'hidden' }}>
                    <div style={{ padding: '8px 12px', borderBottom: '1px solid var(--border)', display: 'flex', gap: 8, alignItems: 'center' }}>
                      <div style={{ display: 'flex', gap: 5 }}>
                        <div style={{ width: 9, height: 9, borderRadius: '50%', background: '#F43F5E' }} />
                        <div style={{ width: 9, height: 9, borderRadius: '50%', background: '#F59E0B' }} />
                        <div style={{ width: 9, height: 9, borderRadius: '50%', background: '#10B981' }} />
                      </div>
                      <div className="mono text-xs text-3">~/estimator</div>
                    </div>
                    <div className="mono" style={{ padding: 18, fontSize: 11.5, lineHeight: 1.8 }}>
                      <div><span style={{ color: 'var(--text-3)' }}>$ </span>nimblesl estimate --fintech</div>
                      <div style={{ color: 'var(--emerald-2)' }}>✓ matched 7 similar engagements</div>
                      <div style={{ color: 'var(--emerald-2)' }}>✓ report ready in 2.4s</div>
                      <div style={{ marginTop: 6 }}><span className="blink">▊</span></div>
                    </div>
                  </div>

                  {/* Annotation 4 */}
                  <div style={{ position: 'absolute', top: -8, right: -240 }}>
                    <AnnotationCallout n="4" label="Terminal: line-by-line typing" hint="600ms delay between lines · cursor pulses" accent="#A855F7" />
                  </div>

                  {/* Annotation 8 */}
                  <div style={{ position: 'absolute', bottom: -36, right: -220 }}>
                    <AnnotationCallout n="8" label="Background: subtle gradient shift" hint="0.3% mesh translate on scroll · 60fps" accent="#FCD34D" />
                  </div>
                </div>
              </div>
            </div>

            {/* Stats strip */}
            <div style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '24px 32px', background: 'rgba(15,22,41,0.4)', position: 'relative' }}>
              {/* Logo carousel placeholder */}
              <div className="mono text-xs text-3 mb-4" style={{ marginBottom: 16, textTransform: 'uppercase', letterSpacing: '0.15em' }}>Trusted by teams at</div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 24, position: 'relative', overflow: 'hidden' }}>
                {['Rosachy','North Avenue','HayaaCola','CH15','WPEDO','Blackstone'].map(c => (
                  <div key={c} style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16, color: 'var(--text-2)', opacity: 0.7 }}>{c}</div>
                ))}

                {/* Annotation 5 — auto-scroll logos */}
                <div style={{ position: 'absolute', top: -28, right: -10 }}>
                  <AnnotationCallout n="5" label="Auto-scrolling carousel · marquee" hint="30s loop · pauses on hover" accent="#FB923C" />
                </div>
              </div>

              <div style={{ marginTop: 28, paddingTop: 24, borderTop: '1px solid var(--border)', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, position: 'relative' }}>
                {[
                  ['50+', 'Projects shipped', 'var(--blue-2)'],
                  ['12', 'Countries served', '#67E8F9'],
                  ['98%', 'Client retention', 'var(--emerald-2)'],
                  ['40–60%', 'Cost savings', '#FCD34D']
                ].map(([v, l, c]) => (
                  <div key={l}>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 36, color: c, letterSpacing: '-0.02em', lineHeight: 1 }}>{v}</div>
                    <div className="text-xs text-2 mt-2">{l}</div>
                  </div>
                ))}

                {/* Annotation 2 — counter */}
                <div style={{ position: 'absolute', top: -28, left: -10 }}>
                  <AnnotationCallout n="2" label="Count-up on scroll" hint="0 → target · 1.4s · ease-out · IntersectionObserver" accent="#FDA4AF" />
                </div>
              </div>
            </div>

            {/* Cards section */}
            <div style={{ padding: '48px 32px 64px', position: 'relative' }}>
              <h2 style={{ fontSize: 28, marginBottom: 24 }}>Six disciplines.</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, position: 'relative' }}>
                {[
                  { i: Icons.code, t: 'Custom Software', c: '#60A5FA' },
                  { i: Icons.globe, t: 'Web Applications', c: '#67E8F9' },
                  { i: Icons.mobile, t: 'Mobile Apps', c: '#C084FC' }
                ].map(s => (
                  <div key={s.t} className="card" style={{ padding: 18 }}>
                    <div style={{ width: 40, height: 40, borderRadius: 8, background: `${s.c}22`, border: `1px solid ${s.c}44`, color: s.c, display: 'grid', placeItems: 'center' }}>
                      <s.i size={18} />
                    </div>
                    <div style={{ fontWeight: 700, marginTop: 12, fontSize: 14 }}>{s.t}</div>
                    <div className="text-xs text-3 mt-2">Bespoke platforms.</div>
                  </div>
                ))}

                {/* Annotation 3 */}
                <div style={{ position: 'absolute', top: -36, right: -10 }}>
                  <AnnotationCallout n="3" label="Cards: staggered fade-up" hint="50ms delay per card · y+24 → y0 · 600ms" accent="#34D399" />
                </div>
              </div>

              {/* Product showroom row */}
              <div style={{ marginTop: 56, position: 'relative' }}>
                <h2 style={{ fontSize: 28, marginBottom: 24 }}>Don't just read about our work.</h2>
                <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
                  {['All','FinTech','AI/ML','Logistics'].map((t, i) => (
                    <button key={t} style={{
                      padding: '6px 14px', borderRadius: 999,
                      background: i === 0 ? 'var(--blue)' : 'var(--surface)',
                      border: `1px solid ${i === 0 ? 'var(--blue)' : 'var(--border)'}`,
                      color: i === 0 ? 'white' : 'var(--text-2)',
                      fontSize: 12, cursor: 'pointer', fontFamily: 'inherit'
                    }}>{t}</button>
                  ))}
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, position: 'relative' }}>
                  {['PayFlow','FraudShield','FieldOps'].map((n, i) => (
                    <div key={n} className="card" style={{ padding: 14 }}>
                      <div style={{ height: 70, background: `linear-gradient(135deg, ${['#3B82F633','#A855F733','#10B98133'][i]}, transparent)`, borderRadius: 8, marginBottom: 10 }} />
                      <div style={{ fontWeight: 700, fontSize: 14 }}>{n}</div>
                    </div>
                  ))}
                  {/* Annotation 9 */}
                  <div style={{ position: 'absolute', bottom: -36, left: -10 }}>
                    <AnnotationCallout n="9" label="Filter change: cards shuffle" hint="FLIP technique · 320ms · cubic-bezier(.4,0,.2,1)" accent="#F59E0B" />
                  </div>
                </div>
              </div>

              {/* Case study metrics row */}
              <div style={{ marginTop: 80, position: 'relative' }}>
                <h2 style={{ fontSize: 28, marginBottom: 24 }}>What clients ship after working with us.</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14, position: 'relative' }}>
                  {[
                    { v: '96%', l: 'Detection accuracy', c: '#34D399' },
                    { v: '30–60s', l: 'Per-claim inference', c: '#60A5FA' },
                    { v: '0', l: 'False negatives · 90d', c: '#C084FC' },
                    { v: '$210K', l: 'Saved vs US quote', c: '#FCD34D' }
                  ].map((m, i) => (
                    <div key={m.l} className="card" style={{
                      padding: 18,
                      animation: i === 0 ? 'metric-pulse 2.4s infinite' : undefined,
                      borderColor: i === 0 ? 'rgba(16,185,129,0.4)' : undefined
                    }}>
                      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 32, color: m.c, letterSpacing: '-0.02em', lineHeight: 1 }}>{m.v}</div>
                      <div className="text-xs text-2 mt-3">{m.l}</div>
                    </div>
                  ))}

                  {/* Annotation 10 */}
                  <div style={{ position: 'absolute', top: -36, right: -10 }}>
                    <AnnotationCallout n="10" label="Metric cards: pulse glow" hint="box-shadow ring expand 0→12px · 2.4s ease loop" accent="#34D399" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Animation spec table */}
      <section style={{ padding: '64px 0 96px' }}>
        <div className="container">
          <SectionHeader eyebrow="Implementation notes" title="Spec sheet for the dev team." />
          <div className="card mt-8" style={{ padding: 0, overflow: 'hidden' }}>
            {/* header */}
            <div style={{ display: 'grid', gridTemplateColumns: '40px 1fr 1.4fr 1fr 1fr', gap: 16, padding: '14px 20px', background: 'var(--surface-2)', borderBottom: '1px solid var(--border)' }}>
              <div className="mono text-xs text-3">#</div>
              <div className="mono text-xs text-3">ELEMENT</div>
              <div className="mono text-xs text-3">BEHAVIOR</div>
              <div className="mono text-xs text-3">TRIGGER</div>
              <div className="mono text-xs text-3">DURATION</div>
            </div>
            {[
              ['1', 'Hero headline', 'Typewriter — char-by-char reveal with blinking cursor', 'Page load', '~1.4s total'],
              ['2', 'Stat counters', 'Count-up animation (0 → target) with ease-out', 'IntersectionObserver enters viewport', '1.4s'],
              ['3', 'Service cards', 'Staggered fade-up (translateY 24px → 0)', 'Scroll into view', '600ms · 50ms stagger'],
              ['4', 'Hero terminal', 'Lines appear in sequence; final cursor pulses', 'Page load + 600ms', '600ms per line'],
              ['5', 'Client logos', 'Auto-scrolling marquee (left ← right)', 'Always · pauses on hover', '30s loop'],
              ['6', 'Navbar', 'Blur 0→16px + height 60→52 + bg opacity 0→0.6', 'Scroll Y > 40px', '200ms'],
              ['7', 'Buttons', 'Scale 1 → 1.02 + box-shadow expand', 'Hover', '200ms ease-out'],
              ['8', 'Mesh background', 'Subtle parallax translate on scroll', 'Scroll position', '60fps continuous'],
              ['9', 'Showroom filter', 'FLIP card reorder on filter change', 'Filter chip click', '320ms · cubic-bezier(.4,0,.2,1)'],
              ['10', 'Case study metrics', 'Pulsing glow ring (box-shadow expand)', 'Always · on hero metric tiles', '2.4s ease loop']
            ].map((row, i) => (
              <div key={row[0]} style={{ display: 'grid', gridTemplateColumns: '40px 1fr 1.4fr 1fr 1fr', gap: 16, padding: '14px 20px', borderTop: i ? '1px solid var(--border)' : 'none', alignItems: 'center' }}>
                <div style={{
                  width: 24, height: 24, borderRadius: '50%',
                  background: ['#60A5FA26','#FDA4AF26','#34D39926','#A855F726','#FB923C26','#67E8F926','#34D39926','#FCD34D26','#F59E0B26','#34D39926'][i],
                  border: `1px solid ${['#60A5FA','#FDA4AF','#34D399','#A855F7','#FB923C','#67E8F9','#34D399','#FCD34D','#F59E0B','#34D399'][i]}66`,
                  color: ['#60A5FA','#FDA4AF','#34D399','#A855F7','#FB923C','#67E8F9','#34D399','#FCD34D','#F59E0B','#34D399'][i],
                  display: 'grid', placeItems: 'center',
                  fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 700
                }}>{row[0]}</div>
                <div className="text-sm" style={{ fontWeight: 600 }}>{row[1]}</div>
                <div className="text-sm text-2">{row[2]}</div>
                <div className="mono text-xs text-3">{row[3]}</div>
                <div className="mono text-xs" style={{ color: 'var(--emerald-2)', fontWeight: 600 }}>{row[4]}</div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-xs text-3 mono" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <Icons.shield size={12} /> All animations respect <code style={{ background: 'var(--surface-2)', padding: '1px 6px', borderRadius: 4 }}>prefers-reduced-motion</code> — fall back to instant transitions.
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

Object.assign(window, { ComponentSheet, AnimationAnnotations, BrandMark, CodeSignature, OnlineDot, ComplianceBadge });
