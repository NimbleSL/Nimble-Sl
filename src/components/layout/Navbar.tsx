'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Menu, X, Sun, Moon, Sparkles, ChevronDown, ArrowRight, Zap } from 'lucide-react';
import { useTheme } from '@/components/providers/ThemeProvider';
import { cn } from '@/lib/utils/cn';
import { MagneticWrapper } from '@/components/ui/MagneticWrapper';

const NAV_LINKS = [
  { label: 'Services', href: '/services', hasMega: true },
  { label: 'Solutions', href: '/solutions', hasMega: true },
  { label: 'Products', href: '/products', hasMega: false },
  { label: 'Case Studies', href: '/case-studies', hasMega: false },
  { label: 'Hire Developers', href: '/hire-developers', hasMega: false },
  { label: 'Blog', href: '/blog', hasMega: false },
  { label: 'About', href: '/about', hasMega: false },
];

const SERVICES_MEGA = {
  sections: [
    {
      title: 'Development',
      items: [
        { label: 'Custom Software', href: '/services/custom-software-development', desc: 'ERPs, CRMs, bespoke platforms' },
        { label: 'Web Applications', href: '/services/web-application-development', desc: 'Angular, Next.js, React — SSR-first' },
        { label: 'Mobile Apps', href: '/services/mobile-app-development', desc: 'Flutter & React Native, offline-first' },
      ],
    },
    {
      title: 'Specializations',
      items: [
        { label: 'AI & Machine Learning', href: '/services/ai-machine-learning', desc: 'RAG, LLMs, fraud detection, NLP' },
        { label: 'Cloud & DevOps', href: '/services/cloud-solutions-devops', desc: 'AWS, GCP, CI/CD, Kubernetes' },
        { label: 'UI/UX Design', href: '/services/ui-ux-design', desc: 'Design systems, Figma to production' },
        { label: 'Hire Developers', href: '/hire-developers', desc: 'Dedicated engineers, your timezone' },
        { label: 'Case Studies', href: '/case-studies', desc: 'Real projects, real outcomes' },
      ],
    },
  ],
  cta: { label: 'AI Project Estimator', desc: 'Get scope, timeline & cost in 3 minutes', href: '/tools/project-estimator', accent: '#10B981' },
};

const SOLUTIONS_MEGA = {
  sections: [
    {
      title: 'Finance & Commerce',
      items: [
        { label: 'PayFlow', href: 'https://payflow.nimblesl.com', desc: 'Digital banking & payments platform' },
        { label: 'InsureFlow', href: 'https://insureflow.nimblesl.com', desc: 'Claims & policy management' },
        { label: 'ShopNest', href: 'https://shopnest.nimblesl.com', desc: 'Multi-vendor e-commerce storefront' },
        { label: 'QuickPOS', href: 'https://quickpos.nimblesl.com', desc: 'Smart POS for modern retail' },
      ],
    },
    {
      title: 'Enterprise & AI',
      items: [
        { label: 'NimbleERP', href: 'https://nimbleerp.nimblesl.com', desc: 'Full-suite enterprise operations' },
        { label: 'BotStudio', href: 'https://botstudio.nimblesl.com', desc: 'Omnichannel AI chatbot builder' },
        { label: 'FlowAI', href: 'https://flowai.nimblesl.com', desc: 'AI-powered workflow automation' },
        { label: 'RestoDesk', href: 'https://restodesk.nimblesl.com', desc: 'Complete F&B operations platform' },
      ],
    },
  ],
  cta: { label: 'Product Showroom', desc: 'View all 12 live product demos', href: '/solutions', accent: '#3B82F6' },
};

interface MegaMenuProps {
  type: 'services' | 'solutions';
  onClose: () => void;
}

function MegaMenu({ type, onClose }: MegaMenuProps) {
  const data = type === 'services' ? SERVICES_MEGA : SOLUTIONS_MEGA;
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.18, ease: 'easeOut' }}
      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[700px] rounded-2xl overflow-hidden"
      style={{
        background: isDark ? 'rgba(13,18,32,0.98)' : 'rgba(255,255,255,0.99)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        border: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(0,0,0,0.09)',
        boxShadow: isDark
          ? '0 20px 60px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.04)'
          : '0 8px 40px rgba(0,0,0,0.1), 0 2px 8px rgba(0,0,0,0.06)',
      }}
      onMouseLeave={onClose}
    >
      {/* Top divider accent */}
      <div style={{ height: 2, background: `linear-gradient(90deg, transparent, ${data.cta.accent}60, transparent)` }} />

      <div className="grid grid-cols-2 gap-0 p-6 pb-4">
        {data.sections.map((section, si) => (
          <div key={section.title} style={{ paddingRight: si === 0 ? 24 : 0, paddingLeft: si === 1 ? 24 : 0, borderLeft: si === 1 ? `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'}` : 'none' }}>
            <div
              className="text-[10px] font-bold uppercase tracking-widest mb-3"
              style={{ color: isDark ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.35)', fontFamily: 'var(--font-mono)' }}
            >
              {section.title}
            </div>
            <div className="flex flex-col gap-0.5">
              {section.items.map((item) => {
                const isExternal = item.href.startsWith('http');
                const cls = "mega-item group flex flex-col gap-0.5 px-3 py-2.5 rounded-xl transition-all duration-150";
                const content = (
                  <>
                    <span className="text-sm font-semibold transition-colors duration-150" style={{ color: 'var(--text)' }}>
                      {item.label}
                    </span>
                    <span className="text-xs" style={{ color: 'var(--text-3)' }}>{item.desc}</span>
                  </>
                );
                return isExternal ? (
                  <a key={item.href} href={item.href} target="_blank" rel="noopener noreferrer" onClick={onClose} className={cls}>
                    {content}
                  </a>
                ) : (
                  <Link key={item.href} href={item.href} onClick={onClose} className={cls}>
                    {content}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* CTA strip */}
      <div
        className="mx-5 mb-5 p-4 rounded-xl flex items-center justify-between gap-4"
        style={{
          background: isDark ? `${data.cta.accent}10` : `${data.cta.accent}0D`,
          border: `1px solid ${data.cta.accent}35`,
        }}
      >
        <div>
          <div className="text-sm font-semibold" style={{ color: 'var(--text)' }}>{data.cta.label}</div>
          <div className="text-xs mt-0.5" style={{ color: 'var(--text-2)' }}>{data.cta.desc}</div>
        </div>
        <Link
          href={data.cta.href}
          onClick={onClose}
          className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all duration-150 hover:opacity-90 hover:scale-[1.02]"
          style={{ background: data.cta.accent, color: 'white', boxShadow: `0 4px 12px ${data.cta.accent}40` }}
        >
          Try it <ArrowRight size={12} />
        </Link>
      </div>
    </motion.div>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMega, setActiveMega] = useState<'services' | 'solutions' | null>(null);
  const [mobileSubmenu, setMobileSubmenu] = useState<'services' | 'solutions' | null>(null);
  const [announcementVisible, setAnnouncementVisible] = useState(true);
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const { scrollY } = useScroll();

  // Theme-aware nav background
  const navBgDark = useTransform(scrollY, [0, 80], ['rgba(10,14,26,0)', 'rgba(10,14,26,0.96)']);
  const navBgLight = useTransform(scrollY, [0, 80], ['rgba(248,250,252,0)', 'rgba(248,250,252,0.97)']);
  const navBg = theme === 'dark' ? navBgDark : navBgLight;
  const navBlur = useTransform(scrollY, [0, 80], ['blur(0px)', 'blur(16px)']);

  useEffect(() => {
    const unsub = scrollY.on("change", (v) => setScrolled(v > 20));
    return unsub;
  }, [scrollY]);

  useEffect(() => {
    setMobileOpen(false);
    setActiveMega(null);
    setMobileSubmenu(null);
  }, [pathname]);

  const borderColor = scrolled
    ? theme === 'dark' ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.08)'
    : 'transparent';

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50"
        style={{ backgroundColor: navBg, backdropFilter: navBlur, WebkitBackdropFilter: navBlur }}
      >
        {/* Announcement Bar — desktop/tablet only, hidden on mobile per design */}
        <AnimatePresence>
          {announcementVisible && (
            <motion.div
              initial={{ height: 38, opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="hidden md:block overflow-hidden relative"
              style={{
                background: 'linear-gradient(90deg, var(--bg) 0%, var(--surface-2) 30%, var(--surface) 50%, var(--surface-2) 70%, var(--bg) 100%)',
                borderBottom: '1px solid rgba(59,130,246,0.2)',
              }}
            >
              {/* Shimmer sweep */}
              <motion.div
                animate={{ x: ['-120%', '220%'] }}
                transition={{ duration: 3.5, repeat: Infinity, repeatDelay: 2, ease: 'easeInOut' }}
                style={{
                  position: 'absolute', inset: 0,
                  width: '40%',
                  background: 'linear-gradient(90deg, transparent, var(--overlay-sm), transparent)',
                  pointerEvents: 'none',
                }}
              />

              <div className="container flex items-center justify-between gap-4" style={{ height: 38 }}>
                <div style={{ flex: 1 }} />

                {/* Center content */}
                <Link
                  href="/tools/project-estimator"
                  className="flex items-center gap-2.5 group"
                  style={{ textDecoration: 'none' }}
                >
                  {/* Live badge */}
                  <span
                    className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest"
                    style={{
                      background: 'rgba(16,185,129,0.12)',
                      color: '#10B981',
                      border: '1px solid rgba(16,185,129,0.35)',
                    }}
                  >
                    <motion.span
                      animate={{ opacity: [1, 0.3, 1] }}
                      transition={{ duration: 1.4, repeat: Infinity }}
                      style={{ width: 5, height: 5, borderRadius: '50%', background: '#10B981', display: 'inline-block', flexShrink: 0 }}
                    />
                    Live
                  </span>

                  {/* Main text */}
                  <span
                    className="text-xs font-medium tracking-wide"
                    style={{ color: 'var(--text-2)' }}
                  >
                    Currently booking{' '}
                    <span style={{ fontWeight: 700, color: 'var(--blue-2)' }}>
                      2–3 new engagements
                    </span>{' '}
                    per quarter
                  </span>

                  {/* Divider */}
                  <span style={{ width: 1, height: 12, background: 'var(--border)', display: 'inline-block', flexShrink: 0 }} />

                  {/* CTA */}
                  <span
                    className="hidden sm:inline-flex items-center gap-1 text-xs font-semibold transition-all duration-200 group-hover:gap-1.5"
                    style={{ color: 'var(--blue-2)' }}
                  >
                    <Sparkles size={10} />
                    Get your free AI estimate
                    <ArrowRight size={11} />
                  </span>
                  <span
                    className="sm:hidden inline-flex items-center gap-1 text-xs font-semibold"
                    style={{ color: 'var(--blue-2)' }}
                  >
                    Free estimate <ArrowRight size={10} />
                  </span>
                </Link>

                {/* Dismiss */}
                <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
                  <button
                    onClick={() => setAnnouncementVisible(false)}
                    className="flex items-center justify-center rounded-md transition-colors"
                    style={{
                      width: 22, height: 22,
                      color: 'var(--text-3)',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--overlay-md)')}
                    onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
                    aria-label="Dismiss announcement"
                  >
                    <X size={12} />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div
          className="transition-all duration-300"
          style={{ borderBottom: `1px solid ${borderColor}`, marginTop: 5 }}
        >
          <div className="container px-5 md:px-8">
            <div className="flex items-center justify-between nav-main-row" style={{ height: 72 }}>
              {/* Logo */}
              <Link href="/" className="flex flex-shrink-0 items-center -ml-2">
                <Image
                  src="/assets/images/logo/logo.png"
                  alt="Nimble Software Lab"
                  width={76}
                  height={76}
                  className="nav-logo w-[64px] h-[64px] md:w-[76px] md:h-[76px]"
                  style={{
                    filter: theme === 'dark' ? 'brightness(0) invert(1)' : 'none',
                    display: 'block',
                  }}
                  priority
                />
              </Link>

              {/* Desktop Nav */}
              <nav className="hidden xl:flex items-center gap-0.5 flex-1 ml-6">
                {NAV_LINKS.map((link) => {
                  const hasMega = link.hasMega;
                  const megaType = link.label.toLowerCase() as 'services' | 'solutions';
                  const isActive = pathname.startsWith(link.href);

                  return (
                    <div
                      key={link.href}
                      className="relative shrink-0"
                      onMouseEnter={() => hasMega ? setActiveMega(megaType) : setActiveMega(null)}
                      onMouseLeave={() => !hasMega && setActiveMega(null)}
                    >
                      <Link
                        href={link.href}
                        className={cn(
                          'nav-link-animated flex items-center gap-1 px-2.5 py-2 rounded-lg text-sm font-medium transition-all duration-150 whitespace-nowrap shrink-0',
                          isActive ? 'text-white' : 'hover:bg-white/5'
                        )}
                        style={{ color: isActive ? 'var(--blue-2)' : 'var(--text-2)' }}
                        aria-current={isActive ? 'page' : undefined}
                        data-active={isActive ? 'true' : 'false'}
                      >
                        {link.label}
                        {hasMega && (
                          <ChevronDown size={13} className={cn('transition-transform duration-150', activeMega === megaType && 'rotate-180')} />
                        )}
                      </Link>

                      {hasMega && activeMega === megaType && (
                        <AnimatePresence>
                          <MegaMenu type={megaType} onClose={() => setActiveMega(null)} />
                        </AnimatePresence>
                      )}
                    </div>
                  );
                })}
              </nav>

              {/* Right side CTAs */}
              <div className="hidden xl:flex items-center gap-2 ml-auto flex-shrink-0">
                {/* Theme toggle */}
                <button
                  onClick={toggleTheme}
                  className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-150 hover:bg-white/8"
                  style={{ color: 'var(--text-3)' }}
                  aria-label="Toggle theme"
                >
                  {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
                </button>

                <Link
                  href="/contact"
                  className="px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-150"
                  style={{
                    color: 'var(--text-2)',
                    border: `1px solid ${theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.12)'}`,
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = theme === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)')}
                  onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
                >
                  Book a Call
                </Link>

                <MagneticWrapper>
                  <Link
                    href="/tools/project-estimator"
                    className="btn btn-emerald text-sm"
                    style={{ padding: '8px 16px' }}
                  >
                    <Sparkles size={13} />
                    Try AI Estimator
                  </Link>
                </MagneticWrapper>
              </div>

              {/* Mobile hamburger (Matches nimble-sl-design) */}
              <button
                className="xl:hidden flex items-center justify-center transition-colors"
                style={{ 
                  background: 'var(--surface)', 
                  border: '1px solid var(--border)', 
                  borderRadius: 8, 
                  color: 'var(--text)', 
                  padding: 8,
                  marginLeft: 'auto'
                }}
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={16} /> : <Menu size={16} />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="fixed inset-0 xl:hidden"
            style={{ background: 'var(--bg)', backdropFilter: 'blur(12px)', zIndex: 9999 }}
          >
            <div className="flex flex-col h-full px-5 pb-5 pt-12 md:p-5">
              {/* Header */}
              <div className="flex items-center justify-between pb-5" style={{ borderBottom: '1px solid var(--border)' }}>
                <Link href="/" onClick={() => setMobileOpen(false)} className="flex items-center flex-shrink-0 -ml-2">
                  <Image
                    src="/assets/images/logo/logo.png"
                    alt="Nimble Software Lab"
                    width={64}
                    height={64}
                    style={{
                      filter: theme === 'dark' ? 'brightness(0) invert(1)' : 'none',
                      display: 'block',
                    }}
                  />
                </Link>
                <button 
                  onClick={() => setMobileOpen(false)} 
                  className="flex items-center justify-center transition-colors"
                  style={{ 
                    background: 'var(--surface)', 
                    border: '1px solid var(--border)', 
                    borderRadius: 8, 
                    color: 'var(--text)', 
                    padding: 8
                  }}
                >
                  <X size={16} />
                </button>
              </div>

              {/* Links */}
              <div className="flex-1 overflow-y-auto py-5">
                <nav className="flex flex-col gap-1">
                  {NAV_LINKS.map((link, i) => {
                    const hasMega = link.hasMega;
                    const megaType = link.label.toLowerCase() as 'services' | 'solutions';
                    const isExpanded = mobileSubmenu === megaType;

                    return (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.06 }}
                        className="flex flex-col"
                      >
                        {hasMega ? (
                          <>
                            <button
                              onClick={() => setMobileSubmenu(isExpanded ? null : megaType)}
                              className="flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-medium transition-all text-left"
                              style={{
                                color: 'var(--text)',
                                background: pathname.startsWith(link.href) ? 'var(--overlay-md)' : 'transparent',
                              }}
                            >
                              <span>{link.label}</span>
                              <ChevronDown
                                size={15}
                                className={cn(
                                  'transition-transform duration-200',
                                  isExpanded ? 'rotate-180 text-blue-400' : 'text-neutral-400'
                                )}
                              />
                            </button>
                            <AnimatePresence initial={false}>
                              {isExpanded && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: 'auto', opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.2 }}
                                  className="overflow-hidden pl-4 pr-2 flex flex-col gap-1.5 mt-1 mb-2"
                                  style={{ borderLeft: '1px solid var(--border)' }}
                                >
                                  {/* Main Section Link */}
                                  <Link
                                    href={link.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold uppercase tracking-wider text-blue-400"
                                  >
                                    View All {link.label} <ArrowRight size={11} />
                                  </Link>

                                  {/* Sub-items */}
                                  {megaType === 'services' ? (
                                    SERVICES_MEGA.sections.map((sec) => (
                                      <div key={sec.title} className="mt-2 first:mt-0">
                                        <div className="px-3 text-[10px] font-bold uppercase tracking-wider text-neutral-500 mb-1" style={{ fontFamily: 'var(--font-mono)' }}>
                                          {sec.title}
                                        </div>
                                        {sec.items.map((item) => (
                                          <Link
                                            key={item.href}
                                            href={item.href}
                                            onClick={() => setMobileOpen(false)}
                                            className="flex flex-col px-3 py-2 rounded-lg hover:bg-white/5 transition-colors"
                                          >
                                            <span className="text-sm font-semibold text-white">{item.label}</span>
                                            <span className="text-xs text-neutral-400 mt-0.5">{item.desc}</span>
                                          </Link>
                                        ))}
                                      </div>
                                    ))
                                  ) : (
                                    SOLUTIONS_MEGA.sections.map((sec) => (
                                      <div key={sec.title} className="mt-2 first:mt-0">
                                        <div className="px-3 text-[10px] font-bold uppercase tracking-wider text-neutral-500 mb-1" style={{ fontFamily: 'var(--font-mono)' }}>
                                          {sec.title}
                                        </div>
                                        {sec.items.map((item) => {
                                          const isExternal = item.href.startsWith('http');
                                          const cls = "flex flex-col px-3 py-2 rounded-lg hover:bg-white/5 transition-colors";
                                          const inner = (
                                            <>
                                              <span className="text-sm font-semibold text-white flex items-center gap-1">
                                                {item.label} {isExternal && <ArrowRight size={10} className="-rotate-45 text-neutral-400" />}
                                              </span>
                                              <span className="text-xs text-neutral-400 mt-0.5">{item.desc}</span>
                                            </>
                                          );
                                          return isExternal ? (
                                            <a key={item.href} href={item.href} target="_blank" rel="noopener noreferrer" onClick={() => setMobileOpen(false)} className={cls}>
                                              {inner}
                                            </a>
                                          ) : (
                                            <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)} className={cls}>
                                              {inner}
                                            </Link>
                                          );
                                        })}
                                      </div>
                                    ))
                                  )}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </>
                        ) : (
                          <Link
                            href={link.href}
                            onClick={() => setMobileOpen(false)}
                            className="flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-medium transition-all"
                            style={{
                              color: 'var(--text)',
                              background: pathname.startsWith(link.href) ? 'var(--overlay-md)' : 'transparent',
                            }}
                          >
                            {link.label}
                            <ArrowRight size={14} style={{ color: 'var(--text-3)' }} />
                          </Link>
                        )}
                      </motion.div>
                    );
                  })}
                </nav>
              </div>

              {/* Bottom CTAs */}
              <div className="p-5 flex flex-col gap-3" style={{ borderTop: '1px solid var(--border)' }}>
                <Link href="/tools/project-estimator" onClick={() => setMobileOpen(false)}
                  className="btn btn-emerald w-full justify-center py-3.5 text-sm">
                  <Sparkles size={14} /> Try AI Estimator
                </Link>
                <Link href="/contact" onClick={() => setMobileOpen(false)}
                  className="btn btn-ghost w-full justify-center py-3.5 text-sm">
                  Book a Call
                </Link>
                <button onClick={toggleTheme} className="flex items-center justify-center gap-2 py-2 text-sm" style={{ color: 'var(--text-3)' }}>
                  {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
                  {theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
