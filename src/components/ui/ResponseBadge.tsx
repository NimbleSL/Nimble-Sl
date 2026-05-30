import { Zap } from 'lucide-react';

export function ResponseBadge() {
  return (
    <div style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      padding: '10px 14px',
      background: 'rgba(16,185,129,0.08)',
      border: '1px solid rgba(16,185,129,0.3)',
      borderRadius: 10,
    }}>
      <div style={{
        width: 32,
        height: 32,
        borderRadius: 7,
        background: 'rgba(16,185,129,0.15)',
        display: 'grid',
        placeItems: 'center',
        color: 'var(--emerald-2)',
      }}>
        <Zap size={15} />
      </div>
      <div>
        <div style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 10,
          color: 'var(--text-3)',
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
        }}>
          Response time
        </div>
        <div style={{
          fontSize: 13,
          color: 'var(--emerald-2)',
          fontWeight: 700,
          marginTop: 2,
        }}>
          Under 2 hours
        </div>
      </div>
    </div>
  );
}
