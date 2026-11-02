# Module 01 · Lesson 06 — Your First Angular Hello World Project

**Learning outcome:** Run and modify the first reusable component.

> Connected story: We are building **Aarav's Training Desk**. Every lesson improves the same Angular app; no isolated throwaway sample is required.

## 1. Story — where this lesson fits
The training desk opens, and Aarav's first milestone is a greeting visible in the browser.

## 2. What is it?
HelloWorldComponent has a TypeScript class property and an HTML template rendering it with interpolation.

## 3. Why do we need it?
This small complete loop proves bootstrap, component import, selector, template and data binding work.

## 4. Real-life analogy
Write a message in the back office (class); the reception display (template) updates it.

## 5. Memory hook and tagline
**Class writes; template shows.** Remember this sentence during the interview.

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
HelloWorldComponent has a TypeScript class property and an HTML template rendering it with interpolation. **Keep the responsibility narrow:** This small complete loop proves bootstrap, component import, selector, template and data binding work.

## 9. Complete, commented working example
**Canonical source:** `src/app/hello-world.component.ts + src/app/hello-world.component.html`. Use the repository files for the full, compilable implementation rather than running this excerpt as a standalone file.

```typescript
// hello-world.component.ts
readonly message = 'Hello, Angular! Your first component is running.';

<!-- hello-world.component.html -->
<p>{{ message }}</p>
```

## 10. Explain the code line by line
The curly-brace expression reads the property from this component instance and safely displays it as text.

## 11. Guided hands-on lab
1. Start npm start and find the Hello World card.
2. Edit the readonly message property in hello-world.component.ts.
3. Save and confirm the browser text changes.

Start the existing app with `npm install` (first time) and `npm start` from the repository root. Visit `http://localhost:4200`.

## 12. Expected result and evidence
The card reads: Hello, Angular! Your first component is running. Capture the browser result and terminal output. **Status:** Author-written example; build/browser verification is pending until dependencies can be installed on a compatible Node runtime.

## 13. Mistakes, edge cases and solution
**Mistake:** Using {{ this.message }} and thinking it must reference another component.

**Fix:** Angular templates already evaluate expressions in their component context; use {{ message }}.

## 14. Interview-first Q&A
**Q1. What is interpolation?**

**Answer:** Angular template syntax {{ expression }} renders a value as text.

**Q2. What is the evidence that you understand this lesson?**

**Answer:** Point to `src/app/hello-world.component.ts + src/app/hello-world.component.html`, execute the lab and describe the expected UI and any debugging changes you made.

## 15. Scenario-based MCQ (with rationale)
Where is message declared? A) app.html B) hello-world.component.ts C) styles.css D) angular.json

**Correct answer:** B — the class owns the property.

## 16. Subjective assignment with worked solution
**Task:** Personalize the greeting for a fictitious learner named Nia.

**Worked answer:** Set readonly message = 'Hello, Nia! Welcome to Angular.'; refresh and verify it appears. Do not interpolate unsanitized HTML into innerHTML.

## 17. Completion gate and next topic
- [ ] Explain the concept and its analogy without reading.
- [ ] Run the lesson in the shared app and inspect browser output.
- [ ] Answer both interview questions and the MCQ.
- [ ] Complete the assignment and keep evidence.
- [ ] Run `npm run build` and `npm test` successfully on a supported machine.

**Story continuation:** Module 01 is complete once gates pass; next build UI interactions in [Module 02](../module-02-components-templates/README.md).

**Official reference:** https://angular.dev/overview · https://angular.dev/reference/versions

