

const API_URL = "http://localhost:8080/api/v1";
const utf8ToBase64 = (str) => {
  const utf8Bytes = new TextEncoder().encode(str);
  let binary = '';
  utf8Bytes.forEach(byte => binary += String.fromCharCode(byte));
  return btoa(binary);
};

export const login = async (credentials) => {
  const encodedPassword = utf8ToBase64(credentials.password);
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
    const encodedData = {
      ...userData,
      password: utf8ToBase64(userData.password)
    };
  
    const response = await fetch(`${API_URL}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(encodedData)
    });
  
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Error al registrarse');
    }
  
    return response.json();
  };