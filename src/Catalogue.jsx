import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import experiment from "./images/experiment.png";
import background from "./images/background.jpg";
import chemistry from "./images/chemistry.jpg";
import "./Information.css";

import "./Catalogue.css";
import Dropdown from "./Dropdown";

function Catalogue() {
  return (
    <div className="catalogue">
      <Navbar />
      <div className="wrapper">
        <div className="wrapper_heading">
          <img src={experiment} alt="experiment" />
          <h1>Experiment details</h1>
        </div>
        <div className="drop">
          <Dropdown />
        </div>

        <div className="cols">
          <div className="col" ontouchstart="this.classList.toggle('hover');">
            <div className="container">
              <div
                className="front"
                style={{ backgroundImage: `url(${background})` }}
              >
                <div className="inner">
                  <p>Title</p>
                </div>
              </div>
              <div className="back">
                <div className="inner">
                  <p>Details and price</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col" ontouchstart="this.classList.toggle('hover');">
            <div className="container">
              <div
                className="front"
                style={{
                  backgroundImage: `url(${chemistry})`,
                }}
              >
                <div className="inner">
                  <p>Title</p>
                </div>
              </div>
              <div className="back">
                <div className="inner">
                  <p>Details and price</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col" ontouchstart="this.classList.toggle('hover');">
            <div className="container">
              <div
                className="front"
                style={{
                  backgroundImage: `url(${background})`,
                }}
              >
                <div className="inner">
                  <p>Title</p>
                </div>
              </div>
              <div className="back">
                <div className="inner">
                  <p>Details and price</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col" ontouchstart="this.classList.toggle('hover');">
            <div className="container">
              <div
                className="front"
                style={{
                  backgroundImage: `url(${chemistry})`,
                }}
              >
                <div className="inner">
                  <p>Title</p>
                </div>
              </div>
              <div className="back">
                <div className="inner">
                  <p>Details and price</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col" ontouchstart="this.classList.toggle('hover');">
            <div className="container">
              <div
                className="front"
                style={{
                  backgroundImage: `url(${background})`,
                }}
              >
                <div className="inner">
                  <p>Title</p>
                </div>
              </div>
              <div className="back">
                <div className="inner">
                  <p>Details and price</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col" ontouchstart="this.classList.toggle('hover');">
            <div className="container">
              <div
                className="front"
                style={{
                  backgroundImage: `url(${chemistry})`,
                }}
              >
                <div className="inner">
                  <p>Title</p>
                </div>
              </div>
              <div className="back">
                <div className="inner">
                  <p>Details and price</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col" ontouchstart="this.classList.toggle('hover');">
            <div className="container">
              <div
                className="front"
                style={{
                  backgroundImage: `url(${background})`,
                }}
              >
                <div className="inner">
                  <p>Title</p>
                </div>
              </div>
              <div className="back">
                <div className="inner">
                  <p>Details and price</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col" ontouchstart="this.classList.toggle('hover');">
            <div className="container">
              <div
                className="front"
                style={{
                  backgroundImage: `url(${chemistry})`,
                }}
              >
                <div className="inner">
                  <p>Title</p>
                </div>
              </div>
              <div className="back">
                <div className="inner">
                  <p>Details and price</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Catalogue;
