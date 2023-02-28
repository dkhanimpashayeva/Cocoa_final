import React from "react";
import "./AboutPage.scss";
const AboutPage = () => {
  return (
    <>
      <section className="about-page">
        <div className="about-page-title">
          <h1>ABOUT</h1>
          <span>Home / About</span>
        </div>
      </section>
      <section className="about-images">
        <div className="main-container">
          <div className="row ">
            <div className="col-xl-6 col-12 col-md-12 ">
              <img
                className="about-main-image"
                src="https://cdn.shopify.com/s/files/1/0436/0932/5722/files/about_e5c9f743-b988-4e5f-be8a-b7549f2a702c.jpg?v=1646645449"
                alt="cookies"
              />
            </div>
            <div className="col-xl-6 col-12 col-md-12">
              <div className="row">
                <div className="col-xl-12 col-md-6">
                  <img
                    src="https://cdn.shopify.com/s/files/1/0436/0932/5722/files/last.jpg?v=1646119846"
                    alt=""
                  />
                </div>
                <div className="col-xl-12 col-md-6">
                  <img
                    src="https://cdn.shopify.com/s/files/1/0436/0932/5722/files/blog-10.jpg?v=1613187576"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
