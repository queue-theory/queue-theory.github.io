# Queue theory — website agent guide

See [README.md](README.md) for the overview. Repository-wide rules and the
specification live in the parent repository's `AGENTS.md` and `spec/`
(especially `spec/website.md`).

- Generated, never hand-edited: `src/content/`, `src/lib/locale-pages.json`,
  `static/search/`, `static/sitemap.xml`, `static/llms.txt`, `static/llms.json`.
  Regenerate with `make content` from the parent root.
- Every page is a locale route (`src/routes/[locale]/`), rendered by
  `src/lib/server/locale-pages.js`. The only other page is `/`, the language router.
- Everything the built site needs must live inside this directory; nothing may
  reference `../` at runtime, because the directory is published alone.
- The picker locale list is `LOCALES` in `src/lib/locales.js`; locales that copy
  another locale are listed in `NOINDEX`.
- `typescript` stays on 6.x (SvelteKit 3 needs TypeScript's JS API).
- `static/themes/*.css` are copied unmodified from Lily's upstream `themes/`.
- Run `pnpm run check`, `pnpm test`, `pnpm run build`, and `pnpm run verify` before committing.
