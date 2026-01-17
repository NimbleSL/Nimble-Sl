import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnInit, AfterViewInit {
  @ViewChild('heroSection') heroSection!: ElementRef;

  // Stats for credibility
  stats = [
    { value: '50+', label: 'Projects Delivered' },
    { value: '12', label: 'Countries Served' },
    { value: '98%', label: 'Client Satisfaction' }
  ];

  // Typing effect text
  typewriterPhrases = [
    'scales with your business',
    'moves fast',
    'just works'
  ];
  currentPhraseIndex = 0;
  displayText = '';
  isDeleting = false;

  ngOnInit(): void {
    this.startTypewriter();
  }

  ngAfterViewInit(): void {
    // Could add scroll parallax effects here
  }

  private startTypewriter(): void {
    const currentPhrase = this.typewriterPhrases[this.currentPhraseIndex];

    if (!this.isDeleting) {
      // Typing
      this.displayText = currentPhrase.substring(0, this.displayText.length + 1);

      if (this.displayText === currentPhrase) {
        // Pause before deleting
        setTimeout(() => {
          this.isDeleting = true;
          this.startTypewriter();
        }, 2000);
        return;
      }
    } else {
      // Deleting
      this.displayText = currentPhrase.substring(0, this.displayText.length - 1);

      if (this.displayText === '') {
        this.isDeleting = false;
        this.currentPhraseIndex = (this.currentPhraseIndex + 1) % this.typewriterPhrases.length;
      }
    }

    const speed = this.isDeleting ? 50 : 100;
    setTimeout(() => this.startTypewriter(), speed);
  }
}
