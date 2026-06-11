# Mike Fisher Portfolio

Terminal-style personal portfolio site for Mike Fisher. The app presents profile information, links, and selected projects through a web-shell interface with command history and autocomplete.

## What it does

- Renders a configurable terminal UI from `config.json`.
- Shows Mike's social links, bio greeting, and selected projects.
- Supports terminal-style keyboard interactions such as tab completion, escape-to-clear, and command history navigation.
- Builds to a static Vite site suitable for simple hosting.

## Stack

- Vite
- TypeScript
- HTML/CSS generated from TypeScript modules
- js-yaml for configuration/data parsing
- Biome for linting/formatting

## Getting started

```bash
npm install
npm run dev
```

Useful scripts:

```bash
npm run build
npm run preview
npm run lint
npm run format
```
