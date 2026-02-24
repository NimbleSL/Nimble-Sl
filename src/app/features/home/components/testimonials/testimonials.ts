import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Testimonial {
  id: number;
  content: string;
  author: string;
  role: string;
  company: string;
  initials: string;
  rating: number;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.scss'
})
export class TestimonialsComponent {
  testimonials: Testimonial[] = [
    {
      id: 1,
      content: "NimbleSL delivered our enterprise web application 3 weeks ahead of schedule. Their attention to detail and proactive communication made them an exceptional development partner.",
      author: 'Sarah Chen',
      role: 'CTO',
      company: 'FinTech Solutions',
      initials: 'SC',
      rating: 5
    },
    {
      id: 2,
      content: "The custom AI chatbot they built for our customer service resolved 40% of our tickets automatically. Absolutely brilliant engineering from a stellar team in Bangladesh.",
      author: 'Marcus Johnson',
      role: 'Operations Director',
      company: 'RetailHub',
      initials: 'MJ',
      rating: 5
    },
    {
      id: 3,
      content: "We migrated our entire legacy infrastructure to AWS with zero downtime, thanks to Nimble. Highly recommended for complex cloud architectures.",
      author: 'Elena Rodriguez',
      role: 'VP of Engineering',
      company: 'HealthTech Global',
      initials: 'ER',
      rating: 5
    }
  ];
}
