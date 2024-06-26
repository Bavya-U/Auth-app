import React from 'react';

const TextInput = ({ id, name, type = "text", placeholder, value, onChange, onBlur, error, touched, togglePassword, showPassword }) => (
  <div className="form-group position-relative">
    <input
      type={type === "password" && showPassword ? "text" : type}
      className="form-control"
      id={id}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
    />
    {type === "password" && togglePassword && (
      <span
        className="toggle-password"
        onClick={togglePassword}
        style={{ position: 'absolute', right: '10px', top: '19px', cursor: 'pointer' }}
      >
        {showPassword ? '🙈' : '👁️'}
      </span>
    )}
    {touched && error ? (
      <div className="error">{error}</div>
    ) : null}
  </div>
);

export default TextInput;
