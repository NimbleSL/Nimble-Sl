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

  async onSubmit(): Promise<void> {
    this.isSubmitting = true;
    try {
      const response = await fetch('https://formspree.io/f/{your_form_id_here}', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(this.formData)
      });

      if (response.ok) {
        alert('Thank you for reaching out! We\'ll get back to you soon.');
        this.formData = { name: '', email: '', company: '', message: '' };
      } else {
        alert('Oops! There was a problem submitting your form.');
      }
    } catch (error) {
      alert('Oops! There was a problem submitting your form.');
    } finally {
      this.isSubmitting = false;
    }
  }
}
