import logo from "./assets/logo.png";
import welcomeImg from "./assets/welcome.png";

export default function About() {

  return (
    <div style={{ fontFamily: "Poppins, sans-serif" }}>

      {/* HERO */}
      <section
        style={{
          background: "#0f172a",
          color: "white",
          padding: "100px 40px",
          textAlign: "center"
        }}
      >

        <h1
          style={{
            fontSize: "52px",
            marginBottom: "20px"
          }}
        >
          About RAB INDIA
        </h1>

        <p
          style={{
            maxWidth: "800px",
            margin: "auto",
            fontSize: "18px",
            color: "#cbd5e1",
            lineHeight: "1.8"
          }}
        >
          Delivering trusted telecom, networking and security solutions
          across India since 2016.
        </p>

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
              width: "500px",
              borderRadius: "20px",
              boxShadow: "0 8px 30px rgba(0,0,0,0.12)"
            }}
          />

          {/* TEXT */}
          <div style={{ maxWidth: "550px" }}>

            <h2
              style={{
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
              boxShadow: "0 5px 20px rgba(0,0,0,0.06)"
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
          background: "#0f172a",
          color: "white"
        }}
      >

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
            gap: "40px",
            textAlign: "center",
            maxWidth: "1200px",
            margin: "auto"
          }}
        >

          <div>
            <h2 style={{ fontSize: "48px" }}>9+</h2>
            <p style={{ color: "#cbd5e1" }}>Years Experience</p>
          </div>

          <div>
            <h2 style={{ fontSize: "48px" }}>1000+</h2>
            <p style={{ color: "#cbd5e1" }}>Happy Clients</p>
          </div>

          <div>
            <h2 style={{ fontSize: "48px" }}>24/7</h2>
            <p style={{ color: "#cbd5e1" }}>Technical Support</p>
          </div>

          <div>
            <h2 style={{ fontSize: "48px" }}>100+</h2>
            <p style={{ color: "#cbd5e1" }}>Projects Delivered</p>
          </div>

        </div>

      </section>

    </div>
  );
}
