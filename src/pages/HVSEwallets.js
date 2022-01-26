import * as React from "react"
import Layout from '../components/layout'
import Card from '../components/Card';

// Step 2: Define your component
const HVSEwallets = () => {
  return (
    <Layout>
    <p style={{fontWeight:'100', fontSize: '1.25rem', lineHeight: '2rem', textAlign:'center', alignItems:'center', contentAlign:'middle', whiteSpace:'nowrap'}}>HVSE Wallets</p>

    <Card
    id="HVSE wallets"
    children1={<div><p className="font-semibold text-xl" style={{fontSize: '1.25rem', lineHeight: '1.75rem', fontWeight: '600', marginBottom:'8'}}>Swap</p><p className="mt-4"  style={{marginTop: '4', textAlign:'left'}}>Firstly, <a href="/WhatIsHVSEcoin" style={{color: 'var(--textLink)'}}>HVSEcoin</a> will be available in UniSwap and then you could hodl them in your Metamask wallet. More details released after the HVSEcoin deployement.</p></div>}
    children2={<div><p className="font-semibold text-xl" style={{fontSize: '1.25rem', lineHeight: '1.75rem', fontWeight: '600', marginBottom:'8'}}>HVSEcore</p><p className="mt-4" style={{marginTop: '4', textAlign:'left'}}>HVSEcore will be at the same time a wallet and a plateform to bet on <a href="/WhatAreIHVPTs" style={{color: 'var(--textLink)'}}>IHVPTs</a>. More details coming.</p></div>}
    children3={<div><p className="font-semibold text-xl" style={{fontSize: '1.25rem', lineHeight: '1.75rem', fontWeight: '600', marginBottom:'8'}}>Classical wallets</p><p className="mt-4"  style={{marginTop: '4', textAlign:'left'}}>We are working on a formula allowing to buy HVSEcoins directly with your credit card and holding them in your wallet (Metamask, Coinbase wallet, Ledger..).</p></div>}
    />
    </Layout>
  )
}


export default HVSEwallets
