// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

// Step 2: Define your component
const WhitepaperPage = () => {
  return (
    <Layout pageTitle="Whitepaper">
      <b>ABSTRACT</b>
      <p>What is the difference between each of us? Our value. This criterion seems to be subjective. Therefore, none objective parameter exist yet to assess human value on an individual scale. This societal issue joins another: the social elevator disappearance. Unlike other crypto currencies, HVSEcoin will not be a goal but a means; the means to assess your added value,  the means to improve yourself. To do this, HVSEcoin is the only way to access a new market: that of human values (Human Value Stock Exchange).</p>
      <b> 1. INTRODUCTION </b>
      <p></p>
      <b> 1.1. History Lesson </b>
      <p> There is 3 generations of cryptocurrencies.<b>The first generation</b> is represented by Bitcoin (2009). Strongly established, initiator of the media and public madness for cryptocurrencies, it suffers from regularly pointed out shortcomings, such as its slowness, its relatively small block size, in particular.</p>
      <p>A <b>second generation</b> (2011) presents either minor improvements or technological innovations allowing new functions. The archetype  is Ethereum (which is derived from the source code of Bitcoin), which makes use of smart contracts.</p>
      <p>The <b>third generation</b> (since 2017): Noticing new limitations, notably in capacity, security and governance. New cryptocurrencies have emerged, such as EOS.IO, Cardano (ADA), AION, ICON (ICX) and Raiden Network (RDN), for the best known. EOS.IO is itself derived from Ethereum. They bring innovations, but, in August 2018, none has gained the upper hand over the others.</p>
      <b>1.2. A new currency or a new token?</b>
      <p>Typically, crypto tokens are programmable, permissionless, trustless, and transparent. Programmable simply means that they run on software protocols, which are composed of smart contracts that outline the features and functions of the token and the network’s rules of engagement. Permissionless means that anyone can participate in the system without the need for special credentials. Trustless means that no one central authority controls the system; instead it runs on the rules predefined by the network protocol. And finally, transparency implies that the rules of the protocol and its transactions are viewable and verifiable by all.</p>
      <p> While crypto tokens, like cryptocurrency, can hold value and be exchanged, they can also be designed to represent physical assets or more traditional digital assets, or a certain utility or service. For instance, there are crypto tokens that represent tangible assets such as real estate and art, as well as intangible assets such as processing power or data storage space. Tokens are also frequently used as a governance mechanism for voting on specific parameters like protocol upgrades and other decisions that dictate the future direction of various blockchain projects. The process of creating crypto tokens to serve these various functions is known as tokenization.</p>
      <p> After our market study, we have concluded that a new currency can't offer several new things. Indeed, our personal profits in this enterprise don't matter. So, we have chosen to create a new token and not a new cryptocurrency.</p>
      <p> HVSEcoin is a ERC20 token based on the Ether. This choice was conducted due to different reasons:</p>
      <p> 1. a solid network of applications;</p>
      <p> 2. a mutation in progress from the Proof of Work consensus mechanism to the Proof of Stake consensus mechanism;</p>
      <p> 3. ERC20 allows for seamless interaction with other smart contracts and decentralized applications on the Ethereum blockchain. Tokens that have some but not all of the standard functions are considered to be partially ERC20 compliant and can still be easy for external parties to interact with depending upon which functions are missing.</p>
      <p> We define "staking" as the action to bet HVSEcoin on a person.</p>
      <b> 1.3. Societal and way of life problems </b>
      <p> Our society makes a noise: it growls.  However, few people can hear it.There is one million questions to ask, but anyone ask the good ones. Actually, there is only noise. The society in this globality is going to known economic, cultural, social and politic changes as the world has never known.</p>
      <p> The cleverest are the dumbest. Resources needs are going to rise sharply. We need an Odyssian education. Religious extremism is experiencing unprecedented development. In Western countries, inter-generational inequalities are widening like never before. We need an alliance between Apollonian rationality and Dionysian intituition.This is observations and necessities (or sophisms) conglomeration, that we must integrate and therefore act accordingly.</p>
      <p> The fact that we are in a phase of transition towards a new societal model having been established, it is fashionable to affirm that monetary dematerialization will play a significant role there. A new problematic is added to this: the need to surpass one's condition while having the societal levers (going beyond one's origin social class) blocked.</p>
      <p> Actually, some start-ups have put the idea on the cryptocurrencies way (bitcloud.com, ideamarket.io ...). However, they are only based on the ideas; we consider that our humanity is not only based on ideas (as certain Myers-Briggs Type Indicator results might lead one to believe it) but on physical aspects too. Therefore,we would like to capitalize and to assess human values thanks to different parameters: ideas, finance, sociability, health...</p>
      <b> 2. HVSE </b>
      <p></p>
      <b> 2.1. Philosophy </b>
      <p>Pavlov has shown that humans could be conditioned as other animals. This reward circus previously described in a certain way constitutes the psycho-physiological basis of leitmotif concept. When the social elevator has practically disappeared and when the social class freeing hope is weak, the existence of a social lever could only be saving.</p>
      <p>What is needed is an objective criterion to assess human value on an individual scale. Thanks to big data technologies, we could produce an index based upon personal trackers: health, finance, social life, …</p>
      <p>A centralizing body setting itself the value of a person would be a denial of the crypto-currencies principles. Indeed, the concept HVSE strives to model the societal capital of a person according to the society point of view. In this way, the favoritism absence face to popular sentiment, which once was only an utopia, could thus become a reality. Everyone should thus prove their usefulness to society in various ways to obtain financial leverage (thanks to their tokenization).</p>
      <b> 2.2. Business model </b>
      <p>We use the Continuous Organization model [1,2] as the main approach.</p>
      <i> 2.2.1. Description</i>
      <p>The <i>Decentralized Autonomous Trust</i> (DAT) is a specific immutable smart-contract that implements a bonding curve contract with sponsored burning to automatically mint, burn and distribute fully digital security tokens called <i>FAIR securities</i> (FAIRs). These FAIRs represent a claim on the future cash-flows handled by the DAT.</p>
      <p>It is important to note that the DAT is not the organization; like an irrevocable Trust, it is a contract external to the organization.</p>
      <StaticImage
        alt="Introduction of the Continous Organization system"
        src="../images/whitepaper iconography/Introducing-Continuous0.png"
      />
      <p>- <b>Buying FAIRs</b>. New FAIRs are minted by the DAT, which increases the price of FAIRs. Part of the money invested goes to the organization and part of it is held back by the DAT in its buy-back reserve.</p>
      <p>- <b>Selling FAIRs</b>. The FAIRs sold are burnt by the DAT, which decreases the price of FAIRs, and the DAT refunds the investor with ETH using its buy-back reserve.</p>
      <p>- DAT receiving <b>payement</b>. A payment fraction is used by the DAT to mint new FAIRs (increase both the price of FAIRs and the buy-back reserve). Those newly minted FAIRs are distributed to the current FAIRs holders. The payment rest is transferred to the organization.</p>
      <p>- DAT receiving <b>dividend payement</b>.The amount sent is used to mint new FAIRs (increasing both the price of FAIRs and the buy-back reserve). Those newly minted FAIRs are distributed to the current FAIRs holders.</p>
      <i> 2.2.2. Pros</i>
      <p>1. <b>Continuous Fundraising</b>. Continuous open primary market where tokens get minted whenever demand exceeds supply. So, it provides ongoing funding and makes the organization less fragile.</p>
      <p>2. <b>Fully liquid</b>. An investor will always be able to buy/sell its FAIRs (not necessarily at the price he wants), even in the public market listing absence.</p>
      <p>3. <b>Attractive to long-term investors</b>. It limits short-selling speculators and attracts long-terms investors, by definition.</p>
      <p>4. <b>Securities</b>.  Claim on the future cash-flows handled by the DAT and should be valued as such.</p>
      <p>5. <b>Permission-less, friction-less and supra-national</b>. Accessibility for everyone fom anywhere without permission.</p>
      <p>6. <b>Governance agnostic</b>. No governance rights. Immutable system and no governance favoritism. So, "Bring Your Own Governance."</p>
      <b> 2.3. HVSE organization</b>
      <p>We define the HSVEcoin as a gate between crypto-traders and tokenization candidate. Each crypto-traders can buy some HVSEcoin (with fiat) or trade it against other crypto-currencies. Only HVSEcoin could be used to buy or to sell tokenized user action.</p>
      <p> We define a tokenized user as a person who has achieved the tokenization process allowing to be quoted on the Human Value Stock Market.</p>
      <StaticImage
        alt="Introduction of the HVSEcoin use"
        src="../images/whitepaper iconography/General scheme.PNG"
      />
      <p> The problem of course is the ethic and philosophical ones: the unavailability principle of the body (and the soul). However, this argument seems fallacious and assimilates more to fear in view of different existing practices (surrogacy, euthanasia ...).</p>
      <b> 3. HVSEcoin (Ͱ) </b>
      <p></p>
      <b> 3.1. Ͱ token supply</b>
      <p></p>
      <i> 3.1.1. Bonding curve</i>
      <p> As other financial products, Ͱ will obey to the demand/supply law. Therefore, its prices will change according to this. Differences between sell and buy price allow to create a second market: futures, derived options...Bid asks prices bounded. This makes possible to maintain a market security.</p>
      <StaticImage
        alt="Bonding curve explanation"
        src="../images/whitepaper iconography/bonding_curve.png"
      />
      <p></p>
      <i> 3.1.2. Bonding curve initialization</i>
      <p> A Minimum Funding Goal was defined to offer the initialization possibility. Till it was not reached, we are on the refundable side; and then, after the Minimum Funding Goal, the curve is launched. Maybe, we will study the possibility to go backwards in the future (but it is not current).</p>
      <StaticImage
        alt="Bonding curve initailization"
        src="../images/whitepaper iconography/initialization.png"
      />
      <p></p>
      <b> 4. IHVT mechanism</b>
      <p> Incoming Ͱ is split between: buying back reserve to guarantee liquidity of Ͱ and individual reserve available to the user for deposit or withdrawal.</p>
      <StaticImage
        alt="Bonding curve initailization"
        src="../images/whitepaper iconography/IHVT_mechanism.png"
      />
      <p></p>
      <b> 4.1. Personal staking</b>
      <StaticImage
        alt="Bonding curve initailization"
        src="../images/whitepaper iconography/Buying HVPT.PNG"
      />
      <p>Users use their Ͱ to buy individual HVPT (Human Value Personnal Token).</p>
      <p></p>
    </Layout>
  )
}

// Step 3: Export your component
export default WhitepaperPage
