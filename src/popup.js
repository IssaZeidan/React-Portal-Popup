import React from 'react';
import { createPortal } from 'react-dom';

const Popup = ({ onClose, text }) => {
  return createPortal(
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>Popup Content</h2>
        <p>{text}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>,
    document.body
  );
};

export default Popup;
