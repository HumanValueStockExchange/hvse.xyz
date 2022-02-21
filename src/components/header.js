import React from "react";
import { Link } from "gatsby";
import { StaticImage } from 'gatsby-plugin-image';
import "./css/header.module.css";
import {
  ham,
  copyright,
  footerSocialLinks,
  navLogo,
  unfolding,
  sub,
  menu,
  menu2,
  main,
  submenu2,
  col,
} from "./css/header.module.css";
import Hamburger from 'hamburger-react';
import { ThemeToggler } from 'gatsby-plugin-dark-mode';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../css/global.css";
import {FormattedMessage} from "react-intl";
import LinkTranslated from "../components/LinkTranslated";



function Header({children, ...props}) {
  return(
      <nav>
      <li className={navLogo}>
            <LinkTranslated href="/">
              <StaticImage
              alt="HVSE foundation logo"
              src="../images/logos/big logo.png"/>
            </LinkTranslated>
      </li>
      <div className={ham}>
      <Hamburger style={{ham}} onToggle={toggled => {
      if (toggled) {
        document.getElementById('menu2').style.width = '220px'
        document.getElementById('main').style.width = '100%'
      } else {
        document.getElementById('menu2').style.width = '0'
        document.getElementById('main').style.width = '0'
      }
      }} />
      </div>
      <div  id="menu2" className={menu2}>
      <ul style={{marginTop:'50px'}}>
          <li className={unfolding}><LinkTranslated href='#'><FormattedMessage id="use-hvse" defaultMessage="Use HVSE"/></LinkTranslated>
            <ul className={sub}>
              <li><LinkTranslated href="/HVSEwallets"><FormattedMessage id="hvse-wallets" defaultMessage="HVSE Wallets"/></LinkTranslated></li>
              <li><LinkTranslated href="/GetHVSEcoin"><FormattedMessage id="get-hvse" defaultMessage="Get HVSEcoin"/></LinkTranslated></li>
              <li><LinkTranslated href="/StakeOnIHVPTs"><FormattedMessage id="stakeih" defaultMessage="Stake on IHVPTs"/></LinkTranslated></li>
              <li><LinkTranslated href="/BeTokenized"><FormattedMessage id="betok" defaultMessage="Be tokenized"/></LinkTranslated></li>
            </ul>
          </li>
          <li className={unfolding}><LinkTranslated href='#'><FormattedMessage id="learn" defaultMessage="Learn"/></LinkTranslated>
            <ul className={sub}>
              <li><LinkTranslated href="/WhatIsHVSE"><FormattedMessage id="whatishvse" defaultMessage="What is HVSE?"/></LinkTranslated></li>
              <li><LinkTranslated href="/WhatIsHVSEcoin"><FormattedMessage id="whatishvsecoin" defaultMessage="What is HVSEcoin?"/></LinkTranslated></li>
              <li><LinkTranslated href="/WhatAreIHVPTs"><FormattedMessage id="whatareihvpts" defaultMessage="What are IHVPTs?"/></LinkTranslated></li>
              <li><LinkTranslated href="/Twhitepaper"><FormattedMessage id="white-paper" defaultMessage="Whitepaper"/></LinkTranslated></li>
            </ul>
          </li>
          <li className={unfolding}><LinkTranslated href='#'><FormattedMessage id="foun" defaultMessage="HVSE Wallets"/></LinkTranslated>
            <ul className={sub}>
              <li><LinkTranslated href="/about"><FormattedMessage id="about-us" defaultMessage="About us"/></LinkTranslated></li>
              <li><LinkTranslated href="/faq"><FormattedMessage id="faq" defaultMessage="F.A.Q."/></LinkTranslated></li>
            </ul>
          </li>
        <li className={unfolding}><LinkTranslated href='#'><FormattedMessage id="lang" defaultMessage="Language"/></LinkTranslated>
          <ul className={sub}>
        <li><LinkTranslated href="/"><FormattedMessage id="english" defaultMessage="English"/></LinkTranslated></li>
        <li><LinkTranslated href="/fr/"><FormattedMessage id="fra" defaultMessage="French"/></LinkTranslated></li>
        <li><LinkTranslated href="/es/"><FormattedMessage id="esp" defaultMessage="Spanish"/></LinkTranslated></li>
      </ul></li>
      <div>
      <div className={submenu2}>

      <div className={col}>
      <div  style={{marginTop:'10px', fontSize:"25px"}}><ThemeToggler>
        {({ theme, toggleTheme }) => (
          <label>
            <i
              class="fas fa-adjust"
              onClick={() => theme === 'dark' ? toggleTheme('light') : toggleTheme('dark')}
            ></i>
          </label>
        )}
      </ThemeToggler>
      </div>
      <div>LIGHT</div>

      </div>
      </div>
      </div>

      <div className={footerSocialLinks}>
			  <LinkTranslated href="https://twitter.com/HVSE_Foundation" title="Twitter" target="https://twitter.com/HVSE_Foundation"><i class="fab fa-twitter"></i></LinkTranslated><LinkTranslated href="https://github.com/HumanValueStockExchange/hvse.xyz" title="GitHub" target="https://github.com/HumanValueStockExchange/hvse.xyz"><i class="fab fa-github"></i></LinkTranslated><LinkTranslated href="https://discord.com/invite/n4rRamkGuU" title="Discord" target="https://discord.com/invite/n4rRamkGuU"><i class="fab fa-discord" ></i></LinkTranslated><LinkTranslated href="https://www.reddit.com/r/hvse/" title="Reddit" target="https://www.reddit.com/r/hvse/"><i class="fab fa-reddit"></i></LinkTranslated><LinkTranslated href="mailto:hvse.info@protonmail.com" title="Mail" target="mailto:hvse.info@protonmail.com"><i class="fa fa-envelope"></i></LinkTranslated>
			</div>
			<div className={copyright}>©{(new Date().getFullYear())} The HVSE Foundation <p> All Rights Reserved </p> </div>
		  </ul>
      </div>
      <div id="main" className={main}></div>


      <ul className={menu}>
          <li className={unfolding}><LinkTranslated href='#'><FormattedMessage id="use-hvse" defaultMessage="Use HVSE"/></LinkTranslated>
            <ul className={sub}>
              <li><LinkTranslated href="/HVSEwallets"><FormattedMessage id="hvse-wallets" defaultMessage="HVSE Wallets"/></LinkTranslated></li>
              <li><LinkTranslated href="/GetHVSEcoin"><FormattedMessage id="get-hvse" defaultMessage="Get HVSEcoin"/></LinkTranslated></li>
              <li><LinkTranslated href="/StakeOnIHVPTs"><FormattedMessage id="stakeih" defaultMessage="Stake on IHVPTs"/></LinkTranslated></li>
              <li><LinkTranslated href="/BeTokenized"><FormattedMessage id="betok" defaultMessage="Be tokenized"/></LinkTranslated></li>
            </ul>
          </li>
          <li className={unfolding}><LinkTranslated href='#'><FormattedMessage id="learn" defaultMessage="Learn"/></LinkTranslated>
            <ul className={sub}>
              <li><LinkTranslated href="/WhatIsHVSE"><FormattedMessage id="whatishvse" defaultMessage="What is HVSE?"/></LinkTranslated></li>
              <li><LinkTranslated href="/WhatIsHVSEcoin"><FormattedMessage id="whatishvsecoin" defaultMessage="What is HVSEcoin?"/></LinkTranslated></li>
              <li><LinkTranslated href="/WhatAreIHVPTs"><FormattedMessage id="whatareihvpts" defaultMessage="What are IHVPTs?"/></LinkTranslated></li>
              <li><LinkTranslated href="/Twhitepaper"><FormattedMessage id="white-paper" defaultMessage="Whitepaper"/></LinkTranslated></li>
            </ul>
          </li>
          <li className={unfolding}><LinkTranslated href='#'><FormattedMessage id="foun" defaultMessage="HVSE Wallets"/></LinkTranslated>
            <ul className={sub}>
              <li><LinkTranslated href="/about"><FormattedMessage id="about-us" defaultMessage="About us"/></LinkTranslated></li>
              <li><LinkTranslated href="/faq"><FormattedMessage id="faq" defaultMessage="F.A.Q."/></LinkTranslated></li>
            </ul>
          </li>
        <li className={unfolding}><LinkTranslated href='#'><FormattedMessage id="lang" defaultMessage="Language"/></LinkTranslated>
          <ul className={sub}>
        <li><LinkTranslated href="/"><FormattedMessage id="english" defaultMessage="English"/></LinkTranslated></li>
        <li><LinkTranslated href="/fr/"><FormattedMessage id="fra" defaultMessage="French"/></LinkTranslated></li>
        <li><LinkTranslated href="/es/"><FormattedMessage id="esp" defaultMessage="Spanish"/></LinkTranslated></li>
      </ul></li>
          <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <label>
            <i
              class="fas fa-adjust"
              onClick={() => theme === 'dark' ? toggleTheme('light') : toggleTheme('dark')}
              style={{marginTop:'20px', marginBottom:'auto', textAlign:'right', marginRight:'25px'}}
            ></i>
          </label>
        )}
      </ThemeToggler>
      </ul>
    </nav>
);
}

export default Header
