import * as React from "react";
import Layout from '../components/layout';
import Card from '../components/Card';
import {FormattedMessage} from "react-intl";
import LinkTranslated from "../components/LinkTranslated";
import SimpleLocalize from "../components/SimpleLocalize";
import SEO from "../components/seo";

// Step 2: Define your component
function HVSEwallets(props) {
  return (
    <SimpleLocalize {...props}>
    <SEO title="HVSEcore"/>
    <Layout>
    <div style={{fontWeight:'100', fontSize: '1.25rem', lineHeight: '2rem', textAlign:'center', alignItems:'center', contentAlign:'middle', whiteSpace:'nowrap'}}><FormattedMessage id="hvse-wallets" defaultMessage="HVSE Wallets"/></div>
    <Card
    id="HVSE wallets"
    children1={<div><div className="font-semibold text-xl" style={{fontSize: '1.25rem', lineHeight: '1.75rem', fontWeight: '600', marginBottom:'8'}}><FormattedMessage id="swap" defaultMessage="Swap"/></div><div className="mt-4"  style={{marginTop: '4', textAlign:'left'}}><FormattedMessage id="swap1" defaultMessage="Firstly, "/><LinkTranslated href="/WhatIsHVSEcoin" style={{color: 'var(--textLink)'}}>HVSEcoin</LinkTranslated><FormattedMessage id="hvsecoin9" defaultMessage=" will be available in UniSwap and then you could hodl them in your Metamask wallet. More details released after the HVSEcoin deployement."/></div></div>}
    children2={<div><div className="font-semibold text-xl" style={{fontSize: '1.25rem', lineHeight: '1.75rem', fontWeight: '600', marginBottom:'8'}}><FormattedMessage id="hvsecore" defaultMessage="HVSEcore"/></div><div className="mt-4" style={{marginTop: '4', textAlign:'left'}}><FormattedMessage id="hvsecore1" defaultMessage="HVSEcore will be at the same time a wallet and a plateform to bet on "/><LinkTranslated href="/WhatAreIHVPTs" style={{color: 'var(--textLink)'}}>IHVPTs</LinkTranslated><FormattedMessage id="hvsecore2" defaultMessage=". More details coming."/></div></div>}
    children3={<div><div className="font-semibold text-xl" style={{fontSize: '1.25rem', lineHeight: '1.75rem', fontWeight: '600', marginBottom:'8'}}><FormattedMessage id="clawa" defaultMessage="Classical wallets"/></div><div className="mt-4"  style={{marginTop: '4', textAlign:'left'}}><FormattedMessage id="clawa1" defaultMessage="We are working on a formula allowing to buy HVSEcoins directly with your credit card and holding them in your wallet (Metamask, Coinbase wallet, Ledger..)."/></div></div>}
    />
    </Layout></SimpleLocalize>
  )
}


export default HVSEwallets
