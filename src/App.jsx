import networking from "./assets/networking.png";
import telecom from "./assets/telecom.png";
import cctv from "./assets/cctv.png";
import conference from "./assets/conference.png";
import weighing from "./assets/weighing.png";
import fire from "./assets/fire.png";
import access from "./assets/access.png";
import interlocking from "./assets/interlocking.png";
import logo from "./assets/logo.png";
import welcomeImg from "./assets/welcome.png";
import { useState, useEffect } from "react";

export default function App() {

  // Simple slider
  const images = [
    networking,
  telecom,
  cctv,
  conference,
  weighing,
  access,
  interlocking,
  fire
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ fontFamily: "Poppins,sans-serif", background: "#f8fafc" }}>

     {/* HEADER */}
<div
  style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 50px",
    background: "white",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  }}
>

  {/* LEFT: LOGO + NAME */}
<div style={{ display: "flex", alignItems: "center", gap: "10px" }}>

  <img
    src={logo}
    alt="RAB INDIA"
    style={{
      height: "80px",
      marginRight: "20px",
      objectFit: "contain"
    }}
  />

  <div>
    <h2 style={{ margin: 0 }}>RAB INDIA</h2>
    <p style={{ margin: 0, fontSize: "13px", color: "#64748b" }}>
      Build on trust, Driven by quality
    </p>
  </div>

</div>

  {/* RIGHT: NAVBAR */}
<div> 
    <a style={{ margin: "0 15px", cursor: "pointer" }}
  onMouseOver={e => e.target.style.color = "#2563eb"}
  onMouseOut={e => e.target.style.color = "black"}>Home</a>
    <a style={{ margin: "0 15px", cursor: "pointer" }}
  onMouseOver={e => e.target.style.color = "#2563eb"}
  onMouseOut={e => e.target.style.color = "black"}>Products</a>
    <a style={{ margin: "0 15px", cursor: "pointer" }}
  onMouseOver={e => e.target.style.color = "#2563eb"}
  onMouseOut={e => e.target.style.color = "black"}>About</a>
    <a style={{ margin: "0 15px", cursor: "pointer" }}
  onMouseOver={e => e.target.style.color = "#2563eb"}
  onMouseOut={e => e.target.style.color = "black"}>Contact</a>
  </div>
 </div>

      {/* SLIDER */}
<div style={{ 
  width: "100%", 
  height: "500px",
  overflow: "hidden"
}}>
  <img 
    src={images[index]} 
    style={{ 
      width: "100%", 
      height: "100%", 
      objectFit: "cover"
    }} 
  />
</div>

{/* CTA BELOW SLIDER (STICKED) */}
<div style={{ 
  textAlign: "center",
  marginTop: "-25px",   
  marginBottom: "30px",
  position: "relative",
  zIndex: 10
}}>
  <button 
    style={{ 
      padding: "12px 30px", 
      background: "#2563eb", 
      color: "white", 
      border: "none",
      borderRadius: "8px",
      fontSize: "16px",
      cursor: "pointer",
      boxShadow: "0 6px 20px rgba(0,0,0,0.15)"
    }}
  >
    Get Quote
  </button>
</div>

      {/* WELCOME */}
<section style={{ padding: "60px 20px", background: "#f1f5f9" }}>

  <div style={{ 
    display: "flex", 
    flexWrap: "wrap", 
    alignItems: "center", 
    justifyContent: "center", 
    lineHeight: "1.6",
    gap: "80px" 
  }}>

    {/* LEFT IMAGE */}
    <img 
  src={welcomeImg} 
  style={{ 
  width: "450px", 
  borderRadius: "10px",
  boxShadow: "0 5px 15px rgba(0,0,0,0.15)"
}} 
/>

    {/* RIGHT TEXT */}
    <div style={{ maxWidth: "500px" }}>
      <h2 style={{ fontSize: "28px", marginBottom: "20px" }}>
  Welcome to RAB INDIA
</h2>

      <p>
        Founded in the year 2016 by Mr. Rahul Goyal, RAB INDIA offers telecom and security solutions to customers all over India. With more than 1000+ customers only in the north region of India, renowned clients trust and rely on RAB INDIA for advanced security and IT solutions.
      </p>

     <button 
  style={{ 
    marginTop: "20px", 
    padding: "12px 25px", 
    background: "#2563eb", 
    color: "white", 
    border: "none",
    borderRadius: "6px",
    cursor: "pointer"
  }}
  onMouseOver={e => e.target.style.background = "#1d4ed8"}
  onMouseOut={e => e.target.style.background = "#2563eb"}
>
  Read More
</button>
    </div>

  </div>

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
