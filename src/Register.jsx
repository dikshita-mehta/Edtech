import React from "react";
import "./Register.css";

function Register() {
  return (
    <div class="container">
        <div class="left">
            <div class="header">
                <h2 class="animation a1">Register</h2>
                <h4 class="animation a2">Sign Up by entering your details</h4>
            </div>
            <div class="form">
            <input type="text" class="form-field animation a3" placeholder="First Name"/>
            <input type="text" class="form-field animation a3" placeholder="Contact No."/>
            <input type="text" class="form-field animation a3" placeholder="Class"/>
                <input type="email" class="form-field animation a3" placeholder="Email Address"/>
                    <input type="password" class="form-field animation a4" placeholder="Password"/>
                        <button class="animation a6">SIGN UP</button>
            </div>
        </div>
        <div class="right"></div>
  </div>
  );
}
export default Register;
