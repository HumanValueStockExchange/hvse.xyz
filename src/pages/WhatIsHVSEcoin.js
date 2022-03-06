import * as React from "react";
import Layout from '../components/layout';
import Coin from "../videos/coin.mp4";
import '../css/WhatIsHVSE.css';
import {FormattedMessage} from "react-intl";
import LinkTranslated from "../components/LinkTranslated";
import SimpleLocalize from "../components/SimpleLocalize";

// Step 2: Define your component
function WhatIsHVSEcoin(props) {
  return (
    <SimpleLocalize {...props}>
    <Layout>
    <div class="container">
      <div class="mainbox" style={{backgroundColor:'var(--bg)'}}>
        <div style={{fontWeight:'100', fontSize: '1.25rem', lineHeight: '1rem', textAlign:'center', textTransform: 'uppercase'}}><FormattedMessage id="whatishvsecoin" defaultMessage="What is HVSEcoin?"/></div>
        <ul style={{fontSize: '0.75rem', lineHeight: '1.5rem'}}>
          <li><FormattedMessage id="hvsecoin1" defaultMessage="One Crypto"/> <LinkTranslated href="/WhatAREIHVPTs"><FormattedMessage id="hvsecoin12" defaultMessage="to assess them all,"/></LinkTranslated></li>
          <li><FormattedMessage id="hvsecoin2" defaultMessage="One Crypto to bid on them,"/></li>
          <li><FormattedMessage id="hvsecoin3" defaultMessage="One Crypto to bring them all, and in the brightness bind them."/></li>
        </ul>
      </div>
      <div style={{width:'100%', columnWidth: '50%', display:'flex', flexDirection:'column', textAlign:'center', marginRight: '10px', marginLeft: '10px', alignItems:'center', marginTop:'20px'}}>
      <video width="240" height="240" autoPlay muted loop>
        <source src={Coin} type="video/mp4" />
      </video>
      </div>
    </div>
    </Layout>
    </SimpleLocalize>
  )
}


export default WhatIsHVSEcoin
