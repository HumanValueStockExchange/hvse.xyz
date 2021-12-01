// Step 1: Import React
import React from 'react'
import { Helmet } from "react-helmet"
import 'gatsby-remark-mathjax'
import 'gatsby-transformer-remark'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import SplitSection from '../components/SplitSection';

// Step 2: Define your component

const WhitepaperPage = () => {
  return (
    <Layout pageTitle="Whitepaper">

    <Helmet>
      <script src="//polyfill.io/v3/polyfill.min.js?features=es6"></script>
      <script id="MathJax-script" async src="//cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js">
  </script>
    </Helmet>
      <p>Our whitepaper will be published no later than February 2022, as it specified in the <a href="/roadmap">Roadmap</a>.</p>
    </Layout>
  )
}

// Step 3: Export your component
export default WhitepaperPage
