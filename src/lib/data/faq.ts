export interface IFAQItem {
  question: string;
  answer: string;
  category: string;
}

export const faqItems: IFAQItem[] = [
  {
    question: 'How does the 1-week pilot sprint work?',
    answer: 'We start all software engineering engagements with a paid 1-week pilot sprint. This permits clients to review our code hygiene, slack communications, and release velocity with zero long-term commitment. If the pilot fails to meet expectations, you may terminate the contract and all week-one fees are fully waived.',
    category: 'Process',
  },
  {
    question: 'What is the average project timeline and delivery structure?',
    answer: 'We structure timelines around bi-weekly sprints. MVPs typically compile and launch in 6–12 weeks, while large-scale enterprise integrations or multi-tenant SaaS networks average 3–6 months. Scope, sprint backlogs, and milestone acceptance criteria are locked in corresponding Statements of Work (SOWs) before development cycles begin.',
    category: 'Process',
  },
  {
    question: 'Can we request dedicated timezone overlap for standups?',
    answer: 'Yes. Our team in Dhaka (GMT+6) offers dedicated overlap hours for synchronous sprint check-ins, covering US East Coast, German/EU, UK, and Australian timezones. Async communication is maintained via shared Slack channels, Jira/ClickUp backlog boards, and weekly compiled demo releases.',
    category: 'Working with us',
  },
  {
    question: 'How is client IP (Intellectual Property) transferred and secured?',
    answer: 'Intellectual Property ownership transfers automatically and fully to the client legal entity upon final milestone payment settlement. This includes code repositories, compiled files, database schemas, and visual assets. Pre-existing proprietary frameworks remain licensed to the client, while bespoke features are assigned exclusively. All files are developed in secure private repositories with MFA enforced.',
    category: 'Legal & IP',
  },
  {
    question: 'What pricing models and payment structures do you support?',
    answer: 'We offer three models: Fixed-Price (milestone-locked deliverables), Time & Materials (hourly consulting for agile requirements), and Dedicated Teams (monthly engineering staff augmentation). Standard invoicing follows Net-15 terms from the milestone delivery date, payable in USD or BDT bank transfers.',
    category: 'Pricing',
  },
  {
    question: 'Do you employ subcontractors or external agency resources?',
    answer: 'No. All software engineering, product design, QA automation, and operations are managed by full-time, in-house team members working directly from our Gulshan-2, Dhaka hub. We enforce strict in-house code reviews and maintain high standards of accountability.',
    category: 'Team',
  },
  {
    question: 'How do you enforce GDPR, HIPAA, and industry compliance?',
    answer: 'We sign corporate DPAs and HIPAA Business Associate Agreements (BAAs). For HIPAA compliance, we isolate server nodes, deploy database columns with AES-256 encryption, configure automated data access audits, and implement secure JWT credentials for personal health records. GDPR compliance includes data portability routes, minimization pipelines, and EU staging isolates.',
    category: 'Compliance',
  },
  {
    question: 'What SLA terms are included for post-launch maintenance?',
    answer: 'Every project launch includes a 30-day warranty covering bug fixes and schema adjustments. Post-warranty support retainers start at $2,000/month, providing SLA-backed coverage: 4-hour response on Priority 1 system-offline critical issues and 24-hour response on routine configuration requests.',
    category: 'Post-Launch',
  },
  {
    question: 'How accurate are estimations from the AI Project Estimator?',
    answer: 'The AI Project Estimator compiles historical metrics from 50+ actual completed projects. While it provides a realistic breakdown (+/- 15% variance) based on inputs, a final project proposal is verified and issued by our technical architecture leads.',
    category: 'AI Estimator',
  },
];
