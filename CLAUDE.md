## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

# Project Mariapaz — AI Agent Instructions

> This file extends Astro's default AI instructions.
> Project-specific rules take precedence whenever they are more restrictive.

---

# Development

When starting the development server, use background mode.

```bash
astro dev --background
```

Manage the server with:

```bash
astro dev status
astro dev stop
astro dev logs
```

---

# Astro Documentation

Official documentation:

https://docs.astro.build

Consult these guides before implementing related features.

- Routing
- Astro Components
- Framework Components
- Content Collections
- Styling
- Internationalization

Always prefer the official Astro documentation over assumptions.

---

# Project Overview

Project Mariapaz is a premium interactive invitation website.

It is **not** a standard landing page.

The goal is to create an emotional storytelling experience inspired by fairy tales and cinematic animation.

Every implementation must reinforce that vision.

---

# Development Philosophy

Quality over speed.

Maintainability over shortcuts.

Performance over unnecessary effects.

Accessibility is mandatory.

Documentation is mandatory.

Reusability is mandatory.

---

# Tech Stack

Astro 7

TypeScript (Strict)

Tailwind CSS v4

GSAP

Motion

Astro Assets

Vercel

---

# Before Writing Code

Always read:

docs/00-vision.md

docs/02-design-system.md

docs/03-architecture.md

docs/decisions.md

If the requested implementation conflicts with these documents,

stop and explain the conflict.

---

# Coding Rules

Never duplicate code.

Never hardcode colors.

Never hardcode spacing.

Never hardcode typography.

Never use inline styles.

Never add dependencies without explanation.

Never create components with multiple responsibilities.

Always prefer composition.

Always write semantic HTML.

Always keep components reusable.

---

# Design Tokens

All colors, spacing, shadows, typography and animations must use Design Tokens.

Never introduce magic numbers.

Never repeat CSS values.

---

# Components

Each reusable component should follow this structure.

Component/

├── Component.astro

├── Component.module.css

├── Component.types.ts

├── index.ts

└── README.md

---

# Data

Never hardcode content inside components.

Application content belongs inside:

src/data

Future CMS compatibility must always be considered.

---

# Styling

Prefer CSS Modules for component styling.

Use Tailwind utilities only where they improve readability.

Global styles belong inside:

src/styles

---

# Animations

Animations are part of the storytelling.

They are never decorative.

Every animation must have a purpose.

Prefer smooth motion.

Avoid exaggerated effects.

Performance is more important than visual complexity.

---

# Images

Prefer Astro Assets.

Optimize every image.

Use AVIF or WebP whenever possible.

Avoid large assets.

---

# Documentation

Every architectural change must update the documentation.

Update:

docs/

when introducing new concepts.

Important decisions belong in:

docs/decisions.md

---

# Git

Commits should be meaningful.

Examples:

feat(hero): create cinematic hero

fix(layout): improve mobile spacing

docs(tokens): document color system

refactor(button): simplify component API

---

# AI Behaviour

The AI should act as:

Software Architect

UI/UX Designer

Frontend Engineer

Performance Engineer

Documentation Writer

The AI must not simply generate code.

It should improve the project whenever possible while respecting the existing architecture.