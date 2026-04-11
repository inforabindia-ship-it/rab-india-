import { Phone, MessageCircle } from "lucide-react";

export default function App() {
  return (
    <div style={{ fontFamily: "sans-serif", background: "#0f172a", color: "white" }}>

      {/* HERO */}
      <section style={{ padding: "80px 20px", textAlign: "center" }}>
        <h1 style={{ fontSize: "3rem" }}>RAB INDIA</h1>
        <p style={{ color: "#94a3b8" }}>Build on trust, Driven by quality</p>
        <p>Complete Security & IT Solutions for Modern Businesses</p>

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
      <section style={{ padding: "50px", textAlign: "center", background: "#020617" }}>
        <h2>Our Services</h2>
        <p>CCTV Surveillance Systems</p>
        <p>Networking Solutions</p>
        <p>Access Control & Biometrics</p>
        <p>Security Alarm Systems</p>
      </section>

      {/* WHY CHOOSE US */}
      <section style={{ padding: "50px", textAlign: "center" }}>
        <h2>Why Choose Us</h2>
        <p>✔ Trusted & Reliable Service</p>
        <p>✔ Fast Installation</p>
        <p>✔ Expert Technical Team</p>
      </section>

      {/* CONTACT */}
      <section style={{ padding: "50px", textAlign: "center", background: "#020617" }}>
        <h2>Contact Us</h2>
        <p>📞 +91-7814421210</p>
        <p>📧 info@rabindia.co.in</p>
      </section>

      {/* MAP */}
      <iframe
        src="https://www.google.com/maps?q=Baddi,Himachal+Pradesh&output=embed"
        width="100%"
        height="300"
        style={{ border: 0 }}
      ></iframe>

    </div>
  );
}
