import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CaseStudy, CASE_STUDIES_DATA } from '../../../shared/data/case-studies.data';
import { SeoService } from '../../../shared/services/seo/seo.service';

@Component({
  selector: 'app-case-study-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './case-study-detail.html',
  styleUrl: './case-study-detail.scss',
})
export class CaseStudyDetailComponent implements OnInit {
  caseStudy: CaseStudy | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private seoService: SeoService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.caseStudy = CASE_STUDIES_DATA.find(cs => cs.id === id);

      if (!this.caseStudy) {
        this.router.navigate(['/case-studies']);
      } else {
        this.seoService.updateSeo({
          title: `${this.caseStudy.title} - Case Study`,
          description: this.caseStudy.description,
          keywords: `${this.caseStudy.industry.toLowerCase()}, case study, software development, ${this.caseStudy.technologies.join(', ')}`,
          url: `https://www.nimblesl.com/case-studies/${this.caseStudy.id}`
        });
        this.seoService.setBreadcrumbSchema([
          { name: 'Home', url: 'https://www.nimblesl.com/' },
          { name: 'Case Studies', url: 'https://www.nimblesl.com/case-studies' },
          { name: this.caseStudy.title, url: `https://www.nimblesl.com/case-studies/${this.caseStudy.id}` }
        ]);
      }
    });
  }
}
