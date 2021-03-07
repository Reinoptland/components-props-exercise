import Footer from "./components/Footer";
import Articles from "./components/Articles";
import Features from "./components/Features";
import Hero from "./components/Hero";
import AppHeader from "./components/AppHeader";

function App() {
  return (
    <>
      <AppHeader />
      <Hero />
      <Features />
      <Articles />

      <Footer />
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
