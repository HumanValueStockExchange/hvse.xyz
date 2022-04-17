// Step 1: Import React
import React from 'react';
import { Helmet } from "react-helmet";
import 'gatsby-remark-mathjax';
import 'gatsby-transformer-remark';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';
import SplitSection from '../components/SplitSection';
import '../components/css/objects/scroller.css';
import {FormattedMessage} from "react-intl";
import LinkTranslated from "../components/LinkTranslated";
import SimpleLocalize from "../components/SimpleLocalize";
import SEO from '../components/seo';

// Step 2: Define your component

function WhitepaperPage(props) {
  return (
    <SimpleLocalize {...props}>
    <SEO title="HVSE Whitepaper"/>
    <Layout>
    <Helmet>
      <script src="//polyfill.io/v3/polyfill.min.js?features=es6"></script>
      <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
    </Helmet>
    <div class="container">
      <div class="bar"><ul class="sidebar">
  <li><a href="#Abstract" title="Abstract"><p style={{marginLeft:'7px'}}><FormattedMessage id='Abstract' defaultMessage='ABSTRACT'/></p></a></li>
    <li><a href="#Introduction"><p style={{marginLeft:'7px'}}><FormattedMessage id="Introduction" defaultMessage='1.INTRODUCTION'/></p></a></li>
    <li><a href="#History"><p style={{marginLeft:'7px'}}><FormattedMessage id='History' defaultMessage="1.1.History Lesson"/></p></a></li>
    <li><a href="#curtok"><p style={{marginLeft:'7px'}}><FormattedMessage id="curtok" defaultMessage="1.2.Crypto/token?"/></p></a></li>
    <li><a href="#prob"><p style={{marginLeft:'7px'}}><FormattedMessage id="probb" defaultMessage="1.3.Problems"/></p></a></li>
    <li><a href="#HVSE"><p style={{marginLeft:'7px'}}>2.HVSE</p></a></li>
    <li><a href="#HVSEphilosophy"><p style={{marginLeft:'7px'}}><FormattedMessage id="HVSEphilosophy" defaultMessage="2.1.HVSE philosophy"/></p></a></li>
    <li><a href="#General"><p style={{marginLeft:'7px'}}><FormattedMessage id="General" defaultMessage="2.1.1.Generalities"/></p></a></li>
    <li><a href="#Applied"><p style={{marginLeft:'7px'}}><FormattedMessage id="Applied" defaultMessage="2.1.2.Applied"/></p></a></li>
    <li><a href="#Business"><p style={{marginLeft:'7px'}}><FormattedMessage id="Business" defaultMessage="2.2.Business model"/></p></a></li>
    <li><a href="#Description"><p style={{marginLeft:'7px'}}><FormattedMessage id="Description" defaultMessage="2.2.1.Description"/></p></a></li>
    <li><a href="#Pros"><p style={{marginLeft:'7px'}}><FormattedMessage id="Pros" defaultMessage="2.2.2.Pros"/></p></a></li>
    <li><a href="#Organization"><p style={{marginLeft:'7px'}}><FormattedMessage id="organization" defaultMessage="2.3.HVSE organization"/></p></a></li>
    <li><a href="#HVSEcoin"><p style={{marginLeft:'7px'}}><FormattedMessage id="HVSEcoin" defaultMessage="3.HVSEcoin (Ͱ)"/></p></a></li>
    <li><a href="#supply"><p style={{marginLeft:'7px'}}><FormattedMessage id="supply" defaultMessage="3.1. Ͱ supply"/></p></a></li>
    <li><a href="#bonding"><p style={{marginLeft:'7px'}}><FormattedMessage id="bonding" defaultMessage="3.1.1. Bonding curve"/></p></a></li>
    <li><a href="#ini"><p style={{marginLeft:'7px'}}><FormattedMessage id="ini" defaultMessage="3.1.2. Initialization"/></p></a></li>
    <li><a href="#blockchain"><p style={{marginLeft:'7px'}}><FormattedMessage id="blockchain" defaultMessage="3.2. Blockchain"/></p></a></li>
    <li><a href="#model"><p style={{marginLeft:'7px'}}><FormattedMessage id="model" defaultMessage="3.2.1. Model"/></p></a></li>
    <li><a href="#innovations"><p style={{marginLeft:'7px'}}><FormattedMessage id="innovations" defaultMessage="3.2.2. Innovations"/></p></a></li>
    <li><a href="#mecha"><p style={{marginLeft:'7px'}}><FormattedMessage id="mecha" defaultMessage="4.IHVPT mechanism"/></p></a></li>
  <li><a href="#staking"><p style={{marginLeft:'7px'}}><FormattedMessage id="staking" defaultMessage="4.1.Personal staking"/></p></a></li>
    <li><a href="#depowith"><p style={{marginLeft:'7px'}}><FormattedMessage id="depowith" defaultMessage="4.2.Deposit/Withdrawal"/></p></a></li>
    <li><a href="#governance"><p style={{marginLeft:'7px'}}><FormattedMessage id="governance" defaultMessage="4.3.Usefulness"/></p></a></li>
    <li><a href="#altruis"><p style={{marginLeft:'7px'}}><FormattedMessage id="altruis" defaultMessage="4.3.1. Altruism"/></p></a></li>
    <li><a href="#richness"><p style={{marginLeft:'7px'}}><FormattedMessage id="richness" defaultMessage="4.3.2. Enrichment"/></p></a></li>
    <li><a href="#sys"><p style={{marginLeft:'7px'}}><FormattedMessage id="sys" defaultMessage="4.3.3. Governance"/></p></a></li>
    <li><a href="#passive"><p style={{marginLeft:'7px'}}><FormattedMessage id="passive" defaultMessage="4.3.4. Passive income"/></p></a></li>
    <li><a href="#retributions"><p style={{marginLeft:'7px'}}><FormattedMessage id="retributions" defaultMessage="4.3.5. Retributions"/></p></a></li>
    <li><a href="#derivatives"><p style={{marginLeft:'7px'}}><FormattedMessage id="derivatives" defaultMessage="4.3.6. Derivatives"/></p></a></li>
  </ul></div>
  <div class="content">
  <div style={{color: 'var(--textNormal)', marginRight:'auto', marginLeft:'auto', fontSize:'42px', width:'300px'}}><FormattedMessage id="white-paper" defaultMessage="WHITEPAPER"/></div>
  <b id="Abstract"><FormattedMessage id="Abstract" defaultMessage="ABSTRACT"/></b>
     <p><FormattedMessage id="Abstract1" defaultMessage="What is the difference between each of us? Our value. This criterion seems to be subjective. Therefore, none objective parameter exist yet to assess human value on an individual scale. This societal issue joins another: the social elevator disappearance. Unlike other crypto currencies, HVSEcoin will not be a goal but a means; the means to assess your added value,  the means to improve yourself. To do this, HVSEcoin is the only way to access a new market: that of human values (Human Value Stock Exchange)."/></p>
      <b id="Introduction"><FormattedMessage id="Introduction" defaultMessage="1. INTRODUCTION"/></b>
      <b id="History"><FormattedMessage id="History" defaultMessage="1.1. History Lesson"/></b>
      <p> <FormattedMessage id="hist1" defaultMessage="There are 3 generations of cryptocurrencies."/><b><FormattedMessage id="hist2" defaultMessage=" The first generation"/></b><FormattedMessage id="hist3" defaultMessage=" is represented by Bitcoin (2009). Strongly established, initiator of the media and public madness for cryptocurrencies, it suffers from regularly pointed out shortcomings, such as its slowness, its relatively small block size, in particular."/></p>
      <p> <b><FormattedMessage id="hist4" defaultMessage="The second generation"/></b><FormattedMessage id="hist5" defaultMessage=" (2011) presents either minor improvements or technological innovations allowing new functions. The archetype  is Ethereum (which is derived from the source code of Bitcoin), which makes use of smart contracts."/></p>
      <p><b><FormattedMessage id="hist6" defaultMessage="The third generation"/></b><FormattedMessage id="hist7" defaultMessage=" (since 2017): Noticing new limitations, notably in capacity, security and governance. New cryptocurrencies have emerged, such as EOS.IO, Cardano (ADA), AION, ICON (ICX) and Raiden Network (RDN), for the best known. EOS.IO is itself derived from Ethereum. They bring innovations, but, in August 2018, none has gained the upper hand over the others."/></p>
      <b id="curtok"><FormattedMessage id="curtok" defaultMessage="1.2. Crypto/token?"/></b>
      <p><FormattedMessage id="curtok1" defaultMessage="Typically, crypto tokens are programmable, permissionless, trustless, and transparent. Programmable simply means that they run on software protocols, which are composed of smart contracts that outline the features and functions of the token and the network’s rules of engagement. Permissionless means that anyone can participate in the system without the need for special credentials. Trustless means that no one central authority controls the system; instead it runs on the rules predefined by the network protocol. And finally, transparency implies that the rules of the protocol and its transactions are viewable and verifiable by all."/></p>
      <p><FormattedMessage id="curtok2" defaultMessage=" While crypto tokens, like cryptocurrency, can hold value and be exchanged, they can also be designed to represent physical assets or more traditional digital assets, or a certain utility or service. For instance, there are crypto tokens that represent tangible assets such as real estate and art, as well as intangible assets such as processing power or data storage space. Tokens are also frequently used as a governance mechanism for voting on specific parameters like protocol upgrades and other decisions that dictate the future direction of various blockchain projects. The process of creating crypto tokens to serve these various functions is known as tokenization."/></p>
      <p><FormattedMessage id="curtok3" defaultMessage="After our market study, we have concluded that a new currency can't offer several new things. Indeed, our personal profits in this enterprise don't matter. So, we have chosen to create a new token and not a new cryptocurrency."/></p>
      <p><FormattedMessage id="curtok4" defaultMessage=" HVSEcoin is a ERC20 token based on the Ether. This choice was conducted due to different reasons:"/></p>
      <p><FormattedMessage id="curtok5" defaultMessage=" 1. a solid network of applications;"/></p>
      <p><FormattedMessage id="curtok6" defaultMessage=" 2. a mutation in progress from the Proof of Work consensus mechanism to the Proof of Stake consensus mechanism (thanks to ETH 2.0);"/></p>
      <p><FormattedMessage id="curtok7" defaultMessage=" 3. ERC20 allows for seamless interaction with other smart contracts and decentralized applications on the Ethereum blockchain. Tokens that have some but not all of the standard functions are considered to be partially ERC20 compliant and can still be easy for external parties to interact with depending upon which functions are missing."/></p>
      <p><FormattedMessage id="curtok8" defaultMessage=" We define 'staking' as the action to bet HVSEcoin on a person."/></p>
      <b id="prob"> <FormattedMessage id="prob" defaultMessage="1.3. Societal and way of life problems "/></b>
      <p><FormattedMessage id="prob1" defaultMessage=" Our society makes a noise: it growls.  However, few people can hear it.There is one million questions to ask, but anyone ask the good ones. Actually, there is only noise. The society in this globality is going to known economic, cultural, social and politic changes as the world has never known."/></p>
      <p><FormattedMessage id="prob2" defaultMessage="The cleverest are the dumbest. Resources needs are going to rise sharply. We need an Odyssian education. Religious extremism is experiencing unprecedented development. In Western countries, inter-generational inequalities are widening like never before. We need an alliance between Apollonian rationality and Dionysian intituition.This is observations and necessities (or sophisms) conglomeration, that we must integrate and therefore act accordingly."/></p>
      <p> <FormattedMessage id="prob3" defaultMessage="The fact that we are in a phase of transition towards a new societal model having been established, it is fashionable to affirm that monetary dematerialization will play a significant role there. A new problematic is added to this: the need to surpass one's condition while having the societal levers (going beyond one's origin social class) blocked."/></p>
      <p> <FormattedMessage id="prob4" defaultMessage="Actually, some start-ups have put the idea on the cryptocurrencies way ("/><a href="https://www.bitclout.com" style={{textDecoration: "none",  color: 'var(--textLink)'}}>BitClout</a>, <a href="https://www.ideamarket.io" style={{textDecoration: "none",  color: 'var(--textLink)'}}>Ideamarket</a><FormattedMessage id="prob5" defaultMessage="...). However, they are only based on the ideas; we consider that our humanity is not only based on ideas (as certain Myers-Briggs Type Indicator results might lead one to believe it) but on physical aspects too. Therefore,we would like to capitalize and to assess human values thanks to different parameters: ideas, finance, sociability, health..."/></p>
      <p><FormattedMessage id="prob6" defaultMessage="Contrary to the previously cited examples, the HVSE project wishes to avoid the main pitfall committed by mankind: the cypherpunks dream destructuration. Indeed, the initial dream of cypherpunks, like Satoshi Nakamoto, was to build technologies in order to escape to centralizing authorities. However, human nature making new entities has invaded the cryptocurrencies world: Coinbase, Binance, OpenSea ... Thus, we have pledged: "/><ul>
      <li><FormattedMessage id="prob7" defaultMessage="to keep our technology open-source,"/></li>
      <li><FormattedMessage id="prob8" defaultMessage="that our profits will only cover operating costs (including the salaries of employees),"/></li>
      <li><FormattedMessage id="prob9" defaultMessage="a total transparency will exist in the treatment of the data collected,"/></li>
      <li><FormattedMessage id="prob10" defaultMessage="that the value of a man is not judged by a central body but by the human society and itself."/></li></ul></p>
      <b id="HVSE"> 2. HVSE </b>
      <b id="HVSEphilosophy"><FormattedMessage id="HVSEphilosophy" defaultMessage="2.1. Philosophy"/> </b>
      <i id="General"><FormattedMessage id="General" defaultMessage="2.1.1. Generalities"/> </i>
      <p><FormattedMessage id="General1" defaultMessage="Pavlov has shown that humans could be conditioned as other animals. This reward circus previously described in a certain way constitutes the psycho-physiological basis of leitmotif concept. When the social elevator has practically disappeared and when the social class freeing hope is weak, the existence of a social lever could only be saving."/></p>
      <p><FormattedMessage id="General2" defaultMessage="What is needed is an objective criterion to assess human value on an individual scale. Thanks to big data technologies, we could produce an index based upon personal trackers: health, finance, social life,..."/></p>
      <p><FormattedMessage id="General3" defaultMessage="A centralizing body setting itself the value of a person would be a denial of the crypto-currencies principles. As Eric Hughes wrote in 1993 in his "/><a href="https://www.activism.net/cypherpunk/manifesto.html" style={{textDecoration: "none", color: 'var(--textLink)'}}><FormattedMessage id="General4" defaultMessage="manifest"/></a> :<blockquote> <i><FormattedMessage id="General5" defaultMessage="'Privacy is necessary for an open society in the electronic age. Privacy is not secrecy. A private matter is something one doesn't want the whole world to know, but a secret matter is something one doesn't want anybody to know. Privacy is the power to selectively reveal oneself to the world.'"/></i></blockquote><FormattedMessage id="General6" defaultMessage="Indeed, the HVSE concept strives to model the societal capital of a person according to the society point of view. In this way, the favoritism absence face to popular sentiment, which once was only an utopia, could thus become a reality. Everyone should thus prove their usefulness to society in various ways to obtain financial leverage (thanks to their tokenization)."/> </p>
      <i id="Applied"><FormattedMessage id="Applied" defaultMessage="2.1.2. Applied"/> </i>
      <p><FormattedMessage id="Applied1" defaultMessage="This way, even if we don't believe in HVSE, and we don't believe in HVSEcoin, and we don't believe in the tokenized person, and we don't believe in IHVPTs, we cannot fail to believe in the impact that society has on us and that we are having on it! Indeed, thanks to HVSE technology, this interaction is verifiable!"/> </p>
      <p> <FormattedMessage id="Applied2" defaultMessage="The main problem with this lies in anonymity. Indeed, it is necessary both to deal with the anonymity necessary for the IHVPTs holders / gamblers but to ensure the real identity of these in order to prohibit the mass actions of bots. This is why we created HVSE in order to overcome this problem while respecting the standards of consent of both the person betting and the person on whom we bet!"/> </p>
      <p><FormattedMessage id="Applied3" defaultMessage="Another major point concerning personal data, their means of collection and their use. Indeed, unlike GAFAs, we do not wish to collect data in order to create personalized advertisements, to resell them or to use them for other harmful purposes! Each data collected concerning a tokenized person (editor's note. With an IHVPT in his name) will be immediately published on the page dedicated to this IHVPT. In this way, all the community will be aware of the existence of this new data. In addition, each of the things specific to the HVSE foundation (HVSEcore, HVSEcoin blockchain, HVSE website, IHVPT blockchain ...) will be available in open-source on our Github repository. In this way, transparency will be queen in the matter."/></p>
      <b id="Business"><FormattedMessage id="Business" defaultMessage="2.2. Business model"/> </b>
      <p><FormattedMessage id="busi1" defaultMessage="We use "/><a href="https://github.com/C-ORG/whitepaper#continuousorganizations" style={{textDecoration: "none",  color: 'var(--textLink)'}}><FormattedMessage id="busi2" defaultMessage="the Continuous Organization model"/></a><FormattedMessage id="busi3" defaultMessage=" as the main approach."/></p>
      <i id="Description"><FormattedMessage id="Description" defaultMessage="2.2.1. Description"/></i>
      <p><FormattedMessage id="des1" defaultMessage="The "/><i><FormattedMessage id="des2" defaultMessage="Decentralized Autonomous Trust"/></i><FormattedMessage id="des3" defaultMessage=" (DAT) is a specific immutable smart-contract that implements a bonding curve contract with sponsored burning to automatically mint, burn and distribute fully digital security tokens called "/><i><FormattedMessage id="des4" defaultMessage="FAIR securities"/></i><FormattedMessage id="des5" defaultMessage=" (FAIRs). These FAIRs represent a claim on the future cash-flows handled by the DAT."/></p>
      <p><FormattedMessage id="des6" defaultMessage="It is important to note that the DAT is not the organization; like an irrevocable Trust, it is a contract external to the organization."/></p>
      <SplitSection
      id="Continuous organization Description"
      primarySlot={<ul><li style={{paddingTop:'1px', paddingBottom:'1px'}}><b><FormattedMessage id="des7" defaultMessage="Buying FAIRs"/></b><FormattedMessage id="des8" defaultMessage=". New FAIRs are minted by the DAT, which increases the price of FAIRs. Part of the money invested goes to the organization and part of it is held back by the DAT in its buy-back reserve."/></li>
      <li style={{paddingTop:'1px', paddingBottom:'1px'}}><b><FormattedMessage id="des9" defaultMessage="Selling FAIRs"/></b><FormattedMessage id="des10" defaultMessage=". The FAIRs sold are burnt by the DAT, which decreases the price of FAIRs, and the DAT refunds the investor with ETH using its buy-back reserve."/></li>
      <li style={{paddingTop:'1px', paddingBottom:'1px'}}><b><FormattedMessage id="des11" defaultMessage="DAT receiving payement"/></b><FormattedMessage id="des12" defaultMessage=". A payment fraction is used by the DAT to mint new FAIRs (increase both the price of FAIRs and the buy-back reserve). Those newly minted FAIRs are distributed to the current FAIRs holders. The payment rest is transferred to the organization."/></li>
      <li style={{paddingTop:'1px', paddingBottom:'1px'}}><b><FormattedMessage id="des13" defaultMessage="DAT receiving dividend payement"/></b><FormattedMessage id="des14" defaultMessage=".The amount sent is used to mint new FAIRs (increasing both the price of FAIRs and the buy-back reserve). Those newly minted FAIRs are distributed to the current FAIRs holders."/></li></ul>}
      secondarySlot={
      <StaticImage
        style={{maxWidth:"500px"}}
        alt="Introduction of the Continous Organization system"
        src="../images/whitepaper iconography/Introducing-Continuous0.png"
      />}/>
      <i id="Pros"><FormattedMessage id="Pros" defaultMessage="2.2.2. Pros"/></i>
      <p>1. <b><FormattedMessage id="pro1" defaultMessage="Continuous Fundraising"/></b><FormattedMessage id="pro2" defaultMessage=". Continuous open primary market where tokens get minted whenever demand exceeds supply. So, it provides ongoing funding and makes the organization less fragile."/></p>
      <p>2. <b><FormattedMessage id="pro3" defaultMessage="Fully liquid"/></b><FormattedMessage id="pro4" defaultMessage=". An investor will always be able to buy/sell its FAIRs (not necessarily at the price he wants), even in the public market listing absence."/></p>
      <p>3. <b><FormattedMessage id="pro5" defaultMessage="Attractive to long-term investors"/></b><FormattedMessage id="pro6" defaultMessage=". It limits short-selling speculators and attracts long-terms investors, by definition."/></p>
      <p>4. <b><FormattedMessage id="pro7" defaultMessage="Securities"/></b><FormattedMessage id="pro8" defaultMessage=".  Claim on the future cash-flows handled by the DAT and should be valued as such."/></p>
      <p>5. <b><FormattedMessage id="pro9" defaultMessage="Permission-less, friction-less and supra-national"/></b><FormattedMessage id="pro10" defaultMessage=". Accessibility for everyone fom anywhere without permission."/></p>
      <p>6. <b><FormattedMessage id="pro11" defaultMessage="Governance agnostic"/></b><FormattedMessage id="pro12" defaultMessage=". No governance rights. Immutable system and no governance favoritism. 'So, Bring Your Own Governance.'"/></p>
      <b id="Organization"> <FormattedMessage id="Organization" defaultMessage="2.3. HVSE organization"/></b>
      <SplitSection
      id="HVSE organization"
      primarySlot=
      {<StaticImage
        style={{maxWidth:"500px"}}
        alt="Introduction of the HVSEcoin use"
        src="../images/whitepaper iconography/General scheme.PNG"
      />}
      secondarySlot=
      {<div><p><FormattedMessage id="org1" defaultMessage="We define the HSVEcoin as a gate between crypto-traders and tokenization candidate. Each crypto-traders can buy some HVSEcoin (with fiat) or trade it against other crypto-currencies. Only HVSEcoin could be used to buy or to sell tokenized user action."/></p>
      <p><FormattedMessage id="org2" defaultMessage="We define a tokenized user as a person who has achieved the tokenization process allowing to be quoted on the Human Value Stock Market."/></p>
      <p><FormattedMessage id="org3" defaultMessage="The problem of course is the ethic and philosophical ones: the unavailability principle of the body (and the soul). However, this argument seems fallacious and assimilates more to fear in view of different existing practices (surrogacy, euthanasia ...)."/></p></div>}/>
      <b id="HVSEcoin"><FormattedMessage id="HVSEcoin" defaultMessage="3. HVSEcoin (Ͱ)"/> </b>
      <b id="supply"><FormattedMessage id="supply" defaultMessage=" 3.1. Ͱ token supply"/></b>
      <SplitSection
      id="Bonding Curve"
      primarySlot={<div>
      <i id="bonding"><FormattedMessage id="bonding" defaultMessage="3.1.1. Bonding curve"/></i>
      <p><FormattedMessage id="bonding1" defaultMessage="As other financial products, Ͱ will obey to the demand/supply law. Therefore, its prices will change according to this. Differences between sell and buy price allow to create a second market: futures, derived options...Bid asks prices bounded. This makes possible to maintain a market security."/></p>
      </div>}
      secondarySlot={<StaticImage         style={{maxWidth:"500px"}}
        alt="Bonding curve explanation"
        src="../images/whitepaper iconography/bonding_curve.png"
      />}/>
      <SplitSection
      id="Bonding curve initialization"
      primarySlot={<StaticImage         style={{maxWidth:"500px"}}
        alt="Bonding curve initialization"
        src="../images/whitepaper iconography/initialization.png"
      />}
      secondarySlot={<div>
      <i id="ini"><FormattedMessage id="bonding2" defaultMessage="3.1.2. Bonding curve initialization"/></i>
      <p> <FormattedMessage id="bonding3" defaultMessage="A Minimum Funding Goal was defined to offer the initialization possibility. Till it was not reached, we are on the refundable side; and then, after the Minimum Funding Goal, the curve is launched. Maybe, we will study the possibility to go backwards in the future (but it is not current)."/></p></div>}/>
      <b id="blockchain"> <FormattedMessage id="blockchain" defaultMessage="3.2. Blokchain"/></b>
      <i id="model"><FormattedMessage id="model" defaultMessage="3.2.1. Model"/></i>
      <p> <FormattedMessage id="model1" defaultMessage="Our blokchain model for the HVSEcoin smart contract is based upon "/><a href="https://github.com/C-ORG/whitepaper#continuousorganizations" style={{textDecoration: "none",  color: 'var(--textLink)'}}><FormattedMessage id="busi2" defaultMessage="the Continuous Organization model"/></a><FormattedMessage id="model2" defaultMessage=" developed by "/><a href="https://www.fairmint.co/" style={{textDecoration: "none", color: 'var(--textLink)'}}>Fairmint</a><FormattedMessage id="model3" defaultMessage=". We have used a large part of the code while changing some contract names, and we have brought somme innovations listed below."/></p>
      <i id="innovations"> <FormattedMessage id="innovations" defaultMessage="3.2.2. Innovations"/></i>
      <p><FormattedMessage id="innov1" defaultMessage="The main technical innovation is the multi-bridge between ETHEREUM, DOGECOIN, BITCOIN and POLYGON blockchains."/></p>
      <b id="mecha"><FormattedMessage id="mecha" defaultMessage=" 4. IHVPT mechanism"/></b>
      <SplitSection
      id="IHVPT mechanism introduction"
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <p> <FormattedMessage id="mecha1" defaultMessage="Incoming Ͱ is split between: buying back reserve to guarantee liquidity of Ͱ and individual reserve available to the user for deposit or withdrawal."/></p>
        </div>
      }
      secondarySlot={<StaticImage         style={{maxWidth:"500px"}}
        alt="Bonding curve initailization"
        src="../images/whitepaper iconography/IHVT_mechanism.png"
      />}
    />
    <SplitSection
        id="HVPT mechanism introduction"
        primarySlot={<StaticImage         style={{maxWidth:"500px"}}
        alt="Bonding curve initialization"
        src="../images/whitepaper iconography/Buying HVPT.PNG"
      />}
        secondarySlot={
        <div className="lg:pr-32 xl:pr-48">
        <b id="staking"><FormattedMessage id="staking" defaultMessage="4.1. Personal staking"/></b>
        <p><FormattedMessage id="stak1" defaultMessage="Users use their Ͱ to buy IHVPT ( Individual Human Value Personnal Token)."/></p>
        <tr><td nowrap align="center">P<sub>s</sub> (n)=k<sub>s</sub> &#183; n</td></tr>
        <FormattedMessage id="stak2" defaultMessage="where k_s constant is the same accross all IHVPT and never changes during token life."/>
        </div>
        }
      />
      <SplitSection
        id="HVPT individual reserve status"
        primarySlot={
        <div>
          <p><FormattedMessage id="stak3" defaultMessage="Buy price is determined by number of issued token and individual reserve status:"/></p>
          <p><FormattedMessage id="stak4" defaultMessage="If individual reserve is untouched:"/></p>
          <tr><td nowrap align="center">P<sub>b</sub> (n)=P<sub>s</sub> (n)=k<sub>s</sub> &#183; n</td></tr>
          <p><FormattedMessage id="stak5" defaultMessage="If individual reserve is empty:"/></p>
          <tr><td nowrap align="center">P<sub>b</sub> (n)=k<sub>r</sub> &#183; P<sub>s</sub> (n)=k<sub>r</sub> &#183; k<sub>s</sub> &#183; n</td></tr>
          </div>
        }
        secondarySlot={<StaticImage         style={{maxWidth:"500px"}}
        alt="IHVT individual reserve status"
        src="../images/whitepaper iconography/HVPT individual reserve status.png"
      />
        }
      />
      <SplitSection
      id="Buyback reserves"
      primarySlot={<StaticImage         style={{maxWidth:"500px"}}
        alt="Buyback reserves"
        src="../images/whitepaper iconography/buyback reserves.png"
      />}
      secondarySlot={<div>
      <b><FormattedMessage id="stak6" defaultMessage="BETWEEN:"/></b>
      <p><FormattedMessage id="stak7" defaultMessage="1. Buyback reserve"/></p>
      <table border="0" align="center">
      <tr><td nowrap align="center">bb=</td><td align="left" class="cl"><font face="symbol">ó<br/>õ</font></td><td nowrap align="center"><sub>0</sub><sup>n</sup> k<sub>r</sub>&#183; P<sub>s</sub>(z)dz</td></tr>
      <tr><td nowrap align="center">bb=</td><td align="left" class="cl"><font face="symbol">ó<br/>õ</font></td><td nowrap align="center"><sub>0</sub><sup>n</sup> k<sub>r</sub>&#183; k<sub>s</sub>&#183; z &#183; dz</td></tr>
      <tr><td nowrap align="center">bb=(k<sub>r</sub>&#183; k<sub>s</sub>)/2  &#183; n<sup>2</sup></td></tr></table>
</div>}
      />
<div>
      <p ><FormattedMessage id="stak8" defaultMessage="2. Individual reserve max and % calculus where"/> 0 <font face="symbol">£</font>  k<sub>i</sub>  <font face="symbol">£</font>  1<font face="symbol">-</font>k<sub>r</sub></p>
      <StaticImage         style={{maxWidth:"500px", marginRight:'auto', marginLeft:'auto', display:'flex', textAlign: 'center'}}
        alt="IHVPT individual reserve max"
        src="../images/whitepaper iconography/HVPT individual reserve max.png"
      />
      <table border="0" align="center">
      <tr><td nowrap align="center">ir =</td><td align="left" class="cl"><font face="symbol">ó<br/>õ</font></td><td nowrap align="center"><sub>0</sub><sup>n</sup> k<sub>i</sub> &#183; P<sub>s</sub>(z)&#183; dz =</td><td align="left" class="cl"><font face="symbol">ó<br/>õ</font></td><td nowrap align="center"><sub>0</sub><sup>n</sup> k<sub>i</sub>&#183; k<sub>s</sub> &#183; z &#183; dz = (k<sub>i</sub> &#183; k<sub>s</sub>)/2 &#183; n<sup>2</sup></td></tr>
      <tr><td nowrap align="center">ir(min)=0</td></tr>
      <tr><td nowrap align="center">ir(max)=((1<font face="symbol">-</font>k<sub>r</sub> &#183; k<sub>s</sub>)/2 &#183; n<sup>2</sup></td></tr>
      <tr><td nowrap align="center">k<sub>i</sub>=(2&#183; ir)/(k<sub>s</sub>&#183; n<sup>2</sup>)</td></tr>
      <tr><td nowrap align="center"><font face="symbol">"</font> p<sub>i</sub>  <font face="symbol">Î</font>  [0;1], p<sub>i</sub>=(k<sub>i</sub>)/(1<font face="symbol">-</font>k<sub>r</sub>)= (2 &#183; ir)/[(1<font face="symbol">-</font>k<sub>r</sub>)(k<sub>s</sub> &#183; n<sup>2</sup>)]</td></tr>
</table></div>
        <div>
        <b id="depowith"><FormattedMessage id="depowith" defaultMessage="4.2. Deposit/Withdrawal"/></b>
        <StaticImage         style={{maxWidth:"500px", marginRight:'auto', marginLeft:'auto', display:'flex', textAlign: 'center'}}
        alt="IHVPT individual reserve max"
        src="../images/whitepaper iconography/depositwithdrawal.png"
      />
      <table  border="0" align="center">
        <tr><td nowrap align="center">w(max)=ir</td></tr>
        <tr><td nowrap align="center">d(max)=ir(max)<font face="symbol">-</font>ir=[(1<font face="symbol">-</font>k<sub>r</sub>)&#183; k<sub>s</sub>]/2 &#183; n<sup>2</sup><font face="symbol">-</font>ir</td></tr>
        <tr><td nowrap align="center">ir<sub>d</sub>=ir+d</td></tr>
        <tr><td nowrap align="center">ir<sub>w</sub>=ir<font face="symbol">-</font>w</td></tr>
        <tr><td nowrap align="center">k(id)=[2 &#183;(ir+d)]/(k<sub>s</sub> &#183; n<sup>2</sup>)=k<sub>i</sub>+(2 &#183; d)/(k<sub>s</sub> &#183; n<sup>2</sup>)</td></tr>
        <tr><td nowrap align="center">k(iw)=[2 &#183;(ir<font face="symbol">-</font>w)][k<sub>s</sub> &#183; n<sup>2</sup>]=k<sub>i</sub><font face="symbol">-</font>[2 &#183; w][k<sub>s</sub> &#183; n<sup>2</sup>]</td></tr>
        <tr><td nowrap align="center">p(iw)=[(k<sub>i</sub><font face="symbol">-</font>2 &#183; w)/(k<sub>s</sub> &#183; n<sup>2</sup>)]/(1<font face="symbol">-</font>k<sub>r</sub>)=p<sub>i</sub> <font face="symbol">-</font>[2 &#183; w]/[k<sub>s</sub> &#183; n<sup>2</sup> &#183; (1<font face="symbol">-</font>k<sub>r</sub>)]</td></tr></table>
        </div>
        <b id="governance"><FormattedMessage id="governance" defaultMessage="4.3. Usefulness"/></b>
<p><FormattedMessage id="gov1" defaultMessage="Regarding the usefulness of holding this or that IHVPT, it lies in few points:altruism, enrichement, governance, passive income."/> </p>
<i id='altruis'><FormattedMessage id="altruis" defaultMessage="4.3.1. Altruism"/></i>
<p><FormattedMessage id="altruis1" defaultMessage="After tokenization, the tokenized one will hold 51% of the IHVPTs initially issued. In this way, he will be his majority shareholder in order to avoid any ethical abuse. Then, he may, at his discretion, sell/buy them in order to increase value/capital rising. In this way, the possibility of "/> <b><FormattedMessage id="altruism" defaultMessage="Altruism"/></b><FormattedMessage id="altruis2" defaultMessage=" is community-offered by allowing the tokenized person to indirectly raise funds (if she sell their IHVPTs) and promote her success by highlighting her in the community eyes."/></p>
<i id='richness'><FormattedMessage id="richness" defaultMessage="4.3.2. Enrichment"/></i>
<p> <FormattedMessage id="rich1" defaultMessage="For the IHVPTs or HVSEcoin hodler, "/><b><FormattedMessage id="rich2" defaultMessage="getting richer"/></b><FormattedMessage id="rich3" defaultMessage=" by betting on the good IHVPT: indeed, you can sell the IHVPTs that you hold at any time and thus speculate on their values."/></p>
<i id='sys'><FormattedMessage id="sys" defaultMessage="4.3.3. Governance system"/></i>
<p><FormattedMessage id="sys1" defaultMessage="For every IHVPT, a "/><b><FormattedMessage id="sys2" defaultMessage="governance token"/></b><FormattedMessage id="sys3" defaultMessage=" veIHVPT will be emit. In other words, if you buy 1 IHVPT, you'll receive 1 veIHVPT relating to the same tokenized person. You'll receive veIHVPT comes with full voting rights within the IHVPT in addition to becoming eligible for potential airdrops too."/></p>
<p><FormattedMessage id="sys4" defaultMessage="The voting and governance system is similar to that offered by "/><a href="https://snapshot.org/" style={{textDecoration: "none",  color: 'var(--textLink)'}}>Snapshot</a><FormattedMessage id="sys5" defaultMessage=". Therefore, the impact of the vote is proportional to the number of veIHVPTs held. In addition, each holder of veIHVPT can submit something to vote in order to provide advice to the tokenized person in order to improve certain things and thus be able to impact its IHVPT corresponding price."/></p>
<i id='passive'><FormattedMessage id="passive" defaultMessage="4.3.4. Passive income"/></i>
<p><FormattedMessage id="pass1" defaultMessage="In order to access to the correspondent veIHVPT, "/><b><FormattedMessage id="pass2" defaultMessage="you need to stake"/></b><FormattedMessage id="pass3" defaultMessage=" your IHVPT. veIHVPT is automatically compounded for your benefit. Upon unstaking, you will receive your original IHVPTs plus any additional IHVPTs from the official staking pool or other revenue sources."/></p>
<p><FormattedMessage id="pass4" defaultMessage="Staking pool are constituted thanks to the IHVPTs secondary market as describe above."/></p>
<i id='retributions'><FormattedMessage id="retributions" defaultMessage="4.3.5. Retributions"/></i>
<p><FormattedMessage id="retri1" defaultMessage="Tokenized people can if they wish "/><b><FormattedMessage id="retri2" defaultMessage="provide NFTs or other benefits to their IHVPTs holders"/></b><FormattedMessage id="retri3" defaultMessage=". No obligation in this regard exists but it remains possible."/></p>
<i id='derivatives'><FormattedMessage id="derivatives" defaultMessage="4.3.6. Derivatives"/></i>
<p><FormattedMessage id="deriva1" defaultMessage="This utility allows "/><b><FormattedMessage id="deriva2" defaultMessage="to bet on IHVPTs derived products"/></b><FormattedMessage id="deriva3" defaultMessage=" which can, for example, be bearish or bullish levers (as "/><a href="https://en.wikipedia.org/wiki/Contract_for_difference" style={{textDecoration: "none",  color: 'var(--textLink)'}}>CFDs</a><FormattedMessage id="deriva4" defaultMessage=") making it possible to bet on the rise/fall in the price of the corresponding IHVPT."/></p>
    </div>
    </div>
    </Layout>
    </SimpleLocalize>
  )
}

// Step 3: Export your component
export default WhitepaperPage
