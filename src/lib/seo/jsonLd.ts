import type { IService } from '@/lib/types/service';

interface BlogPost {
  title: string;
  description: string;
  slug: string;
  author: string;
  publishedAt: string;
  image?: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

const BASE_URL = 'https://nimblesl.com';

export function getOrganizationJsonLd(): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${BASE_URL}/#organization`,
    name: 'NimbleSL',
    url: BASE_URL,
    logo: `${BASE_URL}/logo.png`,
    description: "Bangladesh's leading software development company. Silicon Valley engineering at Bangladesh pricing. Custom software, AI/ML, mobile apps, and enterprise SaaS development for clients across 12 countries.",
    foundingDate: '2018',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Road 34, Gulshan-2',
      addressLocality: 'Dhaka',
      addressRegion: 'Dhaka',
      postalCode: '1212',
      addressCountry: 'BD',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+880-1796-109979',
        contactType: 'sales',
        email: 'sales@nimblesl.com',
        areaServed: 'Worldwide',
        availableLanguage: ['English'],
      },
      {
        '@type': 'ContactPoint',
        email: 'info@nimblesl.com',
        contactType: 'customer service',
        areaServed: 'Worldwide',
        availableLanguage: ['English'],
      },
    ],
    sameAs: [
      'https://linkedin.com/company/nimblesl',
      'https://twitter.com/nimblesl',
      'https://github.com/nimblesl',
    ],
  };
}

export function getWebSiteJsonLd(): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${BASE_URL}/#website`,
    url: BASE_URL,
    name: 'NimbleSL',
    description: 'Custom software development company specializing in web apps, mobile apps, AI/ML, and cloud solutions.',
    publisher: {
      '@id': `${BASE_URL}/#organization`,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${BASE_URL}/blog?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

export function getLocalBusinessJsonLd(): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${BASE_URL}/#localbusiness`,
    name: 'NimbleSL',
    image: `${BASE_URL}/og-image.jpg`,
    url: BASE_URL,
    telephone: '+880-1796-109979',
    email: 'info@nimblesl.com',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Road 34, Gulshan-2',
      addressLocality: 'Dhaka',
      addressRegion: 'Dhaka',
      postalCode: '1212',
      addressCountry: 'BD',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 23.7946,
      longitude: 90.4142,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
      opens: '09:00',
      closes: '18:00',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '50',
      bestRating: '5',
      worstRating: '1',
    },
  };
}

export function getServiceJsonLd(service: IService): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${BASE_URL}/services/${service.slug}#service`,
    name: service.title,
    description: service.fullDescription,
    provider: {
      '@id': `${BASE_URL}/#organization`,
    },
    serviceType: service.title,
    areaServed: {
      '@type': 'Place',
      name: 'Worldwide',
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
      lowPrice: service.typicalRange.low,
      highPrice: service.typicalRange.high,
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency: 'USD',
        price: service.typicalRange.low,
      },
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: service.title,
      itemListElement: service.deliverables.map((deliverable, index) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: deliverable,
        },
        position: index + 1,
      })),
    },
  };
}

export function getBlogPostJsonLd(post: BlogPost): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${BASE_URL}/blog/${post.slug}#article`,
    headline: post.title,
    description: post.description,
    url: `${BASE_URL}/blog/${post.slug}`,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      '@type': 'Person',
      name: post.author,
      url: `${BASE_URL}/about`,
    },
    publisher: {
      '@id': `${BASE_URL}/#organization`,
    },
    image: post.image ? `${BASE_URL}${post.image}` : `${BASE_URL}/og-image.jpg`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${BASE_URL}/blog/${post.slug}`,
    },
  };
}

export function getFAQJsonLd(faqs: FAQItem[]): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function getBreadcrumbJsonLd(items: BreadcrumbItem[]): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
