export function OnlineDot({ label = 'Online now', size = 'sm' }: { label?: string; size?: 'sm' | 'md' }) {
  return (
    <div style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontSize: size === 'sm' ? 12 : 13,
      color: 'var(--emerald-2)',
      fontWeight: 600,
    }}>
      <span style={{ position: 'relative', display: 'inline-block' }}>
        <span style={{
          width: 8,
          height: 8,
          borderRadius: '50%',
          background: 'var(--emerald)',
          display: 'block',
        }} />
        <span style={{
          position: 'absolute',
          inset: -2,
          borderRadius: '50%',
          border: '2px solid var(--emerald)',
          opacity: 0.4,
          animation: 'pulse-glow 2s infinite',
        }} />
      </span>
      {label}
    </div>
  );
}
