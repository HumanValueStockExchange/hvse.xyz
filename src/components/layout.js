import * as React from 'react'
import Header from "./header.js";
import Footer from "./footer.js";
import Cookie from "../components/CookieConsent.js";
import {
  title,
  para,
  overlay,
  scroll,
  container,
  heading,
} from '../components/css/layout.module.css';


const Layout = ({ pageTitle, children }) => {
return (
    <div id="scroll" className={container}>
      <Header/>
      <Cookie>
        <div className={title}>Cookies give you a personalized experience</div>
        <div className={para}>These aren't good crunchy little cookies. These cookies help us keep our website secure, provide you with a better experience, and display more relevant advertising. We will not activate them without your permission. Want to know more or change your preferences?</div> </Cookie>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
