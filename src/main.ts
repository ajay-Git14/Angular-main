import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app';

// Angular's bootstrap entry point: create the root standalone component.
// Angular 22 defaults to zoneless change detection; signals make updates explicit.
bootstrapApplication(AppComponent).catch((error: unknown) => console.error('Bootstrap failed', error));

