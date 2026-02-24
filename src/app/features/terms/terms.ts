import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../shared/services/seo/seo.service';

@Component({
  selector: 'app-terms',
  imports: [],
  templateUrl: './terms.html',
  styleUrl: './terms.scss',
})
export class TermsComponent implements OnInit {
  constructor(private seoService: SeoService) {}

  ngOnInit(): void {
    this.seoService.updateSeo({
      title: 'Terms & Conditions',
      description: 'Read the terms and conditions for using Nimble Software Lab services. Understand our policies, agreements, and service terms.',
      keywords: 'terms and conditions, service agreement, nimble software lab terms',
      url: 'https://www.nimblesl.com/terms'
    });
  }
}
