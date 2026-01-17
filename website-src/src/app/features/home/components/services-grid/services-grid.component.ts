import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  technologies: string[];
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
      description: 'Tailored enterprise solutions designed to address your unique business challenges and drive growth.',
      technologies: ['.NET Core', 'Node.js', 'Python']
    },
    {
      id: 'web-development',
      icon: 'globe',
      title: 'Web Applications',
      description: 'Modern, scalable, and secure web applications that deliver exceptional user experiences.',
      technologies: ['React', 'Angular', 'Vue.js']
    },
    {
      id: 'mobile-apps',
      icon: 'smartphone',
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications for iOS and Android platforms.',
      technologies: ['Flutter', 'React Native', 'Swift']
    },
    {
      id: 'cloud-solutions',
      icon: 'cloud',
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services for modern enterprises.',
      technologies: ['AWS', 'Azure', 'Google Cloud']
    },
    {
      id: 'ai-ml',
      icon: 'brain',
      title: 'AI & ML Solutions',
      description: 'Intelligent AI-powered solutions including chatbots, computer vision, and NLP.',
      technologies: ['OpenAI', 'TensorFlow', 'PyTorch']
    },
    {
      id: 'ui-ux',
      icon: 'palette',
      title: 'UI/UX Design',
      description: 'User-centric design that creates intuitive and engaging digital experiences.',
      technologies: ['Figma', 'Design Systems', 'Prototyping']
    }
  ];
}
