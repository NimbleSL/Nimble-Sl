import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-staff-augmentation',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './staff-augmentation.component.html',
  styleUrl: './staff-augmentation.component.scss'
})
export class StaffAugmentationComponent {
  title = 'Staff Augmentation Services';
}
