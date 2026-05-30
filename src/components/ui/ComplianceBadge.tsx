'use client';
import React, { useState } from 'react';
import { Shield } from 'lucide-react';

const BADGES = [
  { name: 'GDPR',       color: '#60A5FA', full: 'European General Data Protection Regulation. Data minimization, right-to-erase, DPO-ready audit logs.' },
  { name: 'HIPAA',      color: '#34D399', full: 'US Health Insurance Portability & Accountability Act. PHI handling, audit trails, BAAs for healthcare clients.' },
  { name: 'OWASP',      color: '#FCD34D', full: 'Continuous testing against the OWASP Top 10 web application security risks. Automated CI scans + annual pentest.' },
  { name: 'SOC 2',      color: '#C084FC', full: 'SOC 2 Type 1 in progress (Q4 2026). Type 2 attestation expected Q2 2027. Trust services criteria audited.' },
  { name: 'ISO 27001',  color: '#FDA4AF', full: 'Risk-based information security management system. Asset register, annual penetration tests, ISMS roadmap.' },
  { name: 'PCI-DSS',    color: '#67E8F9', full: 'Payment Card Industry Data Security Standard. Required for FinTech projects handling card data.' },
];

export function ComplianceBadge({ name, color, full }: { name: string; color: string; full: string }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{ position: 'relative' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        padding: '8px 14px',
        background: hovered ? `${color}1A` : 'var(--surface)',
        border: `1px solid ${hovered ? `${color}66` : 'var(--border)'}`,
        borderRadius: 999,
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        boxShadow: hovered ? `0 0 24px -4px ${color}55` : 'none',
      }}>
        <Shield size={13} style={{ color }} />
        <span style={{
          fontFamily: 'var(--font-mono)',
          fontWeight: 600,
          fontSize: 12,
          color: hovered ? color : 'var(--text)',
          letterSpacing: '0.02em',
        }}>
          {name}
        </span>
      </div>
      {hovered && (
        <div style={{
          position: 'absolute',
          bottom: 'calc(100% + 8px)',
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'var(--surface-2)',
          border: '1px solid var(--border-2)',
          borderRadius: 8,
          padding: '8px 12px',
          width: 240,
          zIndex: 10,
          boxShadow: '0 12px 32px rgba(0,0,0,0.4)',
        }}>
          <div style={{ fontSize: 12, color: 'var(--text)', lineHeight: 1.5 }}>
            {full}
          </div>
          <div style={{
            position: 'absolute',
            bottom: -6,
            left: '50%',
            transform: 'translateX(-50%) rotate(45deg)',
            width: 10,
            height: 10,
            background: 'var(--surface-2)',
            borderRight: '1px solid var(--border-2)',
            borderBottom: '1px solid var(--border-2)',
          }} />
        </div>
      )}
    </div>
  );
}

export function ComplianceBadges() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center' }}>
      {BADGES.map(b => <ComplianceBadge key={b.name} {...b} />)}
    </div>
  );
}
