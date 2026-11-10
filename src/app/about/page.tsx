import { JsonLd } from "@/components/json-ld";
import { PageHeading } from "@/components/page-heading";
import { principles } from "@/lib/content";
import { absoluteUrl, baseGraph, LEGAL_NAME, SITE_URL, pageMetadata } from "@/lib/site";

export const metadata = pageMetadata(
  "/about",
  "About the founder",
  "Meet Muhammad Umar Jabbar, known publicly as UmarJaum: CEO and developer of PublishRank.",
);

export default function About() {
  const graph = {
    ...baseGraph("/about"),
    "@graph": [
      ...baseGraph("/about")["@graph"],
      { "@type": "AboutPage", url: absoluteUrl("/about"), mainEntity: { "@id": `${SITE_URL}/#person` } },
    ],
  };

  return (
    <>
      <PageHeading
        eyebrow="01 / About"
        title="A founder who builds the layer beneath the story."
        intro="UmarJaum is the public identity of Muhammad Umar Jabbar — an independent developer and CEO building tools that help publishing teams make better technical decisions."
      />
      <section className="page-content">
        <div className="wrap content-grid">
          <aside>
            <div className="meta-list">
              <div className="meta-row"><span>Public name</span><span>UmarJaum</span></div>
              <div className="meta-row"><span>Legal name</span><span>{LEGAL_NAME}</span></div>
              <div className="meta-row"><span>Role</span><span>CEO &amp; developer</span></div>
              <div className="meta-row"><span>Flagship</span><span>PublishRank</span></div>
            </div>
          </aside>
          <div className="prose">
            <h2>Software should respect the work.</h2>
            <p>
              I build from the assumption that the people operating a system need to understand it.
              That means useful defaults, readable output, visible trade-offs and documentation that
              stays close to the actual product.
            </p>
            <p>
              PublishRank is the clearest expression of that approach so far: a free, open-source
              WordPress SEO plugin for publishers, newsrooms, magazines and content-heavy sites.
            </p>
            <p>
              The goal is not to promise rankings. The goal is to help a publishing team own its
              technical foundation: metadata, schema, sitemaps, redirects, crawl controls and
              editorial workflow.
            </p>
            <h2>What the work values</h2>
            <div className="principles">
              {principles.map((principle) => (
                <article className="principle" key={principle.number}>
                  <span className="number">{principle.number}</span>
                  <h3>{principle.title}</h3>
                  <p>{principle.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
      <JsonLd data={graph} />
    </>
  );
}
