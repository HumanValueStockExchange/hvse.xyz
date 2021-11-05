import * as React from "react"
import { Link } from "gatsby"
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import HVSE from '../images/theme/HVSE';

// Step 2: Define your component
const WhatIsHVSE = () => {
  return (
    <Layout>
    <div>
    <div style={{marginRight: 'auto', marginLeft: 'auto', paddingRight: '16', paddingLeft: '16', float: 'center', display:'flex', flexDirection:'row', marginTop: '15px', marginBottom:'15px', paddingTop: '15px', paddingBottom: '15px', justifyContent: 'center', alignItems: 'center'}}>
      <div style={{width:'100%', columnWidth: '30%', display:'flex',   flexDirection:'column', textAlign:'left', marginRight: '10px', marginLeft: '10px', justifyContent: 'center'}}>
        <p style={{letterSpacing: '0.05em', color:'rgb(117, 117, 117)', textAlign: 'left', marginBottom:'0.05em'}}>WHAT IS HVSE?</p>
        <p style={{fontWeight:'100', fontSize: '1.25rem', lineHeight: '1rem'}}> HVSE is open to everyone</p>
        <p style={{fontSize: '0.95rem', lineHeight: '1.5rem', color:'rgb(117, 117, 117)'}}> HVSE is open to everyone</p>
        <p style={{fontSize: '0.95rem', lineHeight: '1.5rem'}}> You only need the HVSEcore to take part of the success.</p>
      </div>
      <div style={{width:'100%', columnWidth: '70%', display:'flex',   flexDirection:'column', textAlign:'left', marginRight: '10px', marginLeft: '10px'}}>
      <HVSE />
      </div>
      </div>
      <div>
      <p style={{fontSize: '0.75rem', lineHeight: '1.5rem'}}>Human Value Stock Exchange (H.V.S.E.) is an open access marketplace where you could bet on someone - no matter your background or your location. Our community is built upon our HVSEcoin (ERC-20 token) and individual human value tokens (IVHTs).</p>
      </div>
    </div>
    </Layout>
  )
}


export default WhatIsHVSE