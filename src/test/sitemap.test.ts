import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";
import { sitemapStaticPaths, sitemapXML } from "@/lib/sitemap";

describe("sitemap", () => {
  const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });
  const paths = sitemapStaticPaths(router);

  it("lists all 12 public pages carried over from the original site", () => {
    expect(paths).toEqual(
      [
        "/",
        "/about",
        "/accessibility",
        "/contact",
        "/cookies",
        "/disclaimer",
        "/faq",
        "/privacy",
        "/publishrank",
        "/security",
        "/terms",
        "/work",
      ].sort(),
    );
  });

  it("never lists the sitemap itself", () => {
    expect(paths).not.toContain("/sitemap.xml");
  });

  it("builds absolute URLs on the public origin", () => {
    const xml = sitemapXML(
      "https://umarjaum.vercel.app",
      paths.map((path) => ({ path })),
    );
    expect(xml).toContain("<loc>https://umarjaum.vercel.app/about</loc>");
  });
});
