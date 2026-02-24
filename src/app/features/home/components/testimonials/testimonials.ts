import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Testimonial {
  id: number;
  content: string;
  company: string;
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
      company: 'Rosachy',
      rating: 5
    },
    {
      id: 2,
      content: "The custom AI chatbot they built for our customer service resolved 40% of our tickets automatically. Absolutely brilliant engineering from a stellar team.",
      company: 'North Avenue',
      rating: 5
    },
    {
      id: 3,
      content: "We migrated our entire legacy infrastructure to AWS with zero downtime, thanks to Nimble. Highly recommended for complex cloud architectures.",
      company: 'HayaaCola',
      rating: 5
    },
    {
      id: 4,
      content: "Outstanding mobile app development. They transformed our vision into a seamless cross-platform experience that our users love.",
      company: 'CH15',
      rating: 5
    },
    {
      id: 5,
      content: "Their expertise in modern web technologies helped us launch our platform faster than expected. Professional team with excellent technical skills.",
      company: 'WPEDO',
      rating: 5
    },
    {
      id: 6,
      content: "From initial consultation to final delivery, NimbleSL exceeded our expectations. Their agile approach and transparent communication were impressive.",
      company: 'Blackstone Vale',
      rating: 5
    }
  ];
}
