import React from "react";
import "./Banner.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import img1 from '../../../assets/hero/1.webp'
import img2 from '../../../assets/hero/2.jpg'
import img3 from '../../../assets/hero/3.png'
import img4 from '../../../assets/hero/4.webp'
import img5 from '../../../assets/hero/5.png'
import img6 from '../../../assets/hero/6.jpg'
import img7 from '../../../assets/hero/7.jpg'
import img8 from '../../../assets/hero/8.jpg'

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
      <img src={img7} alt="her0.png" />
      </div>
      <div className="image-container">
      <img src={img2} alt="her0.png" />
      </div>
      <div className="image-container">
      <img src={img3} alt="hero.png" />
      </div>
      <div className="image-container">
      <img src={img4} alt="hero.png" />
      </div>
      <div className="image-container">
      <img src={img5} alt="hero.png" />
      </div>
      <div className="image-container">
      <img src={img6} alt="hero.png" />
      </div>
      <div className="image-container">
      <img src={img1} alt="hero.png" />
      </div>
      <div className="image-container">
      <img src={img8} alt="hero.png" />
      </div>
    </Slider>
      </div>
    );
};

export default Banner;
