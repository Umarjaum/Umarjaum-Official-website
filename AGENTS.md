<!-- LOVABLE:BEGIN -->

> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.

## What Lovable manages

Rules outside this block are the project's own. Change the pieces below in
Lovable, not by hand. With the [Lovable MCP](https://mcp.lovable.dev)
connected, `send_message` asks Lovable to do it; otherwise ask the user to
use the editor.

- **Database.** Do not add or edit `supabase/migrations/` or `drizzle/`.
  Ask Lovable to change the schema.
- **Generated files.** Do not edit a file whose header says it is automatically
  generated.
- **AI gateway.** Keep model calls on Lovable's gateway, and keep
  `LOVABLE_API_KEY` out of browser code.
- **Connectors.** Lovable provides native connectors. `list_connectors` shows
  which are enabled; `add_connector` only returns the dashboard link. When a
  connector is enabled, calls go through the connector gateway and need
  `LOVABLE_API_KEY`. When Lovable does not provide one, users can bring their
  own key and store it in Secrets.
- **Secrets.** Lovable manages them. Do not put secret values in the repo.

<!-- LOVABLE:END -->

## Project rules

- Dark sections (footer) wrap content in the `.surface-ink` class from `src/styles.css`, which re-declares the color tokens; never hardcode dark colors in components — the scoped tokens keep every shared component working on both surfaces.
- Identity, links and the public origin live only in `src/lib/site.ts` (`SITE_URL` from `VITE_SITE_URL`, falling back to the live domain); never hardcode the origin elsewhere — canonicals, OG URLs, JSON-LD IDs and the sitemap all derive from it.
- Every content route builds its head with `pageHead()` from `src/lib/seo.ts` so title, canonical, OG/Twitter and the connected JSON-LD graph stay consistent; root head holds only sitewide defaults.
- Every route sets `staticData.sitemap`; `/sitemap.xml` is derived from the router (`src/lib/sitemap.ts`), so new public pages appear automatically.
- Scroll/entrance motion is declarative via `data-*` attributes handled by `usePageMotion()` (GSAP) in `src/components/site/motion.ts`; pages call it once with a root ref, and all motion is gated behind `prefers-reduced-motion: no-preference`.
- `deploy/netlify-old-domain/` is a standalone static redirect bundle for the retired Netlify address, deployed separately to Netlify; it is not part of the app build, so keep its redirect target in sync with the public origin by hand.
- Every page gets a branded 1200x630 share card from `public/og/` through `pageHead()` (falling back to `og-default.jpg`), so new routes always ship a share image.
- Product screenshots are Lovable asset pointers in `src/assets/`; share images that need absolute URLs live in `public/og/` at 1200x630.
