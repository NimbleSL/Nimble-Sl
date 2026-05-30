export function CodeSignature({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const fs = size === 'lg' ? 18 : size === 'sm' ? 11 : 14;
  return (
    <span style={{
      fontFamily: 'var(--font-mono)',
      fontSize: fs,
      color: 'var(--text-2)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 2,
      letterSpacing: '-0.01em',
    }}>
      <span style={{ color: 'var(--blue-2)' }}>{'<'}</span>
      <span style={{ color: 'var(--text)', fontWeight: 600 }}>NimbleSL</span>
      <span style={{ color: 'var(--blue-2)' }}>{'/>'}</span>
    </span>
  );
}
