import React from 'react';
import './ConfirmationModal.css';

const ConfirmationModal = ({ isOpen, title, message, onConfirm, onCancel, confirmText = 'Delete', confirmColor = '#ef4444' }) => {
  if (!isOpen) return null;

  return (
    <div className="confirm-modal-overlay">
      <div className="card confirm-modal-content">
        <h3 className="confirm-modal-title">{title}</h3>
        <p className="confirm-modal-message">{message}</p>
        
        <div className="confirm-modal-actions">
          <button 
            onClick={onCancel} 
            className="btn cancel-btn" 
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
