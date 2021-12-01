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




const Footer = (props) => (
    <div className={[footer, clearfix].join(" ")}>
		<div className={footerCopy}>
		<div className={footerSocialLinks}>
			  <a href="https://twitter.com/HVSE_Foundation" title="Twitter" target="https://twitter.com/HVSE_Foundation"><i class="fab fa-twitter"></i></a>
			  <a href="https://github.com/HumanValueStockExchange/hvse.xyz" title="GitHub" target="https://github.com/HumanValueStockExchange/hvse.xyz"><i class="fab fa-github"></i></a>
			  <a href="https://discord.com/invite/n4rRamkGuU" title="Discord" target="https://discord.com/invite/n4rRamkGuU"><i class="fab fa-discord" ></i></a>
			  <a href="https://www.reddit.com/r/hvse/" title="Reddit" target="https://www.reddit.com/r/hvse/"><i class="fab fa-reddit"></i></a>
        <a href="mailto:hvse.info@protonmail.com" title="Mail" target="mailto:hvse.info@protonmail.com"><i class="fa fa-envelope"></i></a>
			</div>
			<div className={menuFooterWrapper}>
				<div style={{display:'flex', flexDirection:'row'}}>
                    <ul className={menuFooter}>
                        <b> Use HVSE</b>
                        <li><Link to="/HVSEwallets"
                        className={active}>
                        HVSE wallets
                        </Link></li>
                        <li><Link to="/GetHVSEcoin"
                        className={active}>
                        Get HVSEcoins
                        </Link></li>
                        <li><Link to="/StakeOnIHVPTs"
                        className={active}>
                        Staking on IHVPTs
                        </Link></li>
                        <li><Link to="/BeTokenized"
                        className={active}>
                        Be tokenized
                        </Link></li>
                    </ul>
                    <ul className={menuFooter}>
                        <b>Learn</b>
                        <li><Link to="/WhatIsHVSE"
                        className={active}>
                        What is HVSE?
                        </Link></li>
                        <li><Link to="/WhatIsHVSEcoin"
                        className={active}>
                        What is HVSEcoin?
                        </Link></li>
                        <li><Link to="/WhatAreIHVPTs"
                        className={active}>
                        What are IHVPTs?
                        </Link></li>
                        <li><Link to="/whitepaper"
                        className={active}>
                        HVSE whitepaper
                        </Link></li>
                        <li><Link to="/stories"
                        className={active}>
                        Customer stories
                        </Link></li>
                        <li><Link to="/faq"
                        className={active}>
                        Frequently asked questions
                        </Link></li>
                    </ul>
                    <ul className={menuFooter}>
                        <b>Foundation</b>
                        <li><Link to="/about"
                        className={active}>
                        About us
                        </Link></li>
                        <li><Link to="/roadmap"
                        className={active}>
                        Roadmap
                        </Link></li>
                    </ul>
                </div>
            </div>
			<div className={clear}></div>
			<p className={copyright}>© {(new Date().getFullYear())}
			  <Link
			    to="/"
			    className={copyright}
			    style={{ textDecoration: 'none' }}> The HVSE Foundation</Link> | All Rights Reserved </p>
		</div>
	</div>
)

export default Footer
