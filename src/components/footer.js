import React from "react";
import { Link } from "gatsby"
import { StaticImage } from 'gatsby-plugin-image'
import {
  active,
  clearfix,
  footer,
  footerCopy,
  menuFooterWrapper,
  menuFooter,
  clear,
  copyright,
  socialIcons,
} from "./footer.module.css";

const Footer = (props) => (
    <div className={[footer, clearfix].join(" ")}>
		<div className={footerCopy}>
			<div className={menuFooterWrapper}>
				<div>
                    <ul className={menuFooter}>
                        <li><Link to="/"
                        className={active}>
                        Home
                        </Link></li>
                        <li><Link to="/about"
                        className={active}>
                        About
                        </Link></li>
                    </ul>
                </div>
            </div>
			<div className={socialIcons}></div>
			<div className={clear}></div>
			<p className={copyright}>© {(new Date().getFullYear())}
			  <Link
			    to="/"
			    className={copyright}
			    style={{ textDecoration: 'none' }}> The HVSE Foundation</Link> | {props.tagline}</p>
		</div>
	</div>
)

export default Footer