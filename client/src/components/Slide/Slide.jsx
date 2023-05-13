import React from "react";
import Slider from "infinite-react-carousel";
import "./Slide.scss";

function Slide({ children, arrowsScroll, slidesToShow }) {
  return (
    <>
      <div className="slide">
        <div className="container">
          <Slider
            arrowsScroll={arrowsScroll}
            slidesToShow={slidesToShow}
            dots
            className="slider"
          >
            {children}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Slide;
