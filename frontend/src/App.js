// src/App.js

import React, { useState } from 'react';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div>
      <nav style={{ textAlign: 'center', margin: '1rem' }}>
        <button onClick={() => setShowLogin(true)}>Iniciar Sesión</button>
        <button onClick={() => setShowLogin(false)}>Registrarse</button>
      </nav>

      {showLogin ? <Login /> : <Register />}
    </div>
  );
}

export default App;