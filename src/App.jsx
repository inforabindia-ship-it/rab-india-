import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "./assets/logo.png";
import welcomeImg from "./assets/welcome.png";
import aboutBanner from "./assets/about-banner.jpg";
import networking from "./assets/networking.png";
import telecom from "./assets/telecom.png";
import cctv from "./assets/cctv.png";
import conference from "./assets/conference.png";
import weighing from "./assets/weighing.png";
import fire from "./assets/fire.png";
import access from "./assets/access.png";
import interlocking from "./assets/interlocking.png";
import cctvProduct from "./assets/cctv-product.png";
import telecomProduct from "./assets/telecom-product.png";
import accessProduct from "./assets/access-product.png";
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
    title: "CCTV Surveillance",
    description: "AI-assisted monitoring and forensic-ready recording infrastructure.",
    image: cctvProduct
  },
  {
    title: "Telecom & Networking",
    description: "Reliable industrial connectivity and structured network backbone.",
    image: telecomProduct
  },
  {
    title: "Access Control",
    description: "Biometric, RFID and smart entry architecture for secure operations.",
    image: accessProduct
  },
  {
    title: "Command & Conference Systems",
    description: "High-clarity audio/video systems for plant-level collaboration.",
    image: conferenceProduct
  },
  {
    title: "Industrial Weighing Solutions",
    description: "Connected weighing systems with compliance and reporting support.",
    image: weighingProduct
  },
  {
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
  { name: "Smart Surveillance", image: cctv },
  { name: "Industrial Networking", image: networking },
  { name: "Enterprise Telecom", image: telecom },
  { name: "Fire & Safety Monitoring", image: fire },
  { name: "Access Management", image: access },
  { name: "Interlocking Automation", image: interlocking },
  { name: "Conference Tech", image: conference },
  { name: "Weighing Automation", image: weighing }
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

const serviceHighlights = [
  "Digital Grounding Devices",
  "Lightning Protection Solutions",
  "Telecom Solutions",
  "CCTV Solutions",
  "Biometric & Access Control",
  "Networking Solutions"
];

/**
 * Hero carousel — uses the same “product composite” art as your Solutions section
 * plus welcome / about imagery so framing stays consistent and fills the frame cleanly.
 */
const heroSlides = [
  { src: welcomeImg, alt: "RAB India — trusted security and telecom solutions" },
  { src: aboutBanner, alt: "Industrial and commercial security project delivery" },
  { src: cctvProduct, alt: "CCTV surveillance systems" },
  { src: telecomProduct, alt: "Telecom and networking solutions" },
  { src: accessProduct, alt: "Biometric and access control solutions" },
  { src: conferenceProduct, alt: "Conference and collaboration systems" },
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

  useEffect(() => {
    const timer = window.setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroSlides.length);
    }, 3500);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="site-root">
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
            <img src={logo} alt="RAB India logo" />
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
            <div>
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

        <section className="section section-tight">
          <div className="container reveal">
            <div className="service-pills">
              {serviceHighlights.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="container about-band reveal">
            <div className="about-band-grid">
              <img src={welcomeImg} alt="RAB India operations and engineering team" />
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
                <article className="card" key={item.title}>
                  <div className="card-media">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="card-body">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </article>
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
                <article className="card" key={item.name}>
                  <div className="card-media">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="card-body">
                    <h3>{item.name}</h3>
                  </div>
                </article>
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
                    <img src={item} alt="Trusted client logo" />
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
