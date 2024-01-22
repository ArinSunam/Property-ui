import React from 'react'
import { GiFamilyHouse } from "react-icons/gi";
import { BsBuildings } from "react-icons/bs";
import { GiVikingLonghouse } from "react-icons/gi";
import { MdOutlineRealEstateAgent } from "react-icons/md";

const AboutCompo = () => {
  return (
    <div className='mt-[100px] py-3  '>

      {/* properties */}

      <div className='h-[340px] bg-[#e6e6f7] w-[100vw] flex py-3 pb-5 '>
        <div className='relative top-4 w-[250px] bg-white h-[270px] py-6 px-3 ml-[125px] text-center rounded'>
          <GiFamilyHouse className='m-auto text-6xl text-[#13263b]' />
          <p className='text-[#13263b] font-semibold pt-2'>Our Properties</p>
          <p className='text-sm  text-gray-800 font-medium py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores esse, adipisci </p>

          <p className='text-sm text-[#13263b]   underline leading-5 pb-[10px]  ' >Learn More</p>

        </div>

        {/* sale */}


        <div className='relative top-4 w-[250px] h-[270px] bg-white  py-6 px-3 ml-8 text-center rounded'>

          <BsBuildings className='m-auto text-6xl text-[#13263b]' />
          <p className='text-[#13263b] font-semibold pt-2'>Properties On sale</p>
          <p className='text-sm  text-gray-800 font-medium py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores esse, adipisci </p>

          <p className='text-sm text-[#13263b]   underline pb-[10px]  hover:mr-0 duration-1000' >Learn More</p>

        </div>

        {/* agents */}
        <div className='relative top-4 w-[250px] h-[270px] bg-white  py-6 px-3 ml-8 text-center rounded'>
          <MdOutlineRealEstateAgent className='m-auto text-6xl text-[#13263b]' />

          <p className='text-[#13263b] font-semibold pt-2'>Real Estate Agent</p>
          <p className='text-sm  text-gray-800 font-medium py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores esse, adipisci </p>

          <p className='text-sm text-[#13263b]   underline pb-[10px]  hover:mr-0 duration-1000' >Learn More</p>

        </div>


        {/* house on sale */}
        <div className='relative top-4 w-[250px] h-[270px] bg-white  py-6 px-3 ml-8 text-center rounded'>

          <GiVikingLonghouse className='m-auto text-6xl text-[#13263b]' />
          <p className='text-[#13263b] font-semibold pt-2'>House on Sale</p>
          <p className='text-sm  text-gray-800 font-medium py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores esse, adipisci </p>

          <p className='text-sm text-[#13263b]   underline pb-[10px]  hover:mr-0 duration-1000' >Learn More</p>

        </div>

      </div>


    </div>



  )
}

export default AboutCompo
