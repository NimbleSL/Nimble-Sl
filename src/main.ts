import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { isDevMode } from '@angular/core';

// Suppress console in production
if (typeof window !== 'undefined') {
  const isProduction = window.location.hostname !== 'localhost';
  if (isProduction) {
    const noop = () => {};
    console.log = noop;
    console.debug = noop;
    console.info = noop;
    console.warn = noop;
    console.error = noop;
  }
}

bootstrapApplication(App, appConfig)
  .catch(() => {});
