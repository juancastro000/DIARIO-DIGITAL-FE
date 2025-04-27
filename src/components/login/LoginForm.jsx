import { useState } from "react"
import "../../styles/forms.css"

const LoginForm = ({ onSubmit, loading, error }) => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!credentials.username || !credentials.password) return;
    onSubmit(credentials);
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="form-group">
        <label htmlFor="username">Nombre de usuario</label>
        <input
          id="username"
          name="username"
          type="text"
          value={credentials.username}
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
          value={credentials.password}
          onChange={handleChange}
          placeholder="Ingresa tu contraseña"
          required
        />
      </div>

      {error && <div className="error">{error}</div>}

      <button type="submit" disabled={loading} className="btn modal-btn">
        {loading ? 'Cargando...' : 'Iniciar Sesión'}
      </button>
    </form>
  );
};

export default LoginForm;