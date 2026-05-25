export interface INavItem {
  label: string;
  href: string;
  description?: string;
}

export interface INavSection {
  title: string;
  items: INavItem[];
}

export interface IMegaMenu {
  sections: INavSection[];
  featured?: {
    title: string;
    description: string;
    href: string;
    accent: string;
  };
}

export const navigationConfig = {
  services: {
    sections: [
      {
        title: 'Development',
        items: [
          { label: 'Custom Software', href: '/services/custom-software-development', description: 'Bespoke platforms & enterprise systems' },
          { label: 'Web Applications', href: '/services/web-application-development', description: 'Angular, Next.js, React — SSR-first' },
          { label: 'Mobile Apps', href: '/services/mobile-app-development', description: 'Flutter & React Native, offline-first' },
        ],
      },
      {
        title: 'Specializations',
        items: [
          { label: 'AI & Machine Learning', href: '/services/ai-machine-learning', description: 'RAG, LLMs, fraud detection, NLP' },
          { label: 'Cloud & DevOps', href: '/services/cloud-solutions-devops', description: 'AWS, GCP, CI/CD, Kubernetes' },
          { label: 'UI/UX Design', href: '/services/ui-ux-design', description: 'Design systems, Figma to production' },
        ],
      },
    ],
    featured: {
      title: 'AI Project Estimator',
      description: 'Get scope, timeline & cost in 3 minutes — powered by AI.',
      href: '/tools/project-estimator',
      accent: '#10B981',
    },
  },
  solutions: {
    sections: [
      {
        title: 'FinTech & Banking',
        items: [
          { label: 'PayFlow', href: '/solutions/payflow', description: 'Digital banking platform' },
          { label: 'ClaimWise', href: '/solutions/claimwise', description: 'InsurTech platform' },
          { label: 'FraudShield AI', href: '/solutions/fraudshield', description: 'AI fraud detection' },
        ],
      },
      {
        title: 'Enterprise & Operations',
        items: [
          { label: 'FieldOps', href: '/solutions/fieldops', description: 'Field force automation' },
          { label: 'AuthGate', href: '/solutions/authgate', description: 'Enterprise IAM' },
          { label: 'HireSync', href: '/solutions/hiresync', description: 'Digital recruitment' },
          { label: 'PropNest', href: '/solutions/propnest', description: 'PropTech platform' },
        ],
      },
    ],
    featured: {
      title: 'Product Showroom',
      description: 'Try all 11 production-grade demos live.',
      href: '/solutions',
      accent: '#3B82F6',
    },
  },
} as const;
