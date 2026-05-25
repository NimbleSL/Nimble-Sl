export interface ISkill {
  slug: string;
  name: string;
  category: string;
  description: string;
  experience: string;
  projectCount: number;
  rateRange: { low: number; high: number };
  relatedProjects: string[];
  accent: string;
  tagVariant: string;
}

export const skills: ISkill[] = [
  {
    slug: 'react',
    name: 'React',
    category: 'Frontend',
    description: 'Expert React developers for SPA, SSR (Next.js), and complex dashboard applications.',
    experience: 'Expert',
    projectCount: 18,
    rateRange: { low: 18, high: 45 },
    relatedProjects: ['fraudshield', 'fieldops'],
    accent: '#06B6D4',
    tagVariant: 'cyan',
  },
  {
    slug: 'angular',
    name: 'Angular',
    category: 'Frontend',
    description: 'Expert Angular developers — our primary enterprise framework for complex applications.',
    experience: 'Expert',
    projectCount: 22,
    rateRange: { low: 18, high: 45 },
    relatedProjects: ['authgate', 'hiresync', 'caseflow', 'propnest'],
    accent: '#F43F5E',
    tagVariant: 'rose',
  },
  {
    slug: 'flutter',
    name: 'Flutter',
    category: 'Mobile',
    description: 'Expert Flutter developers for iOS/Android cross-platform apps, including offline-first architecture.',
    experience: 'Expert',
    projectCount: 14,
    rateRange: { low: 18, high: 45 },
    relatedProjects: ['fieldops', 'payflow', 'claimwise', 'propnest'],
    accent: '#3B82F6',
    tagVariant: 'blue',
  },
  {
    slug: 'nodejs',
    name: 'Node.js',
    category: 'Backend',
    description: 'Node.js and NestJS developers for scalable API and microservices development.',
    experience: 'Expert',
    projectCount: 12,
    rateRange: { low: 18, high: 45 },
    relatedProjects: ['fieldops'],
    accent: '#10B981',
    tagVariant: 'emerald',
  },
  {
    slug: 'python',
    name: 'Python',
    category: 'Backend / AI',
    description: 'Python developers for AI/ML systems, FastAPI backends, and data engineering pipelines.',
    experience: 'Expert',
    projectCount: 10,
    rateRange: { low: 18, high: 45 },
    relatedProjects: ['fraudshield'],
    accent: '#F59E0B',
    tagVariant: 'amber',
  },
  {
    slug: 'dotnet',
    name: '.NET',
    category: 'Backend',
    description: '.NET Core / ASP.NET developers — our primary enterprise backend for mission-critical systems.',
    experience: 'Expert',
    projectCount: 20,
    rateRange: { low: 18, high: 45 },
    relatedProjects: ['authgate', 'claimwise', 'caseflow', 'hiresync'],
    accent: '#A855F7',
    tagVariant: 'purple',
  },
  {
    slug: 'ai-ml',
    name: 'AI / ML',
    category: 'AI',
    description: 'ML engineers for LLMs, RAG systems, fraud detection, and custom model development.',
    experience: 'Expert',
    projectCount: 8,
    rateRange: { low: 30, high: 60 },
    relatedProjects: ['fraudshield'],
    accent: '#C084FC',
    tagVariant: 'purple',
  },
];
