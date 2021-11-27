import React from 'react';
import {
  container,
  primary,
  secondary,
} from './css/objects/splitsection.module.css';



const SplitSection = ({ id, primarySlot, secondarySlot }) => (
  <section id={id} className="py-20">
    <div className={container}>
      <div className={primary}>{primarySlot}</div>
      <div className={secondary}>{secondarySlot}</div>
    </div>
  </section>
);

export default SplitSection;
