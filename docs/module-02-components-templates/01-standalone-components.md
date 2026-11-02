# Module 02 · Lesson 01 — Standalone Components

**Learning outcome:** Compose a feature directly from imports without creating an NgModule.

> Connected story: Aarav's Training Desk is already bootstrapped in Module 01. In Module 02, each lesson adds one observable behavior to that same dashboard.

## 1. Story — continuation from previous lesson
Aarav adds a greeting room to the dashboard and imports it without a shared module registry.

## 2. What?
A standalone component declares its own dependencies in the decorator's imports array.

## 3. Why?
Local imports make component dependencies explicit and improve refactoring.

## 4. Real-life analogy
A self-contained kiosk brings its own equipment rather than borrowing a warehouse inventory.

## 5. Memory hook and tagline
**Self-contained room, explicit guest list.**

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
A standalone component declares its own dependencies in the decorator's imports array. **Use this when:** Local imports make component dependencies explicit and improve refactoring.

## 9. Commented working source and code example
**Canonical, runnable source:** `src/app/app.ts`. This excerpt explains the mechanism; run the full app instead of pasting a fragment as a whole file.

```typescript
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HelloWorldComponent],
  templateUrl: './app.html'
})
export class AppComponent {}
```

## 10. Explain this example
A standalone component declares its own dependencies in the decorator's imports array. Local imports make component dependencies explicit and improve refactoring.

## 11. Guided lab — do it now
1. Run `npm install` once with supported Node, then `npm start`.
2. Find HelloWorldComponent in the imports array, then locate <app-hello-world /> in app.html.
3. Note the changed UI state and capture browser evidence.
4. Run `npm test` and `npm run build` after edits.

## 12. Expected output and evidence
The Hello World card renders inside the parent.

**Execution status:** Authored and included in the Angular app; live install/build/browser execution has not been established in this environment.

## 13. Common failure, edge case and fix
**Problem:** Unknown element app-hello-world when omitted from imports.

**Resolution:** Import and list each standalone child component in the parent decorator.

## 14. Senior Angular interview questions and answers
**Q1. How does a standalone component differ from NgModule-declared components?**

**Answer:** It declares dependencies locally via imports and can be used without an NgModule declaration.

**Q2. What production design decision does this example teach?**

**Answer:** Local imports make component dependencies explicit and improve refactoring. Point to the original source and identify how the chosen binding or API limits responsibilities.

## 15. Scenario MCQ with answer and rationale
Where is a standalone child's dependency registered? A) SQL B) Parent imports array C) package-lock only D) index.html

**Correct answer:** B — the parent imports the child class.

## 16. Hands-on assignment, worked answer and subjective discussion
**Assignment:** Remove HelloWorldComponent from imports in a scratch branch; describe the compiler error, then restore it.

**Worked solution:** Angular reports the child selector is unknown. Restore the import statement and decorator import to make it compile.

**Subjective:** Explain a practical alternative to this technique and one trade-off. Example: choose a plain property instead of a signal when the value is static and does not need reactive derivation.

## 17. Acceptance gate + next story step
- [ ] Retell the concept using the memory hook.
- [ ] Trace the source and understand why each binding/import exists.
- [ ] Show the expected UI interaction with browser evidence.
- [ ] Explain the error and fix from section 13.
- [ ] Answer interview questions and complete assignment.
- [ ] Run Angular build and Vitest suite on a compatible machine.

**Next scene:** [Component Fundamentals](./02-component-fundamentals.md)

**Official references:** https://angular.dev/guide/components · https://angular.dev/guide/templates · https://angular.dev/guide/testing

