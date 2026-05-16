/**
 * Post-build SSG: renders each public route to dist/<path>/index.html with per-route meta (Helmet).
 * Run after `vite build` and `vite build --ssr`.
 */
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const root = path.resolve(import.meta.dirname, "..");
const distDir = path.join(root, "dist");
const ssrDir = path.join(root, "dist-ssr");

const SSG_HEAD_RE = /<!--ssg-head-->[\s\S]*?<!--\/ssg-head-->/;
const SSG_BODY_RE = /<!--ssg-body-->[\s\S]*?<!--\/ssg-body-->/;

function injectTemplate(template, headHtml, bodyHtml) {
  const headBlock = headHtml
    ? `<!--ssg-head-->\n    ${headHtml}\n    <!--/ssg-head-->`
    : "<!--ssg-head--><!--/ssg-head-->";
  const bodyBlock = `<!--ssg-body-->${bodyHtml}<!--/ssg-body-->`;

  return template.replace(SSG_HEAD_RE, headBlock).replace(SSG_BODY_RE, bodyBlock);
}

function outFileForPathname(pathname) {
  if (pathname === "/") {
    return path.join(distDir, "index.html");
  }
  return path.join(distDir, pathname.slice(1), "index.html");
}

async function main() {
  const templatePath = path.join(distDir, "index.html");
  if (!fs.existsSync(templatePath)) {
    console.error("[prerender] dist/index.html missing — run vite build first.");
    process.exit(1);
  }

  const ssrEntry = path.join(ssrDir, "entry-server.js");
  if (!fs.existsSync(ssrEntry)) {
    console.error("[prerender] dist-ssr/entry-server.js missing — run vite build --ssr first.");
    process.exit(1);
  }

  const template = fs.readFileSync(templatePath, "utf8");
  const { getAllSitemapPathnames } = await import(
    pathToFileURL(path.join(root, "src/seo/sitemapPaths.js")).href
  );
  const { renderPage } = await import(pathToFileURL(ssrEntry).href);

  const pathnames = getAllSitemapPathnames();
  let ok = 0;

  for (const pathname of pathnames) {
    try {
      const { html, headHtml } = await renderPage(pathname);
      const pageHtml = injectTemplate(template, headHtml, html);
      const outPath = outFileForPathname(pathname);
      fs.mkdirSync(path.dirname(outPath), { recursive: true });
      fs.writeFileSync(outPath, pageHtml, "utf8");
      ok += 1;
    } catch (err) {
      console.error(`[prerender] failed ${pathname}:`, err);
      process.exitCode = 1;
    }
  }

  console.log(`[prerender] wrote ${ok}/${pathnames.length} HTML files to dist/`);
}

main();
