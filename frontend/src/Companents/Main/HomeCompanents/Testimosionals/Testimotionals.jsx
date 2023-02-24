import React from "react";
import "./Testimotionals.scss";

import { AiFillStar } from "react-icons/ai";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
const Testimotionals = () => {
  return (
    <>
      <section className="testimotionals">
        <div className="main-container">
          <div className="testimotionals-title">
            <h2> Client Testimonials</h2>
          </div>
  {/* <div className="row"> */}
  {/* <div className="col-xl-4 col-12">
        <div className="testimotionals-card">
            <div className="client-image">
              <img
                src="https://cdn.shopify.com/s/files/1/0436/0932/5722/files/testi02_200x200.png?v=1646644386"
                alt="client"
              />
            </div>
            <div className="client-comment">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A enim
                hic dolores exercitationem minus ab amet, sequi consequatur
                excepturi quisquam repellendus eveniet dolore, laboriosam porro
                iusto dicta laudantium! A, molestiae.
              </p>
            </div>
            <div className="client-about">
              <h5>Alexnder </h5>
              <span>Musician</span>
            </div>
            <div className="client-rating">
            <AiFillStar/>
             <AiFillStar/>
             <AiFillStar/>
             <AiFillStar/>
             <AiFillStar/>
            </div>
          </div>
        </div> */}
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
          slidesPerView: 2,
        },
        992:{
          slidesPerView: 3,

        }
      }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <div className="testimotionals-card">
            <div className="client-image">
              <img
                src="https://cdn.shopify.com/s/files/1/0436/0932/5722/files/testi02_200x200.png?v=1646644386"
                alt="client"
              />
            </div>
            <div className="client-comment">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A enim
                hic dolores exercitationem minus ab amet, sequi consequatur
                excepturi quisquam repellendus eveniet dolore, laboriosam porro
              </p>
            </div>
            <div className="client-about">
              <h5>Alexnder </h5>
              <span>Musician</span>
            </div>
            <div className="client-rating">
            <AiFillStar/>
             <AiFillStar/>
             <AiFillStar/>
             <AiFillStar/>
             <AiFillStar/>
            </div>
          </div>

      </SwiperSlide>
      <SwiperSlide>
      <div className="testimotionals-card">
            <div className="client-image">
              <img
                src="https://cdn.shopify.com/s/files/1/0436/0932/5722/files/testi02_200x200.png?v=1646644386"
                alt="client"
              />
            </div>
            <div className="client-comment">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A enim
                hic dolores exercitationem minus ab amet, sequi consequatur
                excepturi quisquam repellendus eveniet dolore, laboriosam porro
              </p>
            </div>
            <div className="client-about">
              <h5>Alexnder </h5>
              <span>Musician</span>
            </div>
            <div className="client-rating">
            <AiFillStar/>
             <AiFillStar/>
             <AiFillStar/>
             <AiFillStar/>
             <AiFillStar/>
            </div>
          </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="testimotionals-card">
            <div className="client-image">
              <img
                src="https://cdn.shopify.com/s/files/1/0436/0932/5722/files/testi01_200x200.png?v=1646644356"
                alt="client"
              />
            </div>
            <div className="client-comment">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A enim
                hic dolores exercitationem minus ab amet, sequi consequatur
                excepturi quisquam repellendus eveniet dolore, laboriosam porro
              </p>
            </div>
            <div className="client-about">
              <h5>Alexnder </h5>
              <span>Musician</span>
            </div>
            <div className="client-rating">
            <AiFillStar/>
             <AiFillStar/>
             <AiFillStar/>
             <AiFillStar/>
             <AiFillStar/>
            </div>
          </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="testimotionals-card">
            <div className="client-image">
              <img
                src="https://cdn.shopify.com/s/files/1/0436/0932/5722/files/testi02_200x200.png?v=1646644386"
                alt="client"
              />
            </div>
            <div className="client-comment">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A enim
                hic dolores exercitationem minus ab amet, sequi consequatur
                excepturi quisquam repellendus eveniet dolore, laboriosam porro
              </p>
            </div>
            <div className="client-about">
              <h5>Alexnder </h5>
              <span>Musician</span>
            </div>
            <div className="client-rating">
            <AiFillStar/>
             <AiFillStar/>
             <AiFillStar/>
             <AiFillStar/>
             <AiFillStar/>
            </div>
          </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="testimotionals-card">
            <div className="client-image">
              <img
                src="https://cdn.shopify.com/s/files/1/0436/0932/5722/files/testi05_200x200.png?v=1646644415"
                alt="client"
              />
            </div>
            <div className="client-comment">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A enim
                hic dolores exercitationem minus ab amet, sequi consequatur
                excepturi quisquam repellendus eveniet dolore, laboriosam porro
              </p>
            </div>
            <div className="client-about">
              <h5>Alexnder </h5>
              <span>Musician</span>
            </div>
            <div className="client-rating">
            <AiFillStar/>
             <AiFillStar/>
             <AiFillStar/>
             <AiFillStar/>
             <AiFillStar/>
            </div>
          </div>
      </SwiperSlide>
    </Swiper>
        
  </div>
   

        {/* </div> */}
      </section>
    </>
  );
};

export default Testimotionals;
