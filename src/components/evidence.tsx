import Image from "next/image";

export function Evidence({ src, alt, label, caption }: { src: string; alt: string; label: string; caption: string }) {
  return <figure className="evidence"><div className="evidence-top"><span className="eyebrow">Interface evidence</span><span className="mono">{label}</span></div><Image src={src} alt={alt} width={1440} height={1000} className="evidence-image" /><figcaption>{caption}</figcaption></figure>;
}
