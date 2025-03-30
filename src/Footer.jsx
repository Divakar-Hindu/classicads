import React from "react";
import "./Footer.css";
import logo from "./image/footer-logo.png";
import { IoLogoFacebook } from "react-icons/io5";
import { IoLogoTwitter } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoYoutube } from "react-icons/io";

export default function Footer() {
  return (
    <>
      <div className="footer1">
        <div className="footer1-textcont">
          <div className="footer1-textcont-list1">
            <img src={logo} />
            <div className="footer-p">
              <p>
                Lorem ipsum dolor sit amet, consect etur adi pisicing elit sed
                do eiusmod tempor incididunt ut labore.
              </p>
            </div>
          </div>
          <div className="footer1-textcont-list2">
            <div className="heading">
              <h3>Explore</h3>
            </div>
            <div className="footer-li">
              <li>My Dashboard </li>
              <li>submit-listing</li>
              <li>Login</li>
              <li>Register</li>
              <li>Our News</li>
              <li> Contact Us</li>
            </div>
          </div>
          <div className="footer1-textcont-list2">
            <div className="heading">
              <h3>Top Categories</h3>
            </div>
            <div className="footer-li">
              <li>Real Estate</li>
              <li>Mobile Phones</li>
              <li>Electronics</li>
              <li>Vehicles</li>
              <li>Pets</li>
              <li> Animal</li>
            </div>
          </div>
          <div className="footer1-textcont-list2">
            <div className="heading">
              <h3>Top Locations</h3>
            </div>
            <div className="footer-li">
              <li>United States </li>
              <li>canada</li>
              <li>Nepal</li>
              <li>Bharat</li>
              <li>United Kingdom</li>
              <li> Australia</li>
            </div>
          </div>
          <div className="footer1-textcont-list2">
            <div className="heading">
              <h3>Important Links</h3>
            </div>
            <div className="footer-li">
              <li>Help Desk</li>
              <li>About</li>
              <li>Refund and Returns</li>
              <li>Terms of Services</li>
              <li>Site Map</li>
              <li> Posting Policy</li>
            </div>
          </div>
          <div className="footer1-textcont-newse">
            <div className="heading">
              <h3>Newsletter</h3>
            </div>
            <div className="footer-li">
              <p>88 Broklyn Golden Street, New York. USA</p>
              <p className="pppppp">needhelp@designinvento.net</p>
              <input type="text" placeholder="Enter Email Address" />
              <button>SUBSCRIBE</button>
            </div>
          </div>
        </div>
      </div>
      <div className="footer2">
        <div className="footer2-cont1">
          <p>© Copyright 2023 by Designinvento.net</p>
        </div>
        <div className="footer2-cont2">
          <div className="footer2-icon">
            <IoLogoFacebook />
          </div>
          <div className="footer2-icon">
            <IoLogoTwitter />
          </div>
          <div className="footer2-icon">
            <IoLogoInstagram />
          </div>
          <div className="footer2-icon">
            <IoLogoYoutube />
          </div>
        </div>
      </div>
    </>
  );
}
