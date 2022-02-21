// Step 1: Import React
import * as React from 'react';
import Layout from '../components/layout';
import SplitSection from '../components/SplitSection';
import {FormattedMessage} from "react-intl";
import LinkTranslated from "../components/LinkTranslated";
import SimpleLocalize from "../components/SimpleLocalize";

// Step 2: Define your component
function FAQPage(props) {
  return (
    <SimpleLocalize {...props}>
    <Layout pageTitle="FAQ">
    <p>Here we answer the most common questions about the HVSE project. If by any chance you have others, please let us know.</p>
    <SplitSection
      id="Collected data"
      primarySlot={
        <div className="lg:pr-32 xl:pr-48" style={{fontWeight:'700', fontSize: '2.25rem', lineHeight: '2.5rem', class:'lead'}}>
          <p className="mt-8 text-xl font-light leading-relaxed" style={{textAlign:'center', justifyContent:'center' }}>
            How are the collected data used?
          </p>
        </div>
      }
      secondarySlot={
        <p className="mt-8 text-xl font-light leading-relaxed" style={{textAlign:'justify', justifyContent:'center' }}>
        As soon as they are collected, all the data concerning each tokenized user are immediately published on the corresponding IHVPT page. None data are stocked or saled.
        </p>
      }
    />
    <SplitSection
      id="Collected data"
      primarySlot={
        <p className="mt-8 text-xl font-light leading-relaxed" style={{textAligIHVPTn:'justify', justifyContent:'center' }}>
        Regarding this philosophical debate, we want to refocus the individual at the heart of society. Indeed, with regard to his actions, the company will decide whether or not to remunerate him through the price of his IHVPT. Thus, short selling or long buying actions are not allowed by a single individual but by all of the individuals who have bet on others. In addition, in order to avoid insider trading, each IHVPTs buyer or seller will need to authenticate and their identity will be known only to the HVSE. Admittedly, advices could be provided by the 5 majority holders of each IHVPT to tokenized people but HVSE regulation will take place in order to limit advices encouraging extreme atitudes. Our main value is and will always be benevolence.
        </p>
      }
      secondarySlot={
        <div className="lg:pr-32 xl:pr-48" style={{fontWeight:'700', fontSize: '2.25rem', lineHeight: '2.5rem', class:'lead'}}>
          <p className="mt-8 text-xl font-light leading-relaxed" style={{textAlign:'center', justifyContent:'center' }}>
          Doesn't this process allow you to think of yourself as God?
          </p>
        </div>
      }
    />
    <SplitSection
      id="Collected data"
      primarySlot={
        <div className="lg:pr-32 xl:pr-48" style={{fontWeight:'700', fontSize: '2.25rem', lineHeight: '2.5rem', class:'lead'}}>
          <p className="mt-8 text-xl font-light leading-relaxed" style={{textAlign:'center', justifyContent:'center' }}>
            How is HVSE funded? Are its employees paid?
          </p>
        </div>
      }
      secondarySlot={
        <p className="mt-8 text-xl font-light leading-relaxed" style={{textAlign:'justify', justifyContent:'center' }}>
        HVSE is self-funded according to the principle of continuous organization. Its employees, with the exception of the CEO, are remunerated through a salary and through the acquisition of shares. The CEO has no salary but only shares.
        </p>
      }
    />
    </Layout></SimpleLocalize>
  )
}

// Step 3: Export your component
export default FAQPage
