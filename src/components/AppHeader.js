import React from "react";
import logo from "../images/logo.svg";
import Link from "./Link";

export default function AppHeader() {
  return (
    <header className="header">
      <div className="overlay has-fade"></div>

      <nav className="container container--pall flex flex-jc-sb flex-ai-c">
        <a href="/" className="header__logo">
          <img src={logo} alt="Easybank" />
        </a>

        <div id="btnHamburger" className="header__toggle hide-for-desktop">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="header__links hide-for-mobile">
          <Link to="/">Home</Link>
          <Link to="/">About</Link>
          <Link to="/">Contact</Link>
          <Link to="/">Blog</Link>
          <Link to="/">Careers</Link>
        </div>

        <a href="/" className="button header__cta hide-for-mobile">
          Request Invite
        </a>
      </nav>

      <div className="header__menu has-fade">
        <Link to="/">Home</Link>
        <Link to="/">About</Link>
        <Link to="/">Contact</Link>
        <Link to="/">Blog</Link>
        <Link to="/">Careers</Link>
      </div>
    </header>
  );
}
