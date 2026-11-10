import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import type { RefObject } from "react";

let registered = false;
export function ensureGsap() {
  if (registered || typeof window === "undefined") return;
  gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);
  registered = true;
}

/** The first hero animation waits for the intro loader; later navigations play at once. */
let firstPaint = true;
export const heroDelay = () => {
  const d = firstPaint ? 0.85 : 0.05;
  firstPaint = false;
  return d;
};

/**
 * Declarative scroll motion for a page. Mark elements with:
 *  data-split="hero" | "scroll"  — headline words rise from masked lines
 *  data-reveal                    — fade up when scrolled into view
 *  data-stagger                   — children fade up in sequence
 *  data-parallax="-12"            — yPercent drift while scrolling
 *  data-counter="41"              — count up to the value
 *  data-scale-in                  — image frame scales from 0.92 with clip reveal
 *  data-rule="left" | "right"     — heading side rules draw out from the title
 *  data-clip                      — image wipes up from the bottom when scrolled into view
 *  data-scrub-x="-12"             — horizontal drift tied to scroll position
 *  data-scrub-scale               — block grows from 0.9 to full size as it scrolls in
 */
export function usePageMotion(scope: RefObject<HTMLElement | null>) {
  useGSAP(
    () => {
      ensureGsap();
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const q = gsap.utils.selector(scope);
        const delay = heroDelay();

        q("[data-split]").forEach((el: HTMLElement) => {
          const isHero = el.dataset["split"] === "hero";
          SplitText.create(el, {
            type: "lines,words",
            mask: "lines",
            autoSplit: true,
            onSplit(self) {
              return gsap.from(self.words, {
                yPercent: 115,
                opacity: 0,
                duration: 1.1,
                ease: "expo.out",
                stagger: 0.045,
                delay: isHero ? delay : 0,
                ...(isHero ? {} : { scrollTrigger: { trigger: el, start: "top 88%", once: true } }),
              });
            },
          });
        });

        q("[data-hero-fade]").forEach((el: HTMLElement, i: number) => {
          gsap.from(el, {
            y: 28,
            opacity: 0,
            filter: "blur(8px)",
            duration: 1,
            ease: "power3.out",
            delay: delay + 0.35 + i * 0.12,
          });
        });

        q("[data-reveal]").forEach((el: HTMLElement) => {
          gsap.from(el, {
            y: 48,
            opacity: 0,
            duration: 1.1,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 90%", once: true },
          });
        });

        q("[data-stagger]").forEach((el: HTMLElement) => {
          gsap.from(el.children, {
            y: 40,
            opacity: 0,
            duration: 0.9,
            ease: "power3.out",
            stagger: 0.09,
            scrollTrigger: { trigger: el, start: "top 88%", once: true },
          });
        });

        q("[data-scale-in]").forEach((el: HTMLElement) => {
          gsap.from(el, {
            scale: 0.9,
            opacity: 0,
            clipPath: "inset(12% 12% 12% 12% round 24px)",
            duration: 1.4,
            ease: "expo.out",
            delay: el.dataset["scaleIn"] === "hero" ? delay + 0.2 : 0,
            ...(el.dataset["scaleIn"] === "hero"
              ? {}
              : { scrollTrigger: { trigger: el, start: "top 85%", once: true } }),
          });
        });

        q("[data-parallax]").forEach((el: HTMLElement) => {
          gsap.to(el, {
            yPercent: Number(el.dataset["parallax"]) || -10,
            ease: "none",
            scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true },
          });
        });

        q("[data-rule]").forEach((el: HTMLElement) => {
          gsap.from(el, {
            scaleX: 0,
            duration: 1.2,
            ease: "expo.out",
            scrollTrigger: { trigger: el, start: "top 90%", once: true },
          });
        });

        q("[data-clip]").forEach((el: HTMLElement) => {
          gsap.fromTo(
            el,
            { clipPath: "inset(100% 0% 0% 0%)" },
            {
              clipPath: "inset(0% 0% 0% 0%)",
              duration: 1.3,
              ease: "expo.inOut",
              scrollTrigger: { trigger: el, start: "top 85%", once: true },
            },
          );
        });

        q("[data-scrub-x]").forEach((el: HTMLElement) => {
          const d = Number(el.dataset["scrubX"]) || -12;
          gsap.fromTo(
            el,
            { xPercent: -d / 2 },
            {
              xPercent: d / 2,
              ease: "none",
              scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true },
            },
          );
        });

        q("[data-scrub-scale]").forEach((el: HTMLElement) => {
          gsap.fromTo(
            el,
            { scale: 0.9, borderRadius: "3rem" },
            {
              scale: 1,
              borderRadius: "2rem",
              ease: "none",
              scrollTrigger: { trigger: el, start: "top bottom", end: "top 55%", scrub: true },
            },
          );
        });

        q("[data-counter]").forEach((el: HTMLElement) => {
          const target = Number(el.dataset["counter"]);
          const state = { v: 0 };
          gsap.to(state, {
            v: target,
            duration: 1.8,
            ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top 92%", once: true },
            onUpdate: () => {
              el.textContent = Math.round(state.v).toString();
            },
          });
        });
      });
      return () => mm.revert();
    },
    { scope },
  );
}
