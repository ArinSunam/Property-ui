import React from 'react'
import Slider from "react-slick"
import "../Styles/HomeSlider.css"

const HomeMainSlider = () => {

  const settings = {
    fade: false,
    speed: 1000,
    autoplaySpeed: 5000,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };

  return (
    <div>

      <Slider {...settings} className="w-[100%] md:h-[100vh] h-[100vh] overflow-hidden ">
        <div className="slider__item-01 h-[100vh]">
        </div>

        <div className="slider__item-02  md:h-[100vh] h-[100vh]">
        </div>

        <div className="slider__item-03   md:h-[100vh] h-[100vh]">

        </div>

      </Slider>

    </div>
  )
}

export default HomeMainSlider



