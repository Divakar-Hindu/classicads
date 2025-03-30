import React from "react";
import "./Brands.css";
import Brandimg from "./Brandimg";
import brand1 from "./image/brands/brend-1.png";
import brand2 from "./image/brands/brend-2.png";
import brand3 from "./image/brands/brend-3.png";
import brand4 from "./image/brands/brend-4.png";
import brand5 from "./image/brands/brend-5.png";
import brand6 from "./image/brands/brend-6.jpg";
import brand7 from "./image/brands/brend-7.jpg";

export default function Brands() {
  return (
    <>
      <div className="brand-cont1">
        <div className="brand-cont2">
          <Brandimg brand={brand1} />
          <Brandimg brand={brand2} />
          <Brandimg brand={brand3} />
          <Brandimg brand={brand4} />
          <Brandimg brand={brand5} />
        </div>
      </div>
      <div className="brand-cont3">
        <div className="brand-cont4">
          <img src={brand6} alt="" />
          <img src={brand7} alt="" />
        </div>
      </div>
    </>
  );
}
