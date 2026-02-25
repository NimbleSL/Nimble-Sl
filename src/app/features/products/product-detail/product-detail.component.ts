import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  template: `
    <main class="page product-detail">
      <section class="product-hero">
        <div class="container">
          <a routerLink="/products" class="back-link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Back to Products
          </a>
          
          <h1 class="product-hero__title">{{ productName }}</h1>
          <p class="product-hero__subtitle">
            {{ productId === 'nimblebot' 
              ? 'AI-Powered Customer Engagement Platform' 
              : 'All-in-One Business Management Solution' }}
          </p>
          
          <div class="product-hero__cta">
            <button class="btn btn-primary" (click)="openWaitlist()">
              Join Waitlist
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>
      
      <section class="product-content">
        <div class="container">
          <p class="coming-soon-text">
            Detailed product page coming soon. For now, please 
            <a routerLink="/contact">contact us</a> to learn more.
          </p>
        </div>
      </section>
    </main>

    <!-- Waitlist Modal -->
    @if (showWaitlistModal) {
    <div class="waitlist-modal" (click)="closeWaitlist()">
      <div class="waitlist-modal__card" (click)="$event.stopPropagation()">
        <button class="waitlist-modal__close" (click)="closeWaitlist()" aria-label="Close">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        @if (submitStatus === 'success') {
        <div class="waitlist-modal__success">
          <div class="waitlist-modal__success-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
          </div>
          <h3>You're on the list! 🎉</h3>
          <p>We'll notify you when <strong>{{ productName }}</strong> is ready. Stay tuned!</p>
          <button class="waitlist-modal__btn waitlist-modal__btn--secondary" (click)="closeWaitlist()">
            Close
          </button>
        </div>
        } @else {
        <div class="waitlist-modal__icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
        </div>
        <h3 class="waitlist-modal__title">Join the Waitlist</h3>
        <p class="waitlist-modal__subtitle">
          Be the first to know when <strong>{{ productName }}</strong> launches.
        </p>

        <form class="waitlist-modal__form" (ngSubmit)="submitWaitlist()">
          <div class="waitlist-modal__field">
            <input
              type="email"
              name="email"
              [(ngModel)]="waitlistEmail"
              placeholder="Enter your email address"
              required
              [disabled]="isSubmitting"
              class="waitlist-modal__input"
              autocomplete="email"
            />
          </div>

          @if (submitStatus === 'error') {
          <p class="waitlist-modal__error">Something went wrong. Please try again.</p>
          }

          <button
            type="submit"
            class="waitlist-modal__btn waitlist-modal__btn--primary"
            [disabled]="isSubmitting || !waitlistEmail"
          >
            @if (isSubmitting) {
              <span class="waitlist-modal__spinner"></span>
              Joining...
            } @else {
              Join Waitlist
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            }
          </button>
        </form>

        <p class="waitlist-modal__privacy">We respect your privacy. No spam, ever.</p>
        }
      </div>
    </div>
    }
  `,
  styles: [`
    
    .page { padding-top: var(--header-height); }
    
    .product-hero {
      padding: var(--space-12) 0;
      background: var(--color-background-alt);
      text-align: center;
      
      &__title {
        font-family: var(--font-display);
        font-weight: var(--font-weight-bold);
        font-size: clamp(2.5rem, 6vw, 3.5rem);
        margin-bottom: var(--space-4);
      }
      
      &__subtitle {
        font-size: 1.25rem;
        color: var(--color-text-secondary);
        margin-bottom: var(--space-8);
      }
      
      &__cta {
        display: flex;
        gap: var(--space-4);
        justify-content: center;
        flex-wrap: wrap;
      }
    }
    
    .back-link {
      display: inline-flex;
      align-items: center;
      gap: var(--space-2);
      color: var(--color-text-secondary);
      text-decoration: none;
      font-size: 0.875rem;
      margin-bottom: var(--space-6);
      
      svg { width: 16px; height: 16px; }
      
      &:hover { color: var(--color-text-primary); }
    }
    
    .product-content {
      padding: var(--space-16) 0;
    }
    
    .coming-soon-text {
      text-align: center;
      color: var(--color-text-secondary);
      font-size: 1.125rem;
      
      a { color: var(--color-accent-dark); }
    }
    
    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: var(--space-2);
      padding: var(--space-3) var(--space-6);
      font-weight: var(--font-weight-semibold);
      font-size: 0.9375rem;
      border-radius: var(--radius-lg);
      text-decoration: none;
      transition: all var(--transition-fast);
      border: none;
      cursor: pointer;

      svg {
        width: 18px;
        height: 18px;
      }
    }
    
    .btn-primary {
      background: var(--color-accent);
      color: var(--color-primary);
      &:hover { background: var(--color-accent-light); transform: translateY(-2px); }
    }
    
    .btn-secondary {
      background: transparent;
      color: var(--color-text-primary);
      border: 2px solid var(--color-border);
      &:hover { border-color: var(--color-text-primary); }
    }

    // ─── Waitlist Modal ──────────────────────────────────────
    .waitlist-modal {
      position: fixed;
      inset: 0;
      z-index: 9999;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: var(--space-4);
      background: rgba(0, 0, 0, 0.6);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      animation: fadeIn 0.25s ease;

      &__card {
        position: relative;
        width: 100%;
        max-width: 440px;
        background: var(--color-surface);
        border: 1px solid var(--color-border-light);
        border-radius: var(--radius-2xl);
        padding: var(--space-8) var(--space-6);
        text-align: center;
        animation: slideUp 0.3s ease;
        box-shadow: 0 25px 60px rgba(0, 0, 0, 0.4);

        @media (min-width: 768px) {
          padding: var(--space-10) var(--space-8);
        }
      }

      &__close {
        position: absolute;
        top: var(--space-4);
        right: var(--space-4);
        background: none;
        border: none;
        cursor: pointer;
        padding: var(--space-1);
        color: var(--color-text-muted);
        transition: color var(--transition-fast);
        border-radius: var(--radius-md);

        svg { width: 20px; height: 20px; }
        &:hover { color: var(--color-text-primary); background: var(--color-background-alt); }
      }

      &__icon {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 56px;
        height: 56px;
        border-radius: var(--radius-xl);
        background: rgba(139, 92, 246, 0.1);
        margin-bottom: var(--space-4);

        svg { width: 28px; height: 28px; color: #8b5cf6; }
      }

      &__title {
        font-family: var(--font-display);
        font-weight: var(--font-weight-bold);
        font-size: 1.5rem;
        color: var(--color-text-primary);
        margin-bottom: var(--space-2);
      }

      &__subtitle {
        font-size: 0.9375rem;
        color: var(--color-text-secondary);
        line-height: 1.6;
        margin-bottom: var(--space-6);
        strong { color: var(--color-accent-dark); }
      }

      &__form {
        display: flex;
        flex-direction: column;
        gap: var(--space-3);
      }

      &__field { width: 100%; }

      &__input {
        width: 100%;
        padding: var(--space-3) var(--space-4);
        font-size: 0.9375rem;
        background: var(--color-background-alt);
        border: 1px solid var(--color-border);
        border-radius: var(--radius-lg);
        color: var(--color-text-primary);
        outline: none;
        transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
        box-sizing: border-box;

        &::placeholder { color: var(--color-text-muted); }
        &:focus { border-color: #8b5cf6; box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.15); }
        &:disabled { opacity: 0.6; }
      }

      &__error {
        font-size: 0.8125rem;
        color: #ef4444;
        margin: 0;
      }

      &__btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: var(--space-2);
        padding: var(--space-3) var(--space-6);
        font-weight: var(--font-weight-semibold);
        font-size: 0.9375rem;
        border-radius: var(--radius-lg);
        border: none;
        cursor: pointer;
        transition: all var(--transition-fast);
        width: 100%;

        svg { width: 18px; height: 18px; }

        &--primary {
          background: var(--color-accent);
          color: var(--color-primary);
          &:hover:not(:disabled) { background: var(--color-accent-light); transform: translateY(-1px); }
          &:disabled { opacity: 0.5; cursor: not-allowed; }
        }

        &--secondary {
          background: var(--color-background-alt);
          color: var(--color-text-primary);
          margin-top: var(--space-2);
          &:hover { background: var(--color-border-light); }
        }
      }

      &__spinner {
        width: 18px;
        height: 18px;
        border: 2px solid transparent;
        border-top-color: currentColor;
        border-radius: 50%;
        animation: spin 0.6s linear infinite;
      }

      &__privacy {
        font-size: 0.75rem;
        color: var(--color-text-muted);
        margin-top: var(--space-3);
        margin-bottom: 0;
      }

      &__success {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: var(--space-3);

        h3 { font-family: var(--font-display); font-size: 1.35rem; font-weight: var(--font-weight-bold); color: var(--color-text-primary); margin: 0; }
        p { font-size: 0.9375rem; color: var(--color-text-secondary); line-height: 1.6; margin: 0; strong { color: var(--color-accent-dark); } }
      }

      &__success-icon {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 64px;
        height: 64px;
        border-radius: 50%;
        background: rgba(34, 197, 94, 0.1);

        svg { width: 32px; height: 32px; color: #22c55e; }
      }
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    @keyframes slideUp {
      from { opacity: 0; transform: translateY(20px) scale(0.97); }
      to { opacity: 1; transform: translateY(0) scale(1); }
    }

    @keyframes spin {
      to { transform: rotate(360deg); }
    }
  `]
})
export class ProductDetailComponent implements OnInit {
  productId = '';
  productName = '';

  // Waitlist Modal State
  showWaitlistModal = false;
  waitlistEmail = '';
  isSubmitting = false;
  submitStatus: 'idle' | 'success' | 'error' = 'idle';

  constructor(private route: ActivatedRoute, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('productId') || '';
    this.productName = this.productId === 'nimblebot' ? 'NimbleBot' : 'NimbleSoft ERP';
  }

  openWaitlist(): void {
    this.waitlistEmail = '';
    this.submitStatus = 'idle';
    this.showWaitlistModal = true;
  }

  closeWaitlist(): void {
    this.showWaitlistModal = false;
    this.waitlistEmail = '';
    this.submitStatus = 'idle';
  }

  submitWaitlist(): void {
    if (!this.waitlistEmail) return;

    this.isSubmitting = true;
    this.submitStatus = 'idle';
    this.cdr.detectChanges();

    fetch('https://formsubmit.co/ajax/nimblesoftwarelab@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        email: this.waitlistEmail,
        product: this.productName,
        _subject: `Waitlist Signup - ${this.productName}`
      })
    })
      .then(response => {
        if (response.ok) {
          this.submitStatus = 'success';
          this.waitlistEmail = '';
        } else {
          this.submitStatus = 'error';
        }
      })
      .catch(() => {
        this.submitStatus = 'error';
      })
      .finally(() => {
        this.isSubmitting = false;
        this.cdr.detectChanges();
      });
  }
}
