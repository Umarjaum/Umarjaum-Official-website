# Old address → new address (umarjaum.netlify.app → umarjaum.vercel.app)

This folder is a tiny standalone site. Deploy it to the **old Netlify site** so every old link
sends visitors and search engines to the new address with a permanent (301) redirect.
It is not part of the main website build.

## 1. Put the redirect live on Netlify

1. Sign in to Netlify and open the site that serves `umarjaum.netlify.app`.
2. Go to **Deploys** and drag this whole folder onto the deploy drop area.
3. Open `https://umarjaum.netlify.app/about` — it should land on `https://umarjaum.vercel.app/about`.

## 2. Tell Google (Search Console)

1. Make sure both addresses are verified properties:
   `https://umarjaum.netlify.app/` (old) and `https://umarjaum.vercel.app/` (new).
   The verification file `google43151c60aabe3623.html` stays reachable on the old site for this.
2. Open the **old** property → **Settings → Change of address** → choose the new property → **Validate & update**.
3. In the **new** property, submit `https://umarjaum.vercel.app/sitemap.xml` under **Sitemaps**.

## 3. Tell Bing (Bing Webmaster Tools)

Add and verify both sites, then use **Configuration → Site Move** from the old site to the new one,
and submit the new sitemap.

## 4. Keep it running

- Leave this redirect in place for at least 12 months (ideally permanently).
- Update links you control to the new address: X, Facebook, Mastodon and GitHub profiles,
  the PublishRank website footer, and any email signatures.
