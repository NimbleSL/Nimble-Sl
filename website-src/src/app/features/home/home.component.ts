import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './components/hero/hero.component';
import { TrustedByComponent } from './components/trusted-by/trusted-by.component';
import { ServicesGridComponent } from './components/services-grid/services-grid.component';
import { CtaSectionComponent } from './components/cta-section/cta-section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    TrustedByComponent,
    ServicesGridComponent,
    CtaSectionComponent
  ],
  template: `
    <main class="home">
      <app-hero />
      <app-trusted-by />
      <app-services-grid />
      <app-cta-section />
    </main>
  `,
  styles: [`
    .home {
      // Page-level styles if needed
    }
  `]
})
export class HomeComponent { }
