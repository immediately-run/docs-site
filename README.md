# immediately.run — Docs

A standalone [immediately.run](https://immediately.run) app: the project
**docs**, built as part of `docs/plans/ui-as-apps` **Phase 02**. No host
dependency; loads via a `present` URL.

- **Articles** are `.mdx` files in `src/content/` (long-form prose only).
- **Nav** is typed data in `src/data/docs.ts`; `App.tsx` maps each id to its
  article. Add a page = add an `.mdx` file, a `data/docs.ts` entry, and one line
  in the `App.tsx` registry.
- **Design** pulls tokens from `src/index.css`. Sidebar nav + reading column,
  mobile-first.
- **Loading** rides the gh-pages zip cache (`requireLatest: "stale_ok"`).

## Local dev

```bash
npm install
npm run dev
npm run build   # tsc -b && vite build — must pass clean
npm run lint
```
