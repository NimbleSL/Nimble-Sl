import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
import { isPlatformBrowser, DOCUMENT } from '@angular/common';
import { filter } from 'rxjs/operators';

export interface SeoConfig {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private readonly baseUrl = 'https://www.nimblesl.com';
  private readonly siteName = 'Nimble Software Lab';
  private readonly defaultImage = 'https://www.nimblesl.com/assets/images/logo/logo.png';
  private readonly defaultKeywords = 'software development company bangladesh, web development, mobile app development, custom software, AI solutions, cloud solutions, Dhaka';

  constructor(
    private meta: Meta,
    private title: Title,
    private router: Router,
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.setupRouteListener();
  }

  private setupRouteListener(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.updateCanonicalUrl(this.baseUrl + event.urlAfterRedirects);
    });
  }

  updateSeo(config: SeoConfig): void {
    const fullTitle = config.title.includes(this.siteName)
      ? config.title
      : `${config.title} | ${this.siteName}`;

    // Update title
    this.title.setTitle(fullTitle);

    // Update meta tags
    this.meta.updateTag({ name: 'description', content: config.description });
    this.meta.updateTag({ name: 'keywords', content: config.keywords || this.defaultKeywords });

    // Open Graph tags
    this.meta.updateTag({ property: 'og:title', content: fullTitle });
    this.meta.updateTag({ property: 'og:description', content: config.description });
    this.meta.updateTag({ property: 'og:image', content: config.image || this.defaultImage });
    this.meta.updateTag({ property: 'og:url', content: config.url || this.baseUrl });
    this.meta.updateTag({ property: 'og:type', content: config.type || 'website' });
    this.meta.updateTag({ property: 'og:site_name', content: this.siteName });

    // Twitter Card tags
    this.meta.updateTag({ name: 'twitter:title', content: fullTitle });
    this.meta.updateTag({ name: 'twitter:description', content: config.description });
    this.meta.updateTag({ name: 'twitter:image', content: config.image || this.defaultImage });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });

    // Update canonical URL
    if (config.url) {
      this.updateCanonicalUrl(config.url);
    }
  }

  private updateCanonicalUrl(url: string): void {
    if (isPlatformBrowser(this.platformId)) {
      let link: HTMLLinkElement | null = this.document.querySelector('link[rel="canonical"]');
      if (!link) {
        link = this.document.createElement('link');
        link.setAttribute('rel', 'canonical');
        this.document.head.appendChild(link);
      }
      link.setAttribute('href', url);
    }
  }

  // Set structured data (JSON-LD)
  setJsonLd(schema: object): void {
    if (isPlatformBrowser(this.platformId)) {
      // Remove existing JSON-LD scripts
      const existingScripts = this.document.querySelectorAll('script[type="application/ld+json"]');
      existingScripts.forEach(script => script.remove());

      // Add new JSON-LD script
      const script = this.document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema);
      this.document.head.appendChild(script);
    }
  }

  // Organization schema
  setOrganizationSchema(): void {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      'name': 'Nimble Software Lab',
      'alternateName': 'NimbleSL',
      'url': this.baseUrl,
      'logo': this.defaultImage,
      'description': 'Software development company in Bangladesh offering custom software, web apps, mobile apps, cloud solutions, and AI services.',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'House - 1, Road - 36, Gulshan - 2',
        'addressLocality': 'Dhaka',
        'postalCode': '1219',
        'addressCountry': 'BD'
      },
      'contactPoint': {
        '@type': 'ContactPoint',
        'telephone': '+880-1796-109979',
        'contactType': 'customer service',
        'email': 'info@nimblesl.com',
        'availableLanguage': ['English', 'Bengali']
      },
      'sameAs': [
        'https://www.linkedin.com/company/nimble-software-lab',
        'https://www.facebook.com/nimblesl'
      ],
      'foundingDate': '2023',
      'founders': [{
        '@type': 'Person',
        'name': 'Nimble Software Lab Team'
      }],
      'areaServed': {
        '@type': 'GeoCircle',
        'geoMidpoint': {
          '@type': 'GeoCoordinates',
          'latitude': '23.7934',
          'longitude': '90.4079'
        },
        'geoRadius': 'Worldwide'
      },
      'serviceArea': {
        '@type': 'Place',
        'name': 'Worldwide'
      }
    };
    this.setJsonLd(schema);
  }

  // WebSite schema for search box
  setWebsiteSchema(): void {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      'name': 'Nimble Software Lab',
      'url': this.baseUrl,
      'potentialAction': {
        '@type': 'SearchAction',
        'target': `${this.baseUrl}/search?q={search_term_string}`,
        'query-input': 'required name=search_term_string'
      }
    };
    this.setJsonLd(schema);
  }

  // Service schema
  setServiceSchema(serviceName: string, serviceDescription: string): void {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      'name': serviceName,
      'description': serviceDescription,
      'provider': {
        '@type': 'Organization',
        'name': 'Nimble Software Lab',
        'url': this.baseUrl
      },
      'areaServed': {
        '@type': 'Place',
        'name': 'Worldwide'
      },
      'serviceType': 'Software Development'
    };
    this.setJsonLd(schema);
  }

  // Breadcrumb schema
  setBreadcrumbSchema(items: { name: string; url: string }[]): void {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': items.map((item, index) => ({
        '@type': 'ListItem',
        'position': index + 1,
        'name': item.name,
        'item': item.url
      }))
    };
    this.setJsonLd(schema);
  }

  // Article/Blog schema
  setArticleSchema(article: {
    title: string;
    description: string;
    image: string;
    datePublished: string;
    author?: string;
  }): void {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      'headline': article.title,
      'description': article.description,
      'image': article.image,
      'datePublished': article.datePublished,
      'author': {
        '@type': 'Organization',
        'name': article.author || 'Nimble Software Lab'
      },
      'publisher': {
        '@type': 'Organization',
        'name': 'Nimble Software Lab',
        'logo': {
          '@type': 'ImageObject',
          'url': this.defaultImage
        }
      }
    };
    this.setJsonLd(schema);
  }

  // Local Business schema
  setLocalBusinessSchema(): void {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      'name': 'Nimble Software Lab',
      'image': this.defaultImage,
      'url': this.baseUrl,
      'telephone': '+880-1796-109979',
      'email': 'info@nimblesl.com',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'House - 1, Road - 36, Gulshan - 2',
        'addressLocality': 'Dhaka',
        'postalCode': '1219',
        'addressCountry': 'BD'
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': '23.7934',
        'longitude': '90.4079'
      },
      'openingHoursSpecification': {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        'opens': '09:00',
        'closes': '18:00'
      },
      'priceRange': '$$'
    };
    this.setJsonLd(schema);
  }
}
