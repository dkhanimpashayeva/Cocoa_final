import React from "react";
import "./FaqAccordion.scss";
import Accordion from "./Accordion";
import { accordionData } from "./accordionData";
const FaqAccordion = () => {
  return (
    <div className="main-container">
          <div className="faq-accordion">

        <div className="col-xl-6 col-12 col-md-12">

          <div className="accordion">
            {accordionData.map(({ title, content }) => (
              <Accordion title={title} content={content} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqAccordion;
