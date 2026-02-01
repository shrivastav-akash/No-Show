import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import './Login.css';

const Login = ({ toggleTheme, theme }) => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(formData.email, formData.password);
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.msg || 'Login failed');
    }
  };

  return (
    <div className="login-container">
      <Header toggleTheme={toggleTheme} theme={theme} />

      <main className="container login-main">
        <div className="card login-card">
          <h2 className="login-title">Welcome Back</h2>
          {error && <div className="error-message">{error}</div>}
          
          <form onSubmit={handleSubmit}>
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

            <button type="submit" className="btn btn-primary submit-btn">Login</button>
          </form>

          <p className="signup-link-container">
            Don't have an account? <Link to="/signup" className="signup-link">Sign up</Link>
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Login;
