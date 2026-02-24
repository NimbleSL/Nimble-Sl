import { Component, ElementRef, ViewChild, AfterViewChecked } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ChatMessage {
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

@Component({
  selector: 'app-chat-widget',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat-widget.html',
  styleUrl: './chat-widget.scss'
})
export class ChatWidgetComponent implements AfterViewChecked {
  @ViewChild('scrollableArea') scrollableArea!: ElementRef;

  isOpen = false;
  messages: ChatMessage[] = [
    {
      text: 'Hi there! Welcome to Nimble Software Lab. How can we help you today?',
      sender: 'bot',
      timestamp: new Date()
    }
  ];
  currentMessage = '';

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  toggleChat() {
    this.isOpen = !this.isOpen;
  }

  sendMessage() {
    if (!this.currentMessage.trim()) return;

    // Add user message
    this.messages.push({
      text: this.currentMessage,
      sender: 'user',
      timestamp: new Date()
    });

    const userText = this.currentMessage;
    this.currentMessage = '';

    // Simulate bot response
    setTimeout(() => {
      this.messages.push({
        text: `Thanks for reaching out! Our AI agent is currently in development (as a frontend preview). You said: "${userText}"`,
        sender: 'bot',
        timestamp: new Date()
      });
    }, 1000);
  }

  private scrollToBottom(): void {
    try {
      this.scrollableArea.nativeElement.scrollTop = this.scrollableArea.nativeElement.scrollHeight;
    } catch (err) { }
  }
}
