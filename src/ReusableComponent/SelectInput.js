// components/SelectInput.js
import React from 'react';

const SelectInput = ({ id, name, value, onChange, onBlur, error, touched, options }) => (
  <div className="form-group">
    <select
      className="form-control"
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
    >
      <option value="" disabled>Select Role</option>
      {options.map(option => (
        <option key={option.value} value={option.value}>{option.label}</option>
      ))}
    </select>
    {touched && error ? (
      <div className="error">{error}</div>
    ) : null}
  </div>
);

export default SelectInput;
