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
    autoplaySpeed: 4000,
    autoplay: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <Button color='teal'>prev</Button>,
    nextArrow: <Button>Next</Button>,
  };

  return (
    <div>

      <Slider {...settings} className='ml-[50px]'>

        {propertyData.map((data) => {
          return <div className=' mt-12  '>

            <img className='h-[250px] w-[380px] rounded-sm object-cover' src={data.img} alt="" />

            <div className='pt-3 ml-5 flex flex-col items-start space-y-2'>
              <h1 className='mt-[12px] text-xl text-teal-900 font-semibold border border-b-2 border-b-teal-900 mr-[320px]'>{data.price}</h1>

              <h1 className='text-sm mt-[-2px]'>{data.name}</h1>
              <h1 className='text-2xl font-bold'>{data.location}</h1>
              <Button className='rounded-full bg-teal-900 w-30'>See details</Button>

            </div>

          </div>



        })}


      </Slider>

    </div>


  )
}

export default HomePropertySlider
