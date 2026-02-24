import { Injectable, NgZone } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private messagesSubject = new BehaviorSubject<ChatMessage[]>([]);
  public messages$: Observable<ChatMessage[]> = this.messagesSubject.asObservable();

  private isLoadingSubject = new BehaviorSubject<boolean>(false);
  public isLoading$: Observable<boolean> = this.isLoadingSubject.asObservable();

  constructor(private ngZone: NgZone) { }

  async sendMessage(content: string): Promise<void> {
    const userMessage: ChatMessage = { role: 'user', content };
    const currentMessages = this.messagesSubject.getValue();

    // Optimistically add user message
    this.messagesSubject.next([...currentMessages, userMessage]);
    this.isLoadingSubject.next(true);

    try {
      // Create a payload of only the chat history we want Groq to know about
      // Limit to last 10 messages for context window efficiency
      const recentMessages = this.messagesSubject.getValue().slice(-10);

      // In development, hit the local Wrangler server if running on port 8788
      // In production, hit the relative /api/chat endpoint on Cloudflare Pages
      const isDev = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
      const apiUrl = isDev ? 'http://localhost:8788/api/chat' : '/api/chat';

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ messages: recentMessages })
      });

      if (!response.ok || !response.body) {
        throw new Error('Failed to fetch response');
      }

      this.isLoadingSubject.next(false); // Hide the dots because streaming is starting

      const reader = response.body.getReader();
      const decoder = new TextDecoder('utf-8');

      let assistantMessage: ChatMessage = { role: 'assistant', content: '' };
      this.messagesSubject.next([...this.messagesSubject.getValue(), assistantMessage]);

      let done = false;
      let buffer = '';

      while (!done) {
        const { value, done: readerDone } = await reader.read();
        done = readerDone;

        if (value) {
          const chunk = decoder.decode(value, { stream: true });
          buffer += chunk;

          // Split by the standard SSE double-newline terminator
          const parts = buffer.split('\n\n');

          // Keep the last part in the buffer as it might be an incomplete chunk
          buffer = parts.pop() || '';

          for (const part of parts) {
            // Some parsers separate with single lines or double lines, 
            // extract all 'data: ' lines from this block
            const lines = part.split('\n');
            for (const line of lines) {
              if (line.startsWith('data: ') && !line.includes('[DONE]')) {
                try {
                  const data = JSON.parse(line.slice(6));
                  const text = data.choices[0]?.delta?.content || '';

                  for (const char of text) {
                    await new Promise((resolve) => setTimeout(resolve, 15)); // Add visible typing delay

                    this.ngZone.run(() => {
                      assistantMessage = { ...assistantMessage, content: assistantMessage.content + char };

                      // Update the state array to trigger Angular's change detection
                      const state = this.messagesSubject.getValue();
                      state[state.length - 1] = assistantMessage;
                      this.messagesSubject.next([...state]);
                    });
                  }
                } catch (e) {
                  // Ignore incomplete JSON chunks boundary issues
                }
              }
            }
          }
        }
      }

    } catch (error) {
      console.error('Chat error:', error);
      const errorMessage: ChatMessage = {
        role: 'assistant',
        content: 'I apologize, but I am currently experiencing technical difficulties. Please try emailing us at sales@nimblesl.com instead.'
      };
      this.messagesSubject.next([...this.messagesSubject.getValue(), errorMessage]);
    } finally {
      this.isLoadingSubject.next(false);
    }
  }

  clearChat(): void {
    this.messagesSubject.next([]);
  }
}
