import { JsonLd } from "@/components/json-ld";
import { PageHeading } from "@/components/page-heading";
import { absoluteUrl, baseGraph } from "@/lib/site";

const sections: Record<string, { title: string; intro: string; paragraphs: string[] }> = {
  terms: {
    title: "Terms of use",
    intro: "The rules for using this website and following links to PublishRank resources.",
    paragraphs: ["By using this website you agree to use it lawfully and respectfully. Product information is provided for general information and does not guarantee rankings, traffic, indexing, rich results or business outcomes.", "PublishRank is distributed under the license that accompanies the release. Back up your WordPress site and test changes on staging before installing a release.", "Do not disrupt this website, send spam through external channels, or submit passwords, API keys or confidential information through a contact message."],
  },
  cookies: {
    title: "Cookie policy",
    intro: "A plain-language explanation of browser storage and advertising technology.",
    paragraphs: ["This website does not currently set advertising, analytics or remarketing cookies. It uses only the browser storage needed for the interface experience, if any.", "No Google AdSense or other advertising network is active on this website. If advertising is introduced, this policy will be updated and consent or opt-out controls will be provided where required before non-essential advertising technology loads.", "External services such as GitHub, social networks, fonts or hosting providers have their own policies and may process ordinary request data when you follow their links or load their resources."],
  },
  disclaimer: {
    title: "Disclaimer",
    intro: "Important limits on what this website and PublishRank can promise.",
    paragraphs: ["SEO outcomes depend on content quality, competition, technical setup and decisions made by search engines. UmarJaum and PublishRank do not promise rankings, traffic, indexing, Google News or Discover inclusion, rich results or AI citations.", "Comparisons, examples and product descriptions are informational and may change. Test software on a staging site and maintain your own backups.", "This content is not legal, financial, tax, medical or professional advice."],
  },
  security: {
    title: "Security policy",
    intro: "How to report a security concern responsibly.",
    paragraphs: ["Do not publish sensitive vulnerability details publicly before the project has had a reasonable opportunity to investigate. Contact UmarJaum through the official GitHub repository or the contact page with a clear reproduction path.", "Never include passwords, access tokens, private keys or personal data in a report. We may ask for a safe test case and affected version."],
  },
  accessibility: {
    title: "Accessibility",
    intro: "The goal is a site that remains usable across devices, input methods and motion preferences.",
    paragraphs: ["The website uses semantic headings, keyboard-operable navigation, visible focus states, alternative text for meaningful images and reduced-motion support.", "If a page or interaction creates a barrier, report the URL and what happened through the contact page. Include the device, browser and assistive technology when relevant."],
  },
};

export function LegalPage({ kind }: { kind: keyof typeof sections }) {
  const section = sections[kind];
  const path = `/${kind}`;
  const graph = { ...baseGraph(path), "@graph": [...baseGraph(path)["@graph"], { "@type": "WebPage", "@id": `${absoluteUrl(path)}/#webpage`, url: absoluteUrl(path), name: section.title, isPartOf: { "@id": `${absoluteUrl("/")}#website` } }] };
  return <><PageHeading eyebrow={`Legal / ${kind}`} title={section.title} intro={section.intro} /><section className="page-content"><div className="wrap content-grid"><aside><div className="meta-list"><div className="meta-row"><span>Owner</span><span>UmarJaum</span></div><div className="meta-row"><span>Contact</span><span>UmarJaum@gmail.com</span></div><div className="meta-row"><span>Status</span><span>Plain-language policy</span></div></div></aside><div className="prose">{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></div></section><JsonLd data={graph} /></>;
}
