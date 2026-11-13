# AGENTS.md

This file captures the repo-specific context needed to work efficiently.

## Project context

- Product: marketing site for Mehmiro, an AI-assisted pedagogical observation and coordination tool.
- Audiences: teachers, school leaders/owners, families/students, and pedagogues/researchers/partners.
- Language: Spanish (Argentina) by default; English is a potential market (international calls), currently available via a runtime toggle.
- UX: editorial “field notebook” direction, blue-purple brand palette from the app logo, Fraunces + Source Sans 3, paper texture, shard geometry, scroll-stacked cards, FAQ deck, ambassador CTA.
- Primary CTA: “Probala y sumá recompensas” (full) / “Probala” (short). The ambassador program replaced the unverified social-proof section on the home page.

## Tech stack

- Vite + React 19 + TypeScript (SPA with React Router).
- Tailwind CSS 4 + shadcn/ui; Radix primitives; CSS variables in `src/index.css`.
- Typography: Fraunces (display serif) and Source Sans 3 (sans) via Google Fonts.
- Animation: GSAP/ScrollTrigger components are present; the home page currently uses `StackCard` and the FAQ deck.
- Data: TanStack Query is wired in `src/App.tsx`.
- Forms: Formspree (footer contact form).
- Icons: lucide-react.
- Path alias: `@` -> `src/`.

## How to run

- Install: `npm install`
- Dev server: `npm run dev` (port 8080; see `vite.config.ts`)
- Build: `npm run build` -> `dist/`
- Preview: `npm run preview`

## Tests and quality

- Tests: not configured.
- Lint: `npm run lint` (ESLint).
- Format: not configured.

## Project structure

- `src/pages/`: `index` (home), `ParaDocentes`, `ParaEscuelas`, `ParaFamilias`, `Investigacion`, `Evidencia`, `Learn`, `Features`, `ForEducators`, `Blog`, `Community`, `Support`, `About`, `Privacy`, `Terms`, `NotFound`, `IndexExample` (`/ejemplo`, alternate layout).
- `src/components/`: hero, audience selector, audience page layout, problem, solution, ambassador, social proof, FAQ, CTA, footer, phone mockup.
- `src/components/StackCard.tsx`: scroll-stacked panels used on the home page.
- `src/components/ScrollStorySection/`: GSAP ScrollTrigger panels; not used on the current home page.
- `src/components/AudiencePage.tsx`: shared layout for `/para-docentes`, `/para-escuelas`, `/para-familias`, `/investigacion` and `/evidencia`.
- `src/components/AudienceSelector.tsx`: four-audience selector on the home page.
- `src/components/AmbassadorSection.tsx`: ambassador program block; replaces social proof when `showSocialProof` is false.
- `src/config/contentFlags.ts`: public content flags. `showSocialProof` is false until metrics/testimonials are verified.
- `src/i18n/`: `es-AR.json` and `en.json`; all landing copy lives here.
- `src/assets/`: story images/videos, onboarding assets, QR frame.

## Content rules

- Copy lives in `src/i18n/locales/*.json`. Edit both languages when changing visible copy.
- **Do not say “evalúa” or “no evalúa.”** The product identifies signals and offers options/suggestions; the teacher reviews and decides. Use “identifica señales”, “ofrece opciones”, “sugerencias personalizadas”.
- **Do not say coordination does not exist.** Coordinators, preceptors and support teams already do this work by hand. Frame the problem as fragmentation and lack of system/scale, not lack of commitment.
- **Social proof is hidden, not deleted.** `CONTENT_FLAGS.showSocialProof = false`; keep the 500+/98%/testimonial copy in i18n until the numbers are backed by source, date, and N.
- **Docs are not a source of truth.** `docs.mehmiro.com` is abandoned; audit before citing or reusing.
- **Do not mention previous organizational partnerships** in public copy. Use Mehmiro and IRCAI.
- Integrations: WhatsApp for observations (institution-configured) and Google login/Calendar/Gmail; other channels are assessed during a school pilot.
- Ambassador rewards: trigger on a qualified demo or pilot, not on signup. Define the reward with each school before starting.

## Assets

- Images/videos live in `src/assets/` and `public/`.
- The hero uses `src/assets/teacher-voice-note.webp`; the brand mark is `src/assets/mehmiro-logo.png`; the hero photo is masked by `src/components/LogoMaskedPhoto.tsx`; the QR uses `src/assets/frame.png`.
- Visual direction and rationale live in `docs/brand-direction.md`.
- OG image: `public/og-mehmiro.png` (1200x630).

## Deployment

- Base path is `/` (see `vite.config.ts`).
- Custom domain: `mehmiro.com` via `public/CNAME`.
- GitHub Pages workflow in `.github/workflows/deploy.yml`.
- No env vars referenced in code.

## Known issues / next steps

- Metadata is implemented in `index.html` (title, description, OG/Twitter, canonical, JSON-LD, theme-color), with `public/og-mehmiro.png`, `public/sitemap.xml` and `public/robots.txt`.
- English routes exist at `/en` and `/en/*`; the language toggle navigates between `/` and `/en`. `vite.config.ts` generates static HTML for all marketing routes and known course IDs in both languages; unknown course IDs remain SPA/404.
- The hero, problem and “Por qué ahora” sections use the systemic narrative. `/evidencia` and `/en/evidencia` document what the product can and cannot claim.
- Audience pages exist: `/para-docentes`, `/para-escuelas`, `/para-familias`, `/investigacion`; the home selector and footer link to them.
- `AGENTS.md` should be kept in sync with content/UX decisions.

## Scroll story interaction notes (only if `ScrollStorySection` is used)

- Goal sequence: text -> phone mockup -> tooltips -> optional video overlay -> next story; same order in reverse.
- Mobile-first tuning matters: shorter panel heights and faster reveal scrubs reduce excessive scrolling.
- Avoid z-index hacks to fix timing; prefer ScrollTrigger timing and pin behavior.
- Pin behavior pitfalls: `pinSpacing` on mobile phone panels can cause snap-back when the next section hits the top.
- Current stable pattern: phone panel pinned with `pinSpacing: false` and a mobile-only spacer after it to preserve scroll length.
- Completion/video state should be tied to scroll progress (not a one-time call) so it reverses cleanly.
- Video overlay is click-to-play only; no autoplay. Overlay should reappear when scrolling back.
- Avoid per-frame DOM queries inside `onUpdate`; cache elements once per panel.
