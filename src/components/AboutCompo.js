import React from 'react'
import { GiFamilyHouse } from "react-icons/gi";
import { BsBuildings } from "react-icons/bs";
import { GiVikingLonghouse } from "react-icons/gi";
import { MdOutlineRealEstateAgent } from "react-icons/md";
import { motion } from "framer-motion";

const AboutCompo = () => {

  const textVariants = {
    initial: {
      y: 200,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.75,
        staggerChildren: 0.1
      },
    },
  }
  return (
    <div className='mt-[100px] py-3  '>

      {/* properties */}

      <motion.div className='h-[340px] bg-[#e6e6f7] w-[100vw] flex py-3 pb-5 mmd:h-[650px] mmd:grid mmd:grid-cols-2 mmd:pb-7  mmd:px-10 msm:gap-2' variants={textVariants} whileInView="animate" initial="initial">
        <div className='relative top-4 w-[250px] msm:w-[45vw] bg-white h-[280px] py-6 px-3 ml-[125px] text-center rounded mmd:col-span-1 mmd:ml-8 msm:ml-0  msm:relative msm:right-6'>
          <GiFamilyHouse className='m-auto text-6xl text-[#13263b]' />
          <p className='text-[#13263b] font-semibold pt-2'>Our Properties</p>
          <p className='text-sm  text-gray-800 font-medium py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores esse, adipisci </p>

          <p className='text-sm text-[#13263b]   underline leading-5 pb-[10px]  ' >Learn More</p>

        </div>

        {/* sale */}


        <div className='relative top-4 w-[250px] msm:w-[45vw] h-[280px] msm:h-[300px] bg-white  py-6 px-3 ml-8 text-center rounded mmd:col-span-1 msm:ml-4 msm:relative msm:right-2'>

          <BsBuildings className='m-auto text-6xl text-[#13263b]' />
          <p className='text-[#13263b] font-semibold pt-2'>Properties On sale</p>
          <p className='text-sm  text-gray-800 font-medium py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores esse, adipisci </p>

          <p className='text-sm text-[#13263b]   underline pb-[10px]  hover:mr-0 duration-1000' >Learn More</p>

        </div>

        {/* agents */}
        <div className='relative top-4 w-[250px] msm:w-[45vw] bg-white h-[280px] py-6 px-3 ml-[125px] text-center rounded mmd:col-span-1 mmd:ml-8 msm:ml-0  msm:relative msm:right-6 '>
          <MdOutlineRealEstateAgent className='m-auto text-6xl text-[#13263b]' />

          <p className='text-[#13263b] font-semibold pt-2'>Real Estate Agent</p>
          <p className='text-sm  text-gray-800 font-medium py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores esse, adipisci </p>

          <p className='text-sm text-[#13263b]   underline pb-[10px]  hover:mr-0 duration-1000' >Learn More</p>

        </div>


        {/* house on sale */}
        <div className='relative top-4 w-[250px] msm:w-[45vw] h-[280px] bg-white  py-6 px-3 ml-8 text-center rounded mmd:col-span-1 msm:ml-4 msm:relative msm:right-2'>

          <GiVikingLonghouse className='m-auto text-6xl text-[#13263b]' />
          <p className='text-[#13263b] font-semibold pt-2'>House on Sale</p>
          <p className='text-sm  text-gray-800 font-medium py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores esse, adipisci </p>

          <p className='text-sm text-[#13263b]   underline pb-[10px]  hover:mr-0 duration-1000' >Learn More</p>

        </div>

      </motion.div>


    </div>



  )
}

export default AboutCompo
