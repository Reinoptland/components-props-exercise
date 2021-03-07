import Features from "./components/Features";
import Hero from "./components/Hero";
import AppHeader from "./components/AppHeader";
import logoDark from "./images/logo-dark.svg";

import iconFB from "./images/icon-facebook.svg";
import iconYoutube from "./images/icon-youtube.svg";
import iconTwitter from "./images/icon-twitter.svg";
import iconPinterest from "./images/icon-pinterest.svg";
import iconInstagram from "./images/icon-instagram.svg";
import currency from "./images/image-currency.jpg";
import restaurant from "./images/image-restaurant.jpg";
import plane from "./images/image-plane.jpg";
import confetti from "./images/image-confetti.jpg";

function App() {
  return (
    <>
      <AppHeader />
      <Hero />
      <Features />
      <section className="articles">
        <div className="article__content container container--pall">
          <h2>Latest Articles</h2>

          <div className="article__grid">
            <a href="/" className="article__item">
              <div
                className="article__image"
                style={{ backgroundImage: `url(${currency})` }}
              ></div>
              <div className="article__text">
                <div className="article__author">By Claire Robinson</div>
                <div className="article__title">
                  Receive money in any currency with no fees
                </div>
                <div className="article__description">
                  The world is getting smaller and we’re becoming more mobile.
                  So why should you be forced to only receive money in a single
                  …
                </div>
              </div>
            </a>

            <a href="/" className="article__item">
              <div
                className="article__image"
                style={{
                  backgroundImage: `url(${restaurant})`,
                }}
              ></div>
              <div className="article__text">
                <div className="article__author">By Wilson Hutton</div>
                <div className="article__title">
                  Treat yourself without worrying about money
                </div>
                <div className="article__description">
                  Our simple budgeting feature allows you to separate out your
                  spending and set realistic limits each month. That means you …
                </div>
              </div>
            </a>

            <a href="/" className="article__item">
              <div
                className="article__image"
                style={{ backgroundImage: `url(${plane})` }}
              ></div>
              <div className="article__text">
                <div className="article__author">By Wilson Hutton</div>
                <div className="article__title">
                  Take your Easybank card wherever you go
                </div>
                <div className="article__description">
                  We want you to enjoy your travels. This is why we don’t charge
                  any fees on purchases while you’re abroad. We’ll even show you
                  …
                </div>
              </div>
            </a>

            <a href="/" className="article__item">
              <div
                className="article__image"
                style={{
                  backgroundImage: `url(${confetti})`,
                }}
              ></div>
              <div className="article__text">
                <div className="article__author">By Claire Robinson</div>
                <div className="article__title">
                  Our invite-only Beta accounts are now live!
                </div>
                <div className="article__description">
                  After a lot of hard work by the whole team, we’re excited to
                  launch our closed beta. It’s easy to request an invite through
                  the site …
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

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

      <div className="attribution">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by <a href="/">Your Name Here</a>.
      </div>
    </>
  );
}

export default App;
