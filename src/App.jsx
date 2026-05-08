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
import cctvProduct from "./assets/cctv-product.png";
import telecomProduct from "./assets/telecom-product.png";
import accessProduct from "./assets/access-product.png";
import conferenceProduct from "./assets/conference-product.png";
import weighingProduct from "./assets/weighing-product.png";
import doorProduct from "./assets/door-product.png";
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
<section style={{ padding: "80px 20px", background: "#f1f5f9" }}>

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
  width: "500px", 
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
<section
  style={{
    padding: "80px 40px",
    background: "#ffffff",
    textAlign: "center"
  }}
>  

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "30px"
    }}
  >

    {/* CARD 1 */}
    <div
      style={{
        background: "white",
        borderRadius: "15px",
        overflow: "hidden",
        boxShadow: "0 5px 20px rgba(0,0,0,0.08)",
        transition: "0.3s",
        cursor: "pointer"
      }}
      onMouseOver={e => {
        e.currentTarget.style.transform = "translateY(-8px)";
      }}
      onMouseOut={e => {
        e.currentTarget.style.transform = "translateY(0px)";
      }}
    >
      <img
        src={cctvProduct}
        style={{
          width: "100%",
          height: "220px",
          objectFit: "cover"
        }}
      />

      <div style={{ padding: "25px" }}>
        <h3>CCTV Surveillance</h3>

        <p style={{ color: "#64748b", fontSize: "15px" }}>
          Advanced HD security camera systems for complete monitoring.
        </p>
      </div>
    </div>

    {/* CARD 2 */}
    <div
      style={{
        background: "white",
        borderRadius: "15px",
        overflow: "hidden",
        boxShadow: "0 5px 20px rgba(0,0,0,0.08)",
        transition: "0.3s",
        cursor: "pointer"
      }}
      onMouseOver={e => {
        e.currentTarget.style.transform = "translateY(-8px)";
      }}
      onMouseOut={e => {
        e.currentTarget.style.transform = "translateY(0px)";
      }}
    >
      <img
        src={telecomProduct}
        style={{
          width: "100%",
          height: "220px",
          objectFit: "cover"
        }}
      />

      <div style={{ padding: "25px" }}>
        <h3>Telecom Solutions</h3>

        <p style={{ color: "#64748b", fontSize: "15px" }}>
          Reliable telecom infrastructure and networking systems.
        </p>
      </div>
    </div>

    {/* CARD 3 */}
    <div
      style={{
        background: "white",
        borderRadius: "15px",
        overflow: "hidden",
        boxShadow: "0 5px 20px rgba(0,0,0,0.08)",
        transition: "0.3s",
        cursor: "pointer"
      }}
      onMouseOver={e => {
        e.currentTarget.style.transform = "translateY(-8px)";
      }}
      onMouseOut={e => {
        e.currentTarget.style.transform = "translateY(0px)";
      }}
    >
      <img
        src={accessProduct}
        style={{
          width: "100%",
          height: "220px",
          objectFit: "cover"
        }}
      />

      <div style={{ padding: "25px" }}>
        <h3>Access Control</h3>

        <p style={{ color: "#64748b", fontSize: "15px" }}>
          Smart biometric & access control systems for businesses.
        </p>
      </div>
    </div>

    {/* CARD 4 */}
    <div
      style={{
        background: "white",
        borderRadius: "15px",
        overflow: "hidden",
        boxShadow: "0 5px 20px rgba(0,0,0,0.08)",
        transition: "0.3s",
        cursor: "pointer"
      }}
      onMouseOver={e => {
        e.currentTarget.style.transform = "translateY(-8px)";
      }}
      onMouseOut={e => {
        e.currentTarget.style.transform = "translateY(0px)";
      }}
    >
      <img
        src={conferenceProduct}
        style={{
          width: "100%",
          height: "220px",
          objectFit: "cover"
        }}
      />

      <div style={{ padding: "25px" }}>
        <h3>Conference Room Solutions</h3>

        <p style={{ color: "#64748b", fontSize: "15px" }}>
          Professional audio & video conference room setup solutions.
        </p>
      </div>
    </div>

    {/* CARD 5 */}
    <div
      style={{
        background: "white",
        borderRadius: "15px",
        overflow: "hidden",
        boxShadow: "0 5px 20px rgba(0,0,0,0.08)",
        transition: "0.3s",
        cursor: "pointer"
      }}
      onMouseOver={e => {
        e.currentTarget.style.transform = "translateY(-8px)";
      }}
      onMouseOut={e => {
        e.currentTarget.style.transform = "translateY(0px)";
      }}
    >
      <img
        src={weighingProduct}
        style={{
          width: "100%",
          height: "220px",
          objectFit: "cover"
        }}
      />

      <div style={{ padding: "25px" }}>
        <h3>Weighing Scale</h3>

        <p style={{ color: "#64748b", fontSize: "15px" }}>
          Industrial and commercial weighing scale solutions.
        </p>
      </div>
    </div>

    {/* CARD 6 */}
    <div
      style={{
        background: "white",
        borderRadius: "15px",
        overflow: "hidden",
        boxShadow: "0 5px 20px rgba(0,0,0,0.08)",
        transition: "0.3s",
        cursor: "pointer"
      }}
      onMouseOver={e => {
        e.currentTarget.style.transform = "translateY(-8px)";
      }}
      onMouseOut={e => {
        e.currentTarget.style.transform = "translateY(0px)";
      }}
    >
      <img
        src={doorProduct}
        style={{
          width: "100%",
          height: "220px",
          objectFit: "cover"
        }}
      />

      <div style={{ padding: "25px" }}>
        <h3>Door Interlocking</h3>

        <p style={{ color: "#64748b", fontSize: "15px" }}>
          Smart door interlocking and security management systems.
        </p>
      </div>
    </div>

  </div>
</section>

     {/* CLIENTS */}
<section
  style={{
    padding: "70px 0",
    background: "white",
    overflow: "hidden"
  }}
>

  <h2
    style={{
      textAlign: "center",
      marginBottom: "50px",
      fontSize: "34px",
      color: "#0f172a"
    }}
  >
    Trusted By
  </h2>

  <div
    style={{
      overflow: "hidden",
      whiteSpace: "nowrap",
      position: "relative"
    }}
  >

    <div
      style={{
        display: "inline-flex",
        gap: "80px",
        animation: "scroll 20s linear infinite"
      }}
    >

     {[
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
  Steelbird,

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
  Steelbird,
].map((logo, i) => (

        <img
          key={i}
          src={logo}
          style={{
            height: "80px",
            width: "auto",
            objectFit: "contain",
            transition: "0.3s"
          }}
          onMouseOver={e => {
            e.currentTarget.style.transform = "scale(1.08)";
          }}
          onMouseOut={e => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        />
      ))}

    </div>
  </div>
</section>

      {/* WHY US */}
<section
  style={{
    padding: "90px 40px",
    background: "#f8fafc"
  }}
>

  <div style={{ textAlign: "center", marginBottom: "60px" }}>
    <h2
      style={{
        fontSize: "38px",
        color: "#0f172a",
        marginBottom: "15px"
      }}
    >
      Why Choose RAB INDIA
    </h2>

    <p
      style={{
        color: "#64748b",
        fontSize: "17px"
      }}
    >
      Delivering trusted telecom & security solutions across India
    </p>
  </div>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
      gap: "30px",
      maxWidth: "1200px",
      margin: "auto"
    }}
  >

    {/* BOX 1 */}
    <div
      style={{
        background: "white",
        padding: "35px",
        borderRadius: "18px",
        boxShadow: "0 5px 20px rgba(0,0,0,0.06)",
        transition: "0.3s",
        textAlign: "center"
      }}
      onMouseOver={e => {
        e.currentTarget.style.transform = "translateY(-8px)";
      }}
      onMouseOut={e => {
        e.currentTarget.style.transform = "translateY(0px)";
      }}
    >
      <div style={{ fontSize: "45px", marginBottom: "20px" }}>🏆</div>

      <h3 style={{ marginBottom: "15px" }}>
        Industry Experience
      </h3>

      <p style={{ color: "#64748b", lineHeight: "1.7" }}>
        Serving clients across India since 2016 with trusted solutions.
      </p>
    </div>

    {/* BOX 2 */}
    <div
      style={{
        background: "white",
        padding: "35px",
        borderRadius: "18px",
        boxShadow: "0 5px 20px rgba(0,0,0,0.06)",
        transition: "0.3s",
        textAlign: "center"
      }}
      onMouseOver={e => {
        e.currentTarget.style.transform = "translateY(-8px)";
      }}
      onMouseOut={e => {
        e.currentTarget.style.transform = "translateY(0px)";
      }}
    >
      <div style={{ fontSize: "45px", marginBottom: "20px" }}>🛠️</div>

      <h3 style={{ marginBottom: "15px" }}>
        Technical Experts
      </h3>

      <p style={{ color: "#64748b", lineHeight: "1.7" }}>
        Skilled professionals delivering quality installations & support.
      </p>
    </div>

    {/* BOX 3 */}
    <div
      style={{
        background: "white",
        padding: "35px",
        borderRadius: "18px",
        boxShadow: "0 5px 20px rgba(0,0,0,0.06)",
        transition: "0.3s",
        textAlign: "center"
      }}
      onMouseOver={e => {
        e.currentTarget.style.transform = "translateY(-8px)";
      }}
      onMouseOut={e => {
        e.currentTarget.style.transform = "translateY(0px)";
      }}
    >
      <div style={{ fontSize: "45px", marginBottom: "20px" }}>⚡</div>

      <h3 style={{ marginBottom: "15px" }}>
        Fast Support
      </h3>

      <p style={{ color: "#64748b", lineHeight: "1.7" }}>
        Quick response and reliable after-sales technical assistance.
      </p>
    </div>

    {/* BOX 4 */}
    <div
      style={{
        background: "white",
        padding: "35px",
        borderRadius: "18px",
        boxShadow: "0 5px 20px rgba(0,0,0,0.06)",
        transition: "0.3s",
        textAlign: "center"
      }}
      onMouseOver={e => {
        e.currentTarget.style.transform = "translateY(-8px)";
      }}
      onMouseOut={e => {
        e.currentTarget.style.transform = "translateY(0px)";
      }}
    >
      <div style={{ fontSize: "45px", marginBottom: "20px" }}>🤝</div>

      <h3 style={{ marginBottom: "15px" }}>
        Customer Trust
      </h3>

      <p style={{ color: "#64748b", lineHeight: "1.7" }}>
        Trusted by 1000+ customers for quality and long-term partnerships.
      </p>
    </div>

  </div>

</section>

     {/* FOOTER */}
<footer
  style={{
    background: "#0f172a",
    color: "white",
    padding: "70px 50px 30px"
  }}
>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "1.5fr 1fr 1.2fr 1fr",
alignItems: "start",
      gap: "40px",
      marginBottom: "50px"
    }}
  >

    {/* COMPANY */}
    <div>

      <img
        src={logo}
        alt="RAB INDIA"
        style={{
          height: "85px",
          marginBottom: "20px"
        }}
      />

      <p
        style={{
          color: "#cbd5e1",
          lineHeight: "1.8"
        }}
      >
        RAB INDIA delivers advanced telecom, networking and security
        solutions across India with trusted service and technical expertise.
      </p>

    </div>

    {/* QUICK LINKS */}
    <div>

      <h3 style={{ marginBottom: "25px" }}>
        Quick Links
      </h3>

      <p  
        style={{
    color: "#cbd5e1",
    marginBottom: "12px",
    cursor: "pointer",
    transition: "0.3s"
  }}
  onMouseOver={e => e.target.style.color = "#2563eb"}
  onMouseOut={e => e.target.style.color = "#cbd5e1"}
>
        Home
      </p>

      <p style={{ color: "#cbd5e1", marginBottom: "12px", cursor: "pointer" }}>
        Products
      </p>

      <p style={{ color: "#cbd5e1", marginBottom: "12px", cursor: "pointer" }}>
        About Us
      </p>

      <p style={{ color: "#cbd5e1", marginBottom: "12px", cursor: "pointer" }}>
        Contact
      </p>

    </div>

    {/* MAP */}
<div>

  <h3 style={{ marginBottom: "25px" }}>
    Our Location
  </h3>

  <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3422.2990162421393!2d76.79660137439747!3d30.934212275869584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ff56ca4b46b11%3A0xacf64d1a97f3a73b!2sRAB%20India!5e0!3m2!1sen!2sin!4v1778243011746!5m2!1sen!2sin"
  width="280"
  height="180"
  style={{
    border: "0",
    borderRadius: "12px"
  }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>

</div>
    
    {/* CONTACT */}
    <div>

      <h3 style={{ marginBottom: "25px" }}>
        Contact Us
      </h3>

      <p style={{ color: "#cbd5e1", marginBottom: "15px" }}>
        📍 Baddi, Himachal Pradesh
      </p>

      <p style={{ color: "#cbd5e1", marginBottom: "15px" }}>
        📞 +91 7814421210
      </p>

      <p style={{ color: "#cbd5e1", marginBottom: "15px" }}>
        ✉ info@rabindia.co.in
      </p>

    </div>

  </div>

  {/* BOTTOM */}
  <div
    style={{
      borderTop: "1px solid #1e293b",
      paddingTop: "25px",
      textAlign: "center",
      color: "#94a3b8",
      fontSize: "14px"
    }}
  >
    © 2025 RAB INDIA. All Rights Reserved.
  </div>

</footer>
      <style>
{`
@keyframes scroll {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-50%);
  }
}
`}
</style>
      
    </div>
  );
}
