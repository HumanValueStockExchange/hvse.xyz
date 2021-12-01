import * as React from "react"
import Layout from '../components/layout'
import Card from '../components/Card';

// Step 2: Define your component
const GetHVSEcoin = () => {
  return (
    <Layout>
    <p style={{fontWeight:'100', fontSize: '1.25rem', lineHeight: '2rem', textAlign:'center', alignItems:'center', contentAlign:'middle', whiteSpace:'nowrap'}}>Where can I get some HVSEcoins?</p>

    <Card
    id="Buying Means"
    children1={<div><p className="font-semibold text-xl" style={{fontSize: '1.25rem', lineHeight: '1.75rem', fontWeight: '600', marginBottom:'8'}}>Wallets</p><p className="mt-4"  style={{marginTop: '4', textAlign:'left'}}>Our HVSEcore, which is firstly a wallet, will let you buy HVSEcoin.</p></div>}
    children2={<div><p className="font-semibold text-xl" style={{fontSize: '1.25rem', lineHeight: '1.75rem', fontWeight: '600', marginBottom:'8'}}>DEXs</p><p className="mt-4" style={{marginTop: '4', textAlign:'left'}}>A decentralized exchange (or DEX) is a peer-to-peer marketplace where transactions occur directly between crypto traders.</p></div>}
    children3={<div><p className="font-semibold text-xl" style={{fontSize: '1.25rem', lineHeight: '1.75rem', fontWeight: '600', marginBottom:'8'}}>CEXs</p><p className="mt-4"  style={{marginTop: '4', textAlign:'left'}}>A CEX is a centralized platform where you can buy and sell cryptocurrencies.</p></div>}
    />
    </Layout>
  )
}


export default GetHVSEcoin
