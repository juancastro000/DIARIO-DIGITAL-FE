import React from "react";
import LoginForm from "./LoginForm";
import "./LoginModal.css";

const LoginModal = ({ onSubmit, loading, error, onClose }) => {
  return (
    <div className="login-modal-overlay" onClick={onClose}>
      <div className="login-modal" onClick={(e) => e.stopPropagation()}>
        <h2>Iniciar Sesión</h2>
        <LoginForm onSubmit={onSubmit} loading={loading} error={error} />
        <button className="modal-close" onClick={onClose}>×</button>
      </div>
    </div>
  );
};

export default LoginModal;