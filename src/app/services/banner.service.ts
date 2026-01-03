import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BannerService {
  private _isVisible = signal(true);

  readonly isVisible = this._isVisible.asReadonly();

  closeBanner() {
    this._isVisible.set(false);
  }
}
