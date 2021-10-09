import * as React from 'react'
import { useStaticQuery, graphql, Link  } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import Footer from "./footer.js"
import {
  container,
  heading,
  siteTitle,
  navLinks,
  navLinkItem,
  navLinkText,
  navLogo,
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
   const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

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
    </header>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
