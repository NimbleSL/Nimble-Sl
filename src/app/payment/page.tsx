import type { Metadata } from 'next';
import { ShieldCheck } from 'lucide-react';
import { PaymentForm } from './PaymentForm';

export const metadata: Metadata = {
  title: 'Pay Online — NimbleSL',
  description: 'Pay for WizzenAI and Nimble Software Lab services securely online via SSLCommerz using card, bKash, Nagad, Rocket or internet banking.',
};

export default function PaymentPage() {
  return (
    <main className="min-h-screen" style={{ background: 'var(--bg)' }}>
      <section className="relative overflow-hidden pt-36 pb-12" style={{ borderBottom: '1px solid var(--border)' }}>
        <div className="mesh-bg" style={{ opacity: 0.2 }} />
        <div className="container relative">
          <div className="max-w-3xl">
            <span className="eyebrow mb-5 inline-flex">
              <span className="ev-dot" /> Secure Checkout
            </span>
            <h1
              className="mb-4 text-4xl font-bold tracking-tight font-display sm:text-5xl"
              style={{ color: 'var(--text)' }}
            >
              Pay Online
            </h1>
            <p className="text-lg leading-relaxed flex items-start gap-2" style={{ color: 'var(--text-2)' }}>
              <ShieldCheck size={22} style={{ color: 'var(--blue-2)', flexShrink: 0, marginTop: 3 }} />
              Pay the amount from your quotation or invoice. Payments are processed securely by SSLCommerz.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <PaymentForm />
        </div>
      </section>
    </main>
  );
}
