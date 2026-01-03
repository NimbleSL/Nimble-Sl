import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-mobile-app',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './mobile-app.component.html',
  styleUrl: './mobile-app.component.scss'
})
export class MobileAppComponent {
  title = 'Mobile App Development';
}
