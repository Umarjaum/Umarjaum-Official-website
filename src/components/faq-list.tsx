'use client';

import { useState } from "react";
import { faqs } from "@/lib/content";

export function FaqList() {
  const [active, setActive] = useState<number | null>(0);
  return <div className="faq-list">{faqs.map(([question, answer], index) => <div className="faq-item" key={question}><button onClick={() => setActive(active === index ? null : index)} aria-expanded={active === index}><span>{question}</span><span className="faq-plus">{active === index ? "−" : "+"}</span></button>{active === index && <div className="faq-answer"><p>{answer}</p></div>}</div>)}</div>;
}
