# Contributing

Version: 1.0

---

# Purpose

This document describes the development workflow used by Physics Studio.

Every contribution should follow the same process to ensure consistency,
maintainability, and long-term stability.

Whether the contributor is the original author or a future developer, these
rules should always be followed.

---

# Development Philosophy

Physics Studio values quality over speed.

Every contribution should improve the project without introducing unnecessary
complexity.

The architecture is more important than the implementation.

---

# Development Workflow

Every new feature should follow this workflow.

```
Idea
    ↓
Discussion
    ↓
Architecture Review
    ↓
API Design
    ↓
Implementation
    ↓
Testing
    ↓
Documentation
    ↓
Demo
    ↓
Commit
```

Do not skip any step.

---

# Before Writing Code

Before implementing a feature, answer the following questions.

- Why is this feature needed?
- Does it support the project goals?
- Which package does it belong to?
- Does a similar feature already exist?
- Can existing code be reused?

If the feature does not have a clear purpose, it should not be implemented.

---

# Before Creating a Class

Before adding a new class, ask:

- Is this a new responsibility?
- Can an existing class solve the problem?
- Is composition a better solution?
- Does the class have a single responsibility?

Avoid unnecessary classes.

---

# Before Creating a Package

A new package should only be created when:

- It has a clear responsibility.
- It will contain multiple related classes.
- It simplifies the architecture.

Never create packages for a single class.

---

# API Review

Before exposing a public API, verify that it is:

- Simple
- Predictable
- Consistent
- Readable
- Reusable

Public APIs should remain stable whenever possible.

---

# Code Review Checklist

Before committing code, verify:

- The code follows the architecture.
- No duplicated logic exists.
- Responsibilities are clear.
- Naming is consistent.
- Documentation is updated.
- Public APIs are documented.
- The implementation is readable.

---

# Testing

Every feature should be tested.

Testing should verify:

- Expected behavior.
- Invalid input.
- Edge cases.
- Rendering correctness.
- API usability.

A feature is not complete until it has been tested.

---

# Documentation

Documentation is part of the implementation.

Whenever behavior changes:

- Update documentation.
- Update examples.
- Update API documentation if necessary.

Documentation should never become outdated.

---

# Examples

Whenever possible, provide an example demonstrating how a feature is used.

Good examples are considered part of the public API.

---

# Commits

Each commit should represent one logical change.

Good commit examples:

```
Add Rectangle shape

Implement Arrow rendering

Introduce Group object

Improve document rendering
```

Avoid commits containing unrelated changes.

---

# Pull Requests

Every pull request should have one purpose.

Large changes should be divided into smaller, reviewable pull requests whenever
possible.

---

# Performance

Optimize only after correctness.

Correctness is more important than speed.

Avoid premature optimization.

---

# Refactoring

Refactoring should improve the code without changing public behavior.

Large refactoring should be performed separately from feature development.

---

# Backward Compatibility

Avoid breaking public APIs.

When breaking changes are necessary:

- Document them.
- Explain the reason.
- Update affected examples.

---

# Project Values

Physics Studio values:

- Simplicity
- Readability
- Consistency
- Reusability
- Maintainability
- Educational usefulness

Every contribution should reinforce these values.

---

# Definition of Done

A task is considered complete only when:

- The architecture remains consistent.
- The implementation is complete.
- The feature is tested.
- Documentation is updated.
- Examples are added when appropriate.
- The code is reviewed.
- The project still builds successfully.

---

# Final Principle

Every contribution should leave the project better than it was before.

When in doubt, choose the solution that makes the library simpler,
clearer, and more useful for creating educational physics content.