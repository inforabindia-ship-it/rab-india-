import { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { productDetails } from "./productDetails";
import logo from "./assets/logo.png";

export default function ProductDetail() {
  const { productId } = useParams();
  const [menuOpen, setMenuOpen] = useState(false);
  const detail = productId ? productDetails[productId] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId]);

  if (!detail) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="site-root">
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
            <Link to="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
            <Link to={{ pathname: "/", hash: "solutions" }} onClick={() => setMenuOpen(false)}>
              Solutions
            </Link>
            <Link to={{ pathname: "/", hash: "products" }} onClick={() => setMenuOpen(false)}>
              Products
            </Link>
            <Link to={{ pathname: "/", hash: "contact" }} onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
            <Link to="/about" onClick={() => setMenuOpen(false)}>
              Company
            </Link>
          </nav>
        </div>
      </header>

      <main className="section product-page">
        <div className="container product-page-inner">
          <Link className="product-page-back" to="/">
            ← Back to home
          </Link>

          <h1 className="product-page-title">{detail.title}</h1>
          <p className="product-page-lead">{detail.intro}</p>

          <div className="product-page-hero-media">
            <img src={detail.image} alt={detail.imageAlt || detail.title} />
          </div>

          <section className="product-page-block">
            <h2 className="product-page-h2">Key points</h2>
            <ul className="product-page-list">
              {detail.specs.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </section>

          {detail.featureItems?.length ? (
            <section className="product-page-block">
              <h2 className="product-page-h2">Product Items</h2>
              <div className="product-feature-list">
                {detail.featureItems.map((item) => (
                  <article className="product-feature-row" key={item.label}>
                    <div className="product-feature-copy">
                      <h3 className="product-feature-title">{item.label}</h3>
                      <p className="product-feature-text">{item.text}</p>
                    </div>
                    <div className="product-feature-media">
                      <img
                        src={item.image}
                        alt={item.alt || item.label}
                        style={item.imagePosition ? { objectPosition: item.imagePosition } : undefined}
                      />
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ) : null}

          {detail.sections.map((section) => (
            <section className="product-page-block" key={section.heading}>
              <h2 className="product-page-h2">{section.heading}</h2>
              <ul className="product-page-list">
                {section.items.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </section>
          ))}

          <div className="product-page-actions">
            <Link to={{ pathname: "/", hash: "contact" }} className="button button-primary">
              Request a quote
            </Link>
            <Link to="/" className="button button-secondary">
              All solutions
            </Link>
          </div>
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
