import { useEffect } from "react";
import { Link, Navigate, useLocation } from "react-router-dom";
import SeoHead from "../seo/SeoHead";
import JsonLd from "../seo/JsonLd";
import SiteHeader from "../components/SiteHeader";
import Breadcrumbs from "../components/Breadcrumbs";
import { SITE_ORIGIN } from "../seo/site";
import {
  breadcrumbListNode,
  webPageNode,
  faqPageNode,
  coreEntityGraph,
  serviceNode,
  AREA_SERVED_NAMES
} from "../seo/schemaBuilders";
import { getLocalLandingByPathname } from "../data/localSeoLandings";
import { getService } from "../data/servicePages";

export default function LocalServiceLanding() {
  const { pathname } = useLocation();
  const page = getLocalLandingByPathname(pathname);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  if (!page) {
    return <Navigate to="/" replace />;
  }

  const serviceHref = page.serviceSlug ? `/services/${page.serviceSlug}` : "/services";
  const locationHref = page.locationSlug ? `/locations/${page.locationSlug}` : null;
  const svc = page.serviceSlug ? getService(page.serviceSlug) : null;

  const graph = [
    ...coreEntityGraph(),
    webPageNode({
      pathname,
      name: page.metaTitle,
      description: page.metaDescription
    }),
    breadcrumbListNode([
      { name: "Home", url: `${SITE_ORIGIN}/` },
      { name: "Services", url: `${SITE_ORIGIN}/services` },
      { name: page.navLabel, url: `${SITE_ORIGIN}${pathname}` }
    ]),
    faqPageNode(page.faqs.map((f) => ({ question: f.q, answer: f.a })), { pathname }),
    ...(svc
      ? [
          serviceNode({
            idSuffix: svc.slug,
            name: svc.h1,
            description: svc.heroLead,
            areaServed: AREA_SERVED_NAMES
          })
        ]
      : [])
  ];

  return (
    <div className="site-root">
      <SeoHead title={page.metaTitle} description={page.metaDescription} pathname={pathname} rawTitle />
      <JsonLd id={`rab-jsonld-local-${page.route}`} data={{ "@context": "https://schema.org", "@graph": graph }} />
      <SiteHeader />
      <main className="seo-page-main">
        <div className="container seo-page-inner">
          <Breadcrumbs
            items={[
              { label: "Home", to: "/" },
              { label: "Services", to: "/services" },
              { label: page.navLabel, to: pathname }
            ]}
          />
          <header className="seo-hero">
            <p className="seo-hero-eyebrow">Local service focus</p>
            <h1>{page.h1}</h1>
            <p className="seo-hero-lead">{page.lead}</p>
            <div className="seo-hero-actions">
              <a className="button button-primary" href="tel:+917814421210">
                Call +91 7814421210
              </a>
              <a className="button button-secondary" href="mailto:info@rabindia.co.in">
                Email info@rabindia.co.in
              </a>
              <Link className="button button-secondary" to={{ pathname: "/", hash: "contact" }}>
                Contact &amp; map
              </Link>
            </div>
            <p className="seo-context-links">
              <Link to={serviceHref}>
                {page.serviceSlug ? "Full service overview" : "Browse all services"}
              </Link>
              {locationHref ? (
                <>
                  {" · "}
                  <Link to={locationHref}>City context page</Link>
                </>
              ) : (
                <>
                  {" · "}
                  <Link to="/locations">All service areas</Link>
                </>
              )}
            </p>
          </header>

          {page.sections.map((sec, idx) => (
            <section className="seo-panel" key={sec.title} aria-labelledby={`sec-${page.route}-${idx}`}>
              <h2 id={`sec-${page.route}-${idx}`} className="seo-panel-title">
                {sec.title}
              </h2>
              <p className="seo-prose-block">{sec.body}</p>
            </section>
          ))}

          <section className="seo-panel" aria-labelledby={`faq-${page.route}`}>
            <h2 id={`faq-${page.route}`} className="seo-panel-title">
              Questions we hear on site walks
            </h2>
            <dl className="seo-faq">
              {page.faqs.map((f) => (
                <div className="seo-faq-item" key={f.q}>
                  <dt className="seo-faq-q">{f.q}</dt>
                  <dd className="seo-faq-a">{f.a}</dd>
                </div>
              ))}
            </dl>
          </section>

          <figure className="seo-figure-note" role="note">
            <figcaption>
              <strong>Image naming tip for your own DAM:</strong> when you add site photos, filenames such as{" "}
              <code>industrial-cctv-camera-baddi-plant.webp</code> help internal search—not a ranking shortcut on their
              own—paired with clear <span lang="en">alt</span> text written for people.
            </figcaption>
          </figure>

          <nav className="seo-inline-nav" aria-label="Related pages">
            <span className="seo-inline-label">Explore:</span>
            <Link to="/blog">Blog</Link>
            <Link to="/locations">Locations</Link>
            <Link to="/services">All services</Link>
          </nav>
        </div>
      </main>
      <footer className="footer">
        <div className="container">
          © {new Date().getFullYear()} RAB India. Built for secure, modern industrial operations.
        </div>
      </footer>
    </div>
  );
}
