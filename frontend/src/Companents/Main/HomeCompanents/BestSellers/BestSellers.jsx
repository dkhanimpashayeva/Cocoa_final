import React, { useEffect } from "react";
import "./BestSellers.scss";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import ProductCard from "../../../Product/ProductCard";
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, getProduct } from "../../../../actions/productAction";
const BestSellers = () => {
  const alert=useAlert()
  const dispatch=useDispatch()
 const {loading,error,products,productsCount} = useSelector((state)=>state.products)
 
 useEffect(()=>{
   if(error){
     alert.error(error)
     dispatch(clearErrors())
   }
 dispatch(getProduct())
 },[dispatch,error,alert])
  return (
    <section className="best-sellers">
      <div className="main-container">
        <div className="best-sellers-title">
          <h2>Best Sellers</h2>
        </div>

        <div className="best-sellers-wrapper">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={100}
            slidesPerView={3}
            navigation
            breakpoints={{
              300: {
                // width: 576,
                slidesPerView: 1,
              },
              576: {
                // width: 576,
                slidesPerView: 2,
              },
              768: {
                // width: 768,
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
              },
            }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
         
            {products && products.map((product,index)=>(

<SwiperSlide key={product._id}>
<ProductCard product={product} />


</SwiperSlide>

))}
   
        
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
