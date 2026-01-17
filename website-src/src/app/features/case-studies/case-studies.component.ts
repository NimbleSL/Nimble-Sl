import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-case-studies',
  standalone: true,
  imports: [CommonModule],
  template: `
    <main class="page case-studies-page">
      <section class="page-hero">
        <div class="container">
          <span class="text-overline">Our Work</span>
          <h1 class="page-title">
            Case<br/>
            <span class="text-accent">Studies</span>
          </h1>
          <p class="page-subtitle">
            See how we've helped companies build software that 
            delivers real business results.
          </p>
        </div>
      </section>
    </main>
  `,
  styleUrl: './case-studies.component.scss'
})
export class CaseStudiesComponent { }
