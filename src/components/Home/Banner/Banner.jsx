import React from "react";
import "./Banner.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import img1 from '../../../assets/hero/LED_monitors_Web_banner.webp'
import img2 from '../../../assets/hero/1920-650.webp'
import img3 from '../../../assets/hero/Wall_charger_Data_Cables__web_banner.webp'

const Banner = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
      };

    return (
      <div className="hero-banner">
        <Slider {...settings}>
      <div  className="image-container">
      <img src={img1} alt="her0.png" />
    <button className="shop" >Shop Now</button>
      </div>
      <div className="image-container">
      <img src={img2} alt="her0.png" />
    <button className="shop" >Shop Now</button>
      </div>
      <div className="image-container">
      <img src={img3} alt="hero.png" />
      </div>
    </Slider>
      </div>
    );
};

export default Banner;
