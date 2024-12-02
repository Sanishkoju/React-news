import React from 'react';

export const SelectComponent = ({ type,label, id, options, value, onChange }) => (
  <div style={{ margin: '10px 0' }}>
    <label htmlFor={id}>{label}</label>
    <select
    type={type}
      id={id}
      value={value}
      onChange={onChange}
      style={{ width: '100%', padding: '8px', marginTop: '5px' }}
    >
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);