import React, { useState } from "react";
import {Link} from 'react-router-dom'
const ImageSliderCompanent = () => {
  const imgs = [
    {
      id: 0,
      title: "Special Choco" ,
      titleUnder:"ForSpecial Occasions",
      thumbBtn: "Choose a COCA",

      value:
        "https://cdn.shopify.com/s/files/1/0436/0932/5722/files/slider-bg1_2000x_b5c75759-4ec5-43ea-bc05-201dfa6d1be3.jpg?v=1646113532",
    },
    {
      id: 1,
      title: "A life ",
      titleUnder:"full of celebration",

      thumbBtn: "Shop Now",

      value:
        "https://cdn.shopify.com/s/files/1/0436/0932/5722/files/slide2-bg_2000x_5f3c2ae8-f692-453d-b079-23effb1a2423.jpg?v=1646114014",
    },
    {
      id: 2,
      title: "Happiness ",
      titleUnder:"full of Delight",
      thumbBtn: "Shop Now",
      value:
        "https://cdn.shopify.com/s/files/1/0436/0932/5722/files/slide3-bg_2000x_5259e265-945f-4048-83a4-643c6e82e8ea.jpg?v=1646114155",
    },
  ];

  const [wordData, setWordData] = useState(imgs[0]);
  const handleClick = (index) => {
    console.log(index);
    const wordSlider = imgs[index];
    setWordData(wordSlider);
  };
  return (
    <div>
      <div className="main">
      <div className="thumb-gallery-wrapper">
                <h1>{wordData.title}
                <br />
                <span>{wordData.titleUnder}</span>
                </h1>

                <div className="thumb-gallery-button">
                  <Link to='/'>{wordData.thumbBtn}</Link>
                </div>
              </div>
        <img
          src={wordData.value}
         
          className="thumbail-original"
        />
   
        <div className="flex_row">
          {imgs.map((data, i) => (
            <div className="thumbnail" key={i}>
              <img
                className={wordData.id == i ? "clicked" : "image-thumbnail"}
                src={data.value}
                onClick={() => handleClick(i)}
                height="90vh"
                width="60%"
              />
         
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSliderCompanent;
