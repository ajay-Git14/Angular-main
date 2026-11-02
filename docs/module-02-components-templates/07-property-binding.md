# Module 02 · Lesson 07 — Property Binding

**Learning outcome:** Bind values to DOM properties, classes and inline styles.

> Connected story: Aarav's Training Desk is already bootstrapped in Module 01. In Module 02, each lesson adds one observable behavior to that same dashboard.

## 1. Story — continuation from previous lesson
The greeting button should not be clickable when the name is blank.

## 2. What?
[disabled] sets the DOM disabled property; [title] supplies a tooltip; [class.emphasis] toggles one class; [style.fontWeight] binds one style.

## 3. Why?
The UI reflects state directly without manual querySelector calls.

## 4. Real-life analogy
Traffic light receives a signal and changes condition instantly.

## 5. Memory hook and tagline
**State drives properties.**

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
[disabled] sets the DOM disabled property; [title] supplies a tooltip; [class.emphasis] toggles one class; [style.fontWeight] binds one style. **Use this when:** The UI reflects state directly without manual querySelector calls.

## 9. Commented working source and code example
**Canonical, runnable source:** `src/app/app.html + src/app/app.css`. This excerpt explains the mechanism; run the full app instead of pasting a fragment as a whole file.

```html
<button [disabled]="learnerName.trim().length === 0">Greet</button>
<p [title]="tooltip" [class.emphasis]="clicks() > 1"
   [style.fontWeight]="clicks() > 2 ? '700' : '400'">Hover</p>
```

## 10. Explain this example
[disabled] sets the DOM disabled property; [title] supplies a tooltip; [class.emphasis] toggles one class; [style.fontWeight] binds one style. The UI reflects state directly without manual querySelector calls.

## 11. Guided lab — do it now
1. Run `npm install` once with supported Node, then `npm start`.
2. Clear name to disable Greet; click counter twice; hover over the demonstration text.
3. Note the changed UI state and capture browser evidence.
4. Run `npm test` and `npm run build` after edits.

## 12. Expected output and evidence
Greet is disabled for blank input; class and style change based on count.

**Execution status:** Authored and included in the Angular app; live install/build/browser execution has not been established in this environment.

## 13. Common failure, edge case and fix
**Problem:** Using string 'false' as a Boolean property value.

**Resolution:** Bind Boolean expressions directly rather than setting an HTML attribute text.

## 14. Senior Angular interview questions and answers
**Q1. Property vs attribute binding?**

**Answer:** Property binding updates runtime DOM properties; attribute binding uses [attr.name] for attributes without corresponding properties.

**Q2. What production design decision does this example teach?**

**Answer:** The UI reflects state directly without manual querySelector calls. Point to the original source and identify how the chosen binding or API limits responsibilities.

## 15. Scenario MCQ with answer and rationale
Which disables a button with a Boolean? A) [disabled]="isEmpty" B) disabled="false" C) (disabled)="isEmpty" D) {{disabled}}

**Correct answer:** A — real property binding uses a Boolean.

## 16. Hands-on assignment, worked answer and subjective discussion
**Assignment:** Make the button disabled when the name exceeds 30 characters.

**Worked solution:** Extend expression to [disabled]="learnerName.trim().length === 0 || learnerName.length > 30".

**Subjective:** Explain a practical alternative to this technique and one trade-off. Example: choose a plain property instead of a signal when the value is static and does not need reactive derivation.

## 17. Acceptance gate + next story step
- [ ] Retell the concept using the memory hook.
- [ ] Trace the source and understand why each binding/import exists.
- [ ] Show the expected UI interaction with browser evidence.
- [ ] Explain the error and fix from section 13.
- [ ] Answer interview questions and complete assignment.
- [ ] Run Angular build and Vitest suite on a compatible machine.

**Next scene:** [Two Way Binding](./08-two-way-binding.md)

**Official references:** https://angular.dev/guide/components · https://angular.dev/guide/templates · https://angular.dev/guide/testing

