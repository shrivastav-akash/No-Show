import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { FaGraduationCap, FaSun, FaMoon, FaCheckCircle, FaChartLine } from 'react-icons/fa';
import './LandingPage.css';

const LandingPage = ({ toggleTheme, theme }) => {
  return (
    <div className="landing-page">
      <nav className="landing-nav">
        <div className="container landing-nav-container">
          <div className="landing-logo">
            <FaGraduationCap /> No-Show
          </div>
          <div className="landing-nav-links">
            <button onClick={toggleTheme} className="btn theme-toggle-btn">
              {theme === 'light' ? <FaMoon /> : <FaSun />}
            </button>
            <Link to="/login" className="btn login-link">Login</Link>
            <Link to="/signup" className="btn btn-primary">Get Started</Link>
          </div>
        </div>
      </nav>

      <main className="container landing-main">
        <h1 className="hero-title">
          Never Miss a Beat. <br /> Or a Class.
        </h1>
        <p className="hero-subtitle">
          Track your attendance with precision. Know exactly when you can skip and when you must attend. Manage your academic life stress-free.
        </p>
        
        <div className="cta-container">
          <Link to="/signup" className="btn btn-primary cta-btn">Start Tracking Free</Link>
        </div>

        <div className="features-grid">
          <FeatureCard 
            icon={<FaChartLine />} 
            title="Smart Calculations" 
            desc="Instantly see how many classes you can skip while maintaining your target attendance." 
          />
          <FeatureCard 
            icon={<FaCheckCircle />} 
            title="15-Day Session" 
            desc="Stay logged in for 15 days. No annoying daily logins while you focus on studying." 
          />
          <FeatureCard 
            icon={<FaGraduationCap />} 
            title="Course Management" 
            desc="Add all your courses, set custom criteria, and manage ODs with ease." 
          />
        </div>
      </main>

      <Footer />
    </div>
  );
};

const FeatureCard = ({ icon, title, desc }) => (
  <div className="card feature-card">
    <div className="feature-icon">{icon}</div>
    <h3 className="feature-title">{title}</h3>
    <p className="feature-desc">{desc}</p>
  </div>
);

export default LandingPage;
