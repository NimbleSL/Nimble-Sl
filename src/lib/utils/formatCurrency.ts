export function formatCurrency(amount: number, currency = 'USD'): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatRange(low: number, high: number, currency = 'USD'): string {
  return `${formatCurrency(low, currency)} – ${formatCurrency(high, currency)}`;
}
