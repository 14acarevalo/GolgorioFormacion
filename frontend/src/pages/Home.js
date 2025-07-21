import React, { useEffect, useState } from 'react';

function Home() {
  const [user, setUser] = useState(null);
  const [newName, setNewName] = useState('');
  const [newPassword, setNewPassword] = useState('');

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    } else {
      window.location.href = '/';
    }
  }, []);

  async function handleChangeName() {
    if (!newName.trim()) return;

    const res = await fetch(`http://localhost:3001/api/users/${user.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: newName, password: user.password }),
    });

    const data = await res.json();

    if (res.ok) {
      const updatedUser = { ...user, name: data.name };
      setUser(updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser));
    }
  }

  async function handleChangePassword() {
    if (!newPassword.trim()) return;

    const res = await fetch(`http://localhost:3001/api/users/${user.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: user.name, password: newPassword }),
    });

    const data = await res.json();

    if (res.ok) {
      const updatedUser = { ...user, password: data.password };
      setUser(updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser));
    }
  }

  if (!user) return <p>Cargando...</p>;

  return (
    <div style={{ padding: '2rem' }}>
      <h1>¡Bienvenido, {user.name}!</h1>
      <p>Email: {user.email}</p>

      <h3>Cambiar nombre</h3>
      <input
        placeholder="Nuevo nombre"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
      />
      <button onClick={handleChangeName}>Guardar nombre</button>

      <h3>Cambiar contraseña</h3>
      <input
        type="password"
        placeholder="Nueva contraseña"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />
      <button onClick={handleChangePassword}>Guardar contraseña</button>
    </div>
  );
}

export default Home;