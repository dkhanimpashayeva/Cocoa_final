import React from "react";
import { ImHome3} from "react-icons/im";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineClockCircle } from "react-icons/ai";
import {BsTwitter} from "react-icons/bs";
import {FaFacebook} from "react-icons/fa";
import {BsPinterest} from "react-icons/bs";
import {BsInstagram} from "react-icons/bs";



import {Link} from 'react-router-dom'
import './FooterTop.scss'
const FooterTop = () => {
  return (
    <div className="footer-top">
      <div className="main-container">
        <div className="row align-items-center">
          <div className="col-xl-3 col-12 col-md-6">
            <div className="footer-logo">
              <img
                src="https://cdn.shopify.com/s/files/1/0436/0932/5722/files/logo_x50@2x.png?v=1646113303"
                alt="footer-logo"
              />
              <ul>
                <li className="footer-home">
            <ImHome3  className="footer-icon footer-home-icon"/>
                  <span >
                    No: 58 A, East Madison 
                    {/* Street, Baltimore  MD, USA 4508 */}
                  </span>
           
                </li>
                <li>
               <div className="d-felx align-items-center">
               <BsFillTelephoneFill className="footer-icon"/>
                  <span>0000 - 123 - 456789</span>
               </div>
                </li>
                <li>
             <div className="d-flex align-items-center">
             <AiOutlineClockCircle  className="footer-icon"/>
                  <span>info@example.com</span>
             </div>
                </li>
                <li>
                  <div className="social-contact">
                    <BsTwitter className="social-item"/>
                    <FaFacebook className="social-item"/>
                    <BsPinterest className="social-item"/>
                    <BsInstagram className="social-item"/>
                  </div>
                </li>
              </ul>
            </div>
          </div>
<div className="col-xl-3 col-12 col-md-6">
    <ul>
    <h3> Support </h3>

        <li><Link to='#'>Deliveries</Link></li>
        <li><Link to='#'>Orders</Link></li>
        <li><Link to='#'>Careers</Link></li>
        <li><Link to='#'>Refund & Return</Link></li>
        <li><Link to='#'>Portfolio</Link></li>

    </ul>
</div>
<div className="col-xl-3 col-12 col-md-6">
    <ul>
    <h3>Information </h3>

        <li><Link to='#'>Search Terms</Link></li>
        <li><Link to='#'>Advanced Search</Link></li>
        <li><Link to='#'>Help & Faq's</Link></li>
        <li><Link to='#'>Store Location</Link></li>
        <li><Link to='#'>Order & Return</Link></li>

    </ul>
</div>
<div className="col-xl-3 col-12 col-md-6">
    <ul>
    <h3> Help</h3>

        <li><Link to='#'>Search</Link></li>
        <li><Link to='#'>Help</Link></li>
        <li><Link to='#'>Information</Link></li>
        <li><Link to='#'>Privancy Policy</Link></li>
        <li><Link to='#'>Shipping Details</Link></li>

    </ul>
</div>

        </div>
      </div>
    </div>
  );
};

export default FooterTop;
