import * as React from 'react'
import { useStaticQuery, graphql, Link  } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import Header from "./header.js"
import Footer from "./footer.js"
import {
  container,
  heading,
  siteTitle,
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
      <Header />
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
