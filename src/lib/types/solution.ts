export interface ISolution {
  slug: string;
  name: string;
  tagline: string;
  industry: string;
  tagVariant: string;
  accent: string;
  description: string;
  keyMetric: string;
  demoUrl: string;
  features: { title: string; description: string; icon: string }[];
  techStack: string[];
  customizationTiers: {
    name: string;
    priceRange: string;
    description: string;
  }[];
  metrics: { value: string; label: string; sub?: string }[];
  oldCode: string;
}
