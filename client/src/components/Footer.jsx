import React from "react";
import { Link } from "react-router-dom";

const Footer = ({ style }) => {
  return (
    <footer
      style={{
        marginTop: "auto",
        padding: "2rem 3rem",
        borderTop: "1px solid var(--border-color)",
        color: "var(--text-secondary)",
        background: "var(--bg-primary)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "1rem",
        ...style,
      }}
    >
      <div style={{ fontWeight: "500" }}>Developer: Akash Shrivastav</div>

      <div style={{ display: "flex", gap: "2rem" }}>
        <Link
          to="/privacy"
          style={{ color: "var(--text-secondary)", textDecoration: "none" }}
          className="hover-link"
        >
          Privacy Policy
        </Link>
        <Link
          to="/contact"
          style={{ color: "var(--text-secondary)", textDecoration: "none" }}
          className="hover-link"
        >
          Contact
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
