import React from 'react';
import {
  borders,
} from "./css/objects/features.module.css"

const CustomerCard = ({ customer }) => (
  <div className={borders}>
    <p className="text-xl font-semibold" style={{fontSize: '1.25rem',lineHeight:'1.75rem', fontWeigth:'600', textAlign:'center'}}>{customer.title}</p>
    <p className="mt-6" style={{marginTop:'6', marginLeft:'10px', marginRight:'10px'}}>{customer.content}</p>
    <div className="flex items-center mt-8" style={{marginBottom:'8px', display:'flex', marginLeft:'10px'}}>
      <img
        className="w-12 h-12 mr-4 rounded-full"
        style={{width:'120px', height:'120px', marginRight:'10px', borderRadius: '9999px'}}
        src={customer.customerImage}
        alt={customer.customerName}
      />
      <div>
        <p>{customer.customerName}</p>
        <p className="text-sm text-gray-600" style={{fontSize: '0.875rem',lineHeight: '1.25rem', color:'rgb(117, 117, 117)'}}>{customer.customerTitle}</p>
      </div>
    </div>
  </div>
);

export default CustomerCard;
