import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeoService } from '../../shared/services/seo/seo.service';
import { CtaSectionComponent } from '../home/components/cta-section/cta-section.component';

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  activities: string[];
}

@Component({
  selector: 'app-process',
  standalone: true,
  imports: [CommonModule, CtaSectionComponent],
  templateUrl: './process.html',
  styleUrl: './process.scss'
})
export class Process implements OnInit {
  steps: ProcessStep[] = [
    {
      number: '01',
      title: 'Discovery & Strategy',
      description: 'We start by deeply understanding your business goals, target audience, and technical requirements. This phase ensures we build the right product, not just a product built right.',
      activities: [
        'Stakeholder interviews & workshops',
        'Requirements gathering & analysis',
        'Technical feasibility study',
        'Project roadmap & architecture planning'
      ]
    },
    {
      number: '02',
      title: 'UI/UX Design',
      description: 'Our design team translates requirements into intuitive, user-centric interfaces. We focus on creating seamless experiences that drive engagement and conversions.',
      activities: [
        'User journey mapping & wireframing',
        'Interactive rapid prototyping',
        'Visual identity & UI design',
        'Design system creation'
      ]
    },
    {
      number: '03',
      title: 'Agile Development',
      description: 'We build your product in iterative two-week sprints, ensuring constant progress and flexibility to adapt to changing market needs.',
      activities: [
        'Sprint planning & daily standups',
        'Front-end & Back-end engineering',
        'Database & API development',
        'Bi-weekly client demos'
      ]
    },
    {
      number: '04',
      title: 'Quality Assurance',
      description: 'Quality is built-in from day one. Our QA engineers execute rigorous automated and manual tests to ensure your software is robust, secure, and bug-free.',
      activities: [
        'Automated unit & integration testing',
        'Manual UI/UX testing',
        'Performance & load testing',
        'Security & penetration testing'
      ]
    },
    {
      number: '05',
      title: 'Deployment & Launch',
      description: 'We smoothly transition your product from staging to production with zero downtime, using automated CI/CD pipelines and cloud-native infrastructure.',
      activities: [
        'Cloud infrastructure setup (AWS/GCP)',
        'CI/CD pipeline configuration',
        'App store submission (iOS/Android)',
        'Production environment monitoring'
      ]
    },
    {
      number: '06',
      title: 'Support & Evolution',
      description: 'Launch is just the beginning. We provide ongoing maintenance, feature updates, and performance optimizations as your business scales.',
      activities: [
        '24/7 infrastructure monitoring',
        'Bug fixes & security patches',
        'New feature development',
        'Performance scaling optimizations'
      ]
    }
  ];

  constructor(private seoService: SeoService) { }

  ngOnInit(): void {
    this.seoService.updateSeo({
      title: 'Our Process | How We Build Software',
      description: 'Discover NimbleSL\'s proven Agile development process. From discovery and design to development, QA, and deployment, learn how we ensure project success.',
      keywords: 'agile software development, custom software process, software development lifecycle, nimble software lab process, how we work',
      url: 'https://www.nimblesl.com/process'
    });

    this.seoService.setBreadcrumbSchema([
      { name: 'Home', url: 'https://www.nimblesl.com/' },
      { name: 'Process', url: 'https://www.nimblesl.com/process' }
    ]);
  }
}
