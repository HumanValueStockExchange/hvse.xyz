// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import '../css/roadmap.css'

// Step 2: Define your component
const RoadmapPage = () => {
  return (
    <Layout pageTitle="Roadmap">
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
			      <span class="label">Core 1.0.</span>
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
            <span class="label">HVSEcoin release</span>
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
			        <p data-description="11/2021">The website complete implementation which is the main HVSE community ressource.</p>
			        <p data-description="02/2022">Whitepaper final copy published, which allows to everyone to understand our philosophy as best as possible.</p>
			        <p data-description="07/2022">HVSEcoin and IHVT blockchains published on our official GitHub repo.</p>
			        <p data-description="09/2022">First release of our main software: the wallet and our DEX to buy HVSEcoin or IHVTs.</p>
			        <p data-description="12/2022">Administrative and juridic status of our foundation accepted by authorities, in order to recruit employees and obtain official licenses. At the same time, audits will be performed.</p>
			        <p data-description="01/2023">First part of the marketing campaign: our ambassadors recruitment.</p>
			        <p data-description="02/2023">HVSEcoin officially deployed in order to develop HVSE thanks to continous organization philosophy.</p>
		      	  <p data-description="03/2023">Begining of the tokenization process for everyone.</p>
			        <p data-description="06/2023">Second phase of the marketing campaign.</p>
			        <p data-description="09/2023">HVSEcoin listing on various CEXs as Binance or Coinbase.</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

// Step 3: Export your component
export default RoadmapPage
