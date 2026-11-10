import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import { ctaVariants } from "@/components/site/cta";
import { Evidence } from "@/components/site/Evidence";
import { usePageMotion } from "@/components/site/motion";
import { PageHero } from "@/components/site/PageHero";
import { SectionHead } from "@/components/site/SectionHead";
import { screens, work } from "@/lib/content";
import { pageHead } from "@/lib/seo";
import { absoluteUrl, PUBLISHRANK_VERSION } from "@/lib/site";

export const Route = createFileRoute("/work")({
  staticData: { sitemap: true },
  head: () =>
    pageHead({
      path: "/work",
      title: "Selected Work — PublishRank, SEO Observability & Newsroom Tools",
      description:
        "Selected product, workflow and SEO observability work by UmarJaum (Muhammad Umar Jabbar), from PublishRank's dashboard to its newsroom layer.",
      image: "/og/og-work.jpg",
      imageAlt:
        "Selected work by UmarJaum — PublishRank newsroom, SEO observability and schema tools",
      pageType: "CollectionPage",
      extraGraph: [
        {
          "@type": "ItemList",
          "@id": `${absoluteUrl("/work")}#list`,
          itemListElement: work.map((w, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: w.title,
            description: w.text,
            url: absoluteUrl(`/publishrank${"hash" in w ? `#${w.hash}` : ""}`),
          })),
        },
      ],
    }),
  component: Work,
});

function Work() {
  const ref = useRef<HTMLDivElement>(null);
  usePageMotion(ref);

  return (
    <div ref={ref}>
      <PageHero
        eyebrow="03 / Selected work"
        title={
          <>
            Where product, publishing{" "}
            <span className="serif-accent text-signal-gradient">and proof meet.</span>
          </>
        }
        intro="A closer look at the systems and surfaces that make up the UmarJaum practice."
      />

      <section className="wrap space-y-6 pb-20">
        {work.map((item, i) => (
          <article
            key={item.id}
            id={item.id}
            data-reveal
            className="group spotlight glass grid scroll-mt-28 overflow-hidden rounded-[2rem] md:grid-cols-2"
          >
            <div className={i % 2 ? "overflow-hidden md:order-2" : "overflow-hidden"}>
              <img
                src={item.image}
                alt={`${item.title} — PublishRank interface`}
                width={1440}
                height={1000}
                loading={i === 0 ? "eager" : "lazy"}
                className="h-full min-h-72 w-full object-cover object-top transition-transform duration-[1.4s] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col justify-between gap-10 p-8 md:p-12">
              <div>
                <span className="font-mono text-xs text-primary">
                  0{i + 1} — {item.type}
                </span>
                <h2 className="display mt-4 text-[clamp(2rem,4vw,3.2rem)]">{item.title}</h2>
                <p className="mt-5 max-w-md text-lg leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
              </div>
              <Link
                to={item.to}
                {...("hash" in item ? { hash: item.hash } : {})}
                className={ctaVariants({ variant: "glass", className: "self-start" })}
              >
                Read the brief <ArrowUpRight className="size-4" />
              </Link>
            </div>
          </article>
        ))}
      </section>

      <section className="wrap py-16">
        <SectionHead
          eyebrow="A real interface, not a mockup"
          title="Evidence matters."
          intro={`These real WordPress-admin captures are from PublishRank 2.12.1; the current release is ${PUBLISHRANK_VERSION}, so some screens may differ.`}
        />
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div data-scale-in>
            <Evidence
              src={screens.features}
              alt="PublishRank features control center"
              label="Features / Control center"
              caption="The plugin's full scope, visible and manageable."
            />
          </div>
          <div data-reveal>
            <h3 className="display text-[clamp(1.8rem,3.4vw,2.6rem)]">
              Build in public, explain in plain language.
            </h3>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Every product surface is an invitation to inspect the system. The best work is not
              just functional; it gives the operator a vocabulary for what is happening.
            </p>
            <Link
              to="/publishrank"
              className={ctaVariants({ variant: "signal", className: "mt-8" })}
            >
              Explore PublishRank features <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
