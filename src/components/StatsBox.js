import React from 'react';

const StatsBox = ({ primaryText, secondaryText }) => (
  <>
    <p className="text-4xl lg:text-6xl font-semibold text-primary" style={{fontWeight:'600', fontSize: '2.25rem', lineHeight: '2.5rem', color: '#0d6efd'}}>{primaryText}</p>
    <p className="font-semibold mb-6" style={{marginBottom:'2em', fontWeight:'600'}}>{secondaryText}</p>
  </>
);

export default StatsBox;
