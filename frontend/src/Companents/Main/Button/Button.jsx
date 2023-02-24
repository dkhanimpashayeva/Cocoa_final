import React from 'react'
import './Button.scss'
import { useNavigate } from 'react-router-dom';
const Button = () => {
    const navigate=useNavigate()
  const  getReadMore=()=>
{
    navigate("/pages/aboutus")
}






  return (
    <div>

<div className="buttons">
  <button className="blob-btn" onClick={getReadMore}>
Read More
    <span className="blob-btn__inner">
      <span className="blob-btn__blobs">
        <span className="blob-btn__blob"></span>
        <span className="blob-btn__blob"></span>
        <span className="blob-btn__blob"></span>
        <span className="blob-btn__blob"></span>
      </span>
    </span>
  </button>
  <br/>

<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
  <defs>
    <filter id="goo">
      <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10"></feGaussianBlur>
      <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7" result="goo"></feColorMatrix>
      <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
    </filter>
  </defs>
</svg>
    </div>
    </div>
  )
}

export default Button