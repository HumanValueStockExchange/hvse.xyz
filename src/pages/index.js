// Step 1: Import React
import * as React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import LabelText from '../components/LabelText';
import Layout from '../components/layout';
import Carousel from '../components/Carousel';
import MainBlock from '../components/MainBlock';
import SplitSection from '../components/SplitSection';
import { StaticImage } from 'gatsby-plugin-image';
import "../css/global.css";
import '../css/roadmap.css';
import Stock from '../images/theme/Stock.js';
import {FormattedMessage} from "react-intl";
import LinkTranslated from "../components/LinkTranslated";
import SimpleLocalize from "../components/SimpleLocalize";

// Step 2: Define your component



function IndexPage(props) {
  return (
    <SimpleLocalize {...props}>
    <Layout>
    <MainBlock
    id="Get started"
    primarySlot={
        <div className="text-center lg:text-left lg:w-1/2">
        <div className="pageTitle" style={{fontWeight:'700', fontSize: '2.25rem', lineHeight: '2.5rem', class:'lead', textAlign: 'center'}}> <p>Human Value Stock Exchange</p></div>
    <div className="text-xl lg:text-2xl mt-6 font-light" style={{marginTop:'0px',marginBottom:'15px', fontWeight:'300', fontSize: '120%', lineHeight: '1.75rem', textAlign: 'center', marginRight:'auto', marginLeft:'auto'}}><FormattedMessage id="slogan" defaultMessage="Bet on others success, or improve yourself readily!"/></div>
    <div style={{textAlign: 'center', marginRight:'auto', marginLeft:'auto'}}>
            <LinkTranslated href="/about">
              <Button type="lg" style={{marginTop:'8',paddingRight:'0.25em'}}><FormattedMessage
          id="about-us"
          defaultMessage="About us"
        /></Button>
            </LinkTranslated>
            <LinkTranslated href="/whitepaper">
              <Button type="lg" style={{marginTop:'8',paddingRight:'0.25em'}}><FormattedMessage
          id="white-paper"
          defaultMessage="Whitepaper"
        /></Button>
            </LinkTranslated></div></div>}
    secondarySlot={
      <Stock></Stock>
    }
    />
    <div className="head" style={{fontSize: '1.25rem', lineHeight: '1.75rem', fontWeight: '600', textAlign: 'center', marginBottom: '3', marginTop:'3em',  color:'var(--textNormal)'}}>
    <FormattedMessage id="main-features" defaultMessage="MAIN FEATURES"/>
    </div>
    <Card
    children1={<div><div className="font-semibold text-xl" style={{fontSize: '1.25rem', lineHeight: '1.75rem', fontWeight: '600',marginTop: '20px', marginBottom:'20px'}}><FormattedMessage id="tender-offer" defaultMessage="Tender offer"/></div>
    <div className="mt-4"  style={{marginTop: '20px'}}><FormattedMessage id='riskanal1' defaultMessage='After a risk analysis study, we will contact you in order to organize your'/> <LinkTranslated href="/WhatAreIHVPTs" style={{textDecoration: "none",  color: 'var(--textLink)'}}>IHVPT</LinkTranslated> <FormattedMessage id='riskanal2' defaultMessage="into the HVSE."/></div></div>}
    children2={<div>
    <div className="font-semibold text-xl" style={{fontSize: '1.25rem', lineHeight: '1.75rem', fontWeight: '600',marginTop: '20px', marginBottom:'20px'}}><FormattedMessage id="staking1" defaultMessage="Staking"/></div><div className="mt-4" style={{marginTop: '20px'}}><FormattedMessage id="stakingsub1" defaultMessage="You can bet on others success, and so make profits. Thanks to the staking system of"/><LinkTranslated href="/WhatAreIHVPTs" style={{textDecoration: "none",  color: 'var(--textLink)'}}> IHVPTs, </LinkTranslated><FormattedMessage id="stakingsub2" defaultMessage="holders are rewarded."/></div></div>}
    children3={<div><div className="font-semibold text-xl" style={{fontSize: '1.25rem', lineHeight: '1.75rem', fontWeight: '600',marginTop: '20px', marginBottom:'20px'}}><FormattedMessage id="advising" defaultMessage="Advising"/></div><div className="mt-4"  style={{marginTop: '20px'}}><FormattedMessage id="advisingsub1" defaultMessage="After your tokenization, advices will be given by hodlers of your"/><LinkTranslated href="/WhatAreIHVPTs" style={{textDecoration: "none",  color: 'var(--textLink)'}}> IHVPT </LinkTranslated><FormattedMessage id="advisingsub2" defaultMessage="in order to increase your performances (thanks to a DAO governance system)."/></div></div>}
    />
        <SplitSection
      id="Tokenization Process"
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight"><div><FormattedMessage id="MA" defaultMessage="Market Analysis"/></div></h3>
          <div className="mt-8 text-xl font-light leading-relaxed"><FormattedMessage id="MAsub"
            defaultMessage="Our marketers team will analyse and assess how you could integrate the "/><LinkTranslated href="/WhatIsHVSE" style={{textDecoration: "none",  color: 'var(--textLink)'}}><FormattedMessage id="hvse-market" defaultMessage="HVSE market"/></LinkTranslated>.
          </div>
        </div>
      }
      secondarySlot={<StaticImage style={{maxWidth:"300px", marginRight:'auto', marginLeft:'auto'}}
        alt="HVSE market place"
        src="../images/theme/marketers.png"
      />}
    />
    <SplitSection
      secondarySlot={
        <div className="lg:pl-32 xl:pl-48">
          <h3 className="text-3xl font-semibold leading-tight"><div>
            <FormattedMessage id="3D" defaultMessage="Design, Plan and Chill"/></div>
          </h3>
          <div className="mt-8 text-xl font-light leading-relaxed">
            <FormattedMessage id="3Dsub" defaultMessage="Once your tokenization study is completed, our staff will help you in the right way to introduce you on the "/><LinkTranslated href="/WhatIsHVSE" style={{textDecoration: "none",  color: 'var(--textLink)'}}><FormattedMessage id="hvse-market" defaultMessage="HVSE market"/></LinkTranslated>.
          </div>
        </div>
      }
      primarySlot={<StaticImage style={{maxWidth:"300px", marginRight:'auto', marginLeft:'auto'}}
        alt="HVSE market place"
        src="../images/theme/planners.png"
      />}
    />
    <SplitSection
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight"><div>
            <FormattedMessage id="opti" defaultMessage="Search For Your Performance Optimization"/></div>
          </h3>
          <div className="mt-8 text-xl font-light leading-relaxed">
            <FormattedMessage id="optisub1" defaultMessage="With several informations (health, wages, community impact...), hodlers of "/><LinkTranslated href="/WhatAreIHVPTs" style={{textDecoration: "none",  color: 'var(--textLink)'}}>IHVPTs</LinkTranslated><FormattedMessage id="optisub2" defaultMessage=" will present advices that you can follow or not."/>
          </div>
        </div>
      }
      secondarySlot={
      <StaticImage style={{maxWidth:"300px", marginRight:'auto', marginLeft:'auto'}}
        alt="HVSE market place"
        src="../images/theme/performance.png"
      />}
    />
    <div id="roadmap" className="py-20 lg:pt-32" style={{paddingTop:'5em', paddingBottom:'5em', color:'var(--textNormal)'}}>
        <LabelText className="text-600" style={{color:'var(--textNormal)'}}><FormattedMessage id="roadmap" defaultMessage="ROADMAP"/></LabelText>
        <h1><FormattedMessage id="hvse-prog" defaultMessage="HVSE progression"/></h1>
      <div class="flex-parent">
        <div class="input-flex-container">
		      <input type="radio" name="timeline-dot" data-description="11/2021" checked/>
		      <div class="dot-info" data-description="11/2021">
			      <span class="year">11/2021</span>
			      <span class="label"><FormattedMessage id="website" defaultMessage="Website"/></span>
		      </div>
		      <input type="radio" name="timeline-dot" data-description="04/2022" checked/>
		      <div class="dot-info" data-description="04/2022">
			      <span class="year">04/2022</span>
			      <span class="label"><FormattedMessage id="wp-pub" defaultMessage="Whitepaper publication"/></span>
		      </div>
		      <input type="radio" name="timeline-dot" data-description="07/2022"/>
		      <div class="dot-info" data-description="07/2022">
			      <span class="year">07/2022</span>
			      <span class="label"><FormattedMessage id="block-dep" defaultMessage="Blockchain deployement"/></span>
		      </div>
		      <input type="radio" name="timeline-dot" data-description="09/2022"/>
		      <div class="dot-info" data-description="09/2022">
			      <span class="year">09/2022</span>
			      <span class="label">HVSEcore 1.0.</span>
		      </div>
		      <input type="radio" name="timeline-dot" data-description="12/2022"/>
		      <div class="dot-info" data-description="12/2022">
			      <span class="year">12/2022</span>
			      <span class="label"><FormattedMessage id="foundoff" defaultMessage="Foundation officialisation"/></span>
		      </div>
		      <input type="radio" name="timeline-dot" data-description="01/2023"/>
		      <div class="dot-info" data-description="01/2023">
			      <span class="year">01/2023</span>
			      <span class="label"><FormattedMessage id="ambrec" defaultMessage="Ambassadors recruitment"/></span>
		      </div>
		      <input type="radio" name="timeline-dot" data-description="02/2023"/>
          <div class="dot-info" data-description="02/2023">
            <span class="year">02/2023</span>
            <span class="label">HVSEcore 2.0.</span>
		      </div>
		      <input type="radio" name="timeline-dot" data-description="03/2023"/>
		      <div class="dot-info" data-description="03/2023">
			      <span class="year">03/2023</span>
			      <span class="label"><FormattedMessage id="firsttoken" defaultMessage="First tokenizations"/></span>
		      </div>
		      <input type="radio" name="timeline-dot" data-description="06/2023"/>
		      <div class="dot-info" data-description="06/2023">
			      <span class="year">06/2023</span>
			      <span class="label"><FormattedMessage id="markcamp" defaultMessage="Marketing campaign"/></span>
		      </div>
		      <input type="radio" name="timeline-dot" data-description="09/2023"/>
		      <div class="dot-info" data-description="09/2023">
			      <span class="year">09/2023</span>
			      <span class="label"><FormattedMessage id="offlist" defaultMessage="Official listings"/></span>
		      </div>
		        <div id="timeline-descriptions-wrapper">
			        <p data-description="11/2021"><FormattedMessage id="websub" defaultMessage="The website first implementation which is the main HVSE community ressource."/></p>
			        <p data-description="04/2022"><FormattedMessage id="wp-pubsub" defaultMessage="Whitepaper final copy published, which allows to everyone to understand our philosophy as best as possible."/></p>
			        <p data-description="07/2022">
			        <ul>
			        <li><FormattedMessage id= "block-depsub1" defaultMessage="HVSEcoin and IHVPT blockchains published on GitHub."/></li>
			        <li><FormattedMessage id= "block-depsub2" defaultMessage="Deployement of HVSEcoin."/></li>
			        <li><FormattedMessage id= "block-depsub3" defaultMessage="Deployment of the liquidity pool on Uniswap."/></li>
			        <li><FormattedMessage id= "block-depsub4" defaultMessage="Listing on CoinGecko and on CoinMarketCap."/></li>
			        <li><FormattedMessage id= "block-depsub5" defaultMessage="First Security Audit."/></li>
			        <li><FormattedMessage id= "block-depsub6" defaultMessage="Website implementation in 3.0."/></li>
			        </ul>
			        </p>
			        <p data-description="09/2022"><FormattedMessage id= "hvsec1" defaultMessage="First release of HVSEcore, our main software: a wallet and a DEX to buy/sell HVSEcoin."/></p>
			        <p data-description="12/2022"><FormattedMessage id= "foundsub" defaultMessage="Administrative and juridic status of our foundation accepted by authorities, in order to recruit employees and obtain official licenses. At the same time, audits will be performed."/></p>
			        <p data-description="01/2023"><FormattedMessage id= "ambsub" defaultMessage="First part of the marketing campaign: our ambassadors recruitment."/></p>
			        <p data-description="02/2023"><FormattedMessage id= "hvsec2" defaultMessage="HVSEcore 2.0 allowing to buy/sell IHVPTs."/></p>
		      	  <p data-description="03/2023"><FormattedMessage id= "toksub" defaultMessage="Begining of the tokenization process for everyone."/></p>
			        <p data-description="06/2023"><FormattedMessage id= "marksub" defaultMessage="Second phase of the marketing campaign."/></p>
			        <p data-description="09/2023"><FormattedMessage id= "finalsub" defaultMessage="HVSEcoin listing on various CEXs as Binance or Coinbase."/></p>
          </div>
        </div>
      </div>
    </div>
    <section id="stories" className="py-20 lg:py-40" style={{paddingBottom:'20', paddingTop:'20', color:'var(--textNormal)'}}>

      <div style={{marginRight:'auto', marginLeft:'auto'}}>
        <LabelText className="mb-8 text-600 text-center" style={{color:'var(--textNormal)'}}><FormattedMessage id="cust" defaultMessage="WHAT CUSTOMERS ARE SAYING"/></LabelText>
        <div><Carousel /></div>
</div>
    </section>
    <section  style={{marginRight:'auto', marginLeft:'auto', marginTop:'auto', marginBottom:'auto', paddingTop:'4em', paddingBottom:'4em', textAlign:'center', backgroundColor:'var(--bg)', verticalAlign: 'middle', boxSizing: 'border-box', boxShadow: '0 10px 28px rgba(0,0,0,.08)',   borderColor: '#e9ecef', borderRadius: '0.25rem'}}>
      <h3 className="text-5xl font-semibold" style={{fontSize: '3rem', lineHeight: '3rem', fontWeight:'600', color:'var(--textNormal)'}}><FormattedMessage id= "red" defaultMessage="Ready to improve yourself?"/></h3>
      <p className="mt-8 text-xl font-light" style={{marginTop:'8', fontSize: '1.25rem', lineHeight: '1.75rem',fontWeight:'300'}}>
        <FormattedMessage id= "wait" defaultMessage="We are all waiting you!"/>
      </p>
      <p className="mt-8" style={{marginTop:'8'}}>
      <LinkTranslated href="/GetStarted">
        <Button type="bg"><FormattedMessage id= "start" defaultMessage="Get Started"/></Button>
      </LinkTranslated>
      </p>
    </section>
  </Layout>
  </SimpleLocalize>
  )
}
// Step 3: Export your component
export default IndexPage
