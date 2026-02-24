import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SeoService } from '../../shared/services/seo/seo.service';

interface ServiceDetail {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
  technologies: string[];
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent implements OnInit {
  services: ServiceDetail[] = [
    {
      id: 'custom-software',
      icon: 'code',
      title: 'Custom Software Development',
      description: 'We build tailored enterprise solutions designed to address your unique business challenges and drive growth. From architecture to deployment, we handle the entire lifecycle.',
      features: [
        'Enterprise Resource Planning (ERP)',
        'Customer Relationship Management (CRM)',
        'Supply Chain Management Systems',
        'Legacy System Modernization',
        'API Development & Integration'
      ],
      technologies: ['.NET Core', 'Node.js', 'Python', 'Java', 'PostgreSQL']
    },
    {
      id: 'web-development',
      icon: 'globe',
      title: 'Web Application Development',
      description: 'Create modern, scalable, and secure web applications that deliver exceptional user experiences. We build Single Page Applications (SPAs) and Progressive Web Apps (PWAs).',
      features: [
        'SaaS Product Development',
        'Progressive Web Apps (PWA)',
        'Single Page Applications (SPA)',
        'E-commerce Platforms',
        'Real-time Dashboards'
      ],
      technologies: ['React', 'Angular', 'Vue.js', 'Next.js', 'TypeScript']
    },
    {
      id: 'mobile-apps',
      icon: 'smartphone',
      title: 'Mobile App Development',
      description: 'Reach your customers on any device with our native and cross-platform mobile application development services for iOS and Android.',
      features: [
        'iOS App Development',
        'Android App Development',
        'Cross-Platform Development',
        'App Store Optimization',
        'Mobile UI/UX Design'
      ],
      technologies: ['Flutter', 'React Native', 'Swift', 'Kotlin', 'Firebase']
    },
    {
      id: 'cloud-solutions',
      icon: 'cloud',
      title: 'Cloud Solutions & DevOps',
      description: 'Leverage the power of the cloud with our scalable infrastructure and migration services. We ensure your applications are secure, available, and cost-efficient.',
      features: [
        'Cloud Infrastructure Setup',
        'Migration to Cloud',
        'CI/CD Pipeline Automation',
        'Serverless Architecture',
        'Containerization & Orchestration'
      ],
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes']
    },
    {
      id: 'ai-ml',
      icon: 'brain',
      title: 'AI & Machine Learning',
      description: 'Transform your business with intelligent AI-powered solutions. We implement cutting-edge algorithms to automate processes and gain insights.',
      features: [
        'Natural Language Processing (NLP)',
        'Computer Vision',
        'Predictive Analytics',
        'Chatbots & Virtual Assistants',
        'Recommendation Engines'
      ],
      technologies: ['OpenAI', 'LangChain', 'TensorFlow', 'PyTorch', 'Python']
    },
    {
      id: 'ui-ux',
      icon: 'palette',
      title: 'UI/UX Design',
      description: 'User-centric design that creates intuitive and engaging digital experiences. We focus on usability, accessibility, and visual appeal.',
      features: [
        'User Research & Personas',
        'Wireframing & Prototyping',
        'Design Systems',
        'Mobile & Web App Design',
        'Usability Testing'
      ],
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'Zeplin', 'InVision']
    }
  ];

  faqs = [
    {
      question: 'Do you build custom enterprise software?',
      answer: 'Yes, we specialize in Custom Software Development, including ERPs, CRMs, and Supply Chain Management Systems tailored to address your specific business challenges from architecture to deployment.'
    },
    {
      question: 'Can you develop both web and mobile applications?',
      answer: 'Absolutely. We build modern Web Applications (SPAs, PWAs, SaaS products) using React and Angular, as well as native and cross-platform Mobile Apps using Flutter and React Native for iOS and Android.'
    },
    {
      question: 'Do you provide cloud migration and DevOps services?',
      answer: 'Yes, our Cloud Solutions & DevOps team leverages AWS, Azure, and Google Cloud to set up scalable infrastructure, automate CI/CD pipelines, and securely migrate your existing applications to the cloud.'
    },
    {
      question: 'Can you integrate AI and Machine Learning into our products?',
      answer: 'Yes, we implement cutting-edge AI & Machine Learning algorithms for Natural Language Processing (NLP), Computer Vision, predictive analytics, and custom virtual assistants using tools like OpenAI and TensorFlow.'
    },
    {
      question: 'How do you handle the design of the applications?',
      answer: 'Our in-house UI/UX Design team focuses on user-centric design through wireframing, prototyping, and creating comprehensive design systems to ensure your applications are intuitive and engaging.'
    }
  ];

  activeFaqIndex: number | null = null;

  constructor(private route: ActivatedRoute, private seoService: SeoService) { }

  ngOnInit(): void {
    this.seoService.updateSeo({
      title: 'Services',
      description: 'Explore our comprehensive software development services including custom software, web apps, mobile apps, cloud solutions, AI/ML, and UI/UX design. Enterprise-grade solutions for businesses worldwide.',
      keywords: 'custom software development, web application development, mobile app development, cloud solutions, AI machine learning, UI UX design, software services bangladesh',
      url: 'https://www.nimblesl.com/services'
    });
    this.seoService.setBreadcrumbSchema([
      { name: 'Home', url: 'https://www.nimblesl.com/' },
      { name: 'Services', url: 'https://www.nimblesl.com/services' }
    ]);

    // Check for fragment and scroll to it
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        setTimeout(() => {
          const element = document.getElementById(fragment);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      }
    });
  }

  toggleFaq(index: number): void {
    this.activeFaqIndex = this.activeFaqIndex === index ? null : index;
  }
}
