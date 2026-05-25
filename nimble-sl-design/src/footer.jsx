const Footer = () => {
  const col = (title, items) => (
    <div>
      <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--text)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 16, fontFamily: 'var(--font-mono)' }}>{title}</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {items.map(i => <a key={i} style={{ color: 'var(--text-2)', fontSize: 13, textDecoration: 'none', cursor: 'pointer' }} onMouseEnter={e=>e.currentTarget.style.color='var(--text)'} onMouseLeave={e=>e.currentTarget.style.color='var(--text-2)'}>{i}</a>)}
      </div>
    </div>
  );

  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      background: '#06090F',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="grid-bg" style={{ position: 'absolute', inset: 0, opacity: 0.4, pointerEvents: 'none' }} />
      <div className="container" style={{ position: 'relative', padding: '64px 32px 32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr 1fr', gap: 48, marginBottom: 56 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <div style={{
                width: 32, height: 32, borderRadius: 9,
                background: 'linear-gradient(135deg, #3B82F6, #06B6D4)',
                display: 'grid', placeItems: 'center',
                color: 'white', fontWeight: 800, fontSize: 15,
                fontFamily: 'var(--font-display)',
              }}>N</div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 18 }}>NimbleSL</div>
            </div>
            <p className="text-sm" style={{ maxWidth: 280 }}>
              Silicon Valley engineering. Bangladesh pricing. Your IP.
              Building enterprise software for 12 countries since 2024.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 20 }}>
              {[Icons.linkedin, Icons.github, Icons.twitter].map((I, i) => (
                <a key={i} style={{
                  width: 36, height: 36, borderRadius: 8,
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  display: 'grid', placeItems: 'center',
                  color: 'var(--text-2)',
                  cursor: 'pointer'
                }}><I size={16} /></a>
              ))}
            </div>
            <div className="mt-6" style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              <span className="tag" style={{ fontSize: 10 }}>GDPR</span>
              <span className="tag" style={{ fontSize: 10 }}>HIPAA</span>
              <span className="tag" style={{ fontSize: 10 }}>OWASP</span>
              <span className="tag" style={{ fontSize: 10 }}>SOC 2 (in progress)</span>
            </div>
          </div>
          {col('Services', ['Custom Software', 'Web Applications', 'Mobile Apps', 'Cloud & DevOps', 'AI & Machine Learning', 'UI/UX Design'])}
          {col('Solutions', ['PayFlow — FinTech', 'ClaimWise — InsurTech', 'PropNest — PropTech', 'FraudShield AI', 'FieldOps', 'AuthGate'])}
          {col('Company', ['About', 'Team', 'Process', 'Careers', 'Case Studies', 'Press Kit'])}
          {col('Resources', ['Blog', 'Project Estimator', 'ROI Calculator', 'Tech Stack Tool', 'Guides', 'Contact'])}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 32, padding: '32px 0', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
          <div>
            <h3 style={{ fontSize: 22, marginBottom: 6 }}>Get the Nimble Insider</h3>
            <p className="text-sm">Bi-weekly: engineering deep-dives, cost playbooks, and case studies. No fluff.</p>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <input placeholder="you@company.com" style={{
              flex: 1,
              padding: '12px 14px',
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: 8,
              color: 'var(--text)',
              fontFamily: 'inherit',
              fontSize: 13,
              outline: 'none'
            }} />
            <button className="btn btn-primary" style={{ padding: '10px 18px', fontSize: 13 }}>Subscribe</button>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 28, flexWrap: 'wrap', gap: 16 }}>
          <div className="text-xs text-3">
            © 2026 Nimble Software Lab Ltd. · House 27, Road 11, Gulshan-1, Dhaka 1212, Bangladesh
          </div>
          <div style={{ display: 'flex', gap: 20, fontSize: 12, color: 'var(--text-3)' }}>
            <a style={{ color: 'inherit', textDecoration: 'none', cursor: 'pointer' }}>Privacy</a>
            <a style={{ color: 'inherit', textDecoration: 'none', cursor: 'pointer' }}>Terms</a>
            <a style={{ color: 'inherit', textDecoration: 'none', cursor: 'pointer' }}>Cookies</a>
            <a style={{ color: 'inherit', textDecoration: 'none', cursor: 'pointer' }}>Status</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

window.Footer = Footer;
