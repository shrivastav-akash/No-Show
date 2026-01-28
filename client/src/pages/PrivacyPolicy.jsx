import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PrivacyPolicy = ({ toggleTheme, theme }) => {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-secondary)', display: 'flex', flexDirection: 'column' }}>
      <Header toggleTheme={toggleTheme} theme={theme} />
      
      <main className="container" style={{ padding: '3rem 1rem', flex: 1, maxWidth: '800px' }}>
        <div className="card">
          <h1 style={{ marginBottom: '1.5rem', color: 'var(--accent-color)' }}>Privacy Policy</h1>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: '1.6' }}>
            Last updated: January 2026
          </p>

          <h3 style={{ marginBottom: '0.5rem' }}>1. Introduction</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
            Welcome to No-Show. We respect your privacy and are committed to protecting your personal data. 
            This Privacy Policy explains how we collect, use, and safeguard your information when you use our attendance tracking application.
          </p>

          <h3 style={{ marginBottom: '0.5rem' }}>2. Information We Collect</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
            We collect the following personal information to provide our services:
            <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
              <li>User Credentials (Username, Email, Password)</li>
              <li>University Name (Optional)</li>
              <li>Course Data (Names, Codes, Attendance Records)</li>
            </ul>
          </p>

          <h3 style={{ marginBottom: '0.5rem' }}>3. How We Use Your Data</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
            Your data is used solely for the purpose of helping you manage your academic attendance. We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties.
          </p>

          <h3 style={{ marginBottom: '0.5rem' }}>4. Data Storage and Security</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
            We implement a variety of security measures to maintain the safety of your personal information. Your password is hashed using industry-standard bcrypt encryption before storage. We use JWT (JSON Web Tokens) for secure session management.
          </p>

          <h3 style={{ marginBottom: '0.5rem' }}>5. Contact Us</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '0', lineHeight: '1.6' }}>
            If you have any questions about this Privacy Policy, please contact us via the Contact page.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
