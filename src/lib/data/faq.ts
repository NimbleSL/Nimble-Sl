export interface IFAQItem {
  question: string;
  answer: string;
  category: string;
}

export const faqItems: IFAQItem[] = [
  {
    question: 'How does the 1-week pilot work?',
    answer: 'We start every engagement with a paid 1-week pilot sprint. You see real code, real progress, and real communication from day one. If you\'re not satisfied after the first week, you don\'t pay for it — no questions asked.',
    category: 'Process',
  },
  {
    question: 'What is your typical project timeline?',
    answer: 'MVPs typically take 4–12 weeks. Standard enterprise projects run 3–6 months. Larger platforms with multiple modules may take 6–12 months. We lock scope, timeline, and milestones before development begins.',
    category: 'Process',
  },
  {
    question: 'Do you work with clients in different timezones?',
    answer: 'Yes. Our team in Dhaka (GMT+6) offers flexible overlap hours. We have 6-hour overlap with the UK, 5 hours with Germany, 3–4 hours with US East Coast, and 4 hours with Australia. Most clients prefer async-first with daily standups.',
    category: 'Working with us',
  },
  {
    question: 'Who owns the IP after the project?',
    answer: '100% of the intellectual property transfers to you upon project completion and final payment. This is written into our Master Service Agreement (MSA). We do not retain any ownership of your code, designs, or data.',
    category: 'Legal & IP',
  },
  {
    question: 'What is your pricing model?',
    answer: 'We offer three models: Fixed-Price (best for well-defined projects with clear scope), Time & Materials (best for evolving requirements), and Dedicated Team / Staff Augmentation (best for ongoing work and scaling). Rates range from $12–60/hr depending on seniority level.',
    category: 'Pricing',
  },
  {
    question: 'Do you use subcontractors or freelancers?',
    answer: 'Never. Our entire team is full-time, in-house, located in our Gulshan-2, Dhaka office. No subcontractors, no freelancers, no quality lottery. You communicate directly with the engineers building your product.',
    category: 'Team',
  },
  {
    question: 'Are you GDPR and HIPAA compliant?',
    answer: 'Yes. GDPR compliance is built into every project from day one — proper data handling, privacy by design, and the ability to handle EU data lawfully. For healthcare projects, we implement HIPAA-compliant infrastructure, data handling, and access controls.',
    category: 'Compliance',
  },
  {
    question: 'What happens after the project launches?',
    answer: 'We offer SLA-backed support retainers starting at $2,000/month, or a clean handoff with comprehensive documentation, deployment runbooks, and a 30-day warranty period. You choose what works best for your team.',
    category: 'Post-Launch',
  },
  {
    question: 'Can I try your products before committing?',
    answer: 'Absolutely. Every product in our showroom (PayFlow, FraudShield AI, FieldOps, etc.) runs on live infrastructure with real demo data. Log in, click around, and test the actual product — no sign-up required. Visit nimblesl.com/solutions.',
    category: 'Products',
  },
  {
    question: 'How accurate is the AI Project Estimator?',
    answer: 'Our AI Estimator is trained on data from 50+ real completed projects. Estimates are typically within 15–20% of final project cost. The more detail you provide in the description field, the more accurate the estimate. All estimates include a 15% scope-creep buffer.',
    category: 'AI Estimator',
  },
];
