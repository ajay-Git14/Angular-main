import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HelloWorldComponent } from './hello-world.component';
import { LegacyProfileComponent } from './legacy-profile.component';
import { SignalProfileComponent } from './signal-profile.component';
import { LifecycleDemoComponent } from './lifecycle-demo.component';

type AccessRole = 'learner' | 'trainer' | 'guest';
interface LessonTopic { id: number; title: string; }

/** Single-page training app; features align with docs/modules-01-02 lesson references. */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FormsModule, // [(ngModel)] comes from FormsModule, not from Angular's core package.
    HelloWorldComponent,
    LegacyProfileComponent,
    SignalProfileComponent,
    LifecycleDemoComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  readonly title = 'Techlambda Angular Learning Lab';

  // A plain property works for template-driven input with [(ngModel)].
  learnerName = 'Aarav';

  // Signals drive view updates without manual change detector calls.
  readonly clicks = signal(0);
  readonly doubledClicks = computed(() => this.clicks() * 2);
  readonly likes = signal(0);
  readonly greeting = signal('Try the event binding button.');
  readonly latestSelection = signal('No profile selected yet.');
  readonly showDetails = signal(true);
  readonly showLifecycle = signal(true);

  role: AccessRole = 'learner';
  readonly tooltip = 'Angular binds this text to the title DOM property.';
  readonly topics: readonly LessonTopic[] = [
    { id: 1, title: 'Standalone components and component composition' },
    { id: 2, title: '@if, @for and @switch template control flow' },
    { id: 3, title: 'Interpolation, property, event and two-way binding' },
    { id: 4, title: 'Lifecycle hooks and parent-child interaction' },
    { id: 5, title: 'input(), output(), model() and component styles' }
  ];

  increment(): void {
    this.clicks.update((count) => count + 1);
  }

  sendGreeting(): void {
    // trim prevents submitting a whitespace-only learner name.
    const name = this.learnerName.trim();
    if (name) this.greeting.set('Welcome, ' + name + '!');
  }

  toggleDetails(): void {
    this.showDetails.update((visible) => !visible);
  }

  toggleLifecycle(): void {
    this.showLifecycle.update((visible) => !visible);
  }

  onProfileSelected(name: string): void {
    this.latestSelection.set('The child selected: ' + name);
  }
}

