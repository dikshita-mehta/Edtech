import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import GoogleIcon from '@mui/icons-material/Google';

function Login() {
  return (
    <div className="Login">
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>

      <form>
        <Link to="/Registeras" style={{ textDecoration: "none" }}>
          <h3 className="Register_page">Don't have an account?<br/> Register here</h3>
        </Link>
        <h3>Login Here</h3>

        <label for="username">Username</label>
        <input type="text" placeholder="Email or Phone" className="username" />

        <label for="password">Password</label>
        <input type="password" placeholder="Password" className="password" />

        <button>Log In</button>
        <div className="social">
          <div className="go">
            <GoogleIcon/> Google
          </div>
          <div className="fb">
            <i className="fab fa-facebook"></i> Facebook
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;