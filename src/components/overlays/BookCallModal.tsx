'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, Mail, Phone } from 'lucide-react';

interface BookCallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PROJECT_TYPES = ['Web Application', 'Mobile App', 'AI/ML Solution', 'Custom Software', 'Cloud & DevOps', 'UI/UX Design', 'Other'];
const BUDGETS = ['Under $10K', '$10K–$25K', '$25K–$50K', '$50K–$100K', '$100K+', 'Help me figure it out'];

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '11px 14px',
  background: 'var(--surface-2)',
  border: '1px solid var(--border-2)',
  borderRadius: 8,
  color: 'var(--text)',
  fontSize: 14,
  outline: 'none',
  transition: 'border-color 0.15s ease',
  fontFamily: 'inherit',
};

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: 12,
  fontWeight: 600,
  color: 'var(--text-2)',
  marginBottom: 6,
  fontFamily: 'var(--font-mono)',
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
};

export function BookCallModal({ isOpen, onClose }: BookCallModalProps) {
  const [form, setForm] = useState({
    name: '', email: '', company: '', projectType: '', budget: '', message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  const handleChange = (field: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source: 'sticky-bar' }),
      });
      if (!res.ok) throw new Error('Failed');
      setStatus('success');
      setTimeout(() => {
        setStatus('idle');
        setForm({ name: '', email: '', company: '', projectType: '', budget: '', message: '' });
        onClose();
      }, 3000);
    } catch {
      setStatus('error');
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={handleBackdropClick}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.6)',
            backdropFilter: 'blur(6px)',
            WebkitBackdropFilter: 'blur(6px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            zIndex: 9999,
            overflowY: 'auto',
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 32, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 32, scale: 0.96 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
            className="card"
            onClick={(e) => e.stopPropagation()}
            style={{
              width: '100%',
              maxWidth: 560,
              padding: '32px',
              position: 'relative',
              maxHeight: '90vh',
              overflowY: 'auto',
            }}
          >
            {/* Close */}
            <button
              onClick={onClose}
              aria-label="Close"
              style={{
                position: 'absolute',
                top: 16,
                right: 16,
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                color: 'var(--text-3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 6,
                borderRadius: 8,
                transition: 'all 0.15s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--surface-2)';
                e.currentTarget.style.color = 'var(--text)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = 'var(--text-3)';
              }}
            >
              <X size={18} />
            </button>

            {status === 'success' ? (
              /* ── Success state ── */
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '40px 20px', textAlign: 'center' }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.15, type: 'spring', stiffness: 220, damping: 16 }}
                  style={{
                    width: 72, height: 72, borderRadius: '50%',
                    background: 'rgba(16,185,129,0.12)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: 20,
                  }}
                >
                  <CheckCircle size={36} color="#10B981" />
                </motion.div>
                <h3 className="font-display" style={{ fontSize: 22, fontWeight: 700, color: 'var(--text)', marginBottom: 10 }}>
                  Message Sent!
                </h3>
                <p style={{ fontSize: 15, color: 'var(--text-2)', lineHeight: 1.6 }}>
                  We&apos;ll respond within 2 business hours with next steps.
                </p>
              </motion.div>
            ) : (
              <>
                {/* Header */}
                <div style={{ marginBottom: 24 }}>
                  <span className="eyebrow" style={{ display: 'inline-flex', marginBottom: 12 }}>
                    <span className="ev-dot" />Book a Free Call
                  </span>
                  <h2 className="font-display" style={{ fontSize: 26, fontWeight: 800, color: 'var(--text)', marginBottom: 8, lineHeight: 1.2 }}>
                    Let&apos;s build something <span className="grad-blue">great together.</span>
                  </h2>
                  <p style={{ fontSize: 14, color: 'var(--text-2)', lineHeight: 1.6 }}>
                    Tell us about your project — we&apos;ll reply within 2 business hours.
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label style={labelStyle}>Name *</label>
                      <input required value={form.name} onChange={handleChange('name')} placeholder="John Smith" style={inputStyle} />
                    </div>
                    <div>
                      <label style={labelStyle}>Email *</label>
                      <input required type="email" value={form.email} onChange={handleChange('email')} placeholder="john@company.com" style={inputStyle} />
                    </div>
                  </div>

                  <div>
                    <label style={labelStyle}>Company</label>
                    <input value={form.company} onChange={handleChange('company')} placeholder="Acme Corp" style={inputStyle} />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label style={labelStyle}>Project type</label>
                      <select value={form.projectType} onChange={handleChange('projectType')} style={{ ...inputStyle, cursor: 'pointer' }}>
                        <option value="">Select...</option>
                        {PROJECT_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>
                    <div>
                      <label style={labelStyle}>Budget range</label>
                      <select value={form.budget} onChange={handleChange('budget')} style={{ ...inputStyle, cursor: 'pointer' }}>
                        <option value="">Select...</option>
                        {BUDGETS.map((b) => <option key={b} value={b}>{b}</option>)}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label style={labelStyle}>Message *</label>
                    <textarea
                      required
                      value={form.message}
                      onChange={handleChange('message')}
                      placeholder="Tell us about your project..."
                      rows={4}
                      style={{ ...inputStyle, resize: 'vertical', minHeight: 100 }}
                    />
                  </div>

                  {status === 'error' && (
                    <p style={{ fontSize: 13, color: '#EF4444', padding: '10px 14px', background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: 8 }}>
                      Something went wrong. Please email us directly at sales@nimblesl.com
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="btn btn-primary"
                    style={{ marginTop: 4, opacity: status === 'sending' ? 0.7 : 1, cursor: status === 'sending' ? 'not-allowed' : 'pointer' }}
                  >
                    {status === 'sending' ? 'Sending...' : 'Send Message →'}
                  </button>
                </form>

                {/* Direct contact */}
                <div style={{ marginTop: 20, padding: '14px 16px', background: 'var(--surface-2)', borderRadius: 10, display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <p style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-3)', letterSpacing: '0.08em', fontFamily: 'var(--font-mono)', textTransform: 'uppercase' }}>
                    Or reach us directly
                  </p>
                  <a href="mailto:sales@nimblesl.com" style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'var(--text-2)', textDecoration: 'none' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--blue)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-2)')}
                  >
                    <Mail size={14} /> sales@nimblesl.com
                  </a>
                  <a href="tel:+8801234567890" style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'var(--text-2)', textDecoration: 'none' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--blue)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-2)')}
                  >
                    <Phone size={14} /> +880 1234-567890
                  </a>
                </div>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
