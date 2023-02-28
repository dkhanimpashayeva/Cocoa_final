import React from 'react'
import ReactStars from 'react-rating-stars-component';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from './../../Product/ProductCard';
import { useAlert } from 'react-alert';
import { useEffect } from 'react';
import { clearErrors } from './../../../actions/userActions';
import { getProduct } from './../../../actions/productAction';
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from 'swiper/react';
const NewArrivals = ({product}) => {
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
    <div className="new-arrival">
        <h2>New Arrivals</h2>
        <hr />
     <div className="new-arrival-container">
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
                slidesPerView: 1,
              },
              768: {
                // width: 768,
                slidesPerView: 1,
              },
              992: {
                slidesPerView: 1,
              },
            }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
         
            {products && products.map(product=>(

<SwiperSlide>
<ProductCard product={product}/>


</SwiperSlide>

))}
   
        
          </Swiper>
     </div>
     
    </div>
  )
}

export default NewArrivals