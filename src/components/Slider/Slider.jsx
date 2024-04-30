import { useEffect, useState } from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "animate.css";


const Slider = ({subCategories}) => {

    console.log(subCategories);
    
  
  return (
    <div className="mt-20 mb-20">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
      {
        subCategories.map((item)=>(
            <SwiperSlide key={item._id} >
    {({ isActive }) => (
      <div className="h-min bg-gradient-to-t from-slate-700 to-transparent">{isActive ? <div className="h-full grid grid-cols-1 md:grid-cols-2 ">
      <div className="order-last md:order-last flex flex-col gap-6 items-center justify-center p-8">
        <h2 className="text-2xl  text-wrap md:text-3xl lg:text-6xl font-bold animate__animated animate__slideInRight lg:animate__delay-1s">{item.subcategory_name}</h2>
        
        <Link to={`/itemsofsubcategory/${item.subcategory_name}`}>
                    <button className="btn bg-transparent text-white text-wrap lg:text-2xl font-semibold animate__animated animate__slideInUp animate__delay-1s">Explore</button>
        </Link>
      </div>
      <div className="h-full">
        <img src={item.image} alt="" className="w-full h-full" />
      </div>
</div> : ''}</div>
    )}
  </SwiperSlide>
        ))
      }
  
</Swiper>
    </div>
  );
};

export default Slider;
