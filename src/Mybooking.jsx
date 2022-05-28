import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Mybooking.css";
function Mybooking() {
  return (
    <div className="mybooking" style={{backgroundColor:'#66a3ff'}}>
      <Navbar />
      <div class="container">
<div class="card">
  <div class="face face1">
    <div class="content">
      <span class="stars"></span>
      <h2 class="java">Title</h2>
      <p class="java">Details about booking 1</p>
    </div>
  </div>
  <div class="face face2">
    <h2>Booking 1</h2>
  </div>
</div>

<div class="card">
  <div class="face face1">
    <div class="content">
      <span class="stars"></span>
      <h2 class="python">Title</h2>
      <p class="python">Details about booking 2</p>
    </div>
  </div>
  <div class="face face2">
    <h2>Booking 2</h2>
  </div>
</div>

<div class="card">
  <div class="face face1">
    <div class="content">
      <span class="stars"></span>
      <h2 class="cSharp">Title</h2>
      <p class="cSharp">Details about booking 3</p>
    </div>
  </div>
  <div class="face face2">
    <h2>Booking 3</h2>
  </div>
</div>



</div>

      <Footer/>
    </div>
  );
}

export default Mybooking;