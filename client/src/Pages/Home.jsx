import React from "react";
import Navbar from "../Components/Navbar";
import "../Style/Home.css";
import AboutUs from './AboutUs';
import Services from "./Services";
import Reviews from "./Reviews";
import Footer from "../Components/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="home" id="home">
        <div className="content">
          <span>Welcome</span>
          <h3>We make hair <br />beautiful & unique</h3>
        </div>
      </div>
      <div>
        <AboutUs />
        <Services />
        <Reviews />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
