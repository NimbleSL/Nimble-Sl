import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './components/hero/hero.component';
import { TrustedByComponent } from './components/trusted-by/trusted-by.component';
import { ServicesGridComponent } from './components/services-grid/services-grid.component';
import { ProductsShowcaseComponent } from './components/products-showcase/products-showcase.component';
import { CaseStudiesPreviewComponent } from './components/case-studies-preview/case-studies-preview.component';
import { CtaSectionComponent } from './components/cta-section/cta-section.component';
import { TestimonialsComponent } from './components/testimonials/testimonials';
import { BlogPreviewComponent } from './components/blog-preview/blog-preview';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    TrustedByComponent,
    ServicesGridComponent,
    ProductsShowcaseComponent,
    CaseStudiesPreviewComponent,
    TestimonialsComponent,
    BlogPreviewComponent,
    CtaSectionComponent
  ],
  template: `
    <main class="home">
      <app-hero />
      <app-trusted-by />
      <app-services-grid />
      <app-products-showcase />
      <app-case-studies-preview />
      <app-testimonials />
      <app-blog-preview />
      <app-cta-section />
    </main>
  `,
  styles: [`
    .home {
      // Smooth scrolling for anchor links
      scroll-behavior: smooth;
    }
  `]
})
export class HomeComponent { }
