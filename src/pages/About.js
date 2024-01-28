import React from 'react'
import Header from '../components/Header'
import { IoMdHome } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import { agentData } from '../Dummy/AgentData'
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import Footer from '../components/Footer';
import { motion } from "framer-motion"

const About = () => {

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
      {/* HEADER */}
      <div className="flex flex-col space-y-[80px] m-0 h-[70vh] w-[100vw]  bg-cover" style={{
        background: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1555169145-b09a196d2c31?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",

      }}>
        <Header />

        <div className='space-y-4 flex flex-col items-center'>
          <motion.h1 className='text-white text-[40px] font-semibold' variants={textVariants} animate="animate" initial="initial">About</motion.h1>
          <motion.div variants={textVariants} animate="smallAnimate" initial="initial">
            <span className='text-white'>Home</span>
            <span className='text-gray-600 p-1'>/    About</span>
          </motion.div>
        </div>
      </div>

      <div className='bg-[#f7f7f9] py-[64px] px-[125px]'>

        {/* TOPICS */}

        <h1 className='text-3xl text-[#13263b] pb-5'>About Us</h1>

        <div className='text-start text-sm text-[#777] grid grid-cols-2 gap-5 mmd:flex mmd:flex-col'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, natus? Doloremque eum eaque tempora vel nobis nisi quam similique deleniti?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, natus? Doloremque eum eaque tempora vel nobis nisi quam similique deleniti?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, natus? Doloremque eum eaque tempora vel nobis nisi quam similique deleniti?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, natus? Doloremque eum eaque tempora vel nobis nisi quam similique deleniti?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, natus? Doloremque eum eaque tempora vel nobis nisi quam similique deleniti?</p>
        </div>

        {/* GRID SECTION */}

        <div className='mt-16 grid grid-cols-3 gap-72'>

          {/* lists */}
          <div className='col-start-1 col-end-2 flex flex-col'>

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

              <div className=' bg-gray-200 h-[85px] w-[85px] rounded-full col-start-1 col-end-2 items-center group-hover:bg-gray-100 group-hover:border-[#13263b] border-2 transition-all duration-700'>
                <FaUser className='text-xl ml-[31px] mt-[33px] group-hover:text-[#13263b]  transition-all duration-700' />

              </div>

              <div className=' mt-3 col-start-2 col-end-5'>
                <h1 className='text-[18px] font-medium text-[#13263b] mb-2'>Top Rated Agents</h1>
                <p className='text-sm text-[#777] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, eius sint tempora non architecto</p>

              </div>
            </div>

            {/* item-3 */}

            <div className='group w-[370px] grid grid-cols-4 gap-1 '>

              <div className=' bg-gray-200 h-[85px] w-[85px] rounded-full col-start-1 col-end-2 items-center group-hover:bg-gray-100 group-hover:border-[#13263b] border-2 transition-all duration-700'>
                <MdOutlineSecurity className='text-xl ml-[31px] mt-[33px] group-hover:text-[#13263b]  transition-all duration-700' />

              </div>

              <div className=' mt-3 col-start-2 col-end-5'>
                <h1 className='text-[18px] font-medium text-[#13263b] mb-2'>Legit Properties</h1>
                <p className='text-sm text-[#777] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, eius sint tempora non architecto</p>

              </div>
            </div>

          </div>

          {/* image */}

          <img src="https://images.unsplash.com/photo-1606402179428-a57976d71fa4?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='col-start-2 col-end-4 h-[512px] w-[641px]' />
        </div>

        {/* GRID SECTION II*/}

        <div className='mt-16 grid grid-cols-3 gap-2'>

          {/* image */}

          <img src="https://images.unsplash.com/photo-1628744876497-eb30460be9f6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='col-start-1 col-end-3 h-[512px] w-[641px]' />

          {/* lists */}
          <div className='col-start-3 col-end-4 flex flex-col'>

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

              <div className=' bg-gray-200 h-[85px] w-[85px] rounded-full col-start-1 col-end-2 items-center group-hover:bg-gray-100 group-hover:border-[#13263b] border-2 transition-all duration-700'>
                <FaUser className='text-xl ml-[31px] mt-[33px] group-hover:text-[#13263b]  transition-all duration-700' />

              </div>

              <div className=' mt-3 col-start-2 col-end-5'>
                <h1 className='text-[18px] font-medium text-[#13263b] mb-2'>Top Rated Agents</h1>
                <p className='text-sm text-[#777] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, eius sint tempora non architecto</p>

              </div>
            </div>

            {/* item-3 */}

            <div className='group w-[370px] grid grid-cols-4 gap-1 '>

              <div className=' bg-gray-200 h-[85px] w-[85px] rounded-full col-start-1 col-end-2 items-center group-hover:bg-gray-100 group-hover:border-[#13263b] border-2 transition-all duration-700'>
                <MdOutlineSecurity className='text-xl ml-[31px] mt-[33px] group-hover:text-[#13263b]  transition-all duration-700' />

              </div>

              <div className=' mt-3 col-start-2 col-end-5'>
                <h1 className='text-[18px] font-medium text-[#13263b] mb-2'>Legit Properties</h1>
                <p className='text-sm text-[#777] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, eius sint tempora non architecto</p>

              </div>
            </div>

          </div>


        </div>


        {/* PHOTO FRAME */}

        <div className='mt-[100px] flex gap-8'>
          <img src="https://images.unsplash.com/photo-1544984243-ec57ea16fe25?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='h-[356px] w-[356px] object-cover' />

          <img src="https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='h-[356px] w-[356px] object-cover relative top-12' />

          <img src="https://images.unsplash.com/photo-1531971589569-0d9370cbe1e5?q=80&w=1481&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='h-[356px] w-[356px] object-cover' />

        </div>




        {/* Numbers */}

        <div className='mt-[100px] flex'>

          {/* Data1 */}
          <div className='mr-[130px] flex flex-col items-center'>
            <h1 className='font-bold text-[40px] text-[#13263b] '>3,981</h1>
            <p className='text-sm text-[#777] '># Buy of properties</p>

          </div>

          {/* Data2 */}
          <div className='mr-[130px] flex flex-col items-center'>
            <h1 className='font-bold text-[40px] text-[#13263b] '>2,217</h1>
            <p className='text-sm text-[#777] '># of sell properties</p>

          </div>

          {/* Data3 */}
          <div className='mr-[130px] flex flex-col items-center'>
            <h1 className='font-bold text-[40px] text-[#13263b] '>9,534</h1>
            <p className='text-sm text-[#777] '>#  of all properties</p>

          </div>

          {/* Data4 */}
          <div className='flex flex-col items-center'>
            <h1 className='font-bold text-[40px] text-[#13263b] '>7,081</h1>
            <p className='text-sm text-[#777] '># of agent</p>

          </div>

        </div>


      </div>

      {/* TEAM */}

      <div className='bg-[#f2f2f3] py-[50px]  '>
        {/* TOPICS */}

        <h1 className='ml-[175px] text-[32px] text-[#13263b]  font-medium py-[40px]'>The Team</h1>



        {/* Agents */}

        <div className='pl-[125px] pt-[60px] flex gap-16'>

          {agentData.map((data) => {
            return <div className='bg-white h-[300px] w-[325px] '>
              <div className='relative bottom-12 flex flex-col items-center gap-3 ' >

                <img className='h-[90px] w-[90px] rounded-full object-cover ' src={data.img} alt="" />

                <div className='text-center'>
                  <h1 className='text-[18px] font-[500]'>{data.name}</h1>
                  <p className='text-sm text-gray-700'>{data.job}</p>
                </div>

                <p className='w-[296px] text-center text-sm text-gray-700'>{data.desc}</p>

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

      {/* FOOTER */}

      <Footer />


    </div>
  )
}

export default About
