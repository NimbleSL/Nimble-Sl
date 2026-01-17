import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  color: string;
}

@Component({
  selector: 'app-case-studies',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './case-studies.component.html',
  styleUrl: './case-studies.component.scss'
})
export class CaseStudiesComponent {
  caseStudies: CaseStudy[] = [
    {
      id: 'ecommerce-platform',
      title: 'E-Commerce Platform Scale-Up',
      client: 'Major Retail Brand',
      industry: 'Retail & E-commerce',
      description: 'A comprehensive digital transformation for a retail giant, moving from legacy systems to a modern, scalable microservices architecture.',
      challenge: 'The client was facing frequent downtime during high-traffic events (Black Friday) and could not scale their inventory management across 50+ stores.',
      solution: 'We re-architected their platform using a microservices approach with Node.js and React. We implemented a unified inventory system synchronized in real-time across online and offline stores.',
      results: [
        '250% increase in online sales year-over-year',
        '40% reduction in operational costs',
        'Zero downtime during peak shopping seasons',
        'Real-time inventory visibility across all channels'
      ],
      technologies: ['React', 'Node.js', 'AWS', 'MongoDB', 'Redis'],
      color: 'blue'
    },
    {
      id: 'insurance-management',
      title: 'AI Fraud Detection System',
      client: 'FinTech Startup',
      industry: 'Financial Services',
      description: 'An intelligent claims processing system that uses machine learning to detect fraudulent activities and automate routine approvals.',
      challenge: 'Manual claims processing was slow (5-7 days) and prone to human error. The client was losing significant revenue to undetected fraud.',
      solution: 'We built a custom AI model to analyze claim patterns and flag anomalies. We integrated this into a new web portal for agents to review and approve claims efficiently.',
      results: [
        '75% reduction in fraudulent claims paid',
        '60% faster claims processing time (down to 2 days)',
        'Automated approval for 40% of standard claims',
        'Improved customer satisfaction scores by 35%'
      ],
      technologies: ['Python', 'TensorFlow', 'Azure', '.NET Core', 'Angular'],
      color: 'green'
    },
    {
      id: 'fleet-management',
      title: 'Smart Logistics Tracking',
      client: 'Logistics Provider',
      industry: 'Logistics & Supply Chain',
      description: 'End-to-end fleet management solution with real-time GPS tracking, route optimization, and driver mobile apps.',
      challenge: 'Inefficient route planning led to high fuel costs and delayed deliveries. Lack of real-time visibility made it hard to give accurate ETAs to customers.',
      solution: 'We developed a mobile app for drivers and a central dashboard for dispatchers. We implemented Google Maps API for route optimization and real-time location tracking.',
      results: [
        '35% reduction in monthly fuel costs',
        '50% faster delivery times on average',
        'Real-time tracking available for end customers',
        'Reduced driver idle time by 25%'
      ],
      technologies: ['Flutter', 'Node.js', 'PostgreSQL', 'Google Maps API', 'Socket.io'],
      color: 'orange'
    },
    {
      id: 'proptech-platform',
      title: 'Virtual Real Estate Experience',
      client: 'Property Developer',
      industry: 'Real Estate',
      description: 'Interactive property listing platform enabling virtual tours and AI-driven property recommendations.',
      challenge: 'Traditional property viewing was restricted by physical location and scheduling. The client wanted to reach international buyers without requiring travel.',
      solution: 'We created a web and mobile platform supporting 360-degree virtual tours. We added an AI recommendation engine to match buyers with properties based on preferences.',
      results: [
        '300% increase in international inquiries',
        '45% faster sales cycle',
        'Virtual tours replaced 60% of physical visits',
        '2x increase in lead conversion rate'
      ],
      technologies: ['Angular', '.NET Core', 'Azure Blob Storage', 'Three.js'],
      color: 'purple'
    }
  ];
}
