import { Link } from "react-router-dom";
import SeoHead from "../seo/SeoHead";
import JsonLd from "../seo/JsonLd";
import SiteHeader from "../components/SiteHeader";
import Breadcrumbs from "../components/Breadcrumbs";
import { SITE_ORIGIN } from "../seo/site";
import { breadcrumbListNode, webPageNode, organizationNode } from "../seo/schemaBuilders";
import { SERVICES } from "../data/servicePages";

const title = "Industrial Security Services | RAB INDIA";
const description =
  "Service-level overviews for CCTV, biometric attendance, weighing, intercom, boom barriers, hotel locks, metal detectors, and door interlocking — with links to detailed product routes and local deployment pages.";

export default function ServicesIndex() {
  const pathname = "/services";
  const graph = [
    organizationNode(),
    webPageNode({ pathname, name: title, description }),
    breadcrumbListNode([
      { name: "Home", url: `${SITE_ORIGIN}/` },
      { name: "Services", url: `${SITE_ORIGIN}/services` }
    ])
  ];

  return (
    <div className="site-root">
      <SeoHead title={title} description={description} pathname={pathname} rawTitle />
      <JsonLd id="rab-jsonld-services-index" data={{ "@context": "https://schema.org", "@graph": graph }} />
      <SiteHeader />
      <main className="seo-page-main">
        <div className="container seo-page-inner">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Services", to: "/services" }]} />
          <header className="seo-hero">
            <p className="seo-hero-eyebrow">Procurement &amp; planning</p>
            <h1>Industrial security services — specifications, deployment, and support</h1>
            <p className="seo-hero-lead">
              Each page below is written for voice search and AI summaries: clear questions, plain answers, and
              internal links to product detail routes where you need SKU-level depth.
            </p>
          </header>
          <ul className="seo-card-grid">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link className="seo-card" to={`/services/${s.slug}`}>
                  <h2 className="seo-card-title">{s.h1}</h2>
                  <p className="seo-card-desc">
                    {s.metaDescription.length > 130
                      ? `${s.metaDescription.slice(0, 130)}…`
                      : s.metaDescription}
                  </p>
                  <span className="seo-card-cta">Open service page →</span>
                </Link>
              </li>
            ))}
          </ul>
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
