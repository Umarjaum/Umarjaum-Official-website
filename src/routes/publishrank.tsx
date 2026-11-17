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

const release = "2.25.0";

export const Route = createFileRoute("/publishrank")({
  staticData: { sitemap: true },
  head: () =>
    pageHead({
      path: "/publishrank",
      title: "PublishRank 2.25.0 — WordPress SEO, Analytics & Publisher Tools by UmarJaum",
      description:
        "A source-verified look at the experimental PublishRank 2.25.0 candidate: cross-industry WordPress SEO, publisher workflows, first-party analytics, WooCommerce SEO and Access Shield.",
      image: "/og/og-publishrank.jpg",
      imageAlt:
        "UmarJaum's PublishRank project: WordPress SEO and publisher tools, including experimental 2.25.0 features",
      extraGraph: [softwareSchema()],
    }),
  component: PublishRank,
});

const tools = [
  {
    id: "release-2-25-analytics",
    Icon: Sparkles,
    title: "First-party Traffic Analytics",
    text: "The 2.25.0 source includes a tracker, analytics storage and classification pipeline, plus an admin reporting screen with charts and a world map. It measures traffic observed after activation; counts are estimates, not perfect visitor identification, and historical visits cannot be reconstructed. Search Console clicks and impressions are separate measurements.",
  },
  {
    id: "release-2-25-woocommerce",
    Icon: Building2,
    title: "WooCommerce SEO tools",
    text: "When WooCommerce is active and the module is enabled, source code provides product SEO fields, GTIN check-digit validation, product and variation structured-data paths, templates, an audit and a protected catalogue feed. Feed code is not automatic Merchant Center or Meta account setup, submission or approval; results and compatibility need testing on the store.",
  },
  {
    id: "release-2-25-shield",
    Icon: ShieldCheck,
    title: "Access Shield login protection",
    text: "An integrated security module includes login-address handling, guard and CAPTCHA paths, TOTP two-factor code, hardening, security logs and statistics. CAPTCHA needs third-party configuration. It is not a managed WAF or DDoS service, and the audit did not test security efficacy in a live site.",
  },
  {
    id: "release-2-25-theme-seo",
    Icon: Workflow,
    title: "Theme SEO cleanup and masking",
    text: "The source includes front-end cleanup and selected theme-masking paths, with an admin configuration and scan interface. Compatibility is not universal: configure carefully, since removing metadata can affect other integrations.",
  },
  {
    id: "cross-industry-seo",
    Icon: Building2,
    title: "SEO for businesses and websites",
    text: "PublishRank is designed for cross-industry business and site needs as well as editorial publishing. Existing platform code covers metadata, content analysis, structured data, sitemaps, redirects and technical controls. Feature behavior depends on settings, data and environment; no tool can guarantee rankings or rich results.",
  },
  {
    id: "publishing-workflows",
    Icon: Newspaper,
    title: "Publisher and newsroom workflows",
    text: "Newsroom and editorial tools sit alongside general website SEO, rather than making publishing sites the only audience. Related platform areas include feeds, navigation, notifications and news discovery; individual workflows remain configuration- and environment-dependent.",
  },
];

function PublishRank() {
  const ref = useRef<HTMLDivElement>(null);
  usePageMotion(ref);

  return (
    <div ref={ref}>
      <PageHero
        eyebrow="02 / Flagship product · Release candidate showcase"
        title={
          <>
            PublishRank is SEO{" "}
            <span className="serif-accent text-signal-gradient">
              for businesses, websites and publishers.
            </span>
          </>
        }
        intro={`I’m UmarJaum, and PublishRank is my WordPress SEO and publisher-tools project. This page covers source-inspected version ${release}, an experimental candidate—not a production release—with business and site needs at its core and specialist publisher workflows alongside them.`}
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
          <p className="eyebrow">Important release status · {release}</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight">
            Experimental candidate — not for production use
          </h2>
          <p className="mt-3 max-w-4xl leading-relaxed text-muted-foreground">
            The supplied release notes explicitly call {release} experimental and state its
            next-generation specification is incomplete. A static source audit found implementation
            paths, but did not run the plugin, WordPress, WooCommerce or the shipped tests. PHP 7.4
            is a stated target, not a verified compatibility result; tested-up-to metadata is not
            proof of production readiness. No deployment or availability of a {release} download is
            promised here. Check the official release page for current status.
          </p>
        </div>
      </section>

      <section className="wrap pb-16">
        <div data-scale-in>
          <Evidence
            src={screens.dashboard}
            alt="PublishRank dashboard in the WordPress admin"
            label="PublishRank / Dashboard"
            caption="Existing interface capture from v2.12.1. It is not a screenshot of the 2.25.0 candidate; screens may differ."
          />
        </div>
      </section>

      <section className="wrap py-16 md:py-24">
        <SectionHead
          eyebrow={`Source-verified feature areas · ${release}`}
          title="A cross-industry product, with deeper publisher workflows."
          intro="These summaries reflect the supplied 2.25.0 source and verification report. Automated and scenario checks passed in the documented test environment; production behavior still depends on configuration, hosting and integrations."
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
          intro="The supplied release includes 32 genuine 2.25.0 admin captures. The gallery below retains existing site visuals with their earlier-version context; the official product site links to the complete 2.25.0 capture gallery."
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
