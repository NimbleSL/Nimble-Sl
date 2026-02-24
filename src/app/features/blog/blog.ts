import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
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
export class BlogComponent {
  featuredPost: BlogPost = {
    id: 'ai-in-enterprise',
    title: 'The Future of AI in Enterprise Software Development',
    excerpt: 'How large language models and RAG architectures are fundamentally transforming how businesses build and interact with internal tools. A deep dive into NimbleSL\'s approach to integrating generative AI into existing systems.',
    category: 'Artificial Intelligence',
    readTime: '6 min read'
  };

  posts: BlogPost[] = [
    {
      id: 'from-monolith-to-microservices',
      title: 'Scaling from Monolith to Microservices on AWS',
      excerpt: 'A practical, technical deep-dive into the strategies and pitfalls of breaking down legacy applications for modern cloud environments.',
      category: 'Cloud Architecture',
      readTime: '8 min read'
    },
    {
      id: 'modern-frontend-angular',
      title: 'Why Angular 19+ is the Enterprise Choice for 2026',
      excerpt: 'Exploring the new reactive primitives, standalone components, and performance gains that make modern Angular a powerhouse.',
      category: 'Web Development',
      readTime: '5 min read'
    },
    {
      id: 'cross-platform-flutter',
      title: 'Flutter vs React Native: Making the Right Choice',
      excerpt: 'An objective comparison of the two leading cross-platform frameworks based on production applications we have built and deployed.',
      category: 'Mobile Development',
      readTime: '7 min read'
    },
    {
      id: 'engineering-culture',
      title: 'Building a Remote-First Engineering Culture',
      excerpt: 'How NimbleSL maintains high velocity and code quality across different timezones without burning out our engineering team.',
      category: 'Inside NimbleSL',
      readTime: '4 min read'
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
