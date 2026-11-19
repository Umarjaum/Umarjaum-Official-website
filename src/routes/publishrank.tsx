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

const release = "2.26.0";

export const Route = createFileRoute("/publishrank")({
  staticData: { sitemap: true },
  head: () =>
    pageHead({
      path: "/publishrank",
      title: "PublishRank SEO 2.26.0 — WordPress SEO Plugin by UmarJaum",
      description:
        "PublishRank SEO for WordPress 2.26.0 adds Schema Studio for 246 Schema.org types, diagnostics, Local SEO for up to 50 locations and improved multilingual content handling. Review the release test reports and their stated limits.",
      image: "/og/og-publishrank.jpg",
      imageAlt: "UmarJaum's PublishRank SEO for WordPress project, release 2.26.0",
      extraGraph: [softwareSchema()],
    }),
  component: PublishRank,
});

const tools = [
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
        eyebrow="02 / Flagship product · PublishRank SEO for WordPress · v2.26.0"
        title={
          <>
            PublishRank SEO{" "}
            <span className="serif-accent text-signal-gradient">for every WordPress website.</span>
          </>
        }
        intro={`I’m UmarJaum, developer of PublishRank SEO for WordPress. Version ${release} is a free, open-source release for businesses, stores, creators and publishers, with optional newsroom tools. The supplied reports document local WordPress 7.1.5 / PHP 8.4 / SQLite tests and identify environments and paths not covered.`}
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
            The 2.26.0 report set covers 40 representative URLs, 134 of 134 Local SEO business
            types, the 246-type Schema Studio catalog and 50 admin screens. Tests ran on local
            WordPress 7.1.5 / PHP 8.4 / SQLite sites; the reports list combinations not tested.
          </p>
        </div>
      </section>

      <section className="wrap pb-16">
        <div data-scale-in>
          <Evidence
            src={screens.dashboard}
            alt="PublishRank dashboard in the WordPress admin"
            label="PublishRank / Dashboard"
            caption="PublishRank 2.26.0 dashboard capture from a local test site with demo content."
          />
        </div>
      </section>

      <section className="wrap py-16 md:py-24">
        <SectionHead
          eyebrow={`Source-verified feature areas · ${release}`}
          title="A cross-industry product, with deeper publisher workflows."
          intro="These summaries are drawn from the supplied 2.26.0 package and reports. The reports document test environments and distinguish tested areas from combinations that were not covered."
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
          eyebrow="2.26.0 interface evidence"
          title="Current screens, with their test context intact."
          intro="The supplied documentation includes 50 unannotated desktop admin captures from PublishRank 2.26.0. Images below are local test-site screenshots with demo data, not customer or production records."
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
          </div>
        </div>
      </section>
    </div>
  );
}
