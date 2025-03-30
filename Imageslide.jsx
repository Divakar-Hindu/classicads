import React from "react";
import "./Imageslide.css";

export default function Imageslide(props) {
  return (
    <>
      <div className="imageslide-parent">
        <div className="main-slide-div">
          <div className="imgslide-cont1">
            <img src={props.img} />
            <div className="slide-text">
              <span className="slide-text1">{props.text1}</span><br/>
              <span className="slide-text2">{props.text2}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
