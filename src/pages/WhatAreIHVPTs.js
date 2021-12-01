import * as React from "react";
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';
import '../css/WhatIsHVSE.css';

// Step 2: Define your component
const WhatAreIHVPTs = () => {
  return (
    <Layout>
    <div class="container">
      <div class="mainbox">
        <p style={{fontWeight:'100', fontSize: '1.25rem', lineHeight: '1rem', textAlign:'center'}}>WHAT ARE IHVPTs?</p>
        <ul style={{fontSize: '0.75rem', lineHeight: '1.5rem'}}>
          <li>One person, one token. Your value, your token.</li>
          <li>IHVPTs are Individual Human Value Tokens.</li>
          <li>IHVPTs can only be bought or sold against <a href="/WhatIsHVSEcoin">HVSEcoin</a>.</li>
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


export default WhatAreIHVPTs
