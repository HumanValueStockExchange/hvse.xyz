import * as React from "react"
import Layout from '../components/layout'
import Card from '../components/Card';

// Step 2: Define your component
const GetStarted = () => {
  return (
    <Layout>
    <p style={{fontWeight:'100', fontSize: '1.25rem', lineHeight: '2rem', textAlign:'center', alignItems:'center', contentAlign:'middle', whiteSpace:'nowrap'}}>How to start?</p>

    <Card
    id="Starting block"
    children1={<div><p className="font-semibold text-xl" style={{fontSize: '1.25rem', lineHeight: '1.75rem', fontWeight: '600', marginBottom:'8'}}>Buy HVSEcoins</p><p className="mt-4"  style={{marginTop: '4', textAlign:'left'}}>Soonly you can <a href="/GetHVSEcoin">buy some HVSEcoins</a> by different ways in order <a href="/StakeOnIHVTs">to stake on other IHVTs</a>.</p></div>}
    children2={<div><p className="font-semibold text-xl" style={{fontSize: '1.25rem', lineHeight: '1.75rem', fontWeight: '600', marginBottom:'8'}}>Stake on others</p><p className="mt-4" style={{marginTop: '4', textAlign:'left'}}>In order <a href="/StakeOnIHVTs">to stake on others</a>, you need firstly to buy HVSEcoin and then to use the HVSEcore.</p></div>}
    children3={<div><p className="font-semibold text-xl" style={{fontSize: '1.25rem', lineHeight: '1.75rem', fontWeight: '600', marginBottom:'8'}}>Be tokenized</p><p className="mt-4"  style={{marginTop: '4', textAlign:'left'}}><a href="/BeTokenized">Tokenization</a> is a process that you can follow step by step if you are interested in.</p></div>}
    />
    </Layout>
  )
}


export default GetStarted
