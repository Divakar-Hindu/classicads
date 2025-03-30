import React from "react";
import "./Imageslidemain.css";
import img1 from "./image/animation/vehicle.png";
import img2 from "./image/animation/realestate.png";
import img3 from "./image/animation/furniture.png";
import img4 from "./image/animation/Animals.png";
import img5 from "./image/animation/mobilephone.png";
import img6 from "./image/animation/Jobs.png";
import Imageslide from "./Imageslide";

export default function Imageslidemain() {
  return (
    <>
      <div className="main-slide-cont1">
        <div className="main-slide-cont2">
          <Imageslide img={img1} text1="Vehicles" text2="11 Listings"/>
          <Imageslide img={img2} text1="Real Estate" text2="9 Listings"/>
          <Imageslide img={img3} text1="Furniture" text2="7 Listings"/>
          <Imageslide img={img5} text1="Mobile Phones" text2="6 Listings"/>
          <Imageslide img={img4} text1="Animal" text2="3 Listings"/>
          <Imageslide img={img6} text1="Jobs" text2="4 Listings"/>
        </div>
      </div>
    </>
  );
}
