import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface FooterLink {
  label: string;
  path: string;
  external?: boolean;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  footerSections: FooterSection[] = [
    {
      title: 'Services',
      links: [
        { label: 'Custom Software', path: '/services#custom-software' },
        { label: 'Web Applications', path: '/services#web-apps' },
        { label: 'Mobile Apps', path: '/services#mobile-apps' },
        { label: 'Cloud Solutions', path: '/services#cloud' },
        { label: 'AI Integration', path: '/services#ai' }
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', path: '/about' },
        { label: 'Case Studies', path: '/case-studies' },
        { label: 'Careers', path: '/careers' },
        { label: 'Contact', path: '/contact' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { label: 'Blog', path: '/blog' },
        { label: 'Privacy Policy', path: '/privacy' },
        { label: 'Terms of Service', path: '/terms' }
      ]
    }
  ];

  socialLinks: SocialLink[] = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/company/nimblesl',
      icon: 'linkedin'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/NimbleSL',
      icon: 'github'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/nimblesl',
      icon: 'twitter'
    }
  ];

  contactInfo = {
    email: 'hello@nimblesl.com',
    phone: '+880-1796-109979',
    address: 'Gulshan-2, Dhaka, Bangladesh'
  };
}
