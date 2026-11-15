#!/usr/bin/env node

/**
 * Dependency-free structural audit for file-based public content routes.
 * This intentionally checks conventions, not copy quality or search performance.
 */
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const routesDirectory = new URL("../src/routes/", import.meta.url);
const routeFiles = readdirSync(routesDirectory)
  .filter((file) => file.endsWith(".tsx") && file !== "__root.tsx")
  .sort();
const errors = [];

if (routeFiles.length === 0) {
  console.error("SEO audit failed: no content route files found in src/routes/.");
  process.exit(1);
}

for (const file of routeFiles) {
  const source = readFileSync(join(routesDirectory.pathname, file), "utf8");
  const isSitemapFile = /staticData:\s*\{[^}]*sitemap:\s*(?:true|false|["']exclude-subtree["'])/.test(source);
  if (!isSitemapFile) {
    errors.push(`${file}: add an explicit staticData.sitemap decision.`);
  }

  const usesPageHead = /head:\s*\(\)\s*=>\s*pageHead\s*\(/.test(source);
  if (!usesPageHead) {
    errors.push(`${file}: build page metadata with pageHead() from src/lib/seo.ts.`);
    continue;
  }

  const headOptions = source.match(/head:\s*\(\)\s*=>\s*pageHead\s*\(\s*\{([\s\S]*?)\}\s*\)/)?.[1];
  if (!headOptions) {
    errors.push(`${file}: pageHead() must receive a statically reviewable options object.`);
    continue;
  }

  for (const field of ["path", "title", "description"]) {
    if (!new RegExp(`\\b${field}\\s*:`).test(headOptions)) {
      errors.push(`${file}: pageHead() is missing its ${field}.`);
    }
  }
}

if (errors.length > 0) {
  console.error("SEO content structure audit failed:\n- " + errors.join("\n- "));
  process.exit(1);
}

console.log(`SEO content structure audit passed for ${routeFiles.length} route files.`);
