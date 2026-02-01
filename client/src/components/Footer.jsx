import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = ({ style }) => {
  return (
    <footer
      className="footer"
      style={style}
    >
      <div className="footer-developer">Developer: Akash Shrivastav</div>

      <div className="footer-links">
        <Link
          to="/privacy"
          className="hover-link footer-link"
        >
          Privacy Policy
        </Link>
        <Link
          to="/contact"
          className="hover-link footer-link"
        >
          Contact
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
