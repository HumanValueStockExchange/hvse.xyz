import CookieConsent, { Cookies } from "react-cookie-consent";
import React from 'react';
import { containercustom } from './css/layout.module.css';
import { useLocation } from "@reach/router";
import { initializeAndTrack } from 'gatsby-plugin-gdpr-cookies';



const Cookie = ({ children, title })=> {

const location = useLocation();
  return(
    <CookieConsent
    buttonClasses={{display:'flex', flexDirection:'row', width:'100%', position:'static', bottom:'0'}}
    containerClasses={containercustom}
    cookieName="gatsby-plugin-gdpr-cookies"
    disableStyles={false}
    overlay={true}
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
    textAlign: 'center',
    borderRadius: '12px',
  }}
    declineButtonText="Decline"
    declineButtonStyle={{
    background: "white",
    color: "black",
    fontWeight: "bold",
    width: '60px',
    marginRight:'80px',
    marginLeft:'40px',
    cursor: 'pointer',
    textAlign: 'center',
    borderRadius: '12px',
    }}
    onAccept={() => {
    Cookies.set("gatsby-gdpr-google-analytics", "true")
    Cookies.set("gatsby-gdpr-facebook-pixel", "true")
    Cookies.set("gatsby-gdpr-google-tagmanager", "true")
    initializeAndTrack(location)
  }}
    onDecline={() => {
  }}>
    {children}
    </CookieConsent>
  );
};

export default Cookie;
