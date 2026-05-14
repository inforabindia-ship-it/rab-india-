import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <Link className="brand" to="/" onClick={() => setMenuOpen(false)}>
          <img src={logo} alt="RAB India — industrial CCTV and security solutions" width={48} height={48} />
          <div>
            <h2 className="brand-title">RAB INDIA</h2>
          </div>
        </Link>

        <button className="menu-toggle" type="button" aria-label="Toggle menu" onClick={() => setMenuOpen((p) => !p)}>
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
          <Link to="/services" onClick={() => setMenuOpen(false)}>
            Services
          </Link>
          <Link to="/locations" onClick={() => setMenuOpen(false)}>
            Areas
          </Link>
          <Link to="/blog" onClick={() => setMenuOpen(false)}>
            Blog
          </Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>
            Company
          </Link>
          <Link to={{ pathname: "/", hash: "contact" }} className="button button-secondary" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
