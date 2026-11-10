import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Page not found", description: "The requested UmarJaum page does not exist.", robots: { index: false, follow: false } };

export default function NotFound() { return <section className="page-heading"><div className="wrap"><p className="eyebrow">404 / Not found</p><h1>This page is not in the system.</h1><p className="lede">The URL may have moved, or the page may never have existed. Start from the homepage or explore the founder’s work.</p><div className="hero-actions"><Link className="button button-primary" href="/">Back home ↗</Link><Link className="button button-ghost" href="/work">See selected work</Link></div></div></section>; }
