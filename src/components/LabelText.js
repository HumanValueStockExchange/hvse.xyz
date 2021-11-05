import React from 'react';

const LabelText = ({ children, className = '' }) => (
  <p className={`uppercase ${className}`} style={{letterSpacing: '0.05em', color:'rgb(117, 117, 117)', textAlign: 'center', marginBottom:'1rem', marginTop:'1rem'}}>{children}</p>
);

export default LabelText;
