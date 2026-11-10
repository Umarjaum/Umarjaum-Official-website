import { Link, useRouterState } from "@tanstack/react-router";
import gsap from "gsap";
import { ArrowUpRight, Download, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { nav } from "@/lib/content";
import { DOWNLOAD_URL, PUBLISHRANK_URL, PUBLISHRANK_VERSION } from "@/lib/site";
import { cn } from "@/lib/utils";
import { ctaVariants } from "./cta";
import { Magnetic } from "./Magnetic";
import { Wordmark } from "./Monogram";
import { SocialHandles } from "./SocialIcons";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const navRef = useRef<HTMLDivElement>(null);
  const pillRef = useRef<HTMLSpanElement>(null);
  const sheetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Collapse the strip once scrolled; hide the bar while scrolling down, reveal on scroll up.
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      if (Math.abs(y - last) > 6) {
        setHidden(y > last && y > 420);
        last = y;
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (open && sheetRef.current) {
      gsap.fromTo(
        sheetRef.current.querySelectorAll("[data-sheet-item]"),
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out", stagger: 0.06 },
      );
    }
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Sliding hover pill behind desktop nav links.
  const movePill = (target: HTMLElement | null) => {
    const pill = pillRef.current;
    const wrap = navRef.current;
    if (!pill || !wrap) return;
    if (!target) {
      gsap.to(pill, { opacity: 0, duration: 0.25 });
      return;
    }
    const w = wrap.getBoundingClientRect();
    const r = target.getBoundingClientRect();
    gsap.to(pill, {
      x: r.left - w.left,
      width: r.width,
      opacity: 1,
      duration: 0.4,
      ease: "power3.out",
    });
  };

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)]",
          hidden && !open ? "-translate-y-full" : "translate-y-0",
        )}
      >
        {/* PublishRank strip — links the official product website */}
        <div
          className={cn(
            "bg-signal overflow-hidden text-primary-foreground transition-[height] duration-500",
            scrolled ? "h-0" : "h-9",
          )}
        >
          <a
            href={PUBLISHRANK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="wrap group flex h-9 items-center justify-center gap-2 text-xs font-semibold tracking-wide"
          >
            <span className="rounded-full bg-background/15 px-2 py-0.5 text-[0.65rem] uppercase tracking-[0.12em]">
              v{PUBLISHRANK_VERSION}
            </span>
            <span className="truncate">
              <span className="hidden sm:inline">PublishRank is live on WordPress.org — </span>Visit
              the official website
            </span>
            <ArrowUpRight className="size-3.5 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>

        <div
          className={cn(
            "border-b bg-background/90 backdrop-blur-xl transition-all duration-500",
            scrolled ? "border-border shadow-header" : "border-transparent",
          )}
        >
          <div className="wrap flex h-[4.5rem] items-center justify-between gap-4">
            <Link to="/" aria-label="UmarJaum — home" className="shrink-0">
              <Wordmark />
            </Link>

            <nav aria-label="Primary" className="hidden lg:block">
              <div
                ref={navRef}
                className="relative flex items-center"
                onMouseLeave={() => movePill(null)}
              >
                <span
                  ref={pillRef}
                  aria-hidden="true"
                  className="pointer-events-none absolute left-0 top-0 h-full w-0 rounded-full bg-brand-soft opacity-0"
                />
                {nav.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onMouseEnter={(e) => movePill(e.currentTarget)}
                    onFocus={(e) => movePill(e.currentTarget)}
                    className="relative z-10 rounded-full px-4 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
                    activeProps={{ className: "text-primary" }}
                  >
                    {({ isActive }) => (
                      <>
                        {item.label}
                        {isActive ? (
                          <span
                            className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-signal"
                            aria-hidden="true"
                          />
                        ) : null}
                      </>
                    )}
                  </Link>
                ))}
              </div>
            </nav>

            <div className="flex items-center gap-2">
              <a
                href={PUBLISHRANK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  ctaVariants({ variant: "outline", size: "sm" }),
                  "hidden md:inline-flex",
                )}
              >
                PublishRank
                <ArrowUpRight className="size-4 transition-transform group-hover/cta:-translate-y-0.5 group-hover/cta:translate-x-0.5" />
              </a>
              <Magnetic>
                <a
                  href={DOWNLOAD_URL}
                  className={cn(
                    ctaVariants({ variant: "signal", size: "sm" }),
                    "hidden sm:inline-flex",
                  )}
                >
                  <Download className="size-4" /> Download
                </a>
              </Magnetic>
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-controls="mobile-menu"
                aria-label={open ? "Close menu" : "Open menu"}
                className="grid size-10 place-items-center rounded-full border border-border text-foreground transition-colors hover:border-primary hover:text-primary lg:hidden"
              >
                {open ? <X className="size-4" /> : <Menu className="size-4" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {open ? (
        <div
          id="mobile-menu"
          ref={sheetRef}
          className="fixed inset-0 z-40 flex flex-col justify-between overflow-y-auto bg-background px-6 pb-10 pt-32 lg:hidden"
        >
          <nav aria-label="Mobile" className="flex flex-col">
            {nav.map((item, i) => (
              <Link
                key={item.to}
                to={item.to}
                data-sheet-item
                className="flex items-baseline justify-between border-b border-border py-5 text-3xl font-extrabold tracking-[-0.035em]"
                activeProps={{ className: "text-primary" }}
              >
                {item.label}
                <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
              </Link>
            ))}
          </nav>
          <div data-sheet-item className="mt-10 space-y-6">
            <a
              href={PUBLISHRANK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(ctaVariants({ variant: "signal", size: "lg" }), "w-full")}
            >
              Visit PublishRank website <ArrowUpRight className="size-4" />
            </a>
            <SocialHandles />
          </div>
        </div>
      ) : null}
    </>
  );
}
