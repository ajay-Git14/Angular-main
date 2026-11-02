import { TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it } from 'vitest';
import { AppComponent } from './app';

describe('Module 01 + Module 02 integrated learning app', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [AppComponent] }).compileComponents();
  });

  it('bootstraps the root and displays the Hello World component', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toContain('Hello, Angular!');
  });

  it('uses @if to toggle the lesson list', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const root = fixture.nativeElement as HTMLElement;
    expect(root.querySelector('[data-testid="lesson-list"]')).not.toBeNull();
    root.querySelector<HTMLButtonElement>('#toggle-details')!.click();
    fixture.detectChanges();
    expect(root.querySelector('[data-testid="list-hidden"]')).not.toBeNull();
  });

  it('updates computed signals after the event binding handler runs', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const root = fixture.nativeElement as HTMLElement;
    root.querySelector<HTMLButtonElement>('#counter-button')!.click();
    fixture.detectChanges();
    expect(root.querySelector('[data-testid="double-count"]')!.textContent!.trim()).toBe('2');
  });

  it('updates the parent when the signal child emits a selection', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const root = fixture.nativeElement as HTMLElement;
    root.querySelector<HTMLButtonElement>('#signal-select')!.click();
    fixture.detectChanges();
    expect(root.querySelector('[data-testid="selected-result"]')!.textContent).toContain('Aarav');
  });

  it('propagates model() two-way updates back to the parent signal', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const root = fixture.nativeElement as HTMLElement;
    root.querySelector<HTMLButtonElement>('#add-like')!.click();
    fixture.detectChanges();
    expect(root.querySelector('[data-testid="likes"]')!.textContent!.trim()).toBe('1');
  });

  it('reacts to two-way template-driven name changes', async () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const root = fixture.nativeElement as HTMLElement;
    const input = root.querySelector<HTMLInputElement>('#learner-name')!;
    input.value = 'Nia';
    input.dispatchEvent(new Event('input', { bubbles: true }));
    await fixture.whenStable();
    fixture.detectChanges();
    expect(root.querySelector('[data-testid="name-output"]')!.textContent!.trim()).toBe('Nia');
  });

  it('handles decorator-based @Output in the parent', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const root = fixture.nativeElement as HTMLElement;
    root.querySelector<HTMLButtonElement>('#legacy-select')!.click();
    fixture.detectChanges();
    expect(root.querySelector('[data-testid="selected-result"]')!.textContent).toContain('Aarav');
  });

  it('destroys the lifecycle child when the @if condition becomes false', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const root = fixture.nativeElement as HTMLElement;
    expect(root.querySelector('app-lifecycle-demo')).not.toBeNull();
    root.querySelector<HTMLButtonElement>('#toggle-lifecycle')!.click();
    fixture.detectChanges();
    expect(root.querySelector('app-lifecycle-demo')).toBeNull();
  });

  it('disables the greeting button when the learner name is whitespace', async () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const root = fixture.nativeElement as HTMLElement;
    const input = root.querySelector<HTMLInputElement>('#learner-name')!;
    input.value = '   ';
    input.dispatchEvent(new Event('input', { bubbles: true }));
    await fixture.whenStable();
    fixture.detectChanges();
    expect(root.querySelector<HTMLButtonElement>('#greet-button')!.disabled).toBe(true);
  });

  it('switches the role-specific template when the user changes the select', async () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const root = fixture.nativeElement as HTMLElement;
    const select = root.querySelector<HTMLSelectElement>('#role')!;
    select.value = 'trainer';
    select.dispatchEvent(new Event('change', { bubbles: true }));
    await fixture.whenStable();
    fixture.detectChanges();
    expect(root.querySelector('[data-testid="role-result"]')!.textContent).toContain('Trainer');
  });

});

