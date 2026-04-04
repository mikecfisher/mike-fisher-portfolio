# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Dev

- **Dev server**: `npm run dev` (Vite)
- **Build**: `npm run build` (runs `tsc && vite build`)
- **Type-check only**: `npx tsc --noEmit`
- **Lint**: `npm run lint` (Biome)
- **Format**: `npm run format` (Biome)

## Architecture

- Single-page terminal portfolio site built with TypeScript + Vite, deployed to Vercel
- All terminal content, colors, and metadata are configured via `config.json` — do not hardcode these values
- Commands live in `src/commands/` as separate modules; `src/main.ts` is the entry point
- TypeScript strict mode is enabled (`noUnusedLocals`, `noUnusedParameters`, `noFallthroughCasesInSwitch`)
- No test framework — use `npx tsc --noEmit` to verify changes compile correctly
