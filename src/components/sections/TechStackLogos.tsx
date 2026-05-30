'use client';

import React from 'react';
import { motion } from 'framer-motion';

const LOGOS = [
  { name: 'React',    color: '#61DAFB' },
  { name: 'Next.js',  color: '#FFFFFF' },
  { name: 'Flutter',  color: '#02569B' },
  { name: 'AWS',      color: '#FF9900' },
  { name: 'GCP',      color: '#4285F4' },
  { name: 'PostgreSQL', color: '#336791' },
];

export function TechStackLogos() {
  return (
    <section style={{ padding: '32px 0 48px', position: 'relative' }}>
      <div className="container overflow-hidden">
        <div style={{ textAlign: 'center', marginBottom: 32, padding: '0 20px' }}>
          <div style={{ 
            padding: '8px 24px', 
            background: 'rgba(59,130,246,0.05)', 
            borderRadius: 100, 
            border: '1px solid rgba(59,130,246,0.15)', 
            display: 'inline-flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
          }}>
            <span style={{ 
              fontSize: 10, 
              fontWeight: 700, 
              letterSpacing: '0.15em', 
              color: 'var(--blue-2)',
              textTransform: 'uppercase'
            }}>
              BUILT WITH ENTERPRISE-GRADE TECHNOLOGY
            </span>
          </div>
        </div>
        
        {/* Infinite Marquee Container */}
        <div 
          style={{ 
            display: 'flex', 
            width: '200%', 
            maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
          }}
        >
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{ repeat: Infinity, ease: 'linear', duration: 25 }}
            style={{ display: 'flex', width: '100%', justifyContent: 'space-around', alignItems: 'center' }}
          >
            {[...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS].map((logo, i) => (
              <div 
                key={`${logo.name}-${i}`} 
                style={{
                  padding: '0 clamp(16px, 3vw, 40px)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  opacity: 0.6,
                  filter: 'grayscale(100%) brightness(1.5)',
                  transition: 'all 0.3s ease',
                  cursor: 'default',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = '1';
                  e.currentTarget.style.filter = 'grayscale(0%) brightness(1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = '0.6';
                  e.currentTarget.style.filter = 'grayscale(100%) brightness(1.5)';
                }}
              >
                {/* Simplified Logo Icon Dot */}
                <div
                  style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    backgroundColor: logo.color,
                    boxShadow: `0 0 8px ${logo.color}88`,
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontSize: 'clamp(13px, 2.5vw, 18px)',
                    fontWeight: 700,
                    fontFamily: 'var(--font-sans)',
                    letterSpacing: '-0.02em',
                    color: 'var(--text)',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {logo.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
