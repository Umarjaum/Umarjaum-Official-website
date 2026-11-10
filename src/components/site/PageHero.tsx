import type { ReactNode } from "react";
import { Breadcrumbs } from "./Breadcrumbs";

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  intro: string;
  children?: ReactNode;
}

/** Inner-page hero with aurora backdrop, grid, breadcrumbs and split headline. */
export function PageHero({ eyebrow, title, intro, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pb-16 pt-36 md:pb-24 md:pt-44">
      <div className="bg-aurora pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <Breadcrumbs />
      <div className="wrap relative mt-10 md:mt-14">
        <p className="eyebrow" data-hero-fade>
          {eyebrow}
        </p>
        <h1 data-split="hero" className="display mt-5 max-w-5xl text-[clamp(2.4rem,5.6vw,4.4rem)]">
          {title}
        </h1>
        <p
          data-hero-fade
          className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl"
        >
          {intro}
        </p>
        {children ? (
          <div data-hero-fade className="mt-9">
            {children}
          </div>
        ) : null}
      </div>
    </section>
  );
}
