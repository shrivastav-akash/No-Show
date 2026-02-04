import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import { useAuth } from '../context/AuthContext';
import api from '../utils/api';
import Footer from '../components/Footer';
import { FaUser, FaEnvelope, FaUniversity, FaSave } from 'react-icons/fa';
import './Profile.css';

const Profile = ({ toggleTheme, theme }) => {
  const { user, updateUser } = useAuth();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    university: ''
  });
  const [status, setStatus] = useState({ type: '', msg: '' });

  useEffect(() => {
    if (user) {
      // eslint-disable-next-line
      setFormData({
        username: user.username || '',
        email: user.email || '',
        university: user.university || ''
      });
    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: 'info', msg: 'Updating...' });
    
    try {
      const res = await api.put('/users/profile', {
        name: formData.username, // Sending as 'name' based on previous inference but controller checks username too? 
        // Controller: const { name, university } = req.body; if (name) userFields.username = name;
        // Client: name: formData.username
        university: formData.university
      });
      // Email is usually not editable easily without verification, so I'll skip sending email updates unless backend supports it safely.
      // Backend controller only looks for name and university.
      
      updateUser(res.data);
      setStatus({ type: 'success', msg: 'Profile updated successfully!' });
    } catch {
      setStatus({ type: 'error', msg: 'Failed to update profile.' });
    }
  };

  const getStatusClass = (type) => {
    switch (type) {
      case 'success': return 'status-success';
      case 'error': return 'status-error';
      default: return 'status-info';
    }
  };

  return (
    <div className="profile-container">
      <Header toggleTheme={toggleTheme} theme={theme} />
      
      <main className="container profile-main">
        <h2 className="profile-title">Edit Profile</h2>
        
        <div className="card">
          {status.msg && (
            <div className={`status-message ${getStatusClass(status.type)}`}>
              {status.msg}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Full Name</label>
              <div className="input-wrapper">
                 <FaUser className="input-icon" />
                 <input 
                  type="text" 
                  className="btn form-input"
                  value={formData.username}
                  onChange={(e) => setFormData({...formData, username: e.target.value})}
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Email Address (Read Only)</label>
               <div className="input-wrapper">
                 <FaEnvelope className="input-icon" />
                 <input 
                  type="email" 
                  disabled
                  className="btn form-input form-input-disabled"
                  value={formData.email}
                />
              </div>
            </div>

            <div className="form-group-last">
              <label className="form-label">University</label>
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

            <button type="submit" className="btn btn-primary save-btn">
              <FaSave /> Save Changes
            </button>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Profile;
