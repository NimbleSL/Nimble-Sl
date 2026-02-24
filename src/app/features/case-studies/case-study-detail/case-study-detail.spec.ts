import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseStudyDetail } from './case-study-detail';

describe('CaseStudyDetail', () => {
  let component: CaseStudyDetail;
  let fixture: ComponentFixture<CaseStudyDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaseStudyDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaseStudyDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
