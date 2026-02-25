import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SeoService } from '../../../shared/services/seo/seo.service';

interface BlogArticle {
  id: string;
  title: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
  excerpt: string;
  image: string;
}

const BLOG_DATA: Record<string, BlogArticle> = {
  'rag-vs-finetuning-business-chatbots': {
    id: 'rag-vs-finetuning-business-chatbots',
    title: 'RAG vs Fine-Tuning: Which One Actually Works for Business Chatbots?',
    category: 'Artificial Intelligence',
    date: 'Feb 22, 2026',
    author: 'NimbleSL Engineering',
    readTime: '9 min read',
    excerpt: 'We\'ve built chatbots both ways. After shipping both to production, the difference in accuracy, cost, and maintenance was not what we expected.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80'
  },
  'tested-embedding-models-bengali-text': {
    id: 'tested-embedding-models-bengali-text',
    title: 'We Tested 5 Embedding Models on Bengali Text — Here\'s What Won',
    category: 'Artificial Intelligence',
    date: 'Feb 18, 2026',
    author: 'NimbleSL Engineering',
    readTime: '11 min read',
    excerpt: 'Most embedding benchmarks only test English. We ran our own experiments on 10,000 Bengali sentences.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80'
  },
  'why-ai-chatbot-gives-wrong-answers': {
    id: 'why-ai-chatbot-gives-wrong-answers',
    title: 'Why Your AI Chatbot Gives Wrong Answers (And How to Fix It)',
    category: 'Artificial Intelligence',
    date: 'Feb 14, 2026',
    author: 'NimbleSL Engineering',
    readTime: '8 min read',
    excerpt: 'A playbook for fixing AI hallucinations in RAG-based chatbots, from chunk sizes to prompt templates.',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80'
  },
  'real-cost-building-ai-feature-2026': {
    id: 'real-cost-building-ai-feature-2026',
    title: 'The Real Cost of Building an AI Feature in 2026',
    category: 'Artificial Intelligence',
    date: 'Feb 08, 2026',
    author: 'NimbleSL Engineering',
    readTime: '7 min read',
    excerpt: 'We broke down the actual costs across 6 AI projects — from a $3K FAQ bot to a $120K fraud detection pipeline.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80'
  },
  'why-we-built-nimblebot': {
    id: 'why-we-built-nimblebot',
    title: 'Why We Built NimbleBot: The Problem Nobody Was Solving Right',
    category: 'Product Updates',
    date: 'Feb 04, 2026',
    author: 'NimbleSL Engineering',
    readTime: '6 min read',
    excerpt: 'The story of why we built our own AI chatbot platform and the gap we saw in the market.',
    image: 'https://images.unsplash.com/photo-1531746790095-e5995fea9cc6?w=800&q=80'
  },
  'what-small-businesses-need-from-erp': {
    id: 'what-small-businesses-need-from-erp',
    title: 'What Small Businesses Actually Need from an ERP (We Asked 50 Founders)',
    category: 'Product Updates',
    date: 'Jan 28, 2026',
    author: 'NimbleSL Engineering',
    readTime: '8 min read',
    excerpt: 'We interviewed 50 founders before writing a single line of code for NimbleSoft ERP.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80'
  },
  'nimblebot-reduced-support-tickets': {
    id: 'nimblebot-reduced-support-tickets',
    title: 'How a RAG Chatbot Reduced Support Tickets by 60% — A NimbleBot Story',
    category: 'Product Updates',
    date: 'Jan 22, 2026',
    author: 'NimbleSL Engineering',
    readTime: '7 min read',
    excerpt: 'A real deployment story showing measurable results from NimbleBot.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80'
  },
  'insurance-fraud-detection-graph-neural-networks': {
    id: 'insurance-fraud-detection-graph-neural-networks',
    title: 'How We Detected Insurance Fraud with 96% Accuracy Using Graph Neural Networks',
    category: 'Artificial Intelligence',
    date: 'Jan 17, 2026',
    author: 'NimbleSL Engineering',
    readTime: '12 min read',
    excerpt: 'Building fDetect15 — a multi-modal AI pipeline using Graph Attention Networks.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80'
  },
  'offline-first-sales-app-500-field-agents': {
    id: 'offline-first-sales-app-500-field-agents',
    title: 'Building an Offline-First Sales App for 500+ Field Agents',
    category: 'Mobile Development',
    date: 'Jan 12, 2026',
    author: 'NimbleSL Engineering',
    readTime: '10 min read',
    excerpt: 'How we built SFA15 — a Flutter app that works completely offline for field sales teams.',
    image: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?w=800&q=80'
  },
  'paper-to-platform-national-recruitment': {
    id: 'paper-to-platform-national-recruitment',
    title: 'From Paper to Platform: Digitizing a National-Scale Recruitment System',
    category: 'Cloud Architecture',
    date: 'Jan 06, 2026',
    author: 'NimbleSL Engineering',
    readTime: '9 min read',
    excerpt: 'How CivicRecruit7 replaced paper-based processes managing 50,000+ candidates.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80'
  },
  'how-10-person-team-ships-enterprise-software': {
    id: 'how-10-person-team-ships-enterprise-software',
    title: 'How a 10-Person Team Ships Enterprise Software for Global Clients',
    category: 'Inside NimbleSL',
    date: 'Dec 28, 2025',
    author: 'NimbleSL Engineering',
    readTime: '8 min read',
    excerpt: 'Our processes, tools, and hard lessons from shipping enterprise software as a small team.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80'
  },
  'our-tech-stack-2026': {
    id: 'our-tech-stack-2026',
    title: 'Our Tech Stack in 2026: What We Use and Why',
    category: 'Inside NimbleSL',
    date: 'Dec 20, 2025',
    author: 'NimbleSL Engineering',
    readTime: '10 min read',
    excerpt: 'Exactly what we use at NimbleSL, why we chose each tool, and what we dropped.',
    image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&q=80'
  },
  'ai-in-enterprise': {
    id: 'ai-in-enterprise',
    title: 'The Future of AI in Enterprise Software Development',
    category: 'Artificial Intelligence',
    date: 'Feb 15, 2026',
    author: 'NimbleSL Engineering',
    readTime: '6 min read',
    excerpt: 'How LLMs and RAG architectures are transforming enterprise software at NimbleSL.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80'
  },
  'from-monolith-to-microservices': {
    id: 'from-monolith-to-microservices',
    title: 'Scaling from Monolith to Microservices on AWS',
    category: 'Cloud Architecture',
    date: 'Feb 12, 2026',
    author: 'NimbleSL Engineering',
    readTime: '8 min read',
    excerpt: 'A practical deep-dive into breaking down legacy applications for cloud deployments.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80'
  },
  'fixing-memory-leaks-nodejs': {
    id: 'fixing-memory-leaks-nodejs',
    title: 'How We Fixed a Critical Memory Leak in Production Node.js',
    category: 'Web Development',
    date: 'Feb 10, 2026',
    author: 'NimbleSL Engineering',
    readTime: '10 min read',
    excerpt: 'Our investigation into a memory leak that crashed servers every 6 hours.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80'
  },
  'database-query-optimization': {
    id: 'database-query-optimization',
    title: 'Reducing PostgreSQL Query Time from 45s to 200ms',
    category: 'Cloud Architecture',
    date: 'Feb 05, 2026',
    author: 'NimbleSL Engineering',
    readTime: '7 min read',
    excerpt: 'How indexing and query restructuring transformed a sluggish dashboard.',
    image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&q=80'
  },
  'react-native-performance-crisis': {
    id: 'react-native-performance-crisis',
    title: 'Solving the 60fps Crisis in Our React Native App',
    category: 'Mobile Development',
    date: 'Jan 30, 2026',
    author: 'NimbleSL Engineering',
    readTime: '9 min read',
    excerpt: 'How we achieved buttery smooth performance from a 15fps rendering disaster.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80'
  },
  'kubernetes-downtime-incident': {
    id: 'kubernetes-downtime-incident',
    title: 'Post-Mortem: The Kubernetes Incident That Taught Us Everything',
    category: 'Cloud Architecture',
    date: 'Jan 25, 2026',
    author: 'NimbleSL Engineering',
    readTime: '8 min read',
    excerpt: 'How a misconfigured liveness probe caused cascading failures.',
    image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&q=80'
  },
  'authentication-security-overhaul': {
    id: 'authentication-security-overhaul',
    title: 'Rebuilding Authentication After a Security Audit Failure',
    category: 'Web Development',
    date: 'Jan 20, 2026',
    author: 'NimbleSL Engineering',
    readTime: '11 min read',
    excerpt: 'We had 48 hours to fix JWT vulnerabilities found during pen testing.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80'
  },
  'real-time-sync-architecture': {
    id: 'real-time-sync-architecture',
    title: 'Building Real-Time Data Sync Without Breaking the Bank',
    category: 'Cloud Architecture',
    date: 'Jan 15, 2026',
    author: 'NimbleSL Engineering',
    readTime: '12 min read',
    excerpt: 'Collaborative editing for 10,000 concurrent users with WebSockets and Redis.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80'
  },
  'legacy-api-integration-nightmare': {
    id: 'legacy-api-integration-nightmare',
    title: 'Integrating with a 15-Year-Old SOAP API: A Survival Guide',
    category: 'Web Development',
    date: 'Jan 10, 2026',
    author: 'NimbleSL Engineering',
    readTime: '6 min read',
    excerpt: 'Creative solutions for connecting modern React frontends with legacy enterprise systems.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80'
  },
  'mobile-offline-first-strategy': {
    id: 'mobile-offline-first-strategy',
    title: 'Making Our Flutter App Work Offline in Rural Bangladesh',
    category: 'Mobile Development',
    date: 'Jan 05, 2026',
    author: 'NimbleSL Engineering',
    readTime: '9 min read',
    excerpt: 'Building offline-first architecture for healthcare in areas with unreliable connectivity.',
    image: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?w=800&q=80'
  },
  'ci-cd-pipeline-optimization': {
    id: 'ci-cd-pipeline-optimization',
    title: 'From 45 Minutes to 8 Minutes: Optimizing Our CI/CD Pipeline',
    category: 'Cloud Architecture',
    date: 'Dec 28, 2025',
    author: 'NimbleSL Engineering',
    readTime: '7 min read',
    excerpt: 'Incremental improvements and caching techniques that cut deployment time 5x.',
    image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&q=80'
  },
  'debugging-production-api-timeout': {
    id: 'debugging-production-api-timeout',
    title: 'The Mystery of Random API Timeouts at 3AM',
    category: 'Web Development',
    date: 'Dec 22, 2025',
    author: 'NimbleSL Engineering',
    readTime: '8 min read',
    excerpt: 'Investigating intermittent failures that only happened during off-peak hours.',
    image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&q=80'
  }
};

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './blog-detail.html',
  styleUrl: './blog-detail.scss'
})
export class BlogDetailComponent implements OnInit {

  post: BlogArticle = {
    id: '',
    title: '',
    category: '',
    date: '',
    author: '',
    readTime: '',
    excerpt: '',
    image: ''
  };

  notFound = false;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private seoService: SeoService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') || '';
    const article = BLOG_DATA[id];

    if (article) {
      this.post = article;
      this.seoService.updateSeo({
        title: this.post.title,
        description: this.post.excerpt,
        keywords: `${this.post.category.toLowerCase()}, software development, ${this.post.title.toLowerCase().split(' ').slice(0, 5).join(', ')}, nimble software lab`,
        url: `https://www.nimblesl.com/blog/${this.post.id}`,
        type: 'article'
      });
      this.seoService.setArticleSchema({
        title: this.post.title,
        description: this.post.excerpt,
        image: this.post.image,
        datePublished: this.post.date
      });
    } else {
      this.notFound = true;
    }
  }

  goBack(): void {
    this.location.back();
  }
}
