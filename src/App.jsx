import React from "react";
import { AuroraBackground } from "./components/portfolio/AuroraBackground";
import { Navbar } from "./components/portfolio/Navbar";
import { Hero } from "./components/portfolio/Hero";
import { Founders } from "./components/portfolio/Founders";
import { Services } from "./components/portfolio/Services";
import { Projects } from "./components/portfolio/Projects";
import { AIReceptionist } from "./components/portfolio/AIReceptionist";
import { Industries } from "./components/portfolio/Industries";
import { Stats } from "./components/portfolio/Stats";
import { Contact } from "./components/portfolio/Contact";
import { Footer } from "./components/portfolio/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen text-white font-sans antialiased">
      <AuroraBackground />
      <Navbar />
      <main>
        <Hero />
        <Founders />
        <Services />
        <Projects />
        <AIReceptionist />
        <Industries />
        <Stats />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
