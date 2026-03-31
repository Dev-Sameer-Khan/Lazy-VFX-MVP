import React from "react";
import Navbar from "./components/layout/Navbar";
import Hero from "./sections/Hero";
import BG from "./components/layout/BG";
import Footer from "./components/layout/Footer";
import HowToUSe from "./sections/HowToUSe";
import Features from "./sections/Features";
import Examples from "./sections/Examples";
import Start from "./sections/Start";
import Cursor from "./components/layout/Cursor";


const App = () => {
  return (
    <main className="w-full relative overflow-hidden bg-[#020202] text-white">
      <BG />
      <div className="relative z-10">
        <Cursor/>
        <Navbar />
        <Hero />
        <HowToUSe />
        <Features />
        <Examples />
        <Start />
      </div>
      {/* <Footer/> */}
    </main>
  );
};

export default App;
