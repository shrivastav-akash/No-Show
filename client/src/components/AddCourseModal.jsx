import React, { useState, useEffect } from 'react';

const AddCourseModal = ({ onClose, onSave, initialData }) => {
  const [formData, setFormData] = useState({
    name: '',
    code: '',
    totalClasses: 0,
    attendedClasses: 0,
    minAttendance: 75
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, backdropFilter: 'blur(3px)' }}>
      <div className="card" style={{ width: '100%', maxWidth: '500px', margin: '1rem' }}>
        <h2 style={{ marginTop: 0, marginBottom: '1.5rem' }}>{initialData ? 'Edit Course' : 'Add New Course'}</h2>
        
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem' }}>Course Name</label>
            <input 
              type="text" 
              required
              className="btn"
              style={{ width: '100%', border: '1px solid var(--border-color)', background: 'var(--bg-secondary)', color: 'var(--text-primary)', boxSizing: 'border-box' }}
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem' }}>Course Code</label>
              <input 
                type="text" 
                required
                className="btn"
                style={{ width: '100%', border: '1px solid var(--border-color)', background: 'var(--bg-secondary)', color: 'var(--text-primary)', boxSizing: 'border-box' }}
                value={formData.code}
                onChange={(e) => setFormData({...formData, code: e.target.value})}
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem' }}>Target %</label>
              <input 
                type="number" 
                required
                min="0" max="100"
                className="btn"
                style={{ width: '100%', border: '1px solid var(--border-color)', background: 'var(--bg-secondary)', color: 'var(--text-primary)', boxSizing: 'border-box' }}
                value={formData.minAttendance}
                onChange={(e) => setFormData({...formData, minAttendance: parseFloat(e.target.value)})}
              />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem' }}>Total Classes</label>
              <input 
                type="number" 
                min="0"
                className="btn"
                style={{ width: '100%', border: '1px solid var(--border-color)', background: 'var(--bg-secondary)', color: 'var(--text-primary)', boxSizing: 'border-box' }}
                value={formData.totalClasses}
                onChange={(e) => setFormData({...formData, totalClasses: parseInt(e.target.value)})}
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem' }}>Attended So Far</label>
              <input 
                type="number" 
                min="0"
                className="btn"
                style={{ width: '100%', border: '1px solid var(--border-color)', background: 'var(--bg-secondary)', color: 'var(--text-primary)', boxSizing: 'border-box' }}
                value={formData.attendedClasses}
                onChange={(e) => setFormData({...formData, attendedClasses: parseInt(e.target.value)})}
              />
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
            <button type="button" onClick={onClose} className="btn" style={{ background: 'transparent', color: 'var(--text-secondary)' }}>Cancel</button>
            <button type="submit" className="btn btn-primary">Save Course</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCourseModal;
