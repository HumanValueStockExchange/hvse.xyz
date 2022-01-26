import * as React from "react";
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';
import '../css/WhatIsHVSE.css';


// Step 2: Define your component
const WhatIsHVSE = () => {
  return (
    <Layout>
    <div class="container">
      <StaticImage class="img"
        alt="HVSE market place"
        src="../images/theme/market.png"/>
      <div class="mainbox" style={{backgroundColor:'var(--bg)'}}>
        <p style={{letterSpacing: '0.05em', color:'rgb(117, 117, 117)', textAlign: 'left', marginBottom:'0.05em'}}>WHAT IS HVSE?</p>
        <p style={{fontWeight:'100', fontSize: '1.25rem', lineHeight: '1rem'}}> HVSE is open to everyone</p>
        <p style={{fontSize: '0.95rem', lineHeight: '1.5rem', color:'rgb(117, 117, 117)'}}> You only need the HVSEcore to take part of the success.</p>
        <p style={{fontSize: '0.75rem', lineHeight: '1.5rem'}}>Human Value Stock Exchange (H.V.S.E.) is an open access marketplace where you could bet on someone - no matter your background or your location. Our community is built upon our <a href="/WhatIsHVSEcoin" style={{color: 'var(--textLink)'}}>HVSEcoin</a> (ERC-20 token) and <a href="/WhatAreIHVPTs" style={{color: 'var(--textLink)'}}>Individual Human Value Tokens (IHVPTs)</a>.</p>
      </div>
    </div>
    </Layout>
  )
}


export default WhatIsHVSE
