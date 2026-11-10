import type { LegalContent } from "@/components/site/LegalPage";

export const legal: Record<
  "terms" | "cookies" | "disclaimer" | "security" | "accessibility" | "privacy",
  LegalContent
> = {
  privacy: {
    kind: "Privacy",
    title: "A small site, a clear policy.",
    intro: "This page explains the basic information this public website may process.",
    sections: [
      {
        heading: "What this website does",
        body: "This site publishes information about Muhammad Umar Jabbar, UmarJaum and PublishRank. It does not sell personal information.",
      },
      {
        heading: "Hosting and links",
        body: "Hosting providers may process standard technical request data such as IP address, user agent and request time to deliver and protect the site. Links to GitHub, social networks and PublishRank take you to those services, which have their own policies.",
      },
      {
        heading: "Advertising status",
        body: "This website currently does not display Google AdSense, personalized advertising, advertising trackers or remarketing tags. If advertising is introduced, this policy, the Cookie Policy and consent controls will be updated before non-essential advertising technology loads.",
      },
      {
        heading: "Contact",
        body: "If you contact UmarJaum through a social platform or external service, that message is processed by the service you choose. Do not send passwords or sensitive personal information.",
      },
      {
        heading: "Not legal advice",
        body: "This page is general information, not legal advice. Review it for the actual deployment and applicable jurisdiction before collecting personal data or enabling advertising.",
      },
    ],
  },
  terms: {
    kind: "Terms",
    title: "Terms of use",
    intro: "The rules for using this website and following links to PublishRank resources.",
    sections: [
      {
        heading: "Using this website",
        body: "By using this website you agree to use it lawfully and respectfully. Product information is provided for general information and does not guarantee rankings, traffic, indexing, rich results or business outcomes.",
      },
      {
        heading: "PublishRank license",
        body: "PublishRank is distributed under the license that accompanies the release. Back up your WordPress site and test changes on staging before installing a release.",
      },
      {
        heading: "Acceptable conduct",
        body: "Do not disrupt this website, send spam through external channels, or submit passwords, API keys or confidential information through a contact message.",
      },
    ],
  },
  cookies: {
    kind: "Cookies",
    title: "Cookie policy",
    intro: "A plain-language explanation of browser storage and advertising technology.",
    sections: [
      {
        heading: "What we store",
        body: "This website does not currently set advertising, analytics or remarketing cookies. It uses only the browser storage needed for the interface experience, if any.",
      },
      {
        heading: "Advertising",
        body: "No Google AdSense or other advertising network is active on this website. If advertising is introduced, this policy will be updated and consent or opt-out controls will be provided where required before non-essential advertising technology loads.",
      },
      {
        heading: "Third-party services",
        body: "External services such as GitHub, social networks, fonts or hosting providers have their own policies and may process ordinary request data when you follow their links or load their resources.",
      },
    ],
  },
  disclaimer: {
    kind: "Disclaimer",
    title: "Disclaimer",
    intro: "Important limits on what this website and PublishRank can promise.",
    sections: [
      {
        heading: "No ranking promises",
        body: "SEO outcomes depend on content quality, competition, technical setup and decisions made by search engines. UmarJaum and PublishRank do not promise rankings, traffic, indexing, Google News or Discover inclusion, rich results or AI citations.",
      },
      {
        heading: "Informational content",
        body: "Comparisons, examples and product descriptions are informational and may change. Test software on a staging site and maintain your own backups.",
      },
      {
        heading: "Not professional advice",
        body: "This content is not legal, financial, tax, medical or professional advice.",
      },
    ],
  },
  security: {
    kind: "Security",
    title: "Security policy",
    intro: "How to report a security concern responsibly.",
    sections: [
      {
        heading: "Responsible disclosure",
        body: "Do not publish sensitive vulnerability details publicly before the project has had a reasonable opportunity to investigate. Contact UmarJaum through the official GitHub repository or the contact page with a clear reproduction path.",
      },
      {
        heading: "What to include",
        body: "Never include passwords, access tokens, private keys or personal data in a report. We may ask for a safe test case and affected version.",
      },
    ],
  },
  accessibility: {
    kind: "Accessibility",
    title: "Accessibility",
    intro:
      "The goal is a site that remains usable across devices, input methods and motion preferences.",
    sections: [
      {
        heading: "Our commitments",
        body: "The website uses semantic headings, keyboard-operable navigation, visible focus states, alternative text for meaningful images and reduced-motion support — every animation is disabled when your device asks for less motion.",
      },
      {
        heading: "Report a barrier",
        body: "If a page or interaction creates a barrier, report the URL and what happened through the contact page. Include the device, browser and assistive technology when relevant.",
      },
    ],
  },
};
