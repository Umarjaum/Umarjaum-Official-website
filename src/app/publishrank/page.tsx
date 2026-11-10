import Link from "next/link";
import { Evidence } from "@/components/evidence";
import { JsonLd } from "@/components/json-ld";
import { PageHeading } from "@/components/page-heading";
import {
  absoluteUrl,
  baseGraph,
  DOWNLOAD_URL,
  PUBLISHRANK_REPO,
  PUBLISHRANK_URL,
  PUBLISHRANK_VERSION,
  softwareSchema,
  pageMetadata,
} from "@/lib/site";

export const metadata = pageMetadata(
  "/publishrank",
  "PublishRank WordPress SEO Plugin",
  "Explore PublishRank, the free open-source WordPress SEO plugin built by UmarJaum for publishers and newsrooms, with Mastodon publishing, schema aggregation and llms.txt discovery.",
);

export default function PublishRank() {
  const graph = {
    ...baseGraph("/publishrank"),
    "@graph": [...baseGraph("/publishrank")["@graph"], softwareSchema()],
  };

  return (
    <>
      <PageHeading
        eyebrow="02 / Flagship product"
        title="PublishRank is SEO infrastructure for publishers."
        intro="A free, open-source WordPress plugin for the work between writing a story and helping the right people find it."
      />
      <section className="page-content">
        <div className="wrap">
          <div className="hero-actions">
            <a className="button button-primary" href={PUBLISHRANK_URL}>Visit PublishRank ↗</a>
            <a className="button button-ghost" href={DOWNLOAD_URL}>Download the plugin</a>
            <a className="button button-ghost" href={PUBLISHRANK_REPO}>View source ↗</a>
          </div>

          <div className="content-grid" style={{ marginTop: 70 }}>
            <div className="prose">
              <h2>Publishing tools beyond metadata.</h2>
              <ul>
                <li id="mastodon"><strong>Mastodon publishing:</strong> share posts with optional featured images, accessibility text and per-post content warnings.</li>
                <li id="observability"><strong>Schema Aggregator endpoint:</strong> expose a machine-readable view of connected structured data.</li>
                <li id="discovery"><strong>llms.txt discovery:</strong> publish an optional guide for AI crawlers alongside news and XML sitemaps.</li>
                <li id="newsroom"><strong>Editorial operations:</strong> connect article review, newsroom workflows, redirects and technical diagnostics.</li>
              </ul>
            </div>
            <div className="prose">
              <h2>AI discovery, without ranking promises.</h2>
              <p>
                The Schema Aggregator endpoint and optional llms.txt are available discovery tools.
                Broader AI capabilities are rolling out soon; none of these features guarantees
                search rankings, rich results or AI citations.
              </p>
              <p>
                Current release: <strong>{PUBLISHRANK_VERSION}</strong>. Review the release notes and
                documentation before enabling features on a live site.
              </p>
              <Link className="button button-ghost" href={absoluteUrl("/work#observability")}>
                See selected product work ↗
              </Link>
            </div>
          </div>

          <div className="work-grid" style={{ marginTop: 70 }}>
            <Evidence
              src="/media/screens/publishrank-2.12.1/desktop-1440/08-publishrank-schema-markup.png"
              alt="PublishRank schema settings screen in the WordPress admin"
              label="SCHEMA / CONNECTED GRAPH"
              caption={`Earlier interface capture from v2.12.1; the current release is v${PUBLISHRANK_VERSION}.`}
            />
            <Evidence
              src="/media/screens/publishrank-2.12.1/desktop-1440/28-publishrank-seo-score.png"
              alt="PublishRank article review screen in the WordPress admin"
              label="SEO / ARTICLE REVIEW"
              caption="A checklist for the editor, not a promise of rankings; this capture is from v2.12.1."
            />
            <Evidence
              src="/media/screens/publishrank-2.12.1/desktop-1440/34-publishrank-newsroom.png"
              alt="PublishRank newsroom screen in the WordPress admin"
              label="NEWSROOM / WORKFLOW"
              caption="Editorial planning and technical ownership belong in the same conversation; capture from v2.12.1."
            />
          </div>
        </div>
      </section>
      <JsonLd data={graph} />
    </>
  );
}
