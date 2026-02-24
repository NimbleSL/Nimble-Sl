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
    title: 'AuthNexus4 - Federated Identity & SSO Hub',
    client: 'Law Enforcement Agencies',
    industry: 'GovTech / Cybersecurity',
    description: 'A production-grade Federated Identity and Access Management platform built as the central authentication backbone for interconnected law enforcement applications.',
    challenge: 'Fragmented digital platforms caused duplicate accounts, password fatigue, manual onboarding, and lack of cross-system audit trails across agencies.',
    solution: 'A SAML 2.0 Identity Provider with integration into Salesforce for organization data sync, centralizing user management, role mapping, and 2FA enforcement.',
    results: [
      'Sub-second SSO redirect across partner platforms',
      'Automated Salesforce department syncing',
      '90%+ SAML success rate',
      'Unified cross-system audit trails for logins'
    ],
    technologies: ['ASP.NET Core', 'SAML 2.0', 'Salesforce OAuth', 'RabbitMQ', 'Entity Framework'],
    metrics: [
      { label: 'Auth Success', value: '90%+' },
      { label: 'SSO Speed', value: '<1s' }
    ],
    color: 'indigo'
  },
  {
    id: 'civicrecruit7',
    title: 'CivicRecruit7 - Digital Government Recruitment',
    client: 'Government Examination Authority',
    industry: 'GovTech / Public Sector',
    description: 'A comprehensive digital platform managing the complete recruitment lifecycle for law enforcement positions involving thousands of candidates.',
    challenge: 'Manual data collection, complex quota-based distribution, disconnected examination phases, and error-prone paper-based attendance reconciliation.',
    solution: 'A full-stack web platform using Clean Architecture, featuring automated merit list generation, dynamic RDLC reporting, and quota-compliant seat distribution.',
    results: [
      'Handles thousands of concurrent candidate workflows',
      'Zero manual tabulation errors',
      'Sub-30-second official report generation',
      'Automated quota distribution with remainders'
    ],
    technologies: ['Angular', '.NET Core', 'SQL Server', 'ag-Grid', 'Docker'],
    metrics: [
      { label: 'Report Gen', value: '<30s' },
      { label: 'Errors', value: '0%' }
    ],
    color: 'teal'
  },
  {
    id: 'experteval11',
    title: 'ExpertEval11 - DRE Case Management',
    client: 'Law Enforcement Agencies',
    industry: 'GovTech / Law Enforcement',
    description: 'An enterprise-grade platform digitizing the complete Drug Recognition Expert evaluation workflow with forensic-grade audit trails.',
    challenge: 'Unstructured paper documentation led to errors, disconnected media, missing audit trails, and lack of real-time analytics for supervisors.',
    solution: 'A modular web app with strict permission enforcement, AI-assisted narrative generation, Tableau integration, and AWS S3 media management.',
    results: [
      'Complete forensic pre-deletion audit trail',
      'AI-assisted reports saving significant officer time',
      'Real-time Tableau operational analytics',
      'Passive physiological data anomaly detection'
    ],
    technologies: ['ASP.NET Core', 'OpenAI GPT-4', 'Tableau', 'RabbitMQ', 'AWS S3'],
    metrics: [
      { label: 'Audit Trail', value: '100%' },
      { label: 'Media Storage', value: 'Unlimited' }
    ],
    color: 'rose'
  },
  {
    id: 'fieldlaw16',
    title: 'FieldLaw16 - DUI/DWI Case Automation',
    client: 'Law Enforcement Agencies',
    industry: 'GovTech / Law Enforcement',
    description: 'A cloud-connected platform automating the complete DUI/DWI case lifecycle, from roadside stops to judicial submission.',
    challenge: 'Hours of post-shift reporting, manual hand-offs, disconnected systems, and lack of digital signature capabilities vulnerable in court proceedings.',
    solution: 'A Clean Architecture platform featuring dynamic document generation, AI narrative scoring, digital signatures, and real-time District Attorney integration.',
    results: [
      'Court-ready reports generated in <2 minutes',
      'Automated case templates reducing typing',
      'Cross-jurisdiction real-time tracking',
      'Digital signatures accepted in judicial workflow'
    ],
    technologies: ['ASP.NET Core', 'Redis', 'TX TextControl', 'OpenAI', 'SAML 2.0'],
    metrics: [
      { label: 'Report Gen', value: '<2m' },
      { label: 'Signatures', value: 'Digital' }
    ],
    color: 'slate'
  },
  {
    id: 'victimshield9',
    title: 'VictimShield9 - Victim Protection Platform',
    client: 'Justice & Victim Services',
    industry: 'GovTech / Judicial Services',
    description: 'An integrated digital case management system orchestrating family violence response across law enforcement, courts, and victim services.',
    challenge: 'Disconnected paper forms delayed Emergency Protective Orders (EPOs) and made cross-agency collaboration difficult during critical safety windows.',
    solution: 'An end-to-end digital tracker utilizing event-driven synchronization, dynamic TX TextControl PDF generation, and SAML-based federation.',
    results: [
      'Zero paper EPO submissions',
      'Real-time case visibility across connected agencies',
      'Immutable judicial audit trails',
      'Evidence-based victim safety planning'
    ],
    technologies: ['ASP.NET Core', 'RabbitMQ', 'TX TextControl', 'Hangfire'],
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
