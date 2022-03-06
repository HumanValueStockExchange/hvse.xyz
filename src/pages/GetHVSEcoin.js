import * as React from "react"
import Layout from '../components/layout'
import Card from '../components/Card';
import {FormattedMessage} from "react-intl";
import LinkTranslated from "../components/LinkTranslated";
import SimpleLocalize from "../components/SimpleLocalize";

// Step 2: Define your component
function GetHVSEcoin(props) {
  return (
    <SimpleLocalize {...props}>
    <Layout>
    <div style={{fontWeight:'100', fontSize: '1.25rem', lineHeight: '2rem', textAlign:'center', alignItems:'center', contentAlign:'middle', whiteSpace:'nowrap'}}><FormattedMessage id="wherehvse" defaultMessage="Where can I get some HVSEcoins?"/></div>

    <Card
    id="Buying Means"
    children1={<div><div className="font-semibold text-xl" style={{fontSize: '1.25rem', lineHeight: '1.75rem', fontWeight: '600', marginBottom:'8'}}><FormattedMessage id="wal" defaultMessage="Wallets"/></div><div className="mt-4"  style={{marginTop: '4', textAlign:'left'}}><FormattedMessage id="wal1" defaultMessage="Our HVSEcore, which is firstly a wallet, will let you buy HVSEcoin."/></div></div>}
    children2={<div><div className="font-semibold text-xl" style={{fontSize: '1.25rem', lineHeight: '1.75rem', fontWeight: '600', marginBottom:'8'}}>DEXs</div><div className="mt-4" style={{marginTop: '4', textAlign:'left'}}><FormattedMessage id="dex" defaultMessage="A decentralized exchange (or DEX) is a peer-to-peer marketplace where transactions occur directly between crypto traders."/></div></div>}
    children3={<div><div className="font-semibold text-xl" style={{fontSize: '1.25rem', lineHeight: '1.75rem', fontWeight: '600', marginBottom:'8'}}>CEXs</div><div className="mt-4"  style={{marginTop: '4', textAlign:'left'}}><FormattedMessage id="cex" defaultMessage="A CEX is a centralized platform where you can buy and sell cryptocurrencies."/></div></div>}
    />
    </Layout></SimpleLocalize>
  )
}


export default GetHVSEcoin
