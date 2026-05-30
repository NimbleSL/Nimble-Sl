import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { ComplianceBadges } from '@/components/ui/ComplianceBadge';
import { BrandMark } from '@/components/ui/BrandMark';
import { CodeSignature } from '@/components/ui/CodeSignature';

// Social icon SVGs (lucide-react doesn't include brand icons)
const LinkedinIcon = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
  </svg>
);

const FacebookIcon = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const GithubIcon = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
  </svg>
);

const FOOTER_LINKS = {
  Services: [
    { label: 'Custom Software', href: '/services/custom-software-development' },
    { label: 'Web Applications', href: '/services/web-application-development' },
    { label: 'Mobile Apps', href: '/services/mobile-app-development' },
    { label: 'AI & Machine Learning', href: '/services/ai-machine-learning' },
    { label: 'Cloud & DevOps', href: '/services/cloud-solutions-devops' },
    { label: 'UI/UX Design', href: '/services/ui-ux-design' },
  ],
  Solutions: [
    { label: 'PayFlow — FinTech', href: '/solutions/payflow' },
    { label: 'FraudShield AI', href: '/solutions/fraudshield' },
    { label: 'FieldOps', href: '/solutions/fieldops' },
    { label: 'ClaimWise', href: '/solutions/claimwise' },
    { label: 'AuthGate', href: '/solutions/authgate' },
    { label: 'View all 11 products →', href: '/solutions' },
  ],
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Blog / Insights', href: '/blog' },
    { label: 'Hire Developers', href: '/hire-developers' },
    { label: 'Careers', href: '/careers' },
    { label: 'FAQ', href: '/faq' },
  ],
  Tools: [
    { label: 'AI Project Estimator', href: '/tools/project-estimator' },
    { label: 'Compare Us', href: '/compare' },
    { label: 'Contact', href: '/contact' },
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
};

const TECH_BADGES = ['Angular', 'React', 'Next.js', 'Flutter', '.NET', 'Python', 'AWS', 'Docker'];

export function Footer() {
  return (
    <footer style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
      {/* Main footer */}
      <div className="container" style={{ padding: '80px 32px 64px' }}>
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Brand col */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <Link href="/" className="flex items-center mb-5 w-fit">
              <Image
                src="/assets/images/logo/logo.png"
                alt="Nimble Software Lab"
                width={52}
                height={52}
                style={{
                  width: 52,
                  height: 52,
                  filter: 'brightness(0) invert(1)',
                }}
              />
            </Link>

            <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--text-2)', maxWidth: 280 }}>
              Enterprise-grade software engineering from Dhaka, Bangladesh. 40–60% less than US/UK agencies. Zero compromise.
            </p>

            {/* Contact info */}
            <div className="flex flex-col gap-3 mb-6">
              <span className="flex items-center gap-2.5 text-sm" style={{ color: 'var(--text-3)' }}>
                <Mail size={13} style={{ color: 'var(--blue-2)', flexShrink: 0 }} />
                info@nimblesl.com
              </span>
              <a href="tel:+8801796109979" className="flex items-center gap-2.5 text-sm hover:opacity-80 transition-opacity" style={{ color: 'var(--text-3)' }}>
                <Phone size={13} style={{ color: 'var(--blue-2)', flexShrink: 0 }} />
                +880-1796-109979
              </a>
              <div className="flex items-start gap-2.5 text-sm" style={{ color: 'var(--text-3)' }}>
                <MapPin size={13} style={{ color: 'var(--blue-2)', flexShrink: 0, marginTop: 2 }} />
                <span>House-1, Road-34, Gulshan-2<br />Dhaka-1212, Bangladesh</span>
              </div>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-2">
              {[
                { icon: LinkedinIcon, href: 'https://www.linkedin.com/company/nimble-software-lab', label: 'LinkedIn' },
                { icon: FacebookIcon, href: 'https://www.facebook.com/nimblesl', label: 'Facebook' },
                { icon: GithubIcon, href: 'https://github.com', label: 'GitHub' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-150 hover:bg-white/10"
                  style={{ color: 'var(--text-3)', border: '1px solid var(--border)' }}
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-xs font-semibold uppercase tracking-widest mb-4"
                style={{ color: 'var(--text-3)', fontFamily: 'var(--font-mono)' }}>
                {category}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm transition-colors duration-150 hover:text-white"
                      style={{ color: 'var(--text-3)' }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Tech stack strip */}
        <div className="mt-16 pt-8" style={{ borderTop: '1px solid var(--border)' }}>
          <div className="text-xs mb-4" style={{ color: 'var(--text-3)', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            Technologies we ship with
          </div>
          <div className="flex flex-wrap gap-2">
            {TECH_BADGES.map((tech) => (
              <span key={tech} className="tag" style={{ fontSize: 11 }}>{tech}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid var(--border)' }}>
        <div className="container" style={{ padding: '20px 32px' }}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-xs" style={{ color: 'var(--text-3)' }}>
              © {new Date().getFullYear()} Nimble Software Lab. All rights reserved.
            </div>
            <div className="flex items-center gap-4">
              {/* Compliance badges */}
              <ComplianceBadges />
              <span className="text-xs" style={{ color: 'var(--text-3)' }}>
                Built with Next.js 15
              </span>
            </div>
          </div>
          <div style={{ textAlign: 'center', paddingTop: 12, fontSize: 12, color: 'var(--text-3)' }}>
            Crafted with <CodeSignature size="sm" />
          </div>
        </div>
      </div>

      {/* Watermark */}
      <div style={{
        position: 'absolute',
        bottom: -24,
        right: -16,
        opacity: 0.04,
        pointerEvents: 'none',
        userSelect: 'none',
      }}>
        <BrandMark size={220} glow={false} />
      </div>
    </footer>
  );
}
