import React from 'react'
import { propertyData } from './PropertyData'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'
import { Button } from '@material-tailwind/react';
import { FaBed, FaBath } from "react-icons/fa";

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
          return <div className=' mt-12 h-[525px]'>

            {/* Box */}


            <img className='h-[250px] w-[380px] rounded-sm object-cover' src={data.img} alt="" />

            <div className='pt-3 ml-5 flex flex-col items-start space-y-4'>

              <div >
                <h1 className='mt-[12px] text-xl text-[#005555] font-semibold border border-b-2 border-b-[#005555] leading-7 mr-[320px] mb-3'>{data.price}</h1>

                <h1 className='text-sm text-[#777] mt-[-2px]'>{data.name}</h1>

              </div>

              <h1 className='text-2xl font-bold'>{data.location}</h1>

              <div className=' flex gap-4'>
                <div className='flex gap-1'>
                  <FaBed className='text-[18px] text-gray-700 ' />
                  <p className='text-xs text-gray-700'> 2 beds</p>
                </div>

                <div className='flex gap-[6px]'>
                  <FaBath className='text-[18px] text-gray-700 ' />
                  <p className='text-xs text-gray-700'>2 baths</p>
                </div>
              </div>


              <Button className='mt-4 rounded-full bg-[#005555] w-[120px]'>See details</Button>

            </div>

          </div>



        })}


      </Slider>

    </div>


  )
}

export default HomePropertySlider
