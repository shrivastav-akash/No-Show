import React, { useState, useEffect } from 'react';
import './AddCourseModal.css';

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
    <div className="modal-overlay">
      <div className="card modal-content">
        <h2 className="modal-title">{initialData ? 'Edit Course' : 'Add New Course'}</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-group-label">Course Name</label>
            <input 
              type="text" 
              required
              className="btn form-input"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>

          <div className="form-row">
            <div>
              <label className="form-group-label">Course Code</label>
              <input 
                type="text" 
                required
                className="btn form-input"
                value={formData.code}
                onChange={(e) => setFormData({...formData, code: e.target.value})}
              />
            </div>
            <div>
              <label className="form-group-label">Target %</label>
              <input 
                type="number" 
                required
                min="0" max="100"
                className="btn form-input"
                value={formData.minAttendance}
                onChange={(e) => setFormData({...formData, minAttendance: parseFloat(e.target.value)})}
              />
            </div>
          </div>

          <div className="form-row-last">
            <div>
              <label className="form-group-label">Total Classes</label>
              <input 
                type="number" 
                min="0"
                className="btn form-input"
                value={formData.totalClasses}
                onChange={(e) => setFormData({...formData, totalClasses: parseInt(e.target.value)})}
              />
            </div>
            <div>
              <label className="form-group-label">Attended So Far</label>
              <input 
                type="number" 
                min="0"
                className="btn form-input"
                value={formData.attendedClasses}
                onChange={(e) => setFormData({...formData, attendedClasses: parseInt(e.target.value)})}
              />
            </div>
          </div>

          <div className="modal-actions">
            <button type="button" onClick={onClose} className="btn cancel-btn">Cancel</button>
            <button type="submit" className="btn btn-primary">Save Course</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCourseModal;
