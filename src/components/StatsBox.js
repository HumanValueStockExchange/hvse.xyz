import React from 'react';

const StatsBox = ({ primaryText, secondaryText }) => (
  <div style={{boxSizing: 'border-box', boxShadow: '0 10px 28px rgba(0,0,0,.08)', borderColor: '#e9ecef', borderRadius: '0.25rem', columnWidth:'30%', marginRight: '10px', marginLeft: '10px', paddingRight: '10px', paddingLeft: '10px', paddingTop: '1em', paddingBottom:'1em',}}>
    <p className="text-4xl lg:text-6xl font-semibold text-primary" style={{fontWeight:'600', fontSize: '2.25rem', lineHeight: '2.5rem', color: '#0d6efd'}}>{primaryText}</p>
    <p className="font-semibold mb-6" style={{marginBottom:'2em', fontWeight:'600'}}>{secondaryText}</p>
  </div>
);

export default StatsBox;
