import * as React from "react"
import HVSE from '../images/theme/HVSE';
import Layout from '../components/layout'

// Step 2: Define your component
const WhatAreIHVTs = () => {
  return (
    <Layout>
    <div style={{marginRight: 'auto', marginLeft: 'auto', paddingRight: '16', paddingLeft: '16', float: 'center', display:'flex', flexDirection:'row', marginTop: '15px', marginBottom:'15px', paddingTop: '15px', paddingBottom: '15px', justifyContent: 'center', alignItems: 'center'}}>
      <div style={{width:'100%', height:'100%', textAlign:'left', marginRight: '10px', marginLeft: '10px', justifyContent: 'center', boxSizing: 'border-box', boxShadow: '0 10px 28px rgba(0,0,0,.08)', borderColor: '#e9ecef', borderRadius: '0.25rem', backgroundColor: 'white', paddingLeft:'10px'}}>
        <p style={{fontWeight:'100', fontSize: '1.25rem', lineHeight: '1rem', textAlign:'center'}}>WHAT ARE IHVTs?</p>
        <ul style={{fontSize: '0.75rem', lineHeight: '1.5rem'}}>
          <li>One person, one token. Your value, your token.</li>
          <li>IHVTs are Individual Human Value Tokens.</li>
          <li>IHVTs can only be bought or sold against HVSEcoin.</li>
        </ul>
      </div>
      <div style={{width:'100%', columnWidth: '70%', display:'flex',   flexDirection:'column', textAlign:'left', marginRight: '10px', marginLeft: '10px'}}>
      <HVSE />
      </div>
    </div>
    </Layout>
  )
}


export default WhatAreIHVTs
