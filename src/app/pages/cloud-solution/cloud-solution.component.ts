import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cloud-solution',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cloud-solution.component.html',
  styleUrl: './cloud-solution.component.scss'
})
export class CloudSolutionComponent {
  title = 'Cloud Solutions';
}
