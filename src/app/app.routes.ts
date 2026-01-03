import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'custom-software',
    loadComponent: () => import('./pages/custom-software/custom-software.component').then(m => m.CustomSoftwareComponent)
  },
  {
    path: 'mobile-app',
    loadComponent: () => import('./pages/mobile-app/mobile-app.component').then(m => m.MobileAppComponent)
  },
  {
    path: 'web-app',
    loadComponent: () => import('./pages/web-app/web-app.component').then(m => m.WebAppComponent)
  },
  {
    path: 'cloud-solution',
    loadComponent: () => import('./pages/cloud-solution/cloud-solution.component').then(m => m.CloudSolutionComponent)
  },
  {
    path: 'backend',
    loadComponent: () => import('./pages/backend/backend.component').then(m => m.BackendComponent)
  },
  {
    path: 'ai-solution',
    loadComponent: () => import('./pages/ai-solution/ai-solution.component').then(m => m.AiSolutionComponent)
  },
  {
    path: 'staff-augmentation',
    loadComponent: () => import('./pages/staff-augmentation/staff-augmentation.component').then(m => m.StaffAugmentationComponent)
  },
  {
    path: 'products',
    loadComponent: () => import('./pages/products/products.component').then(m => m.ProductsComponent)
  },
  {
    path: 'case-studies',
    loadComponent: () => import('./pages/case-studies/case-studies.component').then(m => m.CaseStudiesComponent)
  },
  {
    path: 'blog',
    loadComponent: () => import('./pages/blog/blog.component').then(m => m.BlogComponent)
  },
  {
    path: 'software-development-company-bangladesh',
    loadComponent: () => import('./pages/seo-landing/seo-landing.component').then(m => m.SeoLandingComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
