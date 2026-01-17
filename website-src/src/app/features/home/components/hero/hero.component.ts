import { Component, OnInit, OnDestroy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnInit, OnDestroy {
  // Typewriter effect for dynamic headlines
  phrases = [
    'that drives results.',
    'that scales with you.',
    'that just works.'
  ];

  currentPhrase = signal(this.phrases[0]);
  private phraseIndex = 0;
  private intervalId: any;

  // Stats
  stats = [
    { value: '50+', label: 'Projects Delivered' },
    { value: '12', label: 'Countries Served' },
    { value: '98%', label: 'Client Satisfaction' }
  ];

  ngOnInit(): void {
    // Rotate phrases every 3 seconds
    this.intervalId = setInterval(() => {
      this.phraseIndex = (this.phraseIndex + 1) % this.phrases.length;
      this.currentPhrase.set(this.phrases[this.phraseIndex]);
    }, 3000);
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
