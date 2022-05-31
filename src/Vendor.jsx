import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Vendor.css";
function Vendor() {
  return (
    <div className="Vendor">
      <Navbar />
      <div className="cards">
        <div className="card">
          <h2 className="card-title">Product 1</h2>
          <img
            src="https://cdn.corporatefinanceinstitute.com/assets/products-and-services-1024x1024.jpeg"
            alt=""
          />
          <p className="card-desc">All Details about product</p>
        </div>
        <div className="card">
          <h2 className="card-title">Product 2</h2>
          <img
            src="https://cdn.corporatefinanceinstitute.com/assets/products-and-services-1024x1024.jpeg"
            alt=""
          />
          <p className="card-desc">All Details about product</p>
        </div>
        <div className="card">
          <h2 className="card-title">Product 3</h2>
          <img
            src="https://cdn.corporatefinanceinstitute.com/assets/products-and-services-1024x1024.jpeg"
            alt=""
          />
          <p className="card-desc">All Details about product</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Vendor;
