import React from "react";
import { Link } from "gatsby";
import { StaticImage } from 'gatsby-plugin-image';
import {
  header,
  navLinks,
  navLinkItem,
  navLinkText,
  navLogo,
} from "./css/header.module.css";

const Header = ({children, ...props}) => (
<div className={header}>
      <nav>
      <li className={navLogo}>
            <Link to="/" className={navLinkText}>
              <StaticImage
              alt="HVSE foundation logo"
              src="../images/logos/big logo.png"/>
            </Link>
      </li>
      <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/news" className={navLinkText}>
              News
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/roadmap" className={navLinkText}>
              Roadmap
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/whitepaper" className={navLinkText}>
              Whitepaper
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/stories" className={navLinkText}>
              Stories
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>
              About
            </Link>
          </li>
        </ul>
        </nav>
    </div>
)

export default Header
