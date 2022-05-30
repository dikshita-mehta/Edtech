import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Registeras.css"
function Registeras() {
    return (
      <div className="registeras">
        <Navbar />
           <h1>Register as :</h1> 
            <div class="container">
        <Link to="/Register" style={{ textDecoration: "none" }}>
          <h3 className="Register_page">Student</h3>
        </Link>
        <Link to="/Register" style={{ textDecoration: "none" }}>
          <h3 className="Register_page">Vendor</h3>
        </Link>
        <Link to="/Register" style={{ textDecoration: "none" }}>
          <h3 className="Register_page">Professional</h3>
        </Link>
        </div>
        <Footer />
      </div>
    );
  }
  
  export default Registeras;