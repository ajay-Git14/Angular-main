# Techlambda Angular — Interview-First Learning Lab

A hands-on Angular 22 learning repository aligned to the supplied Techlambda course TOC.

> **Delivery status:** Modules 01 and 02 have been authored as topic lessons and a runnable app with automated test *source*. Static source checks are possible; a completed npm install, Angular build, Vitest run and manual browser evidence have **not** yet been produced in this environment. Do not claim runtime verified until the commands below pass.

## 1. Course map and what is implemented

The attached course TOC also includes JavaScript, Node.js/NPM and TypeScript prerequisites. This first delivery implements **only the Angular track's first two modules**, without inventing scope for other modules.

| Module | Scope | Repository status |
| --- | --- | --- |
| 01 Angular Foundation | Intro, latest supported version, architecture, CLI purpose, CLI commands, Hello World | 6 illustrated lessons + working-source candidate |
| 02 Components and Templates | Standalone components, components, @for/@if/@switch, template syntax, interpolation, event/property/two-way binding, lifecycle, @Input/@Output, signal I/O, component styles | 12 illustrated lessons + integrated examples + test source |
| 03 Directives, Pipes and Animations | Per approved TOC | Not started |
| 04 Forms | Per approved TOC | Not started |
| 05 Dependency Injection and Services | Per approved TOC | Not started |
| 06 API Integration, RxJS and Signals | Per approved TOC | Not started |
| 07 Routing and Navigation | Per approved TOC | Not started |
| 08 Advanced Angular Features | Per approved TOC | Not started |
| 09 Enterprise Angular Development | Per approved TOC | Not started |
| 10 Testing | Per approved TOC | Not started (Modules 01–02 include preliminary Vitest tests) |
| 11 Build, Deployment and Performance | Per approved TOC | Not started |
| 12 Projects | CRUD and enterprise Angular app | Not started |

**Read lessons in order:** [Module 01](docs/module-01-foundation/README.md) → [Module 02](docs/module-02-components-templates/README.md).

## 2. Tools (why, and how to verify)

1. Install Node.js in a range supported by **Angular 22**: **22.22.3+ on the Node 22 line**, **24.15.0+ on the Node 24 line**, or a supported Node **26.x** release. Check `node -v`. Reference: https://angular.dev/reference/versions
2. npm is bundled with Node: check `npm -v`. npm installs dependencies and reads scripts in package.json.
3. Use VS Code (optional) with the free **Angular Language Service** extension (template intelligence) and **ESLint** extension only if lint has been configured. This repo does **not** have a lint target yet.
4. A browser (Chrome/Edge/Firefox) for the app and DevTools console.

The repo pins Angular **22.2.x** and compatible TypeScript **6.0.x**. The installed CLI is local to this repository: no global installation is required.

## 3. Clone, install, run and test (Windows PowerShell or macOS/Linux)

```sh
git clone https://github.com/techlambda-services/Angular.git
cd Angular
node --version
npm --version
npm install
npm start
```

- Open **http://localhost:4200/** (the start script also requests browser opening).
- Module 01: see the Hello World card in **Foundation**.
- Module 02: click Show/Hide, switch role, edit learner name, click greeting and counter, click child outputs, increment child likes, destroy/recreate the lifecycle example.
- Open browser DevTools **Console** for lifecycle-hook entries.

In a **second terminal** at repo root:

```sh
node scripts/verify-content.mjs
npm test
npm run build
```

**Expected:** Static content verification reports 18 lessons; tests pass; production build produces `dist/angular-learning-lab/browser/` (CLI output may vary with builder options).

**If Node version is rejected:** Upgrade Node to an officially supported release (Node 22.16 does *not* satisfy Angular 22).
**If npm install cannot access the network:** Check npm registry/network settings; do not call this a successful build.
**If port 4200 is occupied:** `npx ng serve --port 4300` then open http://localhost:4300.

## 4. Source code walking tour

```text
src/
  index.html                         Browser shell containing <app-root>
  main.ts                            bootstrapApplication(AppComponent)
  styles.css                         Accessible shared styling
  app/
    app.ts + app.html + app.css      Parent dashboard: signals, bindings, control flow
    hello-world.component.*         Module 01 Hello World
    legacy-profile.component.*      Module 02 @Input/@Output
    signal-profile.component.*      Module 02 input()/output()/model()
    lifecycle-demo.component.*      Module 02 lifecycle hooks
    app.spec.ts                      Angular TestBed/Vitest checks
docs/
  module-01-foundation/              6 topic lessons, analogies, labs, answers
  module-02-components-templates/    12 topic lessons, analogies, labs, answers
assets/learning-hooks/              Illustrated SVG mind maps, not official branding assets
COURSE-STATE.md                     Verification evidence and status checkpoint
```

## 5. One connected story and memory hooks

**Aarav's Training Desk** starts as a Hello World and progressively becomes a learner dashboard. Every topic answers *what / why / how*, uses a story-linked analogy, offers a memory hook image and mind map, points to commented source, explains example and expected result, and includes a lab, mistakes + fixes, interview Q&A, a scored MCQ, and an assignment with a worked solution.

- Module 01: **Door → Bootstrap → Root → Rooms**
- Module 02: **Show → Set → Hear → Sync**, **Parcel in → Receipt out → Model syncs**

This is lesson-first, beginner-friendly content; do not infer production-grade authentication, server rendering or persistence. Those belong to later modules.

## 6. Quality gates and GitHub Actions quota

- Static course consistency: `node scripts/verify-content.mjs`
- TypeScript / Angular template compile: `npm run build`
- Component interaction tests: `npm test`
- Browser acceptance: perform interactions and record expected screenshots/console
- **No GitHub Actions workflow is included** to avoid unrequested Actions spending.

Before declaring **10/10 or READY**, fill the execution evidence in [COURSE-STATE.md](COURSE-STATE.md).

**Official references:** https://angular.dev/overview · https://angular.dev/reference/versions · https://angular.dev/guide/templates/control-flow · https://angular.dev/guide/testing

