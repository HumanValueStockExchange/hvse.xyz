import CookieConsent, { Cookies } from "react-cookie-consent";
import React from 'react';
import { containercustom } from './css/layout.module.css';
import { useLocation } from "@reach/router";
import { initializeAndTrack } from 'gatsby-plugin-gdpr-cookies';



const Cookie = ({ children, title })=> {

const location = useLocation()
  return(
    <CookieConsent
    buttonClasses={{display:'flex', flexDirection:'row', width:'100%', position:'static', bottom:'0'}}
    containerClasses={containercustom}
    cookieName="gatsby-plugin-gdpr-cookies"
    containerClasses={{position:'-webkit-sticky', position: 'sticky', position:'absolute', top: '50%', transform:'translateY(-50%)', left: '50%', transform:'translateX(-50%)', width:'400px', height:'160vh', zIndex:'3', backgroundColor:'white', padding:'10px', display:'flex', flexDirection:'column', boxSizing: 'border-box', boxShadow:'0 10px 28px rgba(0,0,0,.08)', borderColor: 'black', borderRadius:'0.25rem'}}
    disableStyles={false}
    overlay={true}
    overlayStyle={{position:'fixed', display:'block', width:'100%', height: '100%', top:'0', left:'0', right:'0', bottom:'0', backgroundColor:'rgba(0,0,0,0.5)', zIndex:'3'
    }}
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
  }}
  >
    {children}
    </CookieConsent>
  );
};

export default Cookie;
