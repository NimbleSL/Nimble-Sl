'use client';

import { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft, ArrowRight, Sparkles, Check, Calendar, DollarSign,
  Users, Package, Clock, TrendingUp, AlertCircle, CheckCircle,
  ExternalLink, Phone, Mail, Building2, User, Zap, Code2, Layers,
  Shield, Globe, Smartphone, Bot, Database, ChevronRight,
} from 'lucide-react';
import Link from 'next/link';
import { useTheme } from '@/components/providers/ThemeProvider';
import type { IEstimatorInput, IEstimatorResult, ILeadData } from '@/lib/types/estimator';

// ─── Step colour themes ────────────────────────────────────────────────────

const STEP_THEMES = [
  { primary: '#3B82F6', rgb: '59,130,246' },   // 1 type
  { primary: '#06B6D4', rgb: '6,182,212' },    // 2 industry
  { primary: '#10B981', rgb: '16,185,129' },   // 3 features
  { primary: '#A855F7', rgb: '168,85,247' },   // 4 design
  { primary: '#3B82F6', rgb: '59,130,246' },   // 5 timeline
  { primary: '#10B981', rgb: '16,185,129' },   // 6 budget
  { primary: '#06B6D4', rgb: '6,182,212' },    // 7 details
];

const STEP_LABELS = ['Type', 'Industry', 'Features', 'Design', 'Timeline', 'Budget', 'Details'];
const PHASE_COLORS = ['#3B82F6', '#06B6D4', '#10B981', '#A855F7', '#F59E0B'];

// ─── Data ──────────────────────────────────────────────────────────────────

const PROJECT_TYPES = [
  { label: 'Web Application',          value: 'Web Application',          icon: Globe,      desc: 'React, Next.js, Angular' },
  { label: 'Mobile App (iOS/Android)', value: 'Mobile App (iOS/Android)', icon: Smartphone, desc: 'Flutter & React Native' },
  { label: 'AI/ML Solution',           value: 'AI/ML Solution',           icon: Bot,        desc: 'LLMs, ML models, NLP' },
  { label: 'API & Backend',            value: 'API & Backend',            icon: Database,   desc: 'REST, GraphQL, microservices' },
  { label: 'UI/UX Design Only',        value: 'UI/UX Design Only',        icon: Layers,     desc: 'Figma to design system' },
  { label: 'Full-Stack Platform',      value: 'Full-Stack Platform',      icon: Code2,      desc: 'End-to-end product build' },
];

const INDUSTRIES = [
  'FinTech', 'InsurTech', 'PropTech', 'HealthTech',
  'Logistics & Supply Chain', 'HR & Talent', 'Legal Tech',
  'E-Commerce', 'Enterprise SaaS', 'Other',
];

const FEATURES_GROUPS: Record<string, string[]> = {
  'Auth & Users': ['User Authentication', 'Role-Based Access', 'Social Login', '2FA / MFA'],
  'Core': ['Dashboard & Analytics', 'File Upload & Storage', 'Real-time Updates', 'Search & Filter', 'Notifications'],
  'Payments': ['Payment Integration', 'Subscription Billing', 'Multi-currency'],
  'AI': ['AI/ML Features', 'Chatbot / NLP', 'Document OCR', 'Fraud Detection'],
  'Infrastructure': ['Admin Panel', 'REST API', 'GraphQL API', 'Third-party Integrations', 'Mobile App'],
};

const DESIGN_STATUS = [
  { label: 'Start from Scratch',    desc: 'We handle ideation to final pixel' },
  { label: 'Have Wireframes',       desc: 'Basic wireframes ready to design from' },
  { label: 'Have Figma Designs',    desc: 'Pixel-perfect designs ready to build' },
  { label: 'Clone a Reference Site', desc: 'Inspired by an existing product' },
];

const TIMELINES = [
  { label: 'ASAP',       sub: '< 2 months',  desc: 'Sprint delivery, larger team' },
  { label: '3–4 Months', sub: 'Standard',     desc: 'Balanced pace & quality' },
  { label: '5–6 Months', sub: 'Thorough',     desc: 'Room for polish & iteration' },
  { label: 'Flexible',   sub: '6+ months',   desc: 'Phased delivery, minimal rush' },
];

const BUDGETS = [
  { label: 'Under $15K',     value: 'Under $15K',     desc: 'MVP / prototype scope' },
  { label: '$15K – $30K',    value: '$15K – $30K',    desc: 'Solid starter product' },
  { label: '$30K – $60K',    value: '$30K – $60K',    desc: 'Full-featured application' },
  { label: '$60K – $100K',   value: '$60K – $100K',   desc: 'Enterprise-grade platform' },
  { label: '$100K+',         value: '$100K+',         desc: 'Complex multi-system build' },
];

// ─── Helpers ──────────────────────────────────────────────────────────────

function fmtCurrency(v: number) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(v);
}

function useCountUp(target: number, duration = 1800, startDelay = 0) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => {
      const t0 = performance.now();
      const frame = (now: number) => {
        const p = Math.min((now - t0) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        setValue(Math.round(target * eased));
        if (p < 1) requestAnimationFrame(frame);
        else setValue(target);
      };
      requestAnimationFrame(frame);
    }, startDelay);
    return () => clearTimeout(t);
  }, [target, duration, startDelay]);
  return value;
}

// ─── Background layers ────────────────────────────────────────────────────

function AmbientOrbs({ rgb, isDark }: { rgb: string; isDark: boolean }) {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
      <motion.div
        className="absolute rounded-full"
        style={{ width: 800, height: 800, top: '-20%', left: '-15%', background: `radial-gradient(circle, rgba(${rgb},${isDark ? '0.07' : '0.09'}) 0%, transparent 70%)`, filter: 'blur(80px)' }}
        animate={{ x: [0, 40, 0], y: [0, 20, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute rounded-full"
        style={{ width: 600, height: 600, bottom: '-10%', right: '-10%', background: `radial-gradient(circle, rgba(${rgb},${isDark ? '0.05' : '0.07'}) 0%, transparent 70%)`, filter: 'blur(80px)' }}
        animate={{ x: [0, -30, 0], y: [0, -25, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* Grid */}
      <div className="absolute inset-0" style={{
        backgroundImage: isDark
          ? `linear-gradient(var(--overlay-xs) 1px, transparent 1px), linear-gradient(90deg, var(--overlay-xs) 1px, transparent 1px)`
          : `linear-gradient(var(--overlay-sm) 1px, transparent 1px), linear-gradient(90deg, var(--overlay-sm) 1px, transparent 1px)`,
        backgroundSize: '48px 48px',
      }} />
    </div>
  );
}

function Particles({ color }: { color: string }) {
  const particles = useMemo(() =>
    Array.from({ length: 18 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100 + 20,
      size: Math.random() * 2 + 0.8,
      duration: Math.random() * 16 + 18,
      delay: Math.random() * 8,
    })), []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size, background: color, boxShadow: `0 0 ${p.size * 4}px ${color}` }}
          animate={{ y: [0, -70, 0], opacity: [0, 0.6, 0] }}
          transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: 'easeInOut' }}
        />
      ))}
    </div>
  );
}

// ─── Glow option card ─────────────────────────────────────────────────────

interface GlowCardProps {
  selected: boolean;
  rgb: string;
  onClick: () => void;
  children: React.ReactNode;
  isDark: boolean;
  className?: string;
}

function GlowCard({ selected, rgb, onClick, children, isDark, className = '' }: GlowCardProps) {
  const [mouse, setMouse] = useState({ x: 50, y: 50 });
  const [ripple, setRipple] = useState<{ x: number; y: number } | null>(null);
  const ref = useRef<HTMLButtonElement>(null);

  const onMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const r = ref.current!.getBoundingClientRect();
    setMouse({ x: ((e.clientX - r.left) / r.width) * 100, y: ((e.clientY - r.top) / r.height) * 100 });
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const r = ref.current!.getBoundingClientRect();
    setRipple({ x: e.clientX - r.left, y: e.clientY - r.top });
    setTimeout(() => setRipple(null), 700);
    onClick();
  };

  const unselectedBg = isDark ? 'rgba(12,18,36,0.6)' : 'rgba(255,255,255,0.85)';
  const unselectedBorder = 'var(--border)';

  return (
    <motion.button
      ref={ref}
      type="button"
      className={`relative overflow-hidden text-left w-full rounded-xl transition-all duration-200 ${className}`}
      style={{
        background: selected ? `rgba(${rgb},${isDark ? '0.1' : '0.07'})` : unselectedBg,
        border: `1px solid ${selected ? `rgba(${rgb},${isDark ? '0.55' : '0.45'})` : unselectedBorder}`,
        boxShadow: selected
          ? `0 0 24px rgba(${rgb},${isDark ? '0.18' : '0.12'}), 0 0 48px rgba(${rgb},0.06), inset 0 0 16px rgba(${rgb},0.04)`
          : isDark ? 'none' : '0 1px 3px rgba(0,0,0,0.06)',
        backdropFilter: 'blur(10px)',
      }}
      onMouseMove={onMouseMove}
      onClick={handleClick}
      whileHover={{ scale: selected ? 1.01 : 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.15 }}
    >
      {/* Mouse-tracking radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: `radial-gradient(200px circle at ${mouse.x}% ${mouse.y}%, rgba(${rgb},${isDark ? '0.1' : '0.07'}), transparent)` }}
      />
      {/* Click ripple */}
      {ripple && (
        <motion.div
          key={`${ripple.x}-${ripple.y}`}
          className="absolute rounded-full pointer-events-none"
          style={{ left: ripple.x, top: ripple.y, width: 8, height: 8, marginLeft: -4, marginTop: -4, background: `rgba(${rgb},0.4)` }}
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 24, opacity: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        />
      )}
      {children}
    </motion.button>
  );
}

// ─── Futuristic step progress ─────────────────────────────────────────────

function StepProgress({ step, isDark }: { step: number; isDark: boolean }) {
  const theme = STEP_THEMES[step - 1];
  const trackColor = isDark ? 'var(--overlay-md)' : 'var(--overlay-md)';
  const nodeBg = isDark ? 'var(--overlay-xs)' : 'var(--overlay-sm)';
  const nodeBorder = isDark ? 'var(--overlay-md)' : 'var(--border-2)';
  const labelDone = isDark ? 'var(--text-3)' : 'var(--text-3)';
  const labelFuture = isDark ? 'var(--text-3)' : 'var(--text-3)';
  const numColor = isDark ? 'var(--text-3)' : 'var(--text-3)';

  return (
    <div className="relative w-full max-w-xl mx-auto px-2 flex items-start justify-between">
      {/* Track line */}
      <div className="absolute left-6 right-6 top-4 h-px" style={{ background: trackColor }} />
      {/* Filled line */}
      <motion.div
        className="absolute left-6 top-4 h-px"
        style={{ background: theme.primary, boxShadow: `0 0 8px ${theme.primary}70` }}
        animate={{ width: `calc(${((step - 1) / 6) * 100}%)` }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      />
      {STEP_LABELS.map((label, i) => {
        const s = i + 1;
        const isActive = s === step;
        const isDone = s < step;
        return (
          <div key={s} className="relative flex flex-col items-center gap-1.5" style={{ zIndex: 1 }}>
            <motion.div
              className="relative flex items-center justify-center rounded-full"
              style={{
                width: 32,
                height: 32,
                background: isDone ? theme.primary : isActive ? 'transparent' : nodeBg,
                border: `1.5px solid ${isDone || isActive ? theme.primary : nodeBorder}`,
                boxShadow: isActive ? `0 0 0 3px rgba(${theme.rgb},0.15), 0 0 14px rgba(${theme.rgb},0.45)` : 'none',
              }}
              animate={isActive ? { scale: [1, 1.08, 1] } : {}}
              transition={{ duration: 2.2, repeat: Infinity }}
            >
              {isDone ? (
                <Check size={13} style={{ color: 'white' }} />
              ) : (
                <span style={{ fontSize: 10, fontWeight: 700, fontFamily: 'var(--font-mono)', color: isActive ? theme.primary : numColor }}>
                  {s}
                </span>
              )}
              {isActive && (
                <motion.div
                  className="absolute inset-0 rounded-full pointer-events-none"
                  style={{ border: `1px solid ${theme.primary}` }}
                  animate={{ scale: [1, 1.8], opacity: [0.5, 0] }}
                  transition={{ duration: 1.6, repeat: Infinity }}
                />
              )}
            </motion.div>
            <span style={{
              fontSize: 8,
              fontFamily: 'var(--font-mono)',
              textTransform: 'uppercase',
              letterSpacing: '0.09em',
              color: isActive ? theme.primary : isDone ? labelDone : labelFuture,
              fontWeight: isActive ? 700 : 400,
              whiteSpace: 'nowrap',
            }}>
              {label}
            </span>
          </div>
        );
      })}
    </div>
  );
}

// ─── Loading Screen ───────────────────────────────────────────────────────

function LoadingScreen() {
  const [stageIdx, setStageIdx] = useState(0);
  const [lines, setLines] = useState<string[]>([]);

  const stages = [
    { label: 'Parsing requirements', emoji: '🔍' },
    { label: 'Scanning 10 reference projects', emoji: '📊' },
    { label: 'Running cost model v2.4', emoji: '⚡' },
    { label: 'Building team composition', emoji: '👥' },
    { label: 'Finalising your estimate', emoji: '✨' },
  ];

  const terminalLines = [
    '$ nimble-ai --analyze --depth=full',
    '> Parsing 7 wizard inputs...',
    '> Cross-referencing 10 reference builds...',
    '> Applying Nimble rate card v2.4...',
    '> Calculating team allocation...',
    '> Applying 15% scope buffer...',
    '> Generating cost breakdown...',
    '> ✓ Estimation complete',
  ];

  useEffect(() => {
    let si = 0;
    const st = setInterval(() => { si = (si + 1) % stages.length; setStageIdx(si); }, 1700);
    let li = 0;
    const lt = setInterval(() => {
      if (li < terminalLines.length) { setLines((p) => [...p, terminalLines[li]]); li++; }
      else clearInterval(lt);
    }, 550);
    return () => { clearInterval(st); clearInterval(lt); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const r = 52;
  const circ = 2 * Math.PI * r;
  const progress = (stageIdx + 1) / stages.length;

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center gap-10 px-4" style={{ background: '#06080F', zIndex: 100 }}>
      {/* Ambient */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div style={{ position: 'absolute', width: 600, height: 600, top: '-20%', left: '-10%', borderRadius: '50%', background: 'radial-gradient(circle, rgba(59,130,246,0.08), transparent 70%)', filter: 'blur(60px)' }}
          animate={{ x: [0, 30, 0], y: [0, 20, 0] }} transition={{ duration: 12, repeat: Infinity }} />
        <motion.div style={{ position: 'absolute', width: 500, height: 500, bottom: '-10%', right: '-5%', borderRadius: '50%', background: 'radial-gradient(circle, rgba(16,185,129,0.06), transparent 70%)', filter: 'blur(60px)' }}
          animate={{ x: [0, -20, 0], y: [0, -15, 0] }} transition={{ duration: 10, repeat: Infinity }} />
      </div>

      {/* Header */}
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-center">
        <div style={{ fontSize: 11, fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--blue-2)', marginBottom: 8 }}>
          Nimble AI · Processing
        </div>
        <h1 className="font-display" style={{ fontSize: 'clamp(22px, 4vw, 32px)', fontWeight: 800, color: 'var(--text)' }}>
          Analysing your project...
        </h1>
      </motion.div>

      {/* SVG ring + center */}
      <div className="relative flex items-center justify-center" style={{ width: 140, height: 140 }}>
        <svg width={140} height={140} viewBox="0 0 140 140" style={{ position: 'absolute' }}>
          <circle cx={70} cy={70} r={r} fill="none" stroke="var(--overlay-sm)" strokeWidth={3} />
          <motion.circle
            cx={70} cy={70} r={r}
            fill="none"
            stroke="url(#ringGrad)"
            strokeWidth={4}
            strokeLinecap="round"
            strokeDasharray={circ}
            animate={{ strokeDashoffset: circ * (1 - progress) }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            transform="rotate(-90 70 70)"
            style={{ filter: 'drop-shadow(0 0 10px #3B82F6)' }}
          />
          <defs>
            <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="50%" stopColor="#06B6D4" />
              <stop offset="100%" stopColor="#10B981" />
            </linearGradient>
          </defs>
        </svg>
        {/* Rotating ring */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{ border: '1px dashed rgba(59,130,246,0.2)' }}
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        />
        {/* Center */}
        <div className="relative flex flex-col items-center justify-center" style={{ zIndex: 1 }}>
          <AnimatePresence mode="wait">
            <motion.div key={stageIdx} initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.5, opacity: 0 }} transition={{ duration: 0.3 }}
              style={{ fontSize: 28, lineHeight: 1 }}
            >
              {stages[stageIdx].emoji}
            </motion.div>
          </AnimatePresence>
          <motion.span
            style={{ fontSize: 10, fontFamily: 'var(--font-mono)', color: '#60A5FA', marginTop: 4 }}
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 1.4, repeat: Infinity }}
          >
            {Math.round(progress * 100)}%
          </motion.span>
        </div>
      </div>

      {/* Stage label */}
      <div style={{ height: 52, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <AnimatePresence mode="wait">
          <motion.div key={stageIdx} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
            className="text-center"
          >
            <p style={{ fontSize: 16, fontWeight: 600, color: 'var(--text)' }}>{stages[stageIdx].label}</p>
            <p style={{ fontSize: 11, fontFamily: 'var(--font-mono)', color: 'var(--text-3)', marginTop: 4 }}>
              Powered by Nimble AI · usually under 10 seconds
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Terminal */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        style={{ width: '100%', maxWidth: 420, background: '#070B14', border: '1px solid rgba(59,130,246,0.18)', borderRadius: 12, padding: '16px 20px', fontFamily: 'var(--font-mono)', fontSize: 11 }}
      >
        {lines.map((line, i) => (
          <motion.div key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            style={{ color: line.includes('✓') ? '#10B981' : line.startsWith('$') ? '#60A5FA' : '#475569', marginBottom: 5, lineHeight: 1.5 }}
          >
            {line}
          </motion.div>
        ))}
        {lines.length < terminalLines.length && (
          <motion.span
            style={{ display: 'inline-block', width: 6, height: 12, background: '#10B981', verticalAlign: 'middle' }}
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.7, repeat: Infinity }}
          />
        )}
      </motion.div>
    </div>
  );
}

// ─── Results Screen ───────────────────────────────────────────────────────

function ResultsScreen({
  result, estimationId, leadSaved, setLeadSaved, leadData, setLeadData, isDark,
}: {
  result: IEstimatorResult;
  estimationId: string | null;
  leadSaved: boolean;
  setLeadSaved: (v: boolean) => void;
  leadData: ILeadData;
  setLeadData: (v: ILeadData) => void;
  isDark: boolean;
}) {
  const costLow  = useCountUp(result.cost.low, 1800, 300);
  const costHigh = useCountUp(result.cost.high, 1800, 500);

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!estimationId) return;
    try {
      const res = await fetch('/api/estimate/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ estimation_id: estimationId, ...leadData }),
      });
      if (!res.ok) throw new Error('Failed');
      setLeadSaved(true);
    } catch {
      alert('Failed to save. Please try again.');
    }
  };

  const cardBase: React.CSSProperties = {
    background: 'var(--surface)',
    border: '1px solid var(--border)',
    borderRadius: 16,
    backdropFilter: 'blur(12px)',
    padding: 32,
    marginBottom: 24,
    boxShadow: 'var(--shadow-card)',
  };

  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh', paddingBottom: 80 }}>
      {/* Subtle ambient */}
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
        <div style={{ position: 'absolute', width: 700, height: 700, top: '-20%', left: '-10%', borderRadius: '50%', background: `radial-gradient(circle, rgba(59,130,246,${isDark ? '0.07' : '0.06'}) 0%, transparent 70%)`, filter: 'blur(60px)' }} />
        <div style={{ position: 'absolute', width: 500, height: 500, bottom: '-10%', right: '-5%', borderRadius: '50%', background: `radial-gradient(circle, rgba(16,185,129,${isDark ? '0.06' : '0.05'}) 0%, transparent 70%)`, filter: 'blur(60px)' }} />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1, paddingTop: 120 }}>
        {/* Nav */}
        <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} style={{ marginBottom: 40 }}>
          <Link href="/" className="inline-flex items-center gap-1.5 text-sm transition-colors" style={{ color: 'var(--text-3)' }}>
            <ArrowLeft size={13} /> Back to Home
          </Link>
        </motion.div>

        {/* Hero — Cost + Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          style={{ ...cardBase, background: 'linear-gradient(135deg, rgba(59,130,246,0.08) 0%, rgba(6,182,212,0.06) 50%, rgba(16,185,129,0.06) 100%)', border: '1px solid rgba(59,130,246,0.2)', marginBottom: 24 }}
        >
          {/* Eyebrow */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 24 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'rgba(16,185,129,0.12)', border: '1px solid rgba(16,185,129,0.25)', borderRadius: 999, padding: '4px 12px' }}>
              <motion.span style={{ width: 6, height: 6, borderRadius: '50%', background: '#10B981', display: 'inline-block' }} animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.5, repeat: Infinity }} />
              <span style={{ fontSize: 11, fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#10B981', fontWeight: 700 }}>
                Estimate Ready
              </span>
            </div>
          </div>

          <h1 className="font-display" style={{ fontSize: 'clamp(26px, 4vw, 42px)', fontWeight: 800, color: 'var(--text)', marginBottom: 8, lineHeight: 1.15 }}>
            Your Project Estimate
          </h1>
          <p style={{ fontSize: 16, color: 'var(--text-2)', lineHeight: 1.6, marginBottom: 32, maxWidth: 680 }}>{result.summary}</p>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div style={{ fontSize: 11, fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--text-3)', marginBottom: 10 }}>
                Estimated Investment
              </div>
              <div style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, letterSpacing: '-0.02em', background: 'linear-gradient(135deg, #3B82F6, #06B6D4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', lineHeight: 1 }}>
                {fmtCurrency(costLow)} – {fmtCurrency(costHigh)}
              </div>
              <div style={{ fontSize: 12, color: 'var(--text-3)', marginTop: 8, fontFamily: 'var(--font-mono)' }}>
                USD · Based on Nimble rate card
              </div>
            </div>
            <div>
              <div style={{ fontSize: 11, fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--text-3)', marginBottom: 10 }}>
                Delivery Timeline
              </div>
              <div style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, letterSpacing: '-0.02em', background: 'linear-gradient(135deg, #10B981, #06B6D4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', lineHeight: 1 }}>
                {result.timeline.total_weeks_low}–{result.timeline.total_weeks_high} weeks
              </div>
              <div style={{ fontSize: 12, color: 'var(--text-3)', marginTop: 8, fontFamily: 'var(--font-mono)' }}>
                Including QA, buffer & deployment
              </div>
            </div>
          </div>

          {/* Glowing bottom bar */}
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 1, duration: 1 }}
            style={{ height: 1, marginTop: 32, background: 'linear-gradient(90deg, transparent, rgba(59,130,246,0.5), rgba(6,182,212,0.5), transparent)', transformOrigin: 'left' }}
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          {/* Tech Stack */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} style={cardBase}>
            <h2 style={{ fontSize: 18, fontWeight: 700, color: 'var(--text)', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 8 }}>
              <Package size={18} style={{ color: '#60A5FA' }} /> Recommended Tech Stack
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {Object.entries(result.tech_stack).map(([cat, techs]) => (
                <div key={cat}>
                  <div style={{ fontSize: 10, fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-3)', marginBottom: 8 }}>
                    {cat}
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {techs.map((t) => (
                      <span key={t} style={{ fontSize: 11, fontFamily: 'var(--font-mono)', padding: '3px 9px', borderRadius: 6, background: 'rgba(59,130,246,0.1)', color: '#60A5FA', border: '1px solid rgba(59,130,246,0.2)' }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Team */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} style={cardBase}>
            <h2 style={{ fontSize: 18, fontWeight: 700, color: 'var(--text)', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 8 }}>
              <Users size={18} style={{ color: '#06B6D4' }} /> Your Dedicated Team
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {result.team.map((member, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + i * 0.07 }}
                  style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 14px', borderRadius: 10, background: 'var(--overlay-xs)' }}
                >
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: PHASE_COLORS[i % PHASE_COLORS.length], display: 'grid', placeItems: 'center', fontSize: 12, fontWeight: 700, color: 'white', flexShrink: 0 }}>
                    {member.role.substring(0, 2).toUpperCase()}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--text)' }}>{member.role}</div>
                    <div style={{ fontSize: 11, color: 'var(--text-3)' }}>{member.level}</div>
                  </div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: PHASE_COLORS[i % PHASE_COLORS.length], fontWeight: 700 }}>×{member.count}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Timeline Phases */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} style={cardBase}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: 'var(--text)', marginBottom: 24, display: 'flex', alignItems: 'center', gap: 8 }}>
            <Calendar size={18} style={{ color: '#A855F7' }} /> Project Timeline
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {result.timeline.phases.map((phase, i) => (
              <div key={i}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
                  <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--text)' }}>{phase.name}</span>
                  <span style={{ fontSize: 12, fontFamily: 'var(--font-mono)', color: 'var(--text-3)' }}>{phase.weeks_low}–{phase.weeks_high} wks</span>
                </div>
                <div style={{ height: 6, borderRadius: 999, background: 'var(--overlay-sm)' }}>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ delay: 0.4 + i * 0.12, duration: 0.7, ease: 'easeOut' }}
                    style={{ height: '100%', borderRadius: 999, background: PHASE_COLORS[i], boxShadow: `0 0 8px ${PHASE_COLORS[i]}70` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Cost Breakdown */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} style={cardBase}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: 'var(--text)', marginBottom: 24, display: 'flex', alignItems: 'center', gap: 8 }}>
            <DollarSign size={18} style={{ color: '#10B981' }} /> Cost Breakdown
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {Object.entries(result.cost.breakdown).map(([cat, range], i) => {
              const pct = ((range.high / result.cost.high) * 100).toFixed(0);
              return (
                <div key={cat}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
                    <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--text)', textTransform: 'capitalize' }}>{cat.replace('_', ' ')}</span>
                    <span style={{ fontSize: 12, fontFamily: 'var(--font-mono)', color: 'var(--text-3)' }}>{fmtCurrency(range.low)} – {fmtCurrency(range.high)}</span>
                  </div>
                  <div style={{ height: 6, borderRadius: 999, background: 'var(--overlay-sm)' }}>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${pct}%` }}
                      transition={{ delay: 0.5 + i * 0.1, duration: 0.7, ease: 'easeOut' }}
                      style={{ height: '100%', borderRadius: 999, background: PHASE_COLORS[i], boxShadow: `0 0 8px ${PHASE_COLORS[i]}70` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Feature breakdown */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} style={cardBase}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: 'var(--text)', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 8 }}>
            <Check size={18} style={{ color: '#10B981' }} /> Feature Breakdown
          </h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: `1px solid var(--border)` }}>
                  {['Feature', 'Complexity', 'Est. Hours'].map((h) => (
                    <th key={h} style={{ textAlign: h === 'Est. Hours' ? 'right' : 'left', padding: '8px 12px', fontSize: 10, fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-3)' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {result.features.map((f, i) => {
                  const cColors: Record<string, string> = { low: '#10B981', medium: '#F59E0B', high: '#F43F5E' };
                  return (
                    <motion.tr key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 + i * 0.04 }} style={{ borderBottom: `1px solid var(--border)` }}>
                      <td style={{ padding: '10px 12px', fontSize: 13, color: 'var(--text)' }}>{f.name}</td>
                      <td style={{ padding: '10px 12px' }}>
                        <span style={{ fontSize: 10, fontFamily: 'var(--font-mono)', padding: '2px 8px', borderRadius: 4, background: `${cColors[f.complexity]}18`, color: cColors[f.complexity], border: `1px solid ${cColors[f.complexity]}30`, textTransform: 'uppercase', fontWeight: 700 }}>
                          {f.complexity}
                        </span>
                      </td>
                      <td style={{ padding: '10px 12px', textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-2)' }}>{f.estimated_hours}h</td>
                    </motion.tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Similar project */}
        {result.similar_project && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
            style={{ ...cardBase, background: 'rgba(59,130,246,0.06)', border: '1px solid rgba(59,130,246,0.25)' }}
          >
            <h2 style={{ fontSize: 18, fontWeight: 700, color: 'var(--text)', marginBottom: 12, display: 'flex', alignItems: 'center', gap: 8 }}>
              <TrendingUp size={18} style={{ color: '#60A5FA' }} /> Similar Reference Build
            </h2>
            <p style={{ fontSize: 15, color: 'var(--text-2)', lineHeight: 1.6, marginBottom: 16 }}>
              This project is similar to <strong style={{ color: 'var(--text)' }}>{result.similar_project}</strong>, which we successfully delivered.
            </p>
            {result.similar_project_demo && (
              <a href={`https://${result.similar_project_demo}`} target="_blank" rel="noopener noreferrer"
                className="btn btn-primary" style={{ display: 'inline-flex' }}
              >
                View Live Demo <ExternalLink size={13} />
              </a>
            )}
          </motion.div>
        )}

        {/* Risks */}
        {result.risks?.length > 0 && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }} style={cardBase}>
            <h2 style={{ fontSize: 18, fontWeight: 700, color: 'var(--text)', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
              <AlertCircle size={18} style={{ color: '#F59E0B' }} /> Risks & Considerations
            </h2>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {result.risks.map((r, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 14, color: 'var(--text-2)', lineHeight: 1.6 }}>
                  <span style={{ color: '#F59E0B', flexShrink: 0, marginTop: 2 }}>▸</span> {r}
                </li>
              ))}
            </ul>
          </motion.div>
        )}

        {/* Recommendation */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
          style={{ ...cardBase, background: 'rgba(16,185,129,0.05)', border: '1px solid rgba(16,185,129,0.2)' }}
        >
          <h2 style={{ fontSize: 18, fontWeight: 700, color: 'var(--text)', marginBottom: 12 }}>Our Recommendation</h2>
          <p style={{ fontSize: 15, color: 'var(--text-2)', lineHeight: 1.7 }}>{result.recommendation}</p>
        </motion.div>

        {/* Lead capture */}
        {!leadSaved ? (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }}
            style={{ ...cardBase, background: 'linear-gradient(135deg, rgba(16,185,129,0.08), rgba(6,182,212,0.06))', border: '1px solid rgba(16,185,129,0.25)' }}
          >
            <h2 style={{ fontSize: 20, fontWeight: 700, color: 'var(--text)', marginBottom: 8 }}>Get This Estimate as PDF</h2>
            <p style={{ fontSize: 14, color: 'var(--text-2)', marginBottom: 24 }}>
              Enter your details and we'll send you a detailed PDF estimate along with next steps.
            </p>
            <form onSubmit={handleLeadSubmit}>
              <div className="grid md:grid-cols-2 gap-4" style={{ marginBottom: 16 }}>
                {[
                  { key: 'name', label: 'Full Name *', icon: User, type: 'text', placeholder: 'John Doe', required: true },
                  { key: 'email', label: 'Email Address *', icon: Mail, type: 'email', placeholder: 'john@company.com', required: true },
                  { key: 'company', label: 'Company', icon: Building2, type: 'text', placeholder: 'Acme Corp', required: false },
                  { key: 'phone', label: 'Phone', icon: Phone, type: 'tel', placeholder: '+1 (555) 123-4567', required: false },
                ].map(({ key, label, icon: Icon, type, placeholder, required }) => (
                  <div key={key}>
                    <label style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, fontWeight: 600, color: 'var(--text-2)', marginBottom: 8 }}>
                      <Icon size={13} /> {label}
                    </label>
                    <input
                      type={type}
                      required={required}
                      value={(leadData as unknown as Record<string, string>)[key]}
                      onChange={(e) => setLeadData({ ...leadData, [key]: e.target.value })}
                      placeholder={placeholder}
                      style={{ width: '100%', padding: '10px 14px', borderRadius: 10, background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--text)', fontSize: 14, outline: 'none' }}
                    />
                  </div>
                ))}
              </div>
              <button type="submit" className="btn btn-emerald">
                <CheckCircle size={15} /> Send Me the PDF
              </button>
            </form>
          </motion.div>
        ) : (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
            style={{ ...cardBase, textAlign: 'center', background: 'rgba(16,185,129,0.06)', border: '1px solid rgba(16,185,129,0.25)' }}
          >
            <CheckCircle size={48} style={{ color: '#10B981', margin: '0 auto 16px' }} />
            <h2 style={{ fontSize: 22, fontWeight: 700, color: 'var(--text)', marginBottom: 8 }}>Estimate on its way!</h2>
            <p style={{ fontSize: 14, color: 'var(--text-2)', marginBottom: 24 }}>Check your inbox for the PDF estimate and next steps from our team.</p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn btn-primary"><Calendar size={14} /> Book a Free Call</Link>
              <Link href="/case-studies" className="btn btn-ghost"><TrendingUp size={14} /> View Our Work</Link>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

// ─── Main wizard ──────────────────────────────────────────────────────────

const stepVariants = {
  enter: (dir: number) => ({ opacity: 0, y: dir > 0 ? 32 : -32, filter: 'blur(6px)' }),
  center: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.38, ease: [0.23, 1, 0.32, 1] as [number, number, number, number] } },
  exit: (dir: number) => ({ opacity: 0, y: dir > 0 ? -24 : 24, filter: 'blur(4px)', transition: { duration: 0.25 } }),
};

export default function ProjectEstimatorPage() {
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(1);
  const [status, setStatus] = useState<'idle' | 'loading' | 'result' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<IEstimatorResult | null>(null);
  const [estimationId, setEstimationId] = useState<string | null>(null);
  const [leadSaved, setLeadSaved] = useState(false);

  const [formData, setFormData] = useState<IEstimatorInput>({
    projectType: '', industry: '', features: [],
    designStatus: '', timeline: '', budget: '', description: '', referenceUrl: '',
  });
  const [leadData, setLeadData] = useState<ILeadData>({ name: '', email: '', company: '', phone: '' });

  const theme = STEP_THEMES[Math.min(step, 7) - 1];
  const { theme: appTheme } = useTheme();
  const isDark = appTheme === 'dark';

  const canProceed = useCallback(() => {
    switch (step) {
      case 1: return formData.projectType !== '';
      case 2: return formData.industry !== '';
      case 3: return formData.features.length > 0;
      case 4: return formData.designStatus !== '';
      case 5: return formData.timeline !== '';
      case 6: return formData.budget !== '';
      case 7: return formData.description.length >= 20;
      default: return false;
    }
  }, [step, formData]);

  const goNext = () => {
    if (!canProceed() || step >= 7) return;
    setDirection(1);
    setStep((s) => s + 1);
  };

  const goBack = () => {
    if (step <= 1) return;
    setDirection(-1);
    setStep((s) => s - 1);
  };

  const toggleFeature = (f: string) =>
    setFormData((p) => ({ ...p, features: p.features.includes(f) ? p.features.filter((x) => x !== f) : [...p.features, f] }));

  const generate = async () => {
    setStatus('loading');
    setError(null);
    try {
      const res = await fetch('/api/estimate', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to generate estimation');
      setResult(data.result);
      setEstimationId(data.estimation_id);
      setStatus('result');
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to generate estimation');
      setStatus('error');
    }
  };

  // ── Render branch ───────────────────────────────────────────────────────

  if (status === 'loading') return <LoadingScreen />;

  if (status === 'error') return (
    <div className="min-h-screen flex items-center justify-center p-6" style={{ background: 'var(--bg)' }}>
      <div style={{ textAlign: 'center', maxWidth: 440 }}>
        <AlertCircle size={52} style={{ color: '#F43F5E', margin: '0 auto 16px' }} />
        <h1 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>Something went wrong</h1>
        <p style={{ color: 'var(--text-2)', marginBottom: 24, fontSize: 14 }}>{error}</p>
        <button onClick={() => setStatus('idle')} className="btn btn-primary">Try Again</button>
      </div>
    </div>
  );

  if (status === 'result' && result) return (
    <ResultsScreen result={result} estimationId={estimationId} leadSaved={leadSaved} setLeadSaved={setLeadSaved} leadData={leadData} setLeadData={setLeadData} isDark={isDark} />
  );

  // ── Wizard ──────────────────────────────────────────────────────────────

  return (
    <div className="min-h-screen relative" style={{ background: 'var(--bg)' }}>
      {/* Animated ambient */}
      <motion.div
        className="fixed inset-0 pointer-events-none"
        animate={{
          background: [
            `radial-gradient(ellipse 900px 600px at 15% 30%, rgba(${theme.rgb},0.07), transparent 60%), radial-gradient(ellipse 600px 400px at 85% 70%, rgba(${theme.rgb},0.04), transparent 60%)`,
          ],
        }}
        transition={{ duration: 0.8 }}
        style={{ zIndex: 0 }}
      />
      <AmbientOrbs rgb={theme.rgb} isDark={isDark} />
      <Particles color={theme.primary} />

      {/* Content */}
      <div className="relative" style={{ zIndex: 1 }}>
        {/* Top bar */}
        <div className="container" style={{ paddingTop: 140, paddingBottom: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 40 }}>
            <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, color: 'var(--text-3)', textDecoration: 'none' }}>
              <ArrowLeft size={13} /> Back to Home
            </Link>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <motion.span
                style={{ width: 6, height: 6, borderRadius: '50%', background: theme.primary, display: 'inline-block', boxShadow: `0 0 8px ${theme.primary}` }}
                animate={{ opacity: [1, 0.4, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <span style={{ fontSize: 11, fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--text-3)' }}>
                AI Project Estimator
              </span>
            </div>
          </div>
        </div>

        {/* Step progress */}
        <div className="container" style={{ marginBottom: 48 }}>
          <StepProgress step={step} isDark={isDark} />
        </div>

        {/* Card */}
        <div className="container" style={{ maxWidth: 860, marginLeft: 'auto', marginRight: 'auto', paddingBottom: 120 }}>
          {/* Step number eyebrow */}
          <motion.div
            key={`eyebrow-${step}`}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ textAlign: 'center', marginBottom: 16 }}
          >
            <span style={{ fontSize: 10, fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.18em', color: theme.primary }}>
              Step {step} of 7
            </span>
          </motion.div>

          {/* Glass card */}
          <motion.div
            style={{
              background: isDark ? 'rgba(10,14,26,0.65)' : 'rgba(255,255,255,0.9)',
              border: `1px solid rgba(${theme.rgb},0.18)`,
              borderRadius: 20,
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              overflow: 'hidden',
              boxShadow: isDark
                ? `0 0 0 1px rgba(${theme.rgb},0.06), 0 24px 64px rgba(0,0,0,0.45)`
                : `0 0 0 1px rgba(${theme.rgb},0.1), 0 8px 40px rgba(0,0,0,0.08)`,
            }}
            animate={{
              borderColor: `rgba(${theme.rgb},0.18)`,
              boxShadow: isDark
                ? `0 0 0 1px rgba(${theme.rgb},0.06), 0 24px 64px rgba(0,0,0,0.45)`
                : `0 0 0 1px rgba(${theme.rgb},0.1), 0 8px 40px rgba(0,0,0,0.08)`,
            }}
            transition={{ duration: 0.5 }}
          >
            {/* Top accent bar */}
            <motion.div
              animate={{ background: `linear-gradient(90deg, transparent, ${theme.primary}60, transparent)` }}
              transition={{ duration: 0.5 }}
              style={{ height: 2 }}
            />

            <div style={{ padding: 'clamp(24px, 4vw, 48px)' }}>
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={step}
                  custom={direction}
                  variants={stepVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                >
                  {/* ── Step 1: Project Type ── */}
                  {step === 1 && (
                    <div>
                      <h2 className="font-display" style={{ fontSize: 'clamp(22px, 3.5vw, 34px)', fontWeight: 800, color: 'var(--text)', marginBottom: 8, lineHeight: 1.2 }}>
                        What type of project do you need?
                      </h2>
                      <p style={{ fontSize: 14, color: 'var(--text-2)', marginBottom: 28 }}>Select the category that best describes your project.</p>
                      <div className="grid md:grid-cols-2 gap-3">
                        {PROJECT_TYPES.map(({ label, value, icon: Icon, desc }) => {
                          const selected = formData.projectType === value;
                          return (
                            <GlowCard key={value} selected={selected} rgb={theme.rgb} isDark={isDark} onClick={() => setFormData({ ...formData, projectType: value })}>
                              <div style={{ padding: '16px 18px', display: 'flex', alignItems: 'center', gap: 14 }}>
                                <div style={{ width: 40, height: 40, borderRadius: 10, background: selected ? `rgba(${theme.rgb},0.2)` : 'var(--overlay-sm)', display: 'grid', placeItems: 'center', flexShrink: 0, border: `1px solid ${selected ? `rgba(${theme.rgb},0.3)` : 'var(--border-2)'}` }}>
                                  <Icon size={18} style={{ color: selected ? theme.primary : 'var(--text-3)' }} />
                                </div>
                                <div style={{ flex: 1, textAlign: 'left' }}>
                                  <div style={{ fontSize: 14, fontWeight: 600, color: selected ? 'var(--text)' : 'var(--text-2)' }}>{label}</div>
                                  <div style={{ fontSize: 11, color: 'var(--text-3)', marginTop: 2 }}>{desc}</div>
                                </div>
                                {selected && <Check size={15} style={{ color: theme.primary, flexShrink: 0 }} />}
                              </div>
                            </GlowCard>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* ── Step 2: Industry ── */}
                  {step === 2 && (
                    <div>
                      <h2 className="font-display" style={{ fontSize: 'clamp(22px, 3.5vw, 34px)', fontWeight: 800, color: 'var(--text)', marginBottom: 8, lineHeight: 1.2 }}>
                        Which industry are you in?
                      </h2>
                      <p style={{ fontSize: 14, color: 'var(--text-2)', marginBottom: 28 }}>This helps us tailor the estimate to your domain requirements.</p>
                      <div className="grid md:grid-cols-2 gap-3">
                        {INDUSTRIES.map((ind) => {
                          const selected = formData.industry === ind;
                          return (
                            <GlowCard key={ind} selected={selected} rgb={theme.rgb} isDark={isDark} onClick={() => setFormData({ ...formData, industry: ind })}>
                              <div style={{ padding: '14px 18px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <span style={{ fontSize: 14, fontWeight: 600, color: selected ? 'var(--text)' : 'var(--text-2)' }}>{ind}</span>
                                {selected ? <Check size={15} style={{ color: theme.primary }} /> : <ChevronRight size={14} style={{ color: 'var(--text-3)' }} />}
                              </div>
                            </GlowCard>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* ── Step 3: Features ── */}
                  {step === 3 && (
                    <div>
                      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8, marginBottom: 8 }}>
                        <h2 className="font-display" style={{ fontSize: 'clamp(22px, 3.5vw, 34px)', fontWeight: 800, color: 'var(--text)', lineHeight: 1.2 }}>
                          What features do you need?
                        </h2>
                        <span style={{ fontSize: 12, fontFamily: 'var(--font-mono)', padding: '4px 12px', borderRadius: 999, background: `rgba(${theme.rgb},0.12)`, color: theme.primary, border: `1px solid rgba(${theme.rgb},0.25)`, flexShrink: 0, alignSelf: 'flex-start', marginTop: 4 }}>
                          {formData.features.length} selected
                        </span>
                      </div>
                      <p style={{ fontSize: 14, color: 'var(--text-2)', marginBottom: 28 }}>Select all features that apply. You can choose multiple.</p>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                        {Object.entries(FEATURES_GROUPS).map(([cat, features]) => (
                          <div key={cat}>
                            <div style={{ fontSize: 10, fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.12em', color: theme.primary, marginBottom: 10, display: 'flex', alignItems: 'center', gap: 8 }}>
                              <div style={{ height: 1, width: 16, background: theme.primary, opacity: 0.5 }} /> {cat}
                            </div>
                            <div className="grid md:grid-cols-2 gap-2">
                              {features.map((feat) => {
                                const sel = formData.features.includes(feat);
                                return (
                                  <GlowCard key={feat} selected={sel} rgb={theme.rgb} isDark={isDark} onClick={() => toggleFeature(feat)}>
                                    <div style={{ padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 10 }}>
                                      <div style={{ width: 18, height: 18, borderRadius: 5, border: `1.5px solid ${sel ? theme.primary : 'var(--border-2)'}`, background: sel ? theme.primary : 'transparent', display: 'grid', placeItems: 'center', flexShrink: 0 }}>
                                        {sel && <Check size={10} style={{ color: 'white' }} strokeWidth={3} />}
                                      </div>
                                      <span style={{ fontSize: 13, color: sel ? 'var(--text)' : 'var(--text-2)', fontWeight: sel ? 600 : 400 }}>{feat}</span>
                                    </div>
                                  </GlowCard>
                                );
                              })}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* ── Step 4: Design Status ── */}
                  {step === 4 && (
                    <div>
                      <h2 className="font-display" style={{ fontSize: 'clamp(22px, 3.5vw, 34px)', fontWeight: 800, color: 'var(--text)', marginBottom: 8, lineHeight: 1.2 }}>
                        What&apos;s your design status?
                      </h2>
                      <p style={{ fontSize: 14, color: 'var(--text-2)', marginBottom: 28 }}>Let us know if you have existing designs or need us to create them.</p>
                      <div className="grid md:grid-cols-2 gap-3">
                        {DESIGN_STATUS.map(({ label, desc }) => {
                          const sel = formData.designStatus === label;
                          return (
                            <GlowCard key={label} selected={sel} rgb={theme.rgb} isDark={isDark} onClick={() => setFormData({ ...formData, designStatus: label })}>
                              <div style={{ padding: '18px 20px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6 }}>
                                  <span style={{ fontSize: 14, fontWeight: 700, color: sel ? 'var(--text)' : 'var(--text-2)' }}>{label}</span>
                                  {sel && <Check size={15} style={{ color: theme.primary }} />}
                                </div>
                                <p style={{ fontSize: 12, color: 'var(--text-3)', lineHeight: 1.5 }}>{desc}</p>
                              </div>
                            </GlowCard>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* ── Step 5: Timeline ── */}
                  {step === 5 && (
                    <div>
                      <h2 className="font-display" style={{ fontSize: 'clamp(22px, 3.5vw, 34px)', fontWeight: 800, color: 'var(--text)', marginBottom: 8, lineHeight: 1.2 }}>
                        When do you need this done?
                      </h2>
                      <p style={{ fontSize: 14, color: 'var(--text-2)', marginBottom: 28 }}>Shorter timelines may require a larger team to hit the deadline.</p>
                      <div className="grid md:grid-cols-2 gap-3">
                        {TIMELINES.map(({ label, sub, desc }) => {
                          const sel = formData.timeline === label;
                          return (
                            <GlowCard key={label} selected={sel} rgb={theme.rgb} isDark={isDark} onClick={() => setFormData({ ...formData, timeline: label })}>
                              <div style={{ padding: '18px 20px' }}>
                                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                                  <div>
                                    <div style={{ fontSize: 15, fontWeight: 700, color: sel ? 'var(--text)' : 'var(--text-2)' }}>{label}</div>
                                    <div style={{ fontSize: 11, fontFamily: 'var(--font-mono)', color: theme.primary, marginTop: 3 }}>{sub}</div>
                                  </div>
                                  {sel && <Check size={15} style={{ color: theme.primary }} />}
                                </div>
                                <p style={{ fontSize: 12, color: 'var(--text-3)', marginTop: 8, lineHeight: 1.5 }}>{desc}</p>
                              </div>
                            </GlowCard>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* ── Step 6: Budget ── */}
                  {step === 6 && (
                    <div>
                      <h2 className="font-display" style={{ fontSize: 'clamp(22px, 3.5vw, 34px)', fontWeight: 800, color: 'var(--text)', marginBottom: 8, lineHeight: 1.2 }}>
                        What&apos;s your budget range?
                      </h2>
                      <p style={{ fontSize: 14, color: 'var(--text-2)', marginBottom: 28 }}>This helps us provide a realistic scope aligned with your expectations.</p>
                      <div className="grid md:grid-cols-2 gap-3">
                        {BUDGETS.map(({ label, value, desc }) => {
                          const sel = formData.budget === value;
                          return (
                            <GlowCard key={value} selected={sel} rgb={theme.rgb} isDark={isDark} onClick={() => setFormData({ ...formData, budget: value })}>
                              <div style={{ padding: '18px 20px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6 }}>
                                  <span style={{ fontSize: 15, fontWeight: 700, color: sel ? 'var(--text)' : 'var(--text-2)' }}>{label}</span>
                                  {sel && <Check size={15} style={{ color: theme.primary }} />}
                                </div>
                                <p style={{ fontSize: 12, color: 'var(--text-3)' }}>{desc}</p>
                              </div>
                            </GlowCard>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* ── Step 7: Description ── */}
                  {step === 7 && (
                    <div>
                      <h2 className="font-display" style={{ fontSize: 'clamp(22px, 3.5vw, 34px)', fontWeight: 800, color: 'var(--text)', marginBottom: 8, lineHeight: 1.2 }}>
                        Tell us about your project
                      </h2>
                      <p style={{ fontSize: 14, color: 'var(--text-2)', marginBottom: 28 }}>
                        Describe your vision, goals, and specific requirements. More detail = better estimate.
                      </p>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                        <div>
                          <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'var(--text-2)', marginBottom: 8 }}>
                            Project Description *
                          </label>
                          <textarea
                            value={formData.description}
                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                            rows={6}
                            placeholder="e.g. We need a mobile-first fintech app that lets users send money internationally with real-time exchange rates, transaction history, and multi-currency wallets..."
                            style={{ width: '100%', padding: '14px 16px', borderRadius: 12, background: 'var(--surface)', border: `1px solid ${formData.description.length >= 20 ? `rgba(${theme.rgb},0.35)` : 'var(--border)'}`, color: 'var(--text)', fontSize: 14, outline: 'none', resize: 'none', lineHeight: 1.6, fontFamily: 'inherit', transition: 'border-color 0.2s' }}
                          />
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 8 }}>
                            <span style={{ fontSize: 11, fontFamily: 'var(--font-mono)', color: formData.description.length >= 20 ? '#10B981' : 'var(--text-3)' }}>
                              {formData.description.length >= 20 ? '✓ Minimum met' : `${formData.description.length} / 20 minimum`}
                            </span>
                            <span style={{ fontSize: 11, fontFamily: 'var(--font-mono)', color: 'var(--text-3)' }}>
                              {formData.description.length} chars
                            </span>
                          </div>
                        </div>
                        <div>
                          <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'var(--text-2)', marginBottom: 8 }}>
                            Reference URL <span style={{ color: 'var(--text-3)', fontWeight: 400 }}>(optional)</span>
                          </label>
                          <input
                            type="url"
                            value={formData.referenceUrl}
                            onChange={(e) => setFormData({ ...formData, referenceUrl: e.target.value })}
                            placeholder="https://example-you-like.com"
                            style={{ width: '100%', padding: '12px 16px', borderRadius: 12, background: 'var(--surface)', border: `1px solid var(--border)`, color: 'var(--text)', fontSize: 14, outline: 'none', fontFamily: 'inherit' }}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 24, gap: 16 }}
          >
            <motion.button
              onClick={goBack}
              disabled={step === 1}
              className="btn btn-ghost"
              style={{ opacity: step === 1 ? 0.3 : 1, padding: '10px 20px' }}
              whileHover={step > 1 ? { scale: 1.02 } : {}}
              whileTap={step > 1 ? { scale: 0.97 } : {}}
            >
              <ArrowLeft size={15} /> Back
            </motion.button>

            {/* Step pills */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              {[1,2,3,4,5,6,7].map((s) => (
                <motion.div key={s}
                  animate={{ width: s === step ? 20 : 6, background: s === step ? theme.primary : s < step ? `rgba(${theme.rgb},0.4)` : 'var(--overlay-md)' }}
                  style={{ height: 6, borderRadius: 999 }}
                  transition={{ duration: 0.3 }}
                />
              ))}
            </div>

            {step < 7 ? (
              <motion.button
                onClick={goNext}
                disabled={!canProceed()}
                className="btn"
                style={{
                  padding: '10px 24px',
                  background: canProceed() ? `linear-gradient(135deg, ${theme.primary}, ${theme.primary}CC)` : 'var(--overlay-md)',
                  color: canProceed() ? 'white' : 'var(--text-3)',
                  boxShadow: canProceed() ? `0 4px 16px rgba(${theme.rgb},0.35)` : 'none',
                  border: 'none',
                }}
                whileHover={canProceed() ? { scale: 1.03 } : {}}
                whileTap={canProceed() ? { scale: 0.97 } : {}}
              >
                Next <ArrowRight size={15} />
              </motion.button>
            ) : (
              <motion.button
                onClick={generate}
                disabled={!canProceed()}
                className="btn"
                style={{
                  padding: '11px 24px',
                  background: canProceed() ? 'linear-gradient(135deg, #10B981, #059669)' : 'var(--overlay-md)',
                  color: canProceed() ? 'white' : 'var(--text-3)',
                  boxShadow: canProceed() ? '0 4px 20px rgba(16,185,129,0.4)' : 'none',
                  border: 'none',
                  fontSize: 14,
                }}
                whileHover={canProceed() ? { scale: 1.03 } : {}}
                whileTap={canProceed() ? { scale: 0.97 } : {}}
              >
                <Sparkles size={15} /> Generate My Estimate
              </motion.button>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
