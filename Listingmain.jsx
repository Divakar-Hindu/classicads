import React from "react";
import "./Listingmain.css"
import Listingrow1 from "./Listingrow1";
import Listingrow2 from "./Listingrow2";

export default function Listingmain() {
  return (
    <>
      <div className="listing-block1">
        <Listingrow1/>
      </div>
      <div className="listing-block2">
        <Listingrow2/>
      </div>
    </>
  );
}
