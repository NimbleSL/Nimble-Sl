import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <main class="page about">
      <section class="page-hero">
        <div class="container">
          <span class="text-overline">About Us</span>
          <h1 class="page-title">
            Building Software<br/>
            <span class="text-accent">That Matters</span>
          </h1>
          <p class="page-subtitle">
            We're a team of passionate developers, designers, and problem-solvers 
            helping companies build exceptional software.
          </p>
        </div>
      </section>
    </main>
  `,
  styleUrl: './about.component.scss'
})
export class AboutComponent { }
