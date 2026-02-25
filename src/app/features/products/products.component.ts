import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SeoService } from '../../shared/services/seo/seo.service';

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
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
  constructor(private seoService: SeoService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.seoService.updateSeo({
      title: 'Our Products',
      description: 'Discover our innovative software products - NimbleBot AI chatbot platform and NimbleSoft ERP. Enterprise-grade solutions built for modern businesses.',
      keywords: 'NimbleBot, AI chatbot, RAG chatbot, NimbleSoft ERP, business management software, software products bangladesh',
      url: 'https://www.nimblesl.com/products'
    });
    this.seoService.setBreadcrumbSchema([
      { name: 'Home', url: 'https://www.nimblesl.com/' },
      { name: 'Products', url: 'https://www.nimblesl.com/products' }
    ]);
  }

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

  // Waitlist Modal State
  showWaitlistModal = false;
  waitlistProductName = '';
  waitlistEmail = '';
  isSubmitting = false;
  submitStatus: 'idle' | 'success' | 'error' = 'idle';

  openWaitlist(productName: string): void {
    this.waitlistProductName = productName;
    this.waitlistEmail = '';
    this.submitStatus = 'idle';
    this.showWaitlistModal = true;
  }

  closeWaitlist(): void {
    this.showWaitlistModal = false;
    this.waitlistProductName = '';
    this.waitlistEmail = '';
    this.submitStatus = 'idle';
  }

  submitWaitlist(): void {
    if (!this.waitlistEmail) return;

    this.isSubmitting = true;
    this.submitStatus = 'idle';
    this.cdr.detectChanges();

    fetch('https://formsubmit.co/ajax/nimblesoftwarelab@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        email: this.waitlistEmail,
        product: this.waitlistProductName,
        _subject: `Waitlist Signup - ${this.waitlistProductName}`
      })
    })
      .then(response => {
        if (response.ok) {
          this.submitStatus = 'success';
          this.waitlistEmail = '';
        } else {
          this.submitStatus = 'error';
        }
      })
      .catch(() => {
        this.submitStatus = 'error';
      })
      .finally(() => {
        this.isSubmitting = false;
        this.cdr.detectChanges();
      });
  }
}
