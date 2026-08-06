# Rafael Gomes Portfolio

A Next.js portfolio for a junior backend and DevOps engineer. The site follows a light-first, calm systems direction: concise recruiter-facing content on the page, with fuller project context available through an accessible detail dialog.

## Development

```bash
npm run dev
npm run lint
npm exec tsc -- --noEmit
npm run build
```

Open [http://localhost:3000](http://localhost:3000) while the development server is running.

`next/font` downloads the configured Google Fonts during a production build. A runner without access to Google Fonts will fail the build before application compilation is complete.

## Structure

- `src/app`: App Router layout, metadata, global styles, and the home page.
- `src/components/sections`: server-rendered page sections and their visual shells.
- `src/components/projects`: the interactive project carousel, cards, media gallery, detail dialog, and fullscreen dialog.
- `src/lib/data.ts`: portfolio content; keep project media, copy, and URLs centralized here.

The page shell remains server-rendered. Only the project carousel and dialog tree are client components because they need state, scroll observation, animation preferences, and focus-managed dialogs.

## Metadata and deployment

Set `NEXT_PUBLIC_SITE_URL` to the deployed canonical origin, including protocol and without a trailing path:

```bash
NEXT_PUBLIC_SITE_URL=https://example.com
```

When present, it enables the canonical URL, metadata base, and Open Graph URL. The site intentionally does not declare an Open Graph image until a final preview asset is available.

## Media

Project media is currently configured in `src/lib/data.ts`. Remote images must be permitted by `next.config.ts`. Project-card videos use their poster image and only load video metadata; playback is available in the project detail view.

## Manual QA

Before release, check the carousel on desktop and narrow mobile widths, keyboard navigation, dialog focus return, Escape/backdrop closing, fullscreen media, reduced-motion preferences, and external links.
