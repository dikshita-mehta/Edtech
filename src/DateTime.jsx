import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import "./DateTime.css";
function Datetime() {
  return (
    <div className="datetime">
      <Navbar />
      <div className="container" style={{ paddingLeft: "40%" }}>
        <br />
        <h3>Choose date and time:</h3>
        <label for="dateofbirth">Date: </label>
        <input className="t" type="date" name="dateofbirth" id="dateofbirth" />
        <label for="time">Time: </label>
        <input className="t" type="time" name="dateofbirth" id="dateofbirth" />
        <br />
        <Link to="/Payment" style={{ textDecoration: "none" }}>
          <h3 className="datet">Pay</h3>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default Datetime;
