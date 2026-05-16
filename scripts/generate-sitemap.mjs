import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { SITE_ORIGIN } from "../src/seo/site.js";
import { getAllSitemapPathnames } from "../src/seo/sitemapPaths.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const publicDir = join(root, "public");
const sitemapFile = join(publicDir, "sitemap.xml");
const robotsFile = join(publicDir, "robots.txt");

/** XML-escape text inside element bodies (defensive for unusual path segments). */
function escapeXml(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function absoluteLoc(pathname) {
  const origin = SITE_ORIGIN.replace(/\/$/, "");
  const path = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return `${origin}${path}`;
}

const urls = getAllSitemapPathnames().sort((a, b) => {
  if (a === "/") return -1;
  if (b === "/") return 1;
  return a.localeCompare(b, "en");
});

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
    <loc>${escapeXml(absoluteLoc(p))}</loc>
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

writeFileSync(sitemapFile, xml, "utf8");
console.log(`[sitemap] wrote ${urls.length} URLs -> ${sitemapFile}`);

const robots =
  `User-agent: *
Allow: /

Sitemap: ${absoluteLoc("/sitemap.xml")}
` + "\n";

writeFileSync(robotsFile, robots, "utf8");
console.log(`[robots] wrote -> ${robotsFile}`);
