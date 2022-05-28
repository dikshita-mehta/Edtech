import React from "react";
import Information from "./Information";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Home() {
  return (
    <div className="Home">
      <Navbar />
      <Information />
      <Footer />
    </div>
  );
}

export default Home;