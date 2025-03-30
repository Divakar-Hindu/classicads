import React from 'react'
import "./Fixed.css"
import { FaShoppingCart } from "react-icons/fa";


export default function Fixed() {
  return (
    <>
      <div className='fixed-cont'>
        <button><span><FaShoppingCart/></span> Buy Now ($49)</button>
      </div>
    </>
  )
}
