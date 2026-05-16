import { Link } from "react-router-dom";
import { SERVICE_SLUGS } from "../data/servicePages";
import { LOCATION_SLUGS } from "../data/localPages";
import { BLOG_SLUGS } from "../data/blogPosts";
import { PRODUCT_ROUTE_IDS } from "../data/productRouteIds";
import { LOCAL_SEO_LANDINGS } from "../data/localSeoLandings";

const serviceLabels = {
  "cctv-solutions": "CCTV",
  "biometric-attendance-machine": "Biometric attendance",
  "weighing-scale": "Weighing scales",
  "intercom-systems": "Intercom / PBX",
  "boom-barrier": "Boom barriers",
  "hotel-locks": "Hotel locks",
  "metal-detectors": "Metal detectors",
  "door-interlocking": "Door interlocking"
};

const locationLabels = {
  baddi: "Baddi",
  nalagarh: "Nalagarh",
  barotiwala: "Barotiwala",
  chandigarh: "Chandigarh",
  "new-chandigarh": "New Chandigarh",
  mohali: "Mohali",
  panchkula: "Panchkula",
  derabassi: "Dera Bassi",
  haridwar: "Haridwar",
  "kala-amb": "Kala Amb",
  "paonta-sahib": "Paonta Sahib",
  jammu: "Jammu",
  "jammu-kashmir": "Jammu & Kashmir",
  shimla: "Shimla",
  kasauli: "Kasauli"
};

const productLabels = {
  cctv: "CCTV",
  networking: "Networking",
  telecom: "Telecom",
  fire: "Fire safety",
  access: "Access control",
  conference: "Conference AV",
  weighing: "Weighing",
  door: "Door interlock"
};

const blogLabels = {
  "how-to-plan-cctv-storage-for-factories": "CCTV storage planning",
  "biometric-attendance-for-multi-shift-plants": "Biometric attendance",
  "industrial-weighing-mistakes-that-cost-dispatch-time": "Weighing mistakes",
  "fire-alarm-monitoring-vs-cctv-what-each-proves": "Fire vs CCTV",
  "structured-cabling-checklist-before-you-add-100-ip-cameras": "Cabling checklist",
  "gate-security-design-for-trust-but-verify": "Gate security design"
};

export default function SeoLinkHub() {
  return (
    <section className="seo-link-hub section" aria-label="Explore solutions and service areas">
      <div className="container">
        <div className="section-head">
          <h2 className="seo-link-hub-title">Find the right solution or service area</h2>
          <p className="seo-link-hub-lead">
            Browse service pages for procurement-ready summaries, local pages for city-specific deployment context, and
            technical articles for planning teams.
          </p>
        </div>
        <div className="seo-link-hub-grid">
          <div className="seo-link-hub-col">
            <h3 className="seo-link-hub-h3">Service pages</h3>
            <ul className="seo-link-hub-list">
              <li>
                <Link to="/services">All services overview</Link>
              </li>
              {SERVICE_SLUGS.map((slug) => (
                <li key={slug}>
                  <Link to={`/services/${slug}`}>{serviceLabels[slug] || slug}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="seo-link-hub-col">
            <h3 className="seo-link-hub-h3">Service areas</h3>
            <ul className="seo-link-hub-list">
              <li>
                <Link to="/locations">All locations</Link>
              </li>
              {LOCATION_SLUGS.map((slug) => (
                <li key={slug}>
                  <Link to={`/locations/${slug}`}>{locationLabels[slug] || slug}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="seo-link-hub-col">
            <h3 className="seo-link-hub-h3">Product routes</h3>
            <ul className="seo-link-hub-list">
              {PRODUCT_ROUTE_IDS.map((id) => (
                <li key={id}>
                  <Link to={`/product/${id}`}>{productLabels[id] || id}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="seo-link-hub-col">
            <h3 className="seo-link-hub-h3">Blog</h3>
            <ul className="seo-link-hub-list">
              <li>
                <Link to="/blog">All articles</Link>
              </li>
              {BLOG_SLUGS.map((slug) => (
                <li key={slug}>
                  <Link to={`/blog/${slug}`}>{blogLabels[slug] || slug}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="seo-link-hub-subrow">
          <h3 className="seo-link-hub-h3">Local service intent pages</h3>
          <p className="seo-link-hub-sublead">
            Short pages that pair one primary service with one geography—useful for procurement teams comparing vendors
            in a specific belt.
          </p>
          <ul className="seo-link-hub-taglist">
            {LOCAL_SEO_LANDINGS.map((p) => (
              <li key={p.route}>
                <Link to={`/${p.route}`}>{p.navLabel}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
