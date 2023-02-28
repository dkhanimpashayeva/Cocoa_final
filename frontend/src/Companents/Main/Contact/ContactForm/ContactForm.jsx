import React from "react";
import "./ContactForm.scss";
const ContactForm = () => {
  return (
    <section className="contact-form">
      <div className="main-container">
        <div className="contact-form-title">
          <h2>Contact Form</h2>
        </div>
        <div className="contact-form-wrapper">
       <form>
       <div className="row">
            <div className="col-xl-4 col-12 col-md-4">
              <input type="text" placeholder="Name" />
            </div>
            <div className="col-xl-4 col-12 col-md-4">
              <input type="text" placeholder="Email" />
            </div>
            <div className="col-xl-4 col-12 col-md-4">
              <input type="text" placeholder="Phone" />
            </div>
            <div className="col-xl-12 col-12 col-md-12">
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Message"
              />
              \
            </div>
            <input type="submit"  className="submit"/>
          </div>
       </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
