# Architecture Decisions

Version: 1.0

---

# Purpose

This document records the architectural decisions made throughout the development
of Physics Studio.

Every important design decision must be documented together with its motivation
and expected impact.

These decisions become part of the project's architecture and should not be
changed without careful review.

---

# ADR-001

## Title

Physics Studio is an educational graphics library.

## Status

Accepted

## Decision

Physics Studio focuses on creating educational graphics for physics.

It is not intended to become a physics simulation engine.

## Reason

The primary goal of the project is to generate diagrams, illustrations, graphs,
tables, and figures for educational content and question banks.

Simulation engines introduce significant complexity without supporting the
main objective.

---

# ADR-002

## Title

Composition is preferred over inheritance.

## Status

Accepted

## Decision

Physics objects should be composed from reusable graphical objects whenever
possible.

## Reason

A Mass is not a Rectangle.

A Force is not an Arrow.

These concepts are represented visually by graphical objects but should not be
defined by them.

Composition provides greater flexibility and improves reusability.

---

# ADR-003

## Title

Graphics are independent from physics.

## Status

Accepted

## Decision

The Graphics layer contains generic visual objects.

The Physics layer contains educational concepts.

Graphics must never depend on physics.

## Reason

A Rectangle, Circle, Arrow, or Text object should be reusable in any context,
not only physics.

Keeping graphics generic greatly increases code reuse.

---

# ADR-004

## Title

Rendering is separated from object definition.

## Status

Accepted

## Decision

Objects describe themselves.

Renderers draw them.

Objects should never depend directly on a rendering technology.

## Reason

The same document should be exportable to different targets such as Canvas,
SVG, PNG, and PDF.

---

# ADR-005

## Title

Small reusable objects.

## Status

Accepted

## Decision

Large objects should be built from smaller reusable objects.

## Reason

Small objects are easier to test, maintain, and reuse.

Complex educational diagrams naturally become compositions of simple objects.

---

# ADR-006

## Title

One responsibility per class.

## Status

Accepted

## Decision

Every class should have one clear responsibility.

## Reason

Classes with multiple responsibilities become difficult to understand,
maintain, and extend.

---

# ADR-007

## Title

Simple public APIs.

## Status

Accepted

## Decision

The public API should always remain simple and intuitive.

Complexity should remain inside the implementation.

## Reason

Teachers and application developers should be able to create educational
graphics with minimal code.

---

# ADR-008

## Title

Education before technology.

## Status

Accepted

## Decision

Every new feature must improve educational content creation.

## Reason

Technology is a tool.

Education is the project's purpose.

---

# ADR-009

## Title

Avoid premature abstraction.

## Status

Accepted

## Decision

Abstractions should only be introduced when there is a clear need.

## Reason

Over-engineering increases maintenance cost and makes the project harder to
understand.

The simplest correct solution should always be preferred.

---

# ADR-010

## Title

Architecture evolves intentionally.

## Status

Accepted

## Decision

Architectural changes require documentation in this file.

## Reason

Future contributors should understand why a decision was made before attempting
to replace it.

Every architectural decision becomes part of the project's history.