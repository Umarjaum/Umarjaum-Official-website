// Single source of truth for identity, links and the public origin.
export const SITE_URL = (
  (import.meta.env["VITE_SITE_URL"] as string | undefined) || "https://umarjaum.vercel.app"
)
  .replace(/\/$/, "")
  .toLowerCase();

export const SITE_NAME = "UmarJaum";
export const LEGAL_NAME = "Muhammad Umar Jabbar";
export const CONTACT_EMAIL = "UmarJaum@gmail.com";
export const TAGLINE = "Physicist, developer & SEO engineer behind PublishRank SEO for WordPress";
export const DESCRIPTION =
  "UmarJaum (Muhammad Umar Jabbar) is a physicist from Pakistan and the developer of PublishRank SEO for WordPress, a production-ready, free and open-source plugin for businesses and websites of every kind. Version 2.25.1 adds Traffic Guard, FAQ collections, SEO Inspector, Source Directory and sign-in tools. All features have been tested on real websites by the PublishRank Community, with no errors reported; the delivery report separately records its 409-check test run.";

export const PUBLISHRANK_URL = "https://publishrankseo.vercel.app";
export const PUBLISHRANK_REPO = "https://github.com/Umarjaum/PublishRank";
export const PUBLISHRANK_RELEASES = "https://github.com/Umarjaum/PublishRank/releases";
export const PUBLISHRANK_WPORG = "https://wordpress.org/plugins/publishrank/";
export const PUBLISHRANK_VERSION = "2.25.1";
export const DOWNLOAD_URL = "https://publishrankseo.vercel.app/downloads/PublishRank-2.25.1.zip";
export const GITHUB_URL = "https://github.com/Umarjaum";

export const SOCIALS = {
  x: "https://x.com/UmarJaum",
  facebook: "https://www.facebook.com/umarjaumofficial",
  mastodon: "https://mastodon.social/@UmarJaum",
  github: GITHUB_URL,
  publishrank: PUBLISHRANK_URL,
};

export const absoluteUrl = (path = "/") =>
  `${SITE_URL}${path === "/" ? "" : path.startsWith("/") ? path : `/${path}`}`;
