import type { Metadata } from 'next';
import Link from 'next/link';
import { FileText, Award, CreditCard, Shield, Scale, HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service | Professional Engagement Rules — NimbleSL',
  description: 'Understand the standard software engineering delivery scopes, payment milestones, SLA structures, and intellectual property transfers.',
};

export default function TermsOfServicePage() {
  const lastUpdated = 'January 10, 2026';

  return (
    <main className="min-h-screen" style={{ background: 'var(--bg)' }}>
      {/* ── Hero ───────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-36 pb-16" style={{ borderBottom: '1px solid var(--border)' }}>
        <div className="mesh-bg" style={{ opacity: 0.2 }} />
        <div className="container relative">
          <div className="max-w-3xl">
            <span className="eyebrow mb-5 inline-flex">
              <span className="ev-dot" /> Master Service Agreement Rules
            </span>
            <h1
              className="mb-4 text-4xl font-bold tracking-tight font-display sm:text-5xl lg:text-6xl"
              style={{ color: 'var(--text)' }}
            >
              Terms of Service
            </h1>
            <p className="text-lg leading-relaxed" style={{ color: 'var(--text-2)' }}>
              These terms define our software engineering engagement rules, milestone scoping, 
              support retainers, and the legal framework under which we ship code.
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
            
            {/* Main Terms Content */}
            <div className="flex flex-col gap-12">
              
              {/* Section 1 */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold font-display mb-4 flex items-center gap-3" style={{ color: 'var(--text)' }}>
                  <Award size={20} style={{ color: 'var(--blue-2)' }} /> 1. Professional Service Delivery & Pilot Sprint
                </h2>
                <p className="text-sm sm:text-base leading-relaxed mb-4" style={{ color: 'var(--text-2)' }}>
                  Nimble Software Lab (&quot;NimbleSL&quot;) delivers engineering services under an Agile/Scrum sprint methodology. 
                  All custom software projects undergo detailed resource provisioning. To ensure absolute transparency, new customer 
                  agreements begin with a paid 1-week pilot sprint:
                </p>
                <ul className="flex flex-col gap-4 list-none p-0 m-0 pl-4 mb-4">
                  <li className="text-sm sm:text-base flex items-start gap-2.5" style={{ color: 'var(--text-2)' }}>
                    <span style={{ color: 'var(--blue-2)', marginTop: 2 }}>•</span>
                    <span><strong>Pilot Evaluation Scope</strong>: During the initial week, the client is granted visibility into project Slack standups, GitHub commit logs, and compilation pipelines. In the event that service quality fails to meet expectations, the client may terminate the engagement at the end of the first week, and all initial week fees will be waived.</span>
                  </li>
                  <li className="text-sm sm:text-base flex items-start gap-2.5" style={{ color: 'var(--text-2)' }}>
                    <span style={{ color: 'var(--blue-2)', marginTop: 2 }}>•</span>
                    <span><strong>Scope and Specifications</strong>: A formal Statement of Work (SOW) outlining technical specifications, team composition, milestones, and deliverables must be signed by both parties prior to proceeding beyond the pilot phase.</span>
                  </li>
                </ul>
              </div>

              {/* Section 2 */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold font-display mb-4 flex items-center gap-3" style={{ color: 'var(--text)' }}>
                  <CreditCard size={20} style={{ color: 'var(--blue-2)' }} /> 2. Financial Terms, Rates, and Billing Schedules
                </h2>
                <p className="text-sm sm:text-base leading-relaxed mb-4" style={{ color: 'var(--text-2)' }}>
                  We support three standard billing structures: Fixed-Price Milestones, Time &amp; Materials (Hourly), and Dedicated Augmented Teams.
                </p>
                <ul className="flex flex-col gap-4 list-none p-0 m-0 pl-4 mb-4">
                  <li className="text-sm sm:text-base flex items-start gap-2.5" style={{ color: 'var(--text-2)' }}>
                    <span style={{ color: 'var(--blue-2)', marginTop: 2 }}>•</span>
                    <span><strong>Milestone Invoices</strong>: Invoices are issued upon the completion and deployment of deliverables specified in the SOW. All milestone invoices are subject to Net-15 payment terms.</span>
                  </li>
                  <li className="text-sm sm:text-base flex items-start gap-2.5" style={{ color: 'var(--text-2)' }}>
                    <span style={{ color: 'var(--blue-2)', marginTop: 2 }}>•</span>
                    <span><strong>Rate Indexing</strong>: Project augmentations are billed bi-weekly based on standard rates. Invoices may be denominated in USD or BDT equivalent based on the pre-agreed financial rate scales detailed in the governing SOW.</span>
                  </li>
                  <li className="text-sm sm:text-base flex items-start gap-2.5" style={{ color: 'var(--text-2)' }}>
                    <span style={{ color: 'var(--blue-2)', marginTop: 2 }}>•</span>
                    <span><strong>Late Payment Action</strong>: NimbleSL reserves the right to suspend development sprints and deployment pipeline access in the event that invoices remain unpaid for 30 calendar days past their respective due date.</span>
                  </li>
                </ul>
              </div>

              {/* Section 3 */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold font-display mb-4 flex items-center gap-3" style={{ color: 'var(--text)' }}>
                  <Shield size={20} style={{ color: 'var(--blue-2)' }} /> 3. Intellectual Property Rights & Ownership Transfers
                </h2>
                <p className="text-sm sm:text-base leading-relaxed mb-4" style={{ color: 'var(--text-2)' }}>
                  NimbleSL operates under a clean intellectual property transfer standard:
                </p>
                <ul className="flex flex-col gap-4 list-none p-0 m-0 pl-4 mb-4">
                  <li className="text-sm sm:text-base flex items-start gap-2.5" style={{ color: 'var(--text-2)' }}>
                    <span style={{ color: 'var(--blue-2)', marginTop: 2 }}>•</span>
                    <span><strong>Transfer of Ownership</strong>: Upon the complete payment and clearance of all outstanding balances for the project, all ownership rights, titles, and interests in the custom code, design files, database configurations, and application repositories automatically and fully transfer to the client.</span>
                  </li>
                  <li className="text-sm sm:text-base flex items-start gap-2.5" style={{ color: 'var(--text-2)' }}>
                    <span style={{ color: 'var(--blue-2)', marginTop: 2 }}>•</span>
                    <span><strong>Open-Source Exclusions</strong>: Any pre-existing proprietary libraries, open-source frameworks (e.g. Next.js, Flutter), or third-party modules integrated into the system are governed by their respective licenses and are excluded from the sole IP ownership transfer.</span>
                  </li>
                </ul>
              </div>

              {/* Section 4 */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold font-display mb-4 flex items-center gap-3" style={{ color: 'var(--text)' }}>
                  <Scale size={20} style={{ color: 'var(--blue-2)' }} /> 4. Service Level Agreements (SLA) & Warranty Policies
                </h2>
                <p className="text-sm sm:text-base leading-relaxed mb-4" style={{ color: 'var(--text-2)' }}>
                  All software products built and deployed by NimbleSL receive a <strong>30-day post-launch warranty</strong>. 
                  This warranty covers the correction of code compilation errors, database integration failures, and functional 
                  bugs that deviate from the signed specifications. Ongoing post-warranty support retainers are offered under 
                  formal SLA agreements starting at $2,000/month:
                </p>
                <ul className="flex flex-col gap-4 list-none p-0 m-0 pl-4 mb-4">
                  <li className="text-sm sm:text-base flex items-start gap-2.5" style={{ color: 'var(--text-2)' }}>
                    <span style={{ color: 'var(--blue-2)', marginTop: 2 }}>•</span>
                    <span><strong>Priority 1 Issues (System Offline)</strong>: Initial response within 4 hours. Targeted bug fixes or hotpatch mitigation within 24 hours of notification.</span>
                  </li>
                  <li className="text-sm sm:text-base flex items-start gap-2.5" style={{ color: 'var(--text-2)' }}>
                    <span style={{ color: 'var(--blue-2)', marginTop: 2 }}>•</span>
                    <span><strong>Priority 2 Issues (Minor Bug / Request)</strong>: Response within 24 hours. Resolution scheduling mapped in upcoming development sprints.</span>
                  </li>
                </ul>
              </div>

              {/* Section 5 */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold font-display mb-4 flex items-center gap-3" style={{ color: 'var(--text)' }}>
                  <Scale size={20} style={{ color: 'var(--blue-2)' }} /> 5. Governing Law and Dispute Jurisdiction
                </h2>
                <p className="text-sm sm:text-base leading-relaxed mb-4" style={{ color: 'var(--text-2)' }}>
                  These Terms of Service, along with any related Statements of Work (SOWs) and Master Service Agreements (MSAs), 
                  shall be governed by and construed in accordance with the laws of the People&apos;s Republic of Bangladesh, 
                  excluding its conflicts of law principles. Any dispute, claim, or controversy arising out of or in connection 
                  with these terms, including their validity or termination, shall be referred to and resolved exclusively by 
                  the courts of competent jurisdiction located in Dhaka, Bangladesh.
                </p>
              </div>

            </div>

            {/* Sidebar Details Card */}
            <div className="card p-6 flex flex-col gap-6" style={{ width: '100%', position: 'sticky', top: 100 }}>
              <div>
                <h3 className="text-base font-bold mb-2" style={{ color: 'var(--text)' }}>Contract Framework</h3>
                <p className="text-xs" style={{ color: 'var(--text-2)', lineHeight: 1.6 }}>
                  SOWs and SLA agreements executed in parallel with these Terms govern the operational team sizes, specific rates, and timelines.
                </p>
              </div>
              <div style={{ height: 1, background: 'var(--border)' }} />
              <div>
                <h3 className="text-sm font-bold mb-2" style={{ color: 'var(--text)' }}>Agreement Support</h3>
                <p className="text-xs mb-3" style={{ color: 'var(--text-2)', lineHeight: 1.6 }}>
                  For inquiries regarding Master Service Agreement drafting, customization, or corporate B2B reviews:
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
