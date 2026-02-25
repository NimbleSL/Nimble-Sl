import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface EngagementModel {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  bestFor: string;
  features: string[];
}

@Component({
  selector: 'app-engagement-models',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './engagement-models.html',
  styleUrl: './engagement-models.scss'
})
export class EngagementModels {
  models: EngagementModel[] = [
    {
      title: 'Dedicated Team',
      subtitle: 'Staff Augmentation',
      description: 'Hire our experienced engineers to work directly under your management, fully integrated as part of your in-house team.',
      icon: 'assets/icons/team.svg',
      bestFor: 'Long-term projects, scaling fast, filling skill gaps',
      features: [
        'Direct communication with developers',
        'Full control over the backlog',
        'Flexible team scaling',
        'Transparent monthly billing'
      ]
    },
    {
      title: 'Fixed-Price Project',
      subtitle: 'End-to-End Delivery',
      description: 'We take full responsibility for delivering a clearly defined scope of work within a set timeline and budget.',
      icon: 'assets/icons/project.svg',
      bestFor: 'Clear requirements, MVP development, strict budgets',
      features: [
        'Predictable timeline and cost',
        'Project management included',
        'Zero financial risk for you',
        'Clear milestones & deliverables'
      ]
    },
    {
      title: 'Time & Materials',
      subtitle: 'Agile & Flexible',
      description: 'Pay only for the exact hours worked by our team on tasks that can evolve as the project develops.',
      icon: 'assets/icons/clock.svg',
      bestFor: 'Evolving requirements, ongoing maintenance, R&D',
      features: [
        'Maximum flexibility to pivot',
        'Change scope at any time',
        'Pay-as-you-go methodology',
        'Agile sprint-based development'
      ]
    }
  ];
}
