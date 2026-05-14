import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { getAllSitemapPathnames } from "../src/seo/sitemapPaths.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const outFile = join(root, "public", "sitemap.xml");

const SITE_ORIGIN = "https://rabindia.co.in";
const urls = getAllSitemapPathnames();
const lastmod = new Date().toISOString().slice(0, 10);

function priorityFor(pathname) {
  if (pathname === "/") return "1.0";
  if (pathname.startsWith("/blog/")) return "0.65";
  if (pathname === "/blog") return "0.7";
  if (pathname.startsWith("/locations/") || pathname.startsWith("/services/")) return "0.75";
  return "0.85";
}

const body = urls
  .map(
    (p) => `  <url>
    <loc>${SITE_ORIGIN}${p}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priorityFor(p)}</priority>
  </url>`
  )
  .join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`;

writeFileSync(outFile, xml, "utf8");
console.log(`[sitemap] wrote ${urls.length} URLs -> ${outFile}`);
