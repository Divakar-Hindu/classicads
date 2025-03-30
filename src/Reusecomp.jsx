import React from "react";
import "./Reusecomp.css";

export default function Reusecomp(props) {
  return (
    <>
      <div className="reuse-main">
        <div className="reuse-cont1">
          <div className="reuse-text">
            <p>{props.text}</p>
          </div>
          <div className="reuse-btn">
            <button>
              <span className="reuse-btn-text">View all <br/>Locations</span>
            </button>
          </div>
        </div>
      </div>
      <div className="reuse-border1">
        <div className="reuse-border2">

        </div>
      </div>
    </>
  );
}
