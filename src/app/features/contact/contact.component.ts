import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SeoService } from '../../shared/services/seo/seo.service';
import { Faq, FaqItem } from '../../shared/components/faq/faq';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, Faq],
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

  contactFaqs: FaqItem[] = [
    {
      question: 'Where is your team located, and what timezones do you work in?',
      answer: 'Our core development team is based in Gulshan, Dhaka, Bangladesh (GMT+6). However, we have flexible overlap hours tailored specifically for clients in North America, Europe, and Australia to ensure seamless daily communication.'
    },
    {
      question: 'Who owns the intellectual property (IP) and source code?',
      answer: 'You do. Upon full completion of the project and final payment, we transfer 100% of the Intellectual Property (IP) rights and source code repositories directly to your organization. This is guaranteed in our master services agreement.'
    },
    {
      question: 'Do you work with startups, or only large enterprises?',
      answer: 'We work with both. For startups, we focus on rapid MVP development and finding product-market fit. For enterprises, we focus on security, scalability, legacy modernization, and complex integrations.'
    },
    {
      question: 'How do you ensure project security and data privacy?',
      answer: 'We follow strict secure coding practices (OWASP Top 10), conduct regular code reviews, and implement role-based access controls. We are fully compliant with standard data protection regulations including GDPR and HIPAA where necessary.'
    }
  ];

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
