export interface ICaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  client: string;
  industry: string;
  industryTag: string;
  tagVariant: string;
  challenge: string;
  approach: string;
  solution: string;
  techStack: string[];
  metrics: { value: string; label: string; sub?: string }[];
  results: string[];
  testimonial?: { quote: string; name: string; title: string; company: string };
  relatedProduct?: string;
  demoUrl?: string;
  featured: boolean;
}
