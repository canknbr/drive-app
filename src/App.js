import React from "react";
import Navbar from "./components/Navbar";
import Driver from "./components/Driver";
import Find from "./components/Find";
import Hero from "./components/Hero";
import Luxury from "./components/Luxury";
import Footer from "./components/Footer";
const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Find />
      <Driver />
      <Luxury />
      <Footer />
    </>
  );
};

export default App;
