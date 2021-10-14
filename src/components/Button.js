import React from 'react';
import {
  lg,
  xl,
} from './css/objects/button.module.css';

const types = {
  lg,
  xl
};

const Button = ({ children, className = '', type }) => {
  return (
    <button
      type="button"
      className={`
        ${types[type]}
        ${className}
    `}
    >
      {children}
    </button>
  );
};

export default Button;
