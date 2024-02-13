"use client";
import React, { useEffect, useRef, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "./styles.scss";
import { useSelector } from "react-redux";

function TrendingNewsCarousel() {
  const theme = useSelector((state) => state.theme);

  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    // progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  const images = [
    {
      imgSrc:
        "https://auto.mahindra.com//-/media/project/mahindra/dotcom/mahindra/in-news---home/pr/neo-ambulance/bolero-neo-ambulancefor-website.jpg?rev=cab8637b0f6f4a80a53cd2a23006e0d6&extension=webp",
    },
    {
      imgSrc:
        "https://auto.mahindra.com/-/media/project/mahindra/dotcom/mahindra/tech-that-spoil/web-banner-master.jpg?rev=1c658c8dd1d0444c814a626e86b1921a&extension=webp",
    },
    {
      imgSrc:
        "https://auto.mahindra.com/-/media/project/mahindra/dotcom/mahindra/all-vehicles/pick-ups/maxx-hd-new/1920x829.jpg?rev=39eddff21de044e3bbef2cc30ec38103&extension=webp",
    },
    {
      imgSrc:
        "https://auto.mahindra.com/-/media/project/mahindra/dotcom/mahindra/all-vehicles/suv/teaser-banner/web-1920x829-new.jpg?rev=20bc8b8198b34f79b689e8110b59ddb4&extension=webp",
    },
    {
      imgSrc:
        "https://auto.mahindra.com/-/media/project/mahindra/dotcom/mahindra/amc-hero/cng-petrol/desktop.jpg?rev=c4cf3de2f8a04924a9883cb211d6e119&extension=webp",
    },
    {
      imgSrc:
        "https://auto.mahindra.com/-/media/project/mahindra/dotcom/mahindra/dark-theme-mahindra-images/thar_optimized/desktop/brand-page-banner-desktop_1920x829---copy-new.jpg?rev=7074046a9b124c33853be61e3ce52021&extension=webp",
    },
    {
      imgSrc:
        "https://auto.mahindra.com/-/media/project/mahindra/dotcom/mahindra/amc-hero/scorpio-n---9-lakh/desktop.png?rev=c6c08b8bcc444836b709896fcfd25d5c&extension=webp",
    },
  ];
  return (
    <div className="trendingNewsCarousel">
      <Swiper
        spaceBetween={10}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination]}
        // modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
        style={{
          backgroundColor: theme === "light" ? "#F2F2F2" : "#1C1C1C",
        }}
      >
        {images.map((ele, index) => (
          <SwiperSlide key={index}>
            <img src={ele.imgSrc && ele.imgSrc} alt="Trending-news" />
          </SwiperSlide>
        ))}

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle} fill="none">
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          {/* <span ref={progressContent}></span> */}
        </div>
      </Swiper>
    </div>
  );
}

export default TrendingNewsCarousel;
