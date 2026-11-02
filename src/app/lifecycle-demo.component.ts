import { AfterViewInit, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle-demo',
  standalone: true,
  templateUrl: './lifecycle-demo.component.html'
})
export class LifecycleDemoComponent implements OnChanges, OnInit, AfterViewInit, OnDestroy {
  @Input({ required: true }) name = '';

  // Set up logs before the first change detection pass.
  readonly events: string[] = [];

  // Runs for every input change, including the first value set by the parent.
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['name']) {
      this.events.push('ngOnChanges: received name=' + this.name);
      console.info('[LifecycleDemo] ngOnChanges', this.name);
    }
  }

  // Runs once after the component inputs have been initialized.
  ngOnInit(): void {
    this.events.push('ngOnInit: initialized once');
    console.info('[LifecycleDemo] ngOnInit');
  }

  // Runs once after the view initializes; avoid changing bound state here.
  ngAfterViewInit(): void {
    console.info('[LifecycleDemo] ngAfterViewInit: view ready');
  }

  // Runs before Angular disposes the component on the parent @if becoming false.
  ngOnDestroy(): void {
    console.info('[LifecycleDemo] ngOnDestroy: clean up subscriptions and timers here');
  }
}

