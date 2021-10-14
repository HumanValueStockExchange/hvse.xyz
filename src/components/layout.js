import * as React from 'react'
import { useStaticQuery, graphql  } from 'gatsby'
import Header from "./header.js"
import Footer from "./footer.js"
import {
  container,
  heading,
} from './css/layout.module.css'

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
