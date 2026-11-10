import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Atom,
  BadgeCheck,
  Braces,
  Compass,
  Megaphone,
  Network,
  Rocket,
} from "lucide-react";
import { useRef } from "react";
import developerDesk from "@/assets/developer-desk.jpg.asset.json";
import { ctaVariants } from "@/components/site/cta";
import { Evidence } from "@/components/site/Evidence";
import { Magnetic } from "@/components/site/Magnetic";
import { Marquee } from "@/components/site/Marquee";
import { usePageMotion } from "@/components/site/motion";
import { SectionHead } from "@/components/site/SectionHead";
import { SocialCards } from "@/components/site/SocialIcons";
import { Spotlight } from "@/components/site/Spotlight";
import { capabilities, faqs, principles, screens, stats, work } from "@/lib/content";
import { faqSchema, pageHead, softwareSchema } from "@/lib/seo";
import { DESCRIPTION, PUBLISHRANK_URL, PUBLISHRANK_VERSION, PUBLISHRANK_WPORG } from "@/lib/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  staticData: { sitemap: true },
  head: () =>
    pageHead({
      path: "/",
      title: "UmarJaum — Muhammad Umar Jabbar, Physicist, Developer & SEO of PublishRank",
      description: DESCRIPTION,
      image: "/og/og-home.jpg",
      imageAlt:
        "UmarJaum — Build the system. Explain the signal. Physicist, developer and SEO of PublishRank",
      pageType: "ProfilePage",
      extraGraph: [softwareSchema(), faqSchema("/")],
    }),
  component: Home,
});

const capabilityIcons = [Network, Braces, Compass, Megaphone, Atom, Rocket];

function Home() {
  const ref = useRef<HTMLDivElement>(null);
  usePageMotion(ref);

  return (
    <div ref={ref}>
      {/* HERO */}
      <section className="relative overflow-hidden pb-20 pt-40 md:pb-28 md:pt-48">
        <div className="bg-aurora pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden="true" />
        <div
          data-parallax="-30"
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 top-10 size-[38rem] rounded-full bg-signal opacity-20 blur-[140px]"
        />

        <div className="wrap relative grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div
              data-hero-fade
              className="glass inline-flex items-center gap-2.5 rounded-full py-1.5 pl-1.5 pr-4 text-xs"
            >
              <span className="rounded-full bg-mint/15 px-2.5 py-1 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-mint">
                New
              </span>
              <a
                href={PUBLISHRANK_WPORG}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
              >
                PublishRank is now on WordPress.org <ArrowRight className="size-3" />
              </a>
            </div>

            <p data-hero-fade className="eyebrow mt-8">
              Physicist · Developer · SEO engineer
            </p>
            <h1 data-split="hero" className="display mt-5 text-[clamp(2.6rem,6.2vw,4.75rem)]">
              Build the system.{" "}
              <span className="serif-accent text-signal-gradient">Explain the signal.</span>
            </h1>
            <p
              data-hero-fade
              className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl"
            >
              I'm Muhammad Umar Jabbar — known publicly as{" "}
              <strong className="font-semibold text-foreground">UmarJaum</strong> — a physicist from
              Pakistan and the developer and SEO behind PublishRank. I build practical
              infrastructure for people who publish, review and grow ideas on the web.
            </p>
            <div data-hero-fade className="mt-10 flex flex-wrap gap-3">
              <Magnetic>
                <Link to="/about" className={ctaVariants({ variant: "signal", size: "lg" })}>
                  Meet the founder
                  <ArrowUpRight className="size-4 transition-transform group-hover/cta:-translate-y-0.5 group-hover/cta:translate-x-0.5" />
                </Link>
              </Magnetic>
              <Link to="/publishrank" className={ctaVariants({ variant: "outline", size: "lg" })}>
                Explore PublishRank
              </Link>
            </div>
            <a
              data-hero-fade
              href={PUBLISHRANK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary"
            >
              <BadgeCheck className="size-4 text-mint" />
              <span className="link-underline">Visit the official PublishRank website</span>
              <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <dl
              data-hero-fade
              className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-6 font-mono text-[0.68rem] uppercase tracking-[0.12em]"
            >
              {[
                ["Founder", "PublishRank"],
                ["Focus", "Publishing infra"],
                ["Based", "Pakistan"],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="text-muted-foreground">{k}</dt>
                  <dd className="mt-1.5 text-foreground">{v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative">
            <div data-scale-in="hero">
              <Evidence
                priority
                src={screens.dashboard}
                alt="PublishRank dashboard inside the WordPress admin"
                label="PublishRank / Dashboard"
                caption={`Interface capture from v2.12.1; the current release is v${PUBLISHRANK_VERSION}.`}
                className="shadow-[0_40px_120px_-30px_color-mix(in_oklab,var(--signal)_45%,transparent)]"
              />
            </div>
            {/* Floating glass chips */}
            <div
              data-hero-fade
              className="glass-strong absolute -left-6 -top-7 hidden animate-float items-center gap-3 rounded-2xl px-4 py-3 md:flex"
            >
              <span className="grid size-9 place-items-center rounded-xl bg-mint/15 text-mint">
                <BadgeCheck className="size-5" />
              </span>
              <span className="text-sm">
                <span className="block font-semibold">Schema connected</span>
                <span className="font-mono text-[0.65rem] uppercase tracking-wider text-muted-foreground">
                  JSON-LD graph
                </span>
              </span>
            </div>
            <div
              data-hero-fade
              className="glass-strong absolute -bottom-6 right-6 hidden items-center gap-3 rounded-2xl px-4 py-3 [animation-delay:1.5s] md:flex md:animate-float"
            >
              <span className="relative grid size-9 place-items-center rounded-xl bg-primary/15 font-mono text-xs font-bold text-primary">
                41+
              </span>
              <span className="text-sm">
                <span className="block font-semibold">Publisher tools</span>
                <span className="font-mono text-[0.65rem] uppercase tracking-wider text-muted-foreground">
                  Free & open source
                </span>
              </span>
            </div>
          </div>
        </div>
      </section>

      <Marquee />

      {/* STATS */}
      <section className="wrap py-20 md:py-28">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4" data-stagger>
          {stats.map((s) => (
            <Spotlight key={s.label} className="p-6 md:p-8">
              <p className="display text-[clamp(2.2rem,4vw,3.25rem)]">
                {s.display ? (
                  <span className="text-signal-gradient">{s.display}</span>
                ) : (
                  <>
                    <span data-counter={s.value}>{s.value}</span>
                    <span className="text-primary">{s.suffix}</span>
                  </>
                )}
              </p>
              <p className="mt-3 text-sm text-muted-foreground">{s.label}</p>
            </Spotlight>
          ))}
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="wrap py-12 md:py-20">
        <SectionHead
          eyebrow="Operating principles"
          title={
            <>
              Make complex publishing work{" "}
              <span className="serif-accent text-signal-gradient">feel clear.</span>
            </>
          }
          intro="The work is not about adding noise to the stack. It is about giving a publishing team a system it can inspect, trust and improve."
        />
        <div className="grid gap-4 md:grid-cols-3" data-stagger>
          {principles.map((p) => (
            <Spotlight
              key={p.number}
              tilt
              className="group flex min-h-72 flex-col justify-between p-8"
            >
              <span className="font-mono text-sm text-primary">{p.number}</span>
              <div>
                <h3 className="text-2xl font-semibold tracking-[-0.03em]">{p.title}</h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">{p.text}</p>
              </div>
            </Spotlight>
          ))}
        </div>
      </section>

      {/* CAPABILITIES BENTO */}
      <section className="wrap py-20 md:py-28">
        <SectionHead
          eyebrow="What I'm building"
          title="Tools for the people who make the internet legible."
          intro="From technical SEO and structured data to newsroom workflow, the work sits where software meets editorial responsibility."
        />
        <div className="grid gap-4 md:grid-cols-6" data-stagger>
          {capabilities.map(([title, text], i) => {
            const Icon = capabilityIcons[i] ?? Network;
            return (
              <Spotlight
                key={title}
                className={cn(
                  "group p-7",
                  i === 0 ? "md:col-span-4" : i === 1 ? "md:col-span-2" : "md:col-span-3",
                  i === 4 && "bg-[color-mix(in_oklab,var(--signal)_8%,transparent)]",
                )}
              >
                <span className="grid size-12 place-items-center rounded-2xl border border-border bg-background/40 text-primary transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-10 text-xl font-semibold tracking-tight">{title}</h3>
                <p className="mt-3 max-w-md leading-relaxed text-muted-foreground">{text}</p>
              </Spotlight>
            );
          })}
        </div>
      </section>

      {/* PHYSICS */}
      <section className="relative py-20 md:py-28">
        <div className="wrap grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative overflow-hidden rounded-[2rem]" data-scale-in>
            <img
              src={developerDesk.url}
              alt="A developer workstation with code on screen"
              width={1500}
              height={998}
              loading="lazy"
              data-parallax="-8"
              className="h-full w-full scale-110 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
            <div className="glass-strong absolute inset-x-5 bottom-5 rounded-2xl p-5">
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-primary">
                Method
              </p>
              <p className="mt-2 font-medium">Model → Measure → Explain → Ship</p>
            </div>
          </div>
          <div>
            <p className="eyebrow" data-reveal>
              From physics to publishing
            </p>
            <h2 data-split="scroll" className="display mt-4 text-[clamp(1.9rem,3.6vw,3rem)]">
              A physicist's discipline,{" "}
              <span className="serif-accent text-signal-gradient">applied to search.</span>
            </h2>
            <div
              className="mt-8 space-y-5 text-lg leading-relaxed text-muted-foreground"
              data-stagger
            >
              <p>
                Physics teaches you to describe a system precisely, measure what it actually does
                and refuse to trust a claim that cannot be tested.
              </p>
              <p>
                That is how PublishRank approaches SEO: every setting maps to visible output, every
                schema graph can be inspected, and nothing is sold as a ranking promise.
              </p>
            </div>
            <Link
              to="/about"
              className={cn(ctaVariants({ variant: "glass" }), "mt-10")}
              data-reveal
            >
              Read the full story <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* WORK */}
      <section className="wrap py-20 md:py-28">
        <SectionHead
          align="center"
          eyebrow="Selected work"
          title="One product. Many useful surfaces."
          action={
            <Link to="/work" className={ctaVariants({ variant: "glass" })}>
              View all work <ArrowUpRight className="size-4" />
            </Link>
          }
        />
        <div className="grid gap-5 md:grid-cols-3" data-stagger>
          {work.map((item) => (
            <Link
              key={item.id}
              to={item.to}
              {...("hash" in item ? { hash: item.hash } : {})}
              className="group spotlight glass block overflow-hidden rounded-3xl"
            >
              <div className="overflow-hidden border-b border-border" data-clip>
                <img
                  src={item.image}
                  alt={`${item.title} — PublishRank interface`}
                  width={1440}
                  height={1000}
                  loading="lazy"
                  className="aspect-[1.4] w-full object-cover object-top transition-transform duration-[1.2s] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-110"
                />
              </div>
              <div className="p-7">
                <span className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-primary">
                  {item.type}
                </span>
                <h3 className="mt-3 flex items-center justify-between text-2xl font-semibold tracking-tight">
                  {item.title}
                  <ArrowUpRight className="size-5 text-muted-foreground transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
                </h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA BAND */}
      <section className="wrap py-12">
        <div
          data-scrub-scale
          className="relative overflow-hidden rounded-[2rem] bg-signal p-10 text-primary-foreground md:p-16"
        >
          <div
            className="bg-grid pointer-events-none absolute inset-0 opacity-40"
            aria-hidden="true"
          />
          <div className="relative flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="font-mono text-xs uppercase tracking-[0.18em]">
                Start with the product
              </p>
              <h2 className="display mt-4 text-[clamp(1.9rem,3.6vw,3rem)]">
                PublishRank turns SEO from a black box into a publishing workflow.
              </h2>
            </div>
            <div className="flex shrink-0 flex-wrap gap-3">
              <Magnetic>
                <a
                  href={PUBLISHRANK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={ctaVariants({ variant: "ink", size: "lg" })}
                >
                  Visit PublishRank website <ArrowUpRight className="size-4" />
                </a>
              </Magnetic>
              <Link
                to="/publishrank"
                className={cn(
                  ctaVariants({ size: "lg" }),
                  "border border-primary-foreground/40 bg-transparent text-primary-foreground hover:-translate-y-0.5 hover:bg-primary-foreground/10",
                )}
              >
                Product overview
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL */}
      <section className="wrap py-20 md:py-28">
        <SectionHead
          align="center"
          eyebrow="Find me online"
          title={
            <>
              Follow the work{" "}
              <span className="serif-accent text-signal-gradient">as it ships.</span>
            </>
          }
          intro="Release notes, publishing experiments and SEO thinking. Facebook: umarjaumofficial. Everywhere else: umarjaum."
        />
        <SocialCards includeSite />
      </section>

      {/* FAQ PREVIEW */}
      <section className="wrap py-20 md:py-28">
        <SectionHead
          align="center"
          eyebrow="Questions people ask"
          title="Short, direct answers."
          action={
            <Link to="/faq" className={ctaVariants({ variant: "glass" })}>
              All FAQs <ArrowUpRight className="size-4" />
            </Link>
          }
        />
        <div className="grid gap-4 md:grid-cols-2" data-stagger>
          {faqs.slice(0, 4).map(([q, a]) => (
            <Spotlight key={q} className="p-7">
              <h3 className="text-lg font-semibold tracking-tight">{q}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{a}</p>
            </Spotlight>
          ))}
        </div>
      </section>
    </div>
  );
}
