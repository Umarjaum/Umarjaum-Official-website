import Link from "next/link";
import { Evidence } from "@/components/evidence";
import { JsonLd } from "@/components/json-ld";
import { PageHeading } from "@/components/page-heading";
import { work } from "@/lib/content";
import { absoluteUrl, baseGraph, PUBLISHRANK_VERSION, pageMetadata } from "@/lib/site";

export const metadata = pageMetadata(
  "/work",
  "Selected work",
  "Selected product, workflow and SEO observability work by UmarJaum.",
);

export default function Work() {
  return (
    <>
      <PageHeading
        eyebrow="03 / Selected work"
        title="The work is where product, publishing and proof meet."
        intro="A closer look at the systems and surfaces that make up the UmarJaum practice."
      />
      <section className="page-content">
        <div className="wrap">
          <div className="work-grid">
            {work.map((item) => (
              <article className="work-card" id={item.id} key={item.title}>
                <img src={item.image} alt={item.title} />
                <div className="work-body">
                  <span className="work-type">{item.type}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <Link className="button button-ghost" href={item.href}>Read the brief ↗</Link>
                </div>
              </article>
            ))}
          </div>
          <div className="section-head" style={{ marginTop: 100 }}>
            <div>
              <p className="eyebrow">A real interface, not a mockup</p>
              <h2>Evidence matters.</h2>
            </div>
            <p className="section-intro">
              These real WordPress-admin captures are from PublishRank 2.12.1; the current release
              is {PUBLISHRANK_VERSION}, so some screens may differ.
            </p>
          </div>
          <div className="content-grid">
            <Evidence
              src="/media/screens/publishrank-2.12.1/desktop-1440/03-publishrank-features.png"
              alt="PublishRank features screen in the WordPress admin"
              label="FEATURES / CONTROL CENTER"
              caption="An earlier interface capture that makes the plugin’s scope visible and manageable."
            />
            <div className="prose">
              <h2>Build in public, explain in plain language.</h2>
              <p>
                Every product surface is an invitation to inspect the system. The best work is not
                just functional; it gives the operator a vocabulary for what is happening.
              </p>
              <p>That is the standard behind PublishRank and the work that surrounds it.</p>
            </div>
          </div>
          <p className="hero-actions">
            <Link className="button button-ghost" href={absoluteUrl("/publishrank")}>
              Explore current PublishRank features ↗
            </Link>
          </p>
        </div>
      </section>
      <JsonLd data={baseGraph("/work")} />
    </>
  );
}
