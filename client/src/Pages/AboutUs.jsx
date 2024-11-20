import React from "react";
import "../Style/AboutUs.css";
import aboutIcon1 from "../Assets/images/about-icon-1.png";
import aboutIcon2 from "../Assets/images/about-icon-2.png";
import aboutIcon3 from "../Assets/images/about-icon-3.png";
import aboutIcon from "../Assets/images/about-left.png";
import Navbar from "../Components/Navbar";

export default function AboutUs() {
  return (
    <>
      <div className="about" id="about">
        <h1 className="heading">about us</h1>

        <div className="row">
          <div className="image">
            <img src={aboutIcon} alt="IMG" />
          </div>

          <div className="content">
            <h3 className="title">We are a group of hair care specialists</h3>
            <p>
              At our haircare haven, we're not just creating products; we're
              crafting haircare magic tailored exclusively for YOU! Because we're
              obsessed with the beauty of individuality, we don't believe in
              one-size-fits-all. Your hair is your canvas, and we're the artists
              who get it! Say goodbye to generic haircare and hello to a
              personalized hair journey that's as unique as you are.
            </p>
            <p>
              Ready to experience haircare that's all about YOU? Let's make your
              hair dreams come true!
            </p>

            <div className="icons-container">
              <div className="icons">
                <img src={aboutIcon1} alt="IMG" />
                <h3>expertise in hair care</h3>
              </div>
              <div className="icons">
                <img src={aboutIcon2} alt="IMG" />
                <h3>quality ingredients</h3>
              </div>
              <div className="icons">
                <img src={aboutIcon3} alt="IMG" />
                <h3>Personalized service</h3>
              </div>
            </div>
          </div>
        </div>
      </div></>
  );
}

//  AboutUs;
