import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { CaseStudy, CASE_STUDIES_DATA } from '../../shared/data/case-studies.data';
import { SeoService } from '../../shared/services/seo/seo.service';

@Component({
  selector: 'app-case-studies',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './case-studies.component.html',
  styleUrl: './case-studies.component.scss'
})
export class CaseStudiesComponent implements OnInit {
  constructor(private seoService: SeoService) {}

  ngOnInit(): void {
    this.seoService.updateSeo({
      title: 'Case Studies',
      description: 'Explore our portfolio of successful software development projects. See how we helped businesses achieve their goals with custom software, web apps, and AI solutions.',
      keywords: 'software case studies, development portfolio, successful projects, enterprise software examples, web app case study',
      url: 'https://www.nimblesl.com/case-studies'
    });
    this.seoService.setBreadcrumbSchema([
      { name: 'Home', url: 'https://www.nimblesl.com/' },
      { name: 'Case Studies', url: 'https://www.nimblesl.com/case-studies' }
    ]);
  }
  caseStudies: CaseStudy[] = CASE_STUDIES_DATA;

  currentPage = 1;
  itemsPerPage = 6;

  get totalPages(): number {
    return Math.ceil(this.caseStudies.length / this.itemsPerPage);
  }

  get paginatedCases(): CaseStudy[] {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.caseStudies.slice(start, start + this.itemsPerPage);
  }

  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  setPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}
