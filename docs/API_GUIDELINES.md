# API Guidelines

Version: 1.0

---

# Purpose

This document defines the rules for designing the public API of Physics Studio.

The API should be intuitive, predictable, consistent, and easy to use.

A developer should be able to understand how to use a class without reading its
implementation.

---

# Philosophy

The public API is the face of the library.

Internal implementation may change.

Public APIs should remain stable.

Breaking changes should be avoided whenever possible.

---

# General Rules

A good API should be:

- Simple
- Predictable
- Consistent
- Discoverable
- Easy to remember

---

# Constructors

Constructors should create valid objects.

Avoid constructors with many parameters.

Bad

```ts
new Rectangle(100, 50, "#ff0000", "#000000", 2, true, 0.5);
```

Good

```ts
const rectangle = new Rectangle();

rectangle.width = 100;
rectangle.height = 50;
```

---

# Object Configuration

Objects should expose meaningful properties.

Example

```ts
const mass = new Mass();

mass.value = 5;
mass.unit = "kg";
```

Avoid forcing configuration through constructors.

---

# Method Names

Method names should describe actions.

Good

```ts
add()

remove()

move()

rotate()

clone()
```

Avoid generic names.

Bad

```ts
execute()

run()

process()

handle()
```

---

# Fluent APIs

Use fluent APIs only when they improve readability.

Example

```ts
rectangle
    .move(10, 20)
    .rotate(30);
```

Do not use fluent APIs everywhere.

---

# Collections

Collections should expose consistent methods.

Example

```ts
document.add(object);

document.remove(object);

document.clear();
```

Avoid inconsistent naming.

---

# Object Ownership

An object should belong to one parent.

Objects should never be attached to multiple parents simultaneously.

---

# Mutability

Objects are mutable unless explicitly documented otherwise.

Changing object properties should immediately affect rendering.

---

# Validation

Validate input early.

Throw meaningful errors when invalid values are provided.

Do not silently ignore invalid data.

---

# Default Values

Every object should have sensible defaults.

Example

```ts
const rectangle = new Rectangle();
```

should produce a valid drawable object.

---

# Public vs Internal APIs

Only expose functionality that users actually need.

Keep implementation details private.

---

# Naming

Prefer complete names.

Good

```ts
rotation

position

backgroundColor
```

Avoid abbreviations.

Bad

```ts
rot

pos

bg
```

---

# Reusability

Objects should be reusable.

The same object should work in multiple educational contexts whenever possible.

---

# Consistency

Similar objects should expose similar APIs.

If Rectangle has

```ts
fill
```

Circle should also have

```ts
fill
```

Consistency reduces the learning curve.

---

# Options Objects

When many optional parameters exist, use an options object.

Example

```ts
new Arrow({

    length: 100,

    color: "#000000"

});
```

Avoid constructors with many positional parameters.

---

# Extensibility

Design APIs so new features can be added without breaking existing code.

Backward compatibility is preferred.

---

# Documentation

Every public class should include documentation.

Every public method should clearly describe its purpose.

---

# Final Rule

When designing a new public API, ask:

- Is it obvious?
- Is it readable?
- Is it consistent?
- Is it reusable?
- Will it still make sense in five years?

If any answer is "No", redesign the API before implementation.