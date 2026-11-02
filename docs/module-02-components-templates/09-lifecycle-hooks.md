# Module 02 · Lesson 09 — Lifecycle Hooks

**Learning outcome:** Observe initialization, input changes, view initialization and teardown.

> Connected story: Aarav's Training Desk is already bootstrapped in Module 01. In Module 02, each lesson adds one observable behavior to that same dashboard.

## 1. Story — continuation from previous lesson
The dashboard creates a temporary lifecycle classroom and destroys it on demand.

## 2. What?
ngOnChanges reacts to input changes; ngOnInit runs once; ngAfterViewInit follows view initialization; ngOnDestroy is cleanup.

## 3. Why?
Resource cleanup and correct initialization prevent leaks and stale subscriptions.

## 4. Real-life analogy
Hire → onboard → open workplace → offboard.

## 5. Memory hook and tagline
**Change → Init → View → Destroy.**

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
ngOnChanges reacts to input changes; ngOnInit runs once; ngAfterViewInit follows view initialization; ngOnDestroy is cleanup. **Use this when:** Resource cleanup and correct initialization prevent leaks and stale subscriptions.

## 9. Commented working source and code example
**Canonical, runnable source:** `src/app/lifecycle-demo.component.ts + src/app/lifecycle-demo.component.html`. This excerpt explains the mechanism; run the full app instead of pasting a fragment as a whole file.

```typescript
ngOnChanges(changes: SimpleChanges): void {
  if (changes['name']) this.events.push('name changed');
}
ngOnInit(): void { this.events.push('initialized'); }
ngAfterViewInit(): void { console.info('view ready'); }
ngOnDestroy(): void { console.info('cleanup'); }
```

## 10. Explain this example
ngOnChanges reacts to input changes; ngOnInit runs once; ngAfterViewInit follows view initialization; ngOnDestroy is cleanup. Resource cleanup and correct initialization prevent leaks and stale subscriptions.

## 11. Guided lab — do it now
1. Run `npm install` once with supported Node, then `npm start`.
2. Open DevTools, change the name, click Destroy demo component, then Create demo component.
3. Note the changed UI state and capture browser evidence.
4. Run `npm test` and `npm run build` after edits.

## 12. Expected output and evidence
Console shows ngOnChanges, ngOnInit, ngAfterViewInit and ngOnDestroy in the relevant phases.

**Execution status:** Authored and included in the Angular app; live install/build/browser execution has not been established in this environment.

## 13. Common failure, edge case and fix
**Problem:** Mutating already-checked bound state in ngAfterViewInit, producing ExpressionChangedAfterItHasBeenCheckedError.

**Resolution:** Avoid changing template-bound values in view-init; schedule render-related operations appropriately.

## 14. Senior Angular interview questions and answers
**Q1. Does ngOnChanges run before ngOnInit on initial input?**

**Answer:** Yes. Angular's first ngOnChanges precedes ngOnInit.

**Q2. What production design decision does this example teach?**

**Answer:** Resource cleanup and correct initialization prevent leaks and stale subscriptions. Point to the original source and identify how the chosen binding or API limits responsibilities.

## 15. Scenario MCQ with answer and rationale
Which hook releases resources? A) ngOnDestroy B) ngOnInit C) ngAfterViewInit D) ngOnChanges

**Correct answer:** A — cleanup occurs before destruction.

## 16. Hands-on assignment, worked answer and subjective discussion
**Assignment:** Explain what happens when the name changes twice without destroying the child.

**Worked solution:** ngOnChanges executes per input change; ngOnInit and ngAfterViewInit do not repeat; ngOnDestroy waits until component removal.

**Subjective:** Explain a practical alternative to this technique and one trade-off. Example: choose a plain property instead of a signal when the value is static and does not need reactive derivation.

## 17. Acceptance gate + next story step
- [ ] Retell the concept using the memory hook.
- [ ] Trace the source and understand why each binding/import exists.
- [ ] Show the expected UI interaction with browser evidence.
- [ ] Explain the error and fix from section 13.
- [ ] Answer interview questions and complete assignment.
- [ ] Run Angular build and Vitest suite on a compatible machine.

**Next scene:** [Component Interaction — @Input and @Output](./10-component-interaction-input-output.md)

**Official references:** https://angular.dev/guide/components · https://angular.dev/guide/templates · https://angular.dev/guide/testing

