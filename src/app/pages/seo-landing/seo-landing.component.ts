import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-seo-landing',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './seo-landing.component.html',
  styleUrl: './seo-landing.component.scss'
})
export class SeoLandingComponent {
  title = 'Software Development Company Bangladesh';
}
