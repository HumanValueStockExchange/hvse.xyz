import * as React from 'react'
import Header from "./header.js"
import Footer from "./footer.js"
import {
  container,
  heading,
} from './css/layout.module.css'

const Layout = ({ pageTitle, children }) => {


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
