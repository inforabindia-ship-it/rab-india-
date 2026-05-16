import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import SeoHead from "./seo/SeoHead";
import JsonLd from "./seo/JsonLd";
import SiteHeader from "./components/SiteHeader";
import { SITE_ORIGIN } from "./seo/site";
import { breadcrumbListNode, webPageNode, coreEntityGraph } from "./seo/schemaBuilders";
import aboutBanner from "./assets/about-banner.jpg";
import welcomeImg from "./assets/welcome.png";

const coreValues = [
  {
    title: "Precision Engineering",
    description:
      "Every deployment follows a structured approach covering risk analysis, architecture, and execution."
  },
  {
    title: "Industrial Reliability",
    description:
      "Solutions are designed for harsh operational environments and continuous business uptime."
  },
  {
    title: "Security Intelligence",
    description:
      "We combine surveillance data, access logic, and network visibility for informed decision-making."
  },
  {
    title: "Long-Term Partnership",
    description:
      "Our service model includes support, optimization, expansion planning, and technical advisory."
  }
];

const milestones = [
  { number: "2016", label: "Founded with industrial-first security mission" },
  { number: "1000+", label: "Client relationships built on trust and delivery" },
  { number: "100+", label: "Large-scale security and infrastructure projects" },
  { number: "24/7", label: "Technical support and response capability" }
];

const testimonials = [
  {
    quote:
      "RAB India transformed our plant surveillance and access architecture with remarkable execution quality.",
    author: "Operations Head, Manufacturing Group"
  },
  {
    quote:
      "From network backbone to security controls, their implementation was precise, timely, and future-ready.",
    author: "IT Manager, Industrial Warehouse Network"
  }
];

const ABOUT_TITLE = "About RAB INDIA — Industrial Security & IT Company";
const ABOUT_DESCRIPTION =
  "Learn how RAB INDIA delivers industrial CCTV, access control, weighing, telecom, networking, and fire monitoring with structured installation, documentation, and long-term support from Baddi across North India.";

export default function About() {
  const pathname = "/about";
  const graph = [
    ...coreEntityGraph(),
    webPageNode({
      pathname,
      name: ABOUT_TITLE,
      description: ABOUT_DESCRIPTION
    }),
    breadcrumbListNode([
      { name: "Home", url: `${SITE_ORIGIN}/` },
      { name: "About", url: `${SITE_ORIGIN}/about` }
    ])
  ];

  return (
    <div className="site-root">
      <SeoHead title={ABOUT_TITLE} description={ABOUT_DESCRIPTION} pathname={pathname} rawTitle />
      <JsonLd id="rab-jsonld-about" data={{ "@context": "https://schema.org", "@graph": graph }} />
      <Helmet>
        <link rel="preload" as="image" href={aboutBanner} fetchPriority="high" />
      </Helmet>
      <SiteHeader />
      <main>
        <section className="hero section">
          <div className="container hero-grid reveal">
            <div className="hero-copy">
              <span className="hero-tag">About RAB India</span>
              <h1>Building Secure Industrial Futures Through Technology and Trust</h1>
              <p>
                RAB India is a specialized security solutions company focused on industrial and enterprise environments.
                We combine practical on-site experience with modern security engineering to build systems that are robust,
                scalable, and trusted.
              </p>
              <div className="hero-actions">
                <Link to="/" className="button button-primary">
                  View Solutions
                </Link>
                <a href="#story" className="button button-secondary">
                  Our Journey
                </a>
              </div>
            </div>
            <div className="hero-media">
              <img
                src={aboutBanner}
                alt="RAB India industrial security deployment team and equipment"
                width={960}
                height={600}
                decoding="async"
                fetchPriority="high"
              />
            </div>
          </div>
        </section>

        <section className="section" id="story">
          <div className="container about-band reveal">
            <div className="about-band-grid">
              <img
                src={welcomeImg}
                alt="RAB India operations and engineering staff at client site"
                width={800}
                height={520}
                loading="lazy"
                decoding="async"
              />
              <div>
                <div className="section-head">
                  <h2>Our Story</h2>
                  <p>
                    Since 2016, we have been helping factories, plants, offices, and warehouses modernize their
                    surveillance, access control, and digital infrastructure. Every project is driven by clarity,
                    accountability, and engineering rigor.
                  </p>
                </div>
                <ul className="list">
                  <li>Consultative planning before every implementation.</li>
                  <li>High-standard installation and post-deployment support.</li>
                  <li>Clear focus on measurable security outcomes.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="values">
          <div className="container reveal">
            <div className="section-head">
              <h2>Core Values</h2>
              <p>
                The principles that shape every security architecture, service commitment, and long-term partnership we
                deliver.
              </p>
            </div>
            <div className="grid-2">
              {coreValues.map((item) => (
                <article className="card" key={item.title}>
                  <div className="card-body">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container reveal">
            <div className="section-head">
              <h2>Milestones</h2>
            </div>
            <div className="grid-4">
              {milestones.map((item) => (
                <article className="metric" key={item.number}>
                  <h3>{item.number}</h3>
                  <p>{item.label}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="testimonials">
          <div className="container reveal">
            <div className="section-head">
              <h2>Client Trust</h2>
            </div>
            <div className="grid-2">
              {testimonials.map((item) => (
                <article className="card testimonial" key={item.author}>
                  <div className="card-body">
                    <p>{item.quote}</p>
                    <p style={{ marginTop: "1rem", color: "#d5e3fb", fontWeight: 600 }}>{item.author}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          © {new Date().getFullYear()} RAB India. Security solutions for modern industrial growth.
        </div>
      </footer>
    </div>
  );
}
