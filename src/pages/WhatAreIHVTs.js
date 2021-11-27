import * as React from "react";
import HVSE from '../images/theme/HVSE';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';
import '../css/WhatIsHVSE.css';

// Step 2: Define your component
const WhatAreIHVTs = () => {
  return (
    <Layout>
    <div class="container">
      <div class="mainbox">
        <p style={{fontWeight:'100', fontSize: '1.25rem', lineHeight: '1rem', textAlign:'center'}}>WHAT ARE IHVTs?</p>
        <ul style={{fontSize: '0.75rem', lineHeight: '1.5rem'}}>
          <li>One person, one token. Your value, your token.</li>
          <li>IHVTs are Individual Human Value Tokens.</li>
          <li>IHVTs can only be bought or sold against <a href="/WhatIsHVSEcoin">HVSEcoin</a>.</li>
        </ul>
      </div>
      <div class="img">
      <StaticImage class="img"
      style={{maxWidth:'210px', marginTop:'20px'}}
        alt="HVSE market place"
        src="../images/theme/bet.png"/>
      </div>
    </div>
    </Layout>
  )
}


export default WhatAreIHVTs
