import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { CaseStudy, CASE_STUDIES_DATA } from '../../shared/data/case-studies.data';

@Component({
  selector: 'app-case-studies',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './case-studies.component.html',
  styleUrl: './case-studies.component.scss'
})
export class CaseStudiesComponent {
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
