import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './components/hero/hero.component';
import { TrustedByComponent } from './components/trusted-by/trusted-by.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ServicesGridComponent } from './components/services-grid/services-grid.component';
import { ProductsShowcaseComponent } from './components/products-showcase/products-showcase.component';
import { CaseStudiesPreviewComponent } from './components/case-studies-preview/case-studies-preview.component';
import { CtaSectionComponent } from './components/cta-section/cta-section.component';
import { TestimonialsComponent } from './components/testimonials/testimonials';
import { BlogPreviewComponent } from './components/blog-preview/blog-preview';
import { SeoService } from '../../shared/services/seo/seo.service';
import { Compliances } from './components/compliances/compliances';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    TrustedByComponent,
    Compliances,
    ClientsComponent,
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
      <app-compliances />
      <app-services-grid />
      <app-clients />
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
export class HomeComponent implements OnInit {
  constructor(private seoService: SeoService) { }

  ngOnInit(): void {
    this.seoService.updateSeo({
      title: 'Nimble Software Lab | Software Development Company Bangladesh',
      description: 'Leading software development company in Bangladesh offering custom software, web apps, mobile apps, cloud solutions, and AI services to clients worldwide.',
      keywords: 'software development company bangladesh, web development bangladesh, mobile app development dhaka, custom software development, AI solutions, cloud solutions',
      url: 'https://www.nimblesl.com/'
    });
    this.seoService.setOrganizationSchema();
  }
}
