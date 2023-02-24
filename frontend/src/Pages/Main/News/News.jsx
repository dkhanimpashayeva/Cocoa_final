import React from "react";
import ProductTypes from "../../../Companents/Main/About/AboutPage/ProductTypes";
import OurGallery from "../../../Companents/Main/OurGallery/OurGallery";
import ScrollToTop from "../../../Companents/ScrollToTop/ScrollToTop";
import BestTaste from "../../../Companents/ServiceCompanents/BestTaste/BestTaste";
import NewsTitle from "../../../Companents/Main/NewsTitle";
import MetaData from "../../../Companents/MetaData";
const News = () => {
  return (
    <div>
      <MetaData title="News" />

      <NewsTitle />
      <div className="main-container">
        <ProductTypes />

        <OurGallery />
        <ScrollToTop />
      </div>
    </div>
  );
};

export default News;
