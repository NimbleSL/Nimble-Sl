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
      readTime: '6 min read'
    },
    {
      id: 'from-monolith-to-microservices',
      title: 'Scaling from Monolith to Microservices on AWS',
      excerpt: 'A practical, technical deep-dive into the strategies and pitfalls of breaking down legacy applications for modern cloud environments.',
      category: 'Cloud Architecture',
      date: 'Feb 02, 2026',
      readTime: '8 min read'
    },
    {
      id: 'modern-frontend-angular',
      title: 'Why Angular 19+ is the Enterprise Choice for 2026',
      excerpt: 'Exploring the new reactive primitives, standalone components, and performance gains that make modern Angular a powerhouse.',
      category: 'Web Development',
      date: 'Jan 22, 2026',
      readTime: '5 min read'
    }
  ];
}
