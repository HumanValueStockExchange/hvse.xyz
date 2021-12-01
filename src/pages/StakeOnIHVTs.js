import * as React from "react";
import Layout from '../components/layout';
import Card from '../components/Card';
import '../css/WhatIsHVSE.css';
import { StaticImage } from 'gatsby-plugin-image';

// Step 2: Define your component
const StakeOnIHVTs = () => {
  return (
    <Layout>
    <div class="container">
    <div class="mainbox" style={{outline:'none', borderColor: 'inherit',  boxShadow: 'none', textAlign:'center'}}><p style={{fontWeight:'100', fontSize: '1.25rem', lineHeight: '2rem', whiteSpace:'nowrap', textAlign:'center'}}>Stake on IHVTs</p></div>
          <div class="img">
      <StaticImage class="img"
      style={{maxWidth:'210px', marginTop:'20px'}}
        alt="HVSE market place"
        src="../images/theme/bet.png"/>
      </div></div>
    <Card
    id="Stake on IHVTs"
    children1={<div><p className="font-semibold text-xl" style={{fontSize: '1.25rem', lineHeight: '1.75rem', fontWeight: '600', marginBottom:'8'}}>Bet</p><p className="mt-4"  style={{marginTop: '4', textAlign:'left'}}>Thanks to HVSEcore, you are able to bet some <a href="/WhatIsHVSEcoin">HVSEcoins</a> by buying <a href="/WhatAreIHVTs">IHVTs</a>.</p></div>}
    children2={<div><p className="font-semibold text-xl" style={{fontSize: '1.25rem', lineHeight: '1.75rem', fontWeight: '600', marginBottom:'8'}}>Withdrawal</p><p className="mt-4" style={{marginTop: '4', textAlign:'left'}}>Thanks to HVSEcore, you are able to withdrawal some <a href="/WhatIsHVSEcoin">HVSEcoins</a> by selling <a href="/WhatAreIHVTs">IHVTs</a>.</p></div>}
    children3={<div><p className="font-semibold text-xl" style={{fontSize: '1.25rem', lineHeight: '1.75rem', fontWeight: '600', marginBottom:'8'}}>Main Rules</p><p className="mt-4"  style={{marginTop: '4', textAlign:'left'}}>We need total transparency in the identity of IHVTs traders, in order to avoid bots mass actions. Trading IHVTs will be possible under a nickname but during the HVSEcore account creation, a identity proof will be required.</p></div>}
    />
    </Layout>
  )
}


export default StakeOnIHVTs
