import * as React from 'react'
import Header from "./header.js";
import Footer from "./footer.js";
import {
  title,
  para,
  container,
  heading,
} from '../components/css/layout.module.css';


const Layout = ({ children }) => {
return (
    <div id="scroll" className={container}>
      <Header/>

      <main>
        <h1 className={heading}></h1>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
