import React from "react";
import { useAuth } from "../../contexts/AuthContexts.jsx";
import { useRegister } from "../../hooks/useRegister";
import RegisterForm from "./RegisterForm";
import "./RegisterModal.css"

const RegisterModal = ({ onClose }) => {
  const { loginUser } = useAuth();
  const { handleRegister, error, loading } = useRegister();

  const handleSubmit = async (userData) => {
    const registeredUser = await handleRegister(userData);
    if (registeredUser) {
      loginUser(registeredUser);
      onClose(); 
    }
  };

  return (
    <div className="register-modal-overlay" onClick={onClose}>
      <div className="register-modal" onClick={(e) => e.stopPropagation()}>
        <h2>Registrarse</h2>
        <RegisterForm onSubmit={handleSubmit} loading={loading} error={error} />
        <button className="modal-close" onClick={onClose}>×</button>
      </div>
    </div>
  );
};

export default RegisterModal;