import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../shared/services/seo/seo.service';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  image: string;
}

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './blog.html',
  styleUrl: './blog.scss',
  host: {
    class: 'page-view'
  }
})
export class BlogComponent implements OnInit {
  constructor(private seoService: SeoService) {}

  ngOnInit(): void {
    this.seoService.updateSeo({
      title: 'Blog',
      description: 'Technical insights, case studies, and software development best practices from Nimble Software Lab. Learn about AI, cloud architecture, web development, and mobile apps.',
      keywords: 'software development blog, tech blog bangladesh, AI insights, cloud architecture, web development tutorials, mobile app development',
      url: 'https://www.nimblesl.com/blog'
    });
    this.seoService.setBreadcrumbSchema([
      { name: 'Home', url: 'https://www.nimblesl.com/' },
      { name: 'Blog', url: 'https://www.nimblesl.com/blog' }
    ]);
  }
  featuredPost: BlogPost = {
    id: 'ai-in-enterprise',
    title: 'The Future of AI in Enterprise Software Development',
    excerpt: 'How large language models and RAG architectures are fundamentally transforming how businesses build and interact with internal tools. A deep dive into NimbleSL\'s approach to integrating generative AI into existing systems.',
    category: 'Artificial Intelligence',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80'
  };

  posts: BlogPost[] = [
    {
      id: 'from-monolith-to-microservices',
      title: 'Scaling from Monolith to Microservices on AWS',
      excerpt: 'A practical, technical deep-dive into the strategies and pitfalls of breaking down legacy applications for modern cloud environments.',
      category: 'Cloud Architecture',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80'
    },
    {
      id: 'fixing-memory-leaks-nodejs',
      title: 'How We Fixed a Critical Memory Leak in Production Node.js',
      excerpt: 'Our step-by-step investigation into a memory leak that crashed our client\'s servers every 6 hours, and the surprising root cause we discovered.',
      category: 'Web Development',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80'
    },
    {
      id: 'database-query-optimization',
      title: 'Reducing PostgreSQL Query Time from 45s to 200ms',
      excerpt: 'A real case study on how proper indexing, query restructuring, and connection pooling transformed a sluggish dashboard into a responsive tool.',
      category: 'Cloud Architecture',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=600&q=80'
    },
    {
      id: 'react-native-performance-crisis',
      title: 'Solving the 60fps Crisis in Our React Native App',
      excerpt: 'When our e-commerce app dropped to 15fps on scroll, we had to dig deep into the rendering pipeline. Here\'s how we achieved buttery smooth performance.',
      category: 'Mobile Development',
      readTime: '9 min read',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80'
    },
    {
      id: 'kubernetes-downtime-incident',
      title: 'Post-Mortem: The Kubernetes Incident That Taught Us Everything',
      excerpt: 'A transparent breakdown of how a misconfigured liveness probe caused cascading failures across our microservices and what we learned.',
      category: 'Cloud Architecture',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=600&q=80'
    },
    {
      id: 'authentication-security-overhaul',
      title: 'Rebuilding Authentication After a Security Audit Failure',
      excerpt: 'When penetration testing revealed critical vulnerabilities in our JWT implementation, we had 48 hours to fix it. This is our story.',
      category: 'Web Development',
      readTime: '11 min read',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80'
    },
    {
      id: 'real-time-sync-architecture',
      title: 'Building Real-Time Data Sync Without Breaking the Bank',
      excerpt: 'How we implemented collaborative editing for 10,000 concurrent users using WebSockets, Redis, and clever conflict resolution strategies.',
      category: 'Cloud Architecture',
      readTime: '12 min read',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80'
    },
    {
      id: 'legacy-api-integration-nightmare',
      title: 'Integrating with a 15-Year-Old SOAP API: A Survival Guide',
      excerpt: 'The challenges, workarounds, and creative solutions we developed to connect modern React frontends with legacy enterprise systems.',
      category: 'Web Development',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80'
    },
    {
      id: 'mobile-offline-first-strategy',
      title: 'Making Our Flutter App Work Offline in Rural Bangladesh',
      excerpt: 'Building a robust offline-first architecture for a healthcare app used in areas with unreliable connectivity. Sync conflicts and all.',
      category: 'Mobile Development',
      readTime: '9 min read',
      image: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?w=600&q=80'
    },
    {
      id: 'ci-cd-pipeline-optimization',
      title: 'From 45 Minutes to 8 Minutes: Optimizing Our CI/CD Pipeline',
      excerpt: 'The incremental improvements, parallelization strategies, and caching techniques that dramatically reduced our deployment times.',
      category: 'Cloud Architecture',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=600&q=80'
    },
    {
      id: 'debugging-production-api-timeout',
      title: 'The Mystery of Random API Timeouts at 3AM',
      excerpt: 'Investigating intermittent failures that only happened during off-peak hours led us to an unexpected discovery about connection pooling.',
      category: 'Web Development',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=600&q=80'
    }
  ];

  categories = ['All', 'Artificial Intelligence', 'Cloud Architecture', 'Web Development', 'Mobile Development', 'Inside NimbleSL'];
  activeCategory = 'All';

  currentPage = 1;
  itemsPerPage = 6;

  get filteredPosts(): BlogPost[] {
    if (this.activeCategory === 'All') return this.posts;
    return this.posts.filter(p => p.category === this.activeCategory);
  }

  get totalPages(): number {
    return Math.ceil(this.filteredPosts.length / this.itemsPerPage);
  }

  get paginatedPosts(): BlogPost[] {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredPosts.slice(start, start + this.itemsPerPage);
  }

  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  setPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  setCategory(category: string) {
    this.activeCategory = category;
    this.currentPage = 1; // Reset to page 1 when changing category
  }
}
