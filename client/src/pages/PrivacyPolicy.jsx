import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./PrivacyPolicy.css";

const PrivacyPolicy = ({ toggleTheme, theme }) => {
  return (
    <div className="privacy-container">
      <Header toggleTheme={toggleTheme} theme={theme} />

      <main className="container privacy-main">
        <div className="card">
          <h1 className="privacy-title">
            Privacy Policy
          </h1>
          <p className="last-updated">
            Last updated: January 2026
          </p>

          <h3 className="section-title">1. Introduction</h3>
          <p className="section-content">
            Welcome to No-Show. We respect your privacy and are committed to
            protecting your personal data. This Privacy Policy explains how we
            collect, use, and safeguard your information when you use our
            attendance tracking application.
          </p>

          <h3 className="section-title">2. Information We Collect</h3>
          <p className="section-content">
            We collect the following personal information to provide our
            services:
            <ul className="info-list">
              <li>User Credentials (Username, Email, Password)</li>
              <li>Google Profile Data (Name, Email, Profile Picture)</li>
              <li>University Name (Optional)</li>
              <li>Course Data (Names, Codes, Attendance Records)</li>
            </ul>
          </p>

          <h3 className="section-title">3. How We Use Your Data</h3>
          <p className="section-content">
            Your data is used solely for the purpose of helping you manage your
            academic attendance. We do not sell, trade, or otherwise transfer
            your personally identifiable information to outside parties.
          </p>

          <h3 className="section-title">
            4. Data Storage and Security
          </h3>
          <p className="section-content">
            We implement a variety of security measures to maintain the safety
            of your personal information. Your password is hashed using
            industry-standard bcrypt encryption before storage. We use JWT (JSON
            Web Tokens) for secure session management.
          </p>

          <h3 className="section-title">5. Contact Us</h3>
          <p className="section-content-last">
            If you have any questions about this Privacy Policy or anything,
            please contact us via the Contact page.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
