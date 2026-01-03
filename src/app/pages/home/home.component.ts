import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  faqItems = [
    {
      question: 'What services does Nimble Software Lab offer?',
      answer: 'Nimble Software Lab offers comprehensive software development services including custom software development, web applications, mobile apps, cloud solutions, and AI/ML services. Our team of experienced developers delivers high-quality solutions to clients worldwide with competitive pricing.',
      isOpen: false
    },
    {
      question: 'How much does software development cost in Bangladesh?',
      answer: 'Software development costs in Bangladesh are 40-60% lower compared to Western countries while maintaining high quality standards. At Nimble Software Lab, project costs vary based on complexity: simple web applications start from $5,000, mobile apps from $10,000, and enterprise solutions from $25,000.',
      isOpen: false
    },
    {
      question: 'Why should I hire developers from Bangladesh?',
      answer: 'Bangladesh offers exceptional value for software development with a large pool of skilled developers proficient in modern technologies like React, .NET, Node.js, Python, Flutter, and cloud platforms. Benefits include cost-effective rates, strong English communication skills, and convenient timezone overlap.',
      isOpen: false
    },
    {
      question: 'What technologies does Nimble Software Lab specialize in?',
      answer: 'We specialize in Frontend (React, Angular, Vue.js, Blazor), Backend (.NET Core, Node.js, Python, Django), Mobile (Flutter, React Native), Cloud (AWS, Azure, Google Cloud), and AI/ML (TensorFlow, PyTorch, OpenAI integration).',
      isOpen: false
    },
    {
      question: 'Can you build an MVP for my startup quickly?',
      answer: 'Yes! We specialize in rapid MVP development for startups. We can build and launch your Minimum Viable Product within 4-8 weeks depending on complexity.',
      isOpen: false
    },
    {
      question: 'Do you provide ongoing support and maintenance?',
      answer: 'Absolutely. We provide comprehensive post-launch support including bug fixes, security updates, performance optimization, feature enhancements, and 24/7 monitoring for critical systems.',
      isOpen: false
    }
  ];

  toggleFaq(index: number) {
    this.faqItems[index].isOpen = !this.faqItems[index].isOpen;
  }
}
