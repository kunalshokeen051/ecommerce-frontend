import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Slider.scss'

import img2 from '../../assets/car2.png'
import img3 from '../../assets/car3.png'
import img4 from '../../assets/car4.png'

const Slider = ({animate}) => {
    return (
        <div className='Slider'>
            <Carousel id='carousel' transitionTime={500} autoFocus={true} autoPlay={true} infiniteLoop={true} showArrows={false} showIndicators={false} animationHandler={animate} showThumbs={false} showStatus={false} dynamicHeight={true}>
                <div>
                    <img src={img2} alt='images.jpg' />
                </div>
                <div>
                    <img src={img3} alt='images.jpg' />
                </div>
                <div>
                    <img src={img4} alt='images.jpg' />
                </div>
            </Carousel>
        </div>
    )
}

export default Slider