import { Component, ElementRef, ViewChild, AfterViewChecked } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChatService, ChatMessage } from '../../services/chat/chat';

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chatbot.html',
  styleUrl: './chatbot.scss'
})
export class ChatbotComponent implements AfterViewChecked {
  @ViewChild('messagesContainer') private messagesContainer!: ElementRef;

  isOpen = false;
  hasOpened = false;
  userInput = '';

  constructor(public chatService: ChatService) { }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  toggleChat() {
    this.isOpen = !this.isOpen;
    if (this.isOpen && !this.hasOpened) {
      this.hasOpened = true;
      // Add a greeting when first opened
      setTimeout(() => {
        const welcomeMessage: ChatMessage = {
          role: 'assistant',
          content: 'Hi there! I am NimbleBot. How can I help you learn about Nimble Software Lab today?'
        };
        // Reach into service subject directly for initial message without triggering API
        (this.chatService as any).messagesSubject.next([welcomeMessage]);
      }, 500);
    }
  }

  async sendMessage() {
    if (!this.userInput.trim()) return;

    const message = this.userInput.trim();
    this.userInput = ''; // clear input immediately

    await this.chatService.sendMessage(message);
  }

  handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.sendMessage();
    }
  }

  private scrollToBottom(): void {
    try {
      this.messagesContainer.nativeElement.scrollTop = this.messagesContainer.nativeElement.scrollHeight;
    } catch (err) { }
  }
}
