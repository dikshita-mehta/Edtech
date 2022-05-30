import React from "react";
import "./Register.css";
import Mybooking from "./Mybooking";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="contain">
      <div className="left">
        <div className="header">
          <h2 className="animation a1">Register</h2>

          <h4 className="animation a2">Sign Up by entering your details</h4>
        </div>
        <div className="form">
          <input
            type="text"
            className="form-field animation a3"
            placeholder="First Name"
          />
          <input
            type="text"
            className="form-field animation a3"
            placeholder="Contact No."
          />
          <input
            type="text"
            className="form-field animation a3"
            placeholder="Class"
          />
          <input
            type="email"
            className="form-field animation a3"
            placeholder="Email Address"
          />
          <input
            type="password"
            className="form-field animation a4"
            placeholder="Password"
          />
          <Link to="/Mybooking">
            <button className="animation a6">SIGN UP</button>
          </Link>
        </div>
      </div>
      <div className="right"></div>
    </div>
  );
}
export default Register;