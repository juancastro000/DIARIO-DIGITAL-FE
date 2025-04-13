import React, {useState} from "react";
import "./Navbar.css";
import LoginModal from "../login/LoginModal"; 
import RegisterModal from "../register/RegisterModal";

const Navbar = () => {
  const [activeModal, setActiveModal] = useState(null);

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
      <button className="btn secondary" onClick={() => setActiveModal("login")}>Iniciar Sesión</button>
      <button className="btn primary" onClick={() => setActiveModal("register")}>Registrarse</button>
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
