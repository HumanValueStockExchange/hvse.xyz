import * as React from "react";
import Layout from '../components/layout';
import Card from '../components/Card';
import '../css/WhatIsHVSE.css';
import { StaticImage } from 'gatsby-plugin-image';
import {FormattedMessage} from "react-intl";
import LinkTranslated from "../components/LinkTranslated";
import SimpleLocalize from "../components/SimpleLocalize";

// Step 2: Define your component
function BeTokenized(props) {
  return (
    <SimpleLocalize {...props}>
    <Layout>
    <div class="container">
    <div class="mainbox" style={{outline:'none', borderColor: 'inherit',  boxShadow: 'none', textAlign:'center', backgroundColor:'var(--bg)'}}><p style={{fontWeight:'100', fontSize: '1.25rem', lineHeight: '2rem', whiteSpace:'nowrap', textAlign:'center'}}>Be Tokenized</p></div>
          <div class="img">
      <StaticImage class="img"
      style={{maxWidth:'210px', marginTop:'20px'}}
        alt="HVSE market place"
        src="../images/theme/marketers.png"/>
      </div></div>
    <Card
    id="Tokenization"
    children1={<div><p className="font-semibold text-xl" style={{fontSize: '1.25rem', lineHeight: '1.75rem', fontWeight: '600', marginBottom:'8'}}>Initial analysis</p><p className="mt-4"  style={{marginTop: '4', textAlign:'left'}}>After your initial tokenization submission, a first analysis is performed in order to assess your <a href="/WhatAreIHVPTs" style={{color: 'var(--textLink)'}}>IHVPT</a> value in <a href="/WhatIsHVSEcoin" style={{color: 'var(--textLink)'}}>HVSEcoins</a>.</p></div>}
    children2={<div><p className="font-semibold text-xl" style={{fontSize: '1.25rem', lineHeight: '1.75rem', fontWeight: '600', marginBottom:'8'}}>Continuous assessment</p><p className="mt-4" style={{marginTop: '4', textAlign:'left'}}>Thanks to HVSEcore, your IHVPT value will be continuously revaluated thanks to new datas permanent integration.</p></div>}
    children3={<div><p className="font-semibold text-xl" style={{fontSize: '1.25rem', lineHeight: '1.75rem', fontWeight: '600', marginBottom:'8'}}>Continuous advices</p><p className="mt-4"  style={{marginTop: '4', textAlign:'left'}}>Main IHVPT hodlers can issue advices to the tokenized persons in order to increase their IHVPTs value.</p></div>}
    />
    </Layout></SimpleLocalize>
  )
}


export default BeTokenized
