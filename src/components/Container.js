// src/components/Container.js

import React from 'react';

function Container({ title, children }) {
  return (
    <div
      style={{
        maxWidth: '400px',
        margin: 'auto',
        padding: '2rem',
        border: '1px solid #ccc',
        borderRadius: '8px',
        marginTop: '2rem',
      }}
    >
      <h2>{title}</h2>
      {children}
    </div>
  );
}

export default Container;