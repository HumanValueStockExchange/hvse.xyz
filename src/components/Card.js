import React from 'react';
import {
  borders,
  primary
} from "./css/objects/features.module.css"


const Card = ({id, children1, children2, children3 }) => (
<section id={id}>
  <div className={primary}>
    <div className={borders}> {children1} </div>
    <div className={borders}> {children2} </div>
    <div className={borders}> {children3} </div>
  </div>
</section>
);

export default Card;
