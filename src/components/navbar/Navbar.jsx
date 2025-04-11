import React from "react";
import "./Navbar.css";

const Navbar = ({ onLoginClick, onRegisterClick }) => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1 className="logo">Diario Digital</h1>
      </div>
      <div className="navbar-center">
        <ul className="nav-links">
          <li>Línea de Tiempo</li>
          <li>Tareas</li>
          <li>Estadísticas</li>
        </ul>
      </div>
      <div className="navbar-right">
        <button className="btn secondary" onClick={onLoginClick}>Login</button>
        <button className="btn primary" onClick={onRegisterClick}>Register</button>
      </div>
    </nav>
  );
};

export default Navbar;