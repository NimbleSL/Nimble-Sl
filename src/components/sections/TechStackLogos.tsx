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
    <section style={{ padding: '40px 0', borderBottom: '1px solid var(--border)' }}>
      <div className="container overflow-hidden">
        <div style={{ textAlign: 'center', marginBottom: 24 }}>
          <span className="eyebrow" style={{ color: 'var(--text-3)', fontSize: '11px' }}>
            Built with enterprise-grade technology
          </span>
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
                  padding: '0 40px',
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
                    width: '12px', 
                    height: '12px', 
                    borderRadius: '50%', 
                    backgroundColor: logo.color,
                    boxShadow: `0 0 10px ${logo.color}88`
                  }} 
                />
                <span 
                  style={{ 
                    fontSize: '18px', 
                    fontWeight: 700, 
                    fontFamily: 'var(--font-sans)',
                    letterSpacing: '-0.02em',
                    color: 'var(--text)'
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
