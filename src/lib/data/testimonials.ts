export interface ITestimonial {
  id: string;
  quote: string;
  name: string;
  title: string;
  company: string;
  rating: number;
  featured: boolean;
}

export const testimonials: ITestimonial[] = [
  {
    id: 'sarah-patel',
    quote: 'We came to NimbleSL with a half-broken fraud system and a 6-week deadline. They shipped a GNN-based model that hit 96% accuracy in production. No US shop quoted under $250K — Anik\'s team built it for a fifth of that.',
    name: 'Sarah Patel',
    title: 'VP Engineering',
    company: 'Blackstone Vale Insurance',
    rating: 5,
    featured: true,
  },
  {
    id: 'rosachy-client',
    quote: 'NimbleSL delivered our enterprise web application 3 weeks ahead of schedule. Their attention to detail and proactive communication made them an exceptional development partner.',
    name: 'Client Representative',
    title: 'CTO',
    company: 'Rosachy',
    rating: 5,
    featured: true,
  },
  {
    id: 'north-avenue-client',
    quote: 'The custom AI chatbot they built for our customer service resolved 40% of our tickets automatically. Absolutely brilliant engineering from a stellar team.',
    name: 'Client Representative',
    title: 'VP Product',
    company: 'North Avenue',
    rating: 5,
    featured: true,
  },
  {
    id: 'hayaacola-client',
    quote: 'We migrated our entire legacy infrastructure to AWS with zero downtime, thanks to Nimble. Highly recommended for complex cloud architectures.',
    name: 'Client Representative',
    title: 'Head of Engineering',
    company: 'HayaaCola',
    rating: 5,
    featured: false,
  },
  {
    id: 'ch15-client',
    quote: 'Outstanding mobile app development. They transformed our vision into a seamless cross-platform experience that our users love.',
    name: 'Client Representative',
    title: 'Founder',
    company: 'CH15',
    rating: 5,
    featured: false,
  },
  {
    id: 'wpedo-client',
    quote: 'Their expertise in modern web technologies helped us launch our platform faster than expected. Professional team with excellent technical skills.',
    name: 'Client Representative',
    title: 'Product Manager',
    company: 'WPEDO',
    rating: 5,
    featured: false,
  },
];
