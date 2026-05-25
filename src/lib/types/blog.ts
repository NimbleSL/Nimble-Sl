export interface IBlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tag: string;
  tagVariant: string;
  readTime: string;
  publishedAt: string;
  content?: string;
  relatedService?: string;
  accent: string;
}
