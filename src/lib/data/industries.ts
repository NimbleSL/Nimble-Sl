export interface IIndustry {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  icon: string;
  projectCount: string;
  challenges: string[];
  solutions: string[];
  relatedProducts: string[];
  relatedCaseStudies: string[];
  compliance?: string[];
  accent: string;
  tagVariant: string;
}

export const industries: IIndustry[] = [
  {
    slug: 'fintech-banking',
    name: 'FinTech & Banking',
    tagline: 'Digital-First Financial Infrastructure',
    description: 'From digital wallets to algorithmic trading platforms, we build the financial infrastructure of tomorrow. Secure, compliant, and built for scale.',
    icon: 'bank',
    projectCount: '14 projects',
    challenges: [
      'Legacy core banking systems slowing innovation velocity',
      'PCI-DSS compliance and security requirements at every layer',
      'Multi-currency and cross-border payment complexity',
      'Real-time fraud detection without false positives',
    ],
    solutions: ['payflow', 'fraudshield'],
    relatedProducts: ['payflow'],
    relatedCaseStudies: ['payflow', 'fraudshield-ai'],
    compliance: ['PCI-DSS', 'GDPR', 'AML/KYC', 'Open Banking'],
    accent: '#3B82F6',
    tagVariant: 'blue',
  },
  {
    slug: 'healthcare-medtech',
    name: 'Healthcare & MedTech',
    tagline: 'HIPAA-Compliant Healthcare Software',
    description: 'HIPAA-compliant platforms, telemedicine, EHR systems, and medical IoT. Engineering that keeps patient data safe while improving care delivery.',
    icon: 'heart',
    projectCount: '7 projects',
    challenges: [
      'HIPAA compliance across all data handling and transmission',
      'EHR/EMR integration with legacy hospital systems',
      'Real-time clinical data processing and alerting',
      'Patient privacy and data residency requirements',
    ],
    solutions: ['caseflow'],
    relatedProducts: [],
    relatedCaseStudies: [],
    compliance: ['HIPAA', 'HL7/FHIR', 'GDPR', 'HITECH'],
    accent: '#10B981',
    tagVariant: 'emerald',
  },
  {
    slug: 'insurance',
    name: 'Insurance & InsurTech',
    tagline: 'Digital-First Insurance Platforms',
    description: 'From digital claim processing to AI fraud detection. We\'ve built systems that process claims in seconds and detect fraud with 96% accuracy.',
    icon: 'shield',
    projectCount: '6 projects',
    challenges: [
      'Manual, paper-based claim processing causing delays',
      'Fraud costing billions annually across the industry',
      'Legacy policy management systems resisting modernization',
      'Regulatory compliance across multiple jurisdictions',
    ],
    solutions: ['claimwise', 'fraudshield'],
    relatedProducts: ['claimwise', 'fraudshield'],
    relatedCaseStudies: ['claimwise', 'fraudshield-ai'],
    compliance: ['Solvency II', 'GDPR', 'IAIS', 'AML'],
    accent: '#06B6D4',
    tagVariant: 'cyan',
  },
  {
    slug: 'real-estate',
    name: 'Real Estate & PropTech',
    tagline: '360° Property Technology',
    description: 'Property discovery platforms, agent management, and AI-powered recommendations. Sub-second geo-search across thousands of listings.',
    icon: 'home',
    projectCount: '5 projects',
    challenges: [
      'Fragmented property data across multiple portals',
      'Manual agent processes slowing deal velocity',
      'Trust and verification in property transactions',
      'Geospatial search performance at scale',
    ],
    solutions: ['propnest'],
    relatedProducts: ['propnest'],
    relatedCaseStudies: ['propnest'],
    compliance: ['GDPR', 'eKYC/AML', 'Fair Housing'],
    accent: '#F43F5E',
    tagVariant: 'rose',
  },
  {
    slug: 'logistics-supply-chain',
    name: 'Logistics & Supply Chain',
    tagline: 'Field Force & Supply Chain Automation',
    description: 'Offline-first field force automation, GPS tracking, and real-time inventory management. Built for teams that work where internet doesn\'t.',
    icon: 'truck',
    projectCount: '6 projects',
    challenges: [
      'No connectivity in field operations causing workflow breaks',
      'Manual stock tracking and calculation errors',
      'Limited visibility into field agent activities',
      'Paper-based receipts creating reconciliation nightmares',
    ],
    solutions: ['fieldops'],
    relatedProducts: ['fieldops'],
    relatedCaseStudies: ['fieldops'],
    compliance: ['ISO 27001', 'GDPR'],
    accent: '#10B981',
    tagVariant: 'emerald',
  },
  {
    slug: 'enterprise-saas',
    name: 'Enterprise SaaS',
    tagline: 'Multi-Tenant Enterprise Platforms',
    description: 'CRMs, ERPs, IAM platforms, and multi-tenant SaaS architectures. We build the operational backbone of enterprise organizations.',
    icon: 'building',
    projectCount: '12 projects',
    challenges: [
      'Complex multi-tenant data isolation requirements',
      'Legacy ERP systems blocking digital transformation',
      'Identity and access management across dozens of apps',
      'Performance at enterprise scale',
    ],
    solutions: ['authgate', 'hiresync', 'caseflow'],
    relatedProducts: ['authgate', 'hiresync'],
    relatedCaseStudies: ['authgate'],
    compliance: ['SOC 2', 'GDPR', 'ISO 27001'],
    accent: '#A855F7',
    tagVariant: 'purple',
  },
];
