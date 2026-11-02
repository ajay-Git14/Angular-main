# Module 02 · Lesson 11 — Signal Inputs and Outputs

**Learning outcome:** Use input.required, output and model in modern Angular.

> Connected story: Aarav's Training Desk is already bootstrapped in Module 01. In Module 02, each lesson adds one observable behavior to that same dashboard.

## 1. Story — continuation from previous lesson
Aarav upgrades the training card to explicit reactive inputs and writable likes.

## 2. What?
input.required<T>() creates read-only InputSignal<T>; output<T>() creates a typed output; model(value) creates a writable two-way model.

## 3. Why?
Signal APIs provide readable reactive state and explicit input/output contracts.

## 4. Real-life analogy
Read-only inbox, outgoing notification, shared two-way notebook.

## 5. Memory hook and tagline
**input reads · output speaks · model syncs.**

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
input.required<T>() creates read-only InputSignal<T>; output<T>() creates a typed output; model(value) creates a writable two-way model. **Use this when:** Signal APIs provide readable reactive state and explicit input/output contracts.

## 9. Commented working source and code example
**Canonical, runnable source:** `src/app/signal-profile.component.ts + src/app/signal-profile.component.html`. This excerpt explains the mechanism; run the full app instead of pasting a fragment as a whole file.

```typescript
readonly name = input.required<string>();
readonly selected = output<string>();
readonly likes = model(0);
select(): void { this.selected.emit(this.name()); }
addLike(): void { this.likes.update(n => n + 1); }
```

## 10. Explain this example
input.required<T>() creates read-only InputSignal<T>; output<T>() creates a typed output; model(value) creates a writable two-way model. Signal APIs provide readable reactive state and explicit input/output contracts.

## 11. Guided lab — do it now
1. Run `npm install` once with supported Node, then `npm start`.
2. Click Send output(), then click Increase model() twice; compare with decorator card.
3. Note the changed UI state and capture browser evidence.
4. Run `npm test` and `npm run build` after edits.

## 12. Expected output and evidence
Parent displays selected name; likes increases to 2.

**Execution status:** Authored and included in the Angular app; live install/build/browser execution has not been established in this environment.

## 13. Common failure, edge case and fix
**Problem:** Writing name directly even though it is a read-only InputSignal.

**Resolution:** Read name() in the child; emit an output or use model() only when child mutation is intended.

## 14. Senior Angular interview questions and answers
**Q1. Difference between input.required() and model()?**

**Answer:** InputSignal is read-only for child, while ModelSignal is writable and publishes a Change output.

**Q2. What production design decision does this example teach?**

**Answer:** Signal APIs provide readable reactive state and explicit input/output contracts. Point to the original source and identify how the chosen binding or API limits responsibilities.

## 15. Scenario MCQ with answer and rationale
How do you read an input signal? A) name() B) name.value C) name.get() D) @name

**Correct answer:** A — signal values are obtained by calling the signal.

## 16. Hands-on assignment, worked answer and subjective discussion
**Assignment:** Add a Reset likes button inside the signal child.

**Worked solution:** Add resetLikes():void { this.likes.set(0); } and <button (click)="resetLikes()">Reset likes</button>; confirm parent sees 0.

**Subjective:** Explain a practical alternative to this technique and one trade-off. Example: choose a plain property instead of a signal when the value is static and does not need reactive derivation.

## 17. Acceptance gate + next story step
- [ ] Retell the concept using the memory hook.
- [ ] Trace the source and understand why each binding/import exists.
- [ ] Show the expected UI interaction with browser evidence.
- [ ] Explain the error and fix from section 13.
- [ ] Answer interview questions and complete assignment.
- [ ] Run Angular build and Vitest suite on a compatible machine.

**Next scene:** [Component Styles](./12-component-styles.md)

**Official references:** https://angular.dev/guide/components · https://angular.dev/guide/templates · https://angular.dev/guide/testing

