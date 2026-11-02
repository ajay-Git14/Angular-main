# Module 01 · Lesson 01 — Introduction to Angular

**Learning outcome:** Explain Angular and the problem it solves.

> Connected story: We are building **Aarav's Training Desk**. Every lesson improves the same Angular app; no isolated throwaway sample is required.

## 1. Story — where this lesson fits
Aarav wants a learning portal without manually rewriting the DOM after each click.

## 2. What is it?
Angular is a TypeScript-first framework that combines components, templates, dependency injection and build tooling for web applications.

## 3. Why do we need it?
It structures UI behavior and data flow as an application grows; direct DOM scripting becomes harder to maintain.

## 4. Real-life analogy
A shopping mall has shops and a shared operating system. Each Angular component is a shop; the Angular application coordinates the mall.

## 5. Memory hook and tagline
**One app, many reusable rooms.** Remember this sentence during the interview.

## 6. Visual memory hook
![Angular Module 01 foundation mind map](../../assets/learning-hooks/module-01-foundation.svg)

## 7. Text mind map
```text
Angular workshop
  ├── Browser shell → src/index.html
  ├── Bootstrap → src/main.ts
  ├── Root → src/app/app.ts
  ├── Child → src/app/hello-world.component.ts
  └── CLI → serve / build / test
```

## 8. Key concepts in plain English
Angular is a TypeScript-first framework that combines components, templates, dependency injection and build tooling for web applications. **Keep the responsibility narrow:** It structures UI behavior and data flow as an application grows; direct DOM scripting becomes harder to maintain.

## 9. Complete, commented working example
**Canonical source:** `src/app/app.ts + src/app/app.html`. Use the repository files for the full, compilable implementation rather than running this excerpt as a standalone file.

```typescript
// Angular starts at a root component and composes children.
@Component({ selector: 'app-root', standalone: true, /* ... */ })
export class AppComponent { readonly title = 'Techlambda Angular Learning Lab'; }
```

## 10. Explain the code line by line
@Component links a class to a template; a selector tells Angular where to render it.

## 11. Guided hands-on lab
1. Run the app and identify four visible panels.
2. Locate the root app component and child selector.
3. Explain why the browser shows component output rather than raw TypeScript.

Start the existing app with `npm install` (first time) and `npm start` from the repository root. Visit `http://localhost:4200`.

## 12. Expected result and evidence
The browser shows the learning lab title and a Hello World card. Capture the browser result and terminal output. **Status:** Author-written example; build/browser verification is pending until dependencies can be installed on a compatible Node runtime.

## 13. Mistakes, edge cases and solution
**Mistake:** Confusing Angular with AngularJS (a different, legacy framework).

**Fix:** Use modern Angular documentation at angular.dev, not AngularJS 1.x guides.

## 14. Interview-first Q&A
**Q1. Why use Angular instead of direct DOM manipulation?**

**Answer:** Components separate responsibilities and Angular updates bindings consistently; plain DOM scripts require manual update/cleanup logic.

**Q2. What is the evidence that you understand this lesson?**

**Answer:** Point to `src/app/app.ts + src/app/app.html`, execute the lab and describe the expected UI and any debugging changes you made.

## 15. Scenario-based MCQ (with rationale)
What is the main purpose of an Angular component? A) SQL queries B) UI plus state/behavior C) Git history D) Package installation

**Correct answer:** B — component class and template cooperate to render a UI.

## 16. Subjective assignment with worked solution
**Task:** Identify the root component and two child components in the app.

**Worked answer:** Root: AppComponent. Children include HelloWorldComponent and LegacyProfileComponent.

## 17. Completion gate and next topic
- [ ] Explain the concept and its analogy without reading.
- [ ] Run the lesson in the shared app and inspect browser output.
- [ ] Answer both interview questions and the MCQ.
- [ ] Complete the assignment and keep evidence.
- [ ] Run `npm run build` and `npm test` successfully on a supported machine.

**Story continuation:** Proceed to [Angular Latest Version Overview](./02-angular-latest-version-overview.md); the same training desk grows another feature.

**Official reference:** https://angular.dev/overview · https://angular.dev/reference/versions

