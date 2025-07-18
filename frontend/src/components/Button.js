// src/components/Button.js

import React from 'react';

function Button({ text, onClick, type = 'button' }) {
  return (
    <button
      type={type}
      onClick={onClick}
      style={{
        padding: '0.6rem 1.2rem',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        margin: '0.5rem 0',
      }}
    >
      {text}
    </button>
  );
}

export default Button;