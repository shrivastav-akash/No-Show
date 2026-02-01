import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaUser, FaEnvelope, FaLock, FaUniversity } from 'react-icons/fa';
import './Signup.css';

const Signup = ({ toggleTheme, theme }) => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '', university: '' });
  const [error, setError] = useState('');
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(formData.username, formData.email, formData.password, formData.university);
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.msg || 'Signup failed');
    }
  };

  return (
    <div className="signup-container">
      <Header toggleTheme={toggleTheme} theme={theme} />

      <main className="container signup-main">
        <div className="card signup-card">
          <h2 className="signup-title">Create Account</h2>
          {error && <div className="error-message">{error}</div>}
          
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Username</label>
              <div className="input-wrapper">
                <FaUser className="input-icon" />
                <input 
                  type="text" 
                  required
                  className="btn form-input"
                  value={formData.username}
                  onChange={(e) => setFormData({...formData, username: e.target.value})}
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Email Address</label>
              <div className="input-wrapper">
                <FaEnvelope className="input-icon" />
                <input 
                  type="email" 
                  required
                  className="btn form-input"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </div>

             <div className="form-group">
              <label className="form-label">University (Optional)</label>
              <div className="input-wrapper">
                <FaUniversity className="input-icon" />
                <input 
                  type="text" 
                  className="btn form-input"
                  value={formData.university}
                  onChange={(e) => setFormData({...formData, university: e.target.value})}
                />
              </div>
            </div>
            
            <div className="form-group-last">
              <label className="form-label">Password</label>
              <div className="input-wrapper">
                <FaLock className="input-icon" />
                <input 
                  type="password" 
                  required
                  className="btn form-input"
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                />
              </div>
            </div>

            <button type="submit" className="btn btn-primary submit-btn">Sign Up</button>
          </form>

          <p className="login-link-container">
            Already have an account? <Link to="/login" className="login-link">Login</Link>
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Signup;
