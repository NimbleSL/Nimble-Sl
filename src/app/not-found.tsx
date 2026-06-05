'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '120px 20px 80px',
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--bg)',
      }}
    >
      {/* Background glow effects */}
      <div
        style={{
          position: 'absolute',
          top: '30%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.12) 0%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '20%',
          right: '10%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.08) 0%, transparent 70%)',
          filter: 'blur(50px)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      <div
        className="container"
        style={{
          maxWidth: 640,
          textAlign: 'center',
          position: 'relative',
          zIndex: 2,
        }}
      >
        {/* Animated Error Code */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
        >
          <h1
            style={{
              fontSize: 'clamp(100px, 15vw, 160px)',
              fontWeight: 800,
              lineHeight: 1,
              margin: 0,
              letterSpacing: '-0.05em',
              fontFamily: 'var(--font-sans)',
              background: 'linear-gradient(135deg, var(--blue) 0%, var(--cyan) 50%, var(--emerald) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0px 10px 40px rgba(59, 130, 246, 0.15)',
            }}
          >
            404
          </h1>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            fontSize: 'clamp(24px, 4vw, 32px)',
            fontWeight: 700,
            color: 'var(--text)',
            marginTop: 20,
            marginBottom: 16,
            fontFamily: 'var(--font-sans)',
            letterSpacing: '-0.02em',
          }}
        >
          Whoops! This page vanished.
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            fontSize: 16,
            color: 'var(--text-2)',
            lineHeight: 1.6,
            marginBottom: 36,
            maxWidth: 480,
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          The resource you are looking for might have been removed, had its name changed, or is temporarily unavailable. Let's get you back on track!
        </motion.p>

        {/* Buttons Action */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: 16,
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          <Link
            href="/"
            className="btn btn-primary"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '12px 24px',
              fontSize: 14,
              fontWeight: 600,
            }}
          >
            <Home size={16} /> Return Home
          </Link>
          <Link
            href="/tools/project-estimator"
            className="btn btn-ghost"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '12px 24px',
              fontSize: 14,
              fontWeight: 600,
            }}
          >
            Try AI Estimator <ArrowRight size={16} />
          </Link>
        </motion.div>

        {/* Helpful links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{
            marginTop: 56,
            borderTop: '1px solid var(--border)',
            paddingTop: 24,
            display: 'flex',
            justifyContent: 'center',
            gap: 24,
            fontSize: 13,
            color: 'var(--text-3)',
          }}
        >
          <Link href="/blog" style={{ color: 'inherit', textDecoration: 'none' }} className="hover:text-blue-400">
            Our Blog
          </Link>
          <Link href="/solutions" style={{ color: 'inherit', textDecoration: 'none' }} className="hover:text-blue-400">
            Solutions
          </Link>
          <Link href="/contact" style={{ color: 'inherit', textDecoration: 'none' }} className="hover:text-blue-400">
            Support
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
