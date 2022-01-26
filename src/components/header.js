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
import "../css/global.css"




const Header = ({children, ...props}) => (
      <nav>
      <li className={navLogo}>
            <a href="/">
              <StaticImage
              alt="HVSE foundation logo"
              src="../images/logos/big logo.png"/>
            </a>
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
          <li className={unfolding}><a href='#'>Use HVSE</a>
            <ul className={sub}>
              <li><a href="/HVSEwallets">HVSE Wallets</a></li>
              <li><a href="/GetHVSEcoin">Get HVSEcoin</a></li>
              <li><a href="/StakeOnIHVPTs">Stake on IHVPTs</a></li>
              <li><a href="/BeTokenized">Be tokenized</a></li>
            </ul>
          </li>
          <li className={unfolding}><a href='#'>Learn</a>
            <ul className={sub}>
              <li><a href="/WhatIsHVSE">What is HVSE?</a></li>
              <li><a href="/WhatIsHVSEcoin">What is HVSEcoin?</a></li>
              <li><a href="/WhatAreIHVPTs">What are IHVPTs?</a></li>
              <li><a href="/Twhitepaper">HVSE whitepaper</a></li>
            </ul>
          </li>
          <li className={unfolding}><a href='#'>Foundation</a>
            <ul className={sub}>
              <li><a href="/about">About us</a></li>
              <li><a href="/faq">F.A.Q.</a></li>
            </ul>
          </li>
      <div>
      <div className={submenu2}>

      <div className={col}>
      <div style={{marginTop:'10px', fontSize:"25px"}}><ThemeToggler>
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
			  <a href="https://twitter.com/HVSE_Foundation" title="Twitter" target="https://twitter.com/HVSE_Foundation"><i class="fab fa-twitter"></i></a><a href="https://github.com/HumanValueStockExchange/hvse.xyz" title="GitHub" target="https://github.com/HumanValueStockExchange/hvse.xyz"><i class="fab fa-github"></i></a><a href="https://discord.com/invite/n4rRamkGuU" title="Discord" target="https://discord.com/invite/n4rRamkGuU"><i class="fab fa-discord" ></i></a><a href="https://www.reddit.com/r/hvse/" title="Reddit" target="https://www.reddit.com/r/hvse/"><i class="fab fa-reddit"></i></a><a href="mailto:hvse.info@protonmail.com" title="Mail" target="mailto:hvse.info@protonmail.com"><i class="fa fa-envelope"></i></a>
			</div>
			<div className={copyright}>©{(new Date().getFullYear())} The HVSE Foundation <p> All Rights Reserved </p> </div>
		  </ul>
      </div>
      <div id="main" className={main}></div>


      <ul className={menu}>
          <li className={unfolding}><a href='#'>Use HVSE</a>
            <ul className={sub}>
              <li><a href="/HVSEwallets">HVSE Wallets</a></li>
              <li><a href="/GetHVSEcoin">Get HVSEcoin</a></li>
              <li><a href="/StakeOnIHVPTs">Stake on IHVPTs</a></li>
              <li><a href="/BeTokenized">Be tokenized</a></li>
            </ul>
          </li>
          <li className={unfolding}><a href='#'>Learn</a>
            <ul className={sub}>
              <li><a href="/WhatIsHVSE">What is HVSE?</a></li>
              <li><a href="/WhatIsHVSEcoin">What is HVSEcoin?</a></li>
              <li><a href="/WhatAreIHVPTs">What are IHVPTs?</a></li>
              <li><a href="/Twhitepaper">HVSE whitepaper</a></li>
            </ul>
          </li>
          <li className={unfolding}><a href='#'>Foundation</a>
            <ul className={sub}>
              <li><a href="/about">About us</a></li>
              <li><a href="/faq">F.A.Q.</a></li>
            </ul>
          </li>
          <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <label>
            <i
              class="fas fa-adjust"
              onClick={() => theme === 'dark' ? toggleTheme('light') : toggleTheme('dark')}
              style={{marginTop:'10px', marginBottom:'auto', textAlign:'right', marginRight:'25px'}}
            ></i>
          </label>
        )}
      </ThemeToggler>

      </ul>
    </nav>
)

export default Header
