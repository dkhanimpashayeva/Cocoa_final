import React from "react";
import "./Catagory.scss";
// import { accordionData } from "../FAQ/FaqAccordion/accordionData";
import Accordion from "../FAQ/FaqAccordion/Accordion";
import NewArrivals from "./NewArrivals";
import { Link } from 'react-router-dom';
const Catagory = () => {
  const catagoryData = [
    {
      title: "Milk Chocolate",
      content: <Link to='/product/63f8a7d4ac34e5283067f236'>Coco Cup Cake</Link>,
    },
    {
      title: "Semi-Sweet Chocolate",
      content: <Link to='/product/63f8a68cac34e5283067f1d2'>Cream Cake</Link>,
    },
    {
      title: "Dark Chocolate",
      content: <Link to='/product/63f8a3baac34e5283067f19f'>Gola Chocolate</Link>,
    },
    {
      title: "Magic Fudge",
      content: <Link to='/product/63f8a72cac34e5283067f1e5'>Creamy Choco</Link>,
    },
  ];

  return (
    <>
      <div className="catagory-wrapper">
        <div className="catagory-title">
          <h2>Category</h2>
          <hr />
        </div>
        <div className="catagory-accordion">
          <div className="accordion-catagory">
            {catagoryData.map(({ title, content }, index) => (
              <Accordion title={title} content={content} key={index} />
            ))}
          </div>
        </div>
        <NewArrivals />
      </div>
    </>
  );
};

export default Catagory;
