import { FaqList } from "@/components/faq-list";
import { JsonLd } from "@/components/json-ld";
import { PageHeading } from "@/components/page-heading";
import { faqs } from "@/lib/content";
import { absoluteUrl, baseGraph, pageMetadata} from "@/lib/site";
export const metadata = pageMetadata("/faq", "Frequently asked questions", "Direct answers about UmarJaum, Muhammad Umar Jabbar and the PublishRank WordPress SEO Plugin.");
export default function FAQ() { const graph = { ...baseGraph("/faq"), "@graph": [...baseGraph("/faq")["@graph"], { "@type": "FAQPage", "@id": `${absoluteUrl("/faq")}#faq`, mainEntity: faqs.map(([name, text]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text } })) }] }; return <><PageHeading eyebrow="04 / FAQ" title="Direct answers, without the launch copy." intro="A short reference for who UmarJaum is, what PublishRank does and how to start a conversation." /><section className="page-content"><div className="wrap"><FaqList /></div></section><JsonLd data={graph} /></>; }
