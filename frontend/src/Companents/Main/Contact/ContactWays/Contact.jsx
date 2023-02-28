import React from "react";
import './Contact.scss'
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsFillEnvelopeFill } from "react-icons/bs";

import { IoIosSend } from "react-icons/io";

const Contact = () => {
  return (
    <section className="contact">
      <div className="main-container">
        <div className="row align-items-center">
          <div className="col-xl-4">
            <div className="contact-card">
<div className="contact-icon">
<BsFillTelephoneFill  />

</div>
              <div className="contact-info">
                <h4>Phone</h4>
                <span>0803 - 080 - 3081</span>
                <br />
                <span>0803 - 080 - 3082</span>
              </div>
            </div>
          </div>
          <div className="col-xl-4">
            <div className="contact-card">
              <div className="contact-icon">
              <BsFillEnvelopeFill/>

              </div>
              <div className="contact-info">
                <h4>Email</h4>
                <span>mail@example.com</span>
                <br />
                <span>support@example.com</span>
              </div>
            </div>
          </div>
          <div className="col-xl-4">
            <div className="contact-card">
              <div className="contact-icon">
              <IoIosSend/>

              </div>
              <div className="contact-info">
                <h4>Address</h4>
                <span>
                  No: 58 A, East Madison Street,
                  <br />
                  Baltimore, MD, USA 4508
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
