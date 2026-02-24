import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../shared/services/seo/seo.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {
  constructor(private seoService: SeoService) {}

  ngOnInit(): void {
    this.seoService.updateSeo({
      title: 'About Us',
      description: 'Learn about Nimble Software Lab - a leading software development company in Bangladesh. Meet our team, discover our values, and see how we deliver excellence in custom software development.',
      keywords: 'about nimble software lab, software development team bangladesh, IT company dhaka, software engineers bangladesh',
      url: 'https://www.nimblesl.com/about'
    });
    this.seoService.setBreadcrumbSchema([
      { name: 'Home', url: 'https://www.nimblesl.com/' },
      { name: 'About Us', url: 'https://www.nimblesl.com/about' }
    ]);
  }
  stats = [
    { value: '50+', label: 'Projects Delivered' },
    { value: '12', label: 'Countries Served' },
    { value: '40-60%', label: 'Cost Savings' },
    { value: '98%', label: 'Client Retention' }
  ];

  values = [
    {
      icon: 'users',
      title: 'Client-Centric',
      description: 'Your success is our success. We align our goals with yours and work as an extension of your team.'
    },
    {
      icon: 'shield',
      title: 'Transparency',
      description: 'No hidden costs, no surprises. We maintain open communication and provide daily updates on progress.'
    },
    {
      icon: 'zap',
      title: 'Excellence',
      description: 'We don\'t settle for "good enough". We deliver enterprise-grade quality code that is scalable and secure.'
    },
    {
      icon: 'clock',
      title: 'Agility',
      description: 'We move fast without breaking things. Our agile process ensures rapid delivery and adaptability to change.'
    }
  ];

  industries = [
    'Healthcare & HealthTech',
    'FinTech & Banking',
    'E-commerce & Retail',
    'SaaS & Enterprise Software',
    'Education & EdTech',
    'Logistics & Supply Chain',
    'Real Estate & PropTech',
    'Startups & MVP Development'
  ];
}
