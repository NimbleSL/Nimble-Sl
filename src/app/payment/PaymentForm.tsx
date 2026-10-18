'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Lock, Truck, Package } from 'lucide-react';
import { DELIVERY, PAYABLE_PRODUCTS, REFUND } from '@/lib/constants/company';

interface IPaymentForm {
  productId: string;
  invoiceNo: string;
  amount: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  location: 'inside' | 'outside';
}

const labelStyle = {
  display: 'block',
  fontSize: 12,
  fontWeight: 600,
  color: 'var(--text-2)',
  marginBottom: 6,
  fontFamily: 'var(--font-mono)',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.05em',
};

const inputStyle = {
  width: '100%',
  padding: '11px 14px',
  background: 'var(--surface-2)',
  border: '1px solid var(--border-2)',
  borderRadius: 8,
  color: 'var(--text)',
  fontSize: 14,
  outline: 'none',
  transition: 'border-color 0.15s ease',
  fontFamily: 'inherit',
};

export function PaymentForm() {
  const [form, setForm] = useState<IPaymentForm>({
    productId: PAYABLE_PRODUCTS[0].id,
    invoiceNo: '',
    amount: '',
    name: '',
    email: '',
    phone: '',
    address: '',
    city: 'Dhaka',
    location: 'inside',
  });
  const [agreed, setAgreed] = useState(false);
  const [status, setStatus] = useState<'idle' | 'sending' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const product = PAYABLE_PRODUCTS.find((p) => p.id === form.productId) ?? PAYABLE_PRODUCTS[0];
  const deliveryDays = form.location === 'inside' ? DELIVERY.INSIDE_DHAKA_DAYS : DELIVERY.OUTSIDE_DHAKA_DAYS;

  const handleChange = (field: keyof IPaymentForm) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) return;
    setStatus('sending');
    setErrorMsg('');
    try {
      const res = await fetch('/api/payment/init', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok || !data.url) throw new Error(data.error || 'Could not start payment');
      window.location.href = data.url;
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Could not start payment');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Left: details */}
      <div className="lg:col-span-2 card" style={{ padding: 28 }}>
        <h2 className="text-lg font-bold mb-5" style={{ color: 'var(--text)' }}>1. Product / Service</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          {PAYABLE_PRODUCTS.map((p) => (
            <label
              key={p.id}
              className="card"
              style={{
                padding: 16,
                cursor: 'pointer',
                borderColor: form.productId === p.id ? 'var(--blue-2)' : undefined,
              }}
            >
              <input
                type="radio"
                name="product"
                value={p.id}
                checked={form.productId === p.id}
                onChange={handleChange('productId')}
                style={{ marginRight: 8 }}
              />
              <strong style={{ color: 'var(--text)', fontSize: 14 }}>{p.name}</strong>
              <p style={{ fontSize: 12, color: 'var(--text-2)', marginTop: 6, lineHeight: 1.5 }}>{p.description}</p>
              <div className="flex items-center gap-1.5" style={{ marginTop: 8, fontSize: 12, color: '#10B981', fontWeight: 600 }}>
                <Package size={12} /> Stock: {p.stock}
              </div>
            </label>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <div>
            <label htmlFor="pay-invoice" style={labelStyle}>Quotation / Invoice No *</label>
            <input id="pay-invoice" required value={form.invoiceNo} onChange={handleChange('invoiceNo')} placeholder="NSL-INV-1024" style={inputStyle} />
          </div>
          <div>
            <label htmlFor="pay-amount" style={labelStyle}>Amount (BDT) *</label>
            <input id="pay-amount" required type="number" min={10} step="0.01" value={form.amount} onChange={handleChange('amount')} placeholder="As per your quotation" style={inputStyle} />
          </div>
        </div>

        <h2 className="text-lg font-bold mb-5" style={{ color: 'var(--text)' }}>2. Billing Details</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="pay-name" style={labelStyle}>Full Name *</label>
            <input id="pay-name" required value={form.name} onChange={handleChange('name')} style={inputStyle} />
          </div>
          <div>
            <label htmlFor="pay-email" style={labelStyle}>Email *</label>
            <input id="pay-email" required type="email" value={form.email} onChange={handleChange('email')} style={inputStyle} />
          </div>
          <div>
            <label htmlFor="pay-phone" style={labelStyle}>Phone *</label>
            <input id="pay-phone" required type="tel" value={form.phone} onChange={handleChange('phone')} placeholder="01XXXXXXXXX" style={inputStyle} />
          </div>
          <div>
            <label htmlFor="pay-location" style={labelStyle}>Location *</label>
            <select id="pay-location" value={form.location} onChange={handleChange('location')} style={{ ...inputStyle, cursor: 'pointer' }}>
              <option value="inside">Inside Dhaka</option>
              <option value="outside">Outside Dhaka</option>
            </select>
          </div>
          <div>
            <label htmlFor="pay-address" style={labelStyle}>Address *</label>
            <input id="pay-address" required value={form.address} onChange={handleChange('address')} style={inputStyle} />
          </div>
          <div>
            <label htmlFor="pay-city" style={labelStyle}>City *</label>
            <input id="pay-city" required value={form.city} onChange={handleChange('city')} style={inputStyle} />
          </div>
        </div>
      </div>

      {/* Right: summary */}
      <div className="card flex flex-col gap-5" style={{ padding: 24, alignSelf: 'start', position: 'sticky', top: 100 }}>
        <h2 className="text-lg font-bold" style={{ color: 'var(--text)' }}>Order Summary</h2>
        <div className="text-sm flex flex-col gap-2" style={{ color: 'var(--text-2)' }}>
          <div className="flex justify-between gap-4"><span>Item</span><span style={{ color: 'var(--text)', textAlign: 'right' }}>{product.name}</span></div>
          <div className="flex justify-between gap-4"><span>Stock</span><span style={{ color: '#10B981' }}>{product.stock}</span></div>
          <div className="flex justify-between gap-4"><span>Reference</span><span style={{ color: 'var(--text)' }}>{form.invoiceNo || '—'}</span></div>
          <div style={{ height: 1, background: 'var(--border)', margin: '6px 0' }} />
          <div className="flex justify-between gap-4 font-bold" style={{ color: 'var(--text)' }}>
            <span>Total</span><span>৳ {form.amount ? Number(form.amount).toLocaleString('en-BD') : '0'}</span>
          </div>
        </div>

        <div className="text-xs flex items-start gap-2" style={{ color: 'var(--text-2)', lineHeight: 1.6 }}>
          <Truck size={14} style={{ color: 'var(--blue-2)', flexShrink: 0, marginTop: 2 }} />
          <span>
            <strong>Delivery:</strong> within {deliveryDays} days ({form.location === 'inside' ? 'Inside Dhaka' : 'Outside Dhaka'}).
            Inside Dhaka {DELIVERY.INSIDE_DHAKA_DAYS} days · Outside Dhaka {DELIVERY.OUTSIDE_DHAKA_DAYS} days.
            Refunds are processed within {REFUND.PROCESSING_DAYS}.
          </span>
        </div>

        <label className="text-xs flex items-start gap-2" style={{ color: 'var(--text-2)', lineHeight: 1.6, cursor: 'pointer' }}>
          <input type="checkbox" required checked={agreed} onChange={(e) => setAgreed(e.target.checked)} style={{ marginTop: 3 }} />
          <span>
            I have read and agree to the{' '}
            <Link href="/terms" target="_blank" style={{ color: 'var(--blue-2)' }}>Terms &amp; Conditions</Link>,{' '}
            <Link href="/refund-policy" target="_blank" style={{ color: 'var(--blue-2)' }}>Return &amp; Refund Policy</Link> and{' '}
            <Link href="/privacy-policy" target="_blank" style={{ color: 'var(--blue-2)' }}>Privacy Policy</Link>.
          </span>
        </label>

        <button
          type="submit"
          className="btn btn-primary"
          disabled={!agreed || status === 'sending'}
          style={{ width: '100%', justifyContent: 'center', opacity: !agreed || status === 'sending' ? 0.6 : 1 }}
        >
          <Lock size={14} /> {status === 'sending' ? 'Redirecting…' : 'Pay Now'}
        </button>

        {status === 'error' && (
          <p className="text-xs" style={{ color: '#EF4444' }}>{errorMsg}</p>
        )}

        <div style={{ background: '#fff', borderRadius: 8, padding: 6 }}>
          <Image
            src="/images/payment/sslcommerz-banner.png"
            alt="Accepted payment methods — verified by SSLCommerz"
            width={5235}
            height={586}
            sizes="360px"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>
      </div>
    </form>
  );
}
