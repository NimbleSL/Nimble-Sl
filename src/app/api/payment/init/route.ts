import { NextRequest, NextResponse } from 'next/server';
import { PAYABLE_PRODUCTS } from '@/lib/constants/company';
import { getSslCommerzConfig } from '@/lib/sslcommerz';

export const runtime = 'edge';

export async function POST(request: NextRequest) {
  const config = getSslCommerzConfig();
  if (!config) {
    return NextResponse.json(
      { error: 'Online payment is temporarily unavailable. Please contact info@nimblesl.com.' },
      { status: 503 },
    );
  }

  try {
    const body = await request.json();
    const { productId, invoiceNo, amount, name, email, phone, address, city, location } = body;

    const product = PAYABLE_PRODUCTS.find((p) => p.id === productId);
    const total = Number(amount);

    if (!product || !invoiceNo || !name || !email || !phone || !address || !city) {
      return NextResponse.json({ error: 'Please fill in all required fields.' }, { status: 400 });
    }
    if (!Number.isFinite(total) || total < 10 || total > 500000) {
      return NextResponse.json({ error: 'Amount must be between ৳10 and ৳500,000.' }, { status: 400 });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 });
    }

    const origin = request.nextUrl.origin;
    const tranId = `NSL-${Date.now()}-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;
    const callback = (status: string) => `${origin}/api/payment/callback?status=${status}`;

    const params = new URLSearchParams({
      store_id: config.storeId,
      store_passwd: config.storePassword,
      total_amount: total.toFixed(2),
      currency: 'BDT',
      tran_id: tranId,
      success_url: callback('success'),
      fail_url: callback('fail'),
      cancel_url: callback('cancel'),
      cus_name: String(name),
      cus_email: String(email),
      cus_phone: String(phone),
      cus_add1: String(address),
      cus_city: String(city),
      cus_country: 'Bangladesh',
      shipping_method: 'NO',
      num_of_item: '1',
      product_name: product.name,
      product_category: 'Software',
      product_profile: 'non-physical-goods',
      value_a: String(invoiceNo).slice(0, 255),
      value_b: location === 'outside' ? 'Outside Dhaka' : 'Inside Dhaka',
    });

    const res = await fetch(config.initUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params.toString(),
    });
    const data = await res.json();

    if (data.status !== 'SUCCESS' || !data.GatewayPageURL) {
      console.error('SSLCommerz init failed:', data.failedreason);
      return NextResponse.json({ error: 'Could not start payment. Please try again.' }, { status: 502 });
    }

    return NextResponse.json({ url: data.GatewayPageURL, tranId });
  } catch (error) {
    console.error('Payment init error:', error);
    return NextResponse.json({ error: 'Could not start payment. Please try again.' }, { status: 500 });
  }
}
