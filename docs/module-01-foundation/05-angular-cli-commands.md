# Module 01 · Lesson 05 — Angular CLI Commands

**Learning outcome:** Use CLI commands safely and explain their effect.

> Connected story: We are building **Aarav's Training Desk**. Every lesson improves the same Angular app; no isolated throwaway sample is required.

## 1. Story — where this lesson fits
New teaching rooms must be generated consistently, without editing everything by hand.

## 2. What is it?
ng version reports versions; ng serve runs locally; ng generate scaffolds files; ng test runs specs; ng build packages the app.

## 3. Why do we need it?
Learners must know when a command inspects the workspace versus modifies files.

## 4. Real-life analogy
Measure before cutting: version/build/test inspect; generate changes the project's structure.

## 5. Memory hook and tagline
**Version → Serve → Generate → Test → Build.** Remember this sentence during the interview.

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
ng version reports versions; ng serve runs locally; ng generate scaffolds files; ng test runs specs; ng build packages the app. **Keep the responsibility narrow:** Learners must know when a command inspects the workspace versus modifies files.

## 9. Complete, commented working example
**Canonical source:** `angular.json + src/app/`. Use the repository files for the full, compilable implementation rather than running this excerpt as a standalone file.

```typescript
npx ng version
npx ng serve --open
npx ng generate component practice-banner --standalone
npx ng test --watch=false
npx ng build --configuration production
```

## 10. Explain the code line by line
Generate writes files; it does not automatically make an unused component appear on screen—you must import and reference it.

## 11. Guided hands-on lab
1. Run npx ng version.
2. Run npx ng serve --open.
3. In a scratch branch, run npx ng generate component practice-banner --standalone --skip-tests then inspect the files; revert if unused.

Start the existing app with `npm install` (first time) and `npm start` from the repository root. Visit `http://localhost:4200`.

## 12. Expected result and evidence
The generated component directory exists; npm test runs the supplied specs. Capture the browser result and terminal output. **Status:** Author-written example; build/browser verification is pending until dependencies can be installed on a compatible Node runtime.

## 13. Mistakes, edge cases and solution
**Mistake:** Running ng new inside the existing repository and creating a nested workspace.

**Fix:** This repo already has angular.json; run ng generate, not ng new.

## 14. Interview-first Q&A
**Q1. Does ng generate component display it immediately?**

**Answer:** No. It scaffolds files; import the component into a parent and put its selector in the template.

**Q2. What is the evidence that you understand this lesson?**

**Answer:** Point to `angular.json + src/app/`, execute the lab and describe the expected UI and any debugging changes you made.

## 15. Scenario-based MCQ (with rationale)
Which command runs unit tests? A) ng lint in all projects B) ng test C) ng package D) ng new

**Correct answer:** B — use ng test; lint requires explicit configuration.

## 16. Subjective assignment with worked solution
**Task:** Create a new standalone component and display it in AppComponent.

**Worked answer:** npx ng g c practice-banner --standalone; import PracticeBannerComponent in app.ts imports; render <app-practice-banner /> in app.html. Remove it after practice to keep the base lab focused.

## 17. Completion gate and next topic
- [ ] Explain the concept and its analogy without reading.
- [ ] Run the lesson in the shared app and inspect browser output.
- [ ] Answer both interview questions and the MCQ.
- [ ] Complete the assignment and keep evidence.
- [ ] Run `npm run build` and `npm test` successfully on a supported machine.

**Story continuation:** Proceed to [Your First Angular Hello World Project](./06-hello-world-project.md); the same training desk grows another feature.

**Official reference:** https://angular.dev/overview · https://angular.dev/reference/versions

