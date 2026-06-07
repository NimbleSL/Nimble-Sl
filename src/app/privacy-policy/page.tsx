import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, Lock, Eye, FileText, Globe, Key } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy | Professional Data Security — NimbleSL',
  description: 'Learn about NimbleSL data privacy protocols, GDPR & HIPAA compliant structures, and full IP transfer guarantees.',
};

export default function PrivacyPolicyPage() {
  const lastUpdated = 'January 10, 2026';

  return (
    <main className="min-h-screen" style={{ background: 'var(--bg)' }}>
      {/* ── Hero ───────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-36 pb-16" style={{ borderBottom: '1px solid var(--border)' }}>
        <div className="mesh-bg" style={{ opacity: 0.2 }} />
        <div className="container relative">
          <div className="max-w-3xl">
            <span className="eyebrow mb-5 inline-flex">
              <span className="ev-dot" /> Regulatory Compliance
            </span>
            <h1
              className="mb-4 text-4xl font-bold tracking-tight font-display sm:text-5xl lg:text-6xl"
              style={{ color: 'var(--text)' }}
            >
              Privacy Policy
            </h1>
            <p className="text-lg leading-relaxed" style={{ color: 'var(--text-2)' }}>
              NimbleSL (Nimble Software Lab) operates under strict data security boundaries.
              This document outlines how we handle, process, and protect client configurations,
              brief details, and communication channels.
            </p>
            <div className="mt-6 text-xs font-mono" style={{ color: 'var(--text-3)' }}>
              LAST UPDATED: {lastUpdated}
            </div>
          </div>
        </div>
      </section>

      {/* ── Document Body ────────────────────────────────────────────── */}
      <section className="py-20">
        <div className="container">
          <div className="rg-sidebar-lg" style={{ gap: 56, alignItems: 'start' }}>
            
            {/* Main Policy Content */}
            <div className="flex flex-col gap-12">
              
              {/* Section 1 */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold font-display mb-4 flex items-center gap-3" style={{ color: 'var(--text)' }}>
                  <Shield size={20} style={{ color: 'var(--blue-2)' }} /> 1. Scope of Services and Regulatory Alignment
                </h2>
                <p className="text-sm sm:text-base leading-relaxed mb-4" style={{ color: 'var(--text-2)' }}>
                  This Privacy Policy governs the processing, retention, and security of data collected, managed, or accessed by 
                  <strong> Nimble Software Lab</strong> (&quot;NimbleSL&quot;) in the course of providing custom software engineering, 
                  product design, cloud infrastructure deployment, and technical consulting services. We cater to clients located 
                  in North America, the European Union, the United Kingdom, and the United Arab Emirates. All operations, including 
                  source code deployment and configuration management, are handled under strict security controls from our principal 
                  headquarters in Gulshan-2, Dhaka, Bangladesh.
                </p>
              </div>

              {/* Section 2 */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold font-display mb-4 flex items-center gap-3" style={{ color: 'var(--text)' }}>
                  <Lock size={20} style={{ color: 'var(--blue-2)' }} /> 2. Data Processor Designations & HIPAA/GDPR Protocols
                </h2>
                <p className="text-sm sm:text-base leading-relaxed mb-4" style={{ color: 'var(--text-2)' }}>
                  Depending on the client engagement model, NimbleSL may act as either a Data Processor or a Data Controller. 
                  We implement robust technical and organizational security measures designed to comply with key international regulatory frameworks:
                </p>
                <ul className="flex flex-col gap-4 list-none p-0 m-0 pl-4 mb-4">
                  <li className="text-sm sm:text-base flex items-start gap-2.5" style={{ color: 'var(--text-2)' }}>
                    <span style={{ color: 'var(--blue-2)', marginTop: 2 }}>•</span>
                    <span><strong>GDPR Compliance (EU/UK)</strong>: We execute standard contractual clauses (SCCs) to govern international transfers of Personal Data. Client-related metadata is isolated on designated regional database clusters, and we establish clear access controls ensuring zero unauthorized access by administrative personnel.</span>
                  </li>
                  <li className="text-sm sm:text-base flex items-start gap-2.5" style={{ color: 'var(--text-2)' }}>
                    <span style={{ color: 'var(--blue-2)', marginTop: 2 }}>•</span>
                    <span><strong>HIPAA Compliance (Healthcare)</strong>: For healthcare and med-tech software configurations, we act as a Business Associate. We enforce strict data minimization, deploy database tables with column-level Advanced Encryption Standard (AES-256), mandate secure JWT session keys, and maintain comprehensive audit logs to prevent and trace unauthorized access to Protected Health Information (PHI).</span>
                  </li>
                </ul>
              </div>

              {/* Section 3 */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold font-display mb-4 flex items-center gap-3" style={{ color: 'var(--text)' }}>
                  <Eye size={20} style={{ color: 'var(--blue-2)' }} /> 3. Data Minimization & Processing Scopes
                </h2>
                <p className="text-sm sm:text-base leading-relaxed mb-4" style={{ color: 'var(--text-2)' }}>
                  In accordance with the principle of data minimization, we collect only the information necessary to fulfill contractual obligations, process recruitment portfolios, or generate workload calculations:
                </p>
                <ul className="flex flex-col gap-4 list-none p-0 m-0 pl-4 mb-4">
                  <li className="text-sm sm:text-base flex items-start gap-2.5" style={{ color: 'var(--text-2)' }}>
                    <span style={{ color: 'var(--blue-2)', marginTop: 2 }}>•</span>
                    <span><strong>Project Estimator Portal</strong>: Information entered into our AI-powered workload assessment tool (e.g., industry vertical, technical specification, and scope attributes) is logged solely to calculate resource allocations. No persistent marketing trackers are injected into this assessment funnel.</span>
                  </li>
                  <li className="text-sm sm:text-base flex items-start gap-2.5" style={{ color: 'var(--text-2)' }}>
                    <span style={{ color: 'var(--blue-2)', marginTop: 2 }}>•</span>
                    <span><strong>Candidate Recruiting Data</strong>: Portfolios, contact records, and Curriculum Vitae (CV) files submitted via our careers form are handled on secure pipelines. Resume files are validated locally for PDF formatting and forwarded to HR routing servers for recruitment evaluation purposes only.</span>
                  </li>
                </ul>
              </div>

              {/* Section 4 */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold font-display mb-4 flex items-center gap-3" style={{ color: 'var(--text)' }}>
                  <Key size={20} style={{ color: 'var(--blue-2)' }} /> 4. IP Protection and Environment Segregation
                </h2>
                <p className="text-sm sm:text-base leading-relaxed mb-4" style={{ color: 'var(--text-2)' }}>
                  We prioritize the confidentiality and integrity of our clients&apos; intellectual property:
                </p>
                <ul className="flex flex-col gap-4 list-none p-0 m-0 pl-4 mb-4">
                  <li className="text-sm sm:text-base flex items-start gap-2.5" style={{ color: 'var(--text-2)' }}>
                    <span style={{ color: 'var(--blue-2)', marginTop: 2 }}>•</span>
                    <span><strong>Codebase Security</strong>: All custom software deliverables, server scripts, architectural diagrams, and databases are developed inside isolated staging sandboxes. Client source code is hosted on private repositories requiring multi-factor authentication (MFA).</span>
                  </li>
                  <li className="text-sm sm:text-base flex items-start gap-2.5" style={{ color: 'var(--text-2)' }}>
                    <span style={{ color: 'var(--blue-2)', marginTop: 2 }}>•</span>
                    <span><strong>Intellectual Property Rights</strong>: 100% of code ownership, compiled assets, proprietary modules, and database structures transfer directly to the client legal entity upon completion of milestone payments. NimbleSL retains no license, access privilege, or ongoing claims on client IP.</span>
                  </li>
                </ul>
              </div>

              {/* Section 5 */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold font-display mb-4 flex items-center gap-3" style={{ color: 'var(--text)' }}>
                  <Globe size={20} style={{ color: 'var(--blue-2)' }} /> 5. Data Disclosure & Access Restrictions
                </h2>
                <p className="text-sm sm:text-base leading-relaxed mb-4" style={{ color: 'var(--text-2)' }}>
                  NimbleSL enforces a strict zero-disclosure policy. We do not sell, rent, license, or disclose client data 
                  to third-party advertising companies or marketing aggregators. Disclosures only occur under direct, written 
                  authorization from the client (e.g., binding third-party hosting partners like AWS, GCP, Azure, or payment 
                  gateways like Stripe Connect). In the event of a legally binding government request, we notify the client 
                  immediately before disclosure, unless explicitly prohibited by law.
                </p>
              </div>

            </div>

            {/* Sidebar Details Card */}
            <div className="card p-6 flex flex-col gap-6" style={{ width: '100%', position: 'sticky', top: 100 }}>
              <div>
                <h3 className="text-base font-bold mb-2" style={{ color: 'var(--text)' }}>Data Security Measures</h3>
                <p className="text-xs" style={{ color: 'var(--text-2)', lineHeight: 1.6 }}>
                  Our development environments mandate TLS 1.3, continuous static code analysis (SAST), strict password hygiene, and isolated client database nodes.
                </p>
              </div>
              <div style={{ height: 1, background: 'var(--border)' }} />
              <div>
                <h3 className="text-sm font-bold mb-2" style={{ color: 'var(--text)' }}>Data Protection Officer</h3>
                <p className="text-xs mb-3" style={{ color: 'var(--text-2)', lineHeight: 1.6 }}>
                  For execution of standard Data Processing Agreements (DPAs) or Business Associate Agreements (BAAs):
                </p>
                <a href="mailto:info@nimblesl.com" className="text-xs font-semibold hover:underline" style={{ color: 'var(--blue-2)' }}>
                  info@nimblesl.com
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
