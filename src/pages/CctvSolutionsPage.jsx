import { useEffect } from "react";
import { Link } from "react-router-dom";
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
import {
  CCTV_PAGE_SLUG,
  CCTV_META_TITLE,
  CCTV_META_DESCRIPTION,
  CCTV_H1,
  CCTV_HERO_LEAD,
  CCTV_BENEFITS,
  CCTV_USE_CASES,
  CCTV_INDUSTRIES,
  CCTV_SERVICE_AREAS,
  CCTV_FAQS
} from "../data/cctvSolutionsPage";
import cctvProduct from "../assets/cctv-product.png";

const pathname = `/services/${CCTV_PAGE_SLUG}`;

export default function CctvSolutionsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const graph = [
    ...coreEntityGraph(),
    webPageNode({
      pathname,
      name: CCTV_META_TITLE,
      description: CCTV_META_DESCRIPTION
    }),
    serviceNode({
      idSuffix: CCTV_PAGE_SLUG,
      name: CCTV_H1,
      description: CCTV_HERO_LEAD,
      areaServed: AREA_SERVED_NAMES
    }),
    breadcrumbListNode([
      { name: "Home", url: `${SITE_ORIGIN}/` },
      { name: "Services", url: `${SITE_ORIGIN}/services` },
      { name: "CCTV solutions", url: `${SITE_ORIGIN}${pathname}` }
    ]),
    faqPageNode(
      CCTV_FAQS.map((f) => ({ question: f.q, answer: f.a })),
      { pathname }
    )
  ];

  return (
    <div className="site-root">
      <SeoHead title={CCTV_META_TITLE} description={CCTV_META_DESCRIPTION} pathname={pathname} rawTitle />
      <JsonLd id="rab-jsonld-cctv-solutions" data={{ "@context": "https://schema.org", "@graph": graph }} />
      <SiteHeader />
      <main className="seo-page-main">
        <div className="container seo-page-inner seo-page-inner--wide">
          <Breadcrumbs
            items={[
              { label: "Home", to: "/" },
              { label: "Services", to: "/services" },
              { label: "CCTV solutions", to: pathname }
            ]}
          />

          <header className="seo-hero seo-hero-split">
            <div className="seo-hero-split-copy">
              <p className="seo-hero-eyebrow">Industrial video surveillance</p>
              <h1>{CCTV_H1}</h1>
              <p className="seo-hero-lead">{CCTV_HERO_LEAD}</p>
              <div className="seo-hero-actions">
                <Link className="button button-primary" to={{ pathname: "/", hash: "contact" }}>
                  Request site survey
                </Link>
                <Link className="button button-secondary" to="/product/cctv">
                  Product specifications
                </Link>
              </div>
            </div>
            <div className="seo-hero-split-media">
              <img
                src={cctvProduct}
                alt="Industrial CCTV surveillance system — cameras, recording, and monitoring"
                width={640}
                height={400}
                loading="eager"
                decoding="async"
              />
            </div>
          </header>

          <section className="seo-panel" aria-labelledby="cctv-benefits">
            <h2 id="cctv-benefits" className="seo-panel-title">
              Why teams choose RAB INDIA for industrial CCTV
            </h2>
            <div className="grid-3 seo-benefit-grid">
              {CCTV_BENEFITS.map((item) => (
                <article className="card" key={item.title}>
                  <div className="card-body">
                    <h3 className="seo-card-title">{item.title}</h3>
                    <p className="seo-card-desc">{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="seo-panel" aria-labelledby="cctv-use-cases">
            <h2 id="cctv-use-cases" className="seo-panel-title">
              Factory surveillance systems we commonly deploy
            </h2>
            <p className="seo-prose-block">
              These patterns cover most procurement conversations—perimeter evidence, operational visibility,
              and retention you can explain to IT, security, and leadership without overselling analytics you
              will not use.
            </p>
            <ul className="seo-bullet-list">
              {CCTV_USE_CASES.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="seo-panel" aria-labelledby="cctv-industries">
            <h2 id="cctv-industries" className="seo-panel-title">
              Industries we serve
            </h2>
            <ul className="seo-bullet-list">
              {CCTV_INDUSTRIES.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="seo-panel" aria-labelledby="cctv-areas">
            <h2 id="cctv-areas" className="seo-panel-title">
              CCTV deployment areas
            </h2>
            <p className="seo-prose-block">
              We are based in Baddi and routinely support Chandigarh, Mohali, Panchkula, and Nalagarh. Open the
              page closest to your site for geography-specific notes—each link below is written for humans, not
              keyword clones of this overview.
            </p>
            <ul className="seo-area-list">
              {CCTV_SERVICE_AREAS.map((area) => (
                <li key={area.to}>
                  <Link to={area.to}>{area.label}</Link>
                  <span className="seo-area-note">{area.note}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="seo-panel" aria-labelledby="cctv-faq">
            <h2 id="cctv-faq" className="seo-panel-title">
              Frequently asked questions
            </h2>
            <dl className="seo-faq">
              {CCTV_FAQS.map((f) => (
                <div className="seo-faq-item" key={f.q}>
                  <dt className="seo-faq-q">{f.q}</dt>
                  <dd className="seo-faq-a">{f.a}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section className="seo-panel seo-panel--cta" aria-labelledby="cctv-cta">
            <h2 id="cctv-cta" className="seo-panel-title">
              Plan your next CCTV rollout
            </h2>
            <p>
              Share your city (for example Baddi, Mohali, or Chandigarh), approximate camera count, and retention
              goals. We respond with a clear survey and scope path—not a generic brochure.
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

          <nav className="seo-inline-nav" aria-label="Related pages">
            <span className="seo-inline-label">Keep exploring:</span>
            <Link to="/blog/how-to-plan-cctv-storage-for-factories">CCTV storage planning</Link>
            <Link to="/services">All services</Link>
            <Link to="/locations">Service areas</Link>
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
