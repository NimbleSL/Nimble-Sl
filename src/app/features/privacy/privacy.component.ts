import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeoService } from '../../shared/services/seo/seo.service';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './privacy.component.html',
  styleUrl: './privacy.component.scss'
})
export class PrivacyComponent implements OnInit {
  currentDate: string = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  constructor(private seoService: SeoService) {}

  ngOnInit(): void {
    this.seoService.updateSeo({
      title: 'Privacy Policy',
      description: 'Read our privacy policy to understand how Nimble Software Lab collects, uses, and protects your personal information.',
      keywords: 'privacy policy, data protection, nimble software lab privacy',
      url: 'https://www.nimblesl.com/privacy'
    });
  }
}
