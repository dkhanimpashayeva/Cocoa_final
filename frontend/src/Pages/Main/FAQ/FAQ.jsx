import React from "react";
import FaqAccordion from "../../../Companents/Main/FAQ/FaqAccordion/FaqAccordion";
import FaqHero from "../../../Companents/Main/FAQ/FaqHero";
import ScrollToTop from "../../../Companents/ScrollToTop/ScrollToTop";
import MetaData from './../../../Companents/layout/Meta';

const FAQ = () => {
  return (
    <div>
      <MetaData title="FAQ" />

      <FaqHero />
      <FaqAccordion />
      <ScrollToTop />
    </div>
  );
};

export default FAQ;
