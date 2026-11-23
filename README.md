# Queue theory — website

The published website for the [queue-theory](https://github.com/queue-theory/queue-theory)
guide. Live at <https://queue-theory.github.io/>.

Built with [SvelteKit](https://svelte.dev/docs/kit) (`@sveltejs/adapter-static`,
fully prerendered) and the [Lily Design System](https://lilydesignsystem.com/)
(headless components; theme, locale, text-size, search, and share pickers).
Content is Markdown from the parent repo's `locales/`, rendered at build time
with [marked](https://marked.js.org/).

## Where the content comes from

This directory lives inside the `queue-theory` repository, one level below the
root. `scripts/sync-locales.mjs` copies each locale's `index.md` (the README,
translated) from `../locales/<code>/` into `src/content/locales/`. English is the
`en-001` locale.

**Never hand-edit files under `src/content/`.** Edit `../README.md` or
`../locales/` instead, then regenerate from the repository root:

```sh
make content   # mirror README to en-001; sync locales, search indexes, llms.txt/json, sitemap.xml
```

## Development

```sh
pnpm install
pnpm run dev       # http://localhost:5173
pnpm run build     # prerenders the full site into build/
pnpm run verify    # checks every internal link and anchor in build/
pnpm run a11y      # axe-core accessibility checks on build/
pnpm run check     # svelte-check
pnpm test          # language router rules
```

## Publishing

This directory is published to its own
[`queue-theory.github.io`](https://github.com/queue-theory/queue-theory.github.io)
repository with `git subtree`, from the parent repository's root:

```sh
make publish
```

[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), at the root of
the published repository, builds and deploys to GitHub Pages on every push to
`main`. See the parent repository's `spec/website.md`.
