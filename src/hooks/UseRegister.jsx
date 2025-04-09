import { useState } from "react";
import { register } from "../services/AuthService";

export const useRegister = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleRegister = async (userData) => {
    try {
      setError(null);
      setLoading(true);
      const registeredUser = await register(userData);
      return registeredUser;
    } catch (error) {
      setError(error.message || 'Error al registrarse');
    } finally {
      setLoading(false);
    }
  };

  return { handleRegister, error, loading };
};