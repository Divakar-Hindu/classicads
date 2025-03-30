import React, { useState } from "react";
import "./Navbar2.css";
import Navbarcomp from "./Navbarcomp";
import Createcontext from "../Createcontext";

export default function Navbar2() {
  const[value,setvalue] = useState("")
  return (
    <>
      <Createcontext.Provider>
        <div className="nav2-cont">
          <Navbarcomp text="Real Estate"/>
          <Navbarcomp text="Vehicles"/>
          <Navbarcomp text="Mobile Dekna h"/>
          <Navbarcomp text="Furniture"/>
          <Navbarcomp text="Services"/>
          <Navbarcomp text="Electronics"/>
          <Navbarcomp text="jobs"/>
          <Navbarcomp text="Fashion"/>
          <Navbarcomp text="Animal"/>
        </div>
      </Createcontext.Provider>
    </>
  );
}
