import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  status: 'live' | 'coming-soon';
  color: string;
  icon: string;
}

@Component({
  selector: 'app-products-showcase',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './products-showcase.component.html',
  styleUrl: './products-showcase.component.scss'
})
export class ProductsShowcaseComponent {
  products: Product[] = [
    {
      id: 'nimblebot',
      name: 'NimbleBot',
      tagline: 'AI-Powered Customer Engagement',
      description: 'Enterprise-grade RAG chatbot platform that lets businesses create intelligent AI assistants powered by their own knowledge base. Train on your docs, deploy anywhere.',
      features: [
        'RAG-based knowledge retrieval',
        'Multi-language support',
        'Widget customization',
        'Lead qualification & handoff',
        'Analytics dashboard'
      ],
      status: 'live',
      color: 'purple',
      icon: 'bot'
    },
    {
      id: 'nimblesoft',
      name: 'NimbleSoft ERP',
      tagline: 'All-in-One Business Management',
      description: 'Complete ERP solution for small to medium businesses with HR, Finance, Project Management, and Client Portal. Everything your growing business needs.',
      features: [
        'Employee & HR Management',
        'Invoice & Financial Tracking',
        'Project Management',
        'Role-based Access Control',
        'Full Audit Trail'
      ],
      status: 'coming-soon',
      color: 'green',
      icon: 'building'
    }
  ];
}
