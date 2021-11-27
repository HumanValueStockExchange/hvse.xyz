import React from 'react';
import {
  card,
  nextCard,
  prevCard,
  activeCard,
} from "./css/objects/features.module.css"



const CustomerCard = ({ customer }) => {
  return (
  <div className={card}>
    <p className="text-xl font-semibold" style={{fontSize: '1.25rem', lineHeight:'1.75rem', fontWeigth:'600', textAlign:'center'}}>{customer.title}</p>
    <div className="flex items-center mt-8" style={{marginBottom:'8px', display:'flex', marginLeft:'10px'}}>
      <img
        className="w-12 h-12 mr-4"
        style={{maxWidth:'150px', maxHeight:'150px', marginRight:'10px'}}
        src={customer.customerImage}
        alt={customer.customerName}
      />
      <div>
        <p className="mt-6" style={{marginTop:'6', marginLeft:'10px', marginRight:'10px', textAlign:'left', fontStyle:'italic'}}>"{customer.content}"</p>
      <p style={{textAlign:"left", marginLeft:'10px', marginRight:'10px'}}>{customer.customerName}, <span className="text-sm text-gray-600" style={{ color:'rgb(117, 117, 117)'}}>{customer.customerTitle}</span></p>
      </div>
    </div>
  </div>
);
};

export default CustomerCard;
