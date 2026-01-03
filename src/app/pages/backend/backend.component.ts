import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-backend',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './backend.component.html',
  styleUrl: './backend.component.scss'
})
export class BackendComponent {
  title = 'Backend Development';
}
