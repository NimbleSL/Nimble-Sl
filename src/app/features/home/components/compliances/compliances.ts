import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ComplianceBadge {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
}

@Component({
  selector: 'app-compliances',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './compliances.html',
  styleUrl: './compliances.scss'
})
export class Compliances {
  badges: ComplianceBadge[] = [
    {
      id: 'gdpr',
      name: 'GDPR Compliant',
      description: 'We follow strict European data protection and privacy standards.',
      icon: 'assets/icons/gdpr.svg',
      color: '#0ea5e9' // Sky blue
    },
    {
      id: 'hipaa',
      name: 'HIPAA Compliant',
      description: 'Our healthcare solutions meet US medical data security regulations.',
      icon: 'assets/icons/hipaa.svg',
      color: '#10b981' // Emerald green
    }
  ];
}
