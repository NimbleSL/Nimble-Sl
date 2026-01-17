import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    company: '',
    message: ''
  };

  isSubmitting = false;

  onSubmit(): void {
    this.isSubmitting = true;
    // Would integrate with backend
    console.log('Form submitted:', this.formData);
    setTimeout(() => {
      this.isSubmitting = false;
      alert('Thank you for reaching out! We\'ll get back to you soon.');
    }, 1000);
  }
}
