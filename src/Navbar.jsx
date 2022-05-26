import React from "react";
import edtech from "./images/edtech.jpg";
import "./Navbar.css";
import HomeIcon from "@mui/icons-material/Home";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="Navbar_left">
        <img src={edtech} alt="" />
        <h3>EVIRT EDTECH LIMITED</h3>
      </div>
      <div className="Navbar_right">
       <a href="index.html"><HomeIcon /></a> 

        <h4>VENDOR</h4>
        <h4>MY BOOKINGS</h4>
        <h4>LOGIN</h4>
        <h4>CONTACT</h4>
      </div>
    </div>
  );
}

export default Navbar;
