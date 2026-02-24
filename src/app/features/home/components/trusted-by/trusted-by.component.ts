import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-trusted-by',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trusted-by.component.html',
  styleUrl: './trusted-by.component.scss'
})
export class TrustedByComponent {
  // Placeholder companies - in real use, would have logos
  companies = [
    'TechCorp',
    'InnovateLab',
    'DataFlow',
    'CloudSync',
    'NextGen AI'
  ];
}
