import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { FaGraduationCap, FaSun, FaMoon, FaCheckCircle, FaChartLine } from 'react-icons/fa';

const LandingPage = ({ toggleTheme, theme }) => {
  return (
    <div className="landing-page" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <nav style={{ background: 'var(--bg-primary)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container" style={{ padding: '1.5rem 1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 'bold', fontSize: '1.5rem', color: 'var(--accent-color)' }}>
            <FaGraduationCap /> No-Show
          </div>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <button onClick={toggleTheme} className="btn" style={{ background: 'transparent', color: 'var(--text-primary)', fontSize: '1.2rem' }}>
              {theme === 'light' ? <FaMoon /> : <FaSun />}
            </button>
            <Link to="/login" className="btn" style={{ color: 'var(--text-primary)' }}>Login</Link>
            <Link to="/signup" className="btn btn-primary">Get Started</Link>
          </div>
        </div>
      </nav>

      <main className="container" style={{ textAlign: 'center', padding: '4rem 1rem', flex: 1 }}>
        <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', background: 'linear-gradient(to right, var(--accent-color), #bc52ee)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Never Miss a Beat. <br /> Or a Class.
        </h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 3rem' }}>
          Track your attendance with precision. Know exactly when you can skip and when you must attend. Manage your academic life stress-free.
        </p>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
          <Link to="/signup" className="btn btn-primary" style={{ padding: '0.75rem 2rem', fontSize: '1.1rem' }}>Start Tracking Free</Link>
        </div>

        <div style={{ marginTop: '5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
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
  <div className="card" style={{ textAlign: 'left', transition: 'transform 0.2s' }}>
    <div style={{ fontSize: '2rem', color: 'var(--accent-color)', marginBottom: '1rem' }}>{icon}</div>
    <h3 style={{ marginBottom: '0.5rem', fontSize: '1.25rem' }}>{title}</h3>
    <p style={{ color: 'var(--text-secondary)' }}>{desc}</p>
  </div>
);

export default LandingPage;
