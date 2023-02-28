import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { BsTwitter } from "react-icons/bs";
import "./OurTeams.scss";
const OurTeams = () => {
  return (
    <section className="ourteams">
      <div className="main-container">
        <div className="ourteams-title">
          <h2>Our Teams</h2>
        </div>
        <div className="our-teams-wrapper">
          <div className="row">
            <div className="col-xl-3 col-md-6 col-12">
              <div className="our-teams-card">
                <img
                  src="https://cdn.shopify.com/s/files/1/0436/0932/5722/files/team-4_3eef25bd-4523-4711-ac2e-81b22524c7ed_800x.jpg?v=1646204947"
                  alt="teams"
                />
                <div className="contact-team-box">
                  <FaFacebook className="contact-team" />
                  <BsTwitter className="contact-team" />
                  <FaPinterest className="contact-team" />
                  <TfiYoutube className="contact-team" />
                </div>
                <h4>Brooke Herrera</h4>
                <span>Founder</span>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-12">
              <div className="our-teams-card">
                <img
                  src="https://cdn.shopify.com/s/files/1/0436/0932/5722/files/team-3_fec6a779-ce9a-4514-8cd8-cbbf8db74278_800x.jpg?v=1646205009"
                  alt="teams"
                />
                <div className="contact-team-box">
                  <FaFacebook className="contact-team" />
                  <BsTwitter className="contact-team" />
                  <FaPinterest className="contact-team" />
                  <TfiYoutube className="contact-team" />
                </div>
                <h4>Fredrick Maldonado</h4>
                <span>Marketing Manager</span>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-12">
              <div className="our-teams-card">
                <img
                  src="https://cdn.shopify.com/s/files/1/0436/0932/5722/files/team-2_e1bdad89-8e05-4195-b421-cbe0a25020fd_800x.jpg?v=1646205051"
                  alt="teams"
                />
                <div className="contact-team-box">
                  <FaFacebook className="contact-team" />
                  <BsTwitter className="contact-team" />
                  <FaPinterest className="contact-team" />
                  <TfiYoutube className="contact-team" />
                </div>
                <h4>Kristina Watson</h4>
                <span>Customer Support</span>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-12">
              <div className="our-teams-card">
                <img
                  src="https://cdn.shopify.com/s/files/1/0436/0932/5722/files/team-1_a80bb1d6-ccbe-4f4a-bb03-72eaac8efc6b_800x.jpg?v=1646205096"
                  alt="teams"
                />
                <div className="contact-team-box">
                  <FaFacebook className="contact-team" />
                  <BsTwitter className="contact-team" />
                  <FaPinterest className="contact-team" />
                  <TfiYoutube className="contact-team" />
                </div>
                <h4>Dwight Clark</h4>
                <span>Sales Executive</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeams;
