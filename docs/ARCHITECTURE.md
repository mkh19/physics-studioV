# Physics Studio Architecture

## Vision

Physics Studio is not a graphics library.

It is a document engine dedicated to creating educational physics content.

The primary output of Physics Studio is a document, not a canvas.

Examples of documents:

- Physics questions
- Free body diagrams
- Graphs
- Tables
- Formula sheets
- Exam papers
- Laboratory worksheets
- Educational summaries

---

## Architecture

Application

↓

Education

↓

Physics

↓

Diagrams

↓

Graphics

↓

Geometry

↓

Math

↓

Core

---

## Dependency Rule

Upper layers may depend only on lower layers.

Core depends on nothing.

Math depends on Core.

Geometry depends on Math.

Graphics depends on Geometry.

Physics depends on Graphics.

Diagrams depends on Physics.

Education depends on Diagrams.