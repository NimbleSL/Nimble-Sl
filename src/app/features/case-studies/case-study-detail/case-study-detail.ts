import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CaseStudy, CASE_STUDIES_DATA } from '../../../shared/data/case-studies.data';

@Component({
  selector: 'app-case-study-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './case-study-detail.html',
  styleUrl: './case-study-detail.scss',
})
export class CaseStudyDetailComponent implements OnInit {
  caseStudy: CaseStudy | undefined;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.caseStudy = CASE_STUDIES_DATA.find(cs => cs.id === id);

      if (!this.caseStudy) {
        this.router.navigate(['/case-studies']);
      }
    });
  }
}
