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
  DOWNLOAD_URL,
  PUBLISHRANK_RELEASE_REPORT,
  PUBLISHRANK_REPO,
  PUBLISHRANK_URL,
  PUBLISHRANK_VIDEO,
  PUBLISHRANK_WPORG,
  PUBLISHRANK_RELEASES,
  PUBLISHRANK_VERSION,
} from "@/lib/site";

const release = PUBLISHRANK_VERSION;

export const Route = createFileRoute("/publishrank")({
  staticData: { sitemap: true },
  head: () =>
    pageHead({
      path: "/publishrank",
      title: `PublishRank SEO ${release} — WordPress SEO Plugin by UmarJaum`,
      description:
        "PublishRank SEO 2.26.2 adds a unified Classic Editor dock, Media tab and image licence metadata, expanded preview simulations, and the publishrank/v1 REST API. See the validation report's test scope and limits.",
      image: "/og/og-publishrank.jpg",
      imageAlt: "UmarJaum's PublishRank SEO for WordPress project, release 2.26.2",
      extraGraph: [softwareSchema()],
    }),
  component: PublishRank,
});

const tools = [
  {
    id: "gutenberg-sidebar",
    Icon: Workflow,
    title: "Safer SEO permissions and editor saves",
    text: "SEO edits require Edit SEO alongside post-edit access. The block-editor bridge runs PublishRank's own field savers once instead of replaying every save_post handler; the included report records a test counter confirming one third-party save handler run.",
  },
  {
    id: "classic-editor-dock",
    Icon: Sparkles,
    title: "One Classic Editor SEO dock",
    text: "Fields, Preview, Analysis, Schema, Multilingual and Media tabs share one movable, resizable dock. Users without Edit SEO see values read-only; tab and fold behavior are documented in the included validation report.",
  },
  {
    id: "media-tab",
    Icon: ShieldCheck,
    title: "Media tab and image controls",
    text: "Review images used by an item and edit Media Library fields in place. The report records stale-change protection (409), permission checks, URL validation, social image controls and safe dry-run checks.",
  },
  {
    id: "image-licence-metadata",
    Icon: ShieldCheck,
    title: "Image credit and licence metadata",
    text: "Record credit, creator, copyright, licence URL and acquisition page. These values can populate ImageObject fields; IPTC upload credit and copyright are used when the editor fields are empty.",
  },
  {
    id: "preview-simulations",
    Icon: Workflow,
    title: "Google, Bing and social preview simulations",
    text: "Search previews switch between Google and Bing desktop/mobile. Separate Facebook, LinkedIn, WhatsApp and X cards show image size/aspect ratio and are labelled simulations.",
  },
  {
    id: "rest-api",
    Icon: Newspaper,
    title: "New publishrank/v1 REST API",
    text: "The new endpoints expose post SEO GET/PATCH, analysis, rendered head metadata and JSON-LD for headless sites, schema and sitemaps. Editorial focus keywords and keyphrases are not public by default.",
  },
  {
    id: "analytics-schema-fixes",
    Icon: ShieldCheck,
    title: "Analytics limits and schema correction",
    text: "Analytics collection adds a configurable rate limit and rejects over-long paths. The invalid SatireNewsArticle value is mapped to SatiricalArticle. Schema requirement dates show their review date but were not re-verified against live Google documentation in this release.",
  },
  {
    id: "schema-studio",
    Icon: Sparkles,
    title: "Schema Studio",
    text: "Build reusable templates for 246 catalogued Schema.org types, assign them to content or individual items, and preview the resulting JSON-LD. Built-in templates start switched off, so existing structured-data output does not change until enabled.",
  },
  {
    id: "schema-diagnostics",
    Icon: Building2,
    title: "Schema diagnostics",
    text: "Inspect JSON syntax, types, properties, values, URLs, nesting, duplicate entities and references. Schema.org validity is shown separately from Google's documented rich-result requirements.",
  },
  {
    id: "multiple-locations",
    Icon: Newspaper,
    title: "Local SEO for up to 50 locations",
    text: "Create branch pages with their own details, hours and LocalBusiness entities connected to the parent organization. The release report records 134 of 134 selectable business types passing registry checks.",
  },
  {
    id: "live-previews",
    Icon: Sparkles,
    title: "Live previews",
    text: "Review WooCommerce Product and ProductGroup data, real breadcrumb parents, and desktop/mobile sign-in layouts while editing.",
  },
  {
    id: "multilingual-content",
    Icon: ShieldCheck,
    title: "More accurate multilingual content signals",
    text: "Unicode-aware word counts and article-language detection improve structured data and Markdown/AI output for Arabic, Urdu and other non-Latin content.",
  },
  {
    id: "setup-confirmation",
    Icon: Workflow,
    title: "A clearer first-run security setup",
    text: "The setup wizard saves a private sign-in address and explains its 10-minute confirmation window, with a direct confirmation action before the temporary safety period expires.",
  },
  {
    id: "traffic-guard",
    Icon: ShieldCheck,
    title: "Traffic Guard",
    text: "Review Monitor and Enforce modes, configurable rules, temporary blocks, rate limits and event logs. Unknown visitor locations are allowed by default.",
  },
  {
    id: "first-party-analytics",
    Icon: Sparkles,
    title: "First-party Traffic Analytics",
    text: "The carried-forward code measures visits observed after activation; counts are estimates, not perfect visitor identification. Search Console clicks and impressions are separate measurements.",
  },
  {
    id: "woocommerce-seo",
    Icon: Building2,
    title: "WooCommerce SEO tools",
    text: "When WooCommerce is active and the module is enabled, product SEO fields, structured-data paths, templates, an audit and a protected catalogue feed are available. Hosting and store configuration affect behavior.",
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
        eyebrow={`02 / Flagship product · PublishRank SEO for WordPress · v${release}`}
        title={
          <>
            PublishRank SEO{" "}
            <span className="serif-accent text-signal-gradient">for every WordPress website.</span>
          </>
        }
        intro={`I’m UmarJaum, developer of PublishRank SEO for WordPress. Version ${release} is a free, open-source release for businesses, stores, creators and publishers, with optional newsroom tools. This update adds a unified Classic Editor dock, media controls and image licence metadata, expanded preview simulations, and the publishrank/v1 REST API. The included validation report documents its specific test environment and limitations.`}
      >
        <div className="flex flex-wrap gap-3">
          <Magnetic>
            <a href={DOWNLOAD_URL} className={ctaVariants({ variant: "signal", size: "lg" })}>
              Download v{release} <ArrowUpRight className="size-4" />
            </a>
          </Magnetic>
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
          <a
            href={PUBLISHRANK_VIDEO}
            target="_blank"
            rel="noopener noreferrer"
            className={ctaVariants({ variant: "glass", size: "lg" })}
          >
            Watch release video <ArrowUpRight className="size-4" />
          </a>
        </div>
      </PageHero>

      <section className="wrap pb-12">
        <div
          role="note"
          className="glass-strong rounded-2xl border border-primary/20 p-6 md:p-8"
          data-reveal
        >
          <p className="eyebrow">Validation report · {release}</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight">
            Release report scope and additional maintainer testing
          </h2>
          <p className="mt-3 max-w-4xl leading-relaxed text-muted-foreground">
            The included report records WordPress 7.1.5 with a SQLite drop-in, PHP 8.3, Chromium
            (Playwright), Twenty Twenty-Five and Classic Editor checks. It reports PHP lint on 266
            files with zero errors, one PHPCompatibility finding fixed, JavaScript checks, and
            editor, permissions, media, REST, analytics and schema checks. These are the report's
            results, not checks independently rerun for this website publication.
          </p>
          <p className="mt-3 max-w-4xl leading-relaxed text-muted-foreground">
            The package lists WordPress 6.3+ and PHP 7.4+ as minimum requirements and WordPress 7.1
            as tested up to. The report did not runtime-test WordPress 6.3 or PHP 7.4; PHP 7.4
            received static compatibility scanning only.
          </p>
          <p className="mt-3 max-w-4xl leading-relaxed text-muted-foreground">
            The report also lists MySQL/MariaDB, multisite, WooCommerce, WPML/Polylang, object
            cache, screen reader and full keyboard-only review, RTL, mobile editor, the Save-button
            lock, load/performance testing, and live Google/social validation services as not
            performed. Compatibility can vary by hosting, theme and plugin combination; no
            search-ranking outcome is claimed.
          </p>
        </div>
      </section>

      <section className="wrap pb-16">
        <div data-scale-in>
          <Evidence
            src={screens.dashboard}
            alt="PublishRank dashboard in the WordPress admin"
            label="PublishRank / Dashboard"
            caption="Historical PublishRank 2.26.0 dashboard capture from a local test site with demo content; it is not a 2.26.2 screenshot."
          />
        </div>
      </section>

      <section className="wrap py-16 md:py-24">
        <SectionHead
          eyebrow={`Release changes and product capabilities · ${release}`}
          title="A cross-industry product, with deeper publisher workflows."
          intro="The first cards describe 2.26.2 changes using the included validation report; the remaining cards describe carried-forward product areas. The report distinguishes recorded checks from environments and areas not performed."
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
          eyebrow="Historical 2.26.0 interface evidence"
          title="Earlier screens, with their test context intact."
          intro="These retained captures are from PublishRank 2.26.0, not new 2.26.2 screenshots. They are local test-site screenshots with demo data, not customer or production records."
        />
        <div className="grid gap-5 md:grid-cols-3" data-stagger>
          <Evidence
            src={screens.schema}
            alt="PublishRank schema markup settings"
            label="Schema / Connected graph"
            caption="Schema Studio from the 2.26.0 interface set; template output remains opt-in."
          />
          <Evidence
            src={screens.seoScore}
            alt="PublishRank article SEO review"
            label="SEO / Article review"
            caption="SEO score screen from the 2.26.0 interface set; a checklist, not a promise of rankings."
          />
          <Evidence
            src={screens.newsroom}
            alt="PublishRank newsroom workflow"
            label="Newsroom / Workflow"
            caption="Newsroom workspace from the 2.26.0 interface set."
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
            <a
              href={PUBLISHRANK_RELEASE_REPORT}
              target="_blank"
              rel="noopener noreferrer"
              className={ctaVariants({ variant: "glass", size: "lg" })}
            >
              Read full 2.26.2 validation report <ArrowUpRight className="size-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
