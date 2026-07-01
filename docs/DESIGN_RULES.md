# Design Rules

## Rule 1

Every class has one responsibility.

---

## Rule 2

Composition is preferred over inheritance.

---

## Rule 3

Graphics never contain physics logic.

---

## Rule 4

Physics never contains rendering logic.

---

## Rule 5

Renderer never knows physics.

---

## Rule 6

Everything belongs to a document.

---

## Rule 7

The public API must remain simple.

Example:

const diagram = new FreeBodyDiagramBuilder()

    .mass(5)

    .weight(50)

    .normal(50)

    .build();

No coordinates should be required from the user.

---

## Rule 8

Internal complexity is acceptable.

Public complexity is not.

---

## Rule 9

Never optimize before measuring.

---

## Rule 10

Every feature must support exporting.