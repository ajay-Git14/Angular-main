# Module 02 · Lesson 05 — Data Binding

**Learning outcome:** Compare interpolation, property, event and two-way binding.

> Connected story: Aarav's Training Desk is already bootstrapped in Module 01. In Module 02, each lesson adds one observable behavior to that same dashboard.

## 1. Story — continuation from previous lesson
Aarav needs one-way UI output, click responses and editable learner data.

## 2. What?
Interpolation {{x}} shows text; [prop] writes DOM/component properties; (event) handles events; [(value)] synchronizes compatible APIs.

## 3. Why?
Choosing the right direction prevents hard-to-debug hidden state mutations.

## 4. Real-life analogy
Notice board = interpolation; instruction to a device = property; doorbell = event; walkie-talkie = two-way.

## 5. Memory hook and tagline
**Show → Set → Hear → Sync.**

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
Interpolation {{x}} shows text; [prop] writes DOM/component properties; (event) handles events; [(value)] synchronizes compatible APIs. **Use this when:** Choosing the right direction prevents hard-to-debug hidden state mutations.

## 9. Commented working source and code example
**Canonical, runnable source:** `src/app/app.html + src/app/app.ts`. This excerpt explains the mechanism; run the full app instead of pasting a fragment as a whole file.

```html
<p>{{ learnerName }}</p>
<button [disabled]="learnerName.trim().length === 0"
        (click)="sendGreeting()">Greet</button>
<input [(ngModel)]="learnerName" />
```

## 10. Explain this example
Interpolation {{x}} shows text; [prop] writes DOM/component properties; (event) handles events; [(value)] synchronizes compatible APIs. Choosing the right direction prevents hard-to-debug hidden state mutations.

## 11. Guided lab — do it now
1. Run `npm install` once with supported Node, then `npm start`.
2. Change the name, inspect text, inspect button disabled state, and click Greet.
3. Note the changed UI state and capture browser evidence.
4. Run `npm test` and `npm run build` after edits.

## 12. Expected output and evidence
Text updates, disabled reflects an empty name, and a greeting appears on click.

**Execution status:** Authored and included in the Angular app; live install/build/browser execution has not been established in this environment.

## 13. Common failure, edge case and fix
**Problem:** Using [value] when you expect user edits to change the class property.

**Resolution:** Use (input) with value, or [(ngModel)] from FormsModule for two-way text inputs.

## 14. Senior Angular interview questions and answers
**Q1. What does each binding syntax mean?**

**Answer:** {{}} text, [] property/input, () event/output, [()] two-way pair.

**Q2. What production design decision does this example teach?**

**Answer:** Choosing the right direction prevents hard-to-debug hidden state mutations. Point to the original source and identify how the chosen binding or API limits responsibilities.

## 15. Scenario MCQ with answer and rationale
Which binds a DOM property? A) [disabled] B) (disabled) C) {{disabled}} D) {{click}}

**Correct answer:** A — square brackets bind an element property.

## 16. Hands-on assignment, worked answer and subjective discussion
**Assignment:** Explain what happens with an empty or whitespace-only name.

**Worked solution:** The button disabled rule checks trim().length===0, and sendGreeting also guards against whitespace.

**Subjective:** Explain a practical alternative to this technique and one trade-off. Example: choose a plain property instead of a signal when the value is static and does not need reactive derivation.

## 17. Acceptance gate + next story step
- [ ] Retell the concept using the memory hook.
- [ ] Trace the source and understand why each binding/import exists.
- [ ] Show the expected UI interaction with browser evidence.
- [ ] Explain the error and fix from section 13.
- [ ] Answer interview questions and complete assignment.
- [ ] Run Angular build and Vitest suite on a compatible machine.

**Next scene:** [Event Binding](./06-event-binding.md)

**Official references:** https://angular.dev/guide/components · https://angular.dev/guide/templates · https://angular.dev/guide/testing

