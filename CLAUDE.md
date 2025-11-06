# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Core Commands
- `npm run dev` - Start development server on port 8080
- `npm run build` - Build production bundle
- `npm run build:dev` - Build development bundle
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Architecture Overview

This is a Vite + React + TypeScript landing page for Mehmiro, an AI educational assessment platform. The application uses shadcn/ui components with Tailwind CSS styling.

### Key Architectural Patterns

**Routing**: Single-page application with React Router. Main entry at `src/App.tsx` with routes defined for Index and 404 pages.

**Component Structure**:
- `/components/ui/` - shadcn/ui components (Button, Card, Dialog, etc.)
- `/components/PhoneScreens/` - Mobile app mockup screens displayed in phone frame
- `/components/` - Main application components (HeroSection, ScrollStorySection, etc.)

**Scroll-based Storytelling**: The landing page uses scroll-triggered animations to tell a story. The `useScrollPhoneContent` hook manages scroll state and transitions between phone screen mockups as the user scrolls through story sections.

**State Management**: Uses TanStack Query for server state management. Local state managed with React hooks.

**Styling**: Tailwind CSS with custom theme configuration. CSS variables defined in `src/index.css` for theming (light/dark mode support).

**Path Aliasing**: `@/` resolves to `./src/` directory for cleaner imports.

## Project Context

This is a marketing landing page that demonstrates the Mehmiro product through an interactive scroll-based story featuring Juan (a teacher) and how the AI helps create personalized educational assessments for different school contexts in Argentina.