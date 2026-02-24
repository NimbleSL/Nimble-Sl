import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface BlogPostPreview {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
}

@Component({
  selector: 'app-blog-preview',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './blog-preview.html',
  styleUrl: './blog-preview.scss'
})
export class BlogPreviewComponent {
  posts: BlogPostPreview[] = [
    {
      id: 'ai-in-enterprise',
      title: 'The Future of AI in Enterprise Software Development',
      excerpt: 'How large language models and RAG architectures are fundamentally transforming how businesses build and interact with internal tools.',
      category: 'Artificial Intelligence',
      date: 'Feb 15, 2026',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80'
    },
    {
      id: 'fixing-memory-leaks-nodejs',
      title: 'How We Fixed a Critical Memory Leak in Production Node.js',
      excerpt: 'Our step-by-step investigation into a memory leak that crashed our client\'s servers every 6 hours, and the surprising root cause.',
      category: 'Web Development',
      date: 'Feb 10, 2026',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80'
    },
    {
      id: 'kubernetes-downtime-incident',
      title: 'Post-Mortem: The Kubernetes Incident That Taught Us Everything',
      excerpt: 'A transparent breakdown of how a misconfigured liveness probe caused cascading failures across our microservices.',
      category: 'Cloud Architecture',
      date: 'Feb 05, 2026',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=600&q=80'
    }
  ];
}
