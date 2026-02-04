## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

In this repo you’re on the default Tailwind spacing scale (no `spacing` extension in `tailwind.config.ts`). So `bottom-*` only supports the built‑ins:

- Spacing scale: `0`, `0.5`, `1`, `1.5`, `2`, `2.5`, `3`, `3.5`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`, `12`, `14`, `16`, `20`, `24`, `28`, `32`, `36`, `40`, `44`, `48`, `52`, `56`, `60`, `64`, `72`, `80`, `96`
- Special: `auto`, `full`, and fractions like `1/2`, `1/3`, `2/3`, `1/4`, `3/4` (e.g. `bottom-1/2`)

If you need exact values like 27px or 30px (or 1/12), use arbitrary values:
- `bottom-[27px]`
- `bottom-[30px]`
- `bottom-[8.333%]` (≈ 1/12)