# Coding Style

Version: 1.0

---

# Purpose

This document defines the coding standards used throughout Physics Studio.

The goal is to keep the codebase consistent, readable, maintainable, and easy
to navigate.

Every source file should follow these conventions.

---

# General Philosophy

Code should be written for humans first and computers second.

Readable code is always preferred over clever code.

Consistency is more important than personal preference.

---

# File Naming

Use PascalCase for class files.

Examples:

```
GraphicObject.ts
Rectangle.ts
Circle.ts
Mass.ts
FreeBodyDiagram.ts
```

Do not use abbreviations unless they are universally accepted.

---

# Class Naming

Classes use PascalCase.

Examples:

```
GraphicObject
Rectangle
Arrow
PhysicsObject
FreeBodyDiagram
```

Class names should always describe nouns.

---

# Method Naming

Methods use camelCase.

Methods should describe actions.

Examples:

```
draw()
move()
rotate()
clone()
contains()
```

Avoid vague names.

Bad:

```
run()
execute()
process()
handle()
```

Good:

```
drawArrow()
calculateBounds()
updateLayout()
```

---

# Property Naming

Properties use camelCase.

Private fields use an underscore prefix.

Example:

```
private _position: Point;

public get position(): Point
```

---

# Constants

Constants use UPPER_SNAKE_CASE.

Example:

```
DEFAULT_LINE_WIDTH
PI
GRID_SIZE
```

---

# Interfaces

Interfaces begin with "I" only when they represent contracts.

Example:

```
IRenderer
IExporter
ILayout
```

Data structures should not use interfaces unnecessarily.

---

# Enums

Enums use PascalCase.

Members use PascalCase.

Example:

```
enum Alignment {

    Left,

    Center,

    Right

}
```

---

# Constructors

Constructors should initialize state only.

Do not perform complex logic inside constructors.

If initialization becomes complex, create dedicated methods.

---

# Getters and Setters

Expose fields through getters and setters when validation or encapsulation is
required.

Avoid exposing mutable internal state directly.

---

# Functions

Functions should perform one task.

Long methods should be divided into smaller methods.

Aim for functions under 40 lines whenever practical.

---

# Classes

Classes should remain focused.

Prefer many small classes over a few very large classes.

As a general guideline:

- Under 150 lines is excellent.
- Under 250 lines is acceptable.
- Over 300 lines should trigger a design review.

---

# Comments

Comments explain "why".

Code explains "how".

Avoid comments that simply repeat the code.

Bad:

```ts
// Move the object
object.move();
```

Good:

```ts
// Keep labels aligned with the graphical object.
```

---

# Documentation

Every public class should contain a short description.

Example:

```ts
/**
 * Represents a rectangular shape.
 */
```

Public methods should be documented whenever their behavior is not immediately
obvious.

---

# Imports

Group imports by category.

Order:

1. External libraries
2. Internal modules
3. Relative modules

Avoid unused imports.

---

# Formatting

Use four spaces for indentation.

Always include braces.

Example:

```ts
if (condition) {

    doSomething();

}
```

Never write single-line blocks.

---

# Boolean Properties

Boolean properties should read naturally.

Examples:

```
visible
enabled
selected
locked
```

Avoid names such as:

```
isObjectVisibleFlag
```

---

# Error Handling

Fail early.

Throw meaningful errors when invalid input is detected.

Never silently ignore invalid state.

---

# Magic Numbers

Avoid magic numbers.

Use named constants whenever possible.

Bad:

```ts
lineWidth = 2;
```

Good:

```ts
lineWidth = DEFAULT_LINE_WIDTH;
```

---

# Mutability

Keep objects mutable only when necessary.

Prefer readonly properties whenever values should not change.

---

# API Design

Public APIs should be easy to discover.

Methods should read like natural language.

Example:

```ts
diagram.addForce(force);

document.add(diagram);

layer.add(shape);
```

Avoid unnecessary verbosity.

---

# Consistency

Follow existing project conventions.

Do not introduce different coding styles into the same codebase.

---

# Final Rule

Before committing new code, ask:

- Is the code readable?
- Is the responsibility clear?
- Can it be simplified?
- Is it consistent with the rest of the project?
- Would another developer immediately understand it?

If the answer to any question is "No", improve the implementation before
committing it.