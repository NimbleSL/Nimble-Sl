import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface CaseStudy {
  id: string;
  title: string;
  industry: string;
  description: string;
  technologies: string[];
  metrics: { label: string; value: string }[];
  color: string;
}

@Component({
  selector: 'app-case-studies-preview',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './case-studies-preview.component.html',
  styleUrl: './case-studies-preview.component.scss'
})
export class CaseStudiesPreviewComponent {
  caseStudies: CaseStudy[] = [
    {
      id: 'ecommerce-platform',
      title: 'E-Commerce Platform',
      industry: 'Retail',
      description: 'Built a scalable e-commerce platform with React, .NET Core, and AWS infrastructure handling 10,000+ daily transactions.',
      technologies: ['React', '.NET Core', 'AWS'],
      metrics: [
        { label: 'Sales Increase', value: '250%' },
        { label: 'Cost Reduction', value: '40%' }
      ],
      color: 'blue'
    },
    {
      id: 'insurance-management',
      title: 'Insurance Management',
      industry: 'Financial Services',
      description: 'Implemented AI-powered fraud detection with ML algorithms and automated claims processing workflows.',
      technologies: ['Python', 'TensorFlow', 'Azure'],
      metrics: [
        { label: 'Fraud Reduction', value: '75%' },
        { label: 'Faster Processing', value: '60%' }
      ],
      color: 'green'
    },
    {
      id: 'fleet-management',
      title: 'Fleet Management',
      industry: 'Logistics',
      description: 'Built GPS tracking system with AI-powered route optimization and real-time mobile app for drivers.',
      technologies: ['Flutter', 'Node.js', 'Google Maps'],
      metrics: [
        { label: 'Fuel Savings', value: '35%' },
        { label: 'Faster Delivery', value: '50%' }
      ],
      color: 'orange'
    },
    {
      id: 'proptech-platform',
      title: 'PropTech Platform',
      industry: 'Real Estate',
      description: 'Created web and mobile apps with virtual tours and AI-powered property matching for buyers.',
      technologies: ['Angular', '.NET Core', 'Azure'],
      metrics: [
        { label: 'More Inquiries', value: '300%' },
        { label: 'Faster Sales', value: '45%' }
      ],
      color: 'purple'
    }
  ];
}
