// Top navigation — appears inside each web page

const NavBar = ({ active = '', onNav }) => {
  const [solutionsOpen, setSolutionsOpen] = React.useState(false);
  const link = (id, label, hasMenu) => (
    <div
      onClick={() => onNav && onNav(id)}
      onMouseEnter={() => hasMenu && setSolutionsOpen(true)}
      onMouseLeave={() => hasMenu && setSolutionsOpen(false)}
      style={{
        position: 'relative',
        color: active === id ? 'var(--text)' : 'var(--text-2)',
        fontSize: 14, fontWeight: 500,
        cursor: 'pointer',
        display: 'inline-flex', alignItems: 'center', gap: 4,
        padding: '6px 0'
      }}
    >
      {label}
      {hasMenu && <Icons.arrowDown size={12} />}
      {hasMenu && solutionsOpen && (
        <div style={{
          position: 'absolute', top: '100%', left: '-20px',
          marginTop: 8,
          width: 560,
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: 14,
          padding: 16,
          boxShadow: '0 20px 60px -10px rgba(0,0,0,0.6)',
          zIndex: 100,
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 4
        }}>
          {[
            { name: 'PayFlow', desc: 'Digital banking & payments', tag: 'FinTech' },
            { name: 'ClaimWise', desc: 'End-to-end insurance', tag: 'InsurTech' },
            { name: 'PropNest', desc: '360° property ecosystem', tag: 'PropTech' },
            { name: 'FraudShield AI', desc: '96% accurate detection', tag: 'AI/ML' },
            { name: 'FieldOps', desc: 'Offline-first field ops', tag: 'Logistics' },
            { name: 'AuthGate', desc: 'Enterprise identity', tag: 'Security' }
          ].map(p => (
            <div key={p.name} style={{
              padding: 10, borderRadius: 8, cursor: 'pointer'
            }} onMouseEnter={e => e.currentTarget.style.background = 'var(--surface-2)'}
               onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 2 }}>
                <span style={{ color: 'var(--text)', fontWeight: 600, fontSize: 13 }}>{p.name}</span>
                <span className="tag tag-blue" style={{ fontSize: 9, padding: '1px 6px' }}>{p.tag}</span>
              </div>
              <div className="text-xs text-3">{p.desc}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 80,
      background: 'rgba(10,14,26,0.6)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      borderBottom: '1px solid var(--border)'
    }}>
      <div className="container" style={{ height: 68, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 40 }}>
          <div onClick={() => onNav && onNav('homepage')} style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer' }}>
            <div style={{
              width: 30, height: 30, borderRadius: 8,
              background: 'linear-gradient(135deg, #3B82F6, #06B6D4)',
              display: 'grid', placeItems: 'center',
              color: 'white', fontWeight: 800, fontSize: 14,
              fontFamily: 'var(--font-display)',
              boxShadow: '0 4px 16px rgba(59,130,246,0.4)'
            }}>N</div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 16, letterSpacing: '-0.02em' }}>
              NimbleSL
            </div>
          </div>
          <nav style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
            {link('services', 'Services')}
            {link('solutions', 'Solutions', true)}
            {link('case-studies', 'Case Studies')}
            {link('hire-developers', 'Hire Developers')}
            {link('blog', 'Resources')}
            {link('about', 'About')}
          </nav>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{
            display: 'flex', alignItems: 'center',
            background: 'var(--surface)', border: '1px solid var(--border)',
            borderRadius: 999, padding: 3
          }}>
            <button style={{ width: 26, height: 26, borderRadius: 999, background: 'transparent', border: 0, cursor: 'pointer', display: 'grid', placeItems: 'center', color: 'var(--text-3)' }}>
              <Icons.sun size={12} />
            </button>
            <button style={{ width: 26, height: 26, borderRadius: 999, background: 'var(--surface-3)', border: 0, cursor: 'pointer', display: 'grid', placeItems: 'center', color: 'var(--blue-2)' }}>
              <Icons.moon size={12} />
            </button>
          </div>
          <button className="btn btn-soft" style={{ padding: '8px 14px', fontSize: 13 }}>
            <Icons.sparkle size={14} /> Try AI Estimator
          </button>
          <button className="btn btn-primary" style={{ padding: '8px 16px', fontSize: 13 }}>
            Book Consultation <Icons.arrow size={14} />
          </button>
        </div>
      </div>
    </header>
  );
};

window.NavBar = NavBar;
