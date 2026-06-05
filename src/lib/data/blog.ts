// This file is dynamically generated. Do not edit directly.
export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  accent: string;
  tagClass: string;
  featured?: boolean;
  coverImage?: string;
  content: string;
}

export const CATEGORIES = ['All', 'Engineering', 'AI/ML', 'Product', 'Business', 'Cloud', 'Mobile', 'FinTech', 'Healthcare', 'E-commerce', 'Restaurant', 'Real Estate', 'Logistics'] as const;

import { post as post_0 } from './posts/ai-chatbot-development';
import { post as post_1 } from './posts/aws-vs-azure-vs-gcp';
import { post as post_2 } from './posts/custom-software-cost';
import { post as post_3 } from './posts/digital-banking-platform-build-vs-buy';
import { post as post_4 } from './posts/erp-software-development';
import { post as post_5 } from './posts/field-force-management-app';
import { post as post_6 } from './posts/fintech-app-development-cost';
import { post as post_7 } from './posts/healthcare-app-development-cost';
import { post as post_8 } from './posts/hiring-agency-vs-in-house';
import { post as post_9 } from './posts/how-to-build-a-saas-product';
import { post as post_10 } from './posts/how-we-estimate-software-projects';
import { post as post_11 } from './posts/insurance-software-development';
import { post as post_12 } from './posts/inventory-management-system-build-vs-buy';
import { post as post_13 } from './posts/microservices-vs-monolith';
import { post as post_14 } from './posts/multi-vendor-marketplace-development';
import { post as post_15 } from './posts/mvp-development-strategy';
import { post as post_16 } from './posts/nextjs-vs-remix-vs-nuxt';
import { post as post_17 } from './posts/nodejs-vs-python-vs-go';
import { post as post_18 } from './posts/offshore-vs-nearshore-vs-onshore';
import { post as post_19 } from './posts/postgresql-vs-mongodb-vs-mysql';
import { post as post_20 } from './posts/questions-to-ask-before-hiring-dev-agency';
import { post as post_21 } from './posts/react-native-vs-flutter';
import { post as post_22 } from './posts/react-vs-angular-vs-vue';
import { post as post_23 } from './posts/real-estate-management-platform';
import { post as post_24 } from './posts/rest-vs-graphql';
import { post as post_25 } from './posts/restaurant-management-software';
import { post as post_26 } from './posts/software-requirements-document';
import { post as post_27 } from './posts/technical-debt-cost';
import { post as post_28 } from './posts/why-software-projects-fail';
import { post as post_29 } from './posts/working-with-dev-agency';

export const blogPosts: BlogPost[] = [
  post_0,
  post_1,
  post_2,
  post_3,
  post_4,
  post_5,
  post_6,
  post_7,
  post_8,
  post_9,
  post_10,
  post_11,
  post_12,
  post_13,
  post_14,
  post_15,
  post_16,
  post_17,
  post_18,
  post_19,
  post_20,
  post_21,
  post_22,
  post_23,
  post_24,
  post_25,
  post_26,
  post_27,
  post_28,
  post_29,
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getRelatedPosts(slug: string, category: string, count = 3): BlogPost[] {
  return blogPosts
    .filter((p) => p.category === category && p.slug !== slug)
    .slice(0, count);
}

export function getPostsByCategory(category: string): BlogPost[] {
  if (category === 'All') return blogPosts;
  return blogPosts.filter((p) => p.category === category);
}
