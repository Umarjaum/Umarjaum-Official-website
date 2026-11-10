import { ArrowUpRight, Globe } from "lucide-react";
import type { SVGProps } from "react";
import { SOCIALS } from "@/lib/site";
import { cn } from "@/lib/utils";

const XIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M18.9 2H22l-6.8 7.8L23 22h-6.2l-4.9-6.4L6.3 22H3.2l7.3-8.3L1 2h6.3l4.4 5.9L18.9 2Zm-1.1 18h1.7L6.3 3.9H4.5L17.8 20Z" />
  </svg>
);
const GitHubIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M12 .5a11.5 11.5 0 0 0-3.6 22.4c.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.9 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.2c0 .3.2.7.8.6A11.5 11.5 0 0 0 12 .5Z" />
  </svg>
);
const FacebookIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M13.5 22v-8.2h2.8l.4-3.2h-3.2V8.5c0-.9.3-1.6 1.6-1.6h1.7V4.1c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.4H7.3v3.2h2.8V22h3.4Z" />
  </svg>
);
const MastodonIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M21.3 8c0-4.3-2.8-5.6-2.8-5.6C17.1 1.8 14.7 1.5 12.2 1.5h-.1c-2.5 0-4.9.3-6.3.9C5.8 2.4 3 3.7 3 8c0 1-.1 2.2 0 3.4.1 4.2.8 8.4 4.7 9.4 1.8.5 3.4.6 4.6.5 2.3-.1 3.5-.8 3.5-.8l-.1-1.6s-1.6.5-3.4.5c-1.8-.1-3.7-.2-4-2.4v-.6s1.8.4 4 .5c1.4.1 2.7-.1 4-.2 2.5-.3 4.7-1.8 5-3.3.4-2.3.4-5.6.4-5.6Zm-3.4 5.6h-2.1V8.5c0-1.1-.5-1.6-1.4-1.6-1 0-1.5.6-1.5 1.9v2.8h-2.1V8.8c0-1.3-.5-1.9-1.5-1.9-.9 0-1.4.5-1.4 1.6v5.1H5.8V8.3c0-1.1.3-1.9.8-2.6.6-.6 1.3-1 2.2-1 1.1 0 1.9.4 2.4 1.3l.5.9.5-.9c.5-.9 1.3-1.3 2.4-1.3.9 0 1.7.3 2.2 1 .6.6.8 1.5.8 2.6v5.3Z" />
  </svg>
);

/** Social accounts. Facebook is "umarjaumofficial"; every other network uses "umarjaum". */
export const socialLinks = [
  { href: SOCIALS.facebook, short: "Facebook", handle: "umarjaumofficial", Icon: FacebookIcon },
  { href: SOCIALS.x, short: "X (Twitter)", handle: "umarjaum", Icon: XIcon },
  { href: SOCIALS.mastodon, short: "Mastodon", handle: "umarjaum", Icon: MastodonIcon },
  { href: SOCIALS.github, short: "GitHub", handle: "umarjaum", Icon: GitHubIcon },
].map((s) => ({ ...s, label: `${s.short} — ${s.handle}` }));

/** Username with a line-break opportunity before the server part ("@user<wbr>@server"). */
export function Handle({ value }: { value: string }) {
  const at = value.indexOf("@", 1);
  if (at <= 0) return <>{value}</>;
  return (
    <>
      {value.slice(0, at)}
      <wbr />
      {value.slice(at)}
    </>
  );
}

/** Round icon buttons. */
export function SocialIcons({ className }: { className?: string }) {
  return (
    <ul className={cn("flex flex-wrap gap-2", className)}>
      {socialLinks.map(({ href, label, Icon }) => (
        <li key={href}>
          <a
            href={href}
            target="_blank"
            rel="me noopener noreferrer"
            aria-label={label}
            title={label}
            className="glass grid size-11 place-items-center rounded-full text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:bg-primary hover:text-primary-foreground"
          >
            <Icon className="size-4" aria-hidden="true" />
          </a>
        </li>
      ))}
    </ul>
  );
}

/** Icon + username list (footer). */
export function SocialHandles({ className }: { className?: string }) {
  return (
    <ul className={cn("space-y-2.5", className)}>
      {socialLinks.map(({ href, short, handle, Icon }) => (
        <li key={href}>
          <a
            href={href}
            target="_blank"
            rel="me noopener noreferrer"
            className="group inline-flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <span className="glass grid size-8 place-items-center rounded-full transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
              <Icon className="size-3.5" aria-hidden="true" />
            </span>
            <span>
              <span className="sr-only">{short}: </span>
              <Handle value={handle} />
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}

/** Large social cards with platform, username and hover lift. */
export function SocialCards({ includeSite = false }: { includeSite?: boolean }) {
  const items = includeSite
    ? [
        ...socialLinks,
        {
          href: SOCIALS.publishrank,
          short: "PublishRank",
          handle: "Official website",
          Icon: Globe,
          label: "PublishRank official website",
        },
      ]
    : socialLinks;
  return (
    <ul
      className={cn("grid gap-4 sm:grid-cols-2", includeSite ? "lg:grid-cols-5" : "lg:grid-cols-4")}
      data-stagger
    >
      {items.map(({ href, short, handle, Icon }) => (
        <li key={href}>
          <a
            href={href}
            target="_blank"
            rel={short === "PublishRank" ? "noopener noreferrer" : "me noopener noreferrer"}
            className="spotlight glass group flex h-full flex-col justify-between gap-10 rounded-3xl p-6 transition-transform duration-500 hover:-translate-y-1.5"
          >
            <span className="flex items-center justify-between">
              <span className="grid size-12 place-items-center rounded-2xl bg-brand-soft text-primary transition-all duration-500 group-hover:-rotate-6 group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <ArrowUpRight className="size-5 text-muted-foreground transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
            </span>
            <span>
              <span className="block text-lg font-bold tracking-tight">{short}</span>
              <span className="mt-1 block text-sm text-muted-foreground">
                <Handle value={handle} />
              </span>
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
