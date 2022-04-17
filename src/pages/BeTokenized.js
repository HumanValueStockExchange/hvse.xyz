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
function BeTokenized(props) {
  return (
    <SimpleLocalize {...props}>
    <SEO title="Tokenization"/>
    <Layout>
    <div class="container">
    <div class="mainbox" style={{outline:'none', borderColor: 'inherit',  boxShadow: 'none', textAlign:'center', backgroundColor:'var(--bg)'}}><div style={{fontWeight:'100', fontSize: '1.25rem', lineHeight: '2rem', whiteSpace:'nowrap', textAlign:'center'}}><FormattedMessage id="betok" defaultMessage="Be Tokenized"/></div></div>
          <div class="img">
      <StaticImage class="img"
      style={{maxWidth:'210px', marginTop:'20px'}}
        alt="HVSE market place"
        src="../images/theme/marketers.png"/>
      </div></div>
    <Card
    id="Tokenization"
    children1={<div><div className="font-semibold text-xl" style={{fontSize: '1.25rem', lineHeight: '1.75rem', fontWeight: '600', marginBottom:'8'}}><FormattedMessage id="betok12" defaultMessage="Initial analysis"/></div><div className="mt-4"  style={{marginTop: '4', textAlign:'left'}}><FormattedMessage id="betok2" defaultMessage="After your initial tokenization submission, a first analysis is performed in order to assess your "/><LinkTranslated href="/WhatAreIHVPTs" style={{color: 'var(--textLink)'}}>IHVPT</LinkTranslated><FormattedMessage id="betok3" defaultMessage=" value in "/><LinkTranslated href="/WhatIsHVSEcoin" style={{color: 'var(--textLink)'}}>HVSEcoins</LinkTranslated>.</div></div>}
    children2={<div><div className="font-semibold text-xl" style={{fontSize: '1.25rem', lineHeight: '1.75rem', fontWeight: '600', marginBottom:'8'}}><FormattedMessage id="betok4" defaultMessage="Continuous assessment"/></div><div className="mt-4" style={{marginTop: '4', textAlign:'left'}}><FormattedMessage id="betok5" defaultMessage="Thanks to HVSEcore, your IHVPT value will be continuously revaluated thanks to new datas permanent integration."/></div></div>}
    children3={<div><div className="font-semibold text-xl" style={{fontSize: '1.25rem', lineHeight: '1.75rem', fontWeight: '600', marginBottom:'8'}}><FormattedMessage id="betok6" defaultMessage="Continuous advices"/></div><div className="mt-4"  style={{marginTop: '4', textAlign:'left'}}><FormattedMessage id="betok7" defaultMessage="Main IHVPT hodlers can issue advices to the tokenized persons in order to increase their IHVPTs value."/></div></div>}
    />
    </Layout></SimpleLocalize>
  )
}


export default BeTokenized
