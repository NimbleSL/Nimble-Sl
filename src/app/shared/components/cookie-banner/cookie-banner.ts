import { Component, PLATFORM_ID, Inject, OnInit } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-cookie-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cookie-banner.html',
  styleUrl: './cookie-banner.scss'
})
export class CookieBannerComponent implements OnInit {
  isVisible = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      const consent = localStorage.getItem('cookieConsent');
      if (!consent) {
        // slight delay for animation
        setTimeout(() => this.isVisible = true, 1000);
      }
    }
  }

  accept() {
    this.isVisible = false;
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('cookieConsent', 'accepted');
    }
  }

  decline() {
    this.isVisible = false;
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('cookieConsent', 'declined');
    }
  }
}
