'use client';

import Link from "next/link";
import { useState } from "react";
import { nav } from "@/lib/content";
import { GITHUB_URL, PUBLISHRANK_URL, SITE_NAME, SOCIALS } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  return <header className="site-header"><div className="wrap nav-wrap"><Link href="/" className="wordmark" onClick={() => setOpen(false)}><span className="monogram">UJ</span><span>UmarJaum</span></Link><button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation">{open ? "Close" : "Menu"}</button><nav className={open ? "nav open" : "nav"}>{nav.map((item) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>)}<a className="nav-cta" href={PUBLISHRANK_URL} target="_blank" rel="noreferrer">PublishRank ↗</a></nav></div></header>;
}

export function Footer() {
  return <footer className="footer"><div className="wrap footer-grid"><div><div className="wordmark"><span className="monogram">UJ</span><span>UmarJaum</span></div><p className="muted footer-copy">Muhammad Umar Jabbar<br />CEO & developer, PublishRank</p></div><div><p className="eyebrow">Find the work</p><div className="footer-links"><Link href="/about">About the founder</Link><Link href="/publishrank">PublishRank</Link><Link href="/work">Selected work</Link><Link href="/faq">Questions</Link></div></div><div><p className="eyebrow">Elsewhere</p><div className="footer-links"><a href={SOCIALS.github}>GitHub</a><a href={SOCIALS.x}>X / @UmarJaum</a><a href={SOCIALS.facebook}>Facebook / umarjaumofficial</a><a href={SOCIALS.mastodon}>Mastodon / @UmarJaum</a></div></div></div><div className="wrap footer-bottom"><span>© {new Date().getFullYear()} UmarJaum</span><span><Link href="/privacy">Privacy</Link> · <a href={GITHUB_URL}>Source</a></span></div></footer>;
}
