// // components/SelectInput.js
// import React from 'react';

// const SelectInput = ({ id, name, value, onChange, onBlur, error, touched, options }) => (
//   <div className="form-group">
//     <select
//       className="form-control"
//       id={id}
//       name={name}
//       value={value}
//       onChange={onChange}
//       onBlur={onBlur}
//     >
//       <option value="" disabled>--Select--</option>
//       {options.map(option => (
//         <option key={option.value} value={option.value}>{option.label}</option>
//       ))}
//     </select>
//     {touched && error ? (
//       <div className="error">{error}</div>
//     ) : null}
//   </div>
// );

// export default SelectInput;



// SelectInput.js
import React from 'react';

const SelectInput = ({ id, name, value, onChange, onBlur, error, touched, options, icon }) => {
  return (
    <div className="input-group mb-3 position-relative">
      <select
        id={id}
        name={name}
        className={`form-control pl-4 ${touched && error ? 'is-invalid' : ''}`}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      >
        <option value="">Select...</option>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {icon && <span className="input-icon">{icon}</span>}
      {touched && error ? (
        <div className="invalid-feedback">{error}</div>
      ) : null}
    </div>
  );
};

export default SelectInput;
