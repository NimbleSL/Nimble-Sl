import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
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
          
          <h1 class="product-hero__title">{{ productId === 'nimblebot' ? 'NimbleBot' : 'NimbleSoft ERP' }}</h1>
          <p class="product-hero__subtitle">
            {{ productId === 'nimblebot' 
              ? 'AI-Powered Customer Engagement Platform' 
              : 'All-in-One Business Management Solution' }}
          </p>
          
          <div class="product-hero__cta">
            @if (productId === 'nimblebot') {
              <a href="#" class="btn btn-primary">Get Started Free</a>
              <a routerLink="/contact" class="btn btn-secondary">Schedule Demo</a>
            } @else {
              <a routerLink="/contact" class="btn btn-primary">Join Waitlist</a>
            }
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
  `,
  styles: [`
    @use '../../../../styles/mixins' as *;
    
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
    }
    
    .btn-primary {
      background: var(--color-accent);
      color: var(--color-primary);
      &:hover { background: var(--color-accent-light); }
    }
    
    .btn-secondary {
      background: transparent;
      color: var(--color-text-primary);
      border: 2px solid var(--color-border);
      &:hover { border-color: var(--color-text-primary); }
    }
  `]
})
export class ProductDetailComponent implements OnInit {
  productId = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('productId') || '';
  }
}
