import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Mail } from "lucide-react";
import { useRef } from "react";
import { ctaVariants } from "@/components/site/cta";
import { Magnetic } from "@/components/site/Magnetic";
import { usePageMotion } from "@/components/site/motion";
import { PageHero } from "@/components/site/PageHero";
import { Handle, socialLinks } from "@/components/site/SocialIcons";
import { Spotlight } from "@/components/site/Spotlight";
import { pageHead } from "@/lib/seo";
import { CONTACT_EMAIL, SOCIALS } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  staticData: { sitemap: true },
  head: () =>
    pageHead({
      path: "/contact",
      title: "Contact UmarJaum — PublishRank, Technical SEO & Collaborations",
      description:
        "Connect with UmarJaum (Muhammad Umar Jabbar) about PublishRank, publishing systems, technical SEO and collaborations by email, X, Mastodon, Facebook or GitHub.",
      pageType: "ContactPage",
      image: "/og/og-contact.jpg",
      imageAlt: "Contact UmarJaum — Facebook umarjaumofficial; X, Mastodon and GitHub umarjaum",
    }),
  component: Contact,
});

function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  usePageMotion(ref);
  return (
    <div ref={ref}>
      <PageHero
        eyebrow="05 / Contact"
        title={
          <>
            Bring a <span className="serif-accent text-signal-gradient">real question.</span>
          </>
        }
        intro="Tell me what you are building, what is unclear or where the publishing system is getting in the way."
      >
        <Magnetic>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className={ctaVariants({ variant: "signal", size: "lg" })}
          >
            <Mail className="size-4" /> {CONTACT_EMAIL}
          </a>
        </Magnetic>
      </PageHero>

      <section className="wrap grid gap-12 pb-12 lg:grid-cols-2 lg:gap-20">
        <div className="grid gap-4 sm:grid-cols-2" data-stagger>
          {socialLinks.map(({ href, handle, short, Icon }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="me noopener noreferrer"
              className="block"
            >
              <Spotlight tilt className="group flex h-full flex-col justify-between gap-10 p-7">
                <div className="flex items-center justify-between">
                  <span className="grid size-12 place-items-center rounded-2xl bg-brand-soft text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="size-5" />
                  </span>
                  <ArrowUpRight className="size-5 text-muted-foreground transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
                </div>
                <div>
                  <p className="text-xl font-semibold tracking-tight">{short}</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    <Handle value={handle} />
                  </p>
                </div>
              </Spotlight>
            </a>
          ))}
        </div>

        <div className="space-y-8" data-reveal>
          <h2 className="display text-[clamp(2rem,4vw,3rem)]">What makes a useful message?</h2>
          <div className="space-y-5 text-[1.075rem] leading-[1.8] text-muted-foreground">
            <p>
              Start with the context. Say what you are trying to ship, where the current system
              breaks and what a good outcome would look like.
            </p>
            <p>
              For PublishRank support, include the WordPress version, plugin version, affected URL
              and a clear reproduction path. Never include passwords, private keys or personal data.
            </p>
          </div>
          <a
            href={SOCIALS.github}
            target="_blank"
            rel="noopener noreferrer"
            className={ctaVariants({ variant: "glass" })}
          >
            Open GitHub <ArrowUpRight className="size-4" />
          </a>
        </div>
      </section>
    </div>
  );
}
