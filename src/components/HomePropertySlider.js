import React from 'react'
import { propertyData } from './PropertyData'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'
import { Button } from '@material-tailwind/react';
import { FaBed, FaBath } from "react-icons/fa";
import { useNavigate } from 'react-router';

const HomePropertySlider = () => {

  const nav = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplaySpeed: 3000,
    autoplay: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },

    ]

  };

  return (
    <div>

      <Slider {...settings} className='ml-[50px] msm:ml-0 msm:mr-2'>

        {propertyData.map((data) => {
          return <div className=' mt-12 h-[525px] mmd:ml-8 mmd:h-[700px] msm:h-[520px] '>

            {/* Box */}


            <img className='h-[250px] w-[380px] rounded-sm object-cover mmd:w-[520px] mmd:h-[420px] msm:w-[85vw]
            msm:h-[250px]' src={data.img} alt="" />

            <div className='pt-3 ml-7 flex flex-col items-start space-y-4'>

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


              <Button className='mt-4 rounded-full bg-[#005555] w-[120px]' onClick={() => nav(`/`)}>See details</Button>

            </div>

          </div>



        })}


      </Slider>

    </div>


  )
}

export default HomePropertySlider
