import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../shared/services/seo/seo.service';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
  image: string;
  keywords: string[];
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
  constructor(private seoService: SeoService) { }

  ngOnInit(): void {
    this.seoService.updateSeo({
      title: 'Nimble Insights — Engineering Blog',
      description: 'Real engineering stories, AI deep-dives, product updates, and behind-the-scenes from the team building software at Nimble Software Lab. No fluff — just things we actually learned shipping code.',
      keywords: 'software engineering blog, AI chatbot development, RAG architecture, NimbleBot, ERP software, tech blog bangladesh, software development insights, nimble software lab blog',
      url: 'https://www.nimblesl.com/blog'
    });
    this.seoService.setBreadcrumbSchema([
      { name: 'Home', url: 'https://www.nimblesl.com/' },
      { name: 'Nimble Insights', url: 'https://www.nimblesl.com/blog' }
    ]);
  }

  featuredPost: BlogPost = {
    id: 'rag-vs-finetuning-business-chatbots',
    title: 'RAG vs Fine-Tuning: Which One Actually Works for Business Chatbots?',
    excerpt: 'We\'ve built chatbots both ways. One client wanted us to fine-tune GPT on their 2,000-page product manual. Another wanted RAG with a vector database. After shipping both to production, the difference in accuracy, cost, and maintenance was not what we expected. Here\'s an honest breakdown from the trenches.',
    category: 'Artificial Intelligence',
    date: 'Feb 22, 2026',
    author: 'NimbleSL Engineering',
    readTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
    keywords: ['rag chatbot', 'fine-tuning vs rag', 'business chatbot', 'AI architecture']
  };

  posts: BlogPost[] = [
    // ─── AI & Technology ──────────────────────────────────
    {
      id: 'tested-embedding-models-bengali-text',
      title: 'We Tested 5 Embedding Models on Bengali Text — Here\'s What Won',
      excerpt: 'Most embedding benchmarks only test English. When we needed to build semantic search for a Bangladeshi fintech client, we had to run our own experiments. We tested OpenAI, Cohere, BGE, Jina, and a custom multilingual model on 10,000 Bengali sentences. The winner surprised us.',
      category: 'Artificial Intelligence',
      date: 'Feb 18, 2026',
      author: 'NimbleSL Engineering',
      readTime: '11 min read',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80',
      keywords: ['bengali NLP', 'embedding models', 'multilingual AI', 'semantic search']
    },
    {
      id: 'why-ai-chatbot-gives-wrong-answers',
      title: 'Why Your AI Chatbot Gives Wrong Answers (And How to Fix It)',
      excerpt: 'We got a call at 11pm from a client: "The chatbot is telling customers we offer a 90% discount." It was hallucinating — confidently making up policies. After three days of debugging chunk sizes, prompt templates, and reranking strategies, we found the real problem. This is the playbook we now use for every RAG deployment.',
      category: 'Artificial Intelligence',
      date: 'Feb 14, 2026',
      author: 'NimbleSL Engineering',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&q=80',
      keywords: ['AI hallucination', 'chatbot accuracy', 'RAG debugging', 'retrieval augmented generation']
    },
    {
      id: 'real-cost-building-ai-feature-2026',
      title: 'The Real Cost of Building an AI Feature in 2026',
      excerpt: 'Clients ask us this every week: "How much does it cost to add AI?" The honest answer is complicated. We broke down the actual costs across 6 AI projects we shipped last year — from a $3K FAQ bot to a $120K fraud detection pipeline. Infra, tokens, embeddings, dev hours — everything is in here.',
      category: 'Artificial Intelligence',
      date: 'Feb 08, 2026',
      author: 'NimbleSL Engineering',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80',
      keywords: ['AI development cost', 'AI integration pricing', 'build AI feature', 'LLM costs']
    },

    // ─── Product-Related ──────────────────────────────────
    {
      id: 'why-we-built-nimblebot',
      title: 'Why We Built NimbleBot: The Problem Nobody Was Solving Right',
      excerpt: 'Every chatbot platform we evaluated either required a PhD in prompt engineering or cost $500/month for basic features. Our clients needed something in between — smart enough to handle real questions, simple enough that a marketing manager could set it up. So we built NimbleBot. Here\'s the story of why and how.',
      category: 'Product Updates',
      date: 'Feb 04, 2026',
      author: 'NimbleSL Engineering',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1531746790095-e5995fea9cc6?w=600&q=80',
      keywords: ['NimbleBot', 'AI chatbot platform', 'customer engagement AI', 'RAG chatbot']
    },
    {
      id: 'what-small-businesses-need-from-erp',
      title: 'What Small Businesses Actually Need from an ERP (We Asked 50 Founders)',
      excerpt: 'Before writing a single line of code for NimbleSoft ERP, we interviewed 50 founders and operations managers across Dhaka, Chittagong, and Sylhet. Most of them were using a chaotic mix of Excel, WhatsApp groups, and paper notebooks. What they told us reshaped everything we planned to build.',
      category: 'Product Updates',
      date: 'Jan 28, 2026',
      author: 'NimbleSL Engineering',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
      keywords: ['small business ERP', 'ERP for SMEs', 'NimbleSoft ERP', 'business management software']
    },
    {
      id: 'nimblebot-reduced-support-tickets',
      title: 'How a RAG Chatbot Reduced Support Tickets by 60% — A NimbleBot Story',
      excerpt: 'One of our early NimbleBot clients was drowning in 200+ support tickets per day — most of them asking the same 30 questions. Within 6 weeks of deploying NimbleBot trained on their knowledge base, ticket volume dropped by 60%. But the real win was something we didn\'t expect: their CSAT score went up.',
      category: 'Product Updates',
      date: 'Jan 22, 2026',
      author: 'NimbleSL Engineering',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80',
      keywords: ['reduce support tickets', 'AI customer support', 'chatbot ROI', 'NimbleBot case study']
    },

    // ─── Case Study-Connected ─────────────────────────────
    {
      id: 'insurance-fraud-detection-graph-neural-networks',
      title: 'How We Detected Insurance Fraud with 96% Accuracy Using Graph Neural Networks',
      excerpt: 'Traditional fraud detection looks at individual claims. But organized fraud rings operate as networks — a doctor, a pharmacy, and a patient working together. We built fDetect15, a multi-modal AI pipeline using Graph Attention Networks and Bio_ClinicalBERT to catch patterns that rule-based systems completely miss.',
      category: 'Artificial Intelligence',
      date: 'Jan 17, 2026',
      author: 'NimbleSL Engineering',
      readTime: '12 min read',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
      keywords: ['AI fraud detection', 'insurance fraud AI', 'graph neural networks', 'GNN', 'fDetect15']
    },
    {
      id: 'offline-first-sales-app-500-field-agents',
      title: 'Building an Offline-First Sales App for 500+ Field Agents',
      excerpt: 'When your field agents work in areas with zero internet connectivity, "just call the API" isn\'t an option. For SFA15, we built a Flutter app that handles stock calculations, route planning, and receipt generation completely offline — then syncs everything when connectivity returns. Conflict resolution was the hardest part.',
      category: 'Mobile Development',
      date: 'Jan 12, 2026',
      author: 'NimbleSL Engineering',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?w=600&q=80',
      keywords: ['offline-first app', 'field force automation', 'Flutter offline', 'sales app development']
    },
    {
      id: 'paper-to-platform-national-recruitment',
      title: 'From Paper to Platform: Digitizing a National-Scale Recruitment System',
      excerpt: 'Imagine managing 50,000+ candidates across multiple exam centers with paper-based attendance sheets and manual merit calculations. That was CivicRecruit7 before we rebuilt it. The quota-based seat distribution algorithm alone took us three weeks to get right. Zero manual errors since launch.',
      category: 'Cloud Architecture',
      date: 'Jan 06, 2026',
      author: 'NimbleSL Engineering',
      readTime: '9 min read',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80',
      keywords: ['digital recruitment platform', 'HR tech', 'large-scale system', 'enterprise software']
    },

    // ─── Inside NimbleSL ──────────────────────────────────
    {
      id: 'how-10-person-team-ships-enterprise-software',
      title: 'How a 10-Person Team Ships Enterprise Software for Global Clients',
      excerpt: 'We\'re not a 500-person agency with a fancy office in Silicon Valley. We\'re a 10-person team in Gulshan, Dhaka — and we ship enterprise-grade software for clients across 4 continents. No outsourcing, no freelancers, no shortcuts. Here\'s how we do it: our processes, our tools, and the hard lessons we learned.',
      category: 'Inside NimbleSL',
      date: 'Dec 28, 2025',
      author: 'NimbleSL Engineering',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80',
      keywords: ['small software agency', 'outsourcing Bangladesh', 'enterprise development team', 'software agency culture']
    },
    {
      id: 'our-tech-stack-2026',
      title: 'Our Tech Stack in 2026: What We Use and Why',
      excerpt: 'Angular or React? NestJS or .NET? PostgreSQL or MongoDB? We get asked these questions constantly. Instead of a generic "it depends" answer, here\'s exactly what we use at NimbleSL, why we chose each tool, what we dropped, and what we\'re experimenting with. Honest opinions, no sponsorships.',
      category: 'Inside NimbleSL',
      date: 'Dec 20, 2025',
      author: 'NimbleSL Engineering',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=600&q=80',
      keywords: ['tech stack 2026', 'Angular vs React', 'NestJS', '.NET', 'software agency tools']
    },

    // ─── Existing Posts (Updated with SEO fields) ─────────
    {
      id: 'ai-in-enterprise',
      title: 'The Future of AI in Enterprise Software Development',
      excerpt: 'How large language models and RAG architectures are fundamentally transforming how businesses build and interact with internal tools. A deep dive into NimbleSL\'s approach to integrating generative AI into existing systems.',
      category: 'Artificial Intelligence',
      date: 'Feb 15, 2026',
      author: 'NimbleSL Engineering',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80',
      keywords: ['enterprise AI', 'LLM integration', 'generative AI', 'RAG architecture']
    },
    {
      id: 'from-monolith-to-microservices',
      title: 'Scaling from Monolith to Microservices on AWS',
      excerpt: 'A practical, technical deep-dive into the strategies and pitfalls of breaking down legacy applications for modern cloud environments.',
      category: 'Cloud Architecture',
      date: 'Feb 12, 2026',
      author: 'NimbleSL Engineering',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80',
      keywords: ['monolith to microservices', 'AWS architecture', 'cloud migration', 'legacy modernization']
    },
    {
      id: 'fixing-memory-leaks-nodejs',
      title: 'How We Fixed a Critical Memory Leak in Production Node.js',
      excerpt: 'Our step-by-step investigation into a memory leak that crashed our client\'s servers every 6 hours, and the surprising root cause we discovered.',
      category: 'Web Development',
      date: 'Feb 10, 2026',
      author: 'NimbleSL Engineering',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80',
      keywords: ['Node.js memory leak', 'production debugging', 'Node.js performance', 'server crash fix']
    },
    {
      id: 'database-query-optimization',
      title: 'Reducing PostgreSQL Query Time from 45s to 200ms',
      excerpt: 'A real case study on how proper indexing, query restructuring, and connection pooling transformed a sluggish dashboard into a responsive tool.',
      category: 'Cloud Architecture',
      date: 'Feb 05, 2026',
      author: 'NimbleSL Engineering',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=600&q=80',
      keywords: ['PostgreSQL optimization', 'database performance', 'query optimization', 'indexing strategies']
    },
    {
      id: 'react-native-performance-crisis',
      title: 'Solving the 60fps Crisis in Our React Native App',
      excerpt: 'When our e-commerce app dropped to 15fps on scroll, we had to dig deep into the rendering pipeline. Here\'s how we achieved buttery smooth performance.',
      category: 'Mobile Development',
      date: 'Jan 30, 2026',
      author: 'NimbleSL Engineering',
      readTime: '9 min read',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80',
      keywords: ['React Native performance', 'mobile app optimization', '60fps', 'rendering pipeline']
    },
    {
      id: 'kubernetes-downtime-incident',
      title: 'Post-Mortem: The Kubernetes Incident That Taught Us Everything',
      excerpt: 'A transparent breakdown of how a misconfigured liveness probe caused cascading failures across our microservices and what we learned.',
      category: 'Cloud Architecture',
      date: 'Jan 25, 2026',
      author: 'NimbleSL Engineering',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=600&q=80',
      keywords: ['Kubernetes incident', 'post-mortem', 'liveness probe', 'microservices failure']
    },
    {
      id: 'authentication-security-overhaul',
      title: 'Rebuilding Authentication After a Security Audit Failure',
      excerpt: 'When penetration testing revealed critical vulnerabilities in our JWT implementation, we had 48 hours to fix it. This is our story.',
      category: 'Web Development',
      date: 'Jan 20, 2026',
      author: 'NimbleSL Engineering',
      readTime: '11 min read',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80',
      keywords: ['JWT security', 'authentication overhaul', 'penetration testing', 'security audit']
    },
    {
      id: 'real-time-sync-architecture',
      title: 'Building Real-Time Data Sync Without Breaking the Bank',
      excerpt: 'How we implemented collaborative editing for 10,000 concurrent users using WebSockets, Redis, and clever conflict resolution strategies.',
      category: 'Cloud Architecture',
      date: 'Jan 15, 2026',
      author: 'NimbleSL Engineering',
      readTime: '12 min read',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80',
      keywords: ['real-time sync', 'WebSockets', 'collaborative editing', 'conflict resolution']
    },
    {
      id: 'legacy-api-integration-nightmare',
      title: 'Integrating with a 15-Year-Old SOAP API: A Survival Guide',
      excerpt: 'The challenges, workarounds, and creative solutions we developed to connect modern React frontends with legacy enterprise systems.',
      category: 'Web Development',
      date: 'Jan 10, 2026',
      author: 'NimbleSL Engineering',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80',
      keywords: ['SOAP API integration', 'legacy systems', 'API modernization', 'enterprise integration']
    },
    {
      id: 'mobile-offline-first-strategy',
      title: 'Making Our Flutter App Work Offline in Rural Bangladesh',
      excerpt: 'Building a robust offline-first architecture for a healthcare app used in areas with unreliable connectivity. Sync conflicts and all.',
      category: 'Mobile Development',
      date: 'Jan 05, 2026',
      author: 'NimbleSL Engineering',
      readTime: '9 min read',
      image: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?w=600&q=80',
      keywords: ['Flutter offline', 'offline-first architecture', 'rural connectivity', 'healthcare app']
    },
    {
      id: 'ci-cd-pipeline-optimization',
      title: 'From 45 Minutes to 8 Minutes: Optimizing Our CI/CD Pipeline',
      excerpt: 'The incremental improvements, parallelization strategies, and caching techniques that dramatically reduced our deployment times.',
      category: 'Cloud Architecture',
      date: 'Dec 28, 2025',
      author: 'NimbleSL Engineering',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=600&q=80',
      keywords: ['CI/CD optimization', 'deployment pipeline', 'build caching', 'DevOps']
    },
    {
      id: 'debugging-production-api-timeout',
      title: 'The Mystery of Random API Timeouts at 3AM',
      excerpt: 'Investigating intermittent failures that only happened during off-peak hours led us to an unexpected discovery about connection pooling.',
      category: 'Web Development',
      date: 'Dec 22, 2025',
      author: 'NimbleSL Engineering',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=600&q=80',
      keywords: ['API timeout debugging', 'connection pooling', 'production debugging', 'intermittent failures']
    }
  ];

  categories = ['All', 'Artificial Intelligence', 'Cloud Architecture', 'Web Development', 'Mobile Development', 'Product Updates', 'Inside NimbleSL'];
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
    this.currentPage = 1;
  }
}
