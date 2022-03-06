import * as React from "react";
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';
import '../css/WhatIsHVSE.css';
import {FormattedMessage} from "react-intl";
import LinkTranslated from "../components/LinkTranslated";
import SimpleLocalize from "../components/SimpleLocalize";

// Step 2: Define your component
function WhatIsHVSE(props) {
  return (
    <SimpleLocalize {...props}>
    <Layout>
    <div class="container">
      <StaticImage class="img"
        alt="HVSE market place"
        src="../images/theme/market.png"/>
      <div class="mainbox" style={{backgroundColor:'var(--bg)'}}>
        <div style={{letterSpacing: '0.05em', color:'rgb(117, 117, 117)', textAlign: 'left', textTransform:'uppercase', marginTop:'5px', marginBottom:'5px'}}><FormattedMessage id="whatishvse" defaultMessage="What is HVSE?"/></div>
        <div style={{fontWeight:'100', fontSize: '1.25rem', lineHeight: '1rem', marginTop:'5px', marginBottom:'5px'}}><FormattedMessage id="whatishvse1" defaultMessage="HVSE is open to everyone"/></div>
        <div style={{fontSize: '0.95rem', lineHeight: '1.5rem', color:'rgb(117, 117, 117)', marginTop:'5px', marginBottom:'5px'}}><FormattedMessage id="whatishvse2" defaultMessage="You only need the HVSEcore to take part of the success."/></div>
        <div style={{fontSize: '0.75rem', lineHeight: '1.5rem', marginTop:'5px', marginBottom:'5px'}}><FormattedMessage id="whatishvse3" defaultMessage="Human Value Stock Exchange (H.V.S.E.) is an open access marketplace where you could bet on someone - no matter your background or your location. Our community is built upon our "/><LinkTranslated href="/WhatIsHVSEcoin" style={{color: 'var(--textLink)'}}><FormattedMessage id="whatishvse4" defaultMessage="HVSEcoin"/></LinkTranslated><FormattedMessage id="whatishvse5" defaultMessage=" (ERC-20 token) and "/><LinkTranslated href="/WhatAreIHVPTs" style={{color: 'var(--textLink)'}}><FormattedMessage id="whatishvse6" defaultMessage="Individual Human Value Tokens (IHVPTs)"/></LinkTranslated>.</div>
      </div>
    </div>
    </Layout>
    </SimpleLocalize>
  );
}


export default WhatIsHVSE
