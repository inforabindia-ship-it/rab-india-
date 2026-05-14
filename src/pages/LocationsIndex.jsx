import { Link } from "react-router-dom";
import SeoHead from "../seo/SeoHead";
import JsonLd from "../seo/JsonLd";
import SiteHeader from "../components/SiteHeader";
import Breadcrumbs from "../components/Breadcrumbs";
import { SITE_ORIGIN } from "../seo/site";
import { breadcrumbListNode, webPageNode, organizationNode } from "../seo/schemaBuilders";
import { LOCATIONS } from "../data/localPages";

const title = "Industrial Security Service Areas | RAB INDIA";
const description =
  "RAB INDIA deploys CCTV, access control, weighing, intercom, and gate automation across Baddi, Chandigarh Tricity, Haridwar, Jammu, Himachal industrial belts, and nearby corridors. Find your city page.";

export default function LocationsIndex() {
  const pathname = "/locations";
  const graph = [
    organizationNode(),
    webPageNode({ pathname, name: title, description }),
    breadcrumbListNode([
      { name: "Home", url: `${SITE_ORIGIN}/` },
      { name: "Service areas", url: `${SITE_ORIGIN}/locations` }
    ])
  ];

  return (
    <div className="site-root">
      <SeoHead title={title} description={description} pathname={pathname} rawTitle />
      <JsonLd id="rab-jsonld-locations-index" data={{ "@context": "https://schema.org", "@graph": graph }} />
      <SiteHeader />
      <main className="seo-page-main">
        <div className="container seo-page-inner">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Service areas", to: "/locations" }]} />
          <header className="seo-hero">
            <p className="seo-hero-eyebrow">Local SEO hub</p>
            <h1>Industrial security &amp; IT deployment regions we support</h1>
            <p className="seo-hero-lead">
              Select your city for context-specific guidance on CCTV, biometric attendance, boom barriers, hotel locks,
              metal detectors, door interlocking, weighing systems, and enterprise telecom.
            </p>
          </header>
          <ul className="seo-card-grid">
            {LOCATIONS.map((loc) => (
              <li key={loc.slug}>
                <Link className="seo-card" to={`/locations/${loc.slug}`}>
                  <h2 className="seo-card-title">{loc.cityLabel}</h2>
                  <p className="seo-card-desc">
                    {loc.metaDescription.length > 120
                      ? `${loc.metaDescription.slice(0, 120)}…`
                      : loc.metaDescription}
                  </p>
                  <span className="seo-card-cta">Open local page →</span>
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
