import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, XCircle } from 'lucide-react';
import { COMPANY, DELIVERY } from '@/lib/constants/company';

export const runtime = 'edge';

export const metadata: Metadata = {
  title: 'Payment Status — NimbleSL',
  robots: { index: false },
};

export default async function PaymentResultPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string; tran_id?: string }>;
}) {
  const { status, tran_id: tranId } = await searchParams;
  const success = status === 'success';

  return (
    <main className="min-h-screen flex items-center" style={{ background: 'var(--bg)' }}>
      <div className="container pt-36 pb-20">
        <div className="card max-w-xl mx-auto text-center" style={{ padding: 40 }}>
          {success ? (
            <CheckCircle2 size={48} style={{ color: '#10B981', margin: '0 auto 16px' }} />
          ) : (
            <XCircle size={48} style={{ color: '#EF4444', margin: '0 auto 16px' }} />
          )}
          <h1 className="text-3xl font-bold font-display mb-3" style={{ color: 'var(--text)' }}>
            {success ? 'Payment Successful' : status === 'cancelled' ? 'Payment Cancelled' : 'Payment Failed'}
          </h1>
          <p className="text-sm leading-relaxed mb-2" style={{ color: 'var(--text-2)' }}>
            {success
              ? `Thank you. We will deliver within ${DELIVERY.INSIDE_DHAKA_DAYS} days (Inside Dhaka) or ${DELIVERY.OUTSIDE_DHAKA_DAYS} days (Outside Dhaka) and email you the details.`
              : `No money was taken. You can try again, or contact us at ${COMPANY.EMAIL}.`}
          </p>
          {tranId && (
            <p className="text-xs font-mono mb-6" style={{ color: 'var(--text-3)' }}>Transaction ID: {tranId}</p>
          )}
          <div className="flex gap-3 justify-center flex-wrap">
            {!success && <Link href="/payment" className="btn btn-primary">Try Again</Link>}
            <Link href="/" className="btn btn-ghost">Back to Home</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
