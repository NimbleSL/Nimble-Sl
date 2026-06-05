'use client';

import { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft, ArrowRight, Sparkles, Check, ChevronDown,
  AlertCircle, CheckCircle,
  ExternalLink, Phone, Mail, Building2, User, Zap, Code2, Layers,
  Shield, Globe, Smartphone, Bot, Database, Monitor,
  ServerCog, MapPin, Download, Calendar, BarChart3,
} from 'lucide-react';
import Link from 'next/link';
import { useTheme } from '@/components/providers/ThemeProvider';
import type { IEstimatorResult, IRegion, ILeadData } from '@/lib/types/estimator';

// ─── Step colour themes ──────────────────────────────────────────────────────

const STEP_THEMES = [
  { primary: '#3B82F6', rgb: '59,130,246' },    // 1 type + industry
  { primary: '#10B981', rgb: '16,185,129' },    // 2 features
  { primary: '#F59E0B', rgb: '245,158,11' },    // 3 details
  { primary: '#A855F7', rgb: '168,85,247' },    // 4 notes
  { primary: '#06B6D4', rgb: '6,182,212' },     // 5 get estimate
];

const STEP_LABELS = ['Your Build', 'Features', 'Details', 'Notes', 'Get Estimate'];

// ─── Data ────────────────────────────────────────────────────────────────────

const PROJECT_TYPES = [
  { label: 'Customer-facing Web App',         value: 'Customer-facing Web App',         icon: Globe,      desc: 'Website, web portal, or browser-based product' },
  { label: 'Mobile App (iOS & Android)',       value: 'Mobile App (iOS & Android)',       icon: Smartphone, desc: 'Native or hybrid mobile application' },
  { label: 'Admin / Back-office Portal',       value: 'Admin / Back-office Portal',       icon: Monitor,    desc: 'Internal dashboard to manage users, content, ops' },
  { label: 'SaaS Platform',                   value: 'SaaS Platform',                   icon: Layers,     desc: 'Users sign up, pay monthly, own workspace' },
  { label: 'API / Backend / Microservices',    value: 'API / Backend / Microservices',    icon: ServerCog,  desc: 'The engine behind your product — data & logic' },
  { label: 'AI / ML Product or Feature',       value: 'AI / ML Product or Feature',       icon: Bot,        desc: 'LLMs, ML models, NLP, vision, recommendations' },
  { label: 'Desktop App',                     value: 'Desktop App',                     icon: Database,   desc: 'Windows / Mac / Linux native application' },
  { label: 'Cross-platform App',              value: 'Cross-platform App',              icon: Code2,      desc: 'One codebase: web, iOS & Android (Flutter)' },
  { label: 'Browser Extension / Plugin',      value: 'Browser Extension / Plugin',      icon: Zap,        desc: 'Chrome, Firefox, or Edge extension' },
  { label: 'UI/UX Design & Prototyping Only', value: 'UI/UX Design & Prototyping Only', icon: Shield,     desc: 'Figma designs, design system, no development' },
];

const INDUSTRIES = [
  'FinTech / Payments / Banking',
  'HealthTech / Telemedicine',
  'InsurTech',
  'PropTech / Real Estate',
  'E-commerce / Marketplace',
  'Logistics / Supply Chain / Field Ops',
  'Legal / GovTech / Compliance',
  'HR / Recruitment / Workforce',
  'EdTech / Learning',
  'SaaS / Developer Tools',
  'Media / Entertainment / Social',
  'Other',
];

function getFeatureGroups(selectedTypes: string[]): Record<string, string[]> {
  const groups: Record<string, string[]> = {
    'Core Features': [
      'User authentication & access control',
      'Dashboard & analytics',
      'Search & filtering',
      'File upload & document management',
      'Real-time notifications',
      'Third-party integrations',
      'Multi-language / localization',
      'Reporting & data export',
    ],
  };
  if (selectedTypes.includes('SaaS Platform')) {
    groups['SaaS-Specific'] = [
      'Multi-tenant architecture',
      'Subscription billing & plan management',
      'Usage limits & metering',
      'Self-service onboarding',
      'Tenant-level customization / white-labeling',
    ];
  }
  if (selectedTypes.includes('Mobile App (iOS & Android)') || selectedTypes.includes('Cross-platform App')) {
    groups['Mobile Features'] = [
      'Offline mode & data sync',
      'Camera / barcode / QR scanning',
      'GPS & location services',
      'Biometric login (Face ID / fingerprint)',
      'Push notifications',
    ];
  }
  if (selectedTypes.includes('AI / ML Product or Feature')) {
    groups['AI & Intelligence'] = [
      'AI-powered search or recommendations',
      'Chatbot / conversational AI',
      'Document analysis & OCR',
      'Custom ML model / predictions',
      'Fraud detection or anomaly detection',
    ];
  }
  if (selectedTypes.includes('Admin / Back-office Portal')) {
    groups['Admin & Operations'] = [
      'Content management (CMS)',
      'User & account management',
      'Audit logs & activity tracking',
      'Bulk data import / export',
      'Workflow & approval chains',
    ];
  }
  if (selectedTypes.includes('API / Backend / Microservices')) {
    groups['API & Infrastructure'] = [
      'REST or GraphQL API',
      'Webhook support',
      'Rate limiting & API key management',
      'Message queues & async processing',
      'Data migration from legacy systems',
    ];
  }
  return groups;
}

const DESIGN_STATUS = [
  { label: 'Yes — Figma designs ready',        desc: 'Pixel-perfect designs ready to build from' },
  { label: 'Partial — wireframes / mockups',   desc: 'Some designs exist, we\'ll refine them' },
  { label: 'No — start from scratch',          desc: 'We handle research, UX, and visual design' },
];

const TIMELINES = [
  { label: 'Urgent',       sub: '8–12 weeks',    desc: 'Larger team, tight sprint delivery' },
  { label: '3–4 Months',   sub: 'Standard',      desc: 'Balanced pace & quality' },
  { label: '5–6 Months',   sub: 'Thorough',      desc: 'Room for polish & iteration' },
  { label: 'Flexible',     sub: '6+ months',     desc: 'Phased delivery, minimal rush' },
  { label: 'Not sure yet', sub: 'Help me decide', desc: "We'll recommend the right timeline" },
];

const SCALE_OPTIONS = [
  { label: 'Under 100 users',       value: 'Under 100',    desc: 'Internal tool, pilot, or early prototype' },
  { label: '100 – 1,000 users',     value: '100–1,000',    desc: 'Small team or early-stage product' },
  { label: '1,000 – 10,000 users',  value: '1,000–10,000', desc: 'Growing product with real traction' },
  { label: '10,000+ users',         value: '10,000+',      desc: 'Requires serious infrastructure planning' },
];

const INTEGRATION_OPTIONS = [
  { label: 'No — starting fresh',           value: 'None',        desc: 'Clean slate, no existing systems' },
  { label: 'Yes — 1 or 2 systems',          value: '1–2 systems', desc: 'e.g. Stripe, Salesforce, a CRM' },
  { label: 'Yes — 3+ systems or legacy',    value: '3+ systems',  desc: 'Complex landscape or legacy API' },
];

// ─── Region detection helpers ────────────────────────────────────────────────

const LOCAL_COUNTRIES = new Set(['BD', 'IN', 'PK', 'LK', 'NP', 'MM', 'KH', 'VN', 'PH', 'ID']);
const INTL_COUNTRIES = new Set(['US', 'CA', 'GB', 'AU', 'NZ', 'DE', 'FR', 'IT', 'ES', 'NL', 'SE', 'NO', 'DK', 'FI', 'CH', 'AT', 'BE', 'IE', 'SG', 'JP', 'KR', 'IL', 'HK', 'TW']);

function detectRegion(countryCode: string): IRegion {
  if (LOCAL_COUNTRIES.has(countryCode)) return 'local';
  if (INTL_COUNTRIES.has(countryCode)) return 'international';
  return 'midtier';
}

const REGION_LABELS: Record<IRegion, string> = {
  local: 'Local rates (BD/IN/PK)',
  midtier: 'Regional rates (AE/MY/BR)',
  international: 'International rates (US/UK/EU)',
};

// ─── Live estimate helpers ────────────────────────────────────────────────────

const BASE_COSTS_LOCAL: Record<string, [number, number]> = {
  'Customer-facing Web App':          [4000, 7000],
  'Mobile App (iOS & Android)':       [5000, 8000],
  'Admin / Back-office Portal':       [3000, 5000],
  'SaaS Platform':                    [8000, 15000],
  'API / Backend / Microservices':    [3000, 6000],
  'AI / ML Product or Feature':       [6000, 12000],
  'Desktop App':                      [5000, 9000],
  'Cross-platform App':               [6000, 10000],
  'Browser Extension / Plugin':       [2000, 4000],
  'UI/UX Design & Prototyping Only':  [2000, 4000],
};

const REGION_MULTIPLIERS: Record<IRegion, number> = {
  local: 1,
  midtier: 1.8,
  international: 2.5,
};

const SCALE_MULTIPLIERS: Record<string, number> = {
  'Under 100': 1.0,
  '100–1,000': 1.0,
  '1,000–10,000': 1.1,
  '10,000+': 1.2,
};

function computeLiveEstimate(projectTypes: string[], scale: string, region: IRegion): { low: number; high: number } | null {
  if (projectTypes.length === 0) return null;
  let low = 0;
  let high = 0;
  for (const t of projectTypes) {
    const [lo, hi] = BASE_COSTS_LOCAL[t] ?? [3000, 6000];
    low += lo;
    high += hi;
  }
  if (projectTypes.length >= 2) {
    low = Math.round(low * 0.82);
    high = Math.round(high * 0.82);
  }
  const scaleM = SCALE_MULTIPLIERS[scale] ?? 1.0;
  const regionM = REGION_MULTIPLIERS[region];
  low = Math.round(low * scaleM * regionM / 500) * 500;
  high = Math.round(high * scaleM * regionM / 500) * 500;
  return { low, high };
}

// ─── Format helpers ───────────────────────────────────────────────────────────

function fmtUSD(v: number): string {
  return '$' + v.toLocaleString('en-US');
}

// ─── PDF generator ────────────────────────────────────────────────────────────

async function generatePDF(
  result: IEstimatorResult,
  lead: ILeadData,
  projectTypes: string[],
  industry: string
): Promise<void> {
  const { default: jsPDF } = await import('jspdf');

  // ── Document setup ──────────────────────────────────────────────────────────
  const doc = new jsPDF({ unit: 'mm', format: 'a4' });
  const PW = 210;
  const PH = 297;
  const M  = 20;          // margin
  const CW = PW - 2 * M;  // content width = 170mm

  // ── Brand colors ────────────────────────────────────────────────────────────
  const NAVY   = [15,  23,  42]  as [number, number, number];
  const BLUE   = [59,  130, 246] as [number, number, number];
  const BLUE_D = [30,  64,  175] as [number, number, number];
  const LG     = [241, 245, 249] as [number, number, number];
  const LG_B   = [226, 232, 240] as [number, number, number];
  const WHITE  = [255, 255, 255] as [number, number, number];
  const BODY   = [55,  65,  81]  as [number, number, number];
  const MUTED  = [107, 114, 128] as [number, number, number];
  const GREEN  = [22,  163, 74]  as [number, number, number];
  const AMBER  = [217, 119, 6]   as [number, number, number];

  const estDate    = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
  const estId      = `EST-${new Date().toISOString().slice(0, 10).replace(/-/g, '')}`;
  const clientName = (lead.name || 'Valued Client').trim();

  // ── Low-level drawing helpers ────────────────────────────────────────────────
  const F = (c: [number, number, number]) => doc.setFillColor(c[0], c[1], c[2]);
  const D = (c: [number, number, number]) => doc.setDrawColor(c[0], c[1], c[2]);
  const T = (c: [number, number, number]) => doc.setTextColor(c[0], c[1], c[2]);
  const bd  = (sz: number) => { doc.setFont('helvetica', 'bold');   doc.setFontSize(sz); };
  const nm  = (sz: number) => { doc.setFont('helvetica', 'normal'); doc.setFontSize(sz); };
  const itl = (sz: number) => { doc.setFont('helvetica', 'italic'); doc.setFontSize(sz); };

  function hl(y: number, x1 = M, x2 = PW - M, col: [number, number, number] = LG_B, lw = 0.3) {
    doc.setLineWidth(lw); D(col); doc.line(x1, y, x2, y);
  }
  function f(n: number) { return '$' + n.toLocaleString('en-US'); }

  // ── Programmatic logo (no image) ─────────────────────────────────────────────
  // Draws "N" monogram box + "imble SOFTWARE LAB" wordmark
  function drawLogo(x: number, y: number, boxSize = 11, textColor: [number,number,number] = WHITE) {
    // Blue rounded box
    F(BLUE);
    doc.roundedRect(x, y, boxSize, boxSize, 1.2, 1.2, 'F');
    // "N" letter inside
    T(WHITE);
    bd(Math.round(boxSize * 1.1));
    doc.text('N', x + boxSize * 0.18, y + boxSize * 0.82);
    // Wordmark
    T(textColor);
    bd(Math.round(boxSize * 1.35));
    doc.text('imble', x + boxSize + 2.5, y + boxSize * 0.78);
    // Tagline
    T(textColor === WHITE ? [147, 197, 253] as [number, number, number] : MUTED);
    nm(Math.round(boxSize * 0.58));
    doc.text('SOFTWARE LAB', x + boxSize + 2.5, y + boxSize + 1);
  }

  // ── Repeating header bar for pages 2+ ────────────────────────────────────────
  function repeatHeader() {
    F(NAVY);
    doc.rect(0, 0, PW, 12, 'F');
    drawLogo(M, 0.7, 9.5);
    T([147, 197, 253]);
    nm(8);
    doc.text(`Project Estimate for ${clientName}`, M + 26, 8);
    T(MUTED);
    nm(7.5);
    doc.text(estId, PW - M, 8, { align: 'right' });
  }

  // ── Shared page footer (line + contact) ──────────────────────────────────────
  function repeatFooter(pgNum: number, pgTotal: number) {
    hl(PH - 9, M, PW - M);
    T(MUTED); nm(7);
    doc.text('Nimble Software Lab · nimblesl.com · info@nimblesl.com · +880 017 9610 9979', M, PH - 5);
    doc.text(`Page ${pgNum} / ${pgTotal}`, PW - M, PH - 5, { align: 'right' });
  }

  // ── Section title with blue underline accent ─────────────────────────────────
  function sTitle(label: string, y: number): number {
    T(NAVY); bd(12);
    doc.text(label, M, y);
    F(BLUE);
    doc.rect(M, y + 1.2, doc.getTextWidth(label), 0.8, 'F');
    return y + 9;
  }

  // ── Checked bullet ───────────────────────────────────────────────────────────
  function checkBullet(x: number, y: number, col: [number, number, number]) {
    F(col);
    doc.roundedRect(x, y, 4.5, 4.5, 0.8, 0.8, 'F');
    T(WHITE); bd(6);
    doc.text('✓', x + 0.7, y + 3.7);
  }

  // ── Dot bullet ───────────────────────────────────────────────────────────────
  function dotBullet(x: number, y: number, col: [number, number, number]) {
    F(col); doc.circle(x, y, 1.2, 'F');
  }

  // ══════════════════════════════════════════════════════════════════
  // PAGE 1 — COVER
  // ══════════════════════════════════════════════════════════════════
  const NAVY_H = 118;  // navy header zone height in mm

  // Navy background
  F(NAVY);
  doc.rect(0, 0, PW, NAVY_H, 'F');

  // Logo (larger on cover)
  drawLogo(M, 16, 14);

  // Separator line
  hl(38, M, PW - M, BLUE, 0.7);

  // "PROJECT ESTIMATE" large title
  T(WHITE); bd(26);
  doc.text('PROJECT ESTIMATE', PW / 2, 54, { align: 'center' });

  // "Prepared exclusively for"
  T([147, 197, 253]); nm(10);
  doc.text('Prepared exclusively for', PW / 2, 66, { align: 'center' });

  // Client name
  T(WHITE); bd(22);
  const clientDisplay = clientName.length > 30 ? clientName.slice(0, 30) + '…' : clientName;
  doc.text(clientDisplay, PW / 2, 79, { align: 'center' });

  let covY = 91;
  if (lead.company) {
    T([203, 213, 225]); nm(11);
    doc.text(lead.company, PW / 2, covY, { align: 'center' });
    covY += 9;
  }
  if (lead.email) {
    T([148, 163, 184]); nm(9);
    doc.text(lead.email, PW / 2, covY, { align: 'center' });
  }

  // ─ White zone ─
  let y = NAVY_H + 10;

  // Date / ID / validity
  T(MUTED); nm(8.5);
  doc.text(`Date: ${estDate}`, M, y);
  doc.text(`Estimate ID: ${estId}`, M + 68, y);
  doc.text('Valid for: 30 days', M + 138, y);
  y += 12;

  // PROJECT OVERVIEW box
  F(LG);
  doc.roundedRect(M, y, CW, 40, 3, 3, 'F');
  D(LG_B); doc.setLineWidth(0.3);
  doc.roundedRect(M, y, CW, 40, 3, 3, 'S');
  F(BLUE); doc.rect(M, y, 3, 40, 'F');  // left accent bar

  T(NAVY); bd(9.5);
  doc.text('PROJECT OVERVIEW', M + 7, y + 8);

  const ovItems: [string, string][] = [
    ['Deliverable(s)', projectTypes.length > 2
      ? projectTypes.slice(0, 2).join(', ') + ` +${projectTypes.length - 2} more`
      : projectTypes.join(', ')],
    ['Industry',   industry],
    ['Timeline',   result.suggestedTimeline],
    ['Team size',  result.teamSize],
  ];
  const ovCW = (CW - 10) / 2;
  ovItems.forEach(([lbl, val], i) => {
    const ox = M + 7 + (i % 2) * (ovCW + 5);
    const oy = y + 16 + Math.floor(i / 2) * 12;
    T(MUTED); nm(7.5); doc.text(lbl + ':', ox, oy);
    T(BODY);  bd(8.5); doc.text(doc.splitTextToSize(val, ovCW - 30)[0] as string, ox + 26, oy);
  });
  y += 50;

  // ESTIMATED INVESTMENT box (solid blue)
  F(BLUE);
  doc.roundedRect(M, y, CW, 52, 4, 4, 'F');

  T([219, 234, 254]); nm(8);
  doc.text('ESTIMATED INVESTMENT', PW / 2, y + 11, { align: 'center' });

  T(WHITE); bd(28);
  doc.text(`${f(result.totalCost.low)} — ${f(result.totalCost.high)} USD`, PW / 2, y + 30, { align: 'center' });

  T([219, 234, 254]); nm(8);
  doc.text(`AI planning estimate  ·  ±15–25% on final scope  ·  ${result.suggestedTimeline}`, PW / 2, y + 41, { align: 'center' });

  T([191, 219, 254]); nm(7.5);
  doc.text('Not a final quote — a discovery call is needed to finalize scope.', PW / 2, y + 49, { align: 'center' });
  y += 62;

  // Bottom footer (cover-specific)
  hl(PH - 20, M, PW - M);
  T(NAVY);   bd(9);   doc.text('Nimble Software Lab', M, PH - 14.5);
  T(MUTED);  nm(7.5); doc.text('nimblesl.com  ·  info@nimblesl.com  ·  +880 017 9610 9979', M, PH - 10);
  nm(7); doc.text('House 1, Road 34, Gulshan-2, Dhaka-1219, Bangladesh', M, PH - 6);
  doc.text('Page 1 / 4', PW - M, PH - 10, { align: 'right' });

  // ══════════════════════════════════════════════════════════════════
  // PAGE 2 — DETAILED COST BREAKDOWN
  // ══════════════════════════════════════════════════════════════════
  doc.addPage();
  repeatHeader();

  let p2y = 18;
  p2y = sTitle('DETAILED COST BREAKDOWN', p2y) + 2;

  if (result.modules && result.modules.length > 0) {
    // Table header row
    F(NAVY);
    doc.rect(M, p2y, CW, 8, 'F');
    T(WHITE); bd(8);
    doc.text('MODULE', M + 3, p2y + 5.5);
    doc.text('EFFORT', M + 104, p2y + 5.5, { align: 'center' });
    doc.text('COST RANGE', PW - M - 3, p2y + 5.5, { align: 'right' });
    p2y += 8;

    result.modules.forEach((mod, i) => {
      const descWrapped = doc.splitTextToSize(mod.description, CW - 12);
      const rowH = 10 + descWrapped.length * 4.5 + 3;

      // Page overflow guard
      if (p2y + rowH > PH - 22) {
        repeatFooter(2, 4);
        doc.addPage(); repeatHeader();
        p2y = 18;
        F(NAVY); doc.rect(M, p2y, CW, 8, 'F');
        T(WHITE); bd(8);
        doc.text('MODULE', M + 3, p2y + 5.5);
        doc.text('EFFORT', M + 104, p2y + 5.5, { align: 'center' });
        doc.text('COST RANGE', PW - M - 3, p2y + 5.5, { align: 'right' });
        p2y += 8;
      }

      F(i % 2 === 0 ? WHITE : LG);
      doc.rect(M, p2y, CW, rowH, 'F');
      D(LG_B); doc.setLineWidth(0.2);
      doc.rect(M, p2y, CW, rowH, 'S');

      // Module name
      T(NAVY); bd(9);
      doc.text(mod.name, M + 3, p2y + 7);

      // Complexity badge (small colored text)
      const cCfg = mod.complexity === 'high'
        ? { c: [220, 38, 38] as [number,number,number], l: 'High' }
        : mod.complexity === 'low'
          ? { c: GREEN, l: 'Low' }
          : { c: AMBER, l: 'Medium' };
      T(cCfg.c); nm(7);
      doc.text(`● ${cCfg.l}`, M + 3, p2y + 13);

      // Effort
      T(BODY); nm(8.5);
      doc.text(`${mod.mandays.low}–${mod.mandays.high} days`, M + 85, p2y + 7);

      // Cost range
      T(BLUE_D); bd(9);
      doc.text(`${f(mod.costRange.low)} – ${f(mod.costRange.high)}`, PW - M - 3, p2y + 7, { align: 'right' });

      // Description lines
      T(MUTED); nm(8);
      descWrapped.forEach((line: string, li: number) => {
        doc.text(line, M + 5, p2y + 15 + li * 4.5);
      });

      p2y += rowH;
    });

    // Total row
    if (p2y + 10 > PH - 22) {
      repeatFooter(2, 4); doc.addPage(); repeatHeader(); p2y = 18;
    }
    F(NAVY);
    doc.rect(M, p2y, CW, 10, 'F');
    T(WHITE); bd(9);
    doc.text('TOTAL ESTIMATE', M + 3, p2y + 7);
    const tL = result.modules.reduce((s, m) => s + m.costRange.low,  0);
    const tH = result.modules.reduce((s, m) => s + m.costRange.high, 0);
    doc.text(`${result.totalMandays.low}–${result.totalMandays.high} mandays`, M + 85, p2y + 7);
    doc.text(`${f(tL)} — ${f(tH)} USD`, PW - M - 3, p2y + 7, { align: 'right' });
    p2y += 14;

    // Scope note
    if (result.scope && p2y + 22 < PH - 22) {
      const scopeLines = doc.splitTextToSize(result.scope, CW - 10);
      const sH = Math.min(scopeLines.length, 3) * 4.5 + 8;
      F(LG);
      doc.roundedRect(M, p2y, CW, sH, 2, 2, 'F');
      T(MUTED); nm(8);
      const displayLines = scopeLines.slice(0, 3) as string[];
      displayLines.forEach((ln: string, li: number) => {
        doc.text(ln, M + 5, p2y + 6 + li * 4.5);
      });
    }
  }

  repeatFooter(2, 4);

  // ══════════════════════════════════════════════════════════════════
  // PAGE 3 — PHASED DELIVERY + TECH STACK + TEAM
  // ══════════════════════════════════════════════════════════════════
  doc.addPage();
  repeatHeader();

  let p3y = 18;
  p3y = sTitle('PHASED DELIVERY', p3y) + 2;

  const phaseAccents: [number, number, number][] = [
    [59, 130, 246],
    [99, 102, 241],
    [16, 185, 129],
    [245, 158, 11],
    [239, 68, 68],
  ];

  result.phases.forEach((phase, i) => {
    if (p3y + 24 > PH - 95) return;
    const accent = phaseAccents[i % phaseAccents.length];
    F(LG);
    doc.roundedRect(M, p3y, CW, 22, 2, 2, 'F');
    F(accent); doc.rect(M, p3y, 2.5, 22, 'F');

    T(NAVY); bd(9.5);
    doc.text(phase.name, M + 7, p3y + 7);
    T(BLUE_D); bd(9);
    doc.text(`${f(phase.costRange.low)} – ${f(phase.costRange.high)}`, PW - M - 3, p3y + 7, { align: 'right' });

    T(MUTED); nm(8);
    doc.text(`${phase.timeline}   ·   ${phase.mandaysPercent}% of total effort`, M + 7, p3y + 14);

    const mods = (phase.modules || []).slice(0, 5).join('  ·  ');
    if (mods) {
      T(BODY); nm(7.5);
      doc.text(doc.splitTextToSize(mods, CW - 12)[0] as string, M + 7, p3y + 20);
    }

    p3y += 25;
  });
  p3y += 4;

  // Tech stack
  hl(p3y, M, PW - M); p3y += 8;
  p3y = sTitle('RECOMMENDED TECH STACK', p3y) + 2;

  const stackEntries = Object.entries(result.tech_stack)
    .filter(([, v]) => Array.isArray(v) && (v as string[]).length > 0);

  stackEntries.forEach(([cat, techs], i) => {
    if (p3y + 8 > PH - 75) return;
    F(i % 2 === 1 ? LG : WHITE);
    doc.rect(M, p3y, CW, 8, 'F');
    D(LG_B); doc.setLineWidth(0.2); doc.rect(M, p3y, CW, 8, 'S');

    T(MUTED); bd(8);
    doc.text(cat.charAt(0).toUpperCase() + cat.slice(1), M + 3, p3y + 5.5);

    F(BLUE); doc.rect(M + 32, p3y + 1.5, 0.5, 5, 'F');

    T(BODY); nm(8.5);
    doc.text((techs as string[]).join('  ·  '), M + 36, p3y + 5.5);
    p3y += 8;
  });
  p3y += 8;

  // Team composition
  if (p3y + 45 < PH - 15) {
    hl(p3y, M, PW - M); p3y += 8;
    p3y = sTitle('RECOMMENDED TEAM', p3y) + 2;

    const teamItems = [
      '1×  Tech Lead / Architect',
      '2×  Full-stack Developers',
      '1×  UI/UX Designer',
      '1×  QA Engineer',
      '1×  Project Manager (shared)',
    ];
    teamItems.forEach((member) => {
      if (p3y + 7 > PH - 18) return;
      dotBullet(M + 2.5, p3y + 4, BLUE);
      T(BODY); nm(9); doc.text(member, M + 7, p3y + 6);
      p3y += 8;
    });
    p3y += 3;
    if (p3y + 9 < PH - 15) {
      F(LG); doc.roundedRect(M, p3y, CW, 9, 2, 2, 'F');
      T(NAVY); bd(9); doc.text(`Total: ${result.teamSize}`, M + 5, p3y + 6.5);
    }
  }

  repeatFooter(3, 4);

  // ══════════════════════════════════════════════════════════════════
  // PAGE 4 — WHAT'S INCLUDED + RISKS + RECS + NEXT STEPS
  // ══════════════════════════════════════════════════════════════════
  doc.addPage();
  repeatHeader();

  let p4y = 18;
  p4y = sTitle("WHAT'S INCLUDED", p4y) + 2;

  const included = [
    'Complete source code ownership',
    'Technical documentation',
    '30–90 days post-launch support',
    'Deployment to your infrastructure',
    'Weekly progress reports',
    'Dedicated project manager',
    'Code review & quality assurance',
    'Performance testing & optimization',
  ];

  // Two-column checklist
  const iCW = (CW - 4) / 2;
  included.forEach((item, i) => {
    const ix = M + (i % 2) * (iCW + 4);
    const iy = p4y + Math.floor(i / 2) * 8;
    if (iy + 7 < PH - 95) {
      checkBullet(ix, iy + 2, GREEN);
      T(BODY); nm(8.5); doc.text(item, ix + 6.5, iy + 5.5);
    }
  });
  p4y += Math.ceil(included.length / 2) * 8 + 5;

  // Risk factors
  if (result.riskFactors && result.riskFactors.length > 0 && p4y < PH - 100) {
    hl(p4y, M, PW - M); p4y += 8;
    p4y = sTitle('ASSUMPTIONS & RISK FACTORS', p4y) + 2;
    result.riskFactors.forEach((r: string) => {
      const lines = doc.splitTextToSize(r, CW - 9);
      const rh = lines.length * 4.5 + 7;
      if (p4y + rh > PH - 95) return;
      F([255, 251, 235]); doc.roundedRect(M, p4y, CW, rh, 2, 2, 'F');
      D([253, 230, 138]); doc.setLineWidth(0.3); doc.roundedRect(M, p4y, CW, rh, 2, 2, 'S');
      dotBullet(M + 3, p4y + rh / 2, AMBER);
      T(BODY); nm(8);
      lines.forEach((ln: string, li: number) => doc.text(ln, M + 7, p4y + 6 + li * 4.5));
      p4y += rh + 4;
    });
    p4y += 2;
  }

  // Recommendations
  if (result.recommendations && result.recommendations.length > 0 && p4y < PH - 100) {
    hl(p4y, M, PW - M); p4y += 8;
    p4y = sTitle('AI RECOMMENDATIONS', p4y) + 2;
    result.recommendations.forEach((r: string) => {
      const lines = doc.splitTextToSize(r, CW - 9);
      const rh = lines.length * 4.5 + 7;
      if (p4y + rh > PH - 95) return;
      F([240, 249, 255]); doc.roundedRect(M, p4y, CW, rh, 2, 2, 'F');
      D([191, 219, 254]); doc.setLineWidth(0.3); doc.roundedRect(M, p4y, CW, rh, 2, 2, 'S');
      dotBullet(M + 3, p4y + rh / 2, BLUE);
      T(BODY); nm(8);
      lines.forEach((ln: string, li: number) => doc.text(ln, M + 7, p4y + 6 + li * 4.5));
      p4y += rh + 4;
    });
  }

  // ── NEXT STEPS box ──────────────────────────────────────────────────────────
  const nsY = PH - 92;
  D(BLUE); doc.setLineWidth(0.6);
  doc.roundedRect(M, nsY, CW, 44, 3, 3, 'S');

  T(NAVY); bd(11);
  doc.text('NEXT STEPS', M + 5, nsY + 8);
  F(BLUE); doc.rect(M + 5, nsY + 9.5, doc.getTextWidth('NEXT STEPS'), 0.7, 'F');

  const steps = [
    '1.  Review this estimate',
    '2.  Book a free 30-minute discovery call',
    '3.  We refine scope & deliver a binding proposal',
    '4.  Development kicks off with your dedicated team',
  ];
  steps.forEach((s, i) => {
    T(BODY); nm(8.5); doc.text(s, M + 5, nsY + 16 + i * 7);
  });

  T(BLUE); bd(8.5);
  doc.text(
    'nimblesl.com/contact   ·   info@nimblesl.com   ·   +880 017 9610 9979',
    M + 5, nsY + 40
  );

  // ── Dark navy footer block ──────────────────────────────────────────────────
  const dfY = PH - 42;
  F(NAVY);
  doc.rect(0, dfY, PW, 42, 'F');

  T(WHITE);      bd(9);   doc.text('Nimble Software Lab', M, dfY + 8);
  T([147, 197, 253]); nm(7.5); doc.text('House 1, Road 34, Gulshan-2, Dhaka-1219, Bangladesh  ·  nimblesl.com  ·  info@nimblesl.com', M, dfY + 15);
  T([156, 163, 175]); itl(7);
  const disc = doc.splitTextToSize(
    'This estimate is valid for 30 days. It is not a final quote — a discovery call is required to confirm scope and pricing.',
    CW
  );
  disc.forEach((ln: string, li: number) => doc.text(ln, M, dfY + 22 + li * 5));
  T([156, 163, 175]); nm(7);
  doc.text('© 2026 Nimble Software Lab. All rights reserved.', M, dfY + 35);
  T([147, 197, 253]); nm(7.5);
  doc.text('Page 4 / 4', PW - M, dfY + 8, { align: 'right' });

  // ── Save ────────────────────────────────────────────────────────────────────
  const safeName = clientName.replace(/[^a-zA-Z0-9]/g, '-').slice(0, 30);
  doc.save(`NimbleSL-Estimate-${safeName}-${estId}.pdf`);
}

// ─── LoadingScreen ───────────────────────────────────────────────────────────

const LOADING_LINES = [
  'Analyzing your project requirements…',
  'Identifying modules and dependencies…',
  'Computing effort estimates per module…',
  'Applying team composition…',
  'Calibrating against reference projects…',
  'Calculating investment range…',
  '✓ Estimate ready',
];

function LoadingScreen({ theme }: { theme: { primary: string; rgb: string } }) {
  const [lines, setLines] = useState<string[]>([]);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (idx >= LOADING_LINES.length) return;
    const t = setTimeout(() => {
      setLines((prev) => [...prev, LOADING_LINES[idx]]);
      setIdx((i) => i + 1);
    }, 600 + idx * 350);
    return () => clearTimeout(t);
  }, [idx]);

  return (
    <motion.div
      key="loading"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center justify-center min-h-[60vh] py-20"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        className="w-14 h-14 rounded-full border-4 border-transparent mb-10"
        style={{ borderTopColor: theme.primary, borderRightColor: `rgba(${theme.rgb},0.3)` }}
      />
      <div className="space-y-3 w-full max-w-sm">
        {lines.filter(Boolean).map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-3 text-sm"
            style={{ color: line.includes('✓') ? theme.primary : undefined }}
          >
            {line.includes('✓')
              ? <CheckCircle size={16} style={{ color: theme.primary }} />
              : <motion.div animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.2, repeat: Infinity }} className="w-4 h-4 rounded-full flex-shrink-0" style={{ background: `rgba(${theme.rgb},0.4)` }} />
            }
            <span className="font-medium">{line}</span>
          </motion.div>
        ))}
      </div>
      <p className="mt-10 text-sm opacity-50">This usually takes 8–15 seconds…</p>
    </motion.div>
  );
}

// ─── ResultsScreen ───────────────────────────────────────────────────────────

const PHASE_COLORS = ['#3B82F6', '#10B981', '#A855F7', '#F59E0B', '#06B6D4'];
const COMPLEXITY_CONFIG = {
  high:   { dot: '#EF4444', label: 'High',   text: 'text-red-500',   bg: 'bg-red-50 dark:bg-red-900/20' },
  medium: { dot: '#F59E0B', label: 'Medium', text: 'text-amber-500', bg: 'bg-amber-50 dark:bg-amber-900/20' },
  low:    { dot: '#10B981', label: 'Low',    text: 'text-emerald-500', bg: 'bg-emerald-50 dark:bg-emerald-900/20' },
};

function SectionHeader({ label, color = '#3B82F6' }: { label: string; color?: string }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="w-1 h-5 rounded-full flex-shrink-0" style={{ background: color }} />
      <span className="text-xs font-bold uppercase tracking-widest text-slate-400">{label}</span>
    </div>
  );
}

function ResultsScreen({
  result, lead, projectTypes, industry, region,
}: {
  result: IEstimatorResult;
  lead: ILeadData;
  projectTypes: string[];
  industry: string;
  region: IRegion;
}) {
  const { theme: appTheme } = useTheme();
  const dark = appTheme === 'dark';
  const [tab, setTab] = useState<'full' | 'phased'>('full');
  const [expandedModule, setExpandedModule] = useState<number | null>(null);
  const [pdfLoading, setPdfLoading] = useState(false);

  const handlePDF = async () => {
    setPdfLoading(true);
    try {
      await generatePDF(result, lead, projectTypes, industry);
    } catch (e) {
      console.error('PDF error:', e);
    } finally {
      setPdfLoading(false);
    }
  };

  return (
    <motion.div
      key="results"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-4xl mx-auto pb-20"
    >
      {result.fallback && (
        <div className="mb-5 flex items-start gap-3 px-4 py-3 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 text-amber-700 dark:text-amber-400 text-sm">
          <AlertCircle size={15} className="flex-shrink-0 mt-0.5" />
          <span>Rule-based fallback estimate — AI was unavailable. Book a discovery call for a detailed breakdown.</span>
        </div>
      )}

      {/* ── Hero ── */}
      <div className="rounded-2xl mb-5 overflow-hidden shadow-xl">
        {/* Top gradient band */}
        <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 px-6 pt-6 pb-5">
          <p className="text-blue-200 text-[11px] font-bold uppercase tracking-widest mb-1">Estimated Investment</p>
          <div className="flex items-end gap-3 flex-wrap">
            <span className="text-4xl sm:text-5xl font-black tracking-tight text-white leading-none">
              {fmtUSD(result.totalCost.low)}
            </span>
            <span className="text-2xl font-light text-blue-300 leading-none pb-1">–</span>
            <span className="text-4xl sm:text-5xl font-black tracking-tight text-white leading-none">
              {fmtUSD(result.totalCost.high)}
            </span>
            <span className="text-blue-300 text-sm font-normal pb-1">USD</span>
          </div>
          <p className="text-blue-300/70 text-xs mt-2">±15–25% variance on final scope · Not a binding contract</p>
        </div>

        {/* Stats row */}
        <div className={`grid grid-cols-2 sm:grid-cols-4 divide-x ${dark ? 'bg-slate-800 divide-slate-700' : 'bg-slate-50 divide-slate-200'}`}>
          {[
            { label: 'Timeline', value: result.suggestedTimeline, icon: '📅' },
            { label: 'Team Size', value: result.teamSize, icon: '👥' },
            { label: 'Total Effort', value: `${result.totalMandays.low}–${result.totalMandays.high} days`, icon: '⚡' },
            { label: 'Region', value: region === 'local' ? 'Local (BD/IN)' : region === 'midtier' ? 'Regional' : 'International', icon: '🌍' },
          ].map((stat) => (
            <div key={stat.label} className="px-4 py-3">
              <p className={`text-[10px] font-bold uppercase tracking-widest mb-0.5 ${dark ? 'text-slate-500' : 'text-slate-400'}`}>{stat.label}</p>
              <p className={`text-sm font-bold ${dark ? 'text-white' : 'text-slate-800'}`}>{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Footer links */}
        {result.similar_project && result.similar_project_demo && (
          <div className={`px-6 py-2.5 border-t flex items-center gap-2 ${dark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-100'}`}>
            <span className={`text-xs ${dark ? 'text-slate-500' : 'text-slate-400'}`}>Similar project:</span>
            <Link href={result.similar_project_demo} className="text-xs font-semibold text-blue-500 hover:text-blue-600 flex items-center gap-1 transition-colors">
              {result.similar_project} <ExternalLink size={10} />
            </Link>
          </div>
        )}
      </div>

      {/* ── Summary ── */}
      <div className={`rounded-2xl p-5 mb-5 border ${dark ? 'bg-slate-800/40 border-slate-700/60' : 'bg-white border-slate-200'}`}>
        <SectionHeader label="Project Summary" color="#3B82F6" />
        <p className={`text-sm leading-relaxed ${dark ? 'text-slate-300' : 'text-slate-700'}`}>{result.projectSummary}</p>
        {result.scope && result.scope !== result.projectSummary && (
          <p className={`text-xs leading-relaxed mt-2 pt-2 border-t ${dark ? 'text-slate-500 border-slate-700' : 'text-slate-500 border-slate-100'}`}>{result.scope}</p>
        )}
      </div>

      {/* ── Module / Phase tabs ── */}
      {(result.modules.length > 0 || result.phases.length > 0) && (
        <div className={`rounded-2xl mb-5 border overflow-hidden ${dark ? 'bg-slate-800/40 border-slate-700/60' : 'bg-white border-slate-200'}`}>

          {/* Tab switcher */}
          <div className={`flex items-center gap-1 p-1.5 m-4 rounded-xl ${dark ? 'bg-slate-700/60' : 'bg-slate-100'}`}>
            {(['full', 'phased'] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`flex-1 py-2 px-4 rounded-lg text-sm font-semibold transition-all ${tab === t
                  ? 'bg-white dark:bg-slate-600 shadow-sm text-slate-800 dark:text-white'
                  : dark ? 'text-slate-400 hover:text-slate-300' : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                {t === 'full' ? '⚙  Module Breakdown' : '📦  Phased Delivery'}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {tab === 'full' && result.modules.length > 0 && (
              <motion.div key="full" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="px-4 pb-4">
                {/* Column headers */}
                <div className={`flex items-center gap-3 px-3 py-2 mb-1 rounded-lg text-[10px] font-bold uppercase tracking-widest ${dark ? 'text-slate-600' : 'text-slate-400'}`}>
                  <span className="w-5" />
                  <span className="flex-1">Module</span>
                  <span className="w-20 text-center">Effort</span>
                  <span className="w-20 text-center hidden sm:block">Complexity</span>
                  <span className="w-36 text-right">Cost Range</span>
                </div>

                {/* Module rows */}
                <div className="space-y-1.5">
                  {result.modules.map((mod, i) => {
                    const cc = COMPLEXITY_CONFIG[mod.complexity as keyof typeof COMPLEXITY_CONFIG] || COMPLEXITY_CONFIG.medium;
                    const isOpen = expandedModule === i;
                    return (
                      <div key={i} className={`rounded-xl border overflow-hidden transition-colors ${dark ? 'border-slate-700/60' : 'border-slate-200'}`}>
                        <button
                          onClick={() => setExpandedModule(isOpen ? null : i)}
                          className={`w-full flex items-center gap-3 px-3 py-3 text-left transition-colors ${dark ? 'hover:bg-slate-700/40' : 'hover:bg-slate-50'}`}
                        >
                          {/* Row number */}
                          <span className={`w-5 text-[11px] font-bold text-center flex-shrink-0 ${dark ? 'text-slate-600' : 'text-slate-300'}`}>{i + 1}</span>

                          {/* Module name */}
                          <div className="flex-1 min-w-0">
                            <p className={`text-sm font-semibold leading-tight ${dark ? 'text-white' : 'text-slate-800'}`}>{mod.name}</p>
                          </div>

                          {/* Effort */}
                          <div className="w-20 flex-shrink-0 text-center">
                            <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded-md ${dark ? 'bg-slate-700 text-slate-300' : 'bg-slate-100 text-slate-600'}`}>
                              {mod.mandays.low}–{mod.mandays.high}d
                            </span>
                          </div>

                          {/* Complexity dot */}
                          <div className="w-20 flex-shrink-0 justify-center hidden sm:flex">
                            <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2 py-0.5 rounded-md ${cc.text} ${cc.bg}`}>
                              <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: cc.dot }} />
                              {cc.label}
                            </span>
                          </div>

                          {/* Cost */}
                          <div className="w-36 flex-shrink-0 text-right">
                            <span className={`text-sm font-bold ${dark ? 'text-blue-400' : 'text-blue-600'}`}>
                              {fmtUSD(mod.costRange.low)}
                            </span>
                            <span className={`text-xs ${dark ? 'text-slate-500' : 'text-slate-400'}`}> – </span>
                            <span className={`text-sm font-bold ${dark ? 'text-blue-400' : 'text-blue-600'}`}>
                              {fmtUSD(mod.costRange.high)}
                            </span>
                          </div>

                          {/* Expand toggle */}
                          <ChevronDown
                            size={14}
                            className={`flex-shrink-0 opacity-30 transition-transform ml-1 ${isOpen ? 'rotate-180' : ''}`}
                          />
                        </button>

                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden"
                            >
                              <div className={`px-5 py-3 border-t ${dark ? 'bg-slate-700/30 border-slate-700' : 'bg-blue-50/40 border-slate-100'}`}>
                                <p className={`text-xs leading-relaxed ${dark ? 'text-slate-400' : 'text-slate-600'}`}>{mod.description}</p>
                                {mod.teamComposition && Object.keys(mod.teamComposition).length > 0 && (
                                  <div className="mt-2 flex flex-wrap gap-1.5">
                                    <span className={`text-[10px] font-bold uppercase tracking-widest mr-1 ${dark ? 'text-slate-500' : 'text-slate-400'}`}>Team:</span>
                                    {Object.entries(mod.teamComposition).map(([role, count]) => (
                                      <span key={role} className={`text-[11px] px-2 py-0.5 rounded-md font-medium ${dark ? 'bg-slate-600 text-slate-300' : 'bg-white text-slate-600 border border-slate-200'}`}>
                                        {role} ×{count}
                                      </span>
                                    ))}
                                  </div>
                                )}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>

                {/* Total row */}
                <div className={`flex items-center justify-between mt-3 px-4 py-3 rounded-xl ${dark ? 'bg-blue-900/20 border border-blue-800/40' : 'bg-blue-50 border border-blue-200'}`}>
                  <span className={`text-xs font-bold uppercase tracking-widest ${dark ? 'text-blue-400' : 'text-blue-600'}`}>Total Estimate</span>
                  <span className={`text-base font-black ${dark ? 'text-blue-300' : 'text-blue-700'}`}>
                    {fmtUSD(result.totalCost.low)} – {fmtUSD(result.totalCost.high)} USD
                  </span>
                </div>
              </motion.div>
            )}

            {tab === 'phased' && (
              <motion.div key="phased" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="px-4 pb-4 space-y-2">
                {result.phases.map((phase, i) => {
                  const color = PHASE_COLORS[i];
                  return (
                    <div
                      key={i}
                      className={`rounded-xl border overflow-hidden ${dark ? 'border-slate-700/60 bg-slate-700/20' : 'border-slate-200 bg-slate-50/50'}`}
                    >
                      <div className="flex items-stretch">
                        {/* Color accent left bar */}
                        <div className="w-1 flex-shrink-0 rounded-l-xl" style={{ background: color }} />

                        <div className="flex-1 px-4 py-3">
                          {/* Phase header */}
                          <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                            <div className="flex items-center gap-2.5">
                              <span className="text-xs font-bold uppercase tracking-widest" style={{ color }}>{`Phase ${i + 1}`}</span>
                              <span className={`font-semibold text-sm ${dark ? 'text-white' : 'text-slate-800'}`}>{phase.name}</span>
                              <span className={`text-[11px] px-2 py-0.5 rounded-md ${dark ? 'bg-slate-600 text-slate-400' : 'bg-white text-slate-500 border border-slate-200'}`}>{phase.timeline}</span>
                            </div>
                            <span className="text-sm font-black" style={{ color }}>
                              {fmtUSD(phase.costRange.low)} – {fmtUSD(phase.costRange.high)}
                            </span>
                          </div>

                          {/* Progress bar */}
                          <div className={`h-1.5 rounded-full overflow-hidden ${dark ? 'bg-slate-700' : 'bg-slate-200'}`}>
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${phase.mandaysPercent}%` }}
                              transition={{ duration: 0.7, delay: i * 0.08 }}
                              className="h-full rounded-full"
                              style={{ background: color }}
                            />
                          </div>
                          <p className={`text-[10px] mt-1 ${dark ? 'text-slate-600' : 'text-slate-400'}`}>{phase.mandaysPercent}% of total effort</p>

                          {/* Module tags */}
                          {phase.modules.length > 0 && (
                            <div className="mt-2 flex flex-wrap gap-1">
                              {phase.modules.slice(0, 5).map((m, mi) => (
                                <span key={mi} className={`text-[11px] px-2 py-0.5 rounded-md ${dark ? 'bg-slate-600 text-slate-400' : 'bg-white text-slate-500 border border-slate-200'}`}>{m}</span>
                              ))}
                              {phase.modules.length > 5 && <span className={`text-[11px] ${dark ? 'text-slate-600' : 'text-slate-400'}`}>+{phase.modules.length - 5} more</span>}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}

      {/* ── Tech Stack ── */}
      {result.tech_stack && Object.values(result.tech_stack).some((a) => a.length > 0) && (
        <div className={`rounded-2xl p-5 mb-5 border ${dark ? 'bg-slate-800/40 border-slate-700/60' : 'bg-white border-slate-200'}`}>
          <SectionHeader label="Recommended Tech Stack" color="#10B981" />
          <div className="space-y-2.5">
            {Object.entries(result.tech_stack).filter(([, v]) => v.length > 0).map(([cat, techs]) => (
              <div key={cat} className="flex items-start gap-3">
                <span className={`text-[10px] font-bold uppercase tracking-widest w-16 flex-shrink-0 pt-1 ${dark ? 'text-slate-500' : 'text-slate-400'}`}>{cat}</span>
                <div className="flex flex-wrap gap-1.5">
                  {techs.map((t: string) => (
                    <span key={t} className={`text-xs px-2.5 py-1 rounded-lg font-medium border ${dark ? 'bg-slate-700 text-slate-200 border-slate-600' : 'bg-slate-50 text-slate-700 border-slate-200'}`}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── Risks & Recommendations ── */}
      {(result.riskFactors.length > 0 || result.recommendations.length > 0) && (
        <div className="grid md:grid-cols-2 gap-4 mb-5">
          {result.riskFactors.length > 0 && (
            <div className={`rounded-2xl p-5 border ${dark ? 'bg-slate-800/40 border-slate-700/60' : 'bg-white border-slate-200'}`}>
              <SectionHeader label="Risk Factors" color="#F59E0B" />
              <ul className="space-y-3">
                {result.riskFactors.map((r, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mt-0.5">
                      <AlertCircle size={10} className="text-amber-500" />
                    </span>
                    <p className={`text-xs leading-relaxed ${dark ? 'text-slate-400' : 'text-slate-600'}`}>{r}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {result.recommendations.length > 0 && (
            <div className={`rounded-2xl p-5 border ${dark ? 'bg-slate-800/40 border-slate-700/60' : 'bg-white border-slate-200'}`}>
              <SectionHeader label="Recommendations" color="#10B981" />
              <ul className="space-y-3">
                {result.recommendations.map((r, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mt-0.5">
                      <CheckCircle size={10} className="text-emerald-500" />
                    </span>
                    <p className={`text-xs leading-relaxed ${dark ? 'text-slate-400' : 'text-slate-600'}`}>{r}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* ── Market comparison (international) ── */}
      {region === 'international' && (
        <div className={`rounded-2xl p-5 mb-5 border ${dark ? 'bg-slate-800/40 border-slate-700/60' : 'bg-white border-slate-200'}`}>
          <SectionHeader label="Market Comparison" color="#A855F7" />
          <p className={`text-xs mb-4 -mt-2 ${dark ? 'text-slate-500' : 'text-slate-400'}`}>Same scope, comparable quality — Dhaka vs hiring locally</p>
          <div className="space-y-2">
            {[
              { label: 'NimbleSL (Dhaka)', low: result.totalCost.low, high: result.totalCost.high, highlight: true, sub: 'ISO-quality · dedicated team · GMT+6' },
              { label: 'US agency',          low: result.totalCost.low * 3.2, high: result.totalCost.high * 3.5, highlight: false, sub: 'Typical US software agency' },
              { label: 'UK agency',          low: result.totalCost.low * 2.6, high: result.totalCost.high * 2.9, highlight: false, sub: 'Typical UK software agency' },
              { label: 'Singapore agency',   low: result.totalCost.low * 2.0, high: result.totalCost.high * 2.3, highlight: false, sub: 'Typical SG software agency' },
            ].map((row) => (
              <div
                key={row.label}
                className={`flex items-center gap-4 px-4 py-3 rounded-xl ${
                  row.highlight
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white'
                    : dark ? 'bg-slate-700/40 border border-slate-700' : 'bg-slate-50 border border-slate-100'
                }`}
              >
                <div className="flex-1 min-w-0">
                  <p className={`font-semibold text-sm ${!row.highlight ? (dark ? 'text-slate-200' : 'text-slate-700') : ''}`}>{row.label}</p>
                  <p className={`text-[11px] ${row.highlight ? 'text-blue-200' : dark ? 'text-slate-500' : 'text-slate-400'}`}>{row.sub}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className={`font-bold text-sm ${row.highlight ? 'text-white' : dark ? 'text-white' : 'text-slate-800'}`}>
                    {fmtUSD(Math.round(row.low / 500) * 500)} – {fmtUSD(Math.round(row.high / 500) * 500)}
                  </p>
                  {row.highlight && (
                    <p className="text-blue-200 text-[11px]">save ~{fmtUSD(Math.round((row.low * 3.2 - row.low) / 1000) * 1000)}+ vs US</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── CTA banner ── */}
      <div className={`rounded-2xl overflow-hidden border ${dark ? 'border-slate-700/60' : 'border-slate-200'}`}>
        <div className={`px-6 py-5 ${dark ? 'bg-slate-800/40' : 'bg-slate-50'}`}>
          <p className={`text-base font-bold mb-0.5 ${dark ? 'text-white' : 'text-slate-800'}`}>Ready to build?</p>
          <p className={`text-xs mb-4 ${dark ? 'text-slate-400' : 'text-slate-500'}`}>
            Book a free 30-minute discovery call — we'll review your requirements and give you a confirmed, binding quotation.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/contact"
              className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm transition-all hover:scale-[1.01] shadow-lg shadow-blue-600/20"
            >
              <Calendar size={15} />
              Book Free Discovery Call
            </Link>
            <button
              onClick={handlePDF}
              disabled={pdfLoading}
              className={`flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm transition-all hover:scale-[1.01] border ${
                dark ? 'border-slate-600 text-slate-200 hover:bg-slate-700' : 'border-slate-300 text-slate-700 hover:bg-white'
              }`}
            >
              <Download size={15} />
              {pdfLoading ? 'Generating…' : 'Download PDF Report'}
            </button>
          </div>
        </div>
        <div className={`px-6 py-3 border-t ${dark ? 'border-slate-700 bg-slate-800/20' : 'border-slate-100 bg-white'}`}>
          <p className={`text-center text-[11px] ${dark ? 'text-slate-600' : 'text-slate-400'}`}>
            AI-generated planning estimate · Not a final quote · Variance ±15–25% on confirmed scope
          </p>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Live Estimate Sidebar ────────────────────────────────────────────────────

function LiveEstimateSidebar({
  estimate, region, regionLoading, step, theme,
}: {
  estimate: { low: number; high: number } | null;
  region: IRegion;
  regionLoading: boolean;
  step: number;
  theme: { primary: string; rgb: string };
}) {
  const { theme: appTheme } = useTheme();
  const dark = appTheme === 'dark';

  // Always render the w-72 container so the two-column layout never shifts.
  // The inner card is conditionally shown; when hidden the column is just empty space.
  return (
    <div className="hidden lg:block w-72 flex-shrink-0">
      <div className="sticky top-24">

        {/* Show card on steps 1-4 */}
        {step < 5 && (
          <div className={`rounded-2xl p-5 border ${dark ? 'bg-slate-800/60 border-slate-700' : 'bg-white border-slate-200'} shadow-lg`}>
            {/* Header */}
            <div className="flex items-center gap-2 mb-4">
              <BarChart3 size={14} style={{ color: theme.primary }} />
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: theme.primary }}>Live Estimate</span>
              <span className="text-xs opacity-40 ml-auto">rough</span>
            </div>

            {/* Estimate numbers — shown once a project type is selected */}
            {estimate ? (
              <>
                <div className="mb-4">
                  <p className={`text-xs mb-1 ${dark ? 'text-slate-500' : 'text-slate-400'}`}>Estimated Range</p>
                  <p className="text-2xl font-black tracking-tight" style={{ color: theme.primary }}>
                    {fmtUSD(estimate.low)}<span className="text-base font-normal opacity-50 mx-1">–</span>{fmtUSD(estimate.high)}
                  </p>
                  <p className={`text-xs mt-0.5 ${dark ? 'text-slate-500' : 'text-slate-400'}`}>USD · ±30% rough estimate</p>
                </div>

                <div className={`flex items-center gap-2 p-2.5 rounded-lg text-xs ${dark ? 'bg-slate-700' : 'bg-slate-50'}`}>
                  <MapPin size={12} style={{ color: theme.primary }} />
                  {regionLoading
                    ? <span className="opacity-50">Detecting location…</span>
                    : <span className={dark ? 'text-slate-300' : 'text-slate-600'}>{REGION_LABELS[region]}</span>
                  }
                </div>

                <div className={`mt-4 pt-4 border-t ${dark ? 'border-slate-700' : 'border-slate-200'} space-y-1.5`}>
                  {step < 2 && <p className={`text-xs ${dark ? 'text-slate-500' : 'text-slate-400'}`}>Select features on step 2 to refine</p>}
                  {step >= 2 && <p className={`text-xs ${dark ? 'text-slate-500' : 'text-slate-400'}`}>Select scale on step 3 to refine</p>}
                  <p className={`text-xs ${dark ? 'text-slate-500' : 'text-slate-400'}`}>AI-powered breakdown after step 5</p>
                </div>
              </>
            ) : (
              /* Placeholder — no project type chosen yet */
              <div className="space-y-3">
                <div className={`rounded-xl p-4 border-2 border-dashed text-center ${dark ? 'border-slate-700' : 'border-slate-200'}`}>
                  <BarChart3 size={22} className={`mx-auto mb-2 opacity-25 ${dark ? 'text-slate-400' : 'text-slate-500'}`} />
                  <p className={`text-xs leading-relaxed ${dark ? 'text-slate-500' : 'text-slate-400'}`}>
                    Pick a project type on the left to see your live cost estimate here.
                  </p>
                </div>
                <div className={`flex items-center gap-2 p-2.5 rounded-lg text-xs ${dark ? 'bg-slate-700' : 'bg-slate-50'}`}>
                  <MapPin size={12} style={{ color: theme.primary }} />
                  {regionLoading
                    ? <span className="opacity-50">Detecting location…</span>
                    : <span className={dark ? 'text-slate-300' : 'text-slate-600'}>{REGION_LABELS[region]}</span>
                  }
                </div>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
}

// ─── Mobile Estimate Bar ──────────────────────────────────────────────────────

function MobileEstimateBar({
  estimate, region, step, theme,
}: {
  estimate: { low: number; high: number } | null;
  region: IRegion;
  step: number;
  theme: { primary: string; rgb: string };
}) {
  if (!estimate || step >= 5) return null;

  return (
    <div
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 border-t backdrop-blur-md"
      style={{ background: `rgba(${theme.rgb}, 0.1)`, borderColor: `rgba(${theme.rgb}, 0.3)` }}
    >
      <div className="flex items-center justify-between px-4 py-3 max-w-2xl mx-auto">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest opacity-60">Live Estimate</p>
          <p className="text-base font-black" style={{ color: theme.primary }}>{fmtUSD(estimate.low)} – {fmtUSD(estimate.high)}</p>
        </div>
        <div className="text-right">
          <p className="text-xs opacity-50">{REGION_LABELS[region]}</p>
          <p className="text-xs opacity-40">rough · ±30%</p>
        </div>
      </div>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

interface FormData {
  projectTypes: string[];
  industry: string;
  features: string[];
  designStatus: string;
  scale: string;
  integration: string;
  timeline: string;
  description: string;
  referenceUrl: string;
}

type Status = 'wizard' | 'loading' | 'result';

export default function ProjectEstimatorPage() {
  const { theme: appTheme } = useTheme();
  const dark = appTheme === 'dark';

  // ── State ──
  const [step, setStep] = useState(1);
  const [status, setStatus] = useState<Status>('wizard');
  const [region, setRegion] = useState<IRegion>('midtier');
  const [regionLoading, setRegionLoading] = useState(true);
  const [result, setResult] = useState<IEstimatorResult | null>(null);
  const [leadData, setLeadData] = useState<ILeadData>({ name: '', email: '', phone: '', company: '' });
  const [submitError, setSubmitError] = useState('');
  const [formData, setFormData] = useState<FormData>({
    projectTypes: [],
    industry: '',
    features: [],
    designStatus: '',
    scale: '',
    integration: '',
    timeline: '',
    description: '',
    referenceUrl: '',
  });

  const totalSteps = 5;
  const theme = STEP_THEMES[Math.min(step - 1, STEP_THEMES.length - 1)];
  const featureGroups = useMemo(() => getFeatureGroups(formData.projectTypes), [formData.projectTypes]);
  const liveEstimate = useMemo(
    () => computeLiveEstimate(formData.projectTypes, formData.scale, region),
    [formData.projectTypes, formData.scale, region]
  );

  // ── IP detection ──
  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then((r) => r.json())
      .then((d) => {
        if (d.country_code) setRegion(detectRegion(d.country_code));
      })
      .catch(() => {/* stay midtier */})
      .finally(() => setRegionLoading(false));
  }, []);

  // ── Scroll to top on step change ──
  const topRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    topRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [step]);

  // ── Helpers ──
  const toggleProjectType = useCallback((val: string) => {
    setFormData((prev) => ({
      ...prev,
      projectTypes: prev.projectTypes.includes(val)
        ? prev.projectTypes.filter((t) => t !== val)
        : [...prev.projectTypes, val],
      features: [], // reset features on type change
    }));
  }, []);

  const toggleFeature = useCallback((feat: string) => {
    setFormData((prev) => ({
      ...prev,
      features: prev.features.includes(feat)
        ? prev.features.filter((f) => f !== feat)
        : [...prev.features, feat],
    }));
  }, []);

  const canProceed = useCallback((): boolean => {
    switch (step) {
      case 1: return formData.projectTypes.length > 0 && formData.industry !== '';
      case 2: return formData.features.length > 0;
      case 3: return formData.scale !== '' && formData.timeline !== '' && formData.integration !== '' && formData.designStatus !== '';
      case 4: return true;
      default: return false;
    }
  }, [step, formData]);

  // ── Submit (Step 5) ──
  const handleGetEstimate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadData.name.trim() || !leadData.email.trim()) {
      setSubmitError('Name and email are required.');
      return;
    }
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(leadData.email);
    if (!emailOk) {
      setSubmitError('Please enter a valid email address.');
      return;
    }
    setSubmitError('');
    setStatus('loading');

    try {
      const res = await fetch('/api/estimate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, region }),
      });
      const data = await res.json();
      if (!data.success) throw new Error(data.error || 'Estimation failed');

      const est: IEstimatorResult = data.result;
      setResult(est);
      setStatus('result');

      // Fire-and-forget lead capture with estimate data
      fetch('/api/estimate/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...leadData,
          region,
          projectTypes: formData.projectTypes,
          industry: formData.industry,
          features: formData.features,
          scale: formData.scale,
          integration: formData.integration,
          timeline: formData.timeline,
          projectSummary: est.projectSummary,
          totalCostLow: est.totalCost.low,
          totalCostHigh: est.totalCost.high,
          suggestedTimeline: est.suggestedTimeline,
          teamSize: est.teamSize,
        }),
      }).catch(() => {/* non-blocking */});

    } catch (err) {
      console.error('Estimate error:', err);
      setStatus('wizard');
      setSubmitError('Something went wrong. Please try again.');
    }
  };

  // ── Render: Loading ──
  if (status === 'loading') {
    return (
      <div className={`min-h-screen pt-24 pb-20 ${dark ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'}`}>
        <div className="max-w-2xl mx-auto px-4">
          <LoadingScreen theme={theme} />
        </div>
      </div>
    );
  }

  // ── Render: Result ──
  if (status === 'result' && result) {
    return (
      <div className={`min-h-screen pt-24 pb-20 ${dark ? 'bg-slate-900 text-white' : 'bg-slate-50 text-slate-900'}`}>
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl font-black">Your Project Estimate</h1>
              <p className={`text-sm mt-1 ${dark ? 'text-slate-400' : 'text-slate-500'}`}>AI-powered · {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
            </div>
            <button
              onClick={() => { setStatus('wizard'); setStep(1); setResult(null); }}
              className={`flex items-center gap-2 text-sm px-4 py-2 rounded-xl border transition-colors ${dark ? 'border-slate-700 hover:bg-slate-800 text-slate-400' : 'border-slate-200 hover:bg-slate-50 text-slate-500'}`}
            >
              <ArrowLeft size={14} /> Start over
            </button>
          </div>
          <ResultsScreen result={result} lead={leadData} projectTypes={formData.projectTypes} industry={formData.industry} region={region} />
        </div>
      </div>
    );
  }

  // ── Render: Wizard ──
  const progress = ((step - 1) / (totalSteps - 1)) * 100;

  return (
    <div
      ref={topRef}
      className={`min-h-screen pt-24 pb-32 lg:pb-20 ${dark ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'}`}
    >
      {/* ── Page header ── */}
      <div className="text-center px-4 mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-4 border"
          style={{ color: theme.primary, borderColor: `rgba(${theme.rgb},0.3)`, background: `rgba(${theme.rgb},0.08)` }}>
          <Sparkles size={12} />
          AI Project Estimator
          {!regionLoading && <span className="opacity-60">· {region === 'local' ? '🇧🇩' : region === 'international' ? '🌍' : '🌏'} {region}</span>}
        </div>
        <h1 className="text-3xl sm:text-4xl font-black tracking-tight mb-3">
          How much will your <span style={{ color: theme.primary }}>project cost?</span>
        </h1>
        <p className={`text-base max-w-lg mx-auto ${dark ? 'text-slate-400' : 'text-slate-500'}`}>
          Answer {totalSteps} quick questions — get a detailed AI estimate with module breakdown, team composition, and investment range.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-4 flex gap-8 items-start">
        {/* ── Wizard card ── */}
        <div className="flex-1 min-w-0">
          {/* Progress */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                {STEP_LABELS.map((label, i) => (
                  <div key={i} className={`flex items-center gap-1.5 ${i > 0 ? 'ml-1' : ''}`}>
                    {i > 0 && <div className={`w-6 h-px ${i < step ? '' : 'opacity-30'}`} style={{ background: theme.primary }} />}
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all ${i + 1 < step ? 'text-white' : i + 1 === step ? 'text-white' : dark ? 'bg-slate-700 text-slate-500' : 'bg-slate-100 text-slate-400'}`}
                      style={i + 1 <= step ? { background: theme.primary } : {}}>
                      {i + 1 < step ? <Check size={12} /> : i + 1}
                    </div>
                    <span className={`text-xs font-medium hidden sm:block ${i + 1 === step ? '' : 'opacity-40'}`}
                      style={i + 1 === step ? { color: theme.primary } : {}}>
                      {label}
                    </span>
                  </div>
                ))}
              </div>
              <span className={`text-xs ${dark ? 'text-slate-500' : 'text-slate-400'}`}>{step}/{totalSteps}</span>
            </div>
            <div className={`h-1.5 rounded-full overflow-hidden ${dark ? 'bg-slate-800' : 'bg-slate-100'}`}>
              <motion.div
                className="h-full rounded-full"
                style={{ background: theme.primary }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.4 }}
              />
            </div>
          </div>

          {/* Step card */}
          <div className={`rounded-2xl border shadow-sm overflow-hidden ${dark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200'}`}>
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
              >
                {/* Step header */}
                <div className="px-6 pt-6 pb-5 border-b" style={{ borderColor: dark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)' }}>
                  <h2 className="text-xl font-bold mb-1">
                    {step === 1 && 'What are you building?'}
                    {step === 2 && 'Which features do you need?'}
                    {step === 3 && 'Project details'}
                    {step === 4 && 'Anything else to share?'}
                    {step === 5 && 'Get your estimate'}
                  </h2>
                  <p className={`text-sm ${dark ? 'text-slate-400' : 'text-slate-500'}`}>
                    {step === 1 && 'Select all that apply — you can pick multiple deliverables.'}
                    {step === 2 && 'Select all features you need in v1.'}
                    {step === 3 && 'Tell us about scale, timeline, and integrations.'}
                    {step === 4 && 'Optional: add any context, references, or notes.'}
                    {step === 5 && "We'll email you the full estimate PDF."}
                  </p>
                </div>

                <div className="p-6">
                  {/* ── Step 1: Project Type + Industry ── */}
                  {step === 1 && (
                    <div className="space-y-6">
                      {/* Project types */}
                      <div>
                        <label className={`block text-xs font-bold uppercase tracking-widest mb-3 ${dark ? 'text-slate-400' : 'text-slate-500'}`}>
                          Project Type <span className="normal-case font-normal opacity-60">(multi-select)</span>
                        </label>
                        <div className="grid sm:grid-cols-2 gap-2">
                          {PROJECT_TYPES.map(({ value, label, icon: Icon, desc }) => {
                            const sel = formData.projectTypes.includes(value);
                            return (
                              <button
                                key={value}
                                onClick={() => toggleProjectType(value)}
                                className={`flex items-center gap-3 p-3.5 rounded-xl border-2 text-left transition-all ${sel
                                  ? 'text-white'
                                  : dark ? 'border-slate-700 hover:border-slate-600 text-slate-300' : 'border-slate-200 hover:border-slate-300 text-slate-700'
                                }`}
                                style={sel ? { borderColor: theme.primary, background: theme.primary } : {}}
                              >
                                <Icon size={16} className={`flex-shrink-0 ${sel ? 'text-white' : 'opacity-40'}`} />
                                <div className="flex-1 min-w-0">
                                  <p className="font-semibold text-sm truncate">{label}</p>
                                  <p className={`text-xs mt-0.5 truncate ${sel ? 'text-white/75' : 'opacity-45'}`}>{desc}</p>
                                </div>
                                <Check
                                  size={14}
                                  className={`flex-shrink-0 transition-opacity ${sel ? 'opacity-100' : 'opacity-0'}`}
                                />
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Industry */}
                      <div>
                        <label className={`block text-xs font-bold uppercase tracking-widest mb-3 ${dark ? 'text-slate-400' : 'text-slate-500'}`}>Industry</label>
                        <div className="flex flex-wrap gap-2">
                          {INDUSTRIES.map((ind) => {
                            const sel = formData.industry === ind;
                            return (
                              <button
                                key={ind}
                                onClick={() => setFormData((prev) => ({ ...prev, industry: ind }))}
                                className={`px-3.5 py-2 rounded-xl text-sm font-medium border-2 transition-all ${sel
                                  ? 'text-white'
                                  : dark ? 'border-slate-700 text-slate-400 hover:border-slate-600' : 'border-slate-200 text-slate-600 hover:border-slate-300'
                                }`}
                                style={sel ? { borderColor: theme.primary, background: theme.primary } : {}}
                              >
                                {ind}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* ── Step 2: Features ── */}
                  {step === 2 && (
                    <div className="space-y-6">
                      {Object.entries(featureGroups).map(([group, feats]) => (
                        <div key={group}>
                          <label className={`block text-xs font-bold uppercase tracking-widest mb-3 ${dark ? 'text-slate-400' : 'text-slate-500'}`}>{group}</label>
                          <div className="flex flex-wrap gap-2">
                            {feats.map((feat) => {
                              const sel = formData.features.includes(feat);
                              return (
                                <button
                                  key={feat}
                                  onClick={() => toggleFeature(feat)}
                                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm border-2 transition-all ${sel
                                    ? 'text-white'
                                    : dark ? 'border-slate-700 text-slate-400 hover:border-slate-600' : 'border-slate-200 text-slate-600 hover:border-slate-300'
                                  }`}
                                  style={sel ? { borderColor: theme.primary, background: theme.primary } : {}}
                                >
                                  {sel && <Check size={12} />}
                                  {feat}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* ── Step 3: Scale + Timeline + Integration + Design ── */}
                  {step === 3 && (
                    <div className="space-y-6">
                      {/* Scale */}
                      <div>
                        <label className={`block text-xs font-bold uppercase tracking-widest mb-3 ${dark ? 'text-slate-400' : 'text-slate-500'}`}>
                          Expected Users at Launch
                        </label>
                        <div className="grid sm:grid-cols-2 gap-2">
                          {SCALE_OPTIONS.map(({ value, label, desc }) => {
                            const sel = formData.scale === value;
                            return (
                              <button
                                key={value}
                                onClick={() => setFormData((p) => ({ ...p, scale: value }))}
                                className={`p-3.5 rounded-xl border-2 text-left transition-all ${sel
                                  ? 'text-white'
                                  : dark ? 'border-slate-700 text-slate-300 hover:border-slate-600' : 'border-slate-200 text-slate-700 hover:border-slate-300'
                                }`}
                                style={sel ? { borderColor: theme.primary, background: theme.primary } : {}}
                              >
                                <p className="font-semibold text-sm">{label}</p>
                                <p className={`text-xs mt-0.5 ${sel ? 'text-white/80' : 'opacity-50'}`}>{desc}</p>
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Timeline */}
                      <div>
                        <label className={`block text-xs font-bold uppercase tracking-widest mb-3 ${dark ? 'text-slate-400' : 'text-slate-500'}`}>
                          Preferred Timeline
                        </label>
                        <div className="grid sm:grid-cols-3 gap-2">
                          {TIMELINES.map(({ label, sub, desc }) => {
                            const sel = formData.timeline === label;
                            return (
                              <button
                                key={label}
                                onClick={() => setFormData((p) => ({ ...p, timeline: label }))}
                                className={`p-3.5 rounded-xl border-2 text-left transition-all ${sel
                                  ? 'text-white'
                                  : dark ? 'border-slate-700 text-slate-300 hover:border-slate-600' : 'border-slate-200 text-slate-700 hover:border-slate-300'
                                }`}
                                style={sel ? { borderColor: theme.primary, background: theme.primary } : {}}
                              >
                                <p className="font-semibold text-sm">{label}</p>
                                <p className={`text-xs mt-0.5 ${sel ? 'text-white/80' : 'opacity-50'}`}>{sub}</p>
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Integration */}
                      <div>
                        <label className={`block text-xs font-bold uppercase tracking-widest mb-3 ${dark ? 'text-slate-400' : 'text-slate-500'}`}>
                          Existing Systems to Integrate
                        </label>
                        <div className="flex flex-col sm:flex-row gap-2">
                          {INTEGRATION_OPTIONS.map(({ value, label, desc }) => {
                            const sel = formData.integration === value;
                            return (
                              <button
                                key={value}
                                onClick={() => setFormData((p) => ({ ...p, integration: value }))}
                                className={`flex-1 p-3.5 rounded-xl border-2 text-left transition-all ${sel
                                  ? 'text-white'
                                  : dark ? 'border-slate-700 text-slate-300 hover:border-slate-600' : 'border-slate-200 text-slate-700 hover:border-slate-300'
                                }`}
                                style={sel ? { borderColor: theme.primary, background: theme.primary } : {}}
                              >
                                <p className="font-semibold text-sm">{label}</p>
                                <p className={`text-xs mt-0.5 ${sel ? 'text-white/80' : 'opacity-50'}`}>{desc}</p>
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Design */}
                      <div>
                        <label className={`block text-xs font-bold uppercase tracking-widest mb-3 ${dark ? 'text-slate-400' : 'text-slate-500'}`}>
                          Design Status
                        </label>
                        <div className="flex flex-col gap-2">
                          {DESIGN_STATUS.map(({ label, desc }) => {
                            const sel = formData.designStatus === label;
                            return (
                              <button
                                key={label}
                                onClick={() => setFormData((p) => ({ ...p, designStatus: label }))}
                                className={`flex items-center gap-3 p-3.5 rounded-xl border-2 text-left transition-all ${sel
                                  ? 'text-white'
                                  : dark ? 'border-slate-700 text-slate-300 hover:border-slate-600' : 'border-slate-200 text-slate-700 hover:border-slate-300'
                                }`}
                                style={sel ? { borderColor: theme.primary, background: theme.primary } : {}}
                              >
                                <div className="flex-1 min-w-0">
                                  <p className="font-semibold text-sm">{label}</p>
                                  <p className={`text-xs mt-0.5 ${sel ? 'text-white/75' : 'opacity-50'}`}>{desc}</p>
                                </div>
                                <Check
                                  size={16}
                                  className={`flex-shrink-0 transition-opacity ${sel ? 'opacity-100' : 'opacity-0'}`}
                                />
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* ── Step 4: Notes (optional) ── */}
                  {step === 4 && (
                    <div className="space-y-5">
                      <div>
                        <label className={`block text-xs font-bold uppercase tracking-widest mb-2 ${dark ? 'text-slate-400' : 'text-slate-500'}`}>
                          Project Description <span className="normal-case font-normal opacity-60">(optional)</span>
                        </label>
                        <textarea
                          value={formData.description}
                          onChange={(e) => setFormData((p) => ({ ...p, description: e.target.value }))}
                          placeholder="Describe your product, the problem it solves, or any special requirements. The more context you share, the more accurate your estimate."
                          rows={5}
                          className={`w-full px-4 py-3 rounded-xl border-2 text-sm resize-none focus:outline-none transition-colors ${dark
                            ? 'bg-slate-800 border-slate-700 text-white placeholder:text-slate-600 focus:border-blue-500'
                            : 'bg-white border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-blue-400'
                          }`}
                        />
                      </div>
                      <div>
                        <label className={`block text-xs font-bold uppercase tracking-widest mb-2 ${dark ? 'text-slate-400' : 'text-slate-500'}`}>
                          Reference URL <span className="normal-case font-normal opacity-60">(optional)</span>
                        </label>
                        <input
                          type="url"
                          value={formData.referenceUrl}
                          onChange={(e) => setFormData((p) => ({ ...p, referenceUrl: e.target.value }))}
                          placeholder="https://example.com — a product you want to build something like"
                          className={`w-full px-4 py-3 rounded-xl border-2 text-sm focus:outline-none transition-colors ${dark
                            ? 'bg-slate-800 border-slate-700 text-white placeholder:text-slate-600 focus:border-blue-500'
                            : 'bg-white border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-blue-400'
                          }`}
                        />
                        <p className={`text-xs mt-1.5 ${dark ? 'text-slate-600' : 'text-slate-400'}`}>Totally optional — helps us understand your vision.</p>
                      </div>
                    </div>
                  )}

                  {/* ── Step 5: Lead form ── */}
                  {step === 5 && (
                    <form onSubmit={handleGetEstimate} className="space-y-4">
                      <div className={`p-4 rounded-xl border text-sm mb-4 ${dark ? 'bg-blue-900/20 border-blue-800 text-blue-300' : 'bg-blue-50 border-blue-200 text-blue-700'}`}>
                        <p className="font-semibold mb-1">You're one step away from your estimate!</p>
                        <p className="text-xs opacity-80">Enter your contact details below. We'll generate your detailed estimate and email you a PDF copy.</p>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className={`block text-xs font-bold uppercase tracking-widest mb-1.5 ${dark ? 'text-slate-400' : 'text-slate-500'}`}>
                            Full Name <span className="text-red-400">*</span>
                          </label>
                          <div className="relative">
                            <User size={14} className="absolute left-3 top-1/2 -translate-y-1/2 opacity-40" />
                            <input
                              type="text"
                              required
                              value={leadData.name}
                              onChange={(e) => setLeadData((p) => ({ ...p, name: e.target.value }))}
                              placeholder="Alex Johnson"
                              className={`w-full pl-9 pr-4 py-3 rounded-xl border-2 text-sm focus:outline-none transition-colors ${dark
                                ? 'bg-slate-800 border-slate-700 text-white placeholder:text-slate-600 focus:border-cyan-500'
                                : 'bg-white border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-cyan-400'
                              }`}
                            />
                          </div>
                        </div>
                        <div>
                          <label className={`block text-xs font-bold uppercase tracking-widest mb-1.5 ${dark ? 'text-slate-400' : 'text-slate-500'}`}>
                            Work Email <span className="text-red-400">*</span>
                          </label>
                          <div className="relative">
                            <Mail size={14} className="absolute left-3 top-1/2 -translate-y-1/2 opacity-40" />
                            <input
                              type="email"
                              required
                              value={leadData.email}
                              onChange={(e) => setLeadData((p) => ({ ...p, email: e.target.value }))}
                              placeholder="alex@company.com"
                              className={`w-full pl-9 pr-4 py-3 rounded-xl border-2 text-sm focus:outline-none transition-colors ${dark
                                ? 'bg-slate-800 border-slate-700 text-white placeholder:text-slate-600 focus:border-cyan-500'
                                : 'bg-white border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-cyan-400'
                              }`}
                            />
                          </div>
                        </div>
                        <div>
                          <label className={`block text-xs font-bold uppercase tracking-widest mb-1.5 ${dark ? 'text-slate-400' : 'text-slate-500'}`}>
                            Phone <span className="font-normal opacity-60">(optional)</span>
                          </label>
                          <div className="relative">
                            <Phone size={14} className="absolute left-3 top-1/2 -translate-y-1/2 opacity-40" />
                            <input
                              type="tel"
                              value={leadData.phone}
                              onChange={(e) => setLeadData((p) => ({ ...p, phone: e.target.value }))}
                              placeholder="+1 555 000 0000"
                              className={`w-full pl-9 pr-4 py-3 rounded-xl border-2 text-sm focus:outline-none transition-colors ${dark
                                ? 'bg-slate-800 border-slate-700 text-white placeholder:text-slate-600 focus:border-cyan-500'
                                : 'bg-white border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-cyan-400'
                              }`}
                            />
                          </div>
                        </div>
                        <div>
                          <label className={`block text-xs font-bold uppercase tracking-widest mb-1.5 ${dark ? 'text-slate-400' : 'text-slate-500'}`}>
                            Company <span className="font-normal opacity-60">(optional)</span>
                          </label>
                          <div className="relative">
                            <Building2 size={14} className="absolute left-3 top-1/2 -translate-y-1/2 opacity-40" />
                            <input
                              type="text"
                              value={leadData.company}
                              onChange={(e) => setLeadData((p) => ({ ...p, company: e.target.value }))}
                              placeholder="Acme Corp"
                              className={`w-full pl-9 pr-4 py-3 rounded-xl border-2 text-sm focus:outline-none transition-colors ${dark
                                ? 'bg-slate-800 border-slate-700 text-white placeholder:text-slate-600 focus:border-cyan-500'
                                : 'bg-white border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-cyan-400'
                              }`}
                            />
                          </div>
                        </div>
                      </div>

                      {submitError && (
                        <div className="flex items-center gap-2 p-3 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 text-sm">
                          <AlertCircle size={14} />
                          {submitError}
                        </div>
                      )}

                      <button
                        type="submit"
                        className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-2xl text-white font-bold text-base shadow-lg transition-all hover:scale-[1.01] active:scale-[0.99]"
                        style={{ background: theme.primary, boxShadow: `0 8px 24px rgba(${theme.rgb},0.35)` }}
                      >
                        <Sparkles size={18} />
                        Get My Free Estimate
                        <ArrowRight size={18} />
                      </button>

                      <p className={`text-center text-xs ${dark ? 'text-slate-600' : 'text-slate-400'}`}>
                        No spam. No commitment. We'll send your PDF and may follow up with a discovery call offer.
                      </p>
                    </form>
                  )}
                </div>

                {/* Navigation (steps 1–4) */}
                {step < 5 && (
                  <div className={`flex items-center justify-between px-6 py-4 border-t ${dark ? 'border-slate-700' : 'border-slate-100'}`}>
                    <button
                      onClick={() => setStep((s) => Math.max(1, s - 1))}
                      disabled={step === 1}
                      className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-colors ${step === 1
                        ? 'opacity-30 cursor-not-allowed'
                        : dark ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-800'
                      }`}
                    >
                      <ArrowLeft size={16} /> Back
                    </button>
                    <button
                      onClick={() => canProceed() && setStep((s) => s + 1)}
                      disabled={!canProceed()}
                      className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white transition-all ${canProceed() ? 'hover:scale-[1.02] active:scale-[0.98]' : 'opacity-40 cursor-not-allowed'}`}
                      style={canProceed() ? { background: theme.primary } : { background: '#94A3B8' }}
                    >
                      {step === 4 ? 'Continue to Estimate' : 'Next'}
                      <ArrowRight size={16} />
                    </button>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Selection summary (step 1 onwards) */}
          {step > 1 && formData.projectTypes.length > 0 && (
            <div className={`mt-4 p-4 rounded-xl border text-sm ${dark ? 'bg-slate-800/30 border-slate-700' : 'bg-slate-50 border-slate-200'}`}>
              <div className="flex flex-wrap gap-2">
                {formData.projectTypes.map((t) => (
                  <span key={t} className="flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium text-white" style={{ background: theme.primary }}>
                    <Check size={10} />{t}
                  </span>
                ))}
                {formData.industry && <span className={`px-2.5 py-1 rounded-lg text-xs font-medium ${dark ? 'bg-slate-700 text-slate-300' : 'bg-white text-slate-600 border border-slate-200'}`}>{formData.industry}</span>}
              </div>
            </div>
          )}
        </div>

        {/* ── Live estimate sidebar (desktop) ── */}
        <LiveEstimateSidebar
          estimate={liveEstimate}
          region={region}
          regionLoading={regionLoading}
          step={step}
          theme={theme}
        />
      </div>

      {/* ── Mobile estimate bar ── */}
      <MobileEstimateBar
        estimate={liveEstimate}
        region={region}
        step={step}
        theme={theme}
      />
    </div>
  );
}
