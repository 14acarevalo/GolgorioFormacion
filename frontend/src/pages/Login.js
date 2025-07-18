// src/pages/Login.js

import React, { useState } from 'react';
import TextInput from '../../frontend/src/components/TextInput';
import Button from '../../frontend/src/components/Button';
import Container from '../../frontend/src/components/Container';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  function validateEmail(email) {
    console.log('[Validación] Comprobando formato de email:', email);
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return regex.test(email);
  }

  function validatePassword(password) {
    console.log('[Validación] Comprobando contraseña...');
    if (password.length < 5) return false;
    if (!/\d/.test(password)) return false;
    if (!/[A-Z]/.test(password)) return false;
    if (/^\s+$/.test(password)) return false;
    return true;
  }

  function handleLogin(e) {
    e.preventDefault();
    console.log('[Login] Iniciando proceso de login...');

    if (!validateEmail(email)) {
      setMessage('Por favor, introduce un email válido.');
      return;
    }

    if (!validatePassword(password)) {
      setMessage('Contraseña inválida. Debe tener más de 5 caracteres, incluir números y una letra mayúscula.');
      return;
    }

    console.log('[Login] ✅ Credenciales correctas');
    setMessage('✅ ¡Inicio de sesión exitoso!');
  }

  return (
    <Container title="Iniciar Sesión">
      <form onSubmit={handleLogin}>
        <TextInput
          label="Correo electrónico"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="tu@email.com"
        />

        <TextInput
          label="Contraseña"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Mínimo 5 caracteres"
        />

        <Button text="Iniciar Sesión" type="submit" />

        {message && (
          <p style={{ color: message.includes('exitoso') ? 'green' : 'red', marginTop: '1rem' }}>
            {message}
          </p>
        )}
      </form>
    </Container>
  );
}

export default Login;