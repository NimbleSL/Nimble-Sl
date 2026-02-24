import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
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
