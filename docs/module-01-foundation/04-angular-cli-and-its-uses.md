# Module 01 · Lesson 04 — Angular CLI and Its Uses

**Learning outcome:** Describe what Angular CLI automates.

> Connected story: We are building **Aarav's Training Desk**. Every lesson improves the same Angular app; no isolated throwaway sample is required.

## 1. Story — where this lesson fits
Aarav needs a repeatable way to assemble and run the training desk.

## 2. What is it?
Angular CLI provides workspace generation, development server, compilation, testing, and code generation commands.

## 3. Why do we need it?
Shared commands give every learner the same project layout and reduce setup mistakes.

## 4. Real-life analogy
CLI is the workshop toolbox: start machine, inspect parts, assemble pieces and run quality checks.

## 5. Memory hook and tagline
**CLI: Create · Launch · Inspect.** Remember this sentence during the interview.

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
Angular CLI provides workspace generation, development server, compilation, testing, and code generation commands. **Keep the responsibility narrow:** Shared commands give every learner the same project layout and reduce setup mistakes.

## 9. Complete, commented working example
**Canonical source:** `package.json + angular.json`. Use the repository files for the full, compilable implementation rather than running this excerpt as a standalone file.

```typescript
# Terminal commands; run from repository root
npm install
npm start
npm run build
```

## 10. Explain the code line by line
npm scripts invoke the project-local Angular CLI from node_modules, avoiding global CLI version conflicts.

## 11. Guided hands-on lab
1. Inspect scripts in package.json.
2. Run npm start to serve the app.
3. Run npm run build to build a distributable bundle.

Start the existing app with `npm install` (first time) and `npm start` from the repository root. Visit `http://localhost:4200`.

## 12. Expected result and evidence
App opens on http://localhost:4200 and dist/ appears after successful build. Capture the browser result and terminal output. **Status:** Author-written example; build/browser verification is pending until dependencies can be installed on a compatible Node runtime.

## 13. Mistakes, edge cases and solution
**Mistake:** Installing a global CLI with a different major version from package.json.

**Fix:** Use npm scripts or npx ng so the local pinned CLI takes precedence.

## 14. Interview-first Q&A
**Q1. Why prefer npx ng to a global ng install?**

**Answer:** It runs the repository-local CLI version, avoiding cross-project version drift.

**Q2. What is the evidence that you understand this lesson?**

**Answer:** Point to `package.json + angular.json`, execute the lab and describe the expected UI and any debugging changes you made.

## 15. Scenario-based MCQ (with rationale)
What starts the development server? A) ng serve B) ng deploy by default C) ng eject D) ng copy

**Correct answer:** A — ng serve launches the dev server.

## 16. Subjective assignment with worked solution
**Task:** Explain the difference between serve and build in a README paragraph.

**Worked answer:** serve starts a developer-focused server with rebuilds; build compiles optimized output when used with the production configuration.

## 17. Completion gate and next topic
- [ ] Explain the concept and its analogy without reading.
- [ ] Run the lesson in the shared app and inspect browser output.
- [ ] Answer both interview questions and the MCQ.
- [ ] Complete the assignment and keep evidence.
- [ ] Run `npm run build` and `npm test` successfully on a supported machine.

**Story continuation:** Proceed to [Angular CLI Commands](./05-angular-cli-commands.md); the same training desk grows another feature.

**Official reference:** https://angular.dev/overview · https://angular.dev/reference/versions

