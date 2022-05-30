import React from "react";
import edtech from "./images/edtech.jpg";
import "./Navbar.css";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <div className="Navbar">
      <div className="Navbar_left">
        <img src={edtech} alt="" />
        <h3>EVIRT EDTECH LIMITED</h3>
      </div>
      <div className="Navbar_right">
        <Link
          style={{
            color: "white",
            textDecoration: "none",
            marginRight: "1.25em",
          }}
          to="/"
        >
          <HomeIcon />
        </Link>
        <Link
          style={{
            color: "white",
            textDecoration: "none",
            paddingRight: 1.25,
            marginRight: "1.25em",
          }}
          to="/Catalogue"
        >
          <h4>CATALOGUE</h4>
        </Link>
        <Link
          style={{
            color: "white",
            textDecoration: "none",
            marginRight: "1.25em",
          }}
          to="/Login"
        >
          <h4>MY BOOKINGS</h4>
        </Link>
        
        <Link
          style={{
            color: "white",
            textDecoration: "none",
            marginRight: "1.25em",
          }}
          to="/Contact"
        >
          <h4>CONTACT</h4>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;