import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeoService } from '../../shared/services/seo/seo.service';
import { CtaSectionComponent } from '../home/components/cta-section/cta-section.component';

interface TechItem {
  name: string;
  icon: string;
  color: string;
}

interface TechCategory {
  title: string;
  description: string;
  items: TechItem[];
}

@Component({
  selector: 'app-technologies',
  standalone: true,
  imports: [CommonModule, CtaSectionComponent],
  templateUrl: './technologies.html',
  styleUrl: './technologies.scss'
})
export class Technologies implements OnInit {
  categories: TechCategory[] = [
    {
      title: 'Frontend Development',
      description: 'Building responsive, accessible, and highly interactive user interfaces using modern JavaScript frameworks.',
      items: [
        { name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg', color: '#DD0031' },
        { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg', color: '#61DAFB' },
        { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg', color: '#000000' },
        { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg', color: '#4FC08D' },
        { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg', color: '#3178C6' },
        { name: 'Sass', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg', color: '#CC6699' }
      ]
    },
    {
      title: 'Backend & APIs',
      description: 'Architecting robust, scalable, and secure server-side applications and microservices.',
      items: [
        { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg', color: '#339933' },
        { name: 'NestJS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg', color: '#E0234E' },
        { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg', color: '#3776AB' },
        { name: '.NET Core', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg', color: '#512BD4' },
        { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg', color: '#ED8B00' },
        { name: 'GraphQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg', color: '#E10098' }
      ]
    },
    {
      title: 'Mobile App Development',
      description: 'Creating high-performance native and cross-platform applications for iOS and Android.',
      items: [
        { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg', color: '#02569B' },
        { name: 'React Native', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg', color: '#61DAFB' },
        { name: 'Swift', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-original.svg', color: '#F05138' },
        { name: 'Kotlin', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg', color: '#7F52FF' }
      ]
    },
    {
      title: 'Databases & AI',
      description: 'Structuring data for speed and integrating advanced Machine Learning models.',
      items: [
        { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg', color: '#4169E1' },
        { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg', color: '#47A248' },
        { name: 'Redis', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg', color: '#DC382D' },
        { name: 'TensorFlow', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg', color: '#FF6F00' },
        { name: 'PyTorch', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg', color: '#EE4C2C' }
      ]
    },
    {
      title: 'Cloud & DevOps',
      description: 'Automating deployments and managing highly available cloud infrastructure.',
      items: [
        { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', color: '#232F3E' },
        { name: 'Google Cloud', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg', color: '#4285F4' },
        { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg', color: '#2496ED' },
        { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg', color: '#326CE5' },
        { name: 'GitHub Actions', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg', color: '#181717' }
      ]
    }
  ];

  constructor(private seoService: SeoService) { }

  ngOnInit(): void {
    this.seoService.updateSeo({
      title: 'Our Tech Stack | Technologies We Use',
      description: 'Explore the modern technology stack utilized by Nimble Software Lab. We use Angular, Node.js, Python, Flutter, AWS, and cutting-edge AI tools to build scalable software.',
      keywords: 'custom software technologies, tech stack software agency, angular development, nodejs development, flutter app development, aws cloud architecture',
      url: 'https://www.nimblesl.com/technologies'
    });

    this.seoService.setBreadcrumbSchema([
      { name: 'Home', url: 'https://www.nimblesl.com/' },
      { name: 'Technologies', url: 'https://www.nimblesl.com/technologies' }
    ]);
  }
}
