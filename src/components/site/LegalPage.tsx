import { useRef } from "react";
import { CONTACT_EMAIL } from "@/lib/site";
import { usePageMotion } from "./motion";
import { PageHero } from "./PageHero";

export interface LegalContent {
  kind: string;
  title: string;
  intro: string;
  sections: { heading: string; body: string }[];
}

export function LegalPage({ content }: { content: LegalContent }) {
  const ref = useRef<HTMLDivElement>(null);
  usePageMotion(ref);
  return (
    <div ref={ref}>
      <PageHero eyebrow={`Legal / ${content.kind}`} title={content.title} intro={content.intro} />
      <section className="wrap grid gap-10 pb-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
        <aside data-reveal className="lg:sticky lg:top-28 lg:self-start">
          <dl className="glass divide-y divide-border rounded-2xl text-sm">
            {[
              ["Owner", "UmarJaum"],
              ["Contact", CONTACT_EMAIL],
              ["Status", "Plain-language policy"],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between gap-6 px-5 py-4">
                <dt className="text-muted-foreground">{k}</dt>
                <dd className="text-right">{v}</dd>
              </div>
            ))}
          </dl>
        </aside>
        <div className="space-y-10" data-stagger>
          {content.sections.map((s, i) => (
            <article key={s.heading} className="border-t border-border pt-8">
              <p className="font-mono text-xs text-primary">0{i + 1}</p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight">{s.heading}</h2>
              <p className="mt-4 text-[1.05rem] leading-[1.8] text-muted-foreground">{s.body}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
