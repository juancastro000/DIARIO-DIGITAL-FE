import React from 'react';
import { AuthProvider } from './contexts/AuthContexts'; 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/homepage/HomePage';
import TimelinePage from './pages/TimelinePage/TimelinePage';
import Navbar from "./components/navbar/Navbar";
import Footer from './components/foteer/footer';
import ProtectedRoute from './components/auth/ProtectedRoute';
import "./App.css"

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="app-container">
        <Navbar/>
          <div className="main-content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route
                path="/timeline"
                element={<ProtectedRoute><TimelinePage /></ProtectedRoute>}
              />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}
export default App
