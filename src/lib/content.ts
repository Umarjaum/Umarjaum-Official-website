const screen = (filename: string) => `/media/screens/publishrank-2.26.0/${filename}.jpg`;

export const screens = {
  dashboard: screen("publishrank-seo-dashboard"),
  features: screen("publishrank-modules"),
  sitemapHub: screen("publishrank-sitemap-health"),
  schema: screen("publishrank-schema-studio"),
  searchConsole: screen("publishrank-search-console"),
  llms: screen("publishrank-llms-txt"),
  author: screen("publishrank-author-expertise"),
  links: screen("publishrank-seo-internal-links"),
  seoScore: screen("publishrank-seo-score"),
  analytics: screen("publishrank-analytics"),
  newsroom: screen("uj-newsroom"),
  calendar: screen("uj-newsroom-calendar"),
};

export const nav = [
  { to: "/about", label: "About" },
  { to: "/publishrank", label: "PublishRank" },
  { to: "/work", label: "Work" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export const principles = [
  {
    number: "01",
    title: "Make the invisible visible",
    text: "Publishing systems should show their decisions: ownership, metadata, schema, sitemap coverage and what happens when something conflicts.",
  },
  {
    number: "02",
    title: "Build for the desk, not the demo",
    text: "Tools are shaped around the real rhythm of editors, developers and publishers who need to ship without guessing.",
  },
  {
    number: "03",
    title: "Leave a trail of evidence",
    text: "Documentation, diagnostics and source-level clarity are features. The system should be explainable after the launch day.",
  },
];

export const capabilities = [
  [
    "SEO for every WordPress site",
    "Sitewide tools for business pages, products, services, articles and other WordPress content.",
  ],
  [
    "Local SEO for 134 business types",
    "Selectable business profiles across 14 niches, with service areas, location details and type-specific fields.",
  ],
  [
    "Structured data",
    "Connected schema, diagnostics and a machine-readable Schema Aggregator endpoint.",
  ],
  [
    "Discovery systems",
    "XML and News Sitemaps, IndexNow, robots controls and optional llms.txt discovery.",
  ],
  [
    "Social publishing",
    "Mastodon publishing with featured-image accessibility text and per-post content warnings.",
  ],
  [
    "Physics-minded engineering",
    "Model the system, measure the signal, and trust evidence over assumptions.",
  ],
  [
    "Founder-led execution",
    "Product direction, architecture, release discipline and the details between them.",
  ],
] as const;

export const workflow = [
  {
    number: "01",
    title: "Frame the problem",
    text: "Start with the business or publishing goal, the audience and the constraints already shaping the system.",
  },
  {
    number: "02",
    title: "Inspect the signal",
    text: "Trace the path from site-owner intent to rendered output, search discovery and measurable evidence.",
  },
  {
    number: "03",
    title: "Build the useful layer",
    text: "Turn findings into focused product decisions, clearer interfaces and tools real WordPress teams can use.",
  },
  {
    number: "04",
    title: "Explain and ship",
    text: "Document the decision, test the result and leave the next person with a system they can trust.",
  },
];

export const stats: { value?: number; display?: string; suffix?: string; label: string }[] = [
  { value: 41, suffix: "+", label: "Built-in SEO tools" },
  { value: 100, suffix: "%", label: "Free & open source" },
  { display: "v2.26.1", label: "Latest release" },
  { value: 0, label: "Ads or trackers on this site" },
];

export const faqs = [
  [
    "Who is UmarJaum?",
    "UmarJaum is the public identity of Muhammad Umar Jabbar, a physicist from Pakistan, developer and SEO engineer. He is the founder, CEO and developer of the PublishRank WordPress SEO Plugin.",
  ],
  [
    "What is PublishRank?",
    "PublishRank is a free, open-source WordPress SEO plugin for businesses and websites of every kind, including publishers and newsrooms. It combines sitewide metadata, schema, sitemaps, redirects, diagnostics, Local SEO for 134 selectable business options across 14 niches, and specialist editorial tools.",
  ],
  [
    "Is PublishRank on WordPress.org?",
    "PublishRank has a WordPress.org listing and its current downloadable release is 2.26.1. The 2.26.1 release report records tests on WordPress 7.1.5, PHP 8.3 and SQLite on a sandbox site, not a production host. It distinguishes verified workflows from partial, blocked and untested areas; compatibility beyond those stated tests is not claimed.",
  ],
  [
    "How does a background in physics shape the work?",
    "Physics trains you to model a system, measure it and trust evidence over assumptions. That same discipline drives how PublishRank exposes SEO decisions: inspectable, testable and explainable.",
  ],
  [
    "Where can I find the PublishRank website?",
    "PublishRank has its own official website, linked from the PublishRank page, the top bar and the footer of this site, along with its source code and releases.",
  ],
  [
    "Can I collaborate or ask about a project?",
    "Yes. Use the contact page or reach out through the listed social profiles. Include the context, the outcome you want and the best way to continue the conversation.",
  ],
] as const;

export const work = [
  {
    id: "publishrank",
    title: "PublishRank",
    type: "Flagship product",
    to: "/publishrank",
    image: screens.dashboard,
    text: "A cross-industry WordPress SEO system with Local SEO for 134 business options, plus editorial and technical controls.",
  },
  {
    id: "observability",
    title: "SEO observability",
    type: "Product direction",
    to: "/publishrank",
    hash: "observability",
    image: screens.schema,
    text: "Connected JSON-LD, schema diagnostics and a clearer path from settings to rendered output.",
  },
  {
    id: "newsroom",
    title: "The newsroom layer",
    type: "Workflow design",
    to: "/publishrank",
    hash: "newsroom",
    image: screens.newsroom,
    text: "Editorial roles, planning, activity and release discipline inside WordPress.",
  },
] as const;

export const featureGallery = [
  { title: "Sitemap hub", tag: "Discovery", image: screens.sitemapHub },
  { title: "Search Console", tag: "Insights", image: screens.searchConsole },
  { title: "llms.txt", tag: "AI discovery", image: screens.llms },
  { title: "Author expertise", tag: "E-E-A-T", image: screens.author },
  { title: "Link intelligence", tag: "Internal links", image: screens.links },
  { title: "Analytics", tag: "Measurement", image: screens.analytics },
  { title: "Editorial calendar", tag: "Newsroom", image: screens.calendar },
  { title: "Feature control", tag: "Modules", image: screens.features },
];
