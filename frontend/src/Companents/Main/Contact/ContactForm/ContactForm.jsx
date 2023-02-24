import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./ContactForm.scss";
const ContactForm = () => {
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_x7t6yjs",
        "template_xrfr70n",
        form.current,
        "veoZKtMez-z-GTgJU"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      form.current.reset();

  };

  return (
    <section className="contact-form">
      <div className="main-container">
        <div className="contact-form-title">
          <h2>Contact Form</h2>
        </div>
        <div className="contact-form-wrapper">
          <form ref={form} onSubmit={sendEmail}>
            <div className="row">
              <div className="col-xl-6 col-12 col-md-6">
                <input placeholder="Name" type="text" name="user_name" />
              </div>
              <div className="col-xl-6 col-12 col-md-6">
                <input placeholder="Email" type="email" name="user_email" />
              </div>
            
              <div className="col-xl-12 col-12 col-md-12">
                <textarea
                 name="message" 
                  cols="30"
                  rows="10"
                  placeholder="Message"
                />
              </div>
              <input className="submit" type="submit" value="Send" />
            </div>
          </form>
        </div>
      </div>
    </section>
    


    

  );
};

export default ContactForm;
