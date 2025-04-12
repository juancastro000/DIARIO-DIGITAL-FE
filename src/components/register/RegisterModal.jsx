import React from "react";
import RegisterForm from "./RegisterForm";
import "./RegisterModal.css";

const RegisterModal = ({ onSubmit, loading, error, onClose }) => {
  return (
    <div className="register-modal-overlay" onClick={onClose}>
      <div className="register-modal" onClick={(e) => e.stopPropagation()}>
        <h2>Registrarse</h2>
        <RegisterForm onSubmit={onSubmit} loading={loading} error={error} />
        <button className="modal-close" onClick={onClose}>×</button>
      </div>
    </div>
  );
};

export default RegisterModal;