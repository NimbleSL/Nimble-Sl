import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngagementModels } from './engagement-models';

describe('EngagementModels', () => {
  let component: EngagementModels;
  let fixture: ComponentFixture<EngagementModels>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EngagementModels]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EngagementModels);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
