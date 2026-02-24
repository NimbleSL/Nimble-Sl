import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../shared/services/seo/seo.service';

@Component({
  selector: 'app-careers',
  imports: [],
  templateUrl: './careers.html',
  styleUrl: './careers.scss',
})
export class CareersComponent implements OnInit {
  constructor(private seoService: SeoService) {}

  ngOnInit(): void {
    this.seoService.updateSeo({
      title: 'Careers',
      description: 'Join Nimble Software Lab - a leading software development company in Bangladesh. Explore career opportunities in software development, web development, mobile apps, and AI.',
      keywords: 'software developer jobs bangladesh, IT jobs dhaka, web developer career, mobile developer jobs, AI engineer jobs',
      url: 'https://www.nimblesl.com/careers'
    });
    this.seoService.setBreadcrumbSchema([
      { name: 'Home', url: 'https://www.nimblesl.com/' },
      { name: 'Careers', url: 'https://www.nimblesl.com/careers' }
    ]);
  }
}
