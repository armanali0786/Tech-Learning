import React, { useState } from "react";
import "../../assets/css/slider.scss";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { NavLink } from "react-router-dom";

import slides from '../../data/SliderDb';

const getFirstNWords = (text, n) => {
  const words = text.split(" ");
  return words.slice(0, n).join(" ");
};

const removeHtmlTags = (html) => {
  var doc = new DOMParser().parseFromString(html, 'text/html');
  return doc.body.textContent || "";
};

const SlickSlider = () => {
    //   const [slides, setSlides] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="banner bg-slate-200">
      <div className="container">
        <div className="banner-slider">
            {
            slides.length > 0 && (
              <Carousel
                showThumbs={false}
                showStatus={false}
                autoPlay={true}
                infiniteLoop={true}
                interval={3000}
                transitionTime={500}
                showArrows={false}
                showIndicators={true}
                selectedItem={currentSlide}
                onChange={handleSlideChange}
                swipeable={true} // Enable cursor slide control
              >
                {slides.map((slide, index) => {
                  const numWordsToShow = slide.title.split(' ').length > 2 ? 10 : 20;
                  const descriptionText = removeHtmlTags(slide.description);
                  return (
                    <div className="banner-slide position-relative" key={index}>
                      <img src={slide.large_image} alt="slideImage" />
                      <div className="banner-details">
                        <h1 className="banner-title ">{slide.title}</h1>
                        <p className='banner_text'>{getFirstNWords(descriptionText, numWordsToShow)}....</p>
                        <div className="pt-4 pb-4">
                          <NavLink
                            className="banner-btn border-black"
                            to={`/course-list`}
                          >
                            View More
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Carousel>
            )}
           {slides.length > 0 && (
            <div className="dots">
              {slides.map((_, index) => (
                <div
                  key={index}
                  className={`dot ${index === currentSlide ? "active" : ""}`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SlickSlider;
