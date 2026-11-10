import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import { Header, Footer } from "@/components/site-shell";
import { Loader } from "@/components/loader";
import { DESCRIPTION, SITE_NAME, SITE_URL, TAGLINE, ogImage } from "@/lib/site";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const mono = IBM_Plex_Mono({ subsets: ["latin"], variable: "--font-mono", weight: ["400", "500", "600"] });

export const metadata: Metadata = { metadataBase: new URL(SITE_URL), title: { default: `${SITE_NAME} — ${TAGLINE}`, template: `%s — ${SITE_NAME}` }, description: DESCRIPTION, alternates: { canonical: SITE_URL }, openGraph: { type: "website", siteName: SITE_NAME, title: `${SITE_NAME} — ${TAGLINE}`, description: DESCRIPTION, url: SITE_URL, images: [{ url: ogImage(), width: 1200, height: 630, alt: "UmarJaum — engineering systems for publishing" }] }, twitter: { card: "summary_large_image", title: `${SITE_NAME} — ${TAGLINE}`, description: DESCRIPTION, images: [ogImage()] }, robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } }, icons: { icon: "/favicon.ico", apple: "/apple-touch-icon.png" } };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${inter.variable} ${mono.variable}`}><Loader /><Header /><main>{children}</main><Footer /></body></html>;
}
