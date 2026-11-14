import {
  absoluteUrl,
  CONTACT_EMAIL,
  DESCRIPTION,
  DOWNLOAD_URL,
  LEGAL_NAME,
  PUBLISHRANK_REPO,
  PUBLISHRANK_URL,
  PUBLISHRANK_VERSION,
  PUBLISHRANK_WPORG,
  SITE_NAME,
  SITE_URL,
  SOCIALS,
} from "./site";
import { faqs } from "./content";

const DEFAULT_SHARE_IMAGE = "/og/og-default.jpg";

const LABELS: Record<string, string> = {
  about: "About",
  publishrank: "PublishRank",
  work: "Selected work",
  faq: "FAQ",
  contact: "Contact",
  privacy: "Privacy",
  terms: "Terms of use",
  cookies: "Cookie policy",
  disclaimer: "Disclaimer",
  security: "Security policy",
  accessibility: "Accessibility",
};

export const labelForSegment = (segment: string) =>
  LABELS[segment] ??
  segment
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

export function personSchema() {
  return {
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: LEGAL_NAME,
    alternateName: ["UmarJaum", "Umar Jabbar", "Muhammad Umar Jabbar"],
    url: SITE_URL,
    image: absoluteUrl("/og/og-about.jpg"),
    email: `mailto:${CONTACT_EMAIL}`,
    jobTitle: ["Physicist", "Software Developer", "SEO Engineer", "CEO of PublishRank"],
    description:
      "Physicist from Pakistan and the founder, developer and SEO engineer of the PublishRank WordPress SEO plugin.",
    nationality: { "@type": "Country", name: "Pakistan" },
    homeLocation: { "@type": "Country", name: "Pakistan" },
    hasOccupation: [
      { "@type": "Occupation", name: "Physicist" },
      { "@type": "Occupation", name: "Software Developer" },
      { "@type": "Occupation", name: "Search Engine Optimization Specialist" },
    ],
    knowsAbout: [
      "Physics",
      "Search Engine Optimization",
      "Technical SEO",
      "Structured Data",
      "Schema.org",
      "WordPress Plugin Development",
      "News SEO",
      "Publishing Infrastructure",
    ],
    worksFor: { "@id": `${SITE_URL}/#organization` },
    founderOf: { "@id": `${PUBLISHRANK_URL}/#software` },
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
    areaServed: "Worldwide",
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "general inquiries",
        email: CONTACT_EMAIL,
        availableLanguage: ["English", "Urdu"],
      },
    ],
    sameAs: Object.values(SOCIALS),
    logo: { "@type": "ImageObject", url: absoluteUrl("/android-chrome-512x512.png") },
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
    license: "https://www.gnu.org/licenses/gpl-2.0.html",
    description:
      "Free, open-source WordPress SEO for businesses and websites of every kind, including Local SEO for 134 selectable business options across 14 niches, sitewide metadata, schema, sitemaps and specialist editorial tools.",
    downloadUrl: DOWNLOAD_URL,
    installUrl: PUBLISHRANK_WPORG,
    creator: { "@id": `${SITE_URL}/#person`, name: LEGAL_NAME, url: SITE_URL },
    author: { "@id": `${SITE_URL}/#person` },
    publisher: { "@id": `${SITE_URL}/#organization` },
    featureList: [
      "Local SEO for 134 selectable business options across 14 niches",
      "Business profiles with service areas, location settings and type-specific fields",
      "News and XML sitemaps",
      "Connected JSON-LD schema and Schema Aggregator endpoint",
      "SEO metadata and social previews",
      "Mastodon publishing with accessible featured media and content warnings",
      "Optional llms.txt discovery file",
      "Redirects and 404 monitoring",
      "Newsroom editorial workflows",
      "Crawl optimization and robots controls",
    ],
    sameAs: [PUBLISHRANK_URL, PUBLISHRANK_REPO, PUBLISHRANK_WPORG],
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD", url: DOWNLOAD_URL },
    image: absoluteUrl("/og/og-publishrank.jpg"),
  };
}

export function faqSchema(path: string) {
  return {
    "@type": "FAQPage",
    "@id": `${absoluteUrl(path)}#faq`,
    mainEntity: faqs.map(([name, text]) => ({
      "@type": "Question",
      name,
      acceptedAnswer: { "@type": "Answer", text },
    })),
  };
}

function breadcrumbSchema(path: string) {
  const segments = path.split("/").filter(Boolean);
  return {
    "@type": "BreadcrumbList",
    "@id": `${absoluteUrl(path)}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      ...segments.map((segment, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: labelForSegment(segment),
        item: absoluteUrl(`/${segments.slice(0, i + 1).join("/")}`),
      })),
    ],
  };
}

type PageType =
  "WebPage" | "AboutPage" | "ContactPage" | "FAQPage" | "ProfilePage" | "CollectionPage";

interface PageSeo {
  path: string;
  title: string;
  description: string;
  /** Path under /public/og for this page's 1200x630 branded share card (defaults to og-default.jpg). */
  image?: string;
  imageAlt?: string;
  pageType?: PageType;
  extraGraph?: Record<string, unknown>[];
  noindex?: boolean;
}

/** Builds the full head() payload: meta, canonical, and a connected JSON-LD graph. */
export function pageHead({
  path,
  title,
  description,
  image,
  imageAlt,
  pageType = "WebPage",
  extraGraph = [],
  noindex,
}: PageSeo) {
  const url = absoluteUrl(path);
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} — ${SITE_NAME}`;
  const imageUrl = absoluteUrl(image ?? DEFAULT_SHARE_IMAGE);
  const alt = imageAlt ?? `${fullTitle} — share card`;

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      personSchema(),
      organizationSchema(),
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        alternateName: LEGAL_NAME,
        description: DESCRIPTION,
        inLanguage: "en",
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": pageType,
        "@id": `${url}#webpage`,
        url,
        name: fullTitle,
        description,
        inLanguage: "en",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#person` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        ...(pageType === "ProfilePage" ? { mainEntity: { "@id": `${SITE_URL}/#person` } } : {}),
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: imageUrl,
          width: 1200,
          height: 630,
          caption: alt,
        },
      },
      breadcrumbSchema(path),
      ...extraGraph,
    ],
  };

  const meta: Record<string, string>[] = [
    { title: fullTitle },
    { name: "description", content: description },
    {
      name: "robots",
      content: noindex
        ? "noindex, nofollow"
        : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    },
    { property: "og:type", content: pageType === "ProfilePage" ? "profile" : "website" },
    ...(pageType === "ProfilePage"
      ? [
          { property: "profile:first_name", content: "Muhammad Umar" },
          { property: "profile:last_name", content: "Jabbar" },
          { property: "profile:username", content: "umarjaum" },
        ]
      : []),
    { property: "og:title", content: fullTitle },
    { property: "og:description", content: description },
    { property: "og:url", content: url },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: fullTitle },
    { name: "twitter:description", content: description },
  ];
  meta.push(
    { property: "og:image", content: imageUrl },
    { property: "og:image:secure_url", content: imageUrl },
    { property: "og:image:type", content: "image/jpeg" },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:image:alt", content: alt },
    { name: "twitter:image", content: imageUrl },
    { name: "twitter:image:alt", content: alt },
  );

  return {
    meta,
    links: [{ rel: "canonical", href: url }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(graph) }],
  };
}
