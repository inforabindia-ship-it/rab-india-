import { Phone, MessageCircle } from "lucide-react";

export default function App() {
  return (
    <div style={{ fontFamily: "sans-serif", background: "#0f172a", color: "white" }}>

      {/* HERO */}
      <section style={{ padding: "60px", textAlign: "center" }}>
        <h1>RAB INDIA</h1>
        <p>Build on trust, Driven by quality</p>
        <p>Complete Security & IT Solutions for Modern Businesses</p>

        <div style={{ marginTop: "20px" }}>
          <a href="tel:+919876543210">
            <button style={{ marginRight: "10px", padding: "10px" }}>
              <Phone size={16}/> Call Now
            </button>
          </a>

          <a href="https://wa.me/919876543210?text=Hi%20RAB%20India" target="_blank">
            <button style={{ padding: "10px" }}>
              <MessageCircle size={16}/> WhatsApp
            </button>
          </a>
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ padding: "40px", textAlign: "center" }}>
        <h2>Our Services</h2>
        <p>CCTV Surveillance</p>
        <p>Networking Solutions</p>
        <p>Access Control</p>
        <p>Security Alarm Systems</p>
      </section>

      {/* CONTACT */}
      <section style={{ padding: "40px", textAlign: "center" }}>
        <h2>Contact Us</h2>
        <p>📞 +91-9876543210</p>
        <p>📧 your@email.com</p>
      </section>

    </div>
  );
}
