# Packages

Version: 1.0

---

# Purpose

This document describes the responsibility of every package in Physics Studio.

Each package has a clearly defined purpose.

Packages should remain independent whenever possible.

A package should never contain classes that belong to another package.

---

# Project Structure

```
src/

    core/
    math/
    graphics/
    physics/
    diagrams/
    charts/
    layout/
    export/
    utils/
```

---

# core

## Purpose

The foundation of the library.

Contains the base infrastructure shared by all other packages.

## Responsibilities

- GraphicObject
- Document
- Layer
- Group
- Transform
- Scene hierarchy
- Object management

## Must NOT Contain

- Physics
- Shapes
- Charts
- Educational concepts

---

# math

## Purpose

Mathematical objects and algorithms.

## Responsibilities

- Point
- Vector
- Size
- Rectangle
- Bounds
- Angle
- Matrix
- Geometry
- Mathematical helpers

## Must NOT Contain

- Canvas
- Physics
- Rendering
- Graphics

---

# graphics

## Purpose

Generic graphical objects.

Everything that can be drawn belongs here.

## Responsibilities

- Shape
- Rectangle
- Circle
- Ellipse
- Polygon
- Line
- Arrow
- Arc
- Path
- Text
- Image

## Rules

Graphics know how to draw themselves.

Graphics do not represent educational concepts.

---

# physics

## Purpose

Educational physics objects.

Physics objects describe concepts rather than primitive graphics.

## Responsibilities

- Mass
- Force
- Weight
- Friction
- Tension
- Spring
- Pulley
- InclinedPlane
- Charge
- ElectricField

## Rules

Physics objects are built using graphics objects.

Physics objects should never duplicate drawing logic.

---

# diagrams

## Purpose

Complete educational illustrations.

## Responsibilities

- FreeBodyDiagram
- MotionDiagram
- CircuitDiagram
- RayDiagram
- LaboratoryDiagram
- VectorDiagram

## Rules

Diagrams organize physics objects.

Diagrams do not implement primitive drawing.

---

# charts

## Purpose

Scientific charts and educational plotting.

## Responsibilities

- CartesianGraph
- CoordinatePlane
- Grid
- Axes
- FunctionPlot
- ScatterPlot
- BarChart
- DataTable

---

# layout

## Purpose

Automatic positioning and alignment.

## Responsibilities

- Alignment
- Distribution
- Anchors
- Guides
- Margins
- Padding
- Auto Layout

---

# export

## Purpose

Generate output files.

## Responsibilities

- CanvasRenderer
- SvgRenderer
- PngExporter
- PdfExporter

Export is the final stage of the pipeline.

---

# utils

## Purpose

General-purpose helper utilities.

## Responsibilities

- Color helpers
- String helpers
- Number helpers
- Validation
- Utility functions

Utilities should remain generic.

---

# Package Dependency

Packages should depend only on lower-level packages.

```
Diagrams
      │
Physics
      │
Graphics
      │
Core
      │
Math
```

Utilities may be used by every package.

---

# Package Independence

Each package should have a single responsibility.

Packages should communicate through public APIs.

Avoid hidden dependencies between packages.

---

# Package Growth

New packages should only be introduced when there is a clear architectural
reason.

Avoid creating packages for small numbers of classes.

Packages should remain cohesive.

---

# Final Rule

Before creating a new package, ask:

- Does it represent a distinct responsibility?
- Will it contain multiple related classes?
- Can existing packages solve the problem?
- Does it simplify the architecture?

If the answer is "No", a new package should not be created.