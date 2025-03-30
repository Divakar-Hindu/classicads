import React from 'react'
import "./Navbarcomp.css"
import { FaChevronDown } from "react-icons/fa6";



export default function Navbarcomp(props) {
  return (
    <>
      <div className='nav2-comp'>
        {props.text} <span style={{marginLeft:"8px", fontSize:"9px"}}><FaChevronDown/></span>
      </div>
    </>
  )
}
