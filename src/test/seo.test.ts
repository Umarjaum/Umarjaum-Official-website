import { describe, expect, it } from "vitest";
import { faqSchema, pageHead } from "@/lib/seo";
import { SITE_URL } from "@/lib/site";

const metaValue = (head: ReturnType<typeof pageHead>, key: string) =>
  head.meta.find((m) => m["property"] === key || m["name"] === key)?.["content"];

const graphFor = (head: ReturnType<typeof pageHead>) => {
  const jsonLd = head.scripts.find((script) => script.type === "application/ld+json")?.children;
  return JSON.parse(jsonLd ?? "{}") as {
    "@graph": Array<Record<string, unknown> & { "@type"?: string; "@id"?: string }>;
  };
};

describe("page SEO metadata", () => {
  it("a page without its own image still gets the 1200x630 default card", () => {
    const head = pageHead({ path: "/privacy", title: "Privacy", description: "Privacy details." });
    expect(metaValue(head, "og:image")).toBe(`${SITE_URL}/og/og-default.jpg`);
    expect(metaValue(head, "twitter:image")).toBe(`${SITE_URL}/og/og-default.jpg`);
    expect(metaValue(head, "og:image:width")).toBe("1200");
    expect(metaValue(head, "og:image:height")).toBe("630");
  });

  it("canonical points at the public origin and preserves the page path", () => {
    const head = pageHead({ path: "/about", title: "About", description: "About UmarJaum." });
    expect(head.links.find((link) => link.rel === "canonical")?.href).toBe(
      "https://umarjaum.vercel.app/about",
    );
  });

  it("provides indexable directives and connected page and breadcrumb entities", () => {
    const head = pageHead({ path: "/about", title: "About", description: "About UmarJaum." });
    const graph = graphFor(head)["@graph"];
    const page = graph.find((entity) => entity["@id"] === `${SITE_URL}/about#webpage`);
    const breadcrumb = graph.find((entity) => entity["@type"] === "BreadcrumbList");

    expect(metaValue(head, "robots")).toContain("index, follow");
    expect(page?.["isPartOf"]).toEqual({ "@id": `${SITE_URL}/#website` });
    expect(page?.["breadcrumb"]).toEqual({ "@id": `${SITE_URL}/about#breadcrumb` });
    expect(breadcrumb?.["itemListElement"]).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ position: 1, name: "Home", item: SITE_URL }),
        expect.objectContaining({ position: 2, name: "About", item: `${SITE_URL}/about` }),
      ]),
    );
  });

  it("supports deliberate noindex metadata without changing the canonical URL", () => {
    const head = pageHead({
      path: "/preview",
      title: "Preview",
      description: "A private preview page.",
      noindex: true,
    });
    expect(metaValue(head, "robots")).toBe("noindex, nofollow");
    expect(head.links.find((link) => link.rel === "canonical")?.href).toBe(
      "https://umarjaum.vercel.app/preview",
    );
  });

  it("FAQ structured data can be included as a page graph entity", () => {
    const head = pageHead({
      path: "/faq",
      title: "FAQ",
      description: "Answers to common questions.",
      extraGraph: [faqSchema("/faq")],
    });
    const faq = graphFor(head)["@graph"].find((entity) => entity["@type"] === "FAQPage");
    expect(faq?.["@id"]).toBe(`${SITE_URL}/faq#faq`);
    expect(faq?.["mainEntity"]).toEqual(expect.any(Array));
  });
});
