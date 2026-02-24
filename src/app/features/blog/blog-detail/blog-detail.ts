import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../../shared/services/seo/seo.service';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './blog-detail.html',
  styleUrl: './blog-detail.scss'
})
export class BlogDetailComponent implements OnInit {

  // Dummy post for preview
  post = {
    title: 'The Future of AI in Enterprise Software Development',
    category: 'Artificial Intelligence',
    readTime: '6 min read'
  };

  constructor(private location: Location, private seoService: SeoService) { }

  ngOnInit(): void {
    this.seoService.updateSeo({
      title: this.post.title,
      description: `Read about ${this.post.title} - insights from Nimble Software Lab's technical blog on ${this.post.category}.`,
      keywords: `${this.post.category.toLowerCase()}, software development, technical blog, nimble software lab`,
      url: 'https://www.nimblesl.com/blog/ai-in-enterprise',
      type: 'article'
    });
    this.seoService.setArticleSchema({
      title: this.post.title,
      description: `Insights on ${this.post.title}`,
      image: 'https://www.nimblesl.com/assets/images/logo/logo.png',
      datePublished: '2025-02-01'
    });
  }

  goBack(): void {
    this.location.back();
  }
}
