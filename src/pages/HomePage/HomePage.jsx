import React from 'react';
import { useState } from "react";
import { useAuth} from '../../contexts/AuthContexts'; 
import LoginForm from '../../components/login/LoginForm'; 
import { useLogin } from '../../hooks/UseLogin';
import { useRegister } from '../../hooks/UseRegister';
import RegisterForm from '../../components/register/RegisterForm';

const HomePage = () => {
  const { loginUser } = useAuth();
  const { handleLogin, error: loginError, loading: loginLoading } = useLogin();
  const { handleRegister, error: registerError, loading: registerLoading } = useRegister();

  const [showRegister, setShowRegister] = useState(false);

  const handleLoginSubmit = async (credentials) => {
    const userData = await handleLogin(credentials);
    if (userData) {
      loginUser(userData);
    }
  };

  const handleRegisterSubmit = async (userData) => {
    const registeredUser = await handleRegister(userData);
    if (registeredUser) {
      loginUser(registeredUser);
    }
  };

  return (
    <div className="home-page">
      <h1>Bienvenido</h1>
      <div>
        <button onClick={() => setShowRegister(false)}>
          Iniciar Sesión
        </button>
        <button onClick={() => setShowRegister(true)}>
          Registrarse
        </button>
      </div>

      {showRegister ? (
        <>
          <h2>Registro</h2>
          <RegisterForm 
            onSubmit={handleRegisterSubmit}
            error={registerError}
            loading={registerLoading}
          />
        </>
      ) : (
        <>
          <h2>Iniciar Sesión</h2>
          <LoginForm 
            onSubmit={handleLoginSubmit}
            error={loginError}
            loading={loginLoading}
          />
        </>
      )}
    </div>
  );
};

export default HomePage;