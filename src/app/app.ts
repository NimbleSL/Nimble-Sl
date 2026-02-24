import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { CookieBannerComponent } from './shared/components/cookie-banner/cookie-banner';
import { ChatbotComponent } from './shared/components/chatbot/chatbot';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, CookieBannerComponent, ChatbotComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  title = 'Nimble Software Lab';
}
