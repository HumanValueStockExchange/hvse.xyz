import React from "react";
import { Link } from "gatsby";
import {
  active,
  clearfix,
  footer,
  footerCopy,
  menuFooterWrapper,
  menuFooter,
  clear,
  copyright,
  footerSocialLinks,
} from "./css/footer.module.css";
import {FormattedMessage} from "react-intl";
import LinkTranslated from "../components/LinkTranslated";
import SimpleLocalize from "../components/SimpleLocalize"


function Footer(props) {
  return(
    <div className={[footer, clearfix].join(" ")}>
		<div className={footerCopy}>
				<div style={{display:'flex', flexDirection:'row', marginLeft:'20px', alignText:'center',marginTop:'7px'}}>
            <div className={copyright}>© {(new Date().getFullYear())}
			  <LinkTranslated
			    to="/"
			    className={copyright}
			    style={{ textDecoration: 'none' }}> <FormmattedMessage id= "foot1" defaultMessage="The HVSE Foundation"/></LinkTranslated> | <FormattedMessage id="foot2" defaultMessage="All Rights Reserved"/> </div>
            </div>
        <div className={footerSocialLinks}>
			  <a href="https://twitter.com/HVSE_Foundation" title="Twitter" target="https://twitter.com/HVSE_Foundation"><i class="fab fa-twitter"></i></a>
			  <a href="https://github.com/HumanValueStockExchange/hvse.xyz" title="GitHub" target="https://github.com/HumanValueStockExchange/hvse.xyz"><i class="fab fa-github"></i></a>
			  <a href="https://discord.com/invite/n4rRamkGuU" title="Discord" target="https://discord.com/invite/n4rRamkGuU"><i class="fab fa-discord" ></i></a>
			  <a href="https://www.reddit.com/r/hvse/" title="Reddit" target="https://www.reddit.com/r/hvse/"><i class="fab fa-reddit"></i></a>
        <a href="mailto:hvse.info@protonmail.com" title="Mail" target="mailto:hvse.info@protonmail.com"><i class="fa fa-envelope"></i></a>
			</div>


		</div>
	</div>
)}

export default Footer
