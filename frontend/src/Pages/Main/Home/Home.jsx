import React, { useEffect, useState } from "react";
import Abouthero from "../../../Companents/Main/HomeCompanents/Abouthero";
import BestSellers from "../../../Companents/Main/HomeCompanents/BestSellers/BestSellers";
import CakesSweets from "../../../Companents/Main/HomeCompanents/CakesSweets/CakesSweets";
import Testimotionals from "../../../Companents/Main/HomeCompanents/Testimosionals/Testimotionals";
import VideoInfo from "../../../Companents/Main/HomeCompanents/VideoInfo/VideoInfo";
import OurGallery from "../../../Companents/Main/OurGallery/OurGallery";
import HeroSlider from "../../../../src/Companents/Main/HomeCompanents/HeroSlider/HeroSlider";
import ScrollToTop from "../../../Companents/ScrollToTop/ScrollToTop";
import SecondLoading from "../../../Companents/Loader/SecondLoading";
import MetaData from "../../../Companents/MetaData";

const Home = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <>
      {loading ? (
        <SecondLoading />
      ) : (
        <>
          <MetaData title="Home" />

          <HeroSlider />
          <Abouthero />
          <CakesSweets />
          <BestSellers />
          <VideoInfo />
          <Testimotionals />
          <OurGallery />
          <ScrollToTop />
        </>
      )}
    </>
  );
};

export default Home;
