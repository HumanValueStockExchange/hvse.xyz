import React from 'react';
import {
  lg,
  xl,
  bg,
} from './css/objects/button.module.css';

const types = {
  lg,
  xl,
  bg
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
