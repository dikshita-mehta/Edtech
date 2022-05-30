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
import {useState} from 'react';



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
          <Route path="/Registeras" element={<Registeras />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;