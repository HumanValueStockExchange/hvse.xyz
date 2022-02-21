// Step 1: Import React
import React from 'react';
import Layout from '../components/layout';
import {FormattedMessage} from "react-intl";
import SimpleLocalize from "../components/SimpleLocalize";

// Step 2: Define your component

function WhitepaperPage(props) {
  return (
    <SimpleLocalize {...props}>
    <Layout pageTitle="Whitepaper">
      <p style={{margin: 'auto'}}>Our whitepaper will be published no later than February 2022, as it specified in the Roadmap.</p>
    </Layout>
    </SimpleLocalize>
  )
}

// Step 3: Export your component
export default WhitepaperPage
