import React from 'react';
import { AuthProvider } from './contexts/AuthContexts'; 
import HomePage from './pages/HomePage/HomePage';
import Navbar from "./components/navbar/Navbar";
import Footer from './components/foteer/footer';
import "./App.css"

function App() {
  return (
    
    <AuthProvider>
      <div className="app-container">
        <Navbar 
          onLoginClick={() => setShowLoginModal(true)} 
          onRegisterClick={() => setShowRegisterModal(true)}
        />
        <div className="main-content">
          <HomePage />
        </div>
        <Footer />
      </div>
    </AuthProvider>
  );
}
export default App
