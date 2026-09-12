import Hero from "../components/landingPage/hero";
import About from "../components/landingPage/about";
import Features from "../components/landingPage/features";
import Roles from "../components/landingPage/roles";
import Journey from "../components/landingPage/journey";
import FinalCta from "../components/landingPage/finalCta";
import Footer from "../components/landingPage/footer";

function Home() {
  return (
    <>
      <Hero />

      <About />

      <div className="manus-sections">
        <Features />
      </div>

      <Roles />

      <div className="manus-sections">
        <Journey />
        <FinalCta />
        <Footer />
      </div>
    </>
  );
}

export default Home;