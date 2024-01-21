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

      <Slider {...settings} className='ml-[30px]'>

        {propertyData.map((data) => {
          return <div className=' mt-9 flex-col items-center space-y-4 '>

            <img className='h-[250px] w-[350px]' src={data.img} alt="" />


            <h1 className='mt-[12px] text-xl text-teal-900 font-semibold border border-b-2 border-b-teal-900 mr-[320px]'>{data.price}</h1>

            <h1 className='text-sm mt-[-2px]'>{data.name}</h1>
            <h1 className='text-2xl font-bold'>{data.location}</h1>
            <Button className='rounded-full bg-teal-900'>See details</Button>

          </div>



        })}


      </Slider>

    </div>


  )
}

export default HomePropertySlider
