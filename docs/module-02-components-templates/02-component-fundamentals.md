# Module 02 · Lesson 02 — Component Fundamentals

**Learning outcome:** Explain selector, metadata, class, template and style.

> Connected story: Aarav's Training Desk is already bootstrapped in Module 01. In Module 02, each lesson adds one observable behavior to that same dashboard.

## 1. Story — continuation from previous lesson
Aarav divides the portal into a greeting card, profile cards, and a lifecycle room.

## 2. What?
@Component metadata ties selector, template and style to one TypeScript class.

## 3. Why?
Each component has one UI responsibility, helping reuse and testing.

## 4. Real-life analogy
A labeled classroom (selector) has a layout (HTML), dress code (CSS) and instructor (class).

## 5. Memory hook and tagline
**Name + class + view + style.**

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
@Component metadata ties selector, template and style to one TypeScript class. **Use this when:** Each component has one UI responsibility, helping reuse and testing.

## 9. Commented working source and code example
**Canonical, runnable source:** `src/app/hello-world.component.ts`. This excerpt explains the mechanism; run the full app instead of pasting a fragment as a whole file.

```typescript
@Component({ selector: 'app-hello-world', standalone: true,
  templateUrl: './hello-world.component.html' })
export class HelloWorldComponent {
  readonly message = 'Hello, Angular!';
}
```

## 10. Explain this example
@Component metadata ties selector, template and style to one TypeScript class. Each component has one UI responsibility, helping reuse and testing.

## 11. Guided lab — do it now
1. Run `npm install` once with supported Node, then `npm start`.
2. Edit the message in the child class and verify its isolated UI changes.
3. Note the changed UI state and capture browser evidence.
4. Run `npm test` and `npm run build` after edits.

## 12. Expected output and evidence
The child greeting updates without editing the parent's template text.

**Execution status:** Authored and included in the Angular app; live install/build/browser execution has not been established in this environment.

## 13. Common failure, edge case and fix
**Problem:** Accidentally naming two component selectors the same.

**Resolution:** Use distinct, prefixed selectors per component.

## 14. Senior Angular interview questions and answers
**Q1. Why is the selector important?**

**Answer:** Angular matches the selector in parent HTML to the declared component instance.

**Q2. What production design decision does this example teach?**

**Answer:** Each component has one UI responsibility, helping reuse and testing. Point to the original source and identify how the chosen binding or API limits responsibilities.

## 15. Scenario MCQ with answer and rationale
Which object relates class and template? A) @Component metadata B) tsconfig C) npm D) git

**Correct answer:** A — @Component decorator metadata.

## 16. Hands-on assignment, worked answer and subjective discussion
**Assignment:** Explain each field of HelloWorldComponent in one sentence.

**Worked solution:** selector: tag name; standalone: dependency composition; templateUrl: HTML; class property: displayed data.

**Subjective:** Explain a practical alternative to this technique and one trade-off. Example: choose a plain property instead of a signal when the value is static and does not need reactive derivation.

## 17. Acceptance gate + next story step
- [ ] Retell the concept using the memory hook.
- [ ] Trace the source and understand why each binding/import exists.
- [ ] Show the expected UI interaction with browser evidence.
- [ ] Explain the error and fix from section 13.
- [ ] Answer interview questions and complete assignment.
- [ ] Run Angular build and Vitest suite on a compatible machine.

**Next scene:** [Displaying Data using @for, @if, @switch](./03-display-data-control-flow.md)

**Official references:** https://angular.dev/guide/components · https://angular.dev/guide/templates · https://angular.dev/guide/testing

