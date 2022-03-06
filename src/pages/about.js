// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'

import {FormattedMessage} from "react-intl";
import LinkTranslated from "../components/LinkTranslated";
import SimpleLocalize from "../components/SimpleLocalize";

// Step 2: Define your component
function AboutPage(props){
  return (
    <SimpleLocalize {...props}>
      <Layout pageTitle="About us">
        <b><FormattedMessage id="making-you-better" defaultMessage="IMPROVING HELP"/></b>
        <FormattedMessage id="about1" defaultMessage="What is the difference between each of us? Our value. This criterion seems to be subjective. Therefore, none objective parameter exists yet to assess human value on an individual scale.The ability to find keys to success  is a vital component of human dignity and a fundamental human right. That’s why we stand for improve yourself without limits."/>
        <b><FormattedMessage id="about2" defaultMessage="SUCCESS WITHOUT LIMITS?"/></b>
        <FormattedMessage id="about3" defaultMessage="Success is actually entraved by a societal issue: the social elevator disapperance.Unlike other cryptocurrencies, HVSEcoin will not be a goal but a mean: the mean to your success and to improve yourself. In fact, HVSEcoin is the only way to access a new market: that of human values (Human Value Stock Exchange)."/>
        <b><FormattedMessage id="about4" defaultMessage="OUR ROLE ABOUT THAT"/></b>
        <FormattedMessage id="about5" defaultMessage="Our products make people better. "/><b><FormattedMessage id="about6" defaultMessage="Individuals"/></b><FormattedMessage id="about7" defaultMessage=" can buy, use, and store them securely with our digital wallet and financial services. "/><b><FormattedMessage id="about8" defaultMessage="Developers"/></b><FormattedMessage id="about9" defaultMessage="get support building technologies that promote financial inclusivity. Everyone who visits HVSE.xyz can learn about the future of our system from a trusted source."/>
        <b><FormattedMessage id="about10" defaultMessage="JOIN US"/></b>
        <FormattedMessage id="about11" defaultMessage="We’re currently hiring. If our foundation mission means something to you, you’re invited to join the HVSE.xyz team."/>
    </Layout>
  </SimpleLocalize>
  )
}

// Step 3: Export your component
export default AboutPage
