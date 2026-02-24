import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog-detail.html',
  styleUrl: './blog-detail.scss'
})
export class BlogDetailComponent {

  // Dummy post for preview
  post = {
    title: 'The Future of AI in Enterprise Software Development',
    category: 'Artificial Intelligence',
    readTime: '6 min read'
  };

  constructor(private location: Location) { }

  goBack(): void {
    this.location.back();
  }
}
