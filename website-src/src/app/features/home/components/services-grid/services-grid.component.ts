import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
}

@Component({
  selector: 'app-services-grid',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './services-grid.component.html',
  styleUrl: './services-grid.component.scss'
})
export class ServicesGridComponent {
  services: Service[] = [
    {
      id: 'custom-software',
      icon: 'code',
      title: 'Custom Software',
      description: 'Tailored enterprise solutions designed to solve your unique business challenges and drive growth.',
      features: ['Enterprise Platforms', 'SaaS Products', 'Legacy Modernization']
    },
    {
      id: 'digital-products',
      icon: 'layers',
      title: 'Digital Products',
      description: 'Modern web and mobile applications that deliver exceptional user experiences across all devices.',
      features: ['Web Applications', 'Mobile Apps', 'Progressive Web Apps']
    },
    {
      id: 'ai-cloud',
      icon: 'cpu',
      title: 'AI & Cloud',
      description: 'Intelligent solutions powered by AI and scalable cloud infrastructure for the modern enterprise.',
      features: ['AI Integration', 'Cloud Migration', 'DevOps & Infrastructure']
    }
  ];
}
