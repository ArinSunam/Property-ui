import React from 'react'
import Header from '../components/Header'
import { FaLocationDot } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Button, Input } from "@material-tailwind/react";
import Footer from '../components/Footer';
import { IoCall } from "react-icons/io5";
import { motion } from "framer-motion"

const Contact = () => {

  const textVariants = {
    initial: {
      y: 200,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
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
    boxAnimate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.75,
        staggerChildren: 0.1
      },
    },

  }

  return (
    <div>
      {/* Header Section */}

      <div className="flex flex-col space-y-[80px] m-0 h-[70vh] w-[100vw] msm:h-[50vh] bg-cover" style={{ background: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1531971589569-0d9370cbe1e5?q=80&w=1481&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
        <Header />

        <div className='space-y-4 flex flex-col items-center'>
          <motion.h1 className='text-white text-[40px] font-semibold mmd:text-[28px]' variants={textVariants} animate="animate" initial="initial">Contact Us</motion.h1>
          <motion.div variants={textVariants} animate="smallAnimate" initial="initial">
            <span className='text-white mmd:text-sm'>Home</span>
            <span className='text-gray-600 p-1 mmd:text-sm'>/    Contact Us</span>
          </motion.div>
        </div>
      </div>

      {/* BODY */}

      <motion.div className='mt-[70px] ml-[40px] grid grid-cols-3 mmd:flex mmd:flex-col msm:ml-3 msm:mt-[30px]' variants={textVariants} animate="boxAnimate" initial="initial">
        <div className='flex flex-col '>

          {/* item-1 */}

          <div className='w-[370px] mb-9 grid grid-cols-5 place-items-center col-start-1 col-end-2  '>

            <div className='bg-[#00204a] h-[44px] w-[44px] rounded-full col-start-1 col-end-2 items-center relative left-10'>
              <FaLocationDot className='text-xl text-white ml-[12px] mt-[11px] ' />
            </div>

            <div className=' mt-3 col-start-2 col-end-6 place-items-start'>
              <h1 className='text-[18px] font-medium text-[#00204a] mb-2'>Location</h1>
              <p className='text-sm text-[#777] '>Baluwatar-4, Kathmandu, Nepal</p>

            </div>
          </div>


          {/* item-2 */}

          <div className='w-[370px] mb-9 grid grid-cols-5 place-items-center gap-3  '>

            <div className='bg-[#00204a] h-[44px] w-[44px] rounded-full col-start-1 col-end-2  relative left-12'>
              <FaRegClock className='text-xl text-white ml-[12px] mt-[11px] ' />
            </div>

            <div className=' mt-3 col-start-2 col-end-6 relative right-[52px]'>
              <h1 className='text-[18px] font-medium text-[#00204a] mb-2'>Open hours</h1>
              <div className='text-sm text-[#777] flex flex-col'>
                <p className=' '>Sunday-Friday:</p>
                <p className=' '>10am-5pm</p>
              </div>
            </div>
          </div>


          {/* item-3 */}

          <div className='w-[370px] mb-9 grid grid-cols-5 place-items-center  '>

            <div className='bg-[#00204a] h-[44px] w-[44px] rounded-full col-start-1 col-end-2 items-center relative left-10'>
              <MdEmail className='text-xl text-white ml-[12px] mt-[11px] ' />
            </div>

            <div className=' mt-3 col-start-2 col-end-6 relative right-[26px]'>
              <h1 className='text-[18px] font-medium text-[#00204a] mb-2'>Email</h1>
              <p className='text-sm text-[#777] '>arinsunam@gmail.com</p>

            </div>
          </div>


          {/* item-4 */}

          <div className='w-[370px] mb-9 grid grid-cols-5 place-items-center  '>

            <div className='bg-[#00204a] h-[44px] w-[44px] rounded-full col-start-1 col-end-2 items-center relative left-10'>
              <IoCall className='text-xl text-white ml-[12px] mt-[11px] ' />
            </div>

            <div className=' mt-3 col-start-2 col-end-6 relative right-[56px]'>
              <h1 className='text-[18px] font-medium text-[#00204a] mb-2'>Call:</h1>
              <p className='text-sm text-[#777] '>9876543210</p>

            </div>
          </div>

        </div>

        {/* Form */}

        <div className='col-start-2 col-end-4  flex flex-col space-y-5 pr-24 msm:pr-7 msm:ml-5'>
          <div className='flex justify-between gap-7 msm:gap-2'>
            <Input label='Your Name' size='lg' className='w-[326px] msm:w-[40vw]' />
            <Input label='Your Email' size='lg' className='w-[326px] msm:w-[40vw] msm:relative msm:right-7' />
          </div>


          <div className='space-y-5'>
            <Input label='Subject' size='lg' className='w-[692px] ' />
            <Input label='Message' className='w-[692px] py-36
             ' />
          </div>

          {/* BUTTON */}
          <Button className='bg-[#005555]  py-4  w-[12vw]  rounded-full mmd:mx-0 relative top-64 mmd:w-[27vw]'>Send Message</Button>

        </div>

      </motion.div>







      {/* FOOTER*/}

      <div className='mt-[88px] mmd:mt-[300px]'>
        <Footer />
      </div>

    </div>


  )
}

export default Contact
