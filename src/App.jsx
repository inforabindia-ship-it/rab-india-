import { Phone, MessageCircle } from "lucide-react";

export default function App() {
  return (
    <div style={{ fontFamily: "sans-serif", background: "#f8fafc", color: "#0f172a" }}>

      {/* HERO SECTION */}
      <section style={{ padding: "80px 20px", textAlign: "center" }}>
        <h1 style={{ fontSize: "3rem", marginBottom: "10px" }}>
          RAB INDIA
        </h1>
        <p style={{ fontSize: "1.2rem", color: "#475569" }}>
          Build on trust, Driven by quality
        </p>
        <p style={{ marginTop: "10px" }}>
          Complete Security & IT Solutions for Modern Businesses
        </p>

        <div style={{ marginTop: "20px" }}>
          <a href="tel:+917814421210">
            <button style={{ marginRight: "10px", padding: "10px 20px", background: "#2563eb", color: "white", border: "none", borderRadius: "6px" }}>
              <Phone size={16}/> Call Now
            </button>
          </a>

          <a href="https://wa.me/917814421210?text=Hi%20RAB%20India" target="_blank">
            <button style={{ padding: "10px 20px", borderRadius: "6px" }}>
              <MessageCircle size={16}/> WhatsApp
            </button>
          </a>
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ padding: "60px 20px", textAlign: "center", background: "#ffffff" }}>
        <h2>Our Services</h2>

        <div style={{ display: "grid", gap: "20px", marginTop: "30px" }}>
          <div style={{ padding: "20px", background: "#f1f5f9", borderRadius: "8px" }}>
            CCTV Surveillance Systems
          </div>
          <div style={{ padding: "20px", background: "#f1f5f9", borderRadius: "8px" }}>
            Networking Solutions
          </div>
          <div style={{ padding: "20px", background: "#f1f5f9", borderRadius: "8px" }}>
            Access Control & Biometrics
          </div>
          <div style={{ padding: "20px", background: "#f1f5f9", borderRadius: "8px" }}>
            Security Alarm Systems
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2>Why Choose Us</h2>

        <p style={{ marginTop: "20px" }}>✔ Trusted & Reliable Service</p>
        <p>✔ Fast Installation & Support</p>
        <p>✔ Experienced Technical Team</p>
      </section>

      {/* PRODUCTS PREVIEW */}
      <section style={{ padding: "60px 20px", textAlign: "center", background: "#ffffff" }}>
        <h2>Our Products</h2>

        <div style={{ marginTop: "20px" }}>
          <p>CCTV Cameras</p>
          <p>DVR / NVR Systems</p>
          <p>Biometric Devices</p>
          <p>Security Accessories</p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2>Need Security Solutions?</h2>
        <p>Contact us today for a customized quote</p>

        <a href="https://wa.me/917814421210">
          <button style={{ marginTop: "20px", padding: "12px 25px", background: "#2563eb", color: "white", border: "none", borderRadius: "6px" }}>
            Get a Quote
          </button>
        </a>
      </section>

    </div>
  );
}
