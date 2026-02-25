import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeoService } from '../../shared/services/seo/seo.service';
import { CtaSectionComponent } from '../home/components/cta-section/cta-section.component';
import { RouterLink } from '@angular/router';

interface Industry {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  image: string;
}

@Component({
  selector: 'app-industries',
  standalone: true,
  imports: [CommonModule, CtaSectionComponent, RouterLink],
  templateUrl: './industries.html',
  styleUrl: './industries.scss'
})
export class Industries implements OnInit {
  industries: Industry[] = [
    {
      id: 'fintech',
      title: 'Financial Technology (FinTech)',
      description: 'Secure, scalable, and compliant financial software solutions. We build robust systems for payments, digital banking, and financial management.',
      icon: 'assets/icons/finance.svg', // Will use inline svg safely
      features: [
        'Secure Payment Gateways',
        'Digital Wallets & Banking apps',
        'Algorithmic Trading Platforms',
        'Fraud Detection Systems (AI-powered)'
      ],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80'
    },
    {
      id: 'healthcare',
      title: 'Healthcare & MedTech',
      description: 'HIPAA-compliant medical applications designed to improve patient care, streamline hospital operations, and securely manage health records.',
      icon: 'assets/icons/health.svg',
      features: [
        'Telemedicine Platforms',
        'Electronic Health Records (EHR)',
        'Hospital Management Systems',
        'Medical IoT Applications'
      ],
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80'
    },
    {
      id: 'enterprise-saas',
      title: 'Enterprise SaaS & ERP',
      description: 'Transforming legacy operations into modern cloud-based ecosystems. Custom ERPs and SaaS products built for scale and multi-tenancy.',
      icon: 'assets/icons/enterprise.svg',
      features: [
        'Custom CRM & ERP Systems',
        'Cloud Migration & Modernization',
        'Multi-tenant SaaS Architecture',
        'Supply Chain Management'
      ],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80'
    },
    {
      id: 'ecommerce',
      title: 'Retail & E-commerce',
      description: 'High-performance e-commerce platforms capable of handling massive traffic spikes, complex inventory, and omnichannel retail operations.',
      icon: 'assets/icons/retail.svg',
      features: [
        'B2B / B2C E-commerce Platforms',
        'Inventory & Order Management',
        'Omnichannel Retail Solutions',
        'AI Recommendation Engines'
      ],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80'
    },
    {
      id: 'edtech',
      title: 'EdTech & E-Learning',
      description: 'Interactive learning management systems and virtual classroom software that makes education accessible, engaging, and measurable.',
      icon: 'assets/icons/education.svg',
      features: [
        'Learning Management Systems (LMS)',
        'Virtual Classroom Platforms',
        'Student Information Systems (SIS)',
        'AI-driven Personalized Learning'
      ],
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80'
    }
  ];

  constructor(private seoService: SeoService) { }

  ngOnInit(): void {
    this.seoService.updateSeo({
      title: 'Industries We Serve | Nimble Software Lab',
      description: 'Discover the industries we serve. NimbleSL builds custom software solutions for FinTech, Healthcare, Enterprise SaaS, E-commerce, and EdTech.',
      keywords: 'custom software for fintech, healthcare software development, enterprise SaaS development, edtech software, ecommerce software development bangladesh',
      url: 'https://www.nimblesl.com/industries'
    });

    this.seoService.setBreadcrumbSchema([
      { name: 'Home', url: 'https://www.nimblesl.com/' },
      { name: 'Industries', url: 'https://www.nimblesl.com/industries' }
    ]);
  }
}
