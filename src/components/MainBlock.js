import React from 'react';
import {
  container,
  primary,
  secondary,
} from './css/objects/mainblock.module.css';


const MainBlock = ({ id, primarySlot, secondarySlot }) => (
  <section id={id} className="py-20" style={{paddingTop:'20', paddingBottom:'20'}}>
    <div className={container}>
      <div className={primary}>{primarySlot}</div>
      <div className={secondary}>{secondarySlot}</div>
    </div>
  </section>
);

export default MainBlock;
