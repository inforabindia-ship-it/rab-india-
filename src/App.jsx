import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import SeoHead from "./seo/SeoHead";
import HomePageSchema from "./seo/HomePageSchema";
import { HOME_META_DESCRIPTION } from "./seo/homeMeta";
import { HOME_FAQS } from "./data/homeFaqs";
import SeoLinkHub from "./components/SeoLinkHub";
import logo from "./assets/logo.png";
import welcomeImg from "./assets/welcome.png";
import aboutBanner from "./assets/about-banner.jpg";
import networking from "./assets/networking.png";
import telecom from "./assets/telecom.png";
import cctv from "./assets/cctv.png";
import conference from "./assets/conference.png";
import weighing from "./assets/weighing.png";
import fireSafetyBanner from "./assets/fire-safety-banner.png";
import accessProduct from "./assets/access-product.png";
import interlocking from "./assets/interlocking.png";
import cctvProduct from "./assets/cctv-product.png";
import telecomProduct from "./assets/telecom-product.png";
import conferenceProduct from "./assets/conference-product.png";
import weighingProduct from "./assets/weighing-product.png";
import doorProduct from "./assets/door-product.png";
import Venus from "./assets/clients/Venus.png";
import colgate from "./assets/clients/colgate.png";
import fossil from "./assets/clients/fossil.png";
import growel from "./assets/clients/growel.png";
import wipro from "./assets/clients/wipro.png";
import Abhinav from "./assets/clients/Abhinav.png";
import Ancorotti from "./assets/clients/Ancorotti.png";
import NHPC from "./assets/clients/NHPC.png";
import SSF from "./assets/clients/SSF.png";
import Sika from "./assets/clients/Sika.png";
import Steelbird from "./assets/clients/Steelbird.png";

const navLinks = [
  { to: "#about", label: "About" },
  { to: "#industries", label: "Industries" },
  { to: "#contact", label: "Contact" }
];

const solutions = [
  {
    id: "cctv",
    title: "CCTV Surveillance",
    description: "AI-assisted monitoring and forensic-ready recording infrastructure.",
    image: cctvProduct
  },
  {
    id: "telecom",
    title: "Telecom Solutions",
    description: "PBX, IP-PBX, and office communication systems for business calling.",
    image: telecomProduct
  },
  {
    id: "access",
    title: "Time Attendance & Access Control",
    description:
      "Attendance, door access, barriers, screening, baggage inspection, patrol verification, and hotel locks — integrated for daily operations.",
    image: accessProduct
  },
  {
    id: "conference",
    title: "Conference Room Solution",
    description:
      "Cameras, interactive panels, digital podiums, and room audio—specified and commissioned for boardrooms, training halls, and hybrid collaboration.",
    image: conferenceProduct
  },
  {
    id: "weighing",
    title: "Industrial Weighing Solutions",
    description:
      "Analytical balances, platform and tabletop scales, label printers, pallet units, piece counting, and load cells—specified, installed, and calibrated for your workflows.",
    image: weighingProduct
  },
  {
    id: "door",
    title: "Door Interlocking Systems",
    description: "Fail-safe door orchestration for controlled critical zones.",
    image: doorProduct
  }
];

const industries = [
  "Manufacturing Plants",
  "Warehousing & Logistics",
  "Pharma & Process Industries",
  "Commercial Campuses",
  "Data & Control Rooms",
  "Power & Utility Sites"
];

const productCategories = [
  { name: "Smart Surveillance", image: cctv, detailId: "cctv" },
  { name: "Industrial Networking", image: networking, detailId: "networking" },
  { name: "Enterprise Telecom", image: telecom, detailId: "telecom" },
  { name: "Fire & Safety Monitoring", image: fireSafetyBanner, detailId: "fire" },
  { name: "Time Attendance & Access Control", image: accessProduct, detailId: "access" },
  { name: "Interlocking Automation", image: interlocking, detailId: "door" },
  { name: "Conference Room Solution", image: conference, detailId: "conference" },
  { name: "Weighing Automation", image: weighing, detailId: "weighing" }
];

const trustLogos = [
  Venus,
  colgate,
  fossil,
  growel,
  wipro,
  Abhinav,
  Ancorotti,
  NHPC,
  SSF,
  Sika,
  Steelbird
];

const certifications = [
  "ISO-Driven Quality Practices",
  "Industry Safety Compliance Alignment",
  "Structured Installation Protocols",
  "Professional Support & AMC Ready"
];

/**
 * Hero carousel — uses the same “product composite” art as your Solutions section
 * plus welcome / about imagery so framing stays consistent and fills the frame cleanly.
 */
const heroSlides = [
  { src: welcomeImg, alt: "RAB India — trusted security and telecom solutions" },
  { src: aboutBanner, alt: "Industrial and commercial security project delivery" },
  { src: cctvProduct, alt: "CCTV surveillance systems" },
  { src: telecomProduct, alt: "Telecom solutions" },
  { src: accessProduct, alt: "Biometric and access control solutions" },
  { src: conferenceProduct, alt: "Conference Room audiovisual solutions" },
  { src: weighingProduct, alt: "Industrial weighing solutions" },
  { src: doorProduct, alt: "Door interlocking and secured access" }
];

const testimonials = [
  {
    quote:
      "RAB India delivered a structured surveillance and access setup for our plant with excellent support quality.",
    author: "IT Head, Industrial Client"
  },
  {
    quote:
      "Their team understood our operational risks and implemented the right mix of networking and security controls.",
    author: "Operations Manager, Manufacturing Unit"
  },
  {
    quote:
      "From consultation to deployment, every stage felt professional, transparent, and focused on long-term reliability.",
    author: "Facility Director, Commercial Campus"
  }
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [heroIndex, setHeroIndex] = useState(0);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/") return;
    const id = location.hash.replace(/^#/, "").trim();
    if (!id) return;
    const el = document.getElementById(id);
    if (!el) return;
    const timer = window.setTimeout(() => {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
    return () => window.clearTimeout(timer);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroSlides.length);
    }, 3500);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="site-root">
      <SeoHead
        title="Industrial CCTV, Access Control & IT Infrastructure Solutions"
        description={HOME_META_DESCRIPTION}
        pathname="/"
      />
      <HomePageSchema />
      <Helmet>
        <link rel="preload" as="image" href={welcomeImg} fetchPriority="high" />
      </Helmet>
      <div className="topbar">
        <div className="container topbar-inner">
          <span>Mon-Sat 9:30 AM - 6:30 PM</span>
          <div>
            <a href="tel:+917814421210">Call: +91 7814421210</a>
            <span>|</span>
            <a href="mailto:info@rabindia.co.in">Email: info@rabindia.co.in</a>
          </div>
        </div>
      </div>
      <header className="navbar">
        <div className="container nav-inner">
          <Link className="brand" to="/">
            <img src={logo} alt="RAB India — industrial security company logo" width={48} height={48} decoding="async" />
            <div>
              <h2 className="brand-title">RAB INDIA</h2>
            </div>
          </Link>

          <button
            className="menu-toggle"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? "X" : "≡"}
          </button>

          <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
            <a href="#home" onClick={() => setMenuOpen(false)}>
              Home
            </a>
            <div className="dropdown">
              <button type="button">Solutions ▾</button>
              <div className="dropdown-menu">
                <a href="#solutions">Core Solutions</a>
                <a href="#products">Product Categories</a>
                <a href="#certifications">Certifications</a>
                <Link to="/services" onClick={() => setMenuOpen(false)}>
                  Service pages
                </Link>
                <Link to="/locations" onClick={() => setMenuOpen(false)}>
                  Service areas
                </Link>
                <Link to="/blog" onClick={() => setMenuOpen(false)}>
                  Blog
                </Link>
              </div>
            </div>
            {navLinks.map((item) => (
              <a key={item.label} href={item.to} onClick={() => setMenuOpen(false)}>
                {item.label}
              </a>
            ))}
            <Link to="/about" onClick={() => setMenuOpen(false)}>
              Company
            </Link>
            <a href="#contact" className="button button-secondary" onClick={() => setMenuOpen(false)}>
              Request Consultation
            </a>
          </nav>
        </div>
      </header>

      <main id="home">
        <section className="hero section">
          <div className="container hero-grid reveal">
            <div className="hero-copy">
              <span className="hero-tag">Future-Ready Industrial Security</span>
              <h1>
                Premium Security Engineering for High-Performance Industrial Environments
              </h1>
              <p>
                RAB India designs and deploys advanced surveillance, access control, networking,
                and safety infrastructure for factories, warehouses, plants, and commercial
                campuses. We combine reliability, precision, and enterprise-grade support.
              </p>
              <div className="hero-actions">
                <a href="#contact" className="button button-primary">
                  Get a Site Security Audit
                </a>
                <a href="#solutions" className="button button-secondary">
                  Explore Solutions
                </a>
              </div>
              <div className="floating-stats">
                <div>
                  <h4>1000+</h4>
                  <p>B2B Clients Supported</p>
                </div>
                <div>
                  <h4>9+ Years</h4>
                  <p>Security Expertise</p>
                </div>
                <div>
                  <h4>24/7</h4>
                  <p>Technical Response</p>
                </div>
              </div>
            </div>
            <div className="hero-media">
              <div
                className="hero-slideshow"
                role="region"
                aria-roledescription="carousel"
                aria-label="Industrial security highlights"
              >
                {heroSlides.map((slide, i) => (
                  <img
                    key={slide.alt}
                    src={slide.src}
                    alt={slide.alt}
                    className={`hero-slide-img${i === heroIndex ? " is-active" : ""}`}
                    loading={i === 0 ? "eager" : "lazy"}
                    decoding="async"
                    fetchPriority={i === 0 ? "high" : "low"}
                  />
                ))}
                <div className="hero-slide-dots" aria-hidden="true">
                  {heroSlides.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      className={i === heroIndex ? "is-active" : ""}
                      aria-label={`Show slide ${i + 1} of ${heroSlides.length}`}
                      onClick={() => setHeroIndex(i)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="container about-band reveal">
            <div className="about-band-grid">
              <img
                src={welcomeImg}
                alt="RAB India operations and engineering team at industrial client site"
                loading="lazy"
                decoding="async"
                width={800}
                height={520}
              />
              <div>
                <div className="section-head">
                  <h2>About RAB India</h2>
                  <p>
                    Established in 2016, RAB India delivers industrial-grade security architecture
                    and operational support for organizations where uptime, visibility, and control
                    are mission critical.
                  </p>
                </div>
                <ul className="list">
                  <li>End-to-end planning, deployment, integration, and lifecycle support.</li>
                  <li>Balanced approach to physical security and digital security readiness.</li>
                  <li>Built for durability, scalability, and compliance-focused operations.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="solutions">
          <div className="container reveal">
            <div className="section-head">
              <h2>Our Security Solutions</h2>
              <p>
                Engineered systems for complex industrial and commercial environments, optimized
                for reliability, scale, and operational intelligence.
              </p>
            </div>
            <div className="grid-3">
              {solutions.map((item) => (
                <Link
                  className="card card--interactive"
                  key={item.id}
                  to={`/product/${item.id}`}
                  aria-label={`Open details: ${item.title}`}
                >
                  <div className="card-media">
                    <img
                      src={item.image}
                      alt={`${item.title} — industrial security solution`}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="card-body">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <span className="card-hint">View details →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="industries">
          <div className="container reveal">
            <div className="section-head">
              <h2>Industries We Serve</h2>
              <p>
                Security and infrastructure solutions tailored to risk profile, operations flow,
                and compliance requirements of each business domain.
              </p>
            </div>
            <div className="grid-3">
              {industries.map((industry) => (
                <article className="card" key={industry}>
                  <div className="card-body">
                    <h3>{industry}</h3>
                    <p>
                      Customized deployment blueprint with site-specific monitoring, access
                      governance, and security control layers.
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="products">
          <div className="container reveal">
            <div className="section-head">
              <h2>Product Categories</h2>
              <p>
                Modern, high-performance systems selected for quality, serviceability, and
                enterprise integration readiness.
              </p>
            </div>
            <div className="grid-4">
              {productCategories.map((item) => (
                <Link
                  className="card card--interactive"
                  key={item.name}
                  to={`/product/${item.detailId}`}
                  aria-label={`Open details: ${item.name}`}
                >
                  <div className="card-media">
                    <img
                      src={item.image}
                      alt={`${item.name} — product category`}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="card-body">
                    <h3>{item.name}</h3>
                    <span className="card-hint">View details →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container reveal">
            <div className="section-head">
              <h2>Trusted by Leading Brands</h2>
              <p>
                Proven execution and long-term support for reputed businesses and institutions.
              </p>
            </div>
            <div className="logo-strip">
              <div className="logo-track">
                {[...trustLogos, ...trustLogos].map((item, index) => (
                  <div className="logo-chip" key={`${index}-${item}`}>
                    <img src={item} alt="Industrial client brand logo" loading="lazy" decoding="async" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container reveal">
            <div className="section-head">
              <h2>Why Choose RAB India</h2>
            </div>
            <div className="grid-4">
              <article className="metric">
                <h3>1000+</h3>
                <p>Clients secured across industrial and commercial sectors.</p>
              </article>
              <article className="metric">
                <h3>9+</h3>
                <p>Years of continuous on-ground implementation experience.</p>
              </article>
              <article className="metric">
                <h3>24/7</h3>
                <p>Technical support readiness for mission-critical operations.</p>
              </article>
              <article className="metric">
                <h3>100+</h3>
                <p>Complex projects delivered with precision and quality controls.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container reveal">
            <div className="section-head">
              <h2>Client Testimonials</h2>
              <p>What industrial and enterprise clients say about our delivery standards.</p>
            </div>
            <div className="grid-3">
              {testimonials.map((item) => (
                <article className="card testimonial" key={item.author}>
                  <div className="card-body">
                    <p>{item.quote}</p>
                    <p style={{ marginTop: "0.9rem", color: "#d5e3fb", fontWeight: 600 }}>
                      {item.author}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="faq">
          <div className="container reveal">
            <div className="section-head">
              <h2>Frequently asked questions</h2>
              <p>
                Straight answers for procurement, IT, and facility teams — written for voice search and AI summaries.
              </p>
            </div>
            <div className="faq-grid">
              {HOME_FAQS.map((f) => (
                <article className="faq-card" key={f.question}>
                  <h3 className="faq-q">{f.question}</h3>
                  <p className="faq-a">{f.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="certifications">
          <div className="container reveal">
            <div className="section-head">
              <h2>Certifications & Quality Standards</h2>
            </div>
            <div className="grid-4">
              {certifications.map((item) => (
                <div className="cert-badge" key={item}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <SeoLinkHub />

        <section className="section" id="contact">
          <div className="container reveal contact">
            <div className="panel contact-info">
              <div className="section-head">
                <h2>Contact & Inquiry</h2>
                <p>
                  Plan your next security upgrade with our technical team. We provide site
                  assessment, architecture recommendations, and deployment roadmaps.
                </p>
              </div>
              <p>Address: Baddi, Himachal Pradesh, India</p>
              <p>Phone: +91 7814421210</p>
              <p>Email: info@rabindia.co.in</p>
              <div className="hero-actions">
                <a href="tel:+917814421210" className="button button-primary">
                  Call Now
                </a>
                <a href="mailto:info@rabindia.co.in" className="button button-secondary">
                  Send Email
                </a>
              </div>
            </div>
            <div className="panel">
              <iframe
                className="map-frame"
                title="RAB India Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3422.2990162421393!2d76.79660137439747!3d30.934212275869584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ff56ca4b46b11%3A0xacf64d1a97f3a73b!2sRAB%20India!5e0!3m2!1sen!2sin!4v1778243011746!5m2!1sen!2sin"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          © {new Date().getFullYear()} RAB India. Built for secure, modern industrial operations.
        </div>
      </footer>
    </div>
  );
}
