# Module 01 · Lesson 03 — Angular Architecture Overview

**Learning outcome:** Trace bootstrap, root component, child component and template.

> Connected story: We are building **Aarav's Training Desk**. Every lesson improves the same Angular app; no isolated throwaway sample is required.

## 1. Story — where this lesson fits
Aarav asks how one HTML element turns into an interactive learning portal.

## 2. What is it?
The browser loads index.html, main.ts bootstraps AppComponent, its template hosts child component selectors, and bindings display state.

## 3. Why do we need it?
Tracing this path quickly isolates bootstrapping, template and child composition errors.

## 4. Real-life analogy
Reception (index.html) sends visitors to the main desk (main.ts), which assigns rooms (components).

## 5. Memory hook and tagline
**Door → bootstrap → root → rooms.** Remember this sentence during the interview.

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
The browser loads index.html, main.ts bootstraps AppComponent, its template hosts child component selectors, and bindings display state. **Keep the responsibility narrow:** Tracing this path quickly isolates bootstrapping, template and child composition errors.

## 9. Complete, commented working example
**Canonical source:** `src/index.html + src/main.ts + src/app/app.ts + src/app/app.html`. Use the repository files for the full, compilable implementation rather than running this excerpt as a standalone file.

```typescript
// main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app';
bootstrapApplication(AppComponent).catch(console.error);
```

## 10. Explain the code line by line
bootstrapApplication initializes a standalone component application; an NgModule bootstrap is unnecessary here.

## 11. Guided hands-on lab
1. Open src/index.html and find app-root.
2. Follow main.ts to bootstrapApplication.
3. Open app.html and find app-hello-world.

Start the existing app with `npm install` (first time) and `npm start` from the repository root. Visit `http://localhost:4200`.

## 12. Expected result and evidence
The app displays the root heading and nested components. Capture the browser result and terminal output. **Status:** Author-written example; build/browser verification is pending until dependencies can be installed on a compatible Node runtime.

## 13. Mistakes, edge cases and solution
**Mistake:** Putting component HTML in index.html directly.

**Fix:** Keep index.html as shell; put feature markup in component templates.

## 14. Interview-first Q&A
**Q1. What runs first: the root template or the bootstrap call?**

**Answer:** The bootstrap call creates the root component; Angular then renders its template.

**Q2. What is the evidence that you understand this lesson?**

**Answer:** Point to `src/index.html + src/main.ts + src/app/app.ts + src/app/app.html`, execute the lab and describe the expected UI and any debugging changes you made.

## 15. Scenario-based MCQ (with rationale)
What file contains app-root host markup? A) tsconfig.json B) src/index.html C) package.json D) app.css

**Correct answer:** B — the HTML shell holds the root host element.

## 16. Subjective assignment with worked solution
**Task:** Trace the boot sequence and include one child in a diagram.

**Worked answer:** Browser → index.html <app-root> → main.ts bootstrapApplication(AppComponent) → app.html <app-hello-world> → hello-world.component.html.

## 17. Completion gate and next topic
- [ ] Explain the concept and its analogy without reading.
- [ ] Run the lesson in the shared app and inspect browser output.
- [ ] Answer both interview questions and the MCQ.
- [ ] Complete the assignment and keep evidence.
- [ ] Run `npm run build` and `npm test` successfully on a supported machine.

**Story continuation:** Proceed to [Angular CLI and Its Uses](./04-angular-cli-and-its-uses.md); the same training desk grows another feature.

**Official reference:** https://angular.dev/overview · https://angular.dev/reference/versions

