// Floating overlays: NimbleBot chat widget, sticky bottom bar, exit intent

const StickyBar = ({ onDismiss, onCTA }) => (
  <div style={{
    position: 'absolute', bottom: 20, left: '50%', transform: 'translateX(-50%)',
    background: 'rgba(20,25,37,0.92)',
    border: '1px solid var(--border-2)',
    borderRadius: 999,
    padding: '8px 8px 8px 18px',
    display: 'flex', alignItems: 'center', gap: 12,
    boxShadow: '0 20px 60px -10px rgba(0,0,0,0.5)',
    backdropFilter: 'blur(16px)',
    zIndex: 60
  }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#FCD34D' }}>
      <Icons.star size={14} />
      <span style={{ fontWeight: 600, color: 'var(--text)', fontSize: 13 }}>4.9/5</span>
    </div>
    <span className="text-xs text-2">on Clutch · 50+ verified reviews</span>
    <div style={{ width: 1, height: 18, background: 'var(--border)' }} />
    <button className="btn btn-emerald" style={{ padding: '6px 14px', fontSize: 12, borderRadius: 999 }} onClick={onCTA}>
      Book Free Call <Icons.arrow size={12} />
    </button>
    <button onClick={onDismiss} style={{
      background: 'transparent', border: 0, color: 'var(--text-3)',
      cursor: 'pointer', display: 'grid', placeItems: 'center', padding: 6
    }}><Icons.x size={14} /></button>
  </div>
);

const ChatWidget = ({ expanded, onToggle }) => {
  if (!expanded) {
    return (
      <button onClick={onToggle} style={{
        position: 'absolute', bottom: 24, right: 24,
        width: 56, height: 56, borderRadius: '50%',
        background: 'linear-gradient(135deg, #3B82F6, #06B6D4)',
        border: 0,
        display: 'grid', placeItems: 'center',
        color: 'white',
        cursor: 'pointer',
        boxShadow: '0 12px 32px -8px rgba(59,130,246,0.6)',
        zIndex: 70
      }}>
        <Icons.message size={22} />
        <div style={{
          position: 'absolute', top: -2, right: -2,
          width: 14, height: 14, borderRadius: '50%',
          background: '#10B981',
          border: '2px solid var(--bg)',
          animation: 'pulse-glow 2s infinite'
        }} />
      </button>
    );
  }
  return (
    <div style={{
      position: 'absolute', bottom: 24, right: 24,
      width: 380, height: 540,
      background: 'var(--surface)',
      border: '1px solid var(--border-2)',
      borderRadius: 16,
      display: 'flex', flexDirection: 'column',
      boxShadow: '0 30px 80px -10px rgba(0,0,0,0.6)',
      overflow: 'hidden',
      zIndex: 70
    }}>
      {/* Header */}
      <div style={{
        padding: 16,
        background: 'linear-gradient(135deg, rgba(59,130,246,0.18), rgba(6,182,212,0.12))',
        borderBottom: '1px solid var(--border)',
        display: 'flex', alignItems: 'center', gap: 12
      }}>
        <div style={{
          width: 38, height: 38, borderRadius: 10,
          background: 'linear-gradient(135deg, #3B82F6, #06B6D4)',
          display: 'grid', placeItems: 'center', color: 'white'
        }}><Icons.sparkle size={18} /></div>
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: 700, fontSize: 14 }}>NimbleBot</div>
          <div className="text-xs" style={{ color: 'var(--emerald-2)', display: 'flex', alignItems: 'center', gap: 4 }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--emerald)' }} />
            Online · Typically replies instantly
          </div>
        </div>
        <button onClick={onToggle} style={{
          background: 'transparent', border: 0, color: 'var(--text-2)', cursor: 'pointer', padding: 4
        }}><Icons.x size={18} /></button>
      </div>

      {/* Messages */}
      <div style={{ flex: 1, padding: 16, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div style={{
          background: 'var(--surface-2)',
          padding: '12px 14px', borderRadius: '14px 14px 14px 4px',
          fontSize: 13, lineHeight: 1.5, maxWidth: '85%'
        }}>
          👋 Hi there! I'm NimbleBot. Looking to build something? I can help you with:
        </div>
        {[
          { i: Icons.chart, label: 'Get a quick project estimate' },
          { i: Icons.device, label: 'Explore our product demos' },
          { i: Icons.message, label: 'Chat about your project' },
          { i: Icons.clock, label: 'Book a free consultation' }
        ].map((o, idx) => (
          <button key={idx} style={{
            background: 'var(--surface-2)',
            border: '1px solid var(--border)',
            padding: '10px 14px',
            borderRadius: 10,
            color: 'var(--text)',
            fontSize: 13,
            fontFamily: 'inherit',
            display: 'flex', alignItems: 'center', gap: 10,
            cursor: 'pointer',
            textAlign: 'left'
          }}>
            <o.i size={16} style={{ color: 'var(--blue-2)' }} />
            {o.label}
            <Icons.arrow size={14} style={{ marginLeft: 'auto', color: 'var(--text-3)' }} />
          </button>
        ))}
        <div style={{ alignSelf: 'flex-end', maxWidth: '85%' }}>
          <div style={{
            background: 'linear-gradient(135deg, #3B82F6, #2f6fd6)',
            padding: '10px 14px', borderRadius: '14px 14px 4px 14px',
            fontSize: 13, color: 'white'
          }}>Tell me about pricing for a fintech app</div>
          <div className="text-xs text-3" style={{ textAlign: 'right', marginTop: 4 }}>Just now</div>
        </div>
        <div style={{ background: 'var(--surface-2)', padding: '12px 14px', borderRadius: '14px 14px 14px 4px', fontSize: 13, maxWidth: '85%' }}>
          Great question! FinTech apps with us typically range from <strong style={{color:'var(--emerald-2)'}}>$25K–$80K</strong> depending on features.
          <br/><br/>
          Have you seen our <a style={{ color: 'var(--blue-2)' }}>PayFlow demo</a>? It's a production-grade digital banking platform — most clients customize from there for 60% less.
        </div>
      </div>

      {/* Input */}
      <div style={{ padding: 12, borderTop: '1px solid var(--border)', display: 'flex', gap: 8 }}>
        <input placeholder="Type your message…" style={{
          flex: 1, padding: '10px 14px',
          background: 'var(--surface-2)',
          border: '1px solid var(--border)',
          borderRadius: 8,
          color: 'var(--text)', fontFamily: 'inherit', fontSize: 13,
          outline: 'none'
        }} />
        <button className="btn btn-primary" style={{ padding: '8px 12px' }}><Icons.send size={14} /></button>
      </div>
    </div>
  );
};

const ExitIntent = ({ onClose }) => (
  <div style={{
    position: 'absolute', inset: 0,
    background: 'rgba(6,9,15,0.85)',
    backdropFilter: 'blur(8px)',
    display: 'grid', placeItems: 'center',
    zIndex: 90
  }}>
    <div className="card" style={{
      width: 520, padding: 36, position: 'relative',
      background: 'linear-gradient(180deg, var(--surface-2), var(--surface))',
      border: '1px solid var(--border-2)',
      boxShadow: '0 30px 80px -10px rgba(0,0,0,0.6)'
    }}>
      <button onClick={onClose} style={{
        position: 'absolute', top: 16, right: 16,
        background: 'transparent', border: 0, color: 'var(--text-2)', cursor: 'pointer'
      }}><Icons.x size={18} /></button>
      <div className="eyebrow" style={{ marginBottom: 16 }}>
        <span className="ev-dot" /> Before you go
      </div>
      <h3 style={{ fontSize: 28, marginBottom: 12 }}>Get your project estimated in 3 minutes — free.</h3>
      <p>Skip the "fill a form and wait 3 days" routine. Our AI Estimator gives you scope, timeline, and cost range backed by 50+ delivered projects.</p>
      <div className="mt-6" style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
        <input placeholder="your@email.com" style={{
          flex: 1, padding: '12px 14px',
          background: 'var(--bg)',
          border: '1px solid var(--border)',
          borderRadius: 8,
          color: 'var(--text)', fontFamily: 'inherit', fontSize: 14,
          outline: 'none'
        }} />
        <button className="btn btn-emerald">Start Estimate <Icons.arrow size={14} /></button>
      </div>
      <div className="text-xs text-3" style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        <Icons.lock size={12} /> We'll never share your email. PDF report delivered instantly.
      </div>
    </div>
  </div>
);

Object.assign(window, { StickyBar, ChatWidget, ExitIntent });
