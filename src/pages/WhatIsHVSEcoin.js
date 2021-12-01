import * as React from "react";
import Layout from '../components/layout';
import Coin from "../videos/coin.mp4";
import '../css/WhatIsHVSE.css';

// Step 2: Define your component
const WhatIsHVSEcoin = () => {
  return (
    <Layout>
    <div class="container">
      <div class="mainbox">
        <p style={{fontWeight:'100', fontSize: '1.25rem', lineHeight: '1rem', textAlign:'center'}}>WHAT IS HVSEcoin?</p>
        <ul style={{fontSize: '0.75rem', lineHeight: '1.5rem'}}>
          <li>One Crypto <a href="/WhatAREIHVPTs">to assess them all</a>,</li>
          <li>One Crypto to bid on them,</li>
          <li>One Crypto to bring them all, and in the brightness bind them.</li>
        </ul>
      </div>
      <div style={{width:'100%', columnWidth: '50%', display:'flex', flexDirection:'column', textAlign:'center', marginRight: '10px', marginLeft: '10px', alignItems:'center', marginTop:'20px'}}>
      <video width="240" height="240" autoPlay muted loop>
        <source src={Coin} type="video/mp4" />
      </video>
      </div>
    </div>
    </Layout>
  )
}


export default WhatIsHVSEcoin
