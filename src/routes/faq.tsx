import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef } from "react";
import { ctaVariants } from "@/components/site/cta";
import { FaqAccordion } from "@/components/site/FaqAccordion";
import { usePageMotion } from "@/components/site/motion";
import { PageHero } from "@/components/site/PageHero";
import { faqSchema, pageHead } from "@/lib/seo";

export const Route = createFileRoute("/faq")({
  staticData: { sitemap: true },
  head: () =>
    pageHead({
      path: "/faq",
      title: "FAQ — Who is UmarJaum & What is PublishRank?",
      description:
        "Direct answers about UmarJaum (Muhammad Umar Jabbar), his physics background and the free PublishRank WordPress SEO plugin.",
      pageType: "FAQPage",
      image: "/og/og-faq.jpg",
      imageAlt: "FAQ — Who is UmarJaum and what is PublishRank?",
      extraGraph: [faqSchema("/faq")],
    }),
  component: Faq,
});

function Faq() {
  const ref = useRef<HTMLDivElement>(null);
  usePageMotion(ref);
  return (
    <div ref={ref}>
      <PageHero
        eyebrow="04 / FAQ"
        title={
          <>
            Direct answers,{" "}
            <span className="serif-accent text-signal-gradient">without the launch copy.</span>
          </>
        }
        intro="A short reference for who UmarJaum is, what PublishRank does and how to start a conversation."
      />
      <section className="wrap grid gap-12 pb-12 lg:grid-cols-[1fr_0.4fr]">
        <FaqAccordion />
        <aside className="glass h-fit rounded-3xl p-8 lg:sticky lg:top-28" data-reveal>
          <p className="eyebrow">Still curious?</p>
          <p className="mt-4 text-xl font-semibold tracking-tight">Ask a real question.</p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Context, the outcome you want and the best way to reply — that's all it takes.
          </p>
          <Link
            to="/contact"
            className={ctaVariants({ variant: "signal", className: "mt-6 w-full" })}
          >
            Contact UmarJaum
          </Link>
        </aside>
      </section>
    </div>
  );
}
