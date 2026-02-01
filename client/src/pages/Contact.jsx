import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaEnvelope, FaLinkedin, FaTwitter } from "react-icons/fa";

const Contact = ({ toggleTheme, theme }) => {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--bg-secondary)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header toggleTheme={toggleTheme} theme={theme} />

      <main
        className="container"
        style={{ padding: "3rem 1rem", flex: 1, maxWidth: "600px" }}
      >
        <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>
          Get in Touch
        </h1>

        <div className="card" style={{ marginBottom: "2rem" }}>
          <p
            style={{
              fontSize: "1.1rem",
              color: "var(--text-secondary)",
              textAlign: "center",
              marginBottom: "2rem",
            }}
          >
            Have questions, feedback, or need support? Reach out to us through
            any of the channels below.
          </p>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
          >
            <a
              href="mailto:shrivastav.work@gmail.com"
              className="btn"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                background: "var(--bg-secondary)",
                color: "var(--text-primary)",
                padding: "1rem",
                textDecoration: "none",
              }}
            >
              <FaEnvelope style={{ fontSize: "1.5rem", color: "#EA4335" }} />
              <div>
                <div style={{ fontWeight: "600" }}>Email</div>
                <div
                  style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}
                >
                  akash@example.com
                </div>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/shrivastavakash/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                background: "var(--bg-secondary)",
                color: "var(--text-primary)",
                padding: "1rem",
                textDecoration: "none",
              }}
            >
              <FaLinkedin style={{ fontSize: "1.5rem", color: "#0A66C2" }} />
              <div>
                <div style={{ fontWeight: "600" }}>LinkedIn</div>
                <div
                  style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}
                >
                  linkedin.com/in/akash
                </div>
              </div>
            </a>

            <a
              href="https://x.com/_akashrivastav_"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                background: "var(--bg-secondary)",
                color: "var(--text-primary)",
                padding: "1rem",
                textDecoration: "none",
              }}
            >
              <FaTwitter
                style={{ fontSize: "1.5rem", color: "var(--text-primary)" }}
              />
              <div>
                <div style={{ fontWeight: "600" }}>X (Twitter)</div>
                <div
                  style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}
                >
                  @akash
                </div>
              </div>
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
