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
  icon,
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
			<div className={socialIcons}>
			<Link external to="https://twitter.com/HVSE_Foundation">
              <StaticImage
              alt="Twitter"
              src="../images/social media button/twitter.png"
              className={icon}
              />
            </Link>
      <Link external to="https://discord.com/invite/n4rRamkGuU">
              <StaticImage
              alt="Discord"
              src="../images/social media button/discord2.png"
              className={icon}
              />
            </Link>
      <Link external to="https://github.com/HumanValueStockExchange/hvse.xyz">
              <StaticImage
              alt="Github"
              src="../images/social media button/github2.png"
              className={icon}
              />
            </Link>
      <Link external to="/">
              <StaticImage
              alt="Telegram"
              src="../images/social media button/telegram2.png"
              className={icon}
              />
            </Link>
      <Link external to="https://www.reddit.com/r/hvse/">
              <StaticImage
              alt="Reddit"
              src="../images/social media button/redd.png"
              className={icon}
              />
            </Link>
      <a href="mailto:hvse.info@protonmail.com">
              <StaticImage
              alt="Mail"
              src="../images/social media button/mail.png"
              className={icon}
              />
            </a>
			</div>
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
