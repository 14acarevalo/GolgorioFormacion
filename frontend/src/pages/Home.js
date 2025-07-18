import React from 'react';

function Home({ user }) {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>¡Bienvenido, {user.name}!</h1>
      <p>Email: {user.email}</p>
      <button onClick={() => alert('Cambia tu nombre')}>Cambiar nombre</button>
      <button onClick={() => alert('Cambia tu contraseña')}>Cambiar contraseña</button>
    </div>
  );
}

export default Home;