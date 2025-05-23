import React from 'react';
import { AuthProvider } from './contexts/AuthContexts'; 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/homepage/HomePage';
import TimelinePage from './pages/TimelinePage/TimelinePage';
import ConstructionPage from './pages/constructionpage/ConstructionPage';
import Navbar from "./components/navbar/Navbar";
import Footer from './components/foteer/footer';
import ProtectedRoute from './components/auth/ProtectedRoute';
import "./App.css"
import StatisticsPage from './pages/statisticspage/StatisticsPage';

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
              <Route
                path="/inconstruction"
                element={<ProtectedRoute><ConstructionPage /></ProtectedRoute>}
              />
              <Route path="/statistics" element={<ProtectedRoute><StatisticsPage /></ProtectedRoute>} />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}
export default App
