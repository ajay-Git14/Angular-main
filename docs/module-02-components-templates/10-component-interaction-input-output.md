# Module 02 · Lesson 10 — Component Interaction — @Input and @Output

**Learning outcome:** Pass data down and emit typed events up using decorators.

> Connected story: Aarav's Training Desk is already bootstrapped in Module 01. In Module 02, each lesson adds one observable behavior to that same dashboard.

## 1. Story — continuation from previous lesson
The parent sets Aarav's profile name and the child sends back a selection receipt.

## 2. What?
@Input exposes child configuration; @Output EventEmitter publishes a typed custom event to the parent.

## 3. Why?
Components communicate through explicit interfaces rather than mutating each other's internals.

## 4. Real-life analogy
Parcel in (@Input); signed receipt out (@Output).

## 5. Memory hook and tagline
**Parcel in, receipt out.**

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
@Input exposes child configuration; @Output EventEmitter publishes a typed custom event to the parent. **Use this when:** Components communicate through explicit interfaces rather than mutating each other's internals.

## 9. Commented working source and code example
**Canonical, runnable source:** `src/app/legacy-profile.component.ts + src/app/app.html`. This excerpt explains the mechanism; run the full app instead of pasting a fragment as a whole file.

```typescript
@Input({ required: true }) name = '';
@Output() readonly selected = new EventEmitter<string>();
choose(): void { this.selected.emit(this.name); }
// Parent template:
// <app-legacy-profile [name]="learnerName" (selected)="onProfileSelected($event)" />
```

## 10. Explain this example
@Input exposes child configuration; @Output EventEmitter publishes a typed custom event to the parent. Components communicate through explicit interfaces rather than mutating each other's internals.

## 11. Guided lab — do it now
1. Run `npm install` once with supported Node, then `npm start`.
2. Change the learner name, then click Send @Output to parent.
3. Note the changed UI state and capture browser evidence.
4. Run `npm test` and `npm run build` after edits.

## 12. Expected output and evidence
Child shows the name and parent's status reflects child selection.

**Execution status:** Authored and included in the Angular app; live install/build/browser execution has not been established in this environment.

## 13. Common failure, edge case and fix
**Problem:** Assuming a custom component event bubbles like a DOM click.

**Resolution:** Explicitly bind the child output in the parent template.

## 14. Senior Angular interview questions and answers
**Q1. What is $event when a child emits a string?**

**Answer:** The emitted string payload, typed as string in the parent's handler.

**Q2. What production design decision does this example teach?**

**Answer:** Components communicate through explicit interfaces rather than mutating each other's internals. Point to the original source and identify how the chosen binding or API limits responsibilities.

## 15. Scenario MCQ with answer and rationale
What is the correct parent binding for child output? A) (selected)="handle($event)" B) [selected]="name" C) {{selected}} D) (click) only

**Correct answer:** A — parentheses listen to output events.

## 16. Hands-on assignment, worked answer and subjective discussion
**Assignment:** Change selected output to include a learner ID and name.

**Worked solution:** Use EventEmitter<{id:number;name:string}> and emit({id:1,name:this.name}); update the parent handler and template to accept the object.

**Subjective:** Explain a practical alternative to this technique and one trade-off. Example: choose a plain property instead of a signal when the value is static and does not need reactive derivation.

## 17. Acceptance gate + next story step
- [ ] Retell the concept using the memory hook.
- [ ] Trace the source and understand why each binding/import exists.
- [ ] Show the expected UI interaction with browser evidence.
- [ ] Explain the error and fix from section 13.
- [ ] Answer interview questions and complete assignment.
- [ ] Run Angular build and Vitest suite on a compatible machine.

**Next scene:** [Signal Inputs and Outputs](./11-signal-inputs-outputs.md)

**Official references:** https://angular.dev/guide/components · https://angular.dev/guide/templates · https://angular.dev/guide/testing

