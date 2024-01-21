import React from 'react'
import { propertyData } from './PropertyData'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'
import { Button } from '@material-tailwind/react';

const HomePropertySlider = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <Button>prev</Button>,
    nextArrow: <Button>Next</Button>,
  };

  return (
    <div>

      <Slider {...settings} >

        {propertyData.map((data) => {
          return <div className=' mt-9 flex-col items-center  '>

            <img className='h-[250px] w-[350px]' src={data.img} alt="" />

            <h1 className='mt-[12px] text-xl text-teal-900 font-semibold border border-b-2'>{data.price}</h1>

            <h1>{data.name}</h1>

          </div>



        })}


      </Slider>

    </div>


  )
}

export default HomePropertySlider
