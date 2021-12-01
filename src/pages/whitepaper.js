// Step 1: Import React
import React from 'react';
import { Helmet } from "react-helmet";
import 'gatsby-remark-mathjax';
import 'gatsby-transformer-remark';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';
import SplitSection from '../components/SplitSection';
import '../components/css/objects/scroller.css';

// Step 2: Define your component

const WhitepaperPage = () => {
  return (
    <Layout pageTitle="Whitepaper">
    <Helmet>
      <script src="//polyfill.io/v3/polyfill.min.js?features=es6"></script>
      <script id="MathJax-script" async src="//cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js">
  </script>
    </Helmet>
    <div class="container">
      <div class="bar"><ul class="sidebar">
  <li>
      <a href="#Abstract" title="Abstract"><p style={{marginLeft:'7px'}}>ABSTRACT</p></a>
    </li>
    <li>
      <a href="#Introduction"><p style={{marginLeft:'7px'}}>1.INTRODUCTION</p></a>
    </li>
    <li><a href="#History"><p style={{marginLeft:'7px'}}>1.1.History Lesson</p></a>
    </li>
    <li><a href="#curtok"><p style={{marginLeft:'7px'}}>1.2.Currency or token</p></a>
    </li>
    <li><a href="#prob"><p style={{marginLeft:'7px'}}>1.3.Problems</p></a>
    </li>
    <li>
      <a href="#HVSE"><p style={{marginLeft:'7px'}}>2.HVSE</p></a>
    </li>
    <li>
      <a href="#HVSEphilosophy"><p style={{marginLeft:'7px'}}>2.1.HVSE philosophy</p></a>
    </li>
    <li>
      <a href="#General"><p style={{marginLeft:'7px'}}>2.1.1.Generalities</p></a>
    </li>
    <li>
      <a href="#Applied"><p style={{marginLeft:'7px'}}>2.1.2.Applied</p></a>
    </li>
    <li>
      <a href="#Business"><p style={{marginLeft:'7px'}}>2.2.Business model</p></a>
    </li>
    <li>
      <a href="#Description"><p style={{marginLeft:'7px'}}>2.2.1.Description</p></a>
    </li>
    <li>
      <a href="#Pros"><p style={{marginLeft:'7px'}}>2.2.2.Pros</p></a>
    </li>
    <li><a href="#Organization"><p style={{marginLeft:'7px'}}>2.3.HVSE organization</p></a>
    </li>
    <li><a href="#HVSEcoin"><p style={{marginLeft:'7px'}}>3.HVSEcoin (Ͱ)</p></a>
    </li>
    <li><a href="#supply"><p style={{marginLeft:'7px'}}>3.1. Ͱ supply</p></a>
    </li>
    <li><a href="#bonding"><p style={{marginLeft:'7px'}}>3.1.1. Bonding curve</p></a>
    </li>
    <li><a href="#initialization"><p style={{marginLeft:'7px'}}>3.1.2. Initialization</p></a>
    </li>
    <li><a href="#blokchain"><p style={{marginLeft:'7px'}}>3.2. Blockchain</p></a>
    </li>
    <li><a href="#model"><p style={{marginLeft:'7px'}}>3.2.1. Model</p></a>
    </li>
    <li><a href="#innovations"><p style={{marginLeft:'7px'}}>3.2.2. Innovations</p></a>
    </li>
    <li>
      <a href="#mecha"><p style={{marginLeft:'7px'}}>4.IHVPT mechanism</p></a>
    </li>
  <li>
      <a href="#staking"><p style={{marginLeft:'7px'}}>4.1.Personal staking</p></a>
    </li>
    <li>
      <a href="#depowith"><p style={{marginLeft:'7px'}}>4.2.Deposit/Withdrawal</p></a>
    </li>
  </ul></div>
  <div class="content">
  <p style={{color: 'black', marginRight:'auto', marginLeft:'auto', fontSize:'42px', width:'300px'}}>WHITEPAPER</p>
  <b id="Abstract">ABSTRACT</b>
      <p>What is the difference between each of us? Our value. This criterion seems to be subjective. Therefore, none objective parameter exist yet to assess human value on an individual scale. This societal issue joins another: the social elevator disappearance. Unlike other crypto currencies, HVSEcoin will not be a goal but a means; the means to assess your added value,  the means to improve yourself. To do this, HVSEcoin is the only way to access a new market: that of human values (Human Value Stock Exchange).</p>
      <b id="Introduction"> 1. INTRODUCTION </b>
      <p></p>
      <b id="History"> 1.1. History Lesson </b>
      <p> There is 3 generations of cryptocurrencies.<b>The first generation</b> is represented by Bitcoin (2009). Strongly established, initiator of the media and public madness for cryptocurrencies, it suffers from regularly pointed out shortcomings, such as its slowness, its relatively small block size, in particular.</p>
      <p>A <b>second generation</b> (2011) presents either minor improvements or technological innovations allowing new functions. The archetype  is Ethereum (which is derived from the source code of Bitcoin), which makes use of smart contracts.</p>
      <p>The <b>third generation</b> (since 2017): Noticing new limitations, notably in capacity, security and governance. New cryptocurrencies have emerged, such as EOS.IO, Cardano (ADA), AION, ICON (ICX) and Raiden Network (RDN), for the best known. EOS.IO is itself derived from Ethereum. They bring innovations, but, in August 2018, none has gained the upper hand over the others.</p>
      <b id="curtok">1.2. A new currency or a new token?</b>
      <p>Typically, crypto tokens are programmable, permissionless, trustless, and transparent. Programmable simply means that they run on software protocols, which are composed of smart contracts that outline the features and functions of the token and the network’s rules of engagement. Permissionless means that anyone can participate in the system without the need for special credentials. Trustless means that no one central authority controls the system; instead it runs on the rules predefined by the network protocol. And finally, transparency implies that the rules of the protocol and its transactions are viewable and verifiable by all.</p>
      <p> While crypto tokens, like cryptocurrency, can hold value and be exchanged, they can also be designed to represent physical assets or more traditional digital assets, or a certain utility or service. For instance, there are crypto tokens that represent tangible assets such as real estate and art, as well as intangible assets such as processing power or data storage space. Tokens are also frequently used as a governance mechanism for voting on specific parameters like protocol upgrades and other decisions that dictate the future direction of various blockchain projects. The process of creating crypto tokens to serve these various functions is known as tokenization.</p>
      <p> After our market study, we have concluded that a new currency can't offer several new things. Indeed, our personal profits in this enterprise don't matter. So, we have chosen to create a new token and not a new cryptocurrency.</p>
      <p> HVSEcoin is a ERC20 token based on the Ether. This choice was conducted due to different reasons:</p>
      <p> 1. a solid network of applications;</p>
      <p> 2. a mutation in progress from the Proof of Work consensus mechanism to the Proof of Stake consensus mechanism (thanks to ETH 2.0);</p>
      <p> 3. ERC20 allows for seamless interaction)ith other smart contracts and decentralized applications on the Ethereum blockchain. Tokens that have some but not all of the standard functions are considered to be partially ERC20 compliant and can still be easy for external parties to interact with depending upon which functions are missing.</p>
      <p> We define "staking" as the action to bet HVSEcoin on a person.</p>
      <b id="prob"> 1.3. Societal and way of life problems </b>
      <p> Our society makes a noise: it growls.  However, few people can hear it.There is one million questions to ask, but anyone ask the good ones. Actually, there is only noise. The society in this globality is going to known economic, cultural, social and politic changes as the world has never known.</p>
      <p> The cleverest are the dumbest. Resources needs are going to rise sharply. We need an Odyssian education. Religious extremism is experiencing unprecedented development. In Western countries, inter-generational inequalities are widening like never before. We need an alliance between Apollonian rationality and Dionysian intituition.This is observations and necessities (or sophisms) conglomeration, that we must integrate and therefore act accordingly.</p>
      <p> The fact that we are in a phase of transition towards a new societal model having been established, it is fashionable to affirm that monetary dematerialization will play a significant role there. A new problematic is added to this: the need to surpass one's condition while having the societal levers (going beyond one's origin social class) blocked.</p>
      <p> Actually, some start-ups have put the idea on the cryptocurrencies way (<a href="https://www.bitclout.com" style={{textDecoration: "none",  color: "black"}}>BitClout</a>, <a href="https://www.ideamarket.io" style={{textDecoration: "none",  color: "black"}}>Ideamarket</a>...). However, they are only based on the ideas; we consider that our humanity is not only based on ideas (as certain Myers-Briggs Type Indicator results might lead one to believe it) but on physical aspects too. Therefore,we would like to capitalize and to assess human values thanks to different parameters: ideas, finance, sociability, health...</p>
      <p>Contrary to the previously cited examples, the HVSE project wishes to avoid the main pitfall committed by mankind: the cypherpunks dream destructuration. Indeed, the initial dream of cypherpunks, like Satoshi Nakamoto, was to build technologies in order to escape to centralizing authorities. However, human nature making new entities has invaded the cryptocurrencies world: Coinbase, Binance, OpenSea ... Thus, we have pledged: <ul>
      <li>to keep our technology open-source,</li>
      <li>that our profits will only cover operating costs (including the salaries of employees),</li>
      <li>a total transparency will exist in the treatment of the data collected,</li>
      <li>that the value of a man is not judged by a central body but by the human society and itself.</li></ul></p>
      <b id="HVSE"> 2. HVSE </b>
      <p></p>
      <b id="HVSEphilosophy"> 2.1. Philosophy </b>
      <i id="General"> 2.1.1. Generalities </i>
      <p>Pavlov has shown that humans could be conditioned as other animals. This reward circus previously described in a certain way constitutes the psycho-physiological basis of leitmotif concept. When the social elevator has practically disappeared and when the social class freeing hope is weak, the existence of a social lever could only be saving.</p>
      <p>What is needed is an objective criterion to assess human value on an individual scale. Thanks to big data technologies, we could produce an index based upon personal trackers: health, finance, social life, …</p>
      <p>A centralizing body setting itself the value of a person would be a denial of the crypto-currencies principles. As Eric Hughes wrote in 1993 in his <a href="https://www.activism.net/cypherpunk/manifesto.html" style={{textDecoration: "none",  color: "black"}}>manifest</a> :<blockquote> <i>"Privacy is necessary for an open society in the electronic age. Privacy is not secrecy. A private matter is something one doesn't want the whole world to know, but a secret matter is something one doesn't want anybody to know. Privacy is the power to selectively reveal oneself to the world."</i></blockquote> Indeed, the HVSE concept strives to model the societal capital of a person according to the society point of view. In this way, the favoritism absence face to popular sentiment, which once was only an utopia, could thus become a reality. Everyone should thus prove their usefulness to society in various ways to obtain financial leverage (thanks to their tokenization). </p>
      <i id="Applied"> 2.1.2. Applied to our subject </i>
      <p> This way, even if we don't believe in HVSE, and we don't believe in HVSEcoin, and we don't believe in the tokenized person, and we don't believe in IHVPTs, we cannot fail to believe in the impact that society has on us and that we are having on it! Indeed, thanks to HVSE technology, this interaction is verifiable! </p>
      <p> The main problem with this lies in anonymity. Indeed, it is necessary both to deal with the anonymity necessary for the IHVPTs holders / gamblers but to ensure the real identity of these in order to prohibit the mass actions of bots. This is why we created HVSE in order to overcome this problem while respecting the standards of consent of both the person betting and the person on whom we bet! </p>
      <p>Another major point concerning personal data, their means of collection and their use. Indeed, unlike GAFAs, we do not wish to collect data in order to create personalized advertisements, to resell them or to use them for other harmful purposes! Each data collected concerning a tokenized person (editor's note. With an IHVPT in his name) will be immediately published on the page dedicated to this IHVPT. In this way, all the community will be aware of the existence of this new data. In addition, each of the things specific to the HVSE foundation (HVSEcore, HVSEcoin blockchain, HVSE website, IHVPT blockchain ...) will be available in open-source on our Github repository. In this way, transparency will be queen in the matter.</p>
      <b id="Business"> 2.2. Business model </b>
      <p>We use <a href="https://github.com/C-ORG/whitepaper#continuousorganizations" style={{textDecoration: "none",  color: "black"}}>the Continuous Organization model</a> as the main approach.</p>
      <i id="Description"> 2.2.1. Description</i>
      <p>The <i>Decentralized Autonomous Trust</i> (DAT) is a specific immutable smart-contract that implements a bonding curve contract with sponsored burning to automatically mint, burn and distribute fully digital security tokens called <i>FAIR securities</i> (FAIRs). These FAIRs represent a claim on the future cash-flows handled by the DAT.</p>
      <p>It is important to note that the DAT is not the organization; like an irrevocable Trust, it is a contract external to the organization.</p>
      <SplitSection
      id="Continuous organization Description"
      primarySlot={<ul><li><b>Buying FAIRs</b>. New FAIRs are minted by the DAT, which increases the price of FAIRs. Part of the money invested goes to the organization and part of it is held back by the DAT in its buy-back reserve.</li>
      <li><b>Selling FAIRs</b>. The FAIRs sold are burnt by the DAT, which decreases the price of FAIRs, and the DAT refunds the investor with ETH using its buy-back reserve.</li>
      <li>DAT receiving <b>payement</b>. A payment fraction is used by the DAT to mint new FAIRs (increase both the price of FAIRs and the buy-back reserve). Those newly minted FAIRs are distributed to the current FAIRs holders. The payment rest is transferred to the organization.</li>
      <li>DAT receiving <b>dividend payement</b>.The amount sent is used to mint new FAIRs (increasing both the price of FAIRs and the buy-back reserve). Those newly minted FAIRs are distributed to the current FAIRs holders.</li></ul>}
      secondarySlot={
      <StaticImage
        style={{maxWidth:"500px"}}
        alt="Introduction of the Continous Organization system"
        src="../images/whitepaper iconography/Introducing-Continuous0.png"
      />}/>
      <i id="Pros"> 2.2.2. Pros</i>
      <p>1. <b>Continuous Fundraising</b>. Continuous open primary market where tokens get minted whenever demand exceeds supply. So, it provides ongoing funding and makes the organization less fragile.</p>
      <p>2. <b>Fully liquid</b>. An investor will always be able to buy/sell its FAIRs (not necessarily at the price he wants), even in the public market listing absence.</p>
      <p>3. <b>Attractive to long-term investors</b>. It limits short-selling speculators and attracts long-terms investors, by definition.</p>
      <p>4. <b>Securities</b>.  Claim on the future cash-flows handled by the DAT and should be valued as such.</p>
      <p>5. <b>Permission-less, friction-less and supra-national</b>. Accessibility for everyone fom anywhere without permission.</p>
      <p>6. <b>Governance agnostic</b>. No governance rights. Immutable system and no governance favoritism. So, "Bring Your Own Governance."</p>
      <b id="Organization"> 2.3. HVSE organization</b>
      <SplitSection
      id="HVSE organization"
      primarySlot=
      {<StaticImage
        style={{maxWidth:"500px"}}
        alt="Introduction of the HVSEcoin use"
        src="../images/whitepaper iconography/General scheme.PNG"
      />}
      secondarySlot=
      {<div><p>We define the HSVEcoin as a gate between crypto-traders and tokenization candidate. Each crypto-traders can buy some HVSEcoin (with fiat) or trade it against other crypto-currencies. Only HVSEcoin could be used to buy or to sell tokenized user action.</p>
      <p> We define a tokenized user as a person who has achieved the tokenization process allowing to be quoted on the Human Value Stock Market.</p>
      <p> The problem of course is the ethic and philosophical ones: the unavailability principle of the body (and the soul). However, this argument seems fallacious and assimilates more to fear in view of different existing practices (surrogacy, euthanasia ...).</p></div>}/>
      <b id="HVSEcoin"> 3. HVSEcoin (Ͱ) </b>
      <p></p>
      <b id="supply"> 3.1. Ͱ token supply</b>
      <SplitSection
      id="Bonding Curve"
      primarySlot={<div>
      <i id="bonding"> 3.1.1. Bonding curve</i>
      <p> As other financial products, Ͱ will obey to the demand/supply law. Therefore, its prices will change according to this. Differences between sell and buy price allow to create a second market: futures, derived options...Bid asks prices bounded. This makes possible to maintain a market security.</p>
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
      <i id="ini"> 3.1.2. Bonding curve initialization</i>
      <p> A Minimum Funding Goal was defined to offer the initialization possibility. Till it was not reached, we are on the refundable side; and then, after the Minimum Funding Goal, the curve is launched. Maybe, we will study the possibility to go backwards in the future (but it is not current).</p></div>}/>
      <b id="blockchain"> 3.2. Blokchain</b>
      <i id="model"> 3.2.1. Model</i>
      <p> Our blokchain model for the HVSEcoin smart contract is based upon <a href="https://github.com/C-ORG/whitepaper#continuousorganizations" style={{textDecoration: "none",  color: "black"}}>the Continuous Organization model</a> developed by <a href="https://www.fairmint.co/" style={{textDecoration: "none",  color: "black"}}>Fairmint</a>. We have used a large part of the code while changing some contract names, and we have brought somme innovations listed below.</p>
      <i id="innovations"> 3.2.2. Innovations</i>
      <p> </p>
      <b id="mecha"> 4. IHVPT mechanism</b>
      <SplitSection
      id="IHVPT mechanism introduction"
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <p> Incoming Ͱ is split between: buying back reserve to guarantee liquidity of Ͱ and individual reserve available to the user for deposit or withdrawal.</p>
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
        <b id="staking"> 4.1. Personal staking</b>
        <p>Users use their Ͱ to buy IHVPT ( Individual Human Value Personnal Token).</p>
        $$P_s (n)=k_s \cdot n$$
        where \(k_s\) constant is the same accross all IHVPT and never changes during token life.
        </div>
        }
      />
      <SplitSection
        id="HVPT individual reserve status"
        primarySlot={
        <div>
          <p>Buy price is determined by number of issued token and individual reserve status:</p>
          <p>If individual reserve is untouched:</p>
          $$P_b (n)=P_s (n)=k_s \cdot n$$
          <p>If individual reserve is empty:</p>
          $$P_b (n)=k_r \cdot P_s (n)=k_r \cdot k_s \cdot n$$
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
      <b>BETWEEN:</b>
      <p>1. Buyback reserve</p>
      $$bb=\int_0^n k_r\cdot P_s(z)dz$$
      $$bb=\int_0^n k_r\cdot k_s\cdot z \cdot dz$$
      $$bb=(k_r\cdot k_s)/2  \cdot n^2$$
</div>}
      />
      <SplitSection
      id="IHVPT individual reserve max"
      primarySlot={<div>
      <p>2. Individual reserve max and \(\%\) calculus where \(0\leq k_i \leq 1-k_r \)</p>
      $$ir =\int_0^n k_i \cdot P_s(z)\cdot dz =\int_0^n k_i\cdot k_s \cdot z \cdot dz = (k_i \cdot k_s)/2 \cdot n^2$$
      $$ir(min)=0$$
      $$ir(max)=((1-k_r \cdot k_s)/2 \cdot n^2$$
      $$k_i=(2\cdot ir)/(k_s\cdot n^2)$$
      $$\forall p_i \in [0;1], p_i=(k_i)/(1-k_r)= (2 \cdot ir)/[(1-k_r)(k_s \cdot n^2)]$$
</div>}
      secondarySlot={<StaticImage         style={{maxWidth:"500px"}}
        alt="IHVPT individual reserve max"
        src="../images/whitepaper iconography/HVPT individual reserve max.png"
      />
      }
      />
        <div>
        <b id="depowith">4.2. Deposit/Withdrawal</b>
        <StaticImage         style={{maxWidth:"500px", marginRight:'auto', marginLeft:'auto', display:'flex', textAlign: 'center'}}
        alt="IHVPT individual reserve max"
        src="../images/whitepaper iconography/depositwithdrawal.png"
      />
        $$w(max)=ir$$
        $$d(max)=ir(max)-ir=[(1-k_r)\cdot k_s]/2 \cdot n^2-ir$$
        $$ir_d=ir+d$$
        $$ir_w=ir-w$$
        $$k(id)=[2 \cdot(ir+d)]/(k_s \cdot n^2)=k_i+(2 \cdot d)/(k_s \cdot n^2)$$
        $$k(iw)=[2 \cdot(ir-w)][k_s \cdot n^2]=k_i-[2 \cdot w][k_s \cdot n^2]$$
        $$p(iw)=[(k_i-2 \cdot w)/(k_s \cdot n^2)]/(1-k_r)=p_i -[2 \cdot w]/[k_s \cdot n^2 \cdot (1-k_r)]$$
        </div>
    </div>
    </div>
    </Layout>
  )
}

// Step 3: Export your component
export default WhitepaperPage
