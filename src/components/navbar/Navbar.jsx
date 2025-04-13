import React, { useState } from "react";
import "./Navbar.css";
import LoginModal from "../login/LoginModal";
import RegisterModal from "../register/RegisterModal";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [activeModal, setActiveModal] = useState(null);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1 className="logo">Diario Digital</h1>
      </div>
      <div className="navbar-center">
        <ul className="nav-links">
          <li>
            <Link to="/timeline">Línea de Tiempo</Link>
          </li>
          <li>
            <Link to="/tasks">Tareas</Link>
          </li>
          <li>
            <Link to="/statistics">Estadísticas</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <button
          className="btn secondary"
          onClick={() => setActiveModal("login")}
        >
          Iniciar Sesión
        </button>
        <button
          className="btn primary"
          onClick={() => setActiveModal("register")}
        >
          Registrarse
        </button>
      </div>
      {activeModal === "login" && (
        <LoginModal onClose={() => setActiveModal(null)} />
      )}
      {activeModal === "register" && (
        <RegisterModal onClose={() => setActiveModal(null)} />
      )}
    </nav>
  );
};

export default Navbar;
