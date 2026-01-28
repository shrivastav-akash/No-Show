import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import { useAuth } from '../context/AuthContext';
import api from '../utils/api';
import Footer from '../components/Footer';
import { FaUser, FaEnvelope, FaUniversity, FaSave } from 'react-icons/fa';

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
    } catch (err) {
      setStatus({ type: 'error', msg: 'Failed to update profile.' });
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-secondary)', display: 'flex', flexDirection: 'column' }}>
      <Header toggleTheme={toggleTheme} theme={theme} />
      
      <main className="container" style={{ padding: '2rem 1rem', maxWidth: '600px', flex: 1 }}>
        <h2 style={{ fontSize: '1.75rem', marginBottom: '2rem' }}>Edit Profile</h2>
        
        <div className="card">
          {status.msg && (
            <div style={{ 
              padding: '1rem', 
              borderRadius: '0.5rem', 
              marginBottom: '1.5rem',
              background: status.type === 'success' ? '#d1fae5' : status.type === 'error' ? '#fee2e2' : '#e0f2fe',
              color: status.type === 'success' ? '#065f46' : status.type === 'error' ? '#991b1b' : '#075985'
            }}>
              {status.msg}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Full Name</label>
              <div style={{ position: 'relative' }}>
                 <FaUser style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} />
                 <input 
                  type="text" 
                  className="btn"
                  style={{ width: '100%', paddingLeft: '2.5rem', boxSizing: 'border-box', border: '1px solid var(--border-color)', background: 'var(--bg-secondary)', color: 'var(--text-primary)' }}
                  value={formData.username}
                  onChange={(e) => setFormData({...formData, username: e.target.value})}
                />
              </div>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Email Address (Read Only)</label>
               <div style={{ position: 'relative' }}>
                 <FaEnvelope style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} />
                 <input 
                  type="email" 
                  disabled
                  className="btn"
                  style={{ width: '100%', paddingLeft: '2.5rem', boxSizing: 'border-box', border: '1px solid var(--border-color)', background: 'var(--bg-secondary)', color: 'var(--text-secondary)', cursor: 'not-allowed' }}
                  value={formData.email}
                />
              </div>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>University</label>
               <div style={{ position: 'relative' }}>
                 <FaUniversity style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} />
                 <input 
                  type="text" 
                  className="btn"
                  style={{ width: '100%', paddingLeft: '2.5rem', boxSizing: 'border-box', border: '1px solid var(--border-color)', background: 'var(--bg-secondary)', color: 'var(--text-primary)' }}
                  value={formData.university}
                  onChange={(e) => setFormData({...formData, university: e.target.value})}
                />
              </div>
            </div>

            <button type="submit" className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.5rem' }}>
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
