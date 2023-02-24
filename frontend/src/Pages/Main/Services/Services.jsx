import React from "react";
import MetaData from "../../../Companents/MetaData";
import ScrollToTop from "../../../Companents/ScrollToTop/ScrollToTop";
import BestTaste from "../../../Companents/ServiceCompanents/BestTaste/BestTaste";
import PureChocalate from "../../../Companents/ServiceCompanents/PureChocalate/PureChocalate";
import ServiceHero from "../../../Companents/ServiceCompanents/ServiceHero/ServiceHero";
import Specialites from "../../../Companents/ServiceCompanents/Specialites/Specialites";

const Services = () => {
  return (
    <div>
      <MetaData title="Services" />

      <ServiceHero />
      <PureChocalate />
      <Specialites />
      <BestTaste />
      <ScrollToTop />
    </div>
  );
};

export default Services;
