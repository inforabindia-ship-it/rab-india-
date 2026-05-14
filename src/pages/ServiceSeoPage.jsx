import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import SeoHead from "../seo/SeoHead";
import JsonLd from "../seo/JsonLd";
import SiteHeader from "../components/SiteHeader";
import Breadcrumbs from "../components/Breadcrumbs";
import { SITE_ORIGIN } from "../seo/site";
import {
  breadcrumbListNode,
  webPageNode,
  faqPageNode,
  organizationNode,
  serviceNode,
  AREA_SERVED_NAMES
} from "../seo/schemaBuilders";
import { getService } from "../data/servicePages";

export default function ServiceSeoPage() {
  const { slug } = useParams();
  const page = slug ? getService(slug) : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!page) {
    return <Navigate to="/services" replace />;
  }

  const pathname = `/services/${page.slug}`;
  const productPath = page.productDetailId ? `/product/${page.productDetailId}` : "/";

  const graph = [
    organizationNode(),
    webPageNode({
      pathname,
      name: page.metaTitle,
      description: page.metaDescription
    }),
    serviceNode({
      idSuffix: page.slug,
      name: page.h1,
      description: page.heroLead,
      areaServed: AREA_SERVED_NAMES
    }),
    breadcrumbListNode([
      { name: "Home", url: `${SITE_ORIGIN}/` },
      { name: "Services", url: `${SITE_ORIGIN}/services` },
      { name: page.h1, url: `${SITE_ORIGIN}${pathname}` }
    ]),
    faqPageNode(page.faqs.map((f) => ({ question: f.q, answer: f.a })))
  ];

  return (
    <div className="site-root">
      <SeoHead title={page.metaTitle} description={page.metaDescription} pathname={pathname} rawTitle />
      <JsonLd id={`rab-jsonld-svc-${page.slug}`} data={{ "@context": "https://schema.org", "@graph": graph }} />
      <SiteHeader />
      <main className="seo-page-main">
        <div className="container seo-page-inner">
          <Breadcrumbs
            items={[
              { label: "Home", to: "/" },
              { label: "Services", to: "/services" },
              { label: page.h1, to: pathname }
            ]}
          />
          <header className="seo-hero">
            <p className="seo-hero-eyebrow">Service overview</p>
            <h1>{page.h1}</h1>
            <p className="seo-hero-lead">{page.heroLead}</p>
            <div className="seo-hero-actions">
              <Link className="button button-primary" to={{ pathname: "/", hash: "contact" }}>
                Request pricing &amp; survey
              </Link>
              {page.productDetailId ? (
                <Link className="button button-secondary" to={productPath}>
                  Deep-dive product page
                </Link>
              ) : (
                <Link className="button button-secondary" to="/">
                  Back to home
                </Link>
              )}
            </div>
          </header>

          <section className="seo-panel" aria-labelledby={`benefits-${page.slug}`}>
            <h2 id={`benefits-${page.slug}`} className="seo-panel-title">
              Benefits we engineer for
            </h2>
            <ul className="seo-bullet-list">
              {page.benefits.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </section>

          <section className="seo-panel" aria-labelledby={`use-${page.slug}`}>
            <h2 id={`use-${page.slug}`} className="seo-panel-title">
              Typical use cases
            </h2>
            <ul className="seo-bullet-list">
              {page.useCases.map((u) => (
                <li key={u}>{u}</li>
              ))}
            </ul>
          </section>

          <section className="seo-panel" aria-labelledby={`ind-${page.slug}`}>
            <h2 id={`ind-${page.slug}`} className="seo-panel-title">
              Industries served
            </h2>
            <ul className="seo-bullet-list">
              {page.industries.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </section>

          <section className="seo-panel" aria-labelledby={`faq-${page.slug}`}>
            <h2 id={`faq-${page.slug}`} className="seo-panel-title">
              FAQ
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

          <section className="seo-panel seo-panel--cta" aria-labelledby={`cta-${page.slug}`}>
            <h2 id={`cta-${page.slug}`} className="seo-panel-title">
              Ready for a structured industrial deployment?
            </h2>
            <p>
              Tell us your site location (for example Baddi, Mohali, or Haridwar), approximate scale, and whether you
              need phased rollout. We respond with a clear next step — not a generic brochure dump.
            </p>
            <div className="seo-hero-actions">
              <a className="button button-primary" href="tel:+917814421210">
                Call +91 7814421210
              </a>
              <a className="button button-secondary" href="mailto:info@rabindia.co.in">
                Email info@rabindia.co.in
              </a>
            </div>
          </section>

          <nav className="seo-inline-nav" aria-label="Internal links">
            <span className="seo-inline-label">Keep exploring:</span>
            <Link to="/locations/baddi">Baddi industrial belt</Link>
            <Link to="/locations/chandigarh">Chandigarh region</Link>
            <Link to="/locations/haridwar">Haridwar plants</Link>
            <Link to="/blog">Planning articles</Link>
            <Link to="/about">About RAB INDIA</Link>
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
