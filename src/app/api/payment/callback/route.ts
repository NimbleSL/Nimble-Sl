import { NextRequest, NextResponse } from 'next/server';
import { getSslCommerzConfig } from '@/lib/sslcommerz';

export const runtime = 'edge';

// SSLCommerz POSTs the customer back here after success / failure / cancel.
export async function POST(request: NextRequest) {
  const status = request.nextUrl.searchParams.get('status');
  const form = await request.formData();
  const tranId = String(form.get('tran_id') ?? '');
  const valId = String(form.get('val_id') ?? '');

  const result = new URL('/payment/result', request.nextUrl.origin);
  if (tranId) result.searchParams.set('tran_id', tranId);

  let outcome = status === 'cancel' ? 'cancelled' : 'failed';

  if (status === 'success' && valId) {
    const config = getSslCommerzConfig();
    if (config) {
      try {
        const url = new URL(config.validationUrl);
        url.searchParams.set('val_id', valId);
        url.searchParams.set('store_id', config.storeId);
        url.searchParams.set('store_passwd', config.storePassword);
        url.searchParams.set('format', 'json');
        const res = await fetch(url);
        const data = await res.json();
        if ((data.status === 'VALID' || data.status === 'VALIDATED') && data.tran_id === tranId) {
          outcome = 'success';
        }
      } catch (error) {
        console.error('SSLCommerz validation error:', error);
      }
    }
  }

  result.searchParams.set('status', outcome);
  return NextResponse.redirect(result, 303);
}
