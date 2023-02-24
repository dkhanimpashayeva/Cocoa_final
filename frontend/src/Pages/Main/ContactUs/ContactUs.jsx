import React from "react";
import ContactForm from "../../../Companents/Main/Contact/ContactForm/ContactForm";
import ContactHero from "../../../Companents/Main/Contact/ContactHero/ContactHero";
import Contact from "../../../Companents/Main/Contact/ContactWays/Contact";
import MetaData from "../../../Companents/MetaData";
import ScrollToTop from "../../../Companents/ScrollToTop/ScrollToTop";
const ContactUs = () => {
  return (
    <div>
      <MetaData title="Contact" />

      <ContactHero />

      <Contact />
      <ContactForm />
      <ScrollToTop />
    </div>
  );
};

export default ContactUs;
