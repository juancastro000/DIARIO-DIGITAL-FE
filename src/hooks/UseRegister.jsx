import { useState } from 'react';
import { register, login} from '../services/AuthService.js';

export const useRegister = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleRegister = async (userData) => {
    setLoading(true);
    setError(null);
    try {
      await register(userData);
      const loginResponse = await login({
        username: userData.username,
        password: userData.password 
      });
      return loginResponse;
    } catch (err) {
      setError(err.message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { handleRegister, loading, error };
}