import React from 'react';
import '../styles/Modal.css';

interface ModalProps {
  title: string;
  children: React.ReactNode | string;
  isVisible: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({
  title,
  children,
  isVisible,
  onClose,
}) => {
  if (!isVisible) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-window">
        <h1 className="modal-header">{title}</h1>
        <div className="modal-body">{children}</div>
        <div className="modal-footer">
          <button
            className="p-2 bg-sky-500 text-white rounded-md"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
