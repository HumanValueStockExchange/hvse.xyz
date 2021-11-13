import * as React from "react"
import { Link } from "gatsby"
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Coin from "../videos/coin.mp4"

// Step 2: Define your component
const WhatIsHVSEcoin = () => {
  return (
    <Layout>
    <div style={{marginRight: 'auto', marginLeft: 'auto', paddingRight: '16', paddingLeft: '16', float: 'center', display:'flex', flexDirection:'row', marginTop: '15px', marginBottom:'15px', paddingTop: '15px', paddingBottom: '15px', justifyContent: 'center', alignItems: 'center'}}>
      <div style={{width:'100%', height:'100%', textAlign:'left', marginRight: '10px', marginLeft: '10px', justifyContent: 'center', boxSizing: 'border-box', boxShadow: '0 10px 28px rgba(0,0,0,.08)', borderColor: '#e9ecef', borderRadius: '0.25rem', backgroundColor: 'white', paddingLeft:'10px'}}>
        <p style={{fontWeight:'100', fontSize: '1.25rem', lineHeight: '1rem', textAlign:'center'}}>WHAT IS HVSEcoin?</p>
        <ul style={{fontSize: '0.75rem', lineHeight: '1.5rem'}}>
          <li>One Crypto <a href="/WhatAREIHVTs">to assess them all</a>,</li>
          <li>One Crypto to bid on them,</li>
          <li>One Crypto to bring them all, and in the brightness bind them.</li>
        </ul>
      </div>
      <div style={{width:'100%', columnWidth: '50%', display:'flex', flexDirection:'column', textAlign:'center', marginRight: '10px', marginLeft: '10px', alignItems:'center'}}>
      <video width="240" height="240" autoPlay muted loop>
        <source src={Coin} type="video/mp4" />
      </video>
      </div>
    </div>
    </Layout>
  )
}


export default WhatIsHVSEcoin
