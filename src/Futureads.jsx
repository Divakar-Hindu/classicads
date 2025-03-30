import React from "react";
import "./Futureads.css";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

export default function Futureads(props) {
  return (
    <>
      <div className="future-main">
        <div className="future-main2">
          <div className="future-text">{props.text}</div>
          <div className="future-button">
            <div className="future-left">
              <FaAngleLeft />
            </div>
            <div className="future-right">
              <FaAngleRight />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
