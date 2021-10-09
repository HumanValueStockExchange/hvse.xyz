import * as React from 'react'
import { useStaticQuery, graphql, Link  } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import {
  container,
  heading,
  siteTitle,
  navLinks,
  navLinkItem,
  navLinkText,
  navLogo,
} from './layout.module.css'

const Footer = () => {
    return (
            <div className={container}>
                <header style={{ border: "", padding: "0rem 0rem" }}>
                <nav>
                <ul className={navLinks}>
                  <li className={navLogo}>
                    <Link to="/" className={navLinkText}>
                      <StaticImage
                      alt="HVSE foundation logo"
                      src="../images/logos/logo.png"
                      />
                    </Link>
                  </li>
                </ul>
                </nav>
                </header>
            </div>
            <div className="footer-copyright text-center py-3">
                <div className={container}>
                    &copy; {new Date().getFullYear()} Copyright:
                <a href="https://www.hvse.xyz" alt="">HVSE Foundation </a>
                </div>
            </div>
    );
}

export default Footer
