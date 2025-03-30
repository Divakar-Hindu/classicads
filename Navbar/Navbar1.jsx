import React from "react";
import "./Navbar1.css";
import logo from "../image/logo-classiads.png";
import { FaSearch } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";
import { Link, Routes, Route } from "react-router-dom";

export default function Navbar1() {
  return (
    <>
      <div className="main-cont">
        <div className="logo-cont">
          <img src={logo} alt="logo" />
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Enter Keyword" />
        </div>
        <div className="search-icon">
          <FaSearch />
        </div>
        <div className="search-button">
          <button>Search</button>
        </div>
        <div className="nav-text">
          <div className="home-main">
            <Link to="/" className="home">
              Home
            </Link>
          </div>
          <div className="pages-main">
            <Link to="/page" className="pages">
              Pages{" "}
              <span style={{ marginLeft: "6px" }}>
                <FaAngleDown />
              </span>
            </Link>
          </div>
          <div className="contact-main">
            <Link to="/contact" className="pages">
              Contact
            </Link>
          </div>
          {/* <div>
            <Routes>
              <Route path="/" element={}/>
              <Route path="/page" element={}/>
              <Route path="/contact" element={}/>
            </Routes>
          </div> */}
        </div>
        <div className="sign-btn">
          <button>SIGN UP</button>
          <button>SIGN IN</button>
        </div>
        <div className="add-listing">
          <div className="add">
            <FaPlusCircle />
            <p>ADD LISTING</p>
          </div>
        </div>
      </div>
    </>
  );
}
