import { useState } from "react";
import { login } from "../services/AuthService";

export const useLogin = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleLogin = async (credentials) => {
        try {
            setError(null);
            setLoading(true);
            const userData = await login(credentials);
            return userData;
        } catch (error) {
            setError(error.message || 'Error de autenticacion');
        } finally {
            setLoading(false);
        }
    };

    return {handleLogin, error, loading};
};