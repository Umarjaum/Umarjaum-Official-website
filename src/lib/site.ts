import type { Metadata } from "next";

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://umarjaum.vercel.app")
  .replace(/\/$/, "")
  .toLowerCase();
export const SITE_NAME = "UmarJaum";
export const LEGAL_NAME = "Muhammad Umar Jabbar";
export const CONTACT_EMAIL = "UmarJaum@gmail.com";
export const TAGLINE = "Engineering the systems behind better publishing.";
export const DESCRIPTION =
  "UmarJaum is the founder, CEO and developer of PublishRank, building practical WordPress SEO and publishing infrastructure for modern editorial teams.";
export const PUBLISHRANK_URL = "https://publishrankseo.vercel.app";
export const PUBLISHRANK_REPO = "https://github.com/Umarjaum/PublishRank";
export const PUBLISHRANK_VERSION = "2.19.2";
export const DOWNLOAD_URL = "https://github.com/Umarjaum/PublishRank/releases/latest/download/PublishRank.zip";
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
export const ogImage = () => absoluteUrl("/brand/publishrank-og-share-card.jpg");

export function pageMetadata(path: string, title: string, description: string): Metadata {
  const url = absoluteUrl(path);
  const socialTitle = title.includes(SITE_NAME) ? title : `${title} — ${SITE_NAME}`;
  const image = ogImage();

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      title: socialTitle,
      description,
      url,
      images: [
        {
          url: image,
          width: 1200,
          height: 640,
          alt: "UmarJaum — engineering systems for publishing.",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [image],
    },
  };
}

export function personSchema() {
  return {
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: LEGAL_NAME,
    alternateName: ["UmarJaum", "Muhammad Umar Jabbar"],
    url: SITE_URL,
    jobTitle: "CEO and Developer of PublishRank",
    worksFor: { "@id": `${SITE_URL}/#organization` },
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
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "general inquiries",
        email: CONTACT_EMAIL,
        availableLanguage: ["English"],
      },
    ],
    sameAs: Object.values(SOCIALS),
    logo: { "@type": "ImageObject", url: ogImage() },
  };
}

export function softwareSchema() {
  return {
    "@type": "SoftwareApplication",
    "@id": `${PUBLISHRANK_URL}/#software`,
    name: "PublishRank",
    url: PUBLISHRANK_URL,
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "WordPress SEO plugin",
    operatingSystem: "WordPress",
    softwareVersion: PUBLISHRANK_VERSION,
    isAccessibleForFree: true,
    description:
      "Free, open-source WordPress SEO plugin for publishers and newsrooms, with metadata, connected schema, sitemaps, redirects and editorial workflow tools.",
    downloadUrl: DOWNLOAD_URL,
    creator: { "@id": `${SITE_URL}/#person`, name: LEGAL_NAME, url: SITE_URL },
    publisher: { "@id": `${PUBLISHRANK_URL}/#organization`, name: "PublishRank", url: PUBLISHRANK_URL },
    featureList: [
      "News and XML sitemaps",
      "Connected JSON-LD schema and Schema Aggregator endpoint",
      "SEO metadata and social previews",
      "Mastodon publishing with accessible featured media and content warnings",
      "Optional llms.txt discovery file",
      "Redirects and 404 monitoring",
      "Newsroom editorial workflows",
      "Crawl optimization and robots controls",
    ],
    sameAs: [PUBLISHRANK_URL, PUBLISHRANK_REPO, SITE_URL],
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD", url: DOWNLOAD_URL },
    image: `${PUBLISHRANK_URL}/brand/publishrank-og-share-card.jpg`,
  };
}

export function baseGraph(path = "/") {
  const url = absoluteUrl(path);
  const segments = path.split("/").filter(Boolean);
  const labels: Record<string, string> = {
    about: "About",
    publishrank: "PublishRank",
    work: "Work",
    faq: "FAQ",
    contact: "Contact",
    privacy: "Privacy",
    terms: "Terms",
    cookies: "Cookies",
    disclaimer: "Disclaimer",
    security: "Security",
    accessibility: "Accessibility",
  };
  const breadcrumbItems = [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    ...segments.map((segment, index) => ({
      "@type": "ListItem",
      position: index + 2,
      name: labels[segment] ?? segment,
      item: absoluteUrl(`/${segments.slice(0, index + 1).join("/")}`),
    })),
  ];

  return {
    "@context": "https://schema.org",
    "@graph": [
      personSchema(),
      organizationSchema(),
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        description: DESCRIPTION,
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": "WebPage",
        "@id": `${url}/#webpage`,
        url,
        name: SITE_NAME,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#person` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}/#breadcrumb`,
        itemListElement: breadcrumbItems,
      },
    ],
  };
}
