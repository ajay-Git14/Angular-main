# Module 01 · Lesson 02 — Angular Latest Version Overview

**Learning outcome:** Choose a supported Angular and toolchain version.

> Connected story: We are building **Aarav's Training Desk**. Every lesson improves the same Angular app; no isolated throwaway sample is required.

## 1. Story — where this lesson fits
The team cannot open the training desk if the runtime and compiler disagree.

## 2. What is it?
Angular 22 is the active major version as of 16 Oct 2026; this course targets the 22.2 minor line.

## 3. Why do we need it?
The CLI, framework and TypeScript compiler must be mutually compatible to compile and serve the app.

## 4. Real-life analogy
A train can run only when engine, tracks and signals follow compatible specifications.

## 5. Memory hook and tagline
**Match the engine to the track.** Remember this sentence during the interview.

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
Angular 22 is the active major version as of 16 Oct 2026; this course targets the 22.2 minor line. **Keep the responsibility narrow:** The CLI, framework and TypeScript compiler must be mutually compatible to compile and serve the app.

## 9. Complete, commented working example
**Canonical source:** `package.json + angular.json`. Use the repository files for the full, compilable implementation rather than running this excerpt as a standalone file.

```typescript
// Required for Angular 22.0.x as documented by Angular:
// Node ^22.22.3 || ^24.15.0 || ^26.0.0
// TypeScript >=6.0.0 <6.1.0
// RxJS ^6.5.3 || ^7.4.0
// This repository uses ~22.2.0 Angular packages and ~6.0.0 TS.
```

## 10. Explain the code line by line
A tilde patch-range stays within one minor series. npm resolves available compatible patch versions.

## 11. Guided hands-on lab
1. Read package.json and find Angular 22.2 dependencies.
2. Run node --version and compare against supported ranges.
3. Run npm install then npx ng version to confirm the installation.

Start the existing app with `npm install` (first time) and `npm start` from the repository root. Visit `http://localhost:4200`.

## 12. Expected result and evidence
npx ng version reports Angular CLI 22.x; the Node engine check succeeds. Capture the browser result and terminal output. **Status:** Author-written example; build/browser verification is pending until dependencies can be installed on a compatible Node runtime.

## 13. Mistakes, edge cases and solution
**Mistake:** Using Node 22.16 just because it is major version 22.

**Fix:** Use Node 22.22.3+ (on the 22 line), Node 24.15+, or supported 26.x.

## 14. Interview-first Q&A
**Q1. Can Angular 22 compile with TypeScript 5.9?**

**Answer:** Not according to the published Angular 22.0 compatibility matrix; 6.0.x is required.

**Q2. What is the evidence that you understand this lesson?**

**Answer:** Point to `package.json + angular.json`, execute the lab and describe the expected UI and any debugging changes you made.

## 15. Scenario-based MCQ (with rationale)
Which is in Angular 22's Node supported ranges? A) 18.20 B) 20.10 C) 22.22.3 D) 22.12

**Correct answer:** C — 22.22.3 is the minimum supported 22.x line.

## 16. Subjective assignment with worked solution
**Task:** Write a three-line environment checklist for a teammate.

**Worked answer:** 1. node -v: supported release; 2. npm install: dependencies resolve; 3. npx ng version: CLI/framework match. Source: https://angular.dev/reference/versions.

## 17. Completion gate and next topic
- [ ] Explain the concept and its analogy without reading.
- [ ] Run the lesson in the shared app and inspect browser output.
- [ ] Answer both interview questions and the MCQ.
- [ ] Complete the assignment and keep evidence.
- [ ] Run `npm run build` and `npm test` successfully on a supported machine.

**Story continuation:** Proceed to [Angular Architecture Overview](./03-angular-architecture-overview.md); the same training desk grows another feature.

**Official reference:** https://angular.dev/overview · https://angular.dev/reference/versions

