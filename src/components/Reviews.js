import React, { useState } from 'react'
import { reviewData } from '../Dummy/ReviewData';
import Slider from 'react-slick';

const Reviews = () => {

  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplaySpeed: 4000,
    autoplay: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
  }

  return (
    <div className='pt-[60px] ml-[125px]'>
      <h1 className='text-3xl text-[#13263b] mb-16'>Customer Says</h1>


      <Slider {...settings}>
        {reviewData.map((data) => {
          return <div className=' '>
            <div className='h-[450px] w-[270px]'>


              <div className='flex flex-col items-baseline space-y-6'>

                <img className='h-[150px] w-[150px] rounded-full object-cover' src={data.img} alt="" />
                <div className='mt-2'>
                  <p className='text-yellow-700  '>{data.rating}</p>
                  <p className='text-xl text-[#13263b]'>{data.name}</p>
                </div>


                <p >{data.review}</p>
                <p>{data.job}</p>
              </div>

            </div>



          </div>

        })}

      </Slider>

    </div>

  )
}

export default Reviews
