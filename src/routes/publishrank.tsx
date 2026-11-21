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
} from "@/lib/site";

const release = "2.26.1";

export const Route = createFileRoute("/publishrank")({
  staticData: { sitemap: true },
  head: () =>
    pageHead({
      path: "/publishrank",
      title: "PublishRank SEO 2.26.1 — WordPress SEO Plugin by UmarJaum",
      description:
        "PublishRank SEO 2.26.1 refines the Gutenberg SEO sidebar and Schema Studio, adds safe media migration and advanced 404 workflows, and improves bulk SEO editing and video sitemap discovery. See the test scope and limits.",
      image: "/og/og-publishrank.jpg",
      imageAlt: "UmarJaum's PublishRank SEO for WordPress project, release 2.26.1",
      extraGraph: [softwareSchema()],
    }),
  component: PublishRank,
});

const tools = [
  {
    id: "gutenberg-sidebar",
    Icon: Workflow,
    title: "One persistent Gutenberg SEO sidebar",
    text: "SEO, Social, Schema, Advanced and Insights tabs bring the editor tools together. Toolbar and Options-menu entries, saved display preferences and remembered sections make the panel discoverable; the duplicate below-editor boxes are removed on block-editor screens.",
  },
  {
    id: "schema-studio-refinements",
    Icon: Sparkles,
    title: "A clearer Schema Studio workflow",
    text: "Searchable type categories, Basic and Advanced modes, guided properties with examples, and clearer validation separate Schema.org validity from Google requirements and recommendations. Valid JSON-LD is not presented as a rich-result or ranking promise.",
  },
  {
    id: "media-link-manager",
    Icon: ShieldCheck,
    title: "Safer media URL migrations",
    text: "Media Link Manager plans and previews changes before applying them, checks collisions, verifies results and supports rollback. Ambiguous or unsupported references are reported rather than guessed.",
  },
  {
    id: "advanced-404-monitor",
    Icon: ShieldCheck,
    title: "More context in the 404 Monitor",
    text: "The monitor distinguishes internal broken links from external referrals, records referring host and path without an IP address, explains likely causes, and offers one-click redirects only for high-confidence fixes.",
  },
  {
    id: "bulk-seo-editor",
    Icon: Workflow,
    title: "A more reviewable Bulk SEO Editor",
    text: "Inline SEO edits include filters, a review step, validation, conflict protection, change history with undo, and CSV import/export safeguards. Formula-sensitive spreadsheet values are protected.",
  },
  {
    id: "video-sitemap-discovery",
    Icon: Newspaper,
    title: "Improved video sitemap discovery",
    text: "YouTube and Vimeo videos from Embed blocks and pasted links are discovered more reliably. YouTube's own thumbnail is used; entries without a thumbnail are skipped, and third-party upload dates are not guessed.",
  },
  {
    id: "responsive-accessibility",
    Icon: ShieldCheck,
    title: "Responsive and accessibility refinements",
    text: "The release consolidates responsive breakpoints and improves visible focus, target sizing, reduced-motion and forced-colours handling. Automated touch-target and contrast checks were spot checks, not a full WCAG audit.",
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
        eyebrow="02 / Flagship product · PublishRank SEO for WordPress · v2.26.1"
        title={
          <>
            PublishRank SEO{" "}
            <span className="serif-accent text-signal-gradient">for every WordPress website.</span>
          </>
        }
        intro={`I’m UmarJaum, developer of PublishRank SEO for WordPress. Version ${release} is a free, open-source release for businesses, stores, creators and publishers, with optional newsroom tools. This update unifies the Gutenberg SEO sidebar, refines Schema Studio, and adds safer media migration and SEO maintenance workflows. The release report records tests on WordPress 7.1.5, PHP 8.3 and SQLite in a sandbox, not on a production host.`}
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
          <p className="eyebrow">Release report · {release}</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight">
            Tested in a sandbox, not on a production host
          </h2>
          <p className="mt-3 max-w-4xl leading-relaxed text-muted-foreground">
            The release report records WordPress 7.1.5, PHP 8.3, SQLite, PHP's built-in web server
            and headless Chromium on a sandbox site. It documents passing tests for the Gutenberg
            and Classic Editor paths, media migration and rollback, bulk editing, 404 workflows,
            video sitemap discovery and responsive checks. The 2.26.0-to-2.26.1 upgrade was tested
            against sandbox data only; this is not production-host testing.
          </p>
          <p className="mt-3 max-w-4xl leading-relaxed text-muted-foreground">
            WooCommerce, page builders, multilingual plugins, real phones and Safari/Firefox were
            not tested; PHP 7.4 received only a static syntax scan. Search Console live sync was
            blocked by missing OAuth credentials. Accessibility checks were automated spot checks,
            not a full WCAG audit. No compatibility beyond reported test coverage or search-ranking
            outcome is claimed.
          </p>
        </div>
      </section>

      <section className="wrap pb-16">
        <div data-scale-in>
          <Evidence
            src={screens.dashboard}
            alt="PublishRank dashboard in the WordPress admin"
            label="PublishRank / Dashboard"
            caption="Historical PublishRank 2.26.0 dashboard capture from a local test site with demo content; it is not a 2.26.1 screenshot."
          />
        </div>
      </section>

      <section className="wrap py-16 md:py-24">
        <SectionHead
          eyebrow={`Release changes and product capabilities · ${release}`}
          title="A cross-industry product, with deeper publisher workflows."
          intro="The first cards describe 2.26.1 changes from the supplied release report; the remaining cards describe carried-forward product areas. The report distinguishes verified workflows from partial, blocked and untested areas."
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
          intro="These retained captures are from PublishRank 2.26.0, not new 2.26.1 screenshots. They are local test-site screenshots with demo data, not customer or production records."
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
              Read full 2.26.1 test report <ArrowUpRight className="size-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
