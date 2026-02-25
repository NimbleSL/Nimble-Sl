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
      id: 'rag-vs-finetuning-business-chatbots',
      title: 'RAG vs Fine-Tuning: Which One Actually Works for Business Chatbots?',
      excerpt: 'We\'ve built chatbots both ways — fine-tuned and RAG-based. After shipping both to production, the difference in accuracy, cost, and maintenance was not what we expected.',
      category: 'Artificial Intelligence',
      date: 'Feb 22, 2026',
      readTime: '9 min read',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80'
    },
    {
      id: 'why-we-built-nimblebot',
      title: 'Why We Built NimbleBot: The Problem Nobody Was Solving Right',
      excerpt: 'Every chatbot platform we evaluated either required a PhD in prompt engineering or cost $500/month for basic features. So we built our own.',
      category: 'Product Updates',
      date: 'Feb 04, 2026',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80'
    },
    {
      id: 'insurance-fraud-detection-graph-neural-networks',
      title: 'How We Detected Insurance Fraud with 96% Accuracy Using Graph Neural Networks',
      excerpt: 'Traditional fraud detection looks at individual claims. We used Graph Attention Networks to catch organized fraud rings that rule-based systems miss.',
      category: 'Artificial Intelligence',
      date: 'Jan 17, 2026',
      readTime: '12 min read',
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&q=80'
    }
  ];
}
