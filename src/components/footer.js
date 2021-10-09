import React from "react";
import { Link } from "gatsby"
import styles from "./footer.module.css";

const Footer = (props) => (
    <div className={[footerStyles.footer, footerStyles.clearfix].join(" ")}>
		<div className={footerStyles.footerCopy}>
			<div className={footerStyles.menuFooterWrapper}>
				<div>
                    <ul className={footerStyles.menuFooter}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul>
                </div>
            </div>
			<div className={footerStyles.clear}></div>
			<p className={footerStyles.copyright}>© {(new Date().getFullYear())} <Link to="/">{props.title}</Link> | {props.tagline}</p>
		</div>
		<div className={footerStyles.socialIcons}>
		</div>
	</div>
)

export default Footer
