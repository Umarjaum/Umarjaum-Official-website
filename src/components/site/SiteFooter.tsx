import { useGSAP } from "@gsap/react";
import { Link } from "@tanstack/react-router";
import gsap from "gsap";
import { ArrowUpRight, Download, Globe, Mail, MapPin } from "lucide-react";
import { useRef } from "react";
import {
  CONTACT_EMAIL,
  DOWNLOAD_URL,
  GITHUB_URL,
  LEGAL_NAME,
  PUBLISHRANK_RELEASES,
  PUBLISHRANK_REPO,
  PUBLISHRANK_URL,
  PUBLISHRANK_VERSION,
  PUBLISHRANK_WPORG,
} from "@/lib/site";
import { cn } from "@/lib/utils";
import { ctaVariants } from "./cta";
import { Magnetic } from "./Magnetic";
import { ensureGsap } from "./motion";
import { Wordmark } from "./Monogram";
import { SocialHandles } from "./SocialIcons";

type FooterLink = { label: string; to?: string; href?: string };

const columns: { title: string; links: FooterLink[] }[] = [
  {
    title: "Explore",
    links: [
      { label: "Home", to: "/" },
      { label: "About the founder", to: "/about" },
      { label: "Selected work", to: "/work" },
      { label: "FAQ", to: "/faq" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    title: "PublishRank",
    links: [
      { label: "Product overview", to: "/publishrank" },
      { label: "Official website", href: PUBLISHRANK_URL },
      { label: "WordPress.org listing", href: PUBLISHRANK_WPORG },
      { label: "Download latest", href: DOWNLOAD_URL },
      { label: "Release notes", href: PUBLISHRANK_RELEASES },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Source code", href: PUBLISHRANK_REPO },
      { label: "GitHub profile", href: GITHUB_URL },
      { label: "Sitemap", href: "/sitemap.xml" },
      { label: "llms.txt", href: "/llms.txt" },
    ],
  },
];

const policies: FooterLink[] = [
  { label: "Privacy", to: "/privacy" },
  { label: "Terms", to: "/terms" },
  { label: "Cookies", to: "/cookies" },
  { label: "Disclaimer", to: "/disclaimer" },
  { label: "Security", to: "/security" },
  { label: "Accessibility", to: "/accessibility" },
];

function FooterItem({ link }: { link: FooterLink }) {
  const cls = "link-underline text-sm text-muted-foreground hover:text-foreground";
  if (link.to) {
    return (
      <Link to={link.to} className={cls}>
        {link.label}
      </Link>
    );
  }
  const external = link.href?.startsWith("http");
  return (
    <a
      href={link.href}
      className={cn(cls, "inline-flex items-center gap-1")}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {link.label}
      {external ? <ArrowUpRight className="size-3 opacity-50" aria-hidden="true" /> : null}
    </a>
  );
}

export function SiteFooter() {
  const ref = useRef<HTMLElement>(null);

  // Footer-only scroll effects: the CTA band rises in and the giant wordmark drifts sideways.
  useGSAP(
    () => {
      ensureGsap();
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const q = gsap.utils.selector(ref);
        gsap.from(q("[data-f-rise]"), {
          y: 40,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: { trigger: ref.current, start: "top 92%", once: true },
        });
        gsap.fromTo(
          q("[data-f-drift]"),
          { xPercent: 8 },
          {
            xPercent: -8,
            ease: "none",
            scrollTrigger: {
              trigger: ref.current,
              start: "top bottom",
              end: "bottom bottom",
              scrub: true,
            },
          },
        );
      });
      return () => mm.revert();
    },
    { scope: ref },
  );

  return (
    <footer ref={ref} className="relative mt-24">
      {/* Crimson CTA band (PublishRank "Ready to boost" layout) */}
      <div className="bg-signal relative overflow-hidden text-primary-foreground">
        <div
          className="bg-grid pointer-events-none absolute inset-0 opacity-30"
          aria-hidden="true"
        />
        <div className="wrap relative flex flex-col gap-8 py-14 md:flex-row md:items-center md:justify-between md:py-16">
          <div className="max-w-2xl" data-f-rise>
            <p className="text-xs font-bold uppercase tracking-[0.16em] opacity-80">
              Start a conversation
            </p>
            <h2 className="display mt-3 text-[clamp(1.8rem,3.4vw,2.75rem)]">
              Have a publishing system that needs to explain itself?
            </h2>
          </div>
          <div className="flex flex-wrap gap-3" data-f-rise>
            <Magnetic>
              <Link to="/contact" className={ctaVariants({ variant: "ink", size: "lg" })}>
                Get in touch <ArrowUpRight className="size-4" />
              </Link>
            </Magnetic>
            <a
              href={DOWNLOAD_URL}
              className={cn(
                ctaVariants({ size: "lg" }),
                "border border-primary-foreground/40 bg-transparent text-primary-foreground hover:-translate-y-0.5 hover:bg-primary-foreground/10",
              )}
            >
              <Download className="size-4" /> Download PublishRank
            </a>
          </div>
        </div>
      </div>

      <div className="surface-ink relative overflow-hidden">
        <div
          className="bg-aurora pointer-events-none absolute inset-0 opacity-70"
          aria-hidden="true"
        />

        {/* Strip */}
        <div className="relative border-b border-border">
          <div
            className="wrap flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between"
            data-f-rise
          >
            <div>
              <p className="eyebrow">Keep improving the publishing workflow</p>
              <p className="mt-2 text-2xl font-extrabold tracking-[-0.03em]">
                Clearer foundations for every story.
              </p>
            </div>
            <a
              href={PUBLISHRANK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={ctaVariants({ variant: "signal" })}
            >
              <Globe className="size-4" /> PublishRank official website{" "}
              <ArrowUpRight className="size-4" />
            </a>
          </div>
        </div>

        {/* Link grid */}
        <div className="wrap relative grid gap-12 py-16 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div className="space-y-6">
            <Link to="/" aria-label="UmarJaum — home">
              <Wordmark />
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              {LEGAL_NAME} — physicist, developer and SEO engineer. Founder &amp; CEO of
              PublishRank.
            </p>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li className="flex items-center gap-2.5">
                <MapPin className="size-4 text-primary" aria-hidden="true" /> Pakistan · Working
                worldwide
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="size-4 text-primary" aria-hidden="true" />
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="link-underline hover:text-foreground"
                >
                  {CONTACT_EMAIL}
                </a>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-4 lg:col-span-4">
            {columns.map((col) => (
              <div key={col.title}>
                <p className="text-[0.7rem] font-bold uppercase tracking-[0.16em] text-muted-foreground">
                  {col.title}
                </p>
                <ul className="mt-5 space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <FooterItem link={link} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <p className="text-[0.7rem] font-bold uppercase tracking-[0.16em] text-muted-foreground">
                Follow
              </p>
              <SocialHandles className="mt-5" />
            </div>
          </div>
        </div>

        {/* Policies */}
        <div className="wrap relative border-t border-border py-8">
          <p className="text-[0.7rem] font-bold uppercase tracking-[0.16em] text-muted-foreground">
            Policies
          </p>
          <ul className="mt-4 flex flex-wrap gap-x-10 gap-y-3">
            {policies.map((link) => (
              <li key={link.label}>
                <FooterItem link={link} />
              </li>
            ))}
          </ul>
        </div>

        {/* Giant wordmark */}
        <div className="relative select-none overflow-hidden" aria-hidden="true">
          <p
            data-f-drift
            className="display text-gradient whitespace-nowrap text-center text-[20vw] leading-[0.85] opacity-[0.12]"
          >
            UmarJaum
          </p>
        </div>

        {/* Bottom bar */}
        <div className="relative border-t border-border">
          <div className="wrap flex flex-col gap-4 py-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
            <span>
              © {new Date().getFullYear()} UmarJaum · {LEGAL_NAME}. All rights reserved.
            </span>
            <a
              href={PUBLISHRANK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
            >
              <span className="size-2 animate-pulse-ring rounded-full bg-mint" aria-hidden="true" />
              SEO powered by PublishRank v{PUBLISHRANK_VERSION}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
