import React from "react";
import "./Locations.css";
import usa from "./image/locations/usa.jpg";
import uk from "./image/locations/uk.jpg";
import nepal from "./image/locations/nepal.jpg";
import france from "./image/locations/france.jpg";
import canada from "./image/locations/canada-1.jpg";
import bharat from "./image/locations/bharat.jpg";

export default function Locations() {
  return (
    <>
      <div className="location-maincont">
        <div className="location-parent1">
          <div className="location-cont3">
            <div className="location-cont3-1">
              <div className="location-cont3-1-01">
                <img src={usa} alt="" />
                <span className="usa-overlay">
                  <h1 className="listing">31 Listings</h1>
                </span>
              </div>

              <div className="location-cont3-1-02">
                <img src={canada} alt="" />
              </div>
            </div>
            <div className="location-cont3-2">
              <img src={uk} alt="" />
            </div>
          </div>
          <div className="location-cont4">
            <div className="location-cont4-1">
              <img src={nepal} alt="" />
            </div>
            <div className="location-cont4-2">
              <div className="location-cont4-2-01">
                <img src={france} alt="" />
              </div>
              <div className="location-cont4-2-02">
                <img src={bharat} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

//   lovejeet property

// <div className="location-maincont">
// <div className="location-parent1">
//   <div className="box1"></div>
//   <div className="box2"></div>
//   <div className="box3"></div>
// </div>
// <div className="location-parent2">
//   <div className="box4"></div>
//   <div className="last-div">
//     <div className="box5"></div>
//     <div className="box6"></div>
//   </div>
// </div>
// </div>
