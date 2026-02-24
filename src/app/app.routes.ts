import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent),
    title: 'Nimble Software Lab | Software Development Company Bangladesh'
  },
  {
    path: 'about',
    loadComponent: () => import('./features/about/about.component').then(m => m.AboutComponent),
    title: 'About Us | Nimble Software Lab'
  },
  {
    path: 'services',
    loadComponent: () => import('./features/services/services.component').then(m => m.ServicesComponent),
    title: 'Services | Nimble Software Lab'
  },
  {
    path: 'products',
    loadComponent: () => import('./features/products/products.component').then(m => m.ProductsComponent),
    title: 'Our Products | Nimble Software Lab'
  },
  {
    path: 'products/:productId',
    loadComponent: () => import('./features/products/product-detail/product-detail.component').then(m => m.ProductDetailComponent),
    title: 'Product | Nimble Software Lab'
  },
  {
    path: 'case-studies',
    loadComponent: () => import('./features/case-studies/case-studies.component').then(m => m.CaseStudiesComponent),
    title: 'Case Studies | Nimble Software Lab'
  },
  {
    path: 'case-studies/:id',
    loadComponent: () => import('./features/case-studies/case-study-detail/case-study-detail').then(m => m.CaseStudyDetailComponent),
    title: 'Case Study | Nimble Software Lab'
  },
  {
    path: 'contact',
    loadComponent: () => import('./features/contact/contact.component').then(m => m.ContactComponent),
    title: 'Contact Us | Nimble Software Lab'
  },
  {
    path: 'terms',
    loadComponent: () => import('./features/terms/terms').then(m => m.TermsComponent),
    title: 'Terms & Conditions | Nimble Software Lab'
  },
  {
    path: 'careers',
    loadComponent: () => import('./features/careers/careers').then(m => m.CareersComponent),
    title: 'Careers | Nimble Software Lab'
  },
  {
    path: 'blog',
    loadComponent: () => import('./features/blog/blog').then(m => m.BlogComponent),
    title: 'Blog | Nimble Software Lab'
  },
  {
    path: 'blog/:id',
    loadComponent: () => import('./features/blog/blog-detail/blog-detail').then(m => m.BlogDetailComponent),
    title: 'Article | Nimble Software Lab'
  },
  {
    path: 'privacy',
    loadComponent: () => import('./features/privacy/privacy.component').then(m => m.PrivacyComponent),
    title: 'Privacy Policy | Nimble Software Lab'
  },
  {
    path: '**',
    loadComponent: () => import('./features/not-found/not-found.component').then(m => m.NotFoundComponent),
    title: 'Page Not Found | Nimble Software Lab'
  }
];
