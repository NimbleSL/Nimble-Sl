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
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  products: Product[] = [
    {
      id: 'nimblebot',
      name: 'NimbleBot',
      tagline: 'AI-Powered Customer Engagement',
      description: 'Enterprise-grade RAG chatbot platform that lets businesses create intelligent AI assistants powered by their own knowledge base. Upload your docs, train your bot, deploy anywhere.',
      features: [
        'RAG-based knowledge retrieval using state-of-the-art embeddings',
        'Multi-language support with automatic detection',
        'Fully customizable widget (colors, position, branding)',
        'Lead qualification forms and human handoff',
        'Real-time analytics dashboard',
        'WhatsApp & Messenger integration (coming soon)'
      ],
      status: 'live',
      color: 'purple'
    },
    {
      id: 'nimblesoft',
      name: 'NimbleSoft ERP',
      tagline: 'All-in-One Business Management for Growing Companies',
      description: 'Complete ERP solution for small to medium businesses. Manage HR, Finance, Projects, and Clients from one platform. Built for teams of 10-200 employees.',
      features: [
        'Employee Management: Offer letters, Appointments, Attendance',
        'Financial Management: Invoices, Receipts, Vouchers',
        'Project Tracking with Work Logs and Timesheets',
        'Client Portal with document management',
        'Role-based Access Control with full audit trail',
        'Template-based document generation (PDF, Email)'
      ],
      status: 'coming-soon',
      color: 'green'
    }
  ];
}
