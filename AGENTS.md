# AGENTS.md

This file captures the repo‑specific info Codex needs to work efficiently, based on the current code.

## Project context
- Product: single‑page Mehmiro marketing site for an AI pedagogical evaluation assistant.
- Audience: Spanish‑speaking teachers/schools in Argentina (storytelling around Juan and Beatriz).
- UX pattern: scroll‑based storytelling with pinned panels and a fixed/inline phone mockup.
- CTA: “Comenzar gratis” (mobile) and a QR to open the onboarding flow.

## Tech stack
- Vite + React + TypeScript (SPA with React Router).
- Tailwind CSS + shadcn/ui; Radix primitives; CSS variables + gradients in `src/index.css`.
- Typography: Inter via Tailwind config.
- Animation: GSAP + ScrollTrigger for scroll/pin/reveal sequences.
- Data: TanStack Query is wired in `src/App.tsx` (provider created globally).
- Forms: Formspree (footer contact form).
- Icons: lucide‑react.
- Path alias: `@` → `src/`.

## How to run
- Install: `npm install`
- Dev server: `npm run dev` (port 8080; see `vite.config.ts`)
- Build: `npm run build` → output to `dist/`
- Preview: `npm run preview`

## Tests and quality
- Tests: not configured.
- Lint: `npm run lint` (ESLint).
- Format: not configured.

## Project structure
- `src/pages/`: `Index` (main) and `NotFound`.
- `src/components/`: hero, scroll story, CTA, footer, phone mockup.
- `src/components/ScrollStorySection/`: GSAP ScrollTrigger panels; exposes `data-step`/`data-step-progress`.
- `src/components/FixedPhoneMockup.tsx`: inline/fixed phone frame, optional image/video layers.
- `src/components/ui/`: shadcn/ui components.
- `src/components/PhoneScreens/`: present but currently unused in imports.
- `src/hooks/`: `useScrollPhoneContent`, `useIsMobile`.
- `src/assets/`: story images/videos + QR frame image.

## Content and copy
- Language: Spanish (Argentina).
- Copy lives inline in components (Hero, Index story steps, CTA, Footer).
- Tone: helpful, modern, teacher‑centric.

## Assets
- Images/videos live in `src/assets/` and `public/`.
- Phone mockup images referenced directly in `src/pages/Index.tsx`.

## Deployment
- Base path is `/` (see `vite.config.ts`).
- No env vars referenced in code.

## PR/commit preferences
- No formal guidelines in code.

## Contact / decisions
- Not present in code (add owner for product/design decisions).

## Scroll story interaction notes (important)
- Goal sequence: Text → phone mockup → tooltips → optional video overlay → next story; same order in reverse.
- Mobile-first tuning matters: shorter panel heights and faster reveal scrubs reduce excessive scrolling.
- Avoid z-index hacks to fix timing; prefer ScrollTrigger timing and pin behavior.
- Pin behavior pitfalls: pinSpacing on mobile phone panels can cause snap-back when the next section hits the top.
- Current stable pattern: phone panel pinned with `pinSpacing: false` and a mobile-only spacer after it to preserve scroll length.
- Completion/video state should be tied to scroll progress (not a one-time call) so it reverses cleanly.
- Video overlay is click-to-play only; no autoplay. Overlay should reappear when scrolling back.
- Watch for performance: avoid per-frame DOM queries inside `onUpdate`; cache elements once per panel.
