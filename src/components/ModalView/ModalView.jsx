import React from "react";
import './ModalView.css';

export default function ModalView({ open, onClose, title, body }) {
  return (
    <div className={`modal-overlay${open ? ' open' : ''}`} onClick={onClose} style={{display: open ? 'flex' : 'none'}}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    </div>
  );
}
