// Step 1: Import React
import * as React from 'react'
import Button from '../components/Button';
import Card from '../components/Card';
import CustomerCard from '../components/CustomerCard';
import LabelText from '../components/LabelText';
import Layout from '../components/layout';
import { Link } from "gatsby";
import MainBlock from '../components/MainBlock'
import SplitSection from '../components/SplitSection';
import StatsBox from '../components/StatsBox';
import customerData from '../data/CustomerData';
import HeroImage from '../images/theme/HeroImage';
import SvgCharts from '../images/theme/SvgCharts'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout>
    <MainBlock
    id="Get started"
    primarySlot={
        <div className="text-center lg:text-left lg:w-1/2">
        <div className="pageTitle" style={{fontWeight:'700', fontSize: '2.25rem', lineHeight: '2.5rem', class:'lead'}}> <p>Human Value Stock Exchange</p></div>
    <p className="text-xl lg:text-2xl mt-6 font-light" style={{marginTop:'6px', fontWeight:'300', fontSize: '1.25rem',
lineHeight: '1.75rem'}}>Your success, our means! Thanks to our technologies, you can bet on others success , or improve yourself easily or both!</p>
            <Link to="/about">
              <Button type="lg" style={{marginTop:'8',paddingRight:'0.25em'}}>About us ❯</Button>
            </Link>
            <Link to="/roadmap">
              <Button type="lg" style={{marginTop:'8',paddingRight:'0.25em'}}>Roadmap ❯</Button>
            </Link>
            <Link to="/whitepaper">
              <Button type="lg" style={{marginTop:'8',paddingRight:'0.25em'}}>Whitepaper ❯</Button>
            </Link></div>}
    secondarySlot={<HeroImage />}
    />
    <div className="head" style={{fontSize: '1.25rem', lineHeight: '1.75rem', fontWeight: '600', textAlign: 'center', marginBottom: '3', marginTop:'3em'}}>MAIN FEATURES</div>
    <Card
    id="Main Features"
    children1={<div><p className="font-semibold text-xl" style={{fontSize: '1.25rem', lineHeight: '1.75rem', fontWeight: '600', marginBottom:'8'}}>Tender offering</p><p className="mt-4"  style={{marginTop: '4'}}>After a short period of risk analysis, we will contact you in order to organize your market introduction.</p></div>}
    children2={<div><p className="font-semibold text-xl" style={{fontSize: '1.25rem', lineHeight: '1.75rem', fontWeight: '600', marginBottom:'8'}}>Staking</p><p className="mt-4" style={{marginTop: '4'}}>Thanks to our main software, you can bet on others success and therefore do profits and allow them to do some also.</p></div>}
    children3={<div><p className="font-semibold text-xl" style={{fontSize: '1.25rem', lineHeight: '1.75rem', fontWeight: '600', marginBottom:'8'}}>Advising</p><p className="mt-4"  style={{marginTop: '4'}}>After your IHVTs tokenization, advices are freely given to you in order to increase your performances.</p></div>}
    />
        <SplitSection
      id="Tokenization Process"
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">Market Analysis</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Our team of enthusiastic marketers will analyse and evaluate how you could integrate the HVSE and therefore hodling your IHVTs (Individual Human Value Tokens).
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
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
      primarySlot={<HeroImage />}
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
      secondarySlot={<SvgCharts />}
    />
    <section id="stats" className="py-20 lg:pt-32" style={{paddingTop:'5em', paddingBottom:'5em'}}>
      <div className="container mx-auto text-center" style={{marginRight:'auto', marginLeft:'auto', textAlign:'center'}}>
        <LabelText className="text-gray-600">OUR CUSTOMERS GET RESULTS</LabelText>
        <div className="flex flex-col sm:flex-row mt-8 lg:px-24" style={{display:'flex', flexDirection:'row', margin:'auto', float: 'center'}}>
          <div className="w-full sm:w-1/3" style={{width:'100%', columnWidth:'1/3'}}>
            <StatsBox primaryText="+100%" secondaryText="IHVTs average capital gain" />
          </div>
          <div className="w-full sm:w-1/3" style={{width:'100%', columnWidth:'1/3'}}>
            <StatsBox primaryText="+100%" secondaryText="Checked personal objectives" />
          </div>
          <div className="w-full sm:w-1/3" style={{width:'100%', columnWidth:'1/3'}}>
            <StatsBox primaryText="+100%" secondaryText="Satisfaction since tokenization" />
          </div>
        </div>
      </div>
    </section>
    <section id="stories" className="py-20 lg:py-40" style={{paddingBottom:'20', paddingTop:'20'}}>
      <div className="container mx-auto"style={{marginRight:'auto', marginLeft:'auto'}}>
        <LabelText className="mb-8 text-gray-600 text-center">WHAT CUSTOMERS ARE SAYING</LabelText>
        <div className="flex flex-col md:flex-row md:-mx-3" style={{float: 'center', display:'flex', flexDirection:'row', marginLeft:'3', marginRight:'3', columnWidth:'30%'}}>
          {customerData.map(customer => (
            <div key={customer.customerName} className="flex-1 px-3">
              <CustomerCard customer={customer} />
            </div>
          ))}
        </div>
        <div style={{display:'flex', justifyContent:'center'}}>
        <Link to="/stories">
              <Button type="bg" style={{marginTop:'8',paddingRight:'0.25em'}}>More stories ❯</Button>
            </Link>
        </div>
        </div>
    </section>
    <section className="container mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center" class="container" style={{marginRight:'auto', marginLeft:'auto', marginTop:'auto', marginBottom:'auto', paddingTop:'4em', paddingBottom:'4em', textAlign:'center', backgroundColor:'rgba(249, 250, 251,1)', verticalAlign: 'middle',}}>
      <h3 className="text-5xl font-semibold" style={{fontSize: '3rem', lineHeight: '3rem', fontWeight:'600'}}>Ready to improve yourself?</h3>
      <p className="mt-8 text-xl font-light" style={{marginTop:'8', fontSize: '1.25rem', lineHeight: '1.75rem',fontWeight:'300'}}>
        We are all waiting you!
      </p>
      <p className="mt-8" style={{marginTop:'8'}}>
        <Button type="bg">Get Started ❯</Button>
      </p>
    </section>
  </Layout>
  )
}

// Step 3: Export your component
export default IndexPage
