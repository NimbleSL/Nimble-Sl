import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

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
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  constructor(private cdr: ChangeDetectorRef) { }

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
        { label: 'Insights', path: '/blog' },
        { label: 'Privacy Policy', path: '/privacy' },
        { label: 'Terms of Service', path: '/terms' }
      ]
    }
  ];

  socialLinks: SocialLink[] = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/company/nimble-software-lab',
      icon: 'linkedin'
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/nimblesl',
      icon: 'facebook'
    }
  ];

  contactInfo = {
    email: 'hello@nimblesl.com',
    phone: '+880-1796-109979',
    address: 'House - 1, Road - 36, Gulshan - 2, Dhaka-1219, Bangladesh'
  };

  email = '';
  isSubscribing = false;
  subscribeStatus: 'idle' | 'success' | 'error' = 'idle';

  subscribeToNewsletter(): void {
    if (!this.email) return;

    this.isSubscribing = true;
    this.subscribeStatus = 'idle';
    this.cdr.detectChanges();

    fetch('https://formsubmit.co/ajax/nimblesoftwarelab@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        email: this.email,
        _subject: 'New Newsletter Subscriber - NimbleSL.com'
      })
    })
      .then(response => {
        if (response.ok) {
          this.subscribeStatus = 'success';
          this.email = '';
          setTimeout(() => {
            this.subscribeStatus = 'idle';
            this.cdr.detectChanges();
          }, 4000);
        } else {
          this.subscribeStatus = 'error';
        }
      })
      .catch(() => {
        this.subscribeStatus = 'error';
      })
      .finally(() => {
        this.isSubscribing = false;
        this.cdr.detectChanges();
      });
  }
}
