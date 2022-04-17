import * as React from "react";
import Layout from '../components/layout';
import Card from '../components/Card';
import {FormattedMessage} from "react-intl";
import LinkTranslated from "../components/LinkTranslated";
import SimpleLocalize from "../components/SimpleLocalize";
import SEO from "../components/seo";

// Step 2: Define your component
function GetStarted(props) {
  return (
    <SimpleLocalize {...props}>
    <SEO title="Start"/>
    <Layout>
    <div style={{fontWeight:'100', fontSize: '1.25rem', lineHeight: '2rem', textAlign:'center', alignItems:'center', contentAlign:'middle', whiteSpace:'nowrap'}}><FormattedMessage id="how" defaultMessage="How to start?"/></div>

    <Card
    id="Starting block"
    children1={<div><div className="font-semibold text-xl" style={{fontSize: '1.25rem', lineHeight: '1.75rem', fontWeight: '600', marginBottom:'8'}}><FormattedMessage id="buyit" defaultMessage="Buy HVSEcoins"/></div><div className="mt-4"  style={{marginTop: '4', textAlign:'left'}}><FormattedMessage id="buyit1" defaultMessage="Soonly you can "/><LinkTranslated href="/GetHVSEcoin" style={{textDecoration: "none",  color: 'var(--textLink)'}}><FormattedMessage id="buyit2" defaultMessage="buy some HVSEcoins"/></LinkTranslated><FormattedMessage id="buyit3" defaultMessage=" by different ways in order "/><LinkTranslated href="/StakeOnIHVPTs" style={{textDecoration: "none",  color: 'var(--textLink)'}}><FormattedMessage id="buyit4" defaultMessage="to stake on other IHVPTs"/></LinkTranslated>.</div></div>}
    children2={<div><div className="font-semibold text-xl" style={{fontSize: '1.25rem', lineHeight: '1.75rem', fontWeight: '600', marginBottom:'8'}}><FormattedMessage id="stakeot" defaultMessage="Stake on others"/></div><div className="mt-4" style={{marginTop: '4', textAlign:'left'}}><FormattedMessage id="stakeot1" defaultMessage="In order "/><LinkTranslated href="/StakeOnIHVPTs" style={{textDecoration: "none",  color: 'var(--textLink)'}}><FormattedMessage id="stakeot2" defaultMessage="to stake on others"/></LinkTranslated><FormattedMessage id="stakeot3" defaultMessage=", you need firstly to buy HVSEcoin and then to use the HVSEcore."/></div></div>}
    children3={<div><div className="font-semibold text-xl" style={{fontSize: '1.25rem', lineHeight: '1.75rem', fontWeight: '600', marginBottom:'8'}}><FormattedMessage id="betok" defaultMessage="Be tokenized"/></div><div className="mt-4"  style={{marginTop: '4', textAlign:'left'}}><LinkTranslated href="/BeTokenized" style={{textDecoration: "none",  color: 'var(--textLink)'}}>Tokenization</LinkTranslated><FormattedMessage id="betok1" defaultMessage=" is a process that you can follow step by step if you are interested in."/></div></div>}
    />
    </Layout></SimpleLocalize>
  )
}


export default GetStarted
