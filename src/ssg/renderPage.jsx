import { PassThrough } from "node:stream";
import { renderToPipeableStream } from "react-dom/server";
import { HelmetProvider } from "react-helmet-async";
import { StaticRouter } from "react-router-dom/server";
import AppShell from "../router/AppShell.jsx";

/**
 * Renders a route to HTML + head tags (react-helmet-async) for static prerender.
 * @param {string} pathname Pathname including leading slash
 */
export async function renderPage(pathname) {
  const helmetContext = {};
  const location = pathname.startsWith("/") ? pathname : `/${pathname}`;

  const app = (
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={location}>
        <AppShell />
      </StaticRouter>
    </HelmetProvider>
  );

  const html = await new Promise((resolve, reject) => {
    const pass = new PassThrough();
    const chunks = [];

    pass.on("data", (chunk) => chunks.push(chunk));
    pass.on("end", () => resolve(Buffer.concat(chunks).toString("utf8")));
    pass.on("error", reject);

    const { pipe, abort } = renderToPipeableStream(app, {
      onAllReady() {
        pipe(pass);
      },
      onError(error) {
        abort();
        reject(error);
      }
    });
  });

  const { helmet } = helmetContext;
  // prioritizeSeoTags (SEO.jsx) puts canonical, description, OG in helmet.priority during SSR
  const headHtml = [
    helmet?.priority?.toString(),
    helmet?.title?.toString(),
    helmet?.meta?.toString(),
    helmet?.link?.toString(),
    helmet?.script?.toString()
  ]
    .filter(Boolean)
    .join("\n    ");

  return { html, headHtml };
}
