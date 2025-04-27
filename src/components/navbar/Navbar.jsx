import React, { useState } from "react";
import "./Navbar.css";
import LoginModal from "../login/LoginModal";
import RegisterModal from "../register/RegisterModal";
import { useAuth } from "../../contexts/AuthContexts";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { user } = useAuth();
  const [activeModal, setActiveModal] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavClick = (action) => {
    setMobileOpen(false);
    if (action) action();
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1 className="logo">Diario Digital</h1>
      </div>

      <div className={`hamburger ${mobileOpen ? "open" : ""}`} onClick={toggleMobileMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <div className="navbar-center">
        {user && (
          <ul className="nav-links">
            <li>
              <Link to="/timeline" onClick={() => handleNavClick()}>
                Línea de Tiempo
              </Link>
            </li>
            <li>
              <Link to="/inconstruction" onClick={() => handleNavClick()}>
                Tareas
              </Link>
            </li>
            <li>
              <Link to="/statistics" onClick={() => handleNavClick()}>
                Estadísticas
              </Link>
            </li>
          </ul>
        )}
      </div>
      <div className="navbar-right">
        {!user ? (
          <>
            <button
              className="btn secondary"
              onClick={() => handleNavClick(() => setActiveModal("login"))}
            >
              Iniciar Sesión
            </button>
            <button
              className="btn primary"
              onClick={() => handleNavClick(() => setActiveModal("register"))}
            >
              Registrarse
            </button>
          </>
        ) : null}
      </div>

      <div className={`mobile-menu ${mobileOpen ? "open" : ""}`}>
        {user ? (
          <ul className="nav-links-mobile">
            <li>
              <Link to="/timeline" onClick={() => handleNavClick()}>
                Línea de Tiempo
              </Link>
            </li>
            <li>
              <Link to="/tasks" onClick={() => handleNavClick()}>
                Tareas
              </Link>
            </li>
            <li>
              <Link to="/statistics" onClick={() => handleNavClick()}>
                Estadísticas
              </Link>
            </li>
          </ul>
        ) : (
          <div className="mobile-auth-buttons">
            <button
              className="btn secondary"
              onClick={() => handleNavClick(() => setActiveModal("login"))}
            >
              Iniciar Sesión
            </button>
            <button
              className="btn primary"
              onClick={() => handleNavClick(() => setActiveModal("register"))}
            >
              Registrarse
            </button>
          </div>
        )}
      </div>

      {activeModal === "login" && <LoginModal onClose={() => setActiveModal(null)} />}
      {activeModal === "register" && <RegisterModal onClose={() => setActiveModal(null)} />}
    </nav>
  );
};

export default Navbar;