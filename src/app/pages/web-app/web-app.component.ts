import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-web-app',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './web-app.component.html',
  styleUrl: './web-app.component.scss'
})
export class WebAppComponent {
  title = 'Web Application Development';
}
