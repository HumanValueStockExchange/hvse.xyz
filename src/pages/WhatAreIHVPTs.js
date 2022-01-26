import * as React from "react";
import Layout from '../components/layout';
import Card from '../components/Card';
import { StaticImage } from 'gatsby-plugin-image';
import '../css/WhatIsHVSE.css';
import MainBlock from '../components/MainBlock';
import HVSE from '../images/theme/HVSE.js';

// Step 2: Define your component
const WhatAreIHVPTs = () => {
  return (
    <Layout style={{minHeight:'100%'}}>
    <MainBlock
      primarySlot={
        <div  class="mainbox" style={{backgroundColor:'var(--bg)', maxWidth:'100%', minHeight:'100%'}}>
        <p style={{fontWeight:'100', fontSize: '1.25rem', lineHeight: '1rem', textAlign:'center'}}>WHAT ARE IHVPTs?</p>
        <ul style={{fontSize: '0.75rem', lineHeight: '1.5rem',}}>
          <li>One person, one token. Your value, your token.</li>
          <li>IHVPTs are Individual Human Value Personalized Tokens.</li>
          <li>IHVPTs can only be bought or sold against <a href="/WhatIsHVSEcoin">HVSEcoin</a>.</li>
        </ul>
      </div>
      }
      secondarySlot={
      <HVSE/>}
    />
    <Card
    id="Chara1 IHVPTs"
    children1={<div><p className="font-semibold text-xl" style={{fontSize: '1.25rem', lineHeight: '1.75rem', fontWeight: '600', marginBottom:'8'}}>Altruism</p><p className="mt-4"  style={{marginTop: '4', textAlign:'left'}}>The possibility of <b>altruism</b> is community-offered by allowing the tokenized person to raise funds (by selling IHVPTs).</p></div>}
    children2={<div><p className="font-semibold text-xl" style={{fontSize: '1.25rem', lineHeight: '1.75rem', fontWeight: '600', marginBottom:'8'}}>Enrichment</p><p className="mt-4" style={{marginTop: '4', textAlign:'left'}}><b>Getting richer</b> by betting on the good IHVPT and thus speculate on its value.</p></div>}
    children3={<div><p className="font-semibold text-xl" style={{fontSize: '1.25rem', lineHeight: '1.75rem', fontWeight: '600', marginBottom:'8'}}>DAO governance</p><p className="mt-4"  style={{marginTop: '4', textAlign:'left'}}>1 IHVPT= 1 <b>veIHVPT</b>. veIHVPT comes with full voting rights within the IHVPT, and thus a governance system.</p></div>}
    />
    <Card
    id="Chara2 IHVPTs"
    children1={<div><p className="font-semibold text-xl" style={{fontSize: '1.25rem', lineHeight: '1.75rem', fontWeight: '600', marginBottom:'8'}}>Passive income</p><p className="mt-4"  style={{marginTop: '4', textAlign:'left'}}>To access to veIHVPT, <b>you need to stake</b> your IHVPT. Upon unstaking, you will receive your IHVPTs plus any additional IHVPTs from the official staking pool.</p></div>}
    children2={<div><p className="font-semibold text-xl" style={{fontSize: '1.25rem', lineHeight: '1.75rem', fontWeight: '600', marginBottom:'8'}}>Retributions</p><p className="mt-4" style={{marginTop: '4', textAlign:'left'}}>Tokenized people can if they wish <b>provide NFTs or other benefits to their IHVPTs holders</b>. No obligation in this regard exists but it remains possible.</p></div>}
    children3={<div><p className="font-semibold text-xl" style={{fontSize: '1.25rem', lineHeight: '1.75rem', fontWeight: '600', marginBottom:'8'}}>Derivatives</p><p className="mt-4"  style={{marginTop: '4', textAlign:'left'}}>This utility  allows <b>to bet on IHVPTs derived products</b> like bearish or bullish levers (as <a href="https://en.wikipedia.org/wiki/Contract_for_difference" style={{textDecoration: "none",  color: 'var(--textLink)'}}>CFDs</a>). That's a prediction market.</p></div>}
    />
    <div style={{height:'50px'}}></div>

    </Layout>
  )
}


export default WhatAreIHVPTs
