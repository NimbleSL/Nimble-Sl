// Main app — left rail navigator + stage

const SCREENS = [
  { id: 'homepage', label: 'Homepage', group: 'Marketing' },
  { id: 'services', label: 'Services — list', group: 'Marketing' },
  { id: 'service-detail', label: 'Services — AI & ML', group: 'Marketing' },
  { id: 'solutions', label: 'Solutions — showroom', group: 'Marketing' },
  { id: 'solution-detail', label: 'Solutions — PayFlow', group: 'Marketing' },
  { id: 'estimator', label: 'AI Project Estimator', group: 'Tools' },
  { id: 'case-studies', label: 'Case Studies — list', group: 'Marketing' },
  { id: 'case-study', label: 'Case Study — FraudShield', group: 'Marketing' },
  { id: 'hire-developers', label: 'Hire Developers', group: 'Marketing' },
  { id: 'industry', label: 'Industry — FinTech', group: 'Marketing' },
  { id: 'about', label: 'About', group: 'Marketing' },
  { id: 'contact', label: 'Contact', group: 'Marketing' },
  { id: 'blog', label: 'Blog — listing', group: 'Resources' },
  { id: 'blog-post', label: 'Blog — single post', group: 'Resources' },
  { id: 'mega-menu', label: 'Mega menus (Services + Solutions)', group: 'Components' },
  { id: 'global', label: 'Overlays — chat, exit, sticky bar', group: 'Components' },
  { id: 'component-sheet', label: 'Components — cookies, micros, marks, badges', group: 'Components' },
  { id: 'testimonials', label: 'Testimonials — enhanced carousel', group: 'Components' },
  { id: 'animations', label: 'Animation annotations', group: 'Spec' },
  { id: 'light-mode', label: 'Light mode — hero variant', group: 'Spec' },
  { id: 'mobile', label: 'Mobile — Homepage + Nav', group: 'Responsive' }
];

const Navigator = ({ current, onSelect }) => {
  const grouped = SCREENS.reduce((acc, s) => {
    (acc[s.group] = acc[s.group] || []).push(s);
    return acc;
  }, {});
  return (
    <aside className="navigator">
      <div className="nav-brand">
        <div className="logo">
          <div className="logo-mark">N</div>
          NimbleSL Web Design
        </div>
        <div className="sub">v1 · 16 screens · 2026</div>
      </div>
      {Object.entries(grouped).map(([g, items]) => (
        <div key={g} className="nav-group">
          <h4>{g}</h4>
          {items.map((s, i) => (
            <div
              key={s.id}
              className={`nav-item ${current === s.id ? 'active' : ''}`}
              onClick={() => onSelect(s.id)}
            >
              <span className="dot" />
              <span style={{ flex: 1 }}>{s.label}</span>
              <span className="mono" style={{ fontSize: 10, color: 'var(--text-3)' }}>
                {String(SCREENS.findIndex(x => x.id === s.id) + 1).padStart(2, '0')}
              </span>
            </div>
          ))}
        </div>
      ))}
      <div className="nav-group" style={{ marginTop: 24, paddingBottom: 24 }}>
        <h4>Quick links</h4>
        <div className="text-xs text-3" style={{ padding: '4px 10px', lineHeight: 1.6 }}>
          ↑ ↓ arrows to navigate<br/>
          Click any screen to open it.
        </div>
      </div>
    </aside>
  );
};

// Global UI showcase (all overlay states)
const GlobalUI = ({ onNav }) => {
  return (
    <div className="page" style={{ background: '#0A0E1A' }}>
      <NavBar onNav={onNav} />
      <section style={{ padding: '64px 0 32px' }}>
        <div className="container">
          <div className="eyebrow" style={{ marginBottom: 20 }}><span className="ev-dot" />Global UI components</div>
          <h1 style={{ fontSize: 56 }}>Floating elements,<br/><span className="grad-blue">overlay states, and chrome.</span></h1>
          <p className="mt-6" style={{ maxWidth: 640, fontSize: 17 }}>
            Every overlay in one place — the NimbleBot chat widget (collapsed + expanded), sticky social-proof bar, and the exit-intent popup. Drop into any page as needed.
          </p>
        </div>
      </section>

      <section style={{ padding: '0 0 96px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
            {/* Chat widget expanded */}
            <div>
              <div className="mono text-xs text-3" style={{ marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.1em' }}>NimbleBot · Expanded state</div>
              <div style={{ position: 'relative', height: 600, background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 12, overflow: 'hidden' }}>
                <div className="grid-bg" style={{ position: 'absolute', inset: 0, opacity: 0.4 }} />
                <ChatWidget expanded={true} onToggle={()=>{}} />
              </div>
            </div>

            {/* Chat widget collapsed */}
            <div>
              <div className="mono text-xs text-3" style={{ marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.1em' }}>NimbleBot · Collapsed (FAB)</div>
              <div style={{ position: 'relative', height: 600, background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 12, overflow: 'hidden' }}>
                <div className="grid-bg" style={{ position: 'absolute', inset: 0, opacity: 0.4 }} />
                <div style={{ position: 'absolute', bottom: 16, right: 16 }}>
                  <button style={{
                    width: 56, height: 56, borderRadius: '50%',
                    background: 'linear-gradient(135deg, #3B82F6, #06B6D4)',
                    border: 0, display: 'grid', placeItems: 'center',
                    color: 'white', cursor: 'pointer',
                    boxShadow: '0 12px 32px -8px rgba(59,130,246,0.6)',
                    position: 'relative'
                  }}>
                    <Icons.message size={22} />
                    <div style={{
                      position: 'absolute', top: -2, right: -2,
                      width: 14, height: 14, borderRadius: '50%',
                      background: '#10B981', border: '2px solid var(--surface)',
                      animation: 'pulse-glow 2s infinite'
                    }} />
                  </button>
                </div>
                <div style={{ position: 'absolute', bottom: 86, right: 16, background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: 12, padding: 14, width: 240, boxShadow: '0 12px 24px rgba(0,0,0,0.3)' }}>
                  <div className="text-xs" style={{ color: 'var(--text)', lineHeight: 1.5 }}>
                    👋 Thinking about a fintech build? I can estimate it in 3 minutes.
                  </div>
                  <div style={{ position: 'absolute', bottom: -6, right: 22, width: 12, height: 12, background: 'var(--surface-2)', borderRight: '1px solid var(--border)', borderBottom: '1px solid var(--border)', transform: 'rotate(45deg)' }} />
                </div>
              </div>
            </div>

            {/* Sticky bar */}
            <div style={{ gridColumn: '1 / -1' }}>
              <div className="mono text-xs text-3" style={{ marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Sticky bottom bar · All pages</div>
              <div style={{ position: 'relative', height: 220, background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 12, overflow: 'hidden', display: 'grid', placeItems: 'center' }}>
                <div className="grid-bg" style={{ position: 'absolute', inset: 0, opacity: 0.4 }} />
                <StickyBar onDismiss={()=>{}} onCTA={()=>{}} />
                <div className="text-xs text-3 mono" style={{ position: 'absolute', top: 20, left: 20 }}>// pinned to bottom-center · dismissible · 24hr cookie</div>
              </div>
            </div>

            {/* Exit intent */}
            <div style={{ gridColumn: '1 / -1' }}>
              <div className="mono text-xs text-3" style={{ marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Exit-intent popup · Homepage + service pages only</div>
              <div style={{ position: 'relative', height: 460, background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 12, overflow: 'hidden' }}>
                <div className="grid-bg" style={{ position: 'absolute', inset: 0, opacity: 0.3 }} />
                <ExitIntent onClose={()=>{}} />
              </div>
            </div>

            {/* Subdomain demo banner */}
            <div style={{ gridColumn: '1 / -1' }}>
              <div className="mono text-xs text-3" style={{ marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Floating CTA · Only on product demo subdomains</div>
              <div style={{ position: 'relative', height: 240, background: 'linear-gradient(135deg, #0B0F1B, #141925)', border: '1px solid var(--border)', borderRadius: 12, overflow: 'hidden', padding: 24 }}>
                <div className="mono text-xs text-3" style={{ marginBottom: 8 }}>// example: payflow.nimblesl.com</div>
                <div className="text-xs text-3" style={{ marginBottom: 16 }}>placeholder for the live demo content — you'll drop the actual subdomain app here</div>
                <div style={{ position: 'absolute', bottom: 24, left: 24, background: 'var(--surface-2)', border: '1px solid var(--border-2)', borderRadius: 999, padding: '8px 8px 8px 16px', display: 'flex', alignItems: 'center', gap: 10, boxShadow: '0 12px 32px rgba(0,0,0,0.3)' }}>
                  <Icons.sparkle size={14} style={{ color: 'var(--blue-2)' }} />
                  <div className="text-xs" style={{ fontWeight: 600 }}>Like this dashboard? We can build yours.</div>
                  <button className="btn btn-primary" style={{ padding: '4px 10px', fontSize: 11, borderRadius: 999 }}>Get a quote</button>
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

const MobileShowcase = ({ onNav }) => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  return (
    <div className="page" style={{ background: 'radial-gradient(1200px 600px at 50% 0%, rgba(59,130,246,0.08), transparent 70%), #0A0E1A' }}>
      <section style={{ padding: '48px 0 24px' }}>
        <div className="container">
          <div className="eyebrow" style={{ marginBottom: 16 }}><span className="ev-dot" />Mobile responsive</div>
          <h1 style={{ fontSize: 48 }}>Mobile homepage<br/><span className="grad-blue">+ slide-out navigation.</span></h1>
          <p className="mt-6" style={{ fontSize: 16, maxWidth: 560 }}>
            Same content. Optimized hierarchy, single-column cards, larger tap targets. Tap the hamburger to see the menu.
          </p>
        </div>
      </section>

      <section style={{ padding: '24px 0 96px' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: 48, justifyContent: 'center', flexWrap: 'wrap', alignItems: 'start' }}>
            {/* Device 1: Homepage */}
            <div style={{ textAlign: 'center' }}>
              <div className="device">
                <div className="device-screen">
                  <MobileHomepage menuOpen={false} setMenuOpen={() => {}} />
                </div>
              </div>
              <div className="mono text-xs text-3 mt-6">Homepage · 390 × 844</div>
            </div>

            {/* Device 2: Menu open */}
            <div style={{ textAlign: 'center' }}>
              <div className="device">
                <div className="device-screen">
                  <MobileHomepage menuOpen={true} setMenuOpen={() => {}} />
                </div>
              </div>
              <div className="mono text-xs text-3 mt-6">Slide-out navigation · 390 × 844</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const App = () => {
  const [screen, setScreen] = React.useState('homepage');
  const idx = SCREENS.findIndex(s => s.id === screen);

  // Keyboard nav
  React.useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setScreen(SCREENS[Math.min(idx + 1, SCREENS.length - 1)].id);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setScreen(SCREENS[Math.max(idx - 1, 0)].id);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [idx]);

  // Scroll to top on screen change
  React.useEffect(() => {
    const stage = document.querySelector('.stage');
    if (stage) stage.scrollTop = 0;
  }, [screen]);

  const renderScreen = () => {
    switch (screen) {
      case 'homepage': return <Homepage onNav={setScreen} />;
      case 'services': return <ServicesList onNav={setScreen} />;
      case 'service-detail': return <ServiceDetail onNav={setScreen} />;
      case 'solutions': return <SolutionsList onNav={setScreen} />;
      case 'solution-detail': return <SolutionDetail onNav={setScreen} />;
      case 'estimator': return <Estimator onNav={setScreen} />;
      case 'case-studies': return <CaseStudiesList onNav={setScreen} />;
      case 'case-study': return <CaseStudyDetail onNav={setScreen} />;
      case 'hire-developers': return <HireDevelopers onNav={setScreen} />;
      case 'industry': return <IndustryDetail onNav={setScreen} />;
      case 'about': return <About onNav={setScreen} />;
      case 'contact': return <Contact onNav={setScreen} />;
      case 'blog': return <BlogList onNav={setScreen} />;
      case 'blog-post': return <BlogPost onNav={setScreen} />;
      case 'global': return <GlobalUI onNav={setScreen} />;
      case 'mega-menu': return <MegaMenuShowcase onNav={setScreen} />;
      case 'component-sheet': return <ComponentSheet onNav={setScreen} />;
      case 'testimonials': return <EnhancedTestimonials onNav={setScreen} />;
      case 'animations': return <AnimationAnnotations onNav={setScreen} />;
      case 'light-mode': return <LightModeHero onNav={setScreen} />;
      case 'mobile': return <MobileShowcase onNav={setScreen} />;
      default: return <Homepage onNav={setScreen} />;
    }
  };

  const currentScreen = SCREENS.find(s => s.id === screen);

  return (
    <>
      <Navigator current={screen} onSelect={setScreen} />
      <main className="stage" data-screen-label={currentScreen.label}>
        <div className="stage-header">
          <span className="crumb mono">nimblesl.com</span>
          <Icons.arrow size={10} style={{ color: 'var(--text-3)' }} />
          <span className="crumb mono"><b>{currentScreen.label}</b></span>
          <span className="mono text-xs text-3" style={{ marginLeft: 8 }}>· Screen {idx + 1} of {SCREENS.length}</span>
          <div className="viewport-toggle">
            <button className={screen === 'mobile' ? '' : 'active'} onClick={() => screen === 'mobile' && setScreen('homepage')}>Desktop</button>
            <button className={screen === 'mobile' ? 'active' : ''} onClick={() => setScreen('mobile')}>Mobile</button>
          </div>
        </div>
        {renderScreen()}
      </main>
    </>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
