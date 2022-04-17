import * as React from "react";
import Layout from '../components/layout';
import Card from '../components/Card';
import '../css/WhatIsHVSE.css';
import { StaticImage } from 'gatsby-plugin-image';
import {FormattedMessage} from "react-intl";
import LinkTranslated from "../components/LinkTranslated";
import SimpleLocalize from "../components/SimpleLocalize";
import SEO from "../components/seo";

// Step 2: Define your component
function StakeOnIHVPTs(props) {
  return (
    <SimpleLocalize {...props}>
    <SEO title="IHVPTs bet"/>
    <Layout>
    <div class="container" >
    <div class="mainbox" style={{outline:'none', borderColor: 'inherit',  boxShadow: 'none', textAlign:'center',backgroundColor:'var(--bg)'}}><div style={{fontWeight:'100', fontSize: '1.25rem', lineHeight: '2rem', whiteSpace:'nowrap', textAlign:'center'}}><FormattedMessage id="stakeih" defaultMessage="Stake IHVPTs"/></div></div>
          <div class="img">
      <StaticImage class="img"
      style={{maxWidth:'210px', marginTop:'20px'}}
        alt="HVSE market place"
        src="../images/theme/bet.png"/>
      </div></div>
    <Card
    id="Stake on IHVPTs"
    children1={<div><div className="font-semibold text-xl" style={{fontSize: '1.25rem', lineHeight: '1.75rem', fontWeight: '600', marginBottom:'8'}}><FormattedMessage id="bet" defaultMessage="Bet"/></div><div className="mt-4"  style={{marginTop: '4', textAlign:'left'}}><FormattedMessage id="bet1" defaultMessage="Thanks to HVSEcore, you are able to bet some "/><LinkTranslated href="/WhatIsHVSEcoin" style={{color: 'var(--textLink)'}}>HVSEcoins</LinkTranslated> <FormattedMessage id="bet2" defaultMessage=" by buying "/><LinkTranslated href="/WhatAreIHVPTs" style={{color: 'var(--textLink)'}}>IHVPTs</LinkTranslated>.</div></div>}
    children2={<div><div className="font-semibold text-xl" style={{fontSize: '1.25rem', lineHeight: '1.75rem', fontWeight: '600', marginBottom:'8'}}><FormattedMessage id="with" defaultMessage="Withdrawal"/></div><div className="mt-4" style={{marginTop: '4', textAlign:'left'}}><FormattedMessage id="with1" defaultMessage="Thanks to HVSEcore, you are able to withdrawal some "/><LinkTranslated href="/WhatIsHVSEcoin"style={{color: 'var(--textLink)'}} >HVSEcoins</LinkTranslated><FormattedMessage id="with2" defaultMessage=" by selling "/> <LinkTranslated href="/WhatAreIHVPTs" style={{color: 'var(--textLink)'}}>IHVPTs</LinkTranslated>.</div></div>}
    children3={<div><div className="font-semibold text-xl" style={{fontSize: '1.25rem', lineHeight: '1.75rem', fontWeight: '600', marginBottom:'8'}}><FormattedMessage id="rules" defaultMessage="Main Rules"/></div><div className="mt-4"  style={{marginTop: '4', textAlign:'left'}}><FormattedMessage id="rules1" defaultMessage="We need total transparency in the identity of IHVPTs traders, in order to avoid bots mass actions. Trading IHVPTs will be possible under a nickname but during the HVSEcore account creation, a identity proof will be required."/></div></div>}
    />
    </Layout></SimpleLocalize>
  )
}


export default StakeOnIHVPTs
