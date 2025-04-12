import { useState } from "react";
import "../../styles/forms.css"

const RegisterForm = ({ onSubmit, loading, error }) => {
  const [userData, setUserData] = useState({
    email: '',
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userData.email || !userData.username || !userData.password) return;
    onSubmit(userData);
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={userData.email}
          onChange={handleChange}
          placeholder="Ingresa tu email"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="username">Nombre de usuario</label>
        <input
          id="username"
          name="username"
          type="text"
          value={userData.username}
          onChange={handleChange}
          placeholder="Ingresa tu nombre de usuario"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="password">Contraseña</label>
        <input
          id="password"
          name="password"
          type="password"
          value={userData.password}
          onChange={handleChange}
          placeholder="Ingresa tu contraseña"
          required
        />
      </div>

      {error && <div className="error">{error}</div>}

      <button type="submit" disabled={loading} className="btn modal-btn">
        {loading ? 'Registrando...' : 'Registrarse'}
      </button>
    </form>
  );
};

export default RegisterForm;