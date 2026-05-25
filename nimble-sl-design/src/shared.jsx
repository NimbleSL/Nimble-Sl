// Shared atoms used across screens

const Stat = ({ value, label, accent }) => (
  <div>
    <div style={{
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 40,
      letterSpacing: '-0.02em',
      color: accent || 'var(--text)',
      lineHeight: 1
    }}>{value}</div>
    <div className="text-2 text-sm mt-2">{label}</div>
  </div>
);

const FeatureCard = ({ icon: I, title, desc, accent = 'blue' }) => {
  const colors = {
    blue: 'rgba(59,130,246,0.5)',
    cyan: 'rgba(6,182,212,0.5)',
    emerald: 'rgba(16,185,129,0.5)',
    purple: 'rgba(168,85,247,0.5)',
    amber: 'rgba(245,158,11,0.5)',
    rose: 'rgba(244,63,94,0.5)'
  };
  const bg = {
    blue: 'rgba(59,130,246,0.08)',
    cyan: 'rgba(6,182,212,0.08)',
    emerald: 'rgba(16,185,129,0.08)',
    purple: 'rgba(168,85,247,0.08)',
    amber: 'rgba(245,158,11,0.08)',
    rose: 'rgba(244,63,94,0.08)'
  };
  return (
    <div className="card card-hover" style={{ padding: 24 }}>
      <div style={{
        width: 44, height: 44, borderRadius: 10,
        background: bg[accent], border: `1px solid ${colors[accent]}`,
        display: 'grid', placeItems: 'center',
        color: { blue: 'var(--blue-2)', cyan: '#67E8F9', emerald: 'var(--emerald-2)', purple: '#C084FC', amber: '#FCD34D', rose: '#FDA4AF' }[accent],
        marginBottom: 16
      }}>
        <I size={20} />
      </div>
      <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>{title}</h3>
      <p className="text-sm">{desc}</p>
    </div>
  );
};

// Browser chrome wrapper for showing product screenshots
const BrowserMock = ({ url, children, height = 360, style = {} }) => (
  <div style={{
    background: '#0B0F1B',
    border: '1px solid var(--border)',
    borderRadius: 12,
    overflow: 'hidden',
    boxShadow: '0 30px 60px -30px rgba(0,0,0,0.5)',
    ...style
  }}>
    <div style={{
      padding: '10px 14px',
      borderBottom: '1px solid var(--border)',
      display: 'flex', alignItems: 'center', gap: 12,
      background: 'rgba(20,25,37,0.5)'
    }}>
      <div style={{ display: 'flex', gap: 6 }}>
        <div style={{ width: 11, height: 11, borderRadius: '50%', background: '#3a3a3a' }} />
        <div style={{ width: 11, height: 11, borderRadius: '50%', background: '#3a3a3a' }} />
        <div style={{ width: 11, height: 11, borderRadius: '50%', background: '#3a3a3a' }} />
      </div>
      <div style={{
        flex: 1, maxWidth: 360,
        background: '#06090F',
        border: '1px solid var(--border)',
        borderRadius: 6,
        padding: '4px 10px',
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        color: 'var(--text-3)',
        margin: '0 auto'
      }}>{url}</div>
      <div style={{ width: 28 }} />
    </div>
    <div style={{ height, overflow: 'hidden' }}>{children}</div>
  </div>
);

// Compact tech-stack badge
const TechBadge = ({ name, accent = 'blue' }) => {
  const colors = {
    blue: '#60A5FA', cyan: '#67E8F9', emerald: '#34D399',
    purple: '#C084FC', amber: '#FCD34D', rose: '#FDA4AF', gray: '#94A3B8'
  };
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: 8,
      padding: '8px 14px',
      borderRadius: 8,
      background: 'var(--surface-2)',
      border: '1px solid var(--border)',
      fontSize: 13,
      fontWeight: 500,
      fontFamily: 'var(--font-mono)',
      color: 'var(--text)'
    }}>
      <span style={{ width: 6, height: 6, borderRadius: '50%', background: colors[accent], boxShadow: `0 0 8px ${colors[accent]}` }} />
      {name}
    </div>
  );
};

// Mini stat card
const MetricCard = ({ value, label, accent = 'blue', sub }) => {
  const colors = { blue: '#60A5FA', cyan: '#67E8F9', emerald: '#34D399', purple: '#C084FC', amber: '#FCD34D' };
  return (
    <div className="card" style={{ padding: 24 }}>
      <div style={{
        fontFamily: 'var(--font-display)',
        fontSize: 48, fontWeight: 800,
        color: colors[accent],
        letterSpacing: '-0.03em', lineHeight: 1
      }}>{value}</div>
      <div className="mt-3 text-sm" style={{ color: 'var(--text)', fontWeight: 600 }}>{label}</div>
      {sub && <div className="text-xs text-3 mt-2">{sub}</div>}
    </div>
  );
};

const SectionHeader = ({ eyebrow, title, sub, align = 'left' }) => (
  <div style={{ textAlign: align, maxWidth: align === 'center' ? 720 : '100%', margin: align === 'center' ? '0 auto' : 0 }}>
    {eyebrow && <div className="eyebrow" style={{ marginBottom: 16 }}><span className="ev-dot" />{eyebrow}</div>}
    <h2 className="grad-text">{title}</h2>
    {sub && <p className="mt-4" style={{ fontSize: 18, maxWidth: 640, marginLeft: align === 'center' ? 'auto' : 0, marginRight: align === 'center' ? 'auto' : 0 }}>{sub}</p>}
  </div>
);

// Fake chart/architecture viz primitives
const TrendSparkline = ({ color = '#60A5FA', height = 60, width = 200 }) => {
  const points = [50, 45, 48, 40, 42, 30, 35, 28, 20, 18, 12, 8];
  const max = Math.max(...points), min = Math.min(...points);
  const pts = points.map((p, i) => `${(i/(points.length-1))*width},${((p-min)/(max-min))*height}`).join(' ');
  return (
    <svg width={width} height={height} style={{ display: 'block' }}>
      <defs>
        <linearGradient id={`sg-${color}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.3"/>
          <stop offset="100%" stopColor={color} stopOpacity="0"/>
        </linearGradient>
      </defs>
      <polyline fill={`url(#sg-${color})`} stroke="none" points={`0,${height} ${pts} ${width},${height}`} />
      <polyline fill="none" stroke={color} strokeWidth="2" points={pts} />
    </svg>
  );
};

const Avatar = ({ initials, color, size = 36 }) => (
  <div style={{
    width: size, height: size, borderRadius: '50%',
    background: color || `linear-gradient(135deg, ${['#3B82F6','#06B6D4','#10B981','#A855F7','#F59E0B'][initials.charCodeAt(0) % 5]}, ${['#60A5FA','#67E8F9','#34D399','#C084FC','#FCD34D'][initials.charCodeAt(0) % 5]})`,
    display: 'grid', placeItems: 'center',
    color: 'white', fontWeight: 700, fontSize: size * 0.4,
    fontFamily: 'var(--font-display)',
    border: '2px solid var(--surface)',
    flexShrink: 0
  }}>{initials}</div>
);

// Country flag chips (simplified SVG placeholders)
const Flag = ({ country, w = 28, h = 18 }) => {
  const flags = {
    us: (
      <svg viewBox="0 0 24 16" width={w} height={h}>
        <rect width="24" height="16" fill="#B22234"/>
        {[1,3,5,7,9,11].map(i => <rect key={i} y={i*16/13} width="24" height={16/13} fill="white"/>)}
        <rect width="9.6" height="8.62" fill="#3C3B6E"/>
      </svg>
    ),
    uk: (
      <svg viewBox="0 0 24 16" width={w} height={h}>
        <rect width="24" height="16" fill="#012169"/>
        <path d="M0,0 L24,16 M24,0 L0,16" stroke="white" strokeWidth="2"/>
        <path d="M0,0 L24,16 M24,0 L0,16" stroke="#C8102E" strokeWidth="1"/>
        <path d="M12,0 V16 M0,8 H24" stroke="white" strokeWidth="3"/>
        <path d="M12,0 V16 M0,8 H24" stroke="#C8102E" strokeWidth="1.5"/>
      </svg>
    ),
    de: (
      <svg viewBox="0 0 24 16" width={w} height={h}>
        <rect width="24" height="5.33" fill="#000"/>
        <rect y="5.33" width="24" height="5.33" fill="#DD0000"/>
        <rect y="10.66" width="24" height="5.34" fill="#FFCE00"/>
      </svg>
    ),
    au: (
      <svg viewBox="0 0 24 16" width={w} height={h}>
        <rect width="24" height="16" fill="#012169"/>
        <path d="M0,0 L12,8 M12,0 L0,8" stroke="white" strokeWidth="1"/>
        <path d="M6,0 V8 M0,4 H12" stroke="white" strokeWidth="1.4"/>
        <path d="M6,0 V8 M0,4 H12" stroke="#C8102E" strokeWidth="0.8"/>
        <circle cx="18" cy="4" r="0.8" fill="white"/>
        <circle cx="20" cy="9" r="0.7" fill="white"/>
        <circle cx="17" cy="11" r="0.7" fill="white"/>
        <circle cx="15" cy="14" r="0.6" fill="white"/>
        <circle cx="6" cy="13" r="1.2" fill="white"/>
      </svg>
    ),
    ae: (
      <svg viewBox="0 0 24 16" width={w} height={h}>
        <rect width="6" height="16" fill="#FF0000"/>
        <rect x="6" width="18" height="5.33" fill="#009A44"/>
        <rect x="6" y="5.33" width="18" height="5.33" fill="white"/>
        <rect x="6" y="10.66" width="18" height="5.34" fill="#000"/>
      </svg>
    ),
    ca: (
      <svg viewBox="0 0 24 16" width={w} height={h}>
        <rect width="24" height="16" fill="white"/>
        <rect width="6" height="16" fill="#FF0000"/>
        <rect x="18" width="6" height="16" fill="#FF0000"/>
        <path d="M12 4 L13.2 6.5 L15 6.6 L13.6 8 L14.2 10.5 L12 9.2 L9.8 10.5 L10.4 8 L9 6.6 L10.8 6.5 Z" fill="#FF0000"/>
      </svg>
    )
  };
  return (
    <div style={{
      borderRadius: 3, overflow: 'hidden',
      border: '1px solid rgba(255,255,255,0.15)',
      boxShadow: '0 2px 6px rgba(0,0,0,0.25)',
      lineHeight: 0,
      display: 'inline-block'
    }}>
      {flags[country]}
    </div>
  );
};

// Logo chip — grayscale by default, colorizes on hover. Replace with real client logos later.
const LogoChip = ({ name, mark, color }) => (
  <div className="logo-chip">
    <span className="logo-mark" style={{ background: color }}>{mark}</span>
    {name}
  </div>
);

Object.assign(window, {
  Stat, FeatureCard, BrowserMock, TechBadge, MetricCard, SectionHeader, TrendSparkline, Avatar, Flag, LogoChip
});
