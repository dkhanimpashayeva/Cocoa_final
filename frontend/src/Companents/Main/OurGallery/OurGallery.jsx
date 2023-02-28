import React from "react";
import "./OurGallery.scss";
import ImageGallery from "./ImageGallery";

const OurGallery = () => {
  return (
    <>
      <section className="gallery">
        <div className="main-container">
          <ImageGallery />
        </div>
      </section>
    </>
  );
};

export default OurGallery;
