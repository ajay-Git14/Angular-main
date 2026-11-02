# Module 02 · Lesson 06 — Event Binding

**Learning outcome:** Implement a typed click handler that updates state.

> Connected story: Aarav's Training Desk is already bootstrapped in Module 01. In Module 02, each lesson adds one observable behavior to that same dashboard.

## 1. Story — continuation from previous lesson
The learner presses a button and expects the dashboard to count actions.

## 2. What?
(click) binds the native click event to a component method; that method updates a writable signal.

## 3. Why?
Actions belong in event handlers instead of being embedded as side effects in templates.

## 4. Real-life analogy
A switch triggers an action; the panel reflects the result.

## 5. Memory hook and tagline
**Event in → handler → state update.**

## 6. Memory-hook image
![Angular Module 02 binding and communication memory map](../../assets/learning-hooks/module-02-components.svg)

## 7. Mind map
```text
Angular component
  ├── Class / signals (data)
  ├── Template (display and events)
  │    ├── {{ expression }} / [property] / (event) / [(two-way)]
  │    └── @if / @for / @switch
  ├── Children: @Input @Output / input() output() model()
  ├── Lifecycle: create → changes → view → destroy
  └── CSS: scoped feature rules + global styles
```

## 8. Core concepts
(click) binds the native click event to a component method; that method updates a writable signal. **Use this when:** Actions belong in event handlers instead of being embedded as side effects in templates.

## 9. Commented working source and code example
**Canonical, runnable source:** `src/app/app.ts + src/app/app.html`. This excerpt explains the mechanism; run the full app instead of pasting a fragment as a whole file.

```typescript
// app.ts
readonly clicks = signal(0);
increment(): void {
  this.clicks.update(count => count + 1);
}
// app.html
<button (click)="increment()">Clicked {{ clicks() }}</button>
```

## 10. Explain this example
(click) binds the native click event to a component method; that method updates a writable signal. Actions belong in event handlers instead of being embedded as side effects in templates.

## 11. Guided lab — do it now
1. Run `npm install` once with supported Node, then `npm start`.
2. Click the counter button three times and inspect its counter and computed signal.
3. Note the changed UI state and capture browser evidence.
4. Run `npm test` and `npm run build` after edits.

## 12. Expected output and evidence
Counter becomes 3 and computed double becomes 6.

**Execution status:** Authored and included in the Angular app; live install/build/browser execution has not been established in this environment.

## 13. Common failure, edge case and fix
**Problem:** Using (onclick) instead of Angular's (click).

**Resolution:** Bind supported DOM events with Angular's parentheses syntax.

## 14. Senior Angular interview questions and answers
**Q1. What is the difference between (click) and onclick?**

**Answer:** (click) binds Angular template expression to an event; inline onclick is an HTML handler attribute.

**Q2. What production design decision does this example teach?**

**Answer:** Actions belong in event handlers instead of being embedded as side effects in templates. Point to the original source and identify how the chosen binding or API limits responsibilities.

## 15. Scenario MCQ with answer and rationale
Where should the counter state be changed? A) an ngFor loop B) increment handler C) style.css D) index.html

**Correct answer:** B — the handler owns state changes.

## 16. Hands-on assignment, worked answer and subjective discussion
**Assignment:** Add a Decrement button that never makes the count negative.

**Worked solution:** Add decrement(): void { this.clicks.update(n => Math.max(0,n-1)); } and a <button (click)="decrement()">Decrement</button>.

**Subjective:** Explain a practical alternative to this technique and one trade-off. Example: choose a plain property instead of a signal when the value is static and does not need reactive derivation.

## 17. Acceptance gate + next story step
- [ ] Retell the concept using the memory hook.
- [ ] Trace the source and understand why each binding/import exists.
- [ ] Show the expected UI interaction with browser evidence.
- [ ] Explain the error and fix from section 13.
- [ ] Answer interview questions and complete assignment.
- [ ] Run Angular build and Vitest suite on a compatible machine.

**Next scene:** [Property Binding](./07-property-binding.md)

**Official references:** https://angular.dev/guide/components · https://angular.dev/guide/templates · https://angular.dev/guide/testing

