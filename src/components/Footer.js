import SocialLink from "./SocialLink";
import React from "react";

import logoDark from "../images/logo-dark.svg";
import iconFB from "../images/icon-facebook.svg";
import iconYoutube from "../images/icon-youtube.svg";
import iconTwitter from "../images/icon-twitter.svg";
import iconPinterest from "../images/icon-pinterest.svg";
import iconInstagram from "../images/icon-instagram.svg";
import Link from "./Link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <a className="footer__logo" href="/">
          <img src={logoDark} alt="Easybank" />
        </a>

        <div className="footer__social">
          <SocialLink url="/" icon={iconFB} iconAltText="Facebook" />
          <SocialLink url="/" icon={iconYoutube} iconAltText="Youtube" />
          <SocialLink url="/" icon={iconTwitter} iconAltText="Twitter" />
          <SocialLink url="/" icon={iconPinterest} iconAltText="Pinterest" />
          <SocialLink url="/" icon={iconInstagram} iconAltText="Instagram" />
        </div>

        <div className="footer__links col1">
          <Link to="/">About Us</Link>
          <Link to="/">Contact</Link>
          <Link to="/">Blog</Link>
        </div>

        <div className="footer__links col2">
          <Link to="/">Careers</Link>
          <Link to="/">Support</Link>
          <Link to="/">Privacy Policy</Link>
        </div>

        <div className="footer__cta">
          <a href="/" className="button">
            Request Invite
          </a>
        </div>

        <div className="footer__copyright">
          &copy; EasyBank. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
