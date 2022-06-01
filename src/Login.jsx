import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";
import { authentication } from "./firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

function Login() {
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(authentication, provider)
      .then((re) => {
        console.log(re);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="Login">
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>

      <form>
        <h3>
          <br />
          <br /> Register here as :
        </h3>
        <Link to="/Register" style={{ textDecoration: "none" }}>
          <h3 className="Register_page">Student</h3>
        </Link>
        <Link to="/Register" style={{ textDecoration: "none" }}>
          <h3 className="Register_page">Vendor</h3>
        </Link>
        <Link to="/Register" style={{ textDecoration: "none" }}>
          <h3 className="Register_page">Professional</h3>
        </Link>

        <h3>Login Here</h3>

        <label for="username">Username</label>
        <input type="text" placeholder="Email or Phone" className="username" />

        <label for="password">Password</label>
        <input type="password" placeholder="Password" className="password" />

        <button onClick={signInWithGoogle}>Log In</button>

        <div className="social">
          <div className="go">
            <GoogleIcon /> Google
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
