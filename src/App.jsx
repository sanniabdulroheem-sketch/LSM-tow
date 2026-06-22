import React from "react";
import { useDarkMode } from "./hooks/useDarkMode.js";
import { Navbar } from "./components/Navbar.jsx";
import { Hero } from "./components/Hero.jsx";
import { StatsBar } from "./components/StatsBar.jsx";
import { Services } from "./components/Services.jsx";
import { HowItWorks } from "./components/HowItWorks.jsx";
import { Coverage } from "./components/Coverage.jsx";
import { Pricing } from "./components/Pricing.jsx";
import { Testimonials } from "./components/Testimonials.jsx";
import { FleetCTA } from "./components/FleetCTA.jsx";
import { FAQ } from "./components/FAQ.jsx";
import { FinalCTA } from "./components/FinalCTA.jsx";
import { Footer } from "./components/Footer.jsx";
import { FloatingCTA } from "./components/FloatingCTA.jsx";

function App() {
  const [dark, setDark] = useDarkMode();

  return (
    <React.Fragment>
      <Navbar dark={dark} setDark={setDark} />
      <main>
        <Hero />
        <StatsBar />
        <Services />
        <HowItWorks />
        <Coverage />
        <Pricing />
        <Testimonials />
        <FleetCTA />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingCTA />
    </React.Fragment>
  );
}

export default App;
