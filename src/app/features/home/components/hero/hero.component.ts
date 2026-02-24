import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  stats = [
    { value: '50+', label: 'Projects Delivered' },
    { value: '12', label: 'Countries Served' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '40-60%', label: 'Cost Savings' }
  ];
}
