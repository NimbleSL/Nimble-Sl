export interface IService {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  deliverables: string[];
  technologies: string[];
  typicalRange: { low: number; high: number };
  relatedSolutions: string[];
  relatedCaseStudies: string[];
  tagVariant: string;
}
