import logo from "./assets/logo.png";
import welcomeImg from "./assets/welcome.png";

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
import aboutBanner from "./assets/about-banner.jpg";
import { Link } from "react-router-dom";

export default function About() {

  return (
    <div style={{ fontFamily: "Poppins, sans-serif" }}>

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
    <Link
  to="/"
  style={{
    margin: "0 15px",
    cursor: "pointer",
    textDecoration: "none",
    color: "black"
  }}
  onMouseOver={e => e.target.style.color = "#2563eb"}
  onMouseOut={e => e.target.style.color = "black"}
>
  Home
</Link>
    <a style={{ margin: "0 15px", cursor: "pointer" }}
  onMouseOver={e => e.target.style.color = "#2563eb"}
  onMouseOut={e => e.target.style.color = "black"}>Products</a>
    <Link
  to="/about"
  style={{
    margin: "0 15px",
    cursor: "pointer",
    textDecoration: "none",
    color: "black"
  }}
  onMouseOver={e => e.target.style.color = "#2563eb"}
  onMouseOut={e => e.target.style.color = "black"}
>
  About
</Link>
    <a style={{ margin: "0 15px", cursor: "pointer" }}
  onMouseOver={e => e.target.style.color = "#2563eb"}
  onMouseOut={e => e.target.style.color = "black"}>Contact</a>
  </div>
  </div>

      {/* HERO */}
<section
  style={{
    height: "500px",
    backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${aboutBanner})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center"
  }}
>

 <div
  style={{
    width: "100%",
    paddingRight: "120px",
    textAlign: "right"
  }}
>

  <h1
    style={{
      color: "white",
      fontSize: "78px",
      fontWeight: "700",
      letterSpacing: "1px",
      lineHeight: "1.1",
      marginBottom: "20px"
    }}
  >
    About <br />

<span style={{ marginRight: "55px", display: "inline-block" }}>
  Us
</span>
  </h1>

  </div>

</section>
     
      {/* COMPANY INTRO */}
      <section
        style={{
          padding: "90px 50px",
          background: "white"
        }}
      >

        <div
          style={{
            display: "flex",
            gap: "70px",
            alignItems: "center",
            flexWrap: "wrap",
            justifyContent: "center"
          }}
        >

          {/* IMAGE */}
          <img
            src={welcomeImg}
            style={{

              width: "520px",
              width: "500px",
              borderRadius: "20px",
              boxShadow: "0 8px 30px rgba(0,0,0,0.12)"
            }}
          />

          {/* TEXT */}
          <div style={{ maxWidth: "550px" }}>

            <h2
              style={{
                fontSize: "46px",
fontWeight: "700",
                fontSize: "38px",
                marginBottom: "25px",
                color: "#0f172a"
              }}
            >
              Who We Are
            </h2>

            <p
              style={{
                color: "#475569",
                lineHeight: "1.9",
                marginBottom: "20px"
              }}
            >
              Founded in 2016 by Mr. Rahul Goyal, RAB INDIA is a trusted
              provider of telecom, networking and security solutions
              across India.
            </p>

            <p
              style={{
                color: "#475569",
                lineHeight: "1.9"
              }}
            >
              With strong technical expertise and customer-focused service,
              we have successfully delivered advanced solutions to
              industries, businesses and organizations throughout North India.
            </p>

          </div>

        </div>

      </section>

      {/* VISION MISSION */}
      {/* MISSION VISION */}
      <section
        style={{
          padding: "90px 40px",
          background: "#f8fafc"
        }}
      >

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
            gap: "35px",
            maxWidth: "1200px",
            margin: "auto"
          }}
        >

          {/* MISSION */}
        <div
  style={{
    background: "white",
    padding: "45px",
    borderRadius: "20px",
    boxShadow: "0 5px 20px rgba(0,0,0,0.06)",
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

            <div style={{ fontSize: "50px", marginBottom: "20px" }}>
              🎯
            </div>

            <h2
              style={{
                marginBottom: "20px",
                color: "#0f172a"
              }}
            >
              Our Mission
            </h2>

            <p
              style={{
                color: "#64748b",
                lineHeight: "1.8"
              }}
            >
              To provide reliable, innovative and high-quality telecom
              and security solutions that help businesses operate safely
              and efficiently.
            </p>

          </div>

          {/* VISION */}
          <div
            style={{
              background: "white",
              padding: "45px",
              borderRadius: "20px",
              boxShadow: "0 5px 20px rgba(0,0,0,0.06)"
            }}
          >

            <div style={{ fontSize: "50px", marginBottom: "20px" }}>
              🚀
            </div>

            <h2
              style={{
                marginBottom: "20px",
                color: "#0f172a"
              }}
            >
              Our Vision
            </h2>

            <p
              style={{
                color: "#64748b",
                lineHeight: "1.8"
              }}
            >
              To become one of India's most trusted technology solution
              providers through innovation, service excellence and
              customer satisfaction.
            </p>

          </div>

        </div>

      </section>

      {/* STATS */}
      <section
        style={{
          padding: "90px 40px",
          background: "linear-gradient(135deg,#020617,#0f172a,#1e293b)",
          background: "#0f172a",
          color: "white"
        }}
      >

        <div
          style={{
            display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
            gap: "40px",
            textAlign: "center",
            maxWidth: "1200px",
            margin: "auto"
          }}
        >

          <div>
            <h2 style={{ fontSize: "42px" }}>9+</h2>
            <p style={{ color: "#cbd5e1" }}>Years Experience</p>
          </div>

          <div>

            <h2 style={{ fontSize: "42px" }}>1000+</h2>
            <p style={{ color: "#cbd5e1" }}>Happy Clients</p>
          </div>

          <div>
            <h2 style={{ fontSize: "42px" }}>24/7</h2>
            <p style={{ color: "#cbd5e1" }}>Technical Support</p>
          </div>

          <div>
            <h2 style={{ fontSize: "48px" }}>100+</h2>
            <p style={{ color: "#cbd5e1" }}>Projects Delivered</p>
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

      {/* FOOTER */}
      <footer
        style={{
          background: "#0f172a",
          color: "white",
          padding: "55px 50px 25px"
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
      
            <p style={{
          color: "#cbd5e1",
          marginBottom: "12px",
          cursor: "pointer",
          transition: "0.3s"
        }}
        onMouseOver={e => e.target.style.color = "#2563eb"}
        onMouseOut={e => e.target.style.color = "#cbd5e1"}
      >
              Products
            </p>
      
            <p style={{
          color: "#cbd5e1",
          marginBottom: "12px",
          cursor: "pointer",
          transition: "0.3s"
        }}
        onMouseOver={e => e.target.style.color = "#2563eb"}
        onMouseOut={e => e.target.style.color = "#cbd5e1"}
      >
              About Us
            </p>
      
            <p style={{
          color: "#cbd5e1",
          marginBottom: "12px",
          cursor: "pointer",
          transition: "0.3s"
        }}
        onMouseOver={e => e.target.style.color = "#2563eb"}
        onMouseOut={e => e.target.style.color = "#cbd5e1"}
      >
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
        width="220"
        height="150"
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
