// Slider.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './slider.css'; // Import the custom CSS file
import {imageSlide} from '../../Assets/dataProduct'
const SliderComponent = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true
  };

  return (
    <div className="slider-container">
      <Slider {...settings} className='slider-container'>
        {imageSlide.map((images, index) => (
          <div key={index} className='contentImage'>
            <img src={images.image} alt={`images ${index}`} className="slider-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
