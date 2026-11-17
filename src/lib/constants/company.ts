// Legal & compliance details shown in the footer, About, Terms, Refund and Payment pages.
// Source: DSCC e-Trade Licence TRAD/DSCC/020205/2025.
export const COMPANY = {
  LEGAL_NAME: 'Nimble Software Lab Limited',
  BRAND_NAME: 'Nimble Software Lab',
  BUSINESS_TYPE: 'IT & Consultancy (Limited Company)',
  TRADE_LICENSE_NO: 'TRAD/DSCC/020205/2025',
  TRADE_LICENSE_AUTHORITY: 'Dhaka South City Corporation',
  // TIN certificate number — leave empty until provided; the footer hides it while empty.
  TIN_NO: '',
  MANAGING_DIRECTOR: 'Zannatunessa',
  CO_FOUNDERS: ['Md. Main Oddin Chisty', 'Md. Habibur Rahman'],
  REGISTERED_ADDRESS: '15, Bijoynagar, Dhaka-1000, Bangladesh',
  OFFICE_ADDRESS: 'House-1, Road-34, Gulshan-2, Dhaka-1212, Bangladesh',
  EMAIL: 'info@nimblesl.com',
  PHONE: '+880-1796-109979',
  PHONE_HREF: 'tel:+8801796109979',
} as const;

export const DELIVERY = {
  INSIDE_DHAKA_DAYS: 5,
  OUTSIDE_DHAKA_DAYS: 10,
} as const;

export const REFUND = {
  PROCESSING_DAYS: '7–10 working days',
  REQUEST_WINDOW_DAYS: 7,
} as const;

// Products sold via the payment gateway. Pricing is quotation-based (discussed with the client).
export const PAYABLE_PRODUCTS = [
  {
    id: 'wizzenai',
    name: 'WizzenAI — AI Chatbot',
    description: 'AI chatbot for websites and businesses: customer support, lead capture and FAQ automation.',
    stock: 'In stock',
  },
  {
    id: 'software-service',
    name: 'Software Development Service',
    description: 'Custom software, web, mobile and AI projects as per the agreed quotation / invoice.',
    stock: 'Available',
  },
] as const;
