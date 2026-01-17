import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  template: `
    <main class="page services-page">
      <section class="page-hero">
        <div class="container">
          <span class="text-overline">Our Services</span>
          <h1 class="page-title">
            End-to-End<br/>
            <span class="text-accent">Software Solutions</span>
          </h1>
          <p class="page-subtitle">
            From ideation to deployment, we help you build software 
            that scales with your business.
          </p>
        </div>
      </section>
    </main>
  `,
  styleUrl: './services.component.scss'
})
export class ServicesComponent { }
