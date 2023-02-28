import React from "react";
import "./Catagory.scss";
// import { accordionData } from "../FAQ/FaqAccordion/accordionData";
import Accordion from "../FAQ/FaqAccordion/Accordion";
import NewArrivals from "./NewArrivals";
const Catagory = () => {
  const catagoryData = [
    {
      title: "Milk Chocolate",
      content: `Choco Brownie`,
    },
    {
      title: "Semi-Sweet Chocolate",
      content: `Choco Brownie`,
    },
    {
      title: "Dark Chocolate",
      content: `Choco Cream Cake`,
    },
    {
      title: "Magic Fudge",
      content: `Ainer Chocolate`,
    },
  ];

  return (
  <>
    <div className="catagory-wrapper">
      <div className="catagory-title">
        <h2>Category
</h2>
<hr />
      </div>
      <div className="catagory-accordion">
        <div className="accordion-catagory">
          {catagoryData.map(({ title, content },index) => (
            <Accordion title={title} content={content}  key={index}/>
          ))}
        </div>
      </div>
      <NewArrivals/>
      {/* <img src="https://cdn.shopify.com/s/files/1/0436/0932/5722/files/slide3-bg-responsive_767x_59ec5563-7baf-4399-9739-9b46f88361ba.jpg?v=1646114192"/> */}
    </div>

  </>
  );
};

export default Catagory;
