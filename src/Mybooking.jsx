import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Mybooking.css";
function Mybooking() {
  return (
    <div className="mybooking">
      <Navbar />
      <div className="mybooking_info" style={{ backgroundColor: "#f7f8fa" }}>
        <h1>MY BOOKING</h1>
        <div className="mybooking_button">
          <button className="booking_button1">ONGOING</button>
          <button className="booking_button2">HISTORY</button>
        </div>
        <div className="mybooking_service">
          <p>You don't have any active projects right now</p>
          <button className="service" type="submit">
            BOOK A SERVICE
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Mybooking;
