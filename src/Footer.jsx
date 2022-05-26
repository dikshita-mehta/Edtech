import React from "react";
import "./Footer.css";
import edtech from "./images/edtech.jpg";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import PhoneIcon from '@mui/icons-material/Phone';
function Footer() {
  return (
    <div className="footer">
      <div class="l-footer">
        <h1>
          <img src={edtech} alt="" />
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam
          atque recusandae in sit sunt molestiae aliquid fugit. Mollitia eaque
          tempore iure sit nobis? Vitae nemo, optio maiores numquam quis
          recusandae.
        </p>
      </div>
      <ul class="r-footer">
        <li>
          <h2>Social</h2>
          <ul class="box">
            <li>
              <a href="#"><FacebookIcon/></a>
            </li>
            <li>
              <a href="#"><TwitterIcon/></a>
            </li>
            <li>
              <a href="#"><PinterestIcon/></a>
            </li>
            <li>
              <a href="#">Dribbble</a>
            </li>
          </ul>
        </li>
        <li class="features">
          <h2>Information</h2>
          <ul class="box h-box">
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Sales</a>
            </li>
            <li>
              <a href="#">Tickets</a>
            </li>
            <li>
              <a href="#">Certifications</a>
            </li>
            <li>
              <a href="#">Customer Service</a>
            </li>
          </ul>
        </li>
        <li>
          <h2>Legal</h2>
          <ul class="box">
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Use</a>
            </li>
            <li>
              <a href="#">Contract</a>
            </li>
          </ul>
        </li>
      </ul>
      <div class="b-footer">
        <p>All rights reserved by EVIRT EDTECH LIMITED 2022 </p>
      </div>
    </div>
  );
}

export default Footer;

