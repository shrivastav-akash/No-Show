import React from 'react';

const ConfirmationModal = ({ isOpen, title, message, onConfirm, onCancel, confirmText = 'Delete', confirmColor = '#ef4444' }) => {
  if (!isOpen) return null;

  return (
    <div style={{ 
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, 
      background: 'rgba(0,0,0,0.5)', 
      display: 'flex', alignItems: 'center', justifyContent: 'center', 
      zIndex: 1000, backdropFilter: 'blur(3px)' 
    }}>
      <div className="card" style={{ width: '100%', maxWidth: '400px', margin: '1rem' }}>
        <h3 style={{ marginTop: 0, marginBottom: '1rem', fontSize: '1.25rem' }}>{title}</h3>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>{message}</p>
        
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
          <button 
            onClick={onCancel} 
            className="btn" 
            style={{ background: 'transparent', color: 'var(--text-secondary)', border: '1px solid var(--border-color)' }}
          >
            Cancel
          </button>
          <button 
            onClick={onConfirm} 
            className="btn" 
            style={{ background: confirmColor, color: 'white' }}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
