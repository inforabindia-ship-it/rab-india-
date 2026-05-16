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
import { getCctvLocalLandingByRoute } from "../data/cctvLocalLandings";
import cctvProduct from "../assets/cctv-product.png";

export default function CctvLocalLandingPage() {
  const { pathname } = useLocation();
  const route = pathname.replace(/^\//, "").replace(/\/$/, "");
  const page = getCctvLocalLandingByRoute(route);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  if (!page) {
    return <Navigate to="/services/cctv-solutions" replace />;
  }

  const pagePath = `/${page.route}`;

  const graph = [
    ...coreEntityGraph(),
    webPageNode({
      pathname: pagePath,
      name: page.metaTitle,
      description: page.metaDescription
    }),
    serviceNode({
      idSuffix: "cctv-solutions",
      name: page.h1,
      description: page.heroLead,
      areaServed: AREA_SERVED_NAMES
    }),
    breadcrumbListNode([
      { name: "Home", url: `${SITE_ORIGIN}/` },
      { name: "Services", url: `${SITE_ORIGIN}/services` },
      { name: page.breadcrumbLabel, url: `${SITE_ORIGIN}${pagePath}` }
    ]),
    faqPageNode(
      page.faqs.map((f) => ({ question: f.q, answer: f.a })),
      { pathname: pagePath }
    )
  ];

  return (
    <div className="site-root">
      <SeoHead title={page.metaTitle} description={page.metaDescription} pathname={pagePath} rawTitle />
      <JsonLd id={`rab-jsonld-local-${page.route}`} data={{ "@context": "https://schema.org", "@graph": graph }} />
      <SiteHeader />
      <main className="seo-page-main">
        <div className="container seo-page-inner seo-page-inner--wide">
          <Breadcrumbs
            items={[
              { label: "Home", to: "/" },
              { label: "Services", to: "/services" },
              { label: page.breadcrumbLabel, to: pagePath }
            ]}
          />

          <header className="seo-hero seo-hero-split">
            <div className="seo-hero-split-copy">
              <p className="seo-hero-eyebrow">{page.eyebrow}</p>
              <h1>{page.h1}</h1>
              <p className="seo-hero-lead">{page.heroLead}</p>
              <div className="seo-hero-actions">
                <a className="button button-primary" href="tel:+917814421210">
                  Call +91 7814421210
                </a>
                <Link className="button button-secondary" to={{ pathname: "/", hash: "contact" }}>
                  Request site survey
                </Link>
              </div>
              <p className="seo-context-links">
                {page.contextLinks.map((link, i) => (
                  <span key={link.to}>
                    {i > 0 ? " · " : null}
                    <Link to={link.to}>{link.label}</Link>
                  </span>
                ))}
              </p>
            </div>
            <div className="seo-hero-split-media">
              <img
                src={cctvProduct}
                alt={page.imageAlt}
                width={640}
                height={400}
                loading="eager"
                decoding="async"
              />
            </div>
          </header>

          <section className="seo-panel" aria-labelledby={`why-${page.route}`}>
            <h2 id={`why-${page.route}`} className="seo-panel-title">
              {page.whyTitle}
            </h2>
            <p className="seo-prose-block">{page.whyIntro}</p>
            <div className="grid-3 seo-benefit-grid">
              {page.whyChoose.map((item) => (
                <article className="card" key={item.title}>
                  <div className="card-body">
                    <h3 className="seo-card-title">{item.title}</h3>
                    <p className="seo-card-desc">{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="seo-panel" aria-labelledby={`ind-${page.route}`}>
            <h2 id={`ind-${page.route}`} className="seo-panel-title">
              Industries we serve in the {page.breadcrumbLabel.replace("CCTV in ", "")} area
            </h2>
            <p className="seo-prose-block">{page.industriesIntro}</p>
            <ul className="seo-bullet-list">
              {page.industries.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="seo-panel" aria-labelledby={`faq-${page.route}`}>
            <h2 id={`faq-${page.route}`} className="seo-panel-title">
              Frequently asked questions
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

          <section className="seo-panel seo-panel--cta" aria-labelledby={`cta-${page.route}`}>
            <h2 id={`cta-${page.route}`} className="seo-panel-title">
              {page.ctaTitle}
            </h2>
            <p>{page.ctaBody}</p>
            <div className="seo-hero-actions">
              <a className="button button-primary" href="tel:+917814421210">
                Call +91 7814421210
              </a>
              <a className="button button-secondary" href="mailto:info@rabindia.co.in">
                Email info@rabindia.co.in
              </a>
            </div>
          </section>

          <nav className="seo-inline-nav" aria-label="Related pages">
            <span className="seo-inline-label">Explore:</span>
            <Link to="/services/cctv-solutions">All CCTV services</Link>
            {page.exploreLinks.map((link) => (
              <Link key={link.to} to={link.to}>
                {link.label}
              </Link>
            ))}
            <Link to="/locations">Service areas</Link>
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
