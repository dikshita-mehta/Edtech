import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";
import Login from "./Login";
import Mybooking from "./Mybooking";
import Register from "./Register";
import Catalogue from "./Catalogue";
import Footer from "./Footer";
import Registeras from "./Registeras";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Vendor from "./Vendor";
import Payment from "./Payment";
import DateTime from "./DateTime";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Contact" element={<Footer />} />
          <Route path="/Mybooking" element={<Mybooking />} />
          <Route path="/Catalogue" element={<Catalogue />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Vendor" element={<Vendor />} />
          <Route path="/Payment" element={<Payment />} />
          <Route path="/DateTime" element={<DateTime />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;