import { Phone, MessageCircle } from "lucide-react";

export default function App() {
  return (
    <div style={{ fontFamily: "sans-serif", background: "#0f172a", color: "white" }}>

      {/* HERO */}
      <section style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
        <h1 style={{ fontSize: "3rem" }}>RAB INDIA</h1>
        <p style={{ fontSize: "1.5rem", color: "#94a3b8" }}>
          Build on trust, Driven by quality
        </p>
        <p style={{ marginTop: "10px" }}>
          Complete Security & IT Solutions for Modern Businesses
        </p>

        <div style={{ marginTop: "20px" }}>
          <a href="tel:+917814421210">
            <button style={{ marginRight: "10px", padding: "10px 20px" }}>
              <Phone size={16}/> Call Now
            </button>
          </a>

          <a href="https://wa.me/917814421210?text=Hi%20RAB%20India,%20I%20need%20security%20solutions" target="_blank">
            <button style={{ padding: "10px 20px" }}>
              <MessageCircle size={16}/> WhatsApp
            </button>
          </a>
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ padding: "40px", textAlign: "center" }}>
        <h2>Our Services</h2>
        <div style={{ display: "grid", gap: "20px", marginTop: "20px" }}>
          <div>CCTV Surveillance</div>
          <div>Networking Solutions</div>
          <div>Access Control & Biometrics</div>
          <div>Security Alarm Systems</div>
        </div>
      <section style={{ padding: "40px", textAlign: "center", background: "#020617" }}>
  <h2>Why Choose Us</h2>
  <div style={{ marginTop: "20px" }}>
    <p>✔ Trusted & Reliable Service</p>
    <p>✔ Fast Installation & Support</p>
    <p>✔ Experienced Technical Team</p>
  </div>
</section>

      {/* CONTACT */}
      <section style={{ padding: "40px", textAlign: "center" }}>
        <h2>Contact Us</h2>
        <p>📞 +91-7814421210</p>
        <p>📧 info@rabindia.co.in</p>
      </section>

    </div>
  );
}
