import React from "react";
import "./CakesSweets.scss";
import MovingText from "react-moving-text";

const CakesSweets = () => {
  return (
    <section className="cakes-sweets">
      <div className="main-container">
        <div className="cakes-sweets-title">
          <h2> Cakes & Sweets</h2>
        </div>
        <div className="row ">
          <div className="col-xl-4 col-12 col-md-6">
            <MovingText
              type="fadeInFromBottom"
              duration="900ms"
              delay="0s"
              direction="normal"
              timing="ease"
              iteration="1"
              fillMode="none"
            >
              <div className="cakes-card-wrapper">
                <div className="cakes-card-title">
                  <h3>
                    Pie <span>makes</span>
                    <br />
                    <span>everyone </span> happy
                  </h3>
                </div>
                <img
                  src="https://cdn.shopify.com/s/files/1/0436/0932/5722/files/img-1_1920X_1730c68d-f7b7-4e3d-8564-c1e06f6ef142.jpg?v=1646119713"
                  alt=""
                />
              </div>
            </MovingText>
          </div>

          <div className="col-xl-4 col-12 col-md-6">
            <MovingText
              type="fadeInFromBottom"
              duration="900ms"
              delay="0s"
              direction="normal"
              timing="ease"
              iteration="1"
              fillMode="none"
            >
              <div className="cakes-card-wrapper">
                <img
                  src="https://cdn.shopify.com/s/files/1/0436/0932/5722/files/img-2_1920X_f1c4a78b-ffb8-4a0b-99cd-6393f6ec205a.jpg?v=1646119741"
                  alt=""
                />
              </div>
            </MovingText>
          </div>
          <div className="col-xl-4 col-12 col-md-6">
            <MovingText
              type="fadeInFromBottom"
              duration="900ms"
              delay="0s"
              direction="normal"
              timing="ease"
              iteration="1"
              fillMode="none"
            >
              <div className="cakes-card-wrapper">
                <img
                  src="https://cdn.shopify.com/s/files/1/0436/0932/5722/files/img-3_1920X_2bfee5da-7c79-4f7f-b20a-e13632e21261.jpg?v=1646119766"
                  alt=""
                />
              </div>
            </MovingText>
          </div>
          <div className="col-xl-4 col-12 col-md-6">
            <MovingText
              type="fadeInFromBottom"
              duration="900ms"
              delay="0s"
              direction="normal"
              timing="ease"
              iteration="1"
              fillMode="none"
            >
              <div className="cakes-card-wrapper">
                <img
                  src="https://cdn.shopify.com/s/files/1/0436/0932/5722/files/banner01_63d8445d-7292-4e05-b5a0-a1c34d237abb.jpg?v=1646642332"
                  alt="cacao"
                />
              </div>
            </MovingText>
          </div>
          <div className="col-xl-8 col-12 col-md-12">
            <MovingText
              type="fadeInFromBottom"
              duration="900ms"
              delay="0s"
              direction="normal"
              timing="ease"
              iteration="1"
              fillMode="none"
            >
              <div className="cakes-card-wrapper">
                <img
                  src="https://cdn.shopify.com/s/files/1/0436/0932/5722/files/banner02.jpg?v=1646643849"
                  alt="cacao"
                />
              </div>
            </MovingText>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CakesSweets;
