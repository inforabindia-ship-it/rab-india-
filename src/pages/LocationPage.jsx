import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import SeoHead from "../seo/SeoHead";
import JsonLd from "../seo/JsonLd";
import SiteHeader from "../components/SiteHeader";
import Breadcrumbs from "../components/Breadcrumbs";
import { SITE_ORIGIN } from "../seo/site";
import { breadcrumbListNode, webPageNode, faqPageNode, organizationNode } from "../seo/schemaBuilders";
import { getLocation } from "../data/localPages";

export default function LocationPage() {
  const { slug } = useParams();
  const page = slug ? getLocation(slug) : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!page) {
    return <Navigate to="/locations" replace />;
  }

  const pathname = `/locations/${page.slug}`;
  const graph = [
    organizationNode(),
    webPageNode({
      pathname,
      name: page.metaTitle,
      description: page.metaDescription
    }),
    breadcrumbListNode([
      { name: "Home", url: `${SITE_ORIGIN}/` },
      { name: "Service areas", url: `${SITE_ORIGIN}/locations` },
      { name: page.cityLabel, url: `${SITE_ORIGIN}${pathname}` }
    ]),
    faqPageNode(page.faqs.map((f) => ({ question: f.q, answer: f.a })))
  ];

  return (
    <div className="site-root">
      <SeoHead title={page.metaTitle} description={page.metaDescription} pathname={pathname} rawTitle />
      <JsonLd id={`rab-jsonld-loc-${page.slug}`} data={{ "@context": "https://schema.org", "@graph": graph }} />
      <SiteHeader />
      <main className="seo-page-main">
        <div className="container seo-page-inner">
          <Breadcrumbs
            items={[
              { label: "Home", to: "/" },
              { label: "Service areas", to: "/locations" },
              { label: page.cityLabel, to: pathname }
            ]}
          />
          <header className="seo-hero">
            <p className="seo-hero-eyebrow">Industrial security &amp; IT infrastructure</p>
            <h1>{page.h1}</h1>
            <p className="seo-hero-lead">{page.intro}</p>
            <div className="seo-hero-actions">
              <Link className="button button-primary" to={{ pathname: "/", hash: "contact" }}>
                Request a site survey
              </Link>
              <Link className="button button-secondary" to="/services">
                Explore services
              </Link>
            </div>
          </header>
          <div className="seo-prose">
            {page.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <section className="seo-panel" aria-labelledby={`faq-${page.slug}`}>
            <h2 id={`faq-${page.slug}`} className="seo-panel-title">
              Frequently asked questions — {page.cityLabel}
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
          <section className="seo-panel" aria-labelledby={`cta-${page.slug}`}>
            <h2 id={`cta-${page.slug}`} className="seo-panel-title">
              Speak with RAB INDIA about your {page.cityLabel} project
            </h2>
            <p>
              Share your plant type, approximate camera or gate counts, and timeline — we will route you to the right
              technical lead.
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
          <nav className="seo-inline-nav" aria-label="Related services">
            <span className="seo-inline-label">Popular next steps:</span>
            <Link to="/services/cctv-solutions">CCTV solutions</Link>
            <Link to="/services/biometric-attendance-machine">Biometric attendance</Link>
            <Link to="/services/boom-barrier">Boom barriers</Link>
            <Link to="/blog">Technical blog</Link>
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
