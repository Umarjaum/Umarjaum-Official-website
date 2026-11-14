import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Building2,
  Download,
  Github,
  Newspaper,
  Share2,
  Sparkles,
  Workflow,
} from "lucide-react";
import { useRef } from "react";
import { ctaVariants } from "@/components/site/cta";
import { Evidence } from "@/components/site/Evidence";
import { Magnetic } from "@/components/site/Magnetic";
import { usePageMotion } from "@/components/site/motion";
import { PageHero } from "@/components/site/PageHero";
import { SectionHead } from "@/components/site/SectionHead";
import { Spotlight } from "@/components/site/Spotlight";
import { featureGallery, screens } from "@/lib/content";
import { pageHead, softwareSchema } from "@/lib/seo";
import {
  DOWNLOAD_URL,
  PUBLISHRANK_REPO,
  PUBLISHRANK_URL,
  PUBLISHRANK_VERSION,
  PUBLISHRANK_WPORG,
} from "@/lib/site";

export const Route = createFileRoute("/publishrank")({
  staticData: { sitemap: true },
  head: () =>
    pageHead({
      path: "/publishrank",
      title: "PublishRank — WordPress SEO for Businesses and Every Website by UmarJaum",
      description:
        "PublishRank is free, open-source WordPress SEO for businesses and every website, including Local SEO for 134 selectable business options across 14 niches, plus specialist publisher tools.",
      image: "/og/og-publishrank.jpg",
      imageAlt:
        "PublishRank — free WordPress SEO plugin for businesses, publishers and websites of every kind",
      extraGraph: [softwareSchema()],
    }),
  component: PublishRank,
});

const tools = [
  {
    id: "local-seo",
    Icon: Building2,
    title: "Local SEO for 134 business types",
    text: "Create business profiles across 14 niches, with service areas, hidden-address settings, hours and industry-specific LocalBusiness fields. The selectable profiles are not 134 independent schema classes.",
  },
  {
    id: "sitewide-seo",
    Icon: Sparkles,
    title: "Sitewide SEO and structured data",
    text: "Manage metadata, canonical URLs, social previews, connected schema and diagnostics across business pages, products, services and articles.",
  },
  {
    id: "discovery",
    Icon: Newspaper,
    title: "Search discovery and technical controls",
    text: "Use XML and News Sitemaps, IndexNow, redirects, crawl controls and optional llms.txt to support discovery across WordPress sites.",
  },
  {
    id: "publishing-workflows",
    Icon: Share2,
    title: "Publisher tools when you need them",
    text: "Mastodon publishing, newsroom workflows, article review and editorial diagnostics support publishers without limiting the plugin to publishing sites.",
  },
  {
    id: "newsroom",
    Icon: Workflow,
    title: "Editorial operations",
    text: "Connect story review, newsroom assignments, redirects and technical diagnostics for content teams.",
  },
];

function PublishRank() {
  const ref = useRef<HTMLDivElement>(null);
  usePageMotion(ref);

  return (
    <div ref={ref}>
      <PageHero
        eyebrow="02 / Flagship product"
        title={
          <>
            PublishRank is SEO{" "}
            <span className="serif-accent text-signal-gradient">
              for businesses and every WordPress site.
            </span>
          </>
        }
        intro="A free, open-source WordPress plugin for businesses and website owners: sitewide SEO plus Local SEO for 134 selectable business options across 14 niches, with newsroom and editorial tools for publishers too."
      >
        <div className="flex flex-wrap gap-3">
          <Magnetic>
            <a
              href={PUBLISHRANK_WPORG}
              target="_blank"
              rel="noopener noreferrer"
              className={ctaVariants({ variant: "signal", size: "lg" })}
            >
              Get it on WordPress.org <ArrowUpRight className="size-4" />
            </a>
          </Magnetic>
          <a href={DOWNLOAD_URL} className={ctaVariants({ variant: "glass", size: "lg" })}>
            <Download className="size-4" /> Download v{PUBLISHRANK_VERSION}
          </a>
          <a
            href={PUBLISHRANK_REPO}
            target="_blank"
            rel="noopener noreferrer"
            className={ctaVariants({ variant: "glass", size: "lg" })}
          >
            <Github className="size-4" /> View source
          </a>
        </div>
      </PageHero>

      <section className="wrap pb-20">
        <div data-scale-in>
          <Evidence
            src={screens.dashboard}
            alt="PublishRank dashboard in the WordPress admin"
            label="PublishRank / Dashboard"
            caption={`Interface capture from v2.12.1; the current release is v${PUBLISHRANK_VERSION}, so some screens may differ.`}
          />
        </div>
      </section>

      <section className="wrap py-16 md:py-24">
        <SectionHead
          eyebrow="Beyond metadata"
          title="SEO for businesses, sites and publishers."
          intro="PublishRank supports businesses and WordPress websites of every kind with sitewide SEO and Local SEO. Publisher and newsroom workflows are included as specialist tools, not a requirement to use the plugin. No SEO tool guarantees rankings or rich results."
        />
        <div className="grid gap-4 md:grid-cols-2" data-stagger>
          {tools.map(({ id, Icon, title, text }) => (
            <Spotlight key={id} id={id} tilt className="group scroll-mt-28 p-8">
              <span className="grid size-12 place-items-center rounded-2xl bg-primary/10 text-primary transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                <Icon className="size-5" />
              </span>
              <h3 className="mt-8 text-2xl font-semibold tracking-tight">{title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{text}</p>
            </Spotlight>
          ))}
        </div>
      </section>

      <section className="wrap py-16 md:py-24">
        <SectionHead
          eyebrow="Interface evidence"
          title="Real screens, not mockups."
          intro="Captures from the WordPress admin of PublishRank 2.12.1."
        />
        <div className="grid gap-5 md:grid-cols-3" data-stagger>
          <Evidence
            src={screens.schema}
            alt="PublishRank schema markup settings"
            label="Schema / Connected graph"
            caption="Connected JSON-LD with diagnostics."
          />
          <Evidence
            src={screens.seoScore}
            alt="PublishRank article SEO review"
            label="SEO / Article review"
            caption="A checklist for the editor, not a promise of rankings."
          />
          <Evidence
            src={screens.newsroom}
            alt="PublishRank newsroom workflow"
            label="Newsroom / Workflow"
            caption="Editorial planning and technical ownership together."
          />
        </div>

        <div className="mt-5 grid grid-cols-2 gap-4 md:grid-cols-4" data-stagger>
          {featureGallery.map((f) => (
            <figure key={f.title} className="group glass overflow-hidden rounded-2xl">
              <div className="overflow-hidden">
                <img
                  src={f.image}
                  alt={`PublishRank ${f.title} screen`}
                  width={1440}
                  height={1000}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <figcaption className="flex items-center justify-between gap-2 p-4">
                <span className="text-sm font-medium">{f.title}</span>
                <span className="font-mono text-[0.6rem] uppercase tracking-wider text-primary">
                  {f.tag}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="wrap py-12">
        <div
          data-reveal
          className="glass-strong spotlight flex flex-col gap-8 rounded-[2rem] p-10 md:flex-row md:items-center md:justify-between md:p-14"
        >
          <div>
            <p className="eyebrow">Official website</p>
            <h2 className="display mt-3 text-[clamp(1.8rem,4vw,3rem)]">
              Docs, changelog and launch notes.
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={`${PUBLISHRANK_URL}/features#all-features`}
              target="_blank"
              rel="noopener noreferrer"
              className={ctaVariants({ variant: "signal", size: "lg" })}
            >
              Browse the complete feature directory <ArrowUpRight className="size-4" />
            </a>
            <a
              href={PUBLISHRANK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={ctaVariants({ variant: "glass", size: "lg" })}
            >
              Visit the official website <ArrowUpRight className="size-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
