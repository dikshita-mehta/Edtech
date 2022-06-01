import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Mybooking.css";
import { Link } from "react-router-dom";
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
          <Link to="/Catalogue">
            <button className="service" type="submit">
              BOOK A SERVICE
            </button>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Mybooking;