# Module 02 · Lesson 04 — Template Syntax

**Learning outcome:** Read interpolation, expression syntax, block syntax and template event context.

> Connected story: Aarav's Training Desk is already bootstrapped in Module 01. In Module 02, each lesson adds one observable behavior to that same dashboard.

## 1. Story — continuation from previous lesson
The training portal prints Aarav's name without HTML-string concatenation.

## 2. What?
Angular HTML templates include interpolation {{ value }}, bindings and control-flow blocks interpreted with the component context.

## 3. Why?
Expressive templates keep view logic declarative and reduce unsafe manual HTML insertion.

## 4. Real-life analogy
A template is an invoice with live fields; the class fills the fields.

## 5. Memory hook and tagline
**HTML skeleton + reactive slots.**

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
Angular HTML templates include interpolation {{ value }}, bindings and control-flow blocks interpreted with the component context. **Use this when:** Expressive templates keep view logic declarative and reduce unsafe manual HTML insertion.

## 9. Commented working source and code example
**Canonical, runnable source:** `src/app/app.html`. This excerpt explains the mechanism; run the full app instead of pasting a fragment as a whole file.

```html
<h1>{{ title }}</h1>
<p>{{ learnerName }}</p>
<button type="button" (click)="increment()">Clicked {{ clicks() }} times</button>
```

## 10. Explain this example
Angular HTML templates include interpolation {{ value }}, bindings and control-flow blocks interpreted with the component context. Expressive templates keep view logic declarative and reduce unsafe manual HTML insertion.

## 11. Guided lab — do it now
1. Run `npm install` once with supported Node, then `npm start`.
2. Identify three interpolations and one click expression in app.html.
3. Note the changed UI state and capture browser evidence.
4. Run `npm test` and `npm run build` after edits.

## 12. Expected output and evidence
The title, name and click count are visible and update with UI actions.

**Execution status:** Authored and included in the Angular app; live install/build/browser execution has not been established in this environment.

## 13. Common failure, edge case and fix
**Problem:** Calling a side-effectful function inside every interpolation.

**Resolution:** Use a property, pure computed signal, or an event handler rather than mutating data during render.

## 14. Senior Angular interview questions and answers
**Q1. Is interpolation for HTML strings?**

**Answer:** No. It inserts safely escaped text; avoid raw innerHTML unless deliberately sanitizing a trusted use case.

**Q2. What production design decision does this example teach?**

**Answer:** Expressive templates keep view logic declarative and reduce unsafe manual HTML insertion. Point to the original source and identify how the chosen binding or API limits responsibilities.

## 15. Scenario MCQ with answer and rationale
What displays a property as text? A) {{ value }} B) (value) C) {value} D) [()] only

**Correct answer:** A — Angular interpolation syntax uses double braces.

## 16. Hands-on assignment, worked answer and subjective discussion
**Assignment:** Display the current role as text in the control-flow panel.

**Worked solution:** Add <p>Role: {{ role }}</p> to app.html; change the select to verify.

**Subjective:** Explain a practical alternative to this technique and one trade-off. Example: choose a plain property instead of a signal when the value is static and does not need reactive derivation.

## 17. Acceptance gate + next story step
- [ ] Retell the concept using the memory hook.
- [ ] Trace the source and understand why each binding/import exists.
- [ ] Show the expected UI interaction with browser evidence.
- [ ] Explain the error and fix from section 13.
- [ ] Answer interview questions and complete assignment.
- [ ] Run Angular build and Vitest suite on a compatible machine.

**Next scene:** [Data Binding](./05-data-binding.md)

**Official references:** https://angular.dev/guide/components · https://angular.dev/guide/templates · https://angular.dev/guide/testing

