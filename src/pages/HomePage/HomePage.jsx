import React, { useState } from "react";
import LoginModal from "../../components/login/LoginModal.jsx";
import RegisterModal from "../../components/register/RegisterModal.jsx";
import "./HomePage.css";

const HomePage = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  return (
    
    <>
    <div className="home-page">
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
            <img src="src\assets\image-demo.png" alt="Escena de ejemplo" />
          </div>
        </section>
      </main>

      {showLoginModal && (
        <LoginModal onClose={() => setShowLoginModal(false)} />
      )}
      
      {showRegisterModal && (
        <RegisterModal onClose={() => setShowRegisterModal(false)} />
      )}
    </div>
    </>
  );
};

export default HomePage;