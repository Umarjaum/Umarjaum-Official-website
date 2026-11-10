# UmarJaum Official Website — implementation plan

## Product direction

Create a modern, content-rich personal/company website for Muhammad Umar Jabbar (public identity: UmarJaum), CEO and developer of the PublishRank WordPress SEO Plugin. The site should turn the existing PublishRank website into a broader founder-led destination while preserving the proven interface screenshots and product knowledge.

## Design

**Candidate movements:** editorial command center (0.06), cyber-noir portfolio (0.04), warm founder journal (0.08). **Chosen:** editorial command center.

- **Design movement:** a high-contrast editorial operating system: black ink, signal orange, warm paper, evidence panels, and sharp typographic hierarchy.
- **Core principles:** evidence over hype; founder clarity; fast scanning; progressive disclosure.
- **Color philosophy:** ink and paper establish authority, orange marks action and active systems, mint signals verified health, and lavender handles future-facing technical ideas.
- **Layout paradigm:** asymmetric editorial spreads with a strong left rail, oversized numbered sections, horizontal signal bands, and generous whitespace rather than centered card grids.
- **Signature elements:** orange “signal line” rules, monospace metadata labels, and screenshot evidence windows with a subtle offset shadow.
- **Interaction philosophy:** navigation stays obvious; hover states reveal context; accordions and mobile menus remain keyboard-accessible; motion never blocks reading.
- **Animation:** a short custom loader, restrained reveal transitions, marquee-like signal strip only where it improves orientation, and reduced-motion fallbacks.
- **Typography:** Geist/Inter-style sans for UI and display, IBM Plex Mono for labels and metadata.
- **Brand essence:** UmarJaum is the founder-led engineering desk behind practical publishing systems that make SEO inspectable. Personality: exact, editorial, independent.
- **Brand voice:** direct, evidence-based, quietly ambitious. Example lines: “Build the system your publishing desk can explain.” and “SEO is infrastructure. Make it observable.”
- **Wordmark:** a compact U/J monogram in a signal-orange square paired with a plainspoken UmarJaum wordmark.
- **Signature color:** signal orange `#ff6b35`.

## Implementation

- Replace the TanStack/Vite runtime with Next.js App Router and TypeScript.
- Keep supplied official website assets under `public/`, including real PublishRank interface screenshots.
- Use `NEXT_PUBLIC_SITE_URL` as the one configurable public origin. Centralize all absolute URL generation in `src/lib/site.ts`.
- Add route-level metadata for `/`, `/about`, `/publishrank`, `/work`, `/faq`, `/contact`, and `/privacy`.
- Add JSON-LD for Person, Organization, WebSite, SoftwareApplication, BreadcrumbList, and FAQPage where appropriate.
- Add dynamic `sitemap.ts`, `robots.ts`, `manifest.ts`, and `public/manus-routes.json`.
- Add a client-only custom loader and responsive navigation; preserve accessible HTML and no-JS-readable content.
- Validate with `next build`, TypeScript checking through the build, and raw HTTP checks for metadata, sitemap, robots, and a missing route.

## Project structure

- `src/app/`: Next.js routes, metadata, sitemap, robots and manifest.
- `src/components/`: shared navigation, footer, loader, FAQ, screenshots and JSON-LD.
- `src/lib/`: site configuration, content, schema and URL helpers.
- `public/media/`: reused official PublishRank interface captures.
- `public/brand/`: reused official brand assets.
