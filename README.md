# Knogin Values & Behaviours Microportal (Cloudflare Pages)

Static microportal for Knogin's Values & Behaviours, plus a cross-role expectations model that works across:
- Developers / integrations
- PSAPs / ECCs
- Security command centers
- RTCC / intelligence teams

This is a separate Cloudflare Pages site so it does not increase bundle size for `knogin.com`.

Audience views:
- `internal` (Knogin roles): career level expectations (L1-L6) + Knogin role families
- `external` (Operational roles): PSAP/ECC, RTCC, security command centers, IT/integrations personas

Shareable URLs:
- `/?audience=internal`
- `/?audience=external`

Display settings (persisted in `localStorage` and shareable via query params):
- Theme: `?theme=light|dark|high-contrast`
- Font: `?font=default|dyslexic`
- Text size: `?zoom=small|medium|large|extra-large`
- Line height: `?lineHeight=normal|relaxed|loose`
- Letter spacing: `?letterSpacing=normal|wide|wider`

## Structure

Key files:

```text
src/content/values-and-behaviours.ts   # All page content + model (single source of truth)
src/pages/index.astro                 # Renders the microportal page
src/layouts/BaseLayout.astro          # Base HTML shell, header/footer
src/styles/global.css                 # Site styles + Tailwind entrypoint
src/styles/tokens.css                 # Knogin design tokens (light/dark/high-contrast + a11y)
src/styles/fonts.css                  # Knogin typography (Nunito Sans, Manrope, JetBrains Mono, OpenDyslexic)
astro.config.mjs                      # `site` used for canonical URLs
```

## Local dev

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy (Cloudflare Pages)

Cloudflare Pages settings:
- Build command: `npm ci && npm run build`
- Build output directory: `dist`
- Node: 20+

If you change the production domain, update `site` in `astro.config.mjs`.
