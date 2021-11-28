import CookieConsent from "react-cookie-consent";
import React from 'react';
import { cookie, containercustom } from './css/layout.module.css';


const Cookie = ({ children, title })=> {
  return(
    <CookieConsent
    buttonClasses={{display:'flex', flexDirection:'row', width:'100%', position:'static', bottom:'0'}}
    containerClasses={containercustom}
    cookieName="gatsby-gdpr-google-analytics"
    disableStyles={true}
    enableDeclineButton flipButtons
    buttonText="Accept"
    buttonStyle={{
    background: "black",
    color: "white",
    fontWeight: "bold",
    width: '60px',
    marginRight:'40px',
    marginLeft:'80px',
    cursor: 'pointer',
  }}
    declineButtonText="Manage"
    declineButtonStyle={{
    background: "white",
    color: "black",
    fontWeight: "bold",
    width: '60px',
    marginRight:'80px',
    marginLeft:'40px',
    cursor: 'pointer',
    }}
    onAccept={() => {
    document.body.style.overflow = "scroll"
    document.getElementById("overlay").style.display = "none"
  }}
    onDecline={() => {
    document.getElementById("overlay").style.display = "block"
  }}
  >
    {children}
    </CookieConsent>
  );
};

export default Cookie;
