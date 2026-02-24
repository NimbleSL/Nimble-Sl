export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  metrics: { label: string; value: string }[];
  color: string;
}

export const CASE_STUDIES_DATA: CaseStudy[] = [
  {
    id: 'propsol15',
    title: 'PropSol15 - A 360° Public Property & Services Ecosystem',
    client: 'Undisclosed',
    industry: 'Real Estate / PropTech',
    description: 'PropSol15 is a public-facing, end-to-end property solution platform that brings the entire real estate lifecycle into a single digital ecosystem, designed for multi-country deployment.',
    challenge: 'Property journeys are typically fragmented across listing portals, agents, interior services, and legal document vetting. This fragmentation results in poor UX, low conversion, trust issues, and operational inefficiency.',
    solution: 'PropSol15 was designed as an API-first, microservices-based 360° property ecosystem, combining AI-driven personalization, Elasticsearch-powered discovery, and human-in-the-loop moderation.',
    results: [
      'Sub-second geo-search and personalized discovery',
      '90% OAuth success rate',
      '<2 minutes median eKYC completion',
      'Increased user engagement via AI-driven recommendations'
    ],
    technologies: ['Angular', 'Flutter', '.NET', 'Elasticsearch', 'Redis', 'PostgreSQL'],
    metrics: [
      { label: 'eKYC Time', value: '<2m' },
      { label: 'OAuth Success', value: '90%' }
    ],
    color: 'blue'
  },
  {
    id: 'wallet15',
    title: 'Wallet15 - Global Digital Wallet & Business Banking',
    client: 'Undisclosed',
    industry: 'FinTech / Financial Services',
    description: 'Wallet15 is a fintech-grade digital wallet and business banking platform designed to operate globally and serve individuals, freelancers, students, SMEs, and registered businesses.',
    challenge: 'Traditional banking platforms focus only on payments, require multiple third-party tools for company registration, offer expensive cross-border options, and depend on legacy systems that slow innovation.',
    solution: 'Wallet15 is a modular, global fintech platform that supports both personal and business financial ecosystems, powered by Java-based core digital banking services and Flutter mobile applications.',
    results: [
      'Faster onboarding for businesses and freelancers',
      'Reduced dependency on third-party business tools',
      'Increased adoption through all-in-one financial services',
      'Improved cross-border payment efficiency and transparency'
    ],
    technologies: ['Java', 'Flutter', 'REST APIs', 'Multi-currency Engine'],
    metrics: [
      { label: 'Global Processing', value: 'Real-time' },
      { label: 'Target Segments', value: '4+' }
    ],
    color: 'green'
  },
  {
    id: 'sfa15',
    title: 'SFA15 - Smart Field Force Automation Platform',
    client: 'Multinational Corporations',
    industry: 'Logistics / Supply Chain',
    description: 'A comprehensive platform built to digitize and optimize large-scale sales and distribution operations for multinational corporations and local enterprises.',
    challenge: 'Organizations faced manual stock tracking, paper-based receipts, high error rates in sales calculation, limited visibility into SR movement, and inefficient workflows with no offline support.',
    solution: 'An offline-first, enterprise-grade digital field force ecosystem with web-based administration and mobile execution, featuring automated stock and sales calculation and real-time location tracking.',
    results: [
      '40–45% reduction in operational costs',
      'Significant reduction in manual calculation errors',
      'Faster sales execution and distributor settlement cycles',
      'Real-time transparency across sales, stock, and field activities'
    ],
    technologies: ['NestJS', 'React', 'Flutter', 'MySQL', 'Redis'],
    metrics: [
      { label: 'Cost Reduction', value: '45%' },
      { label: 'Manual Errors', value: 'Reduced' }
    ],
    color: 'orange'
  },
  {
    id: 'fdetect15',
    title: 'fDetect15 - AI Fraud Detection System',
    client: 'Leading Insurance Company',
    industry: 'Insurance / InsurTech',
    description: 'A multi-modal AI platform designed to identify fraudulent health insurance claims using deep learning, OCR, and relational graph patterns.',
    challenge: 'The provider faced evolving fraud strategies, slow manual investigation, and black-box AI models that lacked explainability for regulators and investigators.',
    solution: 'A sequential multi-model pipeline (Autoencoder + Bio_ClinicalBERT + Graph Neural Networks) providing explainable fraud decisions via REST APIs.',
    results: [
      '94–96% Detection Accuracy',
      'Processing time reduced to 30–60 seconds per claim',
      'Explainable AI via SHAP values for regulatory trust',
      'Detected collusive network-level fraud'
    ],
    technologies: ['PyTorch', 'FastAPI', 'Graph Attention Networks', 'Bio_ClinicalBERT', 'React'],
    metrics: [
      { label: 'Accuracy', value: '96%' },
      { label: 'Processing', value: '<1m' }
    ],
    color: 'purple'
  },
  {
    id: 'authnexus4',
    title: 'AuthNexus4 - Enterprise Identity & Access Management',
    client: 'Enterprise Organizations',
    industry: 'Enterprise / Cybersecurity',
    description: 'A production-grade Identity and Access Management platform built as the central authentication backbone for interconnected enterprise applications.',
    challenge: 'Fragmented digital platforms caused duplicate accounts, password fatigue, manual onboarding, and lack of cross-system audit trails across departments.',
    solution: 'A secure Identity Provider with CRM integration for organization data sync, centralizing user management, role mapping, and multi-factor authentication enforcement.',
    results: [
      'Sub-second authentication redirect across partner platforms',
      'Automated department and role syncing',
      '90%+ authentication success rate',
      'Unified cross-system audit trails for logins'
    ],
    technologies: ['Angular', '.NET Core', 'SQL Server', 'Redis', 'Docker'],
    metrics: [
      { label: 'Auth Success', value: '90%+' },
      { label: 'Auth Speed', value: '<1s' }
    ],
    color: 'indigo'
  },
  {
    id: 'civicrecruit7',
    title: 'CivicRecruit7 - Digital Recruitment Platform',
    client: 'Large Enterprise',
    industry: 'Enterprise / HR Tech',
    description: 'A comprehensive digital platform managing the complete recruitment lifecycle for enterprise positions involving thousands of candidates.',
    challenge: 'Manual data collection, complex quota-based distribution, disconnected examination phases, and error-prone paper-based attendance reconciliation.',
    solution: 'A full-stack web platform using Clean Architecture, featuring automated merit list generation, dynamic reporting, and quota-compliant seat distribution.',
    results: [
      'Handles thousands of concurrent candidate workflows',
      'Zero manual tabulation errors',
      'Sub-30-second official report generation',
      'Automated quota distribution with remainders'
    ],
    technologies: ['Angular', '.NET Core', 'SQL Server', 'Redis', 'Docker'],
    metrics: [
      { label: 'Report Gen', value: '<30s' },
      { label: 'Errors', value: '0%' }
    ],
    color: 'teal'
  },
  {
    id: 'experteval11',
    title: 'ExpertEval11 - Expert Evaluation Case Management',
    client: 'Enterprise Organizations',
    industry: 'Enterprise / Case Management',
    description: 'An enterprise-grade platform digitizing the complete expert evaluation workflow with forensic-grade audit trails.',
    challenge: 'Unstructured paper documentation led to errors, disconnected media, missing audit trails, and lack of real-time analytics for supervisors.',
    solution: 'A modular web app with strict permission enforcement, AI-assisted narrative generation, analytics integration, and cloud media management.',
    results: [
      'Complete forensic pre-deletion audit trail',
      'AI-assisted reports saving significant team time',
      'Real-time operational analytics dashboard',
      'Passive physiological data anomaly detection'
    ],
    technologies: ['Angular', '.NET Core', 'SQL Server', 'Redis', 'Docker'],
    metrics: [
      { label: 'Audit Trail', value: '100%' },
      { label: 'Media Storage', value: 'Unlimited' }
    ],
    color: 'rose'
  },
  {
    id: 'fieldlaw16',
    title: 'FieldLaw16 - Field Case Automation',
    client: 'Enterprise Organizations',
    industry: 'Enterprise / Legal Services',
    description: 'A cloud-connected platform automating the complete field case lifecycle, from initial documentation to final submission.',
    challenge: 'Hours of post-shift reporting, manual hand-offs, disconnected systems, and lack of digital signature capabilities.',
    solution: 'A Clean Architecture platform featuring dynamic document generation, AI narrative scoring, digital signatures, and real-time stakeholder integration.',
    results: [
      'Reports generated in <2 minutes',
      'Automated case templates reducing typing',
      'Cross-department real-time tracking',
      'Digital signatures accepted in workflow'
    ],
    technologies: ['Angular', '.NET Core', 'SQL Server', 'Redis', 'Docker'],
    metrics: [
      { label: 'Report Gen', value: '<2m' },
      { label: 'Signatures', value: 'Digital' }
    ],
    color: 'slate'
  },
  {
    id: 'victimshield9',
    title: 'VictimShield9 - Case Protection Platform',
    client: 'Enterprise Organizations',
    industry: 'Enterprise / Case Management',
    description: 'An integrated digital case management system orchestrating response workflows across multiple departments and service providers.',
    challenge: 'Disconnected paper forms delayed critical orders and made cross-department collaboration difficult during time-sensitive windows.',
    solution: 'An end-to-end digital tracker utilizing event-driven synchronization, dynamic PDF generation, and secure API integration.',
    results: [
      'Zero paper submissions',
      'Real-time case visibility across connected departments',
      'Immutable audit trails',
      'Evidence-based safety planning'
    ],
    technologies: ['Angular', '.NET Core', 'SQL Server', 'Redis', 'Docker'],
    metrics: [
      { label: 'Paper Usage', value: 'Zero' },
      { label: 'Sync Speed', value: 'Real-time' }
    ],
    color: 'cyan'
  },
  {
    id: 'insurance15',
    title: 'Insurance15 - Digital-First Insurance Platform',
    client: 'Leading Insurance Company',
    industry: 'Insurance / InsurTech',
    description: 'A mobile-first, digital insurance platform built to modernize and automate core customer journeys including policy purchase, premium payment, and claims.',
    challenge: 'The provider faced manual claim submission, in-person policy purchase, high turnaround time for service requests, data entry errors, and poor digital adoption.',
    solution: 'An end-to-end digital ecosystem featuring secure authentication, OCR-powered document processing, automated premium calculation, and fully digital claim tracking.',
    results: [
      'Significant reduction in manual paperwork and processing time',
      'Faster claim submissions and improved turnaround time',
      'Higher customer satisfaction due to real-time updates',
      'Reduced operational overhead for customer service teams'
    ],
    technologies: ['.NET', 'Flutter', 'Docker', 'PostgreSQL', 'OCR', 'Microservices'],
    metrics: [
      { label: 'Processing Time', value: 'Faster' },
      { label: 'Digital Adoption', value: 'Higher' }
    ],
    color: 'emerald'
  }
];
