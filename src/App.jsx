import React from 'react';
import { AuthProvider } from './contexts/AuthContexts'; 
import HomePage from './pages/HomePage/HomePage';

function App() {
  console.log('app renderizado');
  return (
    
    <AuthProvider>
      <HomePage />
    </AuthProvider>
  );
}
export default App
