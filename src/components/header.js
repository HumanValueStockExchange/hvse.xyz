import React from "react";
import { StaticImage } from 'gatsby-plugin-image';
import Button from '../components/Button';
import "./css/header.module.css";
import {
  button,
  clear,
  copyright,
  footerSocialLinks,
  navLogo,
  unfolding,
  sub,
  menu,
  menu2,
  sanssautdeligne,
} from "./css/header.module.css"
import { Link } from "gatsby";

const Header = ({children, ...props}) => (
      <nav>
      <li className={navLogo}>
            <a href="/">
              <StaticImage
              alt="HVSE foundation logo"
              src="../images/logos/big logo.png"/>
            </a>
      </li>
      <Button type="lg" className={button} onFocus="document.getElementById('menu_membre').style.width = '175px'">Menu</Button>
      <div  id="menu_membre" className={menu2}>
      <ul>
          <li className={unfolding}><a href='#'>Use HVSE</a>
            <ul className={sub}>
              <li><a href="#">HVSE Wallets</a></li>
              <li><a href="/GetHVSEcoin">Get HVSEcoin</a></li>
              <li><a href="#">Stake on IHVTs</a></li>
              <li><a href="#">Be tokenized</a></li>
            </ul>
          </li>
          <li className={unfolding}><a href='#'>Learn</a>
            <ul className={sub}>
              <li><a href="/WhatIsHVSE">What is HVSE?</a></li>
              <li><a href="/WhatIsHVSEcoin">What is HVSEcoin?</a></li>
              <li><a href="/WhatAreIHVTs">What are IHVTs?</a></li>
              <li><a href="/whitepaper">HVSE whitepaper</a></li>
              <li><a href="/stories">Stories</a></li>
              <li><a href="/faq">F.A.Q.</a></li>
            </ul>
          </li>
          <li className={unfolding}><a href='#'>Foundation</a>
            <ul className={sub}>
              <li><a href="/about">About us</a></li>
              <li><a href="/roadmap">Roadmap</a></li>
            </ul>
          </li>
      <div className={footerSocialLinks}>
			  <a href="https://twitter.com/HVSE_Foundation" title="Twitter" target="https://twitter.com/HVSE_Foundation"><i class="fab fa-twitter"></i></a><a href="https://github.com/HumanValueStockExchange/hvse.xyz" title="GitHub" target="https://github.com/HumanValueStockExchange/hvse.xyz"><i class="fab fa-github"></i></a><a href="https://discord.com/invite/n4rRamkGuU" title="Discord" target="https://discord.com/invite/n4rRamkGuU"><i class="fab fa-discord" ></i></a><a href="https://www.reddit.com/r/hvse/" title="Reddit" target="https://www.reddit.com/r/hvse/"><i class="fab fa-reddit"></i></a><a href="mailto:hvse.info@protonmail.com" title="Mail" target="mailto:hvse.info@protonmail.com"><i class="fa fa-envelope"></i></a>
			</div>
			<div className={copyright}>©{(new Date().getFullYear())} The HVSE Foundation <p> All Rights Reserved </p> </div>
		  </ul>
      </div>


      <ul className={menu}>
          <li className={unfolding}><a href='#'>Use HVSE</a>
            <ul className={sub}>
              <li><a href="#">HVSE Wallets</a></li>
              <li><a href="/GetHVSEcoin">Get HVSEcoin</a></li>
              <li><a href="#">Stake on IHVTs</a></li>
              <li><a href="#">Be tokenized</a></li>
            </ul>
          </li>
          <li className={unfolding}><a href='#'>Learn</a>
            <ul className={sub}>
              <li><a href="/WhatIsHVSE">What is HVSE?</a></li>
              <li><a href="/WhatIsHVSEcoin">What is HVSEcoin?</a></li>
              <li><a href="/WhatAreIHVTs">What are IHVTs?</a></li>
              <li><a href="/whitepaper">HVSE whitepaper</a></li>
              <li><a href="/stories">Stories</a></li>
              <li><a href="/faq">F.A.Q.</a></li>
            </ul>
          </li>
          <li className={unfolding}><a href='#'>Foundation</a>
            <ul className={sub}>
              <li><a href="/about">About us</a></li>
              <li><a href="/roadmap">Roadmap</a></li>
            </ul>
          </li>
      </ul>
    </nav>


)

export default Header
