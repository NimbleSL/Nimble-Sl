'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Mail, Phone, MapPin, Send, Sparkles, Shield } from 'lucide-react';
import { ResponseBadge } from '@/components/ui/ResponseBadge';

interface IFormData {
  name: string;
  email: string;
  company: string;
  projectType: string;
  budget: string;
  message: string;
}

const PROJECT_TYPES = ['Web Application', 'Mobile App', 'AI/ML Solution', 'Custom Software', 'Cloud & DevOps', 'UI/UX Design', 'Other'];
const BUDGETS = ['Under $10K', '$10K–$25K', '$25K–$50K', '$50K–$100K', '$100K+', 'Help me figure it out'];

export default function ContactPage() {
  const [form, setForm] = useState<IFormData>({ name: '', email: '', company: '', projectType: '', budget: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source: 'contact-page' }),
      });
      if (!res.ok) throw new Error('Failed');
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  const handleChange = (field: keyof IFormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const inputStyle = {
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

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 80 }}>
        {/* Hero */}
        <section style={{ padding: '80px 0 64px', position: 'relative', overflow: 'hidden' }}>
          <div className="mesh-bg" />
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <span className="eyebrow" style={{ marginBottom: 20, display: 'inline-flex' }}>
              <span className="ev-dot" />Get in touch
            </span>
            <h1 className="font-display" style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 800, lineHeight: 1.1, color: 'var(--text)', maxWidth: 640 }}>
              Let&apos;s build something<br /><span className="grad-blue">great together.</span>
            </h1>
            <p style={{ marginTop: 20, fontSize: 17, color: 'var(--text-2)', maxWidth: 560, lineHeight: 1.65 }}>
              Tell us about your project. We&apos;ll respond within 2 business hours with initial thoughts and next steps.
            </p>
          </div>
        </section>

        {/* Form + Info */}
        <section style={{ padding: '0 0 96px' }}>
          <div className="container">
            <div className="rg-content-cta" style={{ gap: 48 }}>
              {/* Form */}
              <div className="card" style={{ padding: 40 }}>
                {status === 'success' ? (
                  <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                    <div style={{ fontSize: 48, marginBottom: 16 }}>🎉</div>
                    <h2 style={{ fontSize: 24, fontWeight: 700, color: 'var(--text)', marginBottom: 12 }}>Message sent!</h2>
                    <p style={{ color: 'var(--text-2)', lineHeight: 1.65 }}>
                      We&apos;ll get back to you within 2 business hours. Check your inbox for a confirmation.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <h2 style={{ fontSize: 22, fontWeight: 700, color: 'var(--text)', marginBottom: 24 }}>Tell us about your project</h2>

                    <div className="rg-2" style={{ gap: 16, marginBottom: 16 }}>
                      <div>
                        <label htmlFor="contact-name" style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'var(--text-2)', marginBottom: 6, fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Name *</label>
                        <input id="contact-name" required value={form.name} onChange={handleChange('name')} placeholder="John Smith" style={inputStyle} />
                      </div>
                      <div>
                        <label htmlFor="contact-email" style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'var(--text-2)', marginBottom: 6, fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Email *</label>
                        <input id="contact-email" required type="email" value={form.email} onChange={handleChange('email')} placeholder="john@company.com" style={inputStyle} />
                      </div>
                    </div>

                    <div className="rg-2" style={{ gap: 16, marginBottom: 16 }}>
                      <div>
                        <label htmlFor="contact-company" style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'var(--text-2)', marginBottom: 6, fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Company</label>
                        <input id="contact-company" value={form.company} onChange={handleChange('company')} placeholder="Acme Corp" style={inputStyle} />
                      </div>
                      <div>
                        <label htmlFor="contact-project-type" style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'var(--text-2)', marginBottom: 6, fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Project type</label>
                        <select id="contact-project-type" value={form.projectType} onChange={handleChange('projectType')} style={{ ...inputStyle, cursor: 'pointer' }}>
                          <option value="">Select type</option>
                          {PROJECT_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
                        </select>
                      </div>
                    </div>

                    <div style={{ marginBottom: 16 }}>
                      <label htmlFor="contact-budget" style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'var(--text-2)', marginBottom: 6, fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Budget range</label>
                      <select id="contact-budget" value={form.budget} onChange={handleChange('budget')} style={{ ...inputStyle, cursor: 'pointer' }}>
                        <option value="">Select range</option>
                        {BUDGETS.map((b) => <option key={b} value={b}>{b}</option>)}
                      </select>
                    </div>

                    <div style={{ marginBottom: 24 }}>
                      <label htmlFor="contact-message" style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'var(--text-2)', marginBottom: 6, fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Message *</label>
                      <textarea
                        id="contact-message"
                        required
                        value={form.message}
                        onChange={handleChange('message')}
                        rows={5}
                        placeholder="Tell us about your project — what are you building, what's the timeline, any specific requirements..."
                        style={{ ...inputStyle, resize: 'vertical', minHeight: 120 }}
                      />
                    </div>

                    <button type="submit" disabled={status === 'sending'} className="btn btn-emerald" style={{ width: '100%', justifyContent: 'center', padding: '13px', fontSize: 15 }}>
                      {status === 'sending' ? 'Sending...' : <><Send size={15} /> Send message</>}
                    </button>

                    {status === 'error' && (
                      <p style={{ marginTop: 12, fontSize: 13, color: 'var(--rose)', textAlign: 'center' }}>Something went wrong. Try emailing us directly at sales@nimblesl.com</p>
                    )}
                  </form>
                )}
              </div>

              {/* Sidebar info */}
              <div>
                <div style={{ marginBottom: 20 }}>
                  <ResponseBadge />
                </div>
                <div className="card" style={{ padding: 28, marginBottom: 20 }}>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: 'var(--text)', marginBottom: 20 }}>Direct contact</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'var(--text-2)', fontSize: 14 }}>
                      <Mail size={15} style={{ color: 'var(--blue-2)', flexShrink: 0 }} /> sales@nimblesl.com
                    </span>
                    <a href="tel:+8801796109979" style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'var(--text-2)', textDecoration: 'none', fontSize: 14 }}>
                      <Phone size={15} style={{ color: 'var(--blue-2)', flexShrink: 0 }} /> +880-1796-109979
                    </a>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 14, color: 'var(--text-2)' }}>
                      <MapPin size={15} style={{ color: 'var(--blue-2)', flexShrink: 0, marginTop: 2 }} />
                      <span>House-1, Road-34<br />Gulshan-2, Dhaka-1212<br />Bangladesh</span>
                    </div>
                  </div>
                </div>

                <div className="card" style={{ padding: 28 }}>
                  <Shield size={20} style={{ color: 'var(--emerald)', marginBottom: 12 }} />
                  <h3 style={{ fontSize: 15, fontWeight: 700, color: 'var(--text)', marginBottom: 8 }}>1-Week Risk-Free Pilot</h3>
                  <p style={{ fontSize: 13, color: 'var(--text-2)', lineHeight: 1.65 }}>
                    Not sure if we&apos;re the right fit? Start with a 1-week paid pilot. See real code, real communication, real progress. If you&apos;re not satisfied, you don&apos;t pay.
                  </p>
                </div>

                <div style={{ marginTop: 20, padding: '16px 20px', background: 'rgba(168,85,247,0.08)', border: '1px solid rgba(168,85,247,0.2)', borderRadius: 12 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                    <Sparkles size={14} style={{ color: 'var(--purple-2)' }} />
                    <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--text)' }}>Prefer AI?</span>
                  </div>
                  <p style={{ fontSize: 12, color: 'var(--text-3)', lineHeight: 1.5 }}>Get an instant estimate with our AI tool — no waiting required.</p>
                  <a href="/tools/project-estimator" style={{ display: 'inline-flex', alignItems: 'center', gap: 4, marginTop: 10, fontSize: 12, color: 'var(--purple-2)', fontWeight: 600 }}>
                    Try AI Estimator →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
