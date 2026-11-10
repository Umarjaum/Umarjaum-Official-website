import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { Monogram } from "./Monogram";

/** Brief branded intro on the first load only; skipped for reduced motion. */
export function Loader() {
  const ref = useRef<HTMLDivElement>(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDone(true);
      return;
    }
    const tl = gsap.timeline({ onComplete: () => setDone(true) });
    tl.fromTo(
      el.querySelector("[data-l-mark]"),
      { scale: 0.6, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.45, ease: "back.out(2)" },
    )
      .fromTo(
        el.querySelector("[data-l-bar]"),
        { scaleX: 0 },
        { scaleX: 1, duration: 0.5, ease: "power2.inOut" },
        "-=0.15",
      )
      .to(el, { yPercent: -100, duration: 0.6, ease: "expo.inOut" }, "+=0.05");
    return () => {
      tl.kill();
    };
  }, []);

  if (done) return null;

  return (
    <div
      ref={ref}
      role="status"
      aria-label="Loading UmarJaum"
      className="fixed inset-0 z-[100] grid animate-loader-failsafe place-content-center justify-items-center gap-5 bg-background motion-reduce:hidden"
    >
      <div data-l-mark>
        <Monogram className="size-16 rounded-2xl text-lg" />
      </div>
      <div className="h-px w-40 overflow-hidden bg-border">
        <div data-l-bar className="h-px origin-left bg-signal" />
      </div>
      <p className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-muted-foreground">
        UmarJaum / Systems for publishing
      </p>
    </div>
  );
}
