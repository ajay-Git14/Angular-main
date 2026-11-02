# Module 02 — Angular Components and Templates

**Story continuation:** The Training Desk from Module 01 becomes interactive. Every lesson maps to visible behavior in the same runnable application.

![Module 02 memory map](../../assets/learning-hooks/module-02-components.svg)

1. [Standalone Components](./01-standalone-components.md)
2. [Component Fundamentals](./02-component-fundamentals.md)
3. [Displaying Data using @for, @if, @switch](./03-display-data-control-flow.md)
4. [Template Syntax](./04-template-syntax.md)
5. [Data Binding](./05-data-binding.md)
6. [Event Binding](./06-event-binding.md)
7. [Property Binding](./07-property-binding.md)
8. [Two Way Binding](./08-two-way-binding.md)
9. [Lifecycle Hooks](./09-lifecycle-hooks.md)
10. [Component Interaction — @Input and @Output](./10-component-interaction-input-output.md)
11. [Signal Inputs and Outputs](./11-signal-inputs-outputs.md)
12. [Component Styles](./12-component-styles.md)

## Map learning outcomes to the working app
| Concept | Application evidence |
| --- | --- |
| Standalone components | `app.ts` imports + `app.html` child selectors |
| Modern control flow | Lesson-list visibility, topic list, role switch |
| Interpolation, property, event and two-way binding | Learner name, greeting, counter, tooltip |
| Lifecycle | DevTools console and dynamic create/destroy |
| Decorator parent-child API | Legacy Profile and parent selection |
| Signal parent-child API | Signal Profile, likes model and parent selection |
| Component styles | Responsive panel grid, app.css and styles.css |

**Module exit criteria:** Explain each example from source, demonstrate it in browser and pass `npm run build` + `npm test`.

**Warning:** This repository holds baseline instructional code and specs; runtime verification is still required on a supported Node environment.

