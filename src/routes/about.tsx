import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Atom, Code2, LineChart } from "lucide-react";
import { useRef } from "react";
import developerDesk from "@/assets/developer-desk.jpg.asset.json";
import { ctaVariants } from "@/components/site/cta";
import { usePageMotion } from "@/components/site/motion";
import { PageHero } from "@/components/site/PageHero";
import { SectionHead } from "@/components/site/SectionHead";
import { Spotlight } from "@/components/site/Spotlight";
import { principles } from "@/lib/content";
import { pageHead } from "@/lib/seo";
import { LEGAL_NAME } from "@/lib/site";

export const Route = createFileRoute("/about")({
  staticData: { sitemap: true },
  head: () =>
    pageHead({
      path: "/about",
      title: "About Muhammad Umar Jabbar (UmarJaum) — Physicist, Developer & SEO",
      description:
        "Meet Muhammad Umar Jabbar, known publicly as UmarJaum: a physicist from Pakistan and the founder, CEO, developer and SEO engineer of PublishRank.",
      image: "/og/og-about.jpg",
      imageAlt:
        "About Muhammad Umar Jabbar (UmarJaum) — a physicist who builds the layer beneath the story",
      pageType: "ProfilePage",
    }),
  component: About,
});

const roles = [
  {
    Icon: Atom,
    title: "Physicist",
    text: "A scientific habit of modelling systems, measuring outcomes and trusting evidence over assumptions.",
  },
  {
    Icon: Code2,
    title: "Developer",
    text: "Architect and developer of PublishRank — from WordPress internals to release engineering.",
  },
  {
    Icon: LineChart,
    title: "SEO engineer",
    text: "Technical SEO, structured data, sitemaps and discovery systems built for real publishing desks.",
  },
];

function About() {
  const ref = useRef<HTMLDivElement>(null);
  usePageMotion(ref);

  return (
    <div ref={ref}>
      <PageHero
        eyebrow="01 / About"
        title={
          <>
            A physicist who builds{" "}
            <span className="serif-accent text-signal-gradient">the layer beneath the story.</span>
          </>
        }
        intro="UmarJaum is the public identity of Muhammad Umar Jabbar — a physicist from Pakistan, independent developer and the SEO engineer and CEO behind PublishRank."
      />

      <section className="wrap grid gap-5 pb-20 md:grid-cols-3" data-stagger>
        {roles.map(({ Icon, title, text }) => (
          <Spotlight key={title} tilt className="group p-8">
            <span className="grid size-12 place-items-center rounded-2xl bg-primary/10 text-primary transition-transform duration-500 group-hover:scale-110">
              <Icon className="size-5" />
            </span>
            <h2 className="mt-8 text-2xl font-semibold tracking-tight">{title}</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">{text}</p>
          </Spotlight>
        ))}
      </section>

      <section className="wrap grid gap-12 py-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
        <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start" data-reveal>
          <div className="overflow-hidden rounded-3xl border border-border">
            <img
              src={developerDesk.url}
              alt="Developer workstation where PublishRank is built"
              width={1500}
              height={998}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover transition-transform duration-[1.2s] hover:scale-105"
            />
          </div>
          <dl className="glass divide-y divide-border rounded-2xl text-sm">
            {[
              ["Public name", "UmarJaum"],
              ["Legal name", LEGAL_NAME],
              ["Discipline", "Physics"],
              ["Role", "CEO, developer & SEO"],
              ["Flagship", "PublishRank"],
              ["Based in", "Pakistan"],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between gap-6 px-5 py-4">
                <dt className="text-muted-foreground">{k}</dt>
                <dd className="text-right font-medium">{v}</dd>
              </div>
            ))}
          </dl>
        </aside>

        <div className="space-y-14">
          <article data-reveal>
            <h2 className="display text-[clamp(2rem,4vw,3rem)]">
              Software should respect the work.
            </h2>
            <div className="mt-6 space-y-5 text-[1.075rem] leading-[1.8] text-muted-foreground">
              <p>
                I build from the assumption that the people operating a system need to understand
                it. That means useful defaults, readable output, visible trade-offs and
                documentation that stays close to the actual product.
              </p>
              <p>
                PublishRank is the clearest expression of that approach so far: a free, open-source
                WordPress SEO plugin for publishers, newsrooms, magazines and content-heavy sites —
                now listed on WordPress.org.
              </p>
              <p>
                The goal is not to promise rankings. The goal is to help a publishing team own its
                technical foundation: metadata, schema, sitemaps, redirects, crawl controls and
                editorial workflow.
              </p>
            </div>
          </article>

          <article data-reveal>
            <h2 className="display text-[clamp(2rem,4vw,3rem)]">Why physics matters here.</h2>
            <div className="mt-6 space-y-5 text-[1.075rem] leading-[1.8] text-muted-foreground">
              <p>
                Physics is the study of systems that can be described, measured and predicted.
                Search and publishing are systems too — full of signals, feedback loops and noise.
              </p>
              <p>
                Bringing that scientific discipline to SEO means fewer guesses and more evidence:
                inspectable schema, observable sitemaps and settings that explain exactly what they
                change.
              </p>
            </div>
          </article>

          <div>
            <SectionHead
              eyebrow="What the work values"
              title="Three principles."
              className="mb-8 md:mb-10"
            />
            <div className="space-y-4" data-stagger>
              {principles.map((p) => (
                <Spotlight key={p.number} className="flex gap-6 p-7">
                  <span className="font-mono text-sm text-primary">{p.number}</span>
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight">{p.title}</h3>
                    <p className="mt-2 leading-relaxed text-muted-foreground">{p.text}</p>
                  </div>
                </Spotlight>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-3" data-reveal>
            <Link to="/publishrank" className={ctaVariants({ variant: "signal" })}>
              See PublishRank <ArrowUpRight className="size-4" />
            </Link>
            <Link to="/contact" className={ctaVariants({ variant: "glass" })}>
              Contact UmarJaum
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
