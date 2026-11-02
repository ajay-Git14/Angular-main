import { Component } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  standalone: true,
  templateUrl: './hello-world.component.html'
})
export class HelloWorldComponent {
  // Module 01 lesson 06: a class property becomes visible using interpolation.
  readonly message = 'Hello, Angular! Your first component is running.';
}

