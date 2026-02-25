import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isScrolled = signal(false);
  isMobileMenuOpen = signal(false);
  activeDropdown = signal<string | null>(null);

  navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    {
      label: 'Expertise',
      path: '', // No direct path, acts as a trigger
      subLinks: [
        { label: 'Industries We Serve', path: '/industries' },
        { label: 'Technologies We Use', path: '/technologies' },
        { label: 'Our Process', path: '/process' }
      ]
    },
    { label: 'Products', path: '/products' },
    { label: 'Case Studies', path: '/case-studies' },
    { label: 'Insights', path: '/blog' },
    { label: 'About', path: '/about' }
  ];

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled.set(window.scrollY > 20);
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen.update(v => !v);
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen.set(false);
    this.activeDropdown.set(null);
  }

  toggleDropdown(label: string, event: Event): void {
    event.preventDefault();
    if (this.activeDropdown() === label) {
      this.activeDropdown.set(null);
    } else {
      this.activeDropdown.set(label);
    }
  }

  setDropdown(label: string | null): void {
    if (!this.isMobileMenuOpen()) {
      this.activeDropdown.set(label);
    }
  }
}
