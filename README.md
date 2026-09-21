# bigballs.ooo

Mysterious, video-driven static site built with **Astro 7** + **Tailwind CSS 4**, deployed as pure **Cloudflare Workers Static Assets** (no adapter, assets-only).

Hero is a muted, looping Cloudflare Stream embed with atmospheric overlays.

## Stack

- Astro 7 (static output)
- Tailwind CSS 4 via `@tailwindcss/vite`
- Content Collections (ready)
- Cloudflare Stream for the primary visual
- Full Open Graph + Twitter cards + JSON-LD structured data
- `robots.txt` + static `sitemap.xml`
- Google Search Console verification meta tag

## Local development

```bash
npm install
npm run dev
```

## Build & Deploy (Cloudflare Workers Static Assets)

```bash
npm run build
# outputs pure static files to ./dist

# Deploy (requires wrangler logged in)
npm run deploy
# or
npx wrangler deploy
```

`wrangler.toml` is configured for assets-only:

```toml
[assets]
directory = "./dist"
```

No Worker script or `@astrojs/cloudflare` adapter is required.

## Domain

Production target: **https://bigballs.ooo**

CTA routes to: `sales@desertrich.com`

## Notes

- Fully static, edge-cached via Cloudflare.
- Mobile-first, full-viewport Stream hero with atmospheric fades, vignette, grain, and subtle drift.
- No body copy — visual + single acquisition CTA + required disclaimer footer.
