import { describe, expect, it } from "vitest";
import { socialLinks } from "@/components/site/SocialIcons";

const handleOf = (name: string) => socialLinks.find((s) => s.short.startsWith(name))?.handle;

describe("social usernames", () => {
  it("Facebook uses umarjaumofficial", () => {
    expect(handleOf("Facebook")).toBe("umarjaumofficial");
  });

  it("every other network uses umarjaum", () => {
    expect(handleOf("X")).toBe("umarjaum");
    expect(handleOf("GitHub")).toBe("umarjaum");
    expect(handleOf("Mastodon")).toBe("umarjaum");
  });
});
