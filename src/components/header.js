import React from "react";
import { StaticImage } from 'gatsby-plugin-image';
import "./css/header.module.css";
import {
  navLogo,
  unfolding,
  sub
} from "./css/header.module.css"

const Header = ({children, ...props}) => (
      <nav>
      <li className={navLogo}>
            <a href="/">
              <StaticImage
              alt="HVSE foundation logo"
              src="../images/logos/big logo.png"/>
            </a>
      </li>
      <ul style={{display:'flex'}}>
          <li><a href="/news">News</a></li>
          <li className={unfolding}><a href='#'>Use HVSE</a>
            <ul className={sub}>
              <li><a href="#">HVSE Wallets</a></li>
              <li><a href="#">Get HVSEcoin</a></li>
              <li><a href="#">Stake with IHVTs</a></li>
              <li><a href="#">Be tokenized</a></li>
            </ul>
          </li>
          <li className={unfolding}><a href='#'>Learn</a>
            <ul className={sub}>
              <li><a href="#">What is HVSE?</a></li>
              <li><a href="#">What is HVSEcoin?</a></li>
              <li><a href="#">What are IHVTs?</a></li>
              <li><a href="/whitepaper">HVSE whitepaper</a></li>
              <li><a href="/stories">Stories</a></li>
              <li><a href="#">F.A.Q.</a></li>
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
