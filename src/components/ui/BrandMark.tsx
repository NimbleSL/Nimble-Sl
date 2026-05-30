export function BrandMark({ size = 48, glow = true }: { size?: number; glow?: boolean }) {
  return (
    <div style={{
      width: size,
      height: size,
      borderRadius: size * 0.27,
      background: 'linear-gradient(135deg, var(--blue), var(--cyan))',
      display: 'grid',
      placeItems: 'center',
      color: 'white',
      fontWeight: 800,
      fontSize: size * 0.46,
      fontFamily: 'var(--font-sans)',
      boxShadow: glow ? `0 ${size * 0.2}px ${size * 0.6}px -${size * 0.15}px rgba(59,130,246,0.55)` : 'none',
      flexShrink: 0,
      userSelect: 'none',
    }}>
      N
    </div>
  );
}
