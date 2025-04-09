

const API_URL = "http://localhost:8080/api/v1";

export const login = async (credentials) => {
    const encodedPassword = btoa(credentials.password);
    const payload = { ...credentials, password: encodedPassword };
    
    const response = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Error en el login');
      }

    return response.json();
  };

  export const register = async (userData) => {

    const response = await fetch(`${API_URL}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData)
    });
    if (!response.ok) throw new Error('Error al registrarse');
    return response.json();
  };