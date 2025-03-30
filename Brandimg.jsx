import React from "react";
import "./Brandimg.css";


export default function Brandimg(props) {
  return (
    <>
      <div className="brandimg-cont1">
        <div className="brandimg-cont2">
          <img src={props.brand}/>
        </div>
      </div>
    </>
  );
}
