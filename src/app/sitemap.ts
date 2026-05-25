import type { MetadataRoute } from 'next';
import { services } from '@/lib/data/services';
import { solutions } from '@/lib/data/solutions';
import { caseStudies } from '@/lib/data/caseStudies';
import { skills } from '@/lib/data/skills';
import { industries } from '@/lib/data/industries';

const BASE_URL = 'https://nimblesl.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

  // Static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/tools/project-estimator`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/solutions`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/case-studies`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/hire-developers`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/faq`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ];

  // Dynamic service routes
  const serviceRoutes: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${BASE_URL}/services/${service.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Dynamic solution routes
  const solutionRoutes: MetadataRoute.Sitemap = solutions.map((solution) => ({
    url: `${BASE_URL}/solutions/${solution.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Dynamic case study routes
  const caseStudyRoutes: MetadataRoute.Sitemap = caseStudies.map((caseStudy) => ({
    url: `${BASE_URL}/case-studies/${caseStudy.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Dynamic skill/hire-developers routes
  const skillRoutes: MetadataRoute.Sitemap = skills.map((skill) => ({
    url: `${BASE_URL}/hire-developers/${skill.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Dynamic industry routes
  const industryRoutes: MetadataRoute.Sitemap = industries.map((industry) => ({
    url: `${BASE_URL}/industries/${industry.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // Blog post routes (hardcoded slugs)
  const blogSlugs = [
    'how-we-built-fraudshield-realtime-ml-fraud-detection',
    'angular-vs-react-2025-enterprise-guide',
    'true-cost-software-development-bangladesh',
    'building-offline-first-mobile-apps-flutter',
    'idea-to-mvp-8-weeks-nimblesl-sprint-framework',
    'llm-powered-features-saas-2025',
    'claimwise-ocr-ml-insurance-processing',
    'designing-for-enterprise-5-lessons',
  ];

  const blogRoutes: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // Combine all routes
  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...solutionRoutes,
    ...caseStudyRoutes,
    ...skillRoutes,
    ...industryRoutes,
    ...blogRoutes,
  ];
}
