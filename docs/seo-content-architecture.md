# SEO and content architecture

This document is the editorial and technical reference for growing the UmarJaum website without diluting its purpose or publishing unsupported SEO claims. The goal is a clear, useful site that search engines and people can understand—not a promise of rankings.

## 1. Topic and audience model

The site has two connected subjects. Keep their relationship explicit so that product pages do not obscure the founder profile, and founder content does not pretend to be product documentation.

| Topic | Primary audience intent | Primary destination | Supporting destinations |
| --- | --- | --- | --- |
| UmarJaum / Muhammad Umar Jabbar | Identify the person, background, and work | `/` | `/about`, `/work`, `/faq`, `/contact` |
| PublishRank | Understand the WordPress SEO product and verify its features | `/publishrank` | `/work`, `/faq`, official product site, WordPress.org listing |
| Technical publishing work | See practical examples and the approach behind the product | `/work` | `/publishrank`, `/about` |
| Contact and support context | Find the appropriate way to get in touch | `/contact` | `/faq`, `/publishrank` |
| Site policies | Understand the website's policies and commitments | Relevant legal route | `/contact` |

Treat `/publishrank` as the product overview, not a substitute for detailed product documentation. Link feature-specific support, installation, and release details to their authoritative PublishRank or WordPress.org source.

## 2. Existing page roles and information hierarchy

- **Home (`/`) — entity and orientation.** Identify the person and the flagship product immediately. Introduce the relationship, show selected evidence, then provide clear paths to About, PublishRank, Work, and Contact.
- **About (`/about`) — person and experience.** Explain who Muhammad Umar Jabbar is, what he does, how physics informs his engineering approach, and what work demonstrates that approach. Keep biographical claims factual and attributable.
- **PublishRank (`/publishrank`) — product and use cases.** State what the plugin is, who it serves, how to obtain it, and what the feature descriptions mean in practice. Make release-specific claims date/version aware and distinguish capabilities from outcomes.
- **Work (`/work`) — evidence.** Describe the role and context of each example, show genuine interface evidence, and link to the product section that explains it. Do not present a feature list as an independent case study unless the page includes original evidence and useful context.
- **FAQ (`/faq`) — concise answers.** Resolve actual recurring questions and link to the detailed page or authoritative external source. Keep structured FAQ data synchronized with the answers visible on the page.
- **Contact (`/contact`) — action.** State what topics are welcome, how to contact the right channel, and what information is useful for product support. Do not invite visitors to share credentials or private data.
- **Legal routes — trust and transparency.** Keep these accurate and maintainable; they are not keyword landing pages.

## 3. Rules for adding content

1. **Start from a real reader question.** Write down the audience, the question, and the useful outcome before choosing a URL or phrase to target.
2. **Check for an existing destination.** Improve or expand the best existing page when intent overlaps. Create a separate page only when it offers a distinct, substantial answer.
3. **Use one primary page purpose.** Titles, introductory copy, headings, links, and structured data should all describe the same subject and intent.
4. **Answer early, then explain.** Put a direct, self-contained answer near the top. Use descriptive H2 sections for the main subquestions and H3s only when a section has meaningful subdivisions.
5. **Show first-hand evidence.** Add a real example, screenshot, implementation detail, limitation, or source link when a claim needs proof. Label old screenshots and version-specific behavior accurately.
6. **Be precise about product claims.** The current repository describes PublishRank as a free, open-source WordPress SEO plugin and identifies Local SEO options across 14 niches. Verify counts, version numbers, compatibility, and feature availability against the current product release before publishing; do not imply that selectable business options are independent businesses or guaranteed rankings.
7. **Link by reader need.** Link from an explanation to the next helpful page, and use descriptive anchor text. Avoid repeating the same exact-match anchor unnaturally.
8. **Do not manufacture scale.** No thin city pages, near-duplicate industry pages, keyword-stuffed FAQs, fake reviews, or unsupported credentials. A new search landing page needs original information and a genuine audience need.
9. **Keep the page maintainable.** Use the shared content and SEO helpers where appropriate; update the page metadata, relevant internal links, and any visible structured-data content together.

## 4. Recommended page outline

Use this as a planning aid, not a rigid template. A short page may need fewer sections; do not add headings merely to satisfy a checklist.

```text
One H1: the page’s specific subject and reader outcome
Intro: direct answer, who the page serves, and relevant context
H2: What it is / who it is for
H2: How it works or what the evidence shows
H2: Important capabilities, limitations, or version context
H2: Where to learn more / next step
Related internal links with descriptive anchor text
Page-specific title, description, canonical, share image, and accurate structured data
```

## 5. Technical publishing checklist

For each new or substantially revised public route:

- Set an explicit `staticData.sitemap` value. Public, canonical content routes normally use `true`; utility routes should not be listed.
- Use `pageHead()` from `src/lib/seo.ts` and the canonical path for the route. Keep title and description specific, accurate, and distinct from other pages.
- Select a relevant 1200×630 image from `public/og/` or deliberately use the shared default. Write image alt text that describes the image rather than repeating keywords.
- Check the rendered document has one meaningful H1, a logical heading outline, crawlable links, descriptive image alternatives, and the actual content in server-rendered HTML.
- Ensure JSON-LD represents content visitors can see on that page. Avoid adding unsupported or irrelevant schema types. FAQ answers in schema must match visible answers.
- Check that the page has useful inbound links and a relevant next step; avoid orphan routes.
- Run `bun run test`, `bun run lint`, `bun run build`, and `node scripts/seo-content-audit.mjs` before shipping.
- After deployment, inspect the canonical URL, response status, robots access, rendered metadata, and sitemap entry. Monitor indexing and crawl reports in Search Console and Bing Webmaster Tools; do not infer ranking outcomes from a successful build.

## 6. Source of truth

- Site name, canonical origin, identity, and external links: `src/lib/site.ts`
- Page metadata and JSON-LD helpers: `src/lib/seo.ts`
- Shared navigation, FAQs, and portfolio content: `src/lib/content.ts`
- Route sitemap inclusion: each route's `staticData.sitemap`
- Sitemap XML: `src/lib/sitemap.ts` and `src/routes/sitemap[.]xml.ts`
- Robots and machine-readable site summary: `public/robots.txt` and `public/llms.txt`
- Page-specific share cards: `public/og/`

Keep this guide aligned with the implementation when these conventions change.
