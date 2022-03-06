import * as React from "react";
import Layout from '../components/layout';
import Card from '../components/Card';
import '../css/WhatIsHVSE.css';
import MainBlock from '../components/MainBlock';
import "../css/global.css";
import { StaticImage } from 'gatsby-plugin-image';
import {FormattedMessage} from "react-intl";
import LinkTranslated from "../components/LinkTranslated";
import SimpleLocalize from "../components/SimpleLocalize";

// Step 2: Define your component
function WhatAreIHVPTs(props) {
  return (
    <SimpleLocalize {...props}>
    <Layout style={{minHeight:'100%'}}>
    <MainBlock
      primarySlot={
        <div  class="mainbox" style={{backgroundColor:'var(--bg)', maxWidth:'100%', minHeight:'100%'}}>
        <div style={{fontWeight:'100', fontSize:'1.25rem', lineHeight:'1rem', textAlign:'center', textTransform:'uppercase', marginTop:'5px', marginBottom:'5px'}}><FormattedMessage id="whatareihvpts" defaultMessage="What are IHVPTs?"/></div>
        <ul style={{fontSize: '0.75rem', lineHeight: '1.5rem',}}>
          <li><FormattedMessage id="whatareihvpts1" defaultMessage="One person, one token. Your value, your token."/></li>
          <li><FormattedMessage id="whatareihvpts2" defaultMessage="IHVPTs are Individual Human Value Personalized Tokens."/></li>
          <li><FormattedMessage id="whatareihvpts3" defaultMessage="IHVPTs can only be bought or sold against "/><LinkTranslated href="/WhatIsHVSEcoin" style={{color: 'var(--textLink)'}}><FormattedMessage id="whatishvse4" defaultMessage="HVSEcoin"/></LinkTranslated>.</li>
        </ul>
      </div>
      }
      secondarySlot={
      <StaticImage class="img"
      style={{maxWidth:'210px', marginTop:'20px'}}
        alt="HVSE market place"
        src="../images/theme/bet.png"/>}
    />
    <Card
    id="Chara1 IHVPTs"
    children1={<div><div className="font-semibold text-xl" style={{fontSize: '1.25rem', lineHeight: '1.75rem', fontWeight: '600', marginTop:'5px', marginBottom:'5px'}}><FormattedMessage id="altruism" defaultMessage="Altruism"/></div><div className="mt-4"  style={{textAlign:'left', marginTop:'5px', marginBottom:'5px'}}><FormattedMessage id="altruism1" defaultMessage="The possibility of "/><b style={{textTransform:'lowercase'}}><FormattedMessage id="altruism" defaultMessage="Altruism"/></b><FormattedMessage id="altruism2" defaultMessage=" is community-offered by allowing the tokenized person to raise funds (by selling IHVPTs)."/></div></div>}
    children2={<div><div className="font-semibold text-xl" style={{fontSize: '1.25rem', lineHeight: '1.75rem', fontWeight: '600', marginTop:'5px', marginBottom:'5px'}}><FormattedMessage id="enrich" defaultMessage="Enrichment"/></div><div className="mt-4" style={{textAlign:'left', marginTop:'5px', marginBottom:'5px'}}><b><FormattedMessage id="enrich1" defaultMessage="Getting richer"/></b><FormattedMessage id="enrich2" defaultMessage=" by betting on the good IHVPT and thus speculate on its value."/></div></div>}
    children3={<div><div className="font-semibold text-xl" style={{fontSize: '1.25rem', lineHeight: '1.75rem', fontWeight: '600', marginTop:'5px', marginBottom:'5px'}}><FormattedMessage id="dao" defaultMessage="DAO governance"/></div><div className="mt-4"  style={{textAlign:'left', marginTop:'5px', marginBottom:'5px'}}><FormattedMessage id="dao1" defaultMessage="1 IHVPT= 1 "/><b><FormattedMessage id="dao2" defaultMessage="veIHVPT"/></b><FormattedMessage id="dao3" defaultMessage=". veIHVPT comes with full voting rights within the IHVPT, and thus a governance system."/></div></div>}
    />
    <Card style={{marginBottom:'50px'}}
    id="Chara2 IHVPTs"
    children1={<div><div className="font-semibold text-xl" style={{fontSize: '1.25rem', lineHeight: '1.75rem', fontWeight: '600', marginTop:'5px', marginBottom:'5px'}}><FormattedMessage id="passinc" defaultMessage="Passive income"/></div><div className="mt-4"  style={{textAlign:'left', marginTop:'5px', marginBottom:'5px'}}><FormattedMessage id="passinc1" defaultMessage="To access to veIHVPT, "/><b><FormattedMessage id="passinc2" defaultMessage="you need to stake"/></b><FormattedMessage id="passinc3" defaultMessage=" your IHVPT. Upon unstaking, you will receive your IHVPTs plus any additional IHVPTs from the official staking pool."/></div></div>}
    children2={<div><div className="font-semibold text-xl" style={{fontSize: '1.25rem', lineHeight: '1.75rem', fontWeight: '600', marginTop:'5px', marginBottom:'5px'}}><FormattedMessage id="retrib" defaultMessage="Retributions"/></div><div className="mt-4" style={{textAlign:'left', marginTop:'5px', marginBottom:'5px'}}><FormattedMessage id="retrib1" defaultMessage="Tokenized people can if they wish "/><b><FormattedMessage id="retrib2" defaultMessage="provide NFTs or other benefits to their IHVPTs holders"/></b><FormattedMessage id="retrib3" defaultMessage=". No obligation in this regard exists but it remains possible."/></div></div>}
    children3={<div><div className="font-semibold text-xl" style={{fontSize: '1.25rem', lineHeight: '1.75rem', fontWeight: '600', marginTop:'5px', marginBottom:'5px'}}><FormattedMessage id="deriv" defaultMessage="Derivatives"/></div><div className="mt-4"  style={{textAlign:'left', marginTop:'5px', marginBottom:'5px'}}><FormattedMessage id="deriv1" defaultMessage="This utility  allows "/><b><FormattedMessage id="deriv2" defaultMessage="to bet on IHVPTs derived products"/></b><FormattedMessage id="deriv3"  defaultMessage=" like bearish or bullish levers (as "/><LinkTranslated href="https://en.wikipedia.org/wiki/Contract_for_difference" style={{textDecoration:'none',  color: 'var(--textLink)'}}>CFDs</LinkTranslated><FormattedMessage id="deriv4" defaultMessage="). That's a prediction market."/></div></div>}
    />
    </Layout></SimpleLocalize>
  )
}


export default WhatAreIHVPTs
