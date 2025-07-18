// src/pages/Register.js

import React, { useState } from 'react';
import TextInput from '../../frontend/src/components/TextInput';
import Button from '../../frontend/src/components/Button';
import Container from '../../frontend/src/components/Container';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  function validateEmail(email) {
    console.log('[Validación] Verificando email...', email);
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return regex.test(email);
  }

  function validatePassword(password) {
    console.log('[Validación] Analizando contraseña...');
    if (password.length < 5) return false;
    if (!/\d/.test(password)) return false;
    if (!/[A-Z]/.test(password)) return false;
    if (/^\s+$/.test(password)) return false;
    return true;
  }

  function passwordsMatch(pass1, pass2) {
    console.log('[Validación] Comparando contraseñas...');
    return pass1 === pass2;
  }

  function handleRegister(e) {
    e.preventDefault();
    console.log('[Registro] Iniciando proceso de registro');

    if (!validateEmail(email)) {
      setMessage('Email inválido. Debe contener @ y terminar en .com');
      return;
    }

    if (!validatePassword(password)) {
      setMessage('Contraseña inválida. Mínimo 5 caracteres, 1 número y 1 mayúscula');
      return;
    }

    if (!passwordsMatch(password, confirmPassword)) {
      setMessage('Las contraseñas no coinciden');
      return;
    }

    console.log('[Registro] ✅ Registro completado correctamente');
    setMessage('✅ ¡Registro exitoso! Bienvenido/a ' + name);
  }

  return (
    <Container title="Crear Cuenta">
      <form onSubmit={handleRegister}>
        <TextInput
          label="Nombre completo"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Tu nombre"
        />

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

        <TextInput
          label="Confirmar Contraseña"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Repite tu contraseña"
        />

        <Button text="Registrarse" type="submit" />

        {message && (
          <p style={{ color: message.includes('exitoso') ? 'green' : 'red', marginTop: '1rem' }}>
            {message}
          </p>
        )}
      </form>
    </Container>
  );
}

export default Register;