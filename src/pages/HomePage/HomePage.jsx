import React, { useState } from "react";
import LoginModal from "../../components/login/LoginModal.jsx";
import RegisterModal from "../../components/register/RegisterModal.jsx";
import { useLogin } from "../../hooks/UseLogin.jsx"
import { useRegister } from "../../hooks/UseRegister.jsx"
import { useAuth } from "../../contexts/AuthContexts";
import Navbar from "../../components/navbar/Navbar";
import "./HomePage.css";

const HomePage = () => {
  const { loginUser } = useAuth();
  const { handleLogin, error: loginError, loading: loginLoading } = useLogin();
  const { handleRegister, error: registerError, loading: registerLoading } = useRegister();

  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const handleLoginSubmit = async (credentials) => {
    const userData = await handleLogin(credentials);
    if (userData) {
      loginUser(userData);
      setShowLoginModal(false);
    }
  };

  const handleRegisterSubmit = async (userData) => {
    const registeredUser = await handleRegister(userData);
    if (registeredUser) {
      loginUser(registeredUser);
      setShowRegisterModal(false);
    }
  };

  return (
    <div className="home-page">
      <Navbar 
        onLoginClick={() => setShowLoginModal(true)} 
        onRegisterClick={() => setShowRegisterModal(true)}
      />
      <main className="main-content">
        <section className="hero-section">
          <div className="hero-text">
            <h1>Bienvenido a Diario Digital</h1>
            <p>
              Tu espacio personal para reflexionar y gestionar tus tareas. <br/>
              Para acceder a tu línea de tiempo, tareas y estadísticas, inicia sesión o crea una cuenta.
            </p>
            <div className="hero-buttons">
              <button className="btn primary" onClick={() => setShowLoginModal(true)}>
                Iniciar Sesión
              </button>
              <button className="btn secondary" onClick={() => setShowRegisterModal(true)}>
                Registrarse
              </button>
            </div>
          </div>
          <div className="hero-image">
            <img src="/path/to/landing-illustration.png" alt="Escena de ejemplo" />
          </div>
        </section>
      </main>

      {showLoginModal && (
        <LoginModal
          onSubmit={handleLoginSubmit}
          error={loginError}
          loading={loginLoading}
          onClose={() => setShowLoginModal(false)}
        />
      )}
      {showRegisterModal && (
        <RegisterModal
          onSubmit={handleRegisterSubmit}
          error={registerError}
          loading={registerLoading}
          onClose={() => setShowRegisterModal(false)}
        />
      )}
    </div>
  );
};

export default HomePage;