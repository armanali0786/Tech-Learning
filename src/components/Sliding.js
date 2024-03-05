import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../assets/css/sliding.css'
export default function Carousel() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };

    return (
        <Slider {...settings} >
            <div>
                <h3>Web Development</h3>
            </div>
            <div>
                <h3>IT Certifications</h3>
            </div>
            <div>
                <h3>Leadership</h3>
            </div>
            <div>
                <h3>Data Science</h3>
            </div>
            <div>
                <h3>Communication</h3>
            </div>
        </Slider>
    );
}
