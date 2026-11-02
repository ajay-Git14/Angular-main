import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
let failed = 0;
const check = (condition, message) => {
  process.stdout.write((condition ? 'PASS' : 'FAIL') + ' — ' + message + '\n');
  if (!condition) failed++;
};
const file = (p) => join(root, p);
const lessonFiles = [
  'docs/module-01-foundation/01-introduction-to-angular.md',
  'docs/module-01-foundation/02-angular-latest-version-overview.md',
  'docs/module-01-foundation/03-angular-architecture-overview.md',
  'docs/module-01-foundation/04-angular-cli-and-its-uses.md',
  'docs/module-01-foundation/05-angular-cli-commands.md',
  'docs/module-01-foundation/06-hello-world-project.md',
  'docs/module-02-components-templates/01-standalone-components.md',
  'docs/module-02-components-templates/02-component-fundamentals.md',
  'docs/module-02-components-templates/03-display-data-control-flow.md',
  'docs/module-02-components-templates/04-template-syntax.md',
  'docs/module-02-components-templates/05-data-binding.md',
  'docs/module-02-components-templates/06-event-binding.md',
  'docs/module-02-components-templates/07-property-binding.md',
  'docs/module-02-components-templates/08-two-way-binding.md',
  'docs/module-02-components-templates/09-lifecycle-hooks.md',
  'docs/module-02-components-templates/10-component-interaction-input-output.md',
  'docs/module-02-components-templates/11-signal-inputs-outputs.md',
  'docs/module-02-components-templates/12-component-styles.md'
];
const essential = [
  'README.md', 'COURSE-STATE.md', 'angular.json', 'package.json',
  'src/index.html', 'src/main.ts', 'src/app/app.ts',
  'src/app/app.html', 'src/app/app.spec.ts',
  'src/app/hello-world.component.ts',
  'src/app/legacy-profile.component.ts',
  'src/app/signal-profile.component.ts',
  'src/app/lifecycle-demo.component.ts',
  'assets/learning-hooks/module-01-foundation.svg',
  'assets/learning-hooks/module-02-components.svg'
];
check(lessonFiles.length === 18, 'Exactly 6 + 12 lesson paths defined');
for (const p of [...essential, ...lessonFiles]) check(existsSync(file(p)), p);
for (const p of lessonFiles) {
  if (!existsSync(file(p))) continue;
  const md = readFileSync(file(p), 'utf8');
  for (const section of ['Memory hook', 'Mind map', 'Interview', 'MCQ', 'assignment', 'Expected']) {
    check(md.toLowerCase().includes(section.toLowerCase()), p + ' has ' + section);
  }
}
if (existsSync(file('package.json'))) {
  const pkg = JSON.parse(readFileSync(file('package.json'), 'utf8'));
  check(pkg.dependencies?.['@angular/core']?.startsWith('~22.2'), 'Angular 22.2 framework pinned');
  check(pkg.devDependencies?.typescript?.startsWith('~6.0'), 'TypeScript 6.0 pinned');
}
if (existsSync(file('src/app/app.html'))) {
  const source = readFileSync(file('src/app/app.html'), 'utf8');
  for (const marker of ['@if','@for','@switch','[(ngModel)]','[disabled]','(click)','<app-signal-profile','<app-legacy-profile']) {
    check(source.includes(marker), 'Angular source includes ' + marker);
  }
}
check(!existsSync(file('.github/workflows')), 'GitHub Actions workflow not configured');
process.stdout.write(failed ? '\n' + failed + ' check(s) FAILED\n' : '\nStructural checks PASS (not a runtime build/test)\n');
process.exitCode = failed ? 1 : 0;

