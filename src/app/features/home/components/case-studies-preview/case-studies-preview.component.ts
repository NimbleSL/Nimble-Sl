import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { CaseStudy, CASE_STUDIES_DATA } from '../../../../shared/data/case-studies.data';

@Component({
  selector: 'app-case-studies-preview',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './case-studies-preview.component.html',
  styleUrl: './case-studies-preview.component.scss'
})
export class CaseStudiesPreviewComponent {
  caseStudies: CaseStudy[] = CASE_STUDIES_DATA.slice(0, 4);
}
