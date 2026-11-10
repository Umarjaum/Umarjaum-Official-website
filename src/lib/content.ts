export const nav = [
  { href: "/about", label: "About" },
  { href: "/publishrank", label: "PublishRank" },
  { href: "/work", label: "Work" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

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
    "Publishing infrastructure",
    "WordPress tools that connect editorial workflows with technical SEO.",
  ],
  [
    "Structured data",
    "Connected schema, diagnostics and a machine-readable Schema Aggregator endpoint.",
  ],
  [
    "Discovery systems",
    "News and XML sitemaps, IndexNow, robots controls and optional llms.txt discovery.",
  ],
  [
    "Social publishing",
    "Mastodon publishing with featured-image accessibility text and per-post content warnings.",
  ],
  [
    "Founder-led execution",
    "Product direction, architecture, release discipline and the details between them.",
  ],
];

export const faqs = [
  [
    "Who is UmarJaum?",
    "UmarJaum is the public identity of Muhammad Umar Jabbar, a developer and entrepreneur focused on practical publishing technology. He is the CEO and developer of the PublishRank WordPress SEO Plugin.",
  ],
  [
    "What is PublishRank?",
    "PublishRank is a free, open-source WordPress SEO plugin for publishers, newsrooms, magazines, bloggers and content-heavy sites. It combines metadata, schema, sitemaps, redirects, diagnostics, Mastodon publishing and editorial tooling.",
  ],
  [
    "Where can I find the PublishRank website?",
    "The official PublishRank website is available at publishrankseo.vercel.app. Its source and releases are linked from the PublishRank page on this site.",
  ],
  [
    "Can I collaborate or ask about a project?",
    "Yes. Use the contact page or reach out through the listed social profiles. Include the context, the outcome you want and the best way to continue the conversation.",
  ],
];

export const work = [
  {
    id: "publishrank",
    title: "PublishRank",
    type: "Flagship product",
    href: "/publishrank",
    image: "/media/screens/publishrank-2.12.1/desktop-1440/01-publishrank-dashboard.png",
    text: "A publisher-first WordPress SEO system with real editorial and technical controls.",
  },
  {
    id: "observability",
    title: "SEO observability",
    type: "Product direction",
    href: "/publishrank#observability",
    image: "/media/screens/publishrank-2.12.1/desktop-1440/08-publishrank-schema-markup.png",
    text: "Connected JSON-LD, schema diagnostics and a clearer path from settings to rendered output.",
  },
  {
    id: "newsroom",
    title: "The newsroom layer",
    type: "Workflow design",
    href: "/publishrank#newsroom",
    image: "/media/screens/publishrank-2.12.1/desktop-1440/34-publishrank-newsroom.png",
    text: "Editorial roles, planning, activity and release discipline inside WordPress.",
  },
];
