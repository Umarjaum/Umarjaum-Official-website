import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

const publicPaths = [
  "/",
  "/about",
  "/publishrank",
  "/work",
  "/faq",
  "/contact",
  "/privacy",
  "/terms",
  "/cookies",
  "/disclaimer",
  "/security",
  "/accessibility",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return publicPaths.map((path) => ({
    url: `${SITE_URL}${path === "/" ? "" : path}`,
  }));
}
