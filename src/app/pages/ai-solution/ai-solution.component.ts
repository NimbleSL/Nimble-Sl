import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-ai-solution',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './ai-solution.component.html',
  styleUrl: './ai-solution.component.scss'
})
export class AiSolutionComponent {
  title = 'AI & Machine Learning Solutions';
}
