import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaEnvelope, FaLinkedin, FaTwitter } from "react-icons/fa";
import "./Contact.css";

const Contact = ({ toggleTheme, theme }) => {
  return (
    <div className="contact-container">
      <Header toggleTheme={toggleTheme} theme={theme} />

      <main className="container contact-main">
        <h1 className="contact-title">
          Get in Touch
        </h1>

        <div className="card contact-card">
          <p className="contact-intro">
            Have questions, feedback, or need support? Reach out to us through
            any of the channels below.
          </p>

          <div className="contact-links">
            <a
              href="mailto:shrivastav.work@gmail.com"
              className="btn contact-link-btn"
            >
              <FaEnvelope className="contact-icon icon-email" />
              <div>
                <div className="channel-name">Email</div>
                <div className="channel-detail">
                  shrivastav.work@gmail.com
                </div>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/shrivastavakash/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn contact-link-btn"
            >
              <FaLinkedin className="contact-icon icon-linkedin" />
              <div>
                <div className="channel-name">LinkedIn</div>
                <div className="channel-detail">
                  https://www.linkedin.com/in/shrivastavakash/
                </div>
              </div>
            </a>

            <a
              href="https://x.com/_akashrivastav_"
              target="_blank"
              rel="noopener noreferrer"
              className="btn contact-link-btn"
            >
              <FaTwitter className="contact-icon icon-twitter" />
              <div>
                <div className="channel-name">X (Twitter)</div>
                <div className="channel-detail">
                  @_akashrivastav_
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
