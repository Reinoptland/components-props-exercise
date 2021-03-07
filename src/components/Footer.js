import React from "react";

import logoDark from "../images/logo-dark.svg";
import iconFB from "../images/icon-facebook.svg";
import iconYoutube from "../images/icon-youtube.svg";
import iconTwitter from "../images/icon-twitter.svg";
import iconPinterest from "../images/icon-pinterest.svg";
import iconInstagram from "../images/icon-instagram.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <a className="footer__logo" href="/">
          <img src={logoDark} alt="Easybank" />
        </a>

        <div className="footer__social">
          <a href="/">
            <img src={iconFB} alt="Facebook" />
          </a>
          <a href="/">
            <img src={iconYoutube} alt="Youtube" />
          </a>
          <a href="/">
            <img src={iconTwitter} alt="Twitter" />
          </a>
          <a href="/">
            <img src={iconPinterest} alt="Pinterest" />
          </a>
          <a href="/">
            <img src={iconInstagram} alt="Instagram" />
          </a>
        </div>

        <div className="footer__links col1">
          <a href="/">About Us</a>
          <a href="/">Contact</a>
          <a href="/">Blog</a>
        </div>

        <div className="footer__links col2">
          <a href="/">Careers</a>
          <a href="/">Support</a>
          <a href="/">Privacy Policy</a>
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
