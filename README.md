# UmarJaum — Official Website

The official website and portfolio for Muhammad Umar Jabbar (UmarJaum), physicist, developer, and creator of PublishRank. Built with TanStack Start, React, TypeScript, and Tailwind CSS; deployed on Vercel.

## Develop

This repository uses Bun (`bun.lock`). Install dependencies and start the local server:

```sh
bun install --frozen-lockfile
bun run dev
```

Useful checks before shipping:

```sh
bun run test
bun run lint
bun run build
node scripts/seo-content-audit.mjs
```

## Website structure

Public pages are file-based routes in `src/routes/`. Shared site identity, URLs, and the canonical origin are defined in `src/lib/site.ts`. Reusable page metadata and JSON-LD graph construction live in `src/lib/seo.ts`; shared editorial content is in `src/lib/content.ts`.

| URL | Purpose | Main next step |
| --- | --- | --- |
| `/` | Introduce UmarJaum and connect the founder, work, and product topics | About or PublishRank |
| `/about` | Explain the founder’s identity, background, and approach | PublishRank or Contact |
| `/publishrank` | Describe the product, its supported use cases, and evidence | Official product site or WordPress.org |
| `/work` | Present selected product and workflow examples | PublishRank |
| `/faq` | Answer recurring questions directly | Contact |
| `/contact` | Provide contact options and guidance | Email or social profile |
| Legal routes | Provide privacy, terms, cookie, disclaimer, security, and accessibility information | Relevant policy or Contact |

## SEO and content conventions

- Give every public content route a clear purpose, a unique title and description, a canonical URL, a relevant share image (or the default), and a deliberate `staticData.sitemap` decision.
- Build route metadata with `pageHead()` in `src/lib/seo.ts`; keep the public origin and identity in `src/lib/site.ts` rather than hardcoding URLs in routes.
- Make page copy useful to people first: answer the page’s main question near the beginning, use descriptive headings, support claims with product evidence, and link to the most relevant next page.
- Keep product facts consistent with the current release and the official product documentation. Avoid ranking guarantees, unsupported superlatives, keyword stuffing, and thin pages made only to target a phrase.
- Keep structured data aligned with visible page content. Schema helps describe content; it does not guarantee enhanced search results.
- Add each new public route to the sitemap by setting its route-level sitemap decision. The sitemap is generated from the router; do not hand-maintain a second URL list.
- Review the content architecture, page intent, and publishing checklist in [`docs/seo-content-architecture.md`](docs/seo-content-architecture.md) before adding or substantially revising a page.

## SEO checks

`node scripts/seo-content-audit.mjs` is a dependency-free structural check for route metadata conventions. The Vitest SEO and sitemap tests cover generated metadata and discovery behavior. These checks do not replace browser rendering, accessibility review, or validation in Google Search Console and Bing Webmaster Tools.

## Deployment notes

Vercel uses the TanStack Start framework configuration in `vercel.json`. `public/robots.txt`, the generated `/sitemap.xml`, and `public/llms.txt` provide crawler and machine-readable discovery guidance. The retired Netlify domain has a separate redirect bundle in `deploy/netlify-old-domain/`; it is not part of the main app deployment.
