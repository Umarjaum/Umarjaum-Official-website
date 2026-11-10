# UmarJaum Official Website

A founder-led website for Muhammad Umar Jabbar, known publicly as UmarJaum, CEO and developer of the PublishRank WordPress SEO Plugin.

The site is built with Next.js App Router and preserves the real PublishRank interface captures from the official PublishRank website. It includes a large homepage plus About, PublishRank, Work, FAQ, Contact and Privacy pages.

## Dynamic SEO origin

Set `NEXT_PUBLIC_SITE_URL` to the actual deployed domain. The current canonical origin is `https://umarjaum.vercel.app`. The shared site configuration uses it for canonical links, Open Graph URLs, JSON-LD entity IDs, sitemap, robots and page metadata. There is no need to edit URLs across individual pages.

## Run locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Build

```bash
npm run build
npm start
```

The site also serves `/manus-routes.json`, `/llms.txt`, `/sitemap.xml`, `/robots.txt` and `/manifest.webmanifest`. Discovery endpoints remain available to crawlers and direct requests but are intentionally not visible in the site navigation. Legal pages include Privacy, Terms, Cookies, Disclaimer, Security and Accessibility. The site currently has no Google AdSense or other advertising network; do not add `ads.txt` until a real publisher ID is available, and update consent disclosures before enabling personalized advertising.
