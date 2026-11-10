import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap { return ["/", "/about", "/publishrank", "/work", "/faq", "/contact", "/privacy", "/terms", "/cookies", "/disclaimer", "/security", "/accessibility"].map((path) => ({ url: `${SITE_URL}${path === "/" ? "" : path}`, lastModified: new Date(), changeFrequency: path === "/" ? "weekly" : "monthly", priority: path === "/" ? 1 : 0.7 })); }
