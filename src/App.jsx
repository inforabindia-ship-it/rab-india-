import { useState, useEffect } from "react";

export default function App() {

  // Simple slider
  const images = [
    "https://images.unsplash.com/photo-1581092335397-9583eb92d232",
    "https://images.unsplash.com/photo-1581091215367-59ab6b4b1b4b",
    "https://images.unsplash.com/photo-1581093588401-22b3c2f5d2a4"
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ fontFamily: "sans-serif", background: "#f8fafc" }}>

      {/* HEADER */}
      <div style={{ display: "flex", justifyContent: "space-between", padding: "15px 40px", background: "white", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
        <h2>RAB INDIA</h2>

        <div>
          <a style={{ margin: "0 10px" }}>Home</a>
          <a style={{ margin: "0 10px" }}>Products</a>
          <a style={{ margin: "0 10px" }}>About</a>
          <a style={{ margin: "0 10px" }}>Contact</a>
        </div>
      </div>

      {/* SLIDER */}
      <div>
        <img src={images[index]} style={{ width: "100%", height: "400px", objectFit: "cover" }} />
      </div>

      {/* WELCOME */}
      <section style={{ padding: "50px", textAlign: "center" }}>
        <h2>Welcome to RAB INDIA</h2>

        <p style={{ maxWidth: "900px", margin: "auto", marginTop: "20px" }}>
          Founded in the year 2016 by Mr. Rahul Goyal, RAB INDIA offers telecom and security solutions to customers all over India. With more than 1000+ customers only in the north region of India, renowned clients trust RAB INDIA for networking, access control, biometric, CCTV, fire alarm, PA system and more.
        </p>

        <button style={{ marginTop: "20px", padding: "10px 20px", background: "#2563eb", color: "white", border: "none" }}>
          Read More
        </button>
      </section>

      {/* PRODUCTS */}
      <section style={{ padding: "50px", background: "white", textAlign: "center" }}>
        <h2>Our Products</h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: "20px", marginTop: "30px" }}>
          <div>CCTV</div>
          <div>Telecom Solution</div>
          <div>Biometric & Access Control</div>
          <div>Door Interlocking</div>
          <div>Weighing Scale</div>
          <div>Conference Room Solution</div>
        </div>
      </section>

      {/* CLIENTS */}
      <section style={{ padding: "50px", textAlign: "center" }}>
        <h2>Our Clients</h2>
        <p>1000+ Happy Customers Across India</p>
      </section>

      {/* WHY US */}
      <section style={{ padding: "50px", background: "white" }}>
        <h2 style={{ textAlign: "center" }}>Why Us</h2>

        <div style={{ maxWidth: "800px", margin: "auto", marginTop: "20px" }}>
          <p>✔ Strong Presence In North India</p>
          <p>✔ Team Of Technical Experts</p>
          <p>✔ Multiple Solutions Under One Roof</p>
          <p>✔ 24/7 Technical Support</p>
          <p>✔ Customer Satisfaction First</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#020617", color: "white", padding: "40px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))" }}>
          
          <div>
            <h3>About Us</h3>
            <p>RAB INDIA provides telecom and security solutions across India.</p>
          </div>

          <div>
            <h3>Contact</h3>
            <p>Email: info@rabindia.co.in</p>
            <p>Phone: +91 7814421210</p>
          </div>

          <div>
            <h3>Quick Links</h3>
            <p>Home</p>
            <p>Products</p>
            <p>Contact</p>
          </div>

        </div>

        <p style={{ textAlign: "center", marginTop: "20px" }}>
          © RAB INDIA
        </p>
      </footer>

    </div>
  );
}
