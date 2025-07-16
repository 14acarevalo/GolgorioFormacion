import React from 'react';

function TextInput({ label, type, value, onChange, placeholder }) {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <label>
        {label}
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          style={{
            display: 'block',
            marginTop: '0.5rem',
            width: '100%',
            padding: '0.4rem',
          }}
        />
      </label>
    </div>
  );
}

export default TextInput;