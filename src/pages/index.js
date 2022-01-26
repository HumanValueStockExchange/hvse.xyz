// Step 1: Import React
import * as React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import LabelText from '../components/LabelText';
import Layout from '../components/layout';
import Carousel from '../components/Carousel';
import { Link } from "gatsby";
import MainBlock from '../components/MainBlock';
import SplitSection from '../components/SplitSection';
import { StaticImage } from 'gatsby-plugin-image';
import "../css/global.css";
import '../css/roadmap.css';
import Stock from '../images/theme/Stock.js'

// Step 2: Define your component



const IndexPage = () => {
  return (
    <Layout>
    <MainBlock
    id="Get started"
    primarySlot={
        <div className="text-center lg:text-left lg:w-1/2">
        <div className="pageTitle" style={{fontWeight:'700', fontSize: '2.25rem', lineHeight: '2.5rem', class:'lead'}}> <p>Human Value Stock Exchange</p></div>
    <p className="text-xl lg:text-2xl mt-6 font-light" style={{marginTop:'6px', fontWeight:'300', fontSize: '120%', lineHeight: '1.75rem'}}>Thanks to our technologies, you can either bet on others success, or improve yourself easily or both!</p>
            <Link to="/about">
              <Button type="lg" style={{marginTop:'8',paddingRight:'0.25em'}}>About us ❯</Button>
            </Link>
            <Link to="/Twhitepaper">
              <Button type="lg" style={{marginTop:'8',paddingRight:'0.25em'}}>Whitepaper ❯</Button>
            </Link></div>}
    secondarySlot={
      <Stock></Stock>
    }
    />
    <div className="head" style={{fontSize: '1.25rem', lineHeight: '1.75rem', fontWeight: '600', textAlign: 'center', marginBottom: '3', marginTop:'3em',  color:'var(--textNormal)'}}>MAIN FEATURES</div>
    <Card
    id="Main Features"
    children1={<div><p className="font-semibold text-xl" style={{fontSize: '1.25rem', lineHeight: '1.75rem', fontWeight: '600', marginBottom:'8'}}>Tender offering</p><p className="mt-4"  style={{marginTop: '4'}}>After a short period of risk analysis, we will contact you in order to organize your market introduction.</p></div>}
    children2={<div><p className="font-semibold text-xl" style={{fontSize: '1.25rem', lineHeight: '1.75rem', fontWeight: '600', marginBottom:'8'}}>Staking</p><p className="mt-4" style={{marginTop: '4'}}>Thanks to HVSEcore, you can bet on others success and therefore do profits and allow them to do some also.</p></div>}
    children3={<div><p className="font-semibold text-xl" style={{fontSize: '1.25rem', lineHeight: '1.75rem', fontWeight: '600', marginBottom:'8'}}>Advising</p><p className="mt-4"  style={{marginTop: '4'}}>After your IHVPTs tokenization, advices are freely given to you in order to increase your performances.</p></div>}
    />
        <SplitSection
      id="Tokenization Process"
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">Market Analysis</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Our team of enthusiastic marketers will analyse and evaluate how you could integrate the HVSE and therefore hodling your IHVPTs (Individual Human Value Tokens).
          </p>
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
          <h3 className="text-3xl font-semibold leading-tight">
            Design, Plan and Chill
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Once your market implementation analysis process is completed by our analysts, our staff will help you in the right way to introduce you on the HVSE market.
          </p>
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
          <h3 className="text-3xl font-semibold leading-tight">
            Search For Your Performance Optimization
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            With all the information in place concerning various life aspects(health, wages,...), you will be presented with an action plan that you need to follow
          </p>
        </div>
      }
      secondarySlot={
      <StaticImage style={{maxWidth:"300px", marginRight:'auto', marginLeft:'auto'}}
        alt="HVSE market place"
        src="../images/theme/performance.png"
      />}
    />
    <div id="roadmap" className="py-20 lg:pt-32" style={{paddingTop:'5em', paddingBottom:'5em', color:'var(--textNormal)'}}>
        <LabelText className="text-600" style={{color:'var(--textNormal)'}}>ROADMAP</LabelText>
        <h1>HVSE progression, <span>2021–2023</span></h1>
      <div class="flex-parent">
        <div class="input-flex-container">
		      <input type="radio" name="timeline-dot" data-description="11/2021" checked/>
		      <div class="dot-info" data-description="11/2021">
			      <span class="year">11/2021</span>
			      <span class="label">Website</span>
		      </div>
		      <input type="radio" name="timeline-dot" data-description="02/2022"/>
		      <div class="dot-info" data-description="02/2022">
			      <span class="year">02/2022</span>
			      <span class="label">Whitepaper publication</span>
		      </div>
		      <input type="radio" name="timeline-dot" data-description="07/2022"/>
		      <div class="dot-info" data-description="07/2022">
			      <span class="year">07/2022</span>
			      <span class="label">Blockchain deployement</span>
		      </div>
		      <input type="radio" name="timeline-dot" data-description="09/2022"/>
		      <div class="dot-info" data-description="09/2022">
			      <span class="year">09/2022</span>
			      <span class="label">HVSEcore 1.0.</span>
		      </div>
		      <input type="radio" name="timeline-dot" data-description="12/2022"/>
		      <div class="dot-info" data-description="12/2022">
			      <span class="year">12/2022</span>
			      <span class="label">Foundation officialisation</span>
		      </div>
		      <input type="radio" name="timeline-dot" data-description="01/2023"/>
		      <div class="dot-info" data-description="01/2023">
			      <span class="year">01/2023</span>
			      <span class="label">Ambassadors recruitment</span>
		      </div>
		      <input type="radio" name="timeline-dot" data-description="02/2023"/>
          <div class="dot-info" data-description="02/2023">
            <span class="year">02/2023</span>
            <span class="label">HVSEcore 2.0.</span>
		      </div>
		      <input type="radio" name="timeline-dot" data-description="03/2023"/>
		      <div class="dot-info" data-description="03/2023">
			      <span class="year">03/2023</span>
			      <span class="label">First tokenizations</span>
		      </div>
		      <input type="radio" name="timeline-dot" data-description="06/2023"/>
		      <div class="dot-info" data-description="06/2023">
			      <span class="year">06/2023</span>
			      <span class="label">Marketing campaign</span>
		      </div>
		      <input type="radio" name="timeline-dot" data-description="09/2023"/>
		      <div class="dot-info" data-description="09/2023">
			      <span class="year">09/2023</span>
			      <span class="label">Official listings</span>
		      </div>
		        <div id="timeline-descriptions-wrapper">
			        <p data-description="11/2021">The website first implementation which is the main HVSE community ressource.</p>
			        <p data-description="02/2022">Whitepaper final copy published, which allows to everyone to understand our philosophy as best as possible.</p>
			        <p data-description="07/2022">
			        <ul>
			        <li>HVSEcoin and IHVPT blockchains published on GitHub.</li>
			        <li>Deployement of HVSEcoin.</li>
			        <li>Deployment of the liquidity pool on Uniswap.</li>
			        <li>Listing on CoinGecko and on CoinMarketCap.</li>
			        <li>First Security Audit.</li>
			        <li> Website implementation in 3.0.</li>
			        </ul>
			        </p>
			        <p data-description="09/2022">First release of HVSEcore, our main software: a wallet and a DEX to buy/sell HVSEcoin.</p>
			        <p data-description="12/2022">Administrative and juridic status of our foundation accepted by authorities, in order to recruit employees and obtain official licenses. At the same time, audits will be performed.</p>
			        <p data-description="01/2023">First part of the marketing campaign: our ambassadors recruitment.</p>
			        <p data-description="02/2023">HVSEcore 2.0 allowing to buy/sell IHVPTs.</p>
		      	  <p data-description="03/2023">Begining of the tokenization process for everyone.</p>
			        <p data-description="06/2023">Second phase of the marketing campaign.</p>
			        <p data-description="09/2023">HVSEcoin listing on various CEXs as Binance or Coinbase.</p>
          </div>
        </div>
      </div>
    </div>
    <section id="stories" className="py-20 lg:py-40" style={{paddingBottom:'20', paddingTop:'20', color:'var(--textNormal)'}}>

      <div style={{marginRight:'auto', marginLeft:'auto'}}>
        <LabelText className="mb-8 text-600 text-center" style={{color:'var(--textNormal)'}}>WHAT CUSTOMERS ARE SAYING</LabelText>
        <div><Carousel /></div>
</div>
    </section>
    <section  style={{marginRight:'auto', marginLeft:'auto', marginTop:'auto', marginBottom:'auto', paddingTop:'4em', paddingBottom:'4em', textAlign:'center', backgroundColor:'var(--bg)', verticalAlign: 'middle', boxSizing: 'border-box', boxShadow: '0 10px 28px rgba(0,0,0,.08)',   borderColor: '#e9ecef', borderRadius: '0.25rem'}}>
      <h3 className="text-5xl font-semibold" style={{fontSize: '3rem', lineHeight: '3rem', fontWeight:'600', color:'var(--textNormal)'}}>Ready to improve yourself?</h3>
      <p className="mt-8 text-xl font-light" style={{marginTop:'8', fontSize: '1.25rem', lineHeight: '1.75rem',fontWeight:'300'}}>
        We are all waiting you!
      </p>
      <p className="mt-8" style={{marginTop:'8'}}>
      <Link to="/GetStarted">
        <Button type="bg">Get Started ❯</Button>
      </Link>
      </p>
    </section>
  </Layout>
  )
}

// Step 3: Export your component
export default IndexPage
