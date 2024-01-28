import React from 'react'
import { agentData } from '../Dummy/AgentData'
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const Agency = () => {
  return (
    <div className='  pt-[60px]'>
      <div className='bg-[#f7f7f9] py-[50px]  '>
        {/* TOPICS */}
        <div className='mx-auto mb-[40px] flex flex-col items-center text-center w-[546px] msm:w-[90vw]'>
          <h1 className='text-[32px] text-[#13263b]  font-medium mb-[24px]'>Our Agents</h1>
          <p className='text-sm text-gray-700 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam nobis voluptatum rerum velit, totam officiis doloremque odit non placeat vero?</p>
        </div>

        {/* Agents */}

        <div className='pl-[125px] pt-[60px] flex gap-16 mmd:grid mmd:grid-cols-2 mmd:pl-[40px] mmd:gap-6  msm:flex msm:flex-col msm:space-y-8 '>

          {agentData.map((data) => {
            return <div className='bg-white h-[300px] w-[325px] mmd:w-[235px] mmd:h-[350px] msm:w-[80vw]'>
              <div className='relative bottom-12 flex flex-col items-center gap-3 ' >

                <img className='h-[90px] w-[90px] rounded-full object-cover ' src={data.img} alt="" />

                <div className='text-center'>
                  <h1 className='text-[18px] font-[500]'>{data.name}</h1>
                  <p className='text-sm text-gray-700'>{data.job}</p>
                </div>

                <p className='w-[296px] mmd:w-[196px] text-center text-sm text-gray-700'>{data.desc}</p>

                <div className='py-[8px] flex justify-between gap-7'>

                  <p className='h-[40px] w-[40px] bg-[#13263b] rounded-full '><FaXTwitter className='text-white ml-3 mt-3 font-bold' /></p>
                  <p className='h-[40px] w-[40px] bg-[#13263b] rounded-full '><FaFacebookF className='text-white ml-3 mt-3 font-bold' /></p>
                  <p className='h-[40px] w-[40px] bg-[#13263b] rounded-full '><FaInstagram className='text-white ml-3 mt-3 font-bold' /></p>
                </div>
              </div>




            </div>


          })}

        </div>
      </div>


    </div>




  )
}

export default Agency
