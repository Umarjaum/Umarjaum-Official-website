export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://umarjaum.vercel.app").replace(/\/$/, "").toLowerCase();
export const SITE_NAME = "UmarJaum";
export const LEGAL_NAME = "Muhammad Umar Jabbar";
export const FATHER_NAME = "Abdul Jabbar";
export const CONTACT_EMAIL = "UmarJaum@gmail.com";
export const TAGLINE = "Engineering the systems behind better publishing.";
export const DESCRIPTION =
  "UmarJaum is the founder, CEO and developer of PublishRank, building practical WordPress SEO and publishing infrastructure for modern editorial teams.";
export const PUBLISHRANK_URL = "https://publishrankseo.vercel.app";
export const PUBLISHRANK_REPO = "https://github.com/Umarjaum/PublishRank";
export const DOWNLOAD_URL = "https://github.com/Umarjaum/PublishRank/releases/latest/download/PublishRank.zip";
export const GITHUB_URL = "https://github.com/Umarjaum";
export const SOCIALS = {
  x: "https://x.com/UmarJaum",
  facebook: "https://www.facebook.com/umarjaumofficial",
  mastodon: "https://mastodon.social/@UmarJaum",
  github: GITHUB_URL,
  publishrank: PUBLISHRANK_URL,
};
export const absoluteUrl = (path = "/") => `${SITE_URL}${path === "/" ? "" : path.startsWith("/") ? path : `/${path}`}`;
export const ogImage = () => absoluteUrl("/brand/publishrank-og-share-card.jpg");

export function personSchema() {
  return {
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: LEGAL_NAME,
    alternateName: ["UmarJaum", "Muhammad Umar Jabbar"],
    url: SITE_URL,
    jobTitle: "CEO and Developer of PublishRank",
    worksFor: { "@id": `${SITE_URL}/#organization` },
    parent: { "@type": "Person", name: FATHER_NAME },
    sameAs: Object.values(SOCIALS),
  };
}

export function organizationSchema() {
  return {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    legalName: LEGAL_NAME,
    url: SITE_URL,
    founder: { "@id": `${SITE_URL}/#person` },
    email: CONTACT_EMAIL,
    description: DESCRIPTION,
    contactPoint: [{ "@type": "ContactPoint", contactType: "general inquiries", email: CONTACT_EMAIL, availableLanguage: ["English"] }],
    sameAs: Object.values(SOCIALS),
    logo: { "@type": "ImageObject", url: ogImage() },
  };
}

export function baseGraph(path = "/") {
  const url = absoluteUrl(path);
  return {
    "@context": "https://schema.org",
    "@graph": [
      personSchema(),
      organizationSchema(),
      { "@type": "WebSite", "@id": `${SITE_URL}/#website`, url: SITE_URL, name: SITE_NAME, description: DESCRIPTION, publisher: { "@id": `${SITE_URL}/#organization` } },
      { "@type": "WebPage", "@id": `${url}/#webpage`, url, name: SITE_NAME, isPartOf: { "@id": `${SITE_URL}/#website` }, about: { "@id": `${SITE_URL}/#person` } },
    ],
  };
}
