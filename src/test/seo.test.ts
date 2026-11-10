import { describe, expect, it } from "vitest";
import { pageHead } from "@/lib/seo";
import { SITE_URL } from "@/lib/site";

const metaValue = (head: ReturnType<typeof pageHead>, key: string) =>
  head.meta.find((m) => m["property"] === key || m["name"] === key)?.["content"];

describe("share images", () => {
  it("a page without its own image still gets the 1200x630 default card", () => {
    const head = pageHead({ path: "/privacy", title: "Privacy", description: "x" });
    expect(metaValue(head, "og:image")).toBe(`${SITE_URL}/og/og-default.jpg`);
    expect(metaValue(head, "twitter:image")).toBe(`${SITE_URL}/og/og-default.jpg`);
    expect(metaValue(head, "og:image:width")).toBe("1200");
    expect(metaValue(head, "og:image:height")).toBe("630");
  });

  it("canonical points at the new vercel address", () => {
    const head = pageHead({ path: "/about", title: "About", description: "x" });
    expect(head.links[0]?.href).toBe("https://umarjaum.vercel.app/about");
  });
});
