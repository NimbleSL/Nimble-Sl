import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-custom-software',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './custom-software.component.html',
  styleUrl: './custom-software.component.scss'
})
export class CustomSoftwareComponent {
  title = 'Custom Software Development';
}
