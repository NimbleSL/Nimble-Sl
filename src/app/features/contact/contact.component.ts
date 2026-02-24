import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SeoService } from '../../shared/services/seo/seo.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {
  formData = {
    name: '',
    email: '',
    company: '',
    message: ''
  };

  isSubmitting = false;
  submissionStatus: 'idle' | 'success' | 'error' = 'idle';

  constructor(private cdr: ChangeDetectorRef, private seoService: SeoService) { }

  ngOnInit(): void {
    this.seoService.updateSeo({
      title: 'Contact Us',
      description: 'Get in touch with Nimble Software Lab. Contact us for custom software development, web applications, mobile apps, and AI solutions. Located in Gulshan, Dhaka, Bangladesh.',
      keywords: 'contact nimble software lab, software development inquiry, hire developers bangladesh, software consultation dhaka',
      url: 'https://www.nimblesl.com/contact'
    });
    this.seoService.setLocalBusinessSchema();
  }

  onSubmit(): void {
    this.isSubmitting = true;
    this.submissionStatus = 'idle';
    this.cdr.detectChanges();

    fetch('https://formsubmit.co/ajax/nimblesoftwarelab@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: this.formData.name,
        email: this.formData.email,
        company: this.formData.company,
        message: this.formData.message,
        _subject: 'New Contact Form Submission from NimbleSL Website'
      })
    })
      .then(response => {
        if (response.ok) {
          this.submissionStatus = 'success';
          this.formData = { name: '', email: '', company: '', message: '' };
        } else {
          this.submissionStatus = 'error';
        }
      })
      .catch(() => {
        this.submissionStatus = 'error';
      })
      .finally(() => {
        this.isSubmitting = false;
        this.cdr.detectChanges();
      });
  }

  closeModal(): void {
    this.submissionStatus = 'idle';
    this.cdr.detectChanges();
  }
}
