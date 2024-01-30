import React, { useState } from 'react'
import { IoMdHome } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import { motion } from "framer-motion"

const ForUser = () => {
  const [counterOn, setCounterOn] = useState(false);
  const textVariants = {
    initial: {
      y: 200,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.5,
        staggerChildren: 0.1
      },
    },
    smallAnimate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.75,
        staggerChildren: 0.1
      },
    },
  }

  return (
    <div className='mt-[100px] '>
      <div className='bg-[#f7f7f9] py-[64px] px-[125px] msm:px-4'>

        {/* TOPICS */}

        <h1 className='font-[600] text-[32px] text-[#13263b]  text-center w-[380px] m-auto mb-4'>Let's find home that's perfect for you</h1>
        <p className='text-sm text-center text-[#777] w-[300px]  m-auto mb-4 '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti architecto alias consectetur </p>



        {/* GRID SECTION */}

        <div className='mt-12 grid grid-cols-3 gap-72 mmd:flex mmd:flex-col mmd:gap-12'>

          {/* lists */}
          <div className='col-start-1 col-end-2 flex flex-col mmd:order-2'>

            {/* item-1 */}

            <div className='group w-[370px] mb-9 grid grid-cols-4 gap-1  '>

              <div className=' bg-gray-200 h-[85px] w-[85px] rounded-full col-start-1 col-end-2 items-center group-hover:bg-gray-100 group-hover:border-[#13263b] border-2 transition-all duration-700'>
                <IoMdHome className='text-xl ml-[31px] mt-[33px] group-hover:text-[#13263b]  transition-all duration-700' />
              </div>

              <div className=' mt-3 col-start-2 col-end-5'>
                <h1 className='text-[18px] font-medium text-[#13263b] mb-2'>2M Properties</h1>
                <p className='text-sm text-[#777] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, eius sint tempora non architecto</p>

              </div>
            </div>
            {/* item-2 */}

            <div className='group w-[370px] mb-9 grid grid-cols-4 gap-1 '>

              <div className=' bg-gray-200 h-[85px] w-[85px] rounded-full col-start-1 col-end-2 items-center group-hover:bg-gray-100 group-hover:border-[#13263b] border-2  transition-all duration-700'>
                <FaUser className='text-xl ml-[31px] mt-[33px] group-hover:text-[#13263b]  transition-all duration-700' />

              </div>

              <div className=' mt-3 col-start-2 col-end-5'>
                <h1 className='text-[18px] font-medium text-[#13263b] mb-2'>Top Rated Agents</h1>
                <p className='text-sm text-[#777] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, eius sint tempora non architecto</p>

              </div>
            </div>

            {/* item-3 */}

            <div className='group w-[370px] grid grid-cols-4 gap-1  '>

              <div className=' bg-gray-200 h-[85px] w-[85px] rounded-full col-start-1 col-end-2 items-center group-hover:bg-gray-100 group-hover:border-[#13263b] border-2  transition-all duration-700'>
                <MdOutlineSecurity className='text-xl ml-[31px] mt-[33px] group-hover:text-[#13263b]  transition-all duration-1000' />

              </div>

              <div className=' mt-3 col-start-2 col-end-5'>
                <h1 className='text-[18px] font-medium text-[#13263b] mb-2'>Legit Properties</h1>
                <p className='text-sm text-gray-800 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, eius sint tempora non architecto</p>

              </div>
            </div>

          </div>

          {/* image */}

          <img src="https://images.unsplash.com/photo-1606402179428-a57976d71fa4?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='col-start-2 col-end-4 h-[512px] w-[641px] mmd:order-1 mmd:h-[400px] mmd:w-[610px]' />
        </div>


        {/* Numbers */}

        <ScrollTrigger
          onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
          <motion.div className='mt-[50px] flex flex-wrap mmd:grid mmd:grid-cols-2 mmd:space-x-4 msm:ml-9' variants={textVariants} whileInView="animate" initial="initial">

            {/* Data1 */}
            <div className='mr-[130px] flex flex-col items-center'>
              <h1 className='font-bold text-[40px] text-[#13263b] '>{counterOn && <CountUp start={1000}
                end={3981} duration={2} delay={0} />} </h1>
              <p className='text-sm text-[#777] '># Buy of properties</p>

            </div>

            {/* Data2 */}
            <div className='mr-[130px] flex flex-col items-center'>
              <h1 className='font-bold text-[40px] text-[#13263b] mmd:mr-0 '>{counterOn && <CountUp start={1000}
                end={2217} duration={2} delay={0} />} </h1>
              <p className='text-sm text-[#777] '># of sell properties</p>

            </div>

            {/* Data3 */}
            <div className='mr-[130px] flex flex-col items-center mmd:relative mmd:right-[70px]'>
              <h1 className='font-bold text-[40px] text-[#13263b] '>{counterOn && <CountUp start={1000}
                end={9812} duration={2} delay={0} />} </h1>
              <p className='text-sm text-[#777] '>#  of all properties</p>

            </div>

            {/* Data4 */}
            <div className='flex flex-col items-center'>
              <h1 className='font-bold text-[40px] text-[#13263b] '>{counterOn && <CountUp start={1000}
                end={7081} duration={2} delay={0} />} </h1>
              <p className='text-sm text-[#777] '># of agent</p>

            </div>

          </motion.div>


        </ScrollTrigger>



      </div>

    </div>




  )
}

export default ForUser
