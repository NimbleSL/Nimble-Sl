import type { Metadata } from 'next';
import Link from 'next/link';
import { RotateCcw, CheckCircle2, XCircle, Clock, Truck, Mail } from 'lucide-react';
import { COMPANY, DELIVERY, REFUND } from '@/lib/constants/company';

export const metadata: Metadata = {
  title: 'Return & Refund Policy — NimbleSL',
  description: `Return, cancellation and refund rules for ${COMPANY.LEGAL_NAME} software products and services. Approved refunds are processed within ${REFUND.PROCESSING_DAYS}.`,
};

const bullet = (
  <span style={{ color: 'var(--blue-2)', marginTop: 2 }}>•</span>
);

export default function RefundPolicyPage() {
  const lastUpdated = 'October 18, 2026';

  return (
    <main className="min-h-screen" style={{ background: 'var(--bg)' }}>
      {/* ── Hero ───────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-36 pb-16" style={{ borderBottom: '1px solid var(--border)' }}>
        <div className="mesh-bg" style={{ opacity: 0.2 }} />
        <div className="container relative">
          <div className="max-w-3xl">
            <span className="eyebrow mb-5 inline-flex">
              <span className="ev-dot" /> Payments &amp; Refunds
            </span>
            <h1
              className="mb-4 text-4xl font-bold tracking-tight font-display sm:text-5xl lg:text-6xl"
              style={{ color: 'var(--text)' }}
            >
              Return &amp; Refund Policy
            </h1>
            <p className="text-lg leading-relaxed" style={{ color: 'var(--text-2)' }}>
              This policy explains when payments made to {COMPANY.LEGAL_NAME} for software products
              (including WizzenAI) and software development services are eligible for a refund, and how
              long a refund takes.
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

            <div className="flex flex-col gap-12">

              {/* Section 1 */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold font-display mb-4 flex items-center gap-3" style={{ color: 'var(--text)' }}>
                  <CheckCircle2 size={20} style={{ color: 'var(--blue-2)' }} /> 1. Eligible for Refund
                </h2>
                <ul className="flex flex-col gap-4 list-none p-0 m-0 pl-4 mb-4">
                  <li className="text-sm sm:text-base flex items-start gap-2.5" style={{ color: 'var(--text-2)' }}>
                    {bullet}
                    <span><strong>Not delivered</strong>: The product, license or service was paid for but not delivered within the delivery time stated below.</span>
                  </li>
                  <li className="text-sm sm:text-base flex items-start gap-2.5" style={{ color: 'var(--text-2)' }}>
                    {bullet}
                    <span><strong>Duplicate or wrong payment</strong>: The same invoice was paid more than once, or an amount higher than the invoiced amount was charged.</span>
                  </li>
                  <li className="text-sm sm:text-base flex items-start gap-2.5" style={{ color: 'var(--text-2)' }}>
                    {bullet}
                    <span><strong>Cancellation before work starts</strong>: The order is cancelled in writing before the license is activated or before project work has started.</span>
                  </li>
                  <li className="text-sm sm:text-base flex items-start gap-2.5" style={{ color: 'var(--text-2)' }}>
                    {bullet}
                    <span><strong>Not as described</strong>: The delivered product materially differs from the agreed quotation or specification and we are unable to fix it within the warranty period.</span>
                  </li>
                </ul>
              </div>

              {/* Section 2 */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold font-display mb-4 flex items-center gap-3" style={{ color: 'var(--text)' }}>
                  <XCircle size={20} style={{ color: 'var(--blue-2)' }} /> 2. Not Eligible for Refund
                </h2>
                <ul className="flex flex-col gap-4 list-none p-0 m-0 pl-4 mb-4">
                  <li className="text-sm sm:text-base flex items-start gap-2.5" style={{ color: 'var(--text-2)' }}>
                    {bullet}
                    <span>Software licenses or subscriptions (including WizzenAI) that have already been activated or used.</span>
                  </li>
                  <li className="text-sm sm:text-base flex items-start gap-2.5" style={{ color: 'var(--text-2)' }}>
                    {bullet}
                    <span>Project milestones that have been delivered and accepted by the client.</span>
                  </li>
                  <li className="text-sm sm:text-base flex items-start gap-2.5" style={{ color: 'var(--text-2)' }}>
                    {bullet}
                    <span>Third-party costs paid on the client&apos;s behalf (domains, hosting, app store fees, paid APIs).</span>
                  </li>
                </ul>
              </div>

              {/* Section 3 */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold font-display mb-4 flex items-center gap-3" style={{ color: 'var(--text)' }}>
                  <RotateCcw size={20} style={{ color: 'var(--blue-2)' }} /> 3. How to Request a Return or Refund
                </h2>
                <p className="text-sm sm:text-base leading-relaxed mb-4" style={{ color: 'var(--text-2)' }}>
                  Email <a href={`mailto:${COMPANY.EMAIL}`} style={{ color: 'var(--blue-2)' }}>{COMPANY.EMAIL}</a> or
                  call <a href={COMPANY.PHONE_HREF} style={{ color: 'var(--blue-2)' }}>{COMPANY.PHONE}</a> within{' '}
                  <strong>{REFUND.REQUEST_WINDOW_DAYS} days</strong> of payment with your invoice number, transaction ID and
                  the reason for the request. Since our products are digital, a &quot;return&quot; means we deactivate the
                  license or stop the service; nothing needs to be shipped back.
                </p>
              </div>

              {/* Section 4 */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold font-display mb-4 flex items-center gap-3" style={{ color: 'var(--text)' }}>
                  <Clock size={20} style={{ color: 'var(--blue-2)' }} /> 4. Refund Timeline
                </h2>
                <p className="text-sm sm:text-base leading-relaxed mb-4" style={{ color: 'var(--text-2)' }}>
                  Once a refund is approved, it is processed within <strong>{REFUND.PROCESSING_DAYS}</strong>.
                  The money is returned to the original payment method (card, mobile banking or bank account) used
                  at checkout. Your bank or mobile financial service may take additional time to show the amount in
                  your account.
                </p>
              </div>

              {/* Section 5 */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold font-display mb-4 flex items-center gap-3" style={{ color: 'var(--text)' }}>
                  <Truck size={20} style={{ color: 'var(--blue-2)' }} /> 5. Delivery Time
                </h2>
                <ul className="flex flex-col gap-4 list-none p-0 m-0 pl-4 mb-4">
                  <li className="text-sm sm:text-base flex items-start gap-2.5" style={{ color: 'var(--text-2)' }}>
                    {bullet}
                    <span><strong>Inside Dhaka</strong>: within {DELIVERY.INSIDE_DHAKA_DAYS} days of payment.</span>
                  </li>
                  <li className="text-sm sm:text-base flex items-start gap-2.5" style={{ color: 'var(--text-2)' }}>
                    {bullet}
                    <span><strong>Outside Dhaka</strong>: within {DELIVERY.OUTSIDE_DHAKA_DAYS} days of payment.</span>
                  </li>
                </ul>
                <p className="text-sm sm:text-base leading-relaxed" style={{ color: 'var(--text-2)' }}>
                  Software products and licenses are delivered by email, download link or account access. Custom
                  development work follows the milestone dates in the signed quotation.
                </p>
              </div>

            </div>

            {/* Sidebar */}
            <div className="card p-6 flex flex-col gap-6" style={{ width: '100%', position: 'sticky', top: 100 }}>
              <div>
                <h3 className="text-base font-bold mb-2" style={{ color: 'var(--text)' }}>At a glance</h3>
                <p className="text-xs" style={{ color: 'var(--text-2)', lineHeight: 1.6 }}>
                  Refunds: {REFUND.PROCESSING_DAYS}<br />
                  Delivery: Inside Dhaka {DELIVERY.INSIDE_DHAKA_DAYS} days · Outside Dhaka {DELIVERY.OUTSIDE_DHAKA_DAYS} days
                </p>
              </div>
              <div style={{ height: 1, background: 'var(--border)' }} />
              <div>
                <h3 className="text-sm font-bold mb-2 flex items-center gap-2" style={{ color: 'var(--text)' }}>
                  <Mail size={14} /> Refund Support
                </h3>
                <a href={`mailto:${COMPANY.EMAIL}`} className="text-xs font-semibold hover:underline" style={{ color: 'var(--blue-2)' }}>
                  {COMPANY.EMAIL}
                </a>
              </div>
              <div style={{ height: 1, background: 'var(--border)' }} />
              <div className="text-xs" style={{ color: 'var(--text-2)', lineHeight: 1.6 }}>
                See also our <Link href="/terms" style={{ color: 'var(--blue-2)' }}>Terms &amp; Conditions</Link> and{' '}
                <Link href="/privacy-policy" style={{ color: 'var(--blue-2)' }}>Privacy Policy</Link>.
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
