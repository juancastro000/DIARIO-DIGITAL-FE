import React from "react";
import { useAuth } from "../../contexts/AuthContexts";
import { useLogin } from "../../hooks/useLogin";
import LoginForm from "./LoginForm";
import "./LoginModal.css"

const LoginModal = ({ onClose }) => {
  const { loginUser } = useAuth();
  const { handleLogin, error, loading } = useLogin();

  const handleSubmit = async (credentials) => {
    const userData = await handleLogin(credentials);
    if (userData) {
      loginUser(userData);
      onClose(); 
    }
  };

  return (
    <div className="login-modal-overlay" onClick={onClose}>
      <div className="login-modal" onClick={(e) => e.stopPropagation()}>
        <h2>Iniciar Sesión</h2>
        <LoginForm onSubmit={handleSubmit} loading={loading} error={error} />
        <button className="modal-close" onClick={onClose}>×</button>
      </div>
    </div>
  );
};

export default LoginModal;