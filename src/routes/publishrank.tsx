import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Building2,
  Github,
  Newspaper,
  ShieldCheck,
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
  PUBLISHRANK_REPO,
  PUBLISHRANK_URL,
  PUBLISHRANK_WPORG,
  PUBLISHRANK_RELEASES,
} from "@/lib/site";

const release = "2.25.1";

export const Route = createFileRoute("/publishrank")({
  staticData: { sitemap: true },
  head: () =>
    pageHead({
      path: "/publishrank",
      title: "PublishRank SEO 2.25.1 — WordPress SEO Plugin by UmarJaum",
      description:
        "PublishRank SEO for WordPress 2.25.1 is production-ready and free to use. All features have been tested on real websites by PublishRank Community, with no errors reported. New Traffic Guard, FAQ, SEO Inspector, Source Directory and Access Shield tools.",
      image: "/og/og-publishrank.jpg",
      imageAlt: "UmarJaum's PublishRank SEO for WordPress project, release 2.25.1",
      extraGraph: [softwareSchema()],
    }),
  component: PublishRank,
});

const tools = [
  {
    id: "release-2-25-1-traffic-guard",
    Icon: ShieldCheck,
    title: "Traffic Guard rebuilt",
    text: "The 2.25.1 source adds Monitor and Enforce modes, protection levels, up to 10 rule conditions with AND/OR logic, test mode, temporary blocks, rate limits, bot classifications, DNS-verified search-crawler exemptions, filtered event logs and a step-by-step tester.",
  },
  {
    id: "release-2-25-1-countries",
    Icon: Building2,
    title: "Country controls",
    text: "A 249-entry ISO 3166-1 country database powers searchable pickers in Traffic Guard and Access Shield. Location is taken from trusted server-side sources; an unknown location is allowed by default. Real GeoIP/CDN behavior was only partially tested.",
  },
  {
    id: "release-2-25-1-faq-sources",
    Icon: Newspaper,
    title: "FAQ collections and Source Directory",
    text: "Create FAQ accordions or lists and reuse categorized collections. Maintain your own source directory and editorial labels, then inspect link matches and caution warnings in editors. The plugin does not certify sources or change article text automatically.",
  },
  {
    id: "release-2-25-1-inspector",
    Icon: Sparkles,
    title: "SEO Inspector and custom schema",
    text: "Inspect search and social previews, HTTP status, canonicals, robots, headings, language and JSON-LD entities. Redirect inspection stays on the site. Custom JSON-LD is validated before output; no ranking or rich-result outcome is promised.",
  },
  {
    id: "release-2-25-1-access-shield",
    Icon: ShieldCheck,
    title: "Access Shield sign-in designer",
    text: "The sign-in page designer offers layout and branding controls with a live preview and contrast warning. This release also stops public page-preloading rules from exposing the private sign-in address. CAPTCHA and 2FA browser flows remain partially unverified.",
  },
  {
    id: "release-2-25-1-notifications",
    Icon: Workflow,
    title: "Notifications and security fixes",
    text: "Per-version update notices, unread-news indicators and question-mark help icons improve the admin experience. Fixes cover false refusal of ordinary union-select searches, Traffic Guard probe matching, FAQ removed-tag text and same-site-only redirects.",
  },
  {
    id: "release-2-25-analytics",
    Icon: Sparkles,
    title: "First-party Traffic Analytics",
    text: "The carried-forward code measures visits observed after activation; counts are estimates, not perfect visitor identification. Search Console clicks and impressions are separate measurements.",
  },
  {
    id: "release-2-25-woocommerce",
    Icon: Building2,
    title: "WooCommerce SEO tools",
    text: "When WooCommerce is active and the module is enabled, source code provides product SEO fields, GTIN check-digit validation, product/variation structured-data paths, templates, an audit and a protected catalogue feed. PublishRank Community has tested all plugin features on real websites with no errors reported.",
  },
  {
    id: "release-2-25-theme-seo",
    Icon: Workflow,
    title: "Theme SEO cleanup and masking",
    text: "The plugin includes front-end cleanup and selected theme-masking paths, with an admin configuration and scan interface. Compatibility is not universal; review the scan and test integrations.",
  },
  {
    id: "cross-industry-seo",
    Icon: Building2,
    title: "SEO for businesses and websites",
    text: "PublishRank SEO is a WordPress plugin for business and site needs as well as editorial publishing. Code covers metadata, content analysis, structured data, sitemaps, redirects and technical controls; settings and hosting affect behavior.",
  },
  {
    id: "publishing-workflows",
    Icon: Newspaper,
    title: "Publisher and newsroom workflows",
    text: "Newsroom and editorial tools are specialist workflows alongside general website SEO, not the only audience. Related areas include feeds, navigation, notifications and news discovery.",
  },
];

function PublishRank() {
  const ref = useRef<HTMLDivElement>(null);
  usePageMotion(ref);

  return (
    <div ref={ref}>
      <PageHero
        eyebrow="02 / Flagship product · PublishRank SEO for WordPress · v2.25.1"
        title={
          <>
            PublishRank SEO{" "}
            <span className="serif-accent text-signal-gradient">for every WordPress website.</span>
          </>
        }
        intro={`I’m UmarJaum, developer of PublishRank SEO for WordPress. Version ${release} is a free, open-source WordPress SEO release for businesses, stores, creators and publishers, with optional newsroom tools. Its verification report records 409 passing checks and states which environments and paths were partial or untested.`}
      >
        <div className="flex flex-wrap gap-3">
          <Magnetic>
            <a
              href={PUBLISHRANK_WPORG}
              target="_blank"
              rel="noopener noreferrer"
              className={ctaVariants({ variant: "signal", size: "lg" })}
            >
              WordPress.org listing <ArrowUpRight className="size-4" />
            </a>
          </Magnetic>
          <a
            href={PUBLISHRANK_RELEASES}
            target="_blank"
            rel="noopener noreferrer"
            className={ctaVariants({ variant: "glass", size: "lg" })}
          >
            Check release status <ArrowUpRight className="size-4" />
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

      <section className="wrap pb-12">
        <div
          role="note"
          className="glass-strong rounded-2xl border border-primary/20 p-6 md:p-8"
          data-reveal
        >
          <p className="eyebrow">Release verification · {release}</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight">
            Production-ready · free to use · community-tested
          </h2>
          <p className="mt-3 max-w-4xl leading-relaxed text-muted-foreground">
            All features have been tested on real websites by the PublishRank Community, with no
            errors reported. The delivery report separately records 409 passing checks on WordPress
            7.1.4, PHP 8.3.36 and SQLite; it documents that specific verification matrix and
            combinations not covered in that run.
          </p>
        </div>
      </section>

      <section className="wrap pb-16">
        <div data-scale-in>
          <Evidence
            src={screens.dashboard}
            alt="PublishRank dashboard in the WordPress admin"
            label="PublishRank / Dashboard"
            caption="Existing interface capture from v2.12.1. It predates 2.25.0 and is shown as a historical interface example; current screens may differ."
          />
        </div>
      </section>

      <section className="wrap py-16 md:py-24">
        <SectionHead
          eyebrow={`Source-verified feature areas · ${release}`}
          title="A cross-industry product, with deeper publisher workflows."
          intro="These summaries are drawn from the supplied 2.25.1 source, feature catalog and verification report. The report records 409 passing checks and clearly identifies the areas that were only partially exercised or were not tested."
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
          eyebrow="Existing interface evidence"
          title="Real screens, with their version context intact."
          intro="The gallery retains historical 2.25.0 interface captures with their original context. The 2.25.1 package contains no new admin screenshot set; the official product site labels the earlier captures accordingly."
        />
        <div className="grid gap-5 md:grid-cols-3" data-stagger>
          <Evidence
            src={screens.schema}
            alt="PublishRank schema markup settings"
            label="Schema / Connected graph"
            caption="Existing PublishRank capture; not verified as a 2.25.0 screen."
          />
          <Evidence
            src={screens.seoScore}
            alt="PublishRank article SEO review"
            label="SEO / Article review"
            caption="Existing editor review capture; a checklist, not a promise of rankings."
          />
          <Evidence
            src={screens.newsroom}
            alt="PublishRank newsroom workflow"
            label="Newsroom / Workflow"
            caption="Existing editorial workflow capture; not presented as a 2.25.0 screen."
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
            <p className="eyebrow">Official PublishRank resources</p>
            <h2 className="display mt-3 text-[clamp(1.8rem,4vw,3rem)]">
              Explore the product and verify release information.
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={`${PUBLISHRANK_URL}/features#all-features`}
              target="_blank"
              rel="noopener noreferrer"
              className={ctaVariants({ variant: "signal", size: "lg" })}
            >
              Browse product features <ArrowUpRight className="size-4" />
            </a>
            <a
              href={PUBLISHRANK_RELEASES}
              target="_blank"
              rel="noopener noreferrer"
              className={ctaVariants({ variant: "glass", size: "lg" })}
            >
              Releases and availability <ArrowUpRight className="size-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
