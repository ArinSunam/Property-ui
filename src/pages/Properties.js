import React from 'react'
import Header from '../components/Header'
import HomePropertySlider from '../components/HomePropertySlider'
import { Button } from '@material-tailwind/react';
import { FaBed, FaBath } from "react-icons/fa";
import { propertyData } from '../components/PropertyData';
import Footer from '../components/Footer';
import { motion } from "framer-motion"

const Properties = () => {

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
  }
  return (
    <div>

      {/* Header Section */}

      <div className="flex flex-col space-y-[80px] m-0 h-[70vh] w-[100vw] msm:h-[50vh] bg-cover" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url('https://images.unsplash.com/photo-1569428047118-ae9338065103?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
        <Header />

        <div className='space-y-4 flex flex-col items-center'>
          <motion.h1 className='text-white text-[40px] font-semibold mmd:text-[28px]' variants={textVariants} animate="animate" initial="initial">Properties</motion.h1>
          <motion.div variants={textVariants} animate="smallAnimate" initial="initial">
            <span className='text-white mmd:text-sm'>Home</span>
            <span className='text-gray-600 p-1 mmd:text-sm'>/    Properties</span>
          </motion.div>


        </div>


      </div>

      {/* Slider Section */}

      <h1 className='ml-[500px] mt-[150px] text-[32px] font-semibold text-[#13263b] mmd:ml-[200px] mmd:mt-[60px] msm:ml-6'> Featured Properties</h1>

      <HomePropertySlider />




      {/* Grid data section */}

      <div className='mt-[150px]  mmd:mt-[90px]'>
        <div className='grid mmd:grid grid-cols-3 mmd:grid-cols-2 ml-[50px]  msm:ml-[35px] msm:flex msm:flex-col  '>
          {propertyData.map((data) => {
            return <div className=' mt-12 mmd:mt-2 msm:mt-12 h-[480px] mmd:h-[440px] msm:h-[480px]'>

              {/* Box */}


              <img className='h-[250px]
              msm:h-[250px] mmd:h-[170px] w-[380px] mmd:w-[40vw] rounded-sm object-cover msm:w-[85vw]' src={data.img} alt="" />

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


        </div>


      </div>


      {/* PAGE COUNT */}

      <div className='my-[70px]  ml-[70px] msm:ml-9 flex items-center gap-[250px] msm:flex msm:flex-col msm:items-start msm:gap-5'>

        <p className='text-sm text-[#777]'>Pagination (1 of 10)</p>

        <div className='text-base font-semibold flex gap-[10px]'>

          <div className='bg-[#efefef] h-[40px] w-[40px] rounded-full'>
            <p className='ml-[15px] mt-[8px] text-[#13263b]  '>1</p>
          </div>

          <div className='bg-[#13263b] h-[40px] w-[40px] rounded-full'>
            <p className='ml-[15px] mt-[8px] text-[#efefef] '>2</p>
          </div>

          <div className='bg-[#efefef] h-[40px] w-[40px] rounded-full'>
            <p className='ml-[15px] mt-[8px] text-[#13263b]  '>3</p>
          </div>

          <div className='bg-[#efefef] h-[40px] w-[40px] rounded-full'>
            <p className='ml-[15px] mt-[8px] text-[#13263b]  '>4</p>
          </div>

          <div className='bg-[#efefef] h-[40px] w-[40px] rounded-full'>
            <p className='ml-[15px] mt-[8px] text-[#13263b]  '>5</p>
          </div>


        </div>
      </div>

      {/* FOOTER */}

      <Footer />






    </div >
  )
}

export default Properties
