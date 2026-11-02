# Module 02 · Lesson 03 — Displaying Data using @for, @if, @switch

**Learning outcome:** Conditionally render and repeat data with modern Angular control-flow blocks.

> Connected story: Aarav's Training Desk is already bootstrapped in Module 01. In Module 02, each lesson adds one observable behavior to that same dashboard.

## 1. Story — continuation from previous lesson
The learner switches roles and hides completed lesson lists without manually touching DOM elements.

## 2. What?
@if controls branches; @for repeats items with required track identity; @switch selects one of several role views.

## 3. Why?
Angular creates and removes DOM nodes predictably from application state.

## 4. Real-life analogy
A station gate (@if) opens or closes, a conveyor (@for) displays items, and a selector (@switch) chooses a platform.

## 5. Memory hook and tagline
**Gate → Loop → Route.**

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
@if controls branches; @for repeats items with required track identity; @switch selects one of several role views. **Use this when:** Angular creates and removes DOM nodes predictably from application state.

## 9. Commented working source and code example
**Canonical, runnable source:** `src/app/app.html`. This excerpt explains the mechanism; run the full app instead of pasting a fragment as a whole file.

```html
@if (showDetails()) {
  @for (topic of topics; track topic.id) {
    <li>{{ topic.title }}</li>
  } @empty { <li>No topics</li> }
} @else { <p>Hidden</p> }
@switch (role) { @case ('trainer') { <p>Trainer</p> } @default { <p>Other</p> } }
```

## 10. Explain this example
@if controls branches; @for repeats items with required track identity; @switch selects one of several role views. Angular creates and removes DOM nodes predictably from application state.

## 11. Guided lab — do it now
1. Run `npm install` once with supported Node, then `npm start`.
2. Click Hide lesson list; switch role from learner to trainer and guest.
3. Note the changed UI state and capture browser evidence.
4. Run `npm test` and `npm run build` after edits.

## 12. Expected output and evidence
List switches between visible and hidden; role message changes.

**Execution status:** Authored and included in the Angular app; live install/build/browser execution has not been established in this environment.

## 13. Common failure, edge case and fix
**Problem:** Omitting track in @for, or tracking mutable index for changing lists.

**Resolution:** Use an immutable unique topic.id in track.

## 14. Senior Angular interview questions and answers
**Q1. Why does @for require track?**

**Answer:** It maps items to DOM views for efficient reuse and correct updates.

**Q2. What production design decision does this example teach?**

**Answer:** Angular creates and removes DOM nodes predictably from application state. Point to the original source and identify how the chosen binding or API limits responsibilities.

## 15. Scenario MCQ with answer and rationale
Which block is used to repeat a list? A) @for B) @case C) @if D) ng new

**Correct answer:** A — @for repeats items and requires tracking.

## 16. Hands-on assignment, worked answer and subjective discussion
**Assignment:** Add a topic to the array; show its id/title and test the @empty branch.

**Worked solution:** Append {id: 6,title:'New topic'} to topics. For the empty case, temporarily set topics to [] in a scratch copy and observe the @empty message.

**Subjective:** Explain a practical alternative to this technique and one trade-off. Example: choose a plain property instead of a signal when the value is static and does not need reactive derivation.

## 17. Acceptance gate + next story step
- [ ] Retell the concept using the memory hook.
- [ ] Trace the source and understand why each binding/import exists.
- [ ] Show the expected UI interaction with browser evidence.
- [ ] Explain the error and fix from section 13.
- [ ] Answer interview questions and complete assignment.
- [ ] Run Angular build and Vitest suite on a compatible machine.

**Next scene:** [Template Syntax](./04-template-syntax.md)

**Official references:** https://angular.dev/guide/components · https://angular.dev/guide/templates · https://angular.dev/guide/testing

