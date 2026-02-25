import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface FaqItem {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.html',
  styleUrl: './faq.scss'
})
export class Faq {
  @Input() title: string = 'Frequently Asked Questions';
  @Input() subtitle: string = 'Everything you need to know about working with us.';
  @Input() faqs: FaqItem[] = [];

  activeFaqIndex: number | null = null;

  toggleFaq(index: number): void {
    this.activeFaqIndex = this.activeFaqIndex === index ? null : index;
  }
}
