import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BannerService } from '../../../services/banner.service';

@Component({
  selector: 'app-announcement-banner',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './announcement-banner.component.html',
  styleUrl: './announcement-banner.component.scss'
})
export class AnnouncementBannerComponent {
  private bannerService = inject(BannerService);

  get isVisible() {
    return this.bannerService.isVisible();
  }

  closeBanner() {
    this.bannerService.closeBanner();
  }
}
