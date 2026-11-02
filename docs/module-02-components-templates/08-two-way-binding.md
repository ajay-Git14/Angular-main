# Module 02 · Lesson 08 — Two Way Binding

**Learning outcome:** Use FormsModule ngModel and component model-based two-way binding.

> Connected story: Aarav's Training Desk is already bootstrapped in Module 01. In Module 02, each lesson adds one observable behavior to that same dashboard.

## 1. Story — continuation from previous lesson
The learner edits their name while likes are edited inside a child card, and both stay in sync.

## 2. What?
[(ngModel)] handles input control synchronization; [(likes)] pairs the child model() signal with its parent writable signal.

## 3. Why?
It avoids separate boilerplate assignments for simple editable state, while preserving a clear interface.

## 4. Real-life analogy
A two-way bridge updates signs on both banks whenever traffic changes.

## 5. Memory hook and tagline
**Banana in a box = both directions.**

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
[(ngModel)] handles input control synchronization; [(likes)] pairs the child model() signal with its parent writable signal. **Use this when:** It avoids separate boilerplate assignments for simple editable state, while preserving a clear interface.

## 9. Commented working source and code example
**Canonical, runnable source:** `src/app/app.html + src/app/signal-profile.component.ts`. This excerpt explains the mechanism; run the full app instead of pasting a fragment as a whole file.

```html
// Parent imports FormsModule.
<input [(ngModel)]="learnerName" name="learnerName" />
<!-- Child has likes = model(0); parent has likes = signal(0). -->
<app-signal-profile [(likes)]="likes" [name]="learnerName" />
```

## 10. Explain this example
[(ngModel)] handles input control synchronization; [(likes)] pairs the child model() signal with its parent writable signal. It avoids separate boilerplate assignments for simple editable state, while preserving a clear interface.

## 11. Guided lab — do it now
1. Run `npm install` once with supported Node, then `npm start`.
2. Type Nia into the name field, then click Increase model in the child.
3. Note the changed UI state and capture browser evidence.
4. Run `npm test` and `npm run build` after edits.

## 12. Expected output and evidence
The visible name is Nia; child likes increments and parent likes signal updates.

**Execution status:** Authored and included in the Angular app; live install/build/browser execution has not been established in this environment.

## 13. Common failure, edge case and fix
**Problem:** Using ngModel without importing FormsModule into a standalone component.

**Resolution:** Add FormsModule to the parent component's imports array.

## 14. Senior Angular interview questions and answers
**Q1. How does model differ from input?**

**Answer:** input is read-only in the child; model supports writes and automatically supplies a matching Change output.

**Q2. What production design decision does this example teach?**

**Answer:** It avoids separate boilerplate assignments for simple editable state, while preserving a clear interface. Point to the original source and identify how the chosen binding or API limits responsibilities.

## 15. Scenario MCQ with answer and rationale
What does [(ngModel)] require? A) FormsModule B) HttpClient C) Router D) NgModule bootstrap

**Correct answer:** A — import FormsModule into the standalone component.

## 16. Hands-on assignment, worked answer and subjective discussion
**Assignment:** Add a visible parent-side likes value below the cards.

**Worked solution:** Add <p>Parent likes: {{ likes() }}</p> to app.html; verify it increments on the child action.

**Subjective:** Explain a practical alternative to this technique and one trade-off. Example: choose a plain property instead of a signal when the value is static and does not need reactive derivation.

## 17. Acceptance gate + next story step
- [ ] Retell the concept using the memory hook.
- [ ] Trace the source and understand why each binding/import exists.
- [ ] Show the expected UI interaction with browser evidence.
- [ ] Explain the error and fix from section 13.
- [ ] Answer interview questions and complete assignment.
- [ ] Run Angular build and Vitest suite on a compatible machine.

**Next scene:** [Lifecycle Hooks](./09-lifecycle-hooks.md)

**Official references:** https://angular.dev/guide/components · https://angular.dev/guide/templates · https://angular.dev/guide/testing

